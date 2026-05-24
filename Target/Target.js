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
      "v4.0.0"
    ),
    "process.env.VERSION_ACTIONS_SETUP_NODE": JSON.stringify(
      "v6.4.0"
    ),
    "process.env.VERSION_ACTIONS_UPLOAD_ARTIFACT": JSON.stringify(
      "v7.0.1"
    ),
    "process.env.VERSION_ACTIONS_CACHE": JSON.stringify(
      "v5.0.5"
    ),
    "process.env.VERSION_ACTIONS_RS_CARGO": JSON.stringify(
      "v1.0.3"
    )
  }
};
export {
  Target_default as default
};
//# sourceMappingURL=Target.js.map
