var m=async()=>await(async l=>{for(const{Path:e,Name:i,File:p}of l)for(const[t,w]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("Cargo"))){const r=`${t}/.github`,o=await p();if(e==="/workflows/"&&i==="Rust.yml")for(const a of w){const c=(await import("node:path")).dirname(a).replace(t,""),n=(await(await import("../Function/Type.js")).default()).get(a.split("/").pop());typeof n<"u"&&n==="Cargo"&&o.add(`
            - uses: actions/cache@55cc8345863c7cc4c66a329aec7e433d2d1c52a9 # v6.1.0
              with:
                  path: |
                      ~/.cargo/bin/
                      ~/.cargo/registry/index/
                      ~/.cargo/registry/cache/
                      ~/.cargo/git/db/
                      target/
                      Target/
                  key: \${{ runner.os }}-cargo-\${{ hashFiles('.${c}/Cargo.toml') }}
            - uses: actions-rs/cargo@4ff6ec2846f6e7217c1a9b0b503506665f134c4b # v1.0.3
              with:
                command: build
                args: --release --all-features --manifest-path .${c}/${(await import("node:path")).basename(a)}
`)}let s="main";try{await(await import("node:fs/promises")).access(t,(await import("node:fs/promises")).constants.F_OK);const a=process.cwd();process.chdir(t),s=(await import("child_process")).execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),process.chdir(a)}catch{console.log(`Could not access: ${t}`)}if(o.size>1){try{await(await import("node:fs/promises")).mkdir(`${r}${e}`,{recursive:!0})}catch{console.log(`Could not create: ${r}${e}`)}try{await(await import("node:fs/promises")).writeFile(`${r}${e}${i}`,`${[...o].join("")}`.replaceAll("$Branch$",s))}catch{console.log(`Could not create workflow for: ${r}/workflows/Rust.yml`)}}}})((await import("../Variable/Rust.js")).default);export{m as default};
