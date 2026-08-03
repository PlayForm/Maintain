import type { BuildOptions } from "esbuild";

export default {
	color: true,
	format: "esm",
	logLevel: "debug",
	metafile: true,
	minify: true,
	outdir: "Target",
	platform: "node",
	target: "esnext",
	tsconfig: "tsconfig.json",
	write: true,
	legalComments: "none",
	bundle: false,
	assetNames: "Asset/[name]-[hash]",
	sourcemap: false,
	drop: ["debugger"],
	ignoreAnnotations: true,
	keepNames: false,
	plugins: [],
	define: {
		"process.env.VERSION_CLOUDFLARE_WRANGLER_ACTION": JSON.stringify(
			process.env["VERSION_CLOUDFLARE_WRANGLER_ACTION"],
		),
		"process.env.VERSION_CLOUDFLARE_WRANGLER_ACTION_TAG": JSON.stringify(
			process.env["VERSION_CLOUDFLARE_WRANGLER_ACTION_TAG"],
		),
		"process.env.VERSION_ACTIONS_SETUP_NODE": JSON.stringify(
			process.env["VERSION_ACTIONS_SETUP_NODE"],
		),
		"process.env.VERSION_ACTIONS_SETUP_NODE_TAG": JSON.stringify(
			process.env["VERSION_ACTIONS_SETUP_NODE_TAG"],
		),
		"process.env.VERSION_ACTIONS_UPLOAD_ARTIFACT": JSON.stringify(
			process.env["VERSION_ACTIONS_UPLOAD_ARTIFACT"],
		),
		"process.env.VERSION_ACTIONS_UPLOAD_ARTIFACT_TAG": JSON.stringify(
			process.env["VERSION_ACTIONS_UPLOAD_ARTIFACT_TAG"],
		),
		"process.env.VERSION_ACTIONS_CACHE": JSON.stringify(
			process.env["VERSION_ACTIONS_CACHE"],
		),
		"process.env.VERSION_ACTIONS_CACHE_TAG": JSON.stringify(
			process.env["VERSION_ACTIONS_CACHE_TAG"],
		),
		"process.env.VERSION_ACTIONS_RS_CARGO": JSON.stringify(
			process.env["VERSION_ACTIONS_RS_CARGO"],
		),
		"process.env.VERSION_ACTIONS_RS_CARGO_TAG": JSON.stringify(
			process.env["VERSION_ACTIONS_RS_CARGO_TAG"],
		),
	},
} satisfies BuildOptions;
