var Target_default = {
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
      "ebbaa1584979971c8614a24965b4405ff95890e0"
    ),
    "process.env.VERSION_CLOUDFLARE_WRANGLER_ACTION_TAG": JSON.stringify(
      "v4.0.0"
    ),
    "process.env.VERSION_ACTIONS_SETUP_NODE": JSON.stringify(
      "820762786026740c76f36085b0efc47a31fe5020"
    ),
    "process.env.VERSION_ACTIONS_SETUP_NODE_TAG": JSON.stringify(
      "v7.0.0"
    ),
    "process.env.VERSION_ACTIONS_UPLOAD_ARTIFACT": JSON.stringify(
      "043fb46d1a93c77aae656e7c1c64a875d1fc6a0a"
    ),
    "process.env.VERSION_ACTIONS_UPLOAD_ARTIFACT_TAG": JSON.stringify(
      "v7.0.1"
    ),
    "process.env.VERSION_ACTIONS_CACHE": JSON.stringify(
      "55cc8345863c7cc4c66a329aec7e433d2d1c52a9"
    ),
    "process.env.VERSION_ACTIONS_CACHE_TAG": JSON.stringify(
      "v6.1.0"
    ),
    "process.env.VERSION_ACTIONS_RS_CARGO": JSON.stringify(
      "844f36862e911db73fe0815f00a4a2602c279505"
    ),
    "process.env.VERSION_ACTIONS_RS_CARGO_TAG": JSON.stringify(
      "v1.0.3"
    )
  }
};
export {
  Target_default as default
};
//# sourceMappingURL=Target.js.map
