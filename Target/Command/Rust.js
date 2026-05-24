var m=async()=>await(async l=>{for(const{Path:r,Name:i,File:p}of l)for(const[t,w]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("Cargo"))){const e=`${t}/.github`,o=await p();if(r==="/workflows/"&&i==="Rust.yml")for(const a of w){const c=(await import("node:path")).dirname(a).replace(t,""),n=(await(await import("../Function/Type.js")).default()).get(a.split("/").pop());typeof n<"u"&&n==="Cargo"&&o.add(`
            - uses: actions/cache@v5.0.5
              with:
                  path: |
                      ~/.cargo/bin/
                      ~/.cargo/registry/index/
                      ~/.cargo/registry/cache/
                      ~/.cargo/git/db/
                      target/
                      Target/
                  key: \${{ runner.os }}-cargo-\${{ hashFiles('.${c}/Cargo.toml') }}
            - uses: actions-rs/cargo@v1.0.3
              with:
                command: build
                args: --release --all-features --manifest-path .${c}/${(await import("node:path")).basename(a)}
`)}let s="main";try{await(await import("node:fs/promises")).access(t,(await import("node:fs/promises")).constants.F_OK);const a=process.cwd();process.chdir(t),s=(await import("child_process")).execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),process.chdir(a)}catch{console.log(`Could not access: ${t}`)}if(o.size>1){try{await(await import("node:fs/promises")).mkdir(`${e}${r}`,{recursive:!0})}catch{console.log(`Could not create: ${e}${r}`)}try{await(await import("node:fs/promises")).writeFile(`${e}${r}${i}`,`${[...o].join("")}`.replaceAll("$Branch$",s))}catch{console.log(`Could not create workflow for: ${e}/workflows/Rust.yml`)}}}})((await import("../Variable/Rust.js")).default);export{m as default};
