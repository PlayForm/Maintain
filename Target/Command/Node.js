var $=async()=>await(async f=>{for(const{Path:c,Name:p,File:w}of f)for(const[r,m]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("NPM"))){const s=`${r}/.github`,t=await w();if(c==="/workflows/"&&p==="Node.yml")for(const a of m){const e=(await import("path")).dirname(a).replace(r,""),y=(await(await import("fs/promises")).readFile(a,"utf-8")).toString(),d=(await(await import("../Function/Type.js")).default()).get(a.split("/").pop());try{if(typeof d<"u"&&d==="NPM"){const o=JSON.parse(y);for(const i of["bundledDependencies","bundleDependencies","dependencies","devDependencies","extensionDependencies","optionalDependencies","peerDependencies","peerDependenciesMeta"].sort())typeof o[i]<"u"&&t.add(`
            - uses: actions/setup-node@v4.0.4
              with:
                  node-version: \${{ matrix.node-version }}
                  cache: "pnpm"
                  cache-dependency-path: .${e}/pnpm-lock.yaml

            - run: pnpm install
              working-directory: .${e}
`);for(const i in o)if(Object.prototype.hasOwnProperty.call(o,i)){const u=o[i];if(i==="scripts")for(const n in u)Object.prototype.hasOwnProperty.call(u,n)&&(n==="build"&&t.add(`
            - run: pnpm run build
              working-directory: .

            - uses: actions/upload-artifact@v4.4.3
              with:
                  name: .${e.replaceAll("/","-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${e}/Target
`),n==="prepublishOnly"&&t.add(`
            - run: pnpm run prepublishOnly
              working-directory: .

            - uses: actions/upload-artifact@v4.4.3
              with:
                  name: .${e.replaceAll("/","-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${e}/Target
`),n==="Build"&&t.add(`
            - run: pnpm run Build
              working-directory: .

            - uses: actions/upload-artifact@v4.4.3
              with:
                  name: .${e.replaceAll("/","-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${e}/Target
`),n==="test"&&t.add(`
            - run: pnpm run test
              working-directory: .${e}
`))}}}catch(o){console.log(`Could not create: ${a}`),console.log(o)}}let l="main";try{await(await import("fs/promises")).access(r,(await import("fs/promises")).constants.F_OK);const a=process.cwd();process.chdir(r),l=(await import("child_process")).execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),process.chdir(a)}catch{console.log(`Could not access: ${r}`)}if(t.size>1){try{await(await import("fs/promises")).mkdir(`${s}${c}`,{recursive:!0})}catch{console.log(`Could not create: ${s}${c}`)}try{await(await import("fs/promises")).writeFile(`${s}${c}${p}`,`${[...t].join("")}`.replaceAll("$Branch$",l))}catch{console.log(`Could not create workflow for: ${s}/workflows/Node.yml`)}}}})((await import("../Variable/Node.js")).default);export{$ as default};
