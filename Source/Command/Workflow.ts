/**
 * @module Workflow
 *
 */
/**
 * Trigger all workflow tasks, or - when `--Review` / `--Absorb` is passed -
 * review or absorb action versions in the repository the command is run from.
 *
 * @param Options - commander options
 *
 */
export default async (Options: { Absorb?: boolean; Review?: boolean } = {}) => {
	if (Options?.Review) {
		await (await import("@Command/Review.js")).default();

		return;
	}

	if (Options?.Absorb) {
		await (await import("@Command/Absorb.js")).default();

		return;
	}

	(await import("@Variable/Command.js")).default.forEach(
		(Command: { Type?: "Workflow"; Action: () => void }) =>
			Command.Type === "Workflow" ? Command.Action() : {},
	);
};
