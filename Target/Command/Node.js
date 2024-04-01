var $=async()=>await(async u=>{for(const{Path:n,Name:p,File:w}of u)for(const[r,m]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("NPM"))){const c=`${r}/.github`,o=await w();if(n==="/workflows/"&&p==="Node.yml")for(const e of m){const t=(await import("path")).dirname(e).replace(r,""),y=(await(await import("fs/promises")).readFile(e,"utf-8")).toString(),d=(await(await import("../Function/Type.js")).default()).get(e.split("/").pop());try{if(typeof d<"u"&&d==="NPM"){const a=JSON.parse(y);for(const i of["bundledDependencies","bundleDependencies","dependencies","devDependencies","extensionDependencies","optionalDependencies","peerDependencies","peerDependenciesMeta"].sort())typeof a[i]<"u"&&o.add(`
            - uses: actions/setup-node@v4.0.2
              with:
                  node-version: \${{ matrix.node-version }}
                  cache: "pnpm"
                  cache-dependency-path: .${t}/pnpm-lock.yaml

            - run: pnpm install --legacy-peer-deps
              working-directory: .${t}
`);for(const i in a)if(Object.prototype.hasOwnProperty.call(a,i)){const f=a[i];if(i==="scripts")for(const s in f)Object.prototype.hasOwnProperty.call(f,s)&&(s==="build"&&o.add(`
            - run: pnpm run build
              working-directory: .

            - uses: actions/upload-artifact@v4.3.1
              with:
                  name: .${t.replaceAll("/","-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${t}/Target
`),s==="prepublishOnly"&&o.add(`
            - run: pnpm run prepublishOnly
              working-directory: .

            - uses: actions/upload-artifact@v4.3.1
              with:
                  name: .${t.replaceAll("/","-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${t}/Target
`),s==="test"&&o.add(`
            - run: pnpm run test
              working-directory: .${t}
`))}}}catch(a){console.log(`Could not create: ${e}`),console.log(a)}}let l="main";try{await(await import("fs/promises")).access(r,(await import("fs/promises")).constants.F_OK);const e=process.cwd();process.chdir(r),l=(await import("child_process")).execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),process.chdir(e)}catch{console.log(`Could not access: ${r}`)}if(o.size>1){try{await(await import("fs/promises")).mkdir(`${c}${n}`,{recursive:!0})}catch{console.log(`Could not create: ${c}${n}`)}try{await(await import("fs/promises")).writeFile(`${c}${n}${p}`,`${[...o].join("")}`.replaceAll("$Branch$",l))}catch{console.log(`Could not create workflow for: ${c}/workflows/Node.yml`)}}}})((await import("../Variable/Node.js")).default);export{$ as default};
