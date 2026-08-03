var $=async()=>await(async f=>{for(const{Path:c,Name:p,File:w}of f)for(const[a,m]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("NPM"))){const s=`${a}/.github`,t=await w();if(c==="/workflows/"&&p==="Node.yml")for(const o of m){const e=(await import("node:path")).dirname(o).replace(a,""),A=(await(await import("node:fs/promises")).readFile(o,"utf-8")).toString(),d=(await(await import("../Function/Type.js")).default()).get(o.split("/").pop());try{if(typeof d<"u"&&d==="NPM"){const r=JSON.parse(A);for(const i of["bundledDependencies","bundleDependencies","dependencies","devDependencies","extensionDependencies","optionalDependencies","peerDependencies","peerDependenciesMeta"].sort())typeof r[i]<"u"&&t.add(`
            - uses: actions/setup-node@820762786026740c76f36085b0efc47a31fe5020 # v7.0.0
              with:
                  node-version: \${{ matrix.node-version }}
                  cache: "pnpm"
                  cache-dependency-path: .${e}/pnpm-lock.yaml

            - run: pnpm install
              working-directory: .${e}
`);for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i)){const u=r[i];if(i==="scripts")for(const n in u)Object.prototype.hasOwnProperty.call(u,n)&&(n==="build"&&t.add(`
            - run: pnpm run build
              working-directory: .

            - uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a # v7.0.1
              with:
                  name: .${e.replaceAll("/","-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${e}/Target
`),n==="prepublishOnly"&&t.add(`
            - run: pnpm run prepublishOnly
              working-directory: .

            - uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a # v7.0.1
              with:
                  name: .${e.replaceAll("/","-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${e}/Target
`),n==="Build"&&t.add(`
            - run: pnpm run Build
              working-directory: .

            - uses: actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a # v7.0.1
              with:
                  name: .${e.replaceAll("/","-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${e}/Target
`),n==="test"&&t.add(`
            - run: pnpm run test
              working-directory: .${e}
`))}}}catch(r){console.log(`Could not create: ${o}`),console.log(r)}}let l="main";try{await(await import("node:fs/promises")).access(a,(await import("node:fs/promises")).constants.F_OK);const o=process.cwd();process.chdir(a),l=(await import("child_process")).execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),process.chdir(o)}catch{console.log(`Could not access: ${a}`)}if(t.size>1){try{await(await import("node:fs/promises")).mkdir(`${s}${c}`,{recursive:!0})}catch{console.log(`Could not create: ${s}${c}`)}try{await(await import("node:fs/promises")).writeFile(`${s}${c}${p}`,`${[...t].join("")}`.replaceAll("$Branch$",l))}catch{console.log(`Could not create workflow for: ${s}/workflows/Node.yml`)}}}})((await import("../Variable/Node.js")).default);export{$ as default};
