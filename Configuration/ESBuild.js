/**
 * @module ESBuild
 *
 */
export default {
    color: true,
    format: "esm",
    metafile: true,
    minify: true,
    outdir: "Target",
    platform: "node",
    target: "esnext",
    write: true,
    logLevel: "debug",
    plugins: [
        {
            name: "Target",
            setup({ onStart, initialOptions: { outdir } }) {
                onStart(async () => {
                    try {
                        await (await import("fs/promises")).rm(outdir, {
                            recursive: true,
                        });
                    }
                    catch (_Error) {
                        console.log(_Error);
                    }
                });
            },
        },
        (await import("esbuild-plugin-copy")).copy({
            resolveFrom: "out",
            assets: [
                {
                    from: "./Source/Workflow/*.yml",
                    to: "./Workflow/",
                },
            ],
        }),
    ],
};
