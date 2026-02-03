var Maintain_default = {
  color: true,
  format: "esm",
  logLevel: "debug",
  metafile: true,
  minify: false,
  outdir: "Target",
  platform: "node",
  target: "esnext",
  tsconfig: "tsconfig.json",
  write: true,
  legalComments: "inline",
  bundle: false,
  assetNames: "Asset/[name]-[hash]",
  sourcemap: true,
  drop: ["debugger"],
  ignoreAnnotations: false,
  keepNames: true,
  plugins: [],
  define: {
    "process.env.VERSION_CLOUDFLARE_WRANGLER_ACTION": JSON.stringify(
      "v3.14.1"
    ),
    "process.env.VERSION_ACTIONS_SETUP_NODE": JSON.stringify(
      "v6.2.0"
    ),
    "process.env.VERSION_ACTIONS_UPLOAD_ARTIFACT": JSON.stringify(
      "v6.0.0"
    ),
    "process.env.VERSION_ACTIONS_CACHE": JSON.stringify(
      "v5.0.3"
    ),
    "process.env.VERSION_ACTIONS_RS_CARGO": JSON.stringify(
      "v1.0.3"
    )
  }
};
export {
  Maintain_default as default
};
//# sourceMappingURL=Maintain.js.map
