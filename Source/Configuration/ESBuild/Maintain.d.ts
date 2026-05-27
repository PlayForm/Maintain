declare const _default: {
    color: true;
    format: "esm";
    logLevel: "debug";
    metafile: true;
    minify: false;
    outdir: string;
    platform: "node";
    target: string;
    tsconfig: string;
    write: true;
    legalComments: "inline";
    bundle: false;
    assetNames: string;
    sourcemap: true;
    drop: "debugger"[];
    ignoreAnnotations: false;
    keepNames: true;
    plugins: never[];
    define: {
        "process.env.VERSION_CLOUDFLARE_WRANGLER_ACTION": string;
        "process.env.VERSION_ACTIONS_SETUP_NODE": string;
        "process.env.VERSION_ACTIONS_UPLOAD_ARTIFACT": string;
        "process.env.VERSION_ACTIONS_CACHE": string;
        "process.env.VERSION_ACTIONS_RS_CARGO": string;
    };
};
export default _default;
