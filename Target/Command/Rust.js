var m=async()=>await(async l=>{for(const{Path:r,Name:i,File:w}of l)for(const[t,p]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("Cargo"))){const o=`${t}/.github`,e=await w();if(r==="/workflows/"&&i==="Rust.yml")for(const a of p){const s=(await import("path")).dirname(a).replace(t,""),n=(await(await import("../Function/Type.js")).default()).get(a.split("/").pop());typeof n<"u"&&n==="Cargo"&&e.add(`
            - uses: actions/cache@v4.0.2
              with:
                  path: |
                      ~/.cargo/bin/
                      ~/.cargo/registry/index/
                      ~/.cargo/registry/cache/
                      ~/.cargo/git/db/
                      target/
                      Target/
                  key: \${{ runner.os }}-cargo-\${{ hashFiles('.${s}/Cargo.toml') }}
            - uses: actions-rs/cargo@v1.0.3
              with:
                command: build
                args: --release --all-features --manifest-path .${s}/${(await import("path")).basename(a)}
`)}let c="main";try{await(await import("fs/promises")).access(t,(await import("fs/promises")).constants.F_OK);const a=process.cwd();process.chdir(t),c=(await import("child_process")).execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),process.chdir(a)}catch{console.log(`Could not access: ${t}`)}if(e.size>1){try{await(await import("fs/promises")).mkdir(`${o}${r}`,{recursive:!0})}catch{console.log(`Could not create: ${o}${r}`)}try{await(await import("fs/promises")).writeFile(`${o}${r}${i}`,`${[...e].join("")}`.replaceAll("$Branch$",c))}catch{console.log(`Could not create workflow for: ${o}/workflows/Rust.yml`)}}}})((await import("../Variable/Rust.js")).default);export{m as default};
