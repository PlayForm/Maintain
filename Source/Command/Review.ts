/**
 * @module Review
 *
 */
/**
 * Read-only, repository-agnostic review of the GitHub Actions references in
 * the repository the command is run from. Writes nothing - no Update.sh, no
 * template directory creation, no file changes. Reports:
 *
 * - every `uses:` action discovered under `.github/` with its current
 *   reference, the latest tag/SHA published on GitHub, and whether the pin is
 *   current, stale, or floating (unpinned tag);
 * - what the canonical `Workflow/` templates would apply in the `--Absorb`
 *   phase 2 (never downgrading);
 * - actions the templates do not cover (their `Update.sh` pin stands).
 *
 */
export default async () => {
	const { cwd } = await import("node:process");

	const { readdir, readFile } = await import("node:fs/promises");

	const { join, resolve, dirname } = await import("node:path");

	const { fileURLToPath } = await import("node:url");

	const { execFile } = await import("node:child_process");

	const Root = resolve(dirname(fileURLToPath(import.meta.url)), "../../");

	const Cwd = cwd();

	const GitHub = join(Cwd, ".github");

	const Workflows = join(GitHub, "workflows");

	const TemplateDirectory = join(Root, "Workflow");

	const Action = /uses:\s*([^\s"']+)/;

	const Yaml = async (Directory: string): Promise<string[]> => {
		try {
			const Entries = await readdir(Directory, { withFileTypes: true });

			return Entries.filter((Entry) => Entry.isFile() && /\.ya?ml$/i.test(Entry.name)).map(
				(Entry) => join(Directory, Entry.name),
			);
		} catch {
			return [];
		}
	};

	const Files = [...(await Yaml(GitHub)), ...(await Yaml(Workflows))];

	if (Files.length === 0) {
		console.log(`[Review] No YAML files found under ${GitHub} - nothing to review.`);

		return;
	}

	type Entry = {
		Name: string;
		Ref: string;
		Tag: string | undefined;
		Files: Set<string>;
	};

	const Entries = new Map<string, Entry>();

	for (const File of Files) {
		const Content = await readFile(File, "utf-8");

		for (const Line of Content.split("\n")) {
			const Match = Line.match(Action);

			if (Match === null) continue;

			const Value = (Match[1] ?? "").replace(/^["']|["']$/g, "");

			const [Name, Ref] = Value.split("@");

			if (
				Name === undefined ||
				Ref === undefined ||
				Name.startsWith(".") ||
				!Name.includes("/")
			) {
				continue;
			}

			const Tag = /#\s*([^\s]+)/.exec(Line)?.[1];

			const Entry = Entries.get(Name) ?? {
				Name,
				Ref,
				Tag,
				Files: new Set<string>(),
			};

			Entry.Files.add(File);

			Entries.set(Name, Entry);
		}
	}

	// Canonical template pins (what `--Absorb` phase 2 would apply).
	const Pins = new Map<string, { Ref: string; Tag: string | undefined }>();

	for (const File of await Yaml(TemplateDirectory)) {
		const Content = await readFile(File, "utf-8");

		for (const Line of Content.split("\n")) {
			const Match = Line.match(Action);

			if (Match === null) continue;

			const Value = (Match[1] ?? "").replace(/^["']|["']$/g, "");

			const [Name, Ref] = Value.split("@");

			if (
				Name === undefined ||
				Ref === undefined ||
				Name.startsWith(".") ||
				!Name.includes("/") ||
				Pins.has(Name)
			) {
				continue;
			}

			const Tag = /#\s*([^\s]+)/.exec(Line)?.[1];

			Pins.set(Name, { Ref, Tag });
		}
	}

	const Gh = (Endpoint: string): Promise<string> =>
		new Promise((Resolve, Reject) =>
			execFile(
				"gh",
				["api", Endpoint],
				{ maxBuffer: 16 * 1024 * 1024 },
				(Error, Stdout) => (Error ? Reject(Error) : Resolve(Stdout)),
			),
		);

	const CompareVersions = (A: string, B: string): number => {
		const Left = A.replace(/^v/, "").split(".").map(Number);

		const Right = B.replace(/^v/, "").split(".").map(Number);

		for (let Index = 0; Index < Math.max(Left.length, Right.length); Index += 1) {
			const X = Left[Index] ?? 0;

			const Y = Right[Index] ?? 0;

			if (X !== Y) return X > Y ? 1 : -1;
		}

		return 0;
	};

	// Latest semver tag + dereferenced commit SHA, mirroring Update.sh:
	// highest `v?N.N.N` tag wins, otherwise the first tag; annotated tags are
	// dereferenced to their commit.
	const Latest = async (
		RepoPart: string,
	): Promise<{ Tag: string; Sha: string } | undefined> => {
		try {
			const Tags = JSON.parse(await Gh(`repos/${RepoPart}/tags?per_page=100`)) as Array<{
				name: string;
				commit: { sha: string };
			}>;

			const Semver = Tags.map((Tag) => Tag.name).filter((Name) =>
				/^v?[0-9]+\.[0-9]+\.[0-9]+$/.test(Name),
			);

			const Tag = Semver.sort(CompareVersions).at(-1) ?? Tags[0]?.name;

			if (Tag === undefined) return undefined;

			const Ref = JSON.parse(await Gh(`repos/${RepoPart}/git/ref/tags/${Tag}`)) as {
				object: { type: string; sha: string };
			};

			const Sha =
				Ref.object.type === "tag"
					? (
							JSON.parse(await Gh(`repos/${RepoPart}/git/tags/${Ref.object.sha}`)) as {
								object: { sha: string };
							}
						).object.sha
					: Ref.object.sha;

			return { Tag, Sha };
		} catch {
			return undefined;
		}
	};

	let Current = 0;

	let Stale = 0;

	let Floating = 0;

	let Unknown = 0;

	console.log(`[Review] Repository: ${Cwd}`);

	console.log(`[Review] Files scanned: ${Files.length}`);

	console.log(`[Review] Actions: ${Entries.size}`);

	for (const Entry of [...Entries.values()].sort((A, B) =>
		A.Name.localeCompare(B.Name),
	)) {
		const [Owner, ...Rest] = Entry.Name.split("/");

		const RepoPart = `${Owner}/${Rest[0] ?? ""}`;

		const Pin = Pins.get(Entry.Name);

		const LatestPin = await Latest(RepoPart);

		let Status: string;

		if (LatestPin === undefined) {
			Status = "UNKNOWN (GitHub API unavailable)";

			Unknown += 1;
		} else if (/^[0-9a-f]{40}$/.test(Entry.Ref)) {
			if (Entry.Ref === LatestPin.Sha) {
				Status = "CURRENT";

				Current += 1;
			} else {
				Status = `STALE → @${LatestPin.Sha} # ${LatestPin.Tag}`;

				Stale += 1;
			}
		} else {
			Status = `FLOATING → @${LatestPin.Sha} # ${LatestPin.Tag}`;

			Floating += 1;
		}

		const WouldApply =
			Pin !== undefined &&
			!(Entry.Tag !== undefined && Pin.Tag !== undefined && CompareVersions(Entry.Tag, Pin.Tag) > 0);

		console.log(
			`[Review]   ${Entry.Name}@${Entry.Ref}${Entry.Tag === undefined ? "" : ` # ${Entry.Tag}`}  ${Status}`,
		);

		if (Pin !== undefined) {
			console.log(
				`[Review]     template: @${Pin.Ref} # ${Pin.Tag ?? ""} → ${WouldApply ? "would apply" : "kept (template older)"}`,
			);
		} else {
			console.log(`[Review]     template: none (Update.sh pin stands)`);
		}
	}

	console.log(
		`[Review] Summary: ${Entries.size} actions - ${Current} current, ${Stale} stale, ${Floating} floating, ${Unknown} unknown.`,
	);
};