var m=async()=>await(async u=>{for(const{Path:r,Name:c,File:f}of u)for(const[p,w]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("NPM"))){const i=`${p}/.github`,t=await f();if(r==="/workflows/"&&c==="NPM.yml")for(const a of w){const e=(await import("path")).dirname(a).replace(p,""),y=(await(await import("fs/promises")).readFile(a,"utf-8")).toString(),s=(await(await import("../Function/Type.js")).default()).get(a.split("/").pop());try{if(typeof s<"u"&&s==="NPM"){const o=JSON.parse(y);for(const l in o)if(Object.prototype.hasOwnProperty.call(o,l)){const d=o[l];if(l==="scripts")for(const n in d)Object.prototype.hasOwnProperty.call(d,n)&&(n==="build"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm install --include prod dev optional peer --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`),n==="prepublishOnly"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm install --include prod dev optional peer --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`),n==="Build"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm install --include prod dev optional peer --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`))}}}catch(o){console.log(`Could not create: ${a}`),console.log(o)}}if(t.size>1){try{await(await import("fs/promises")).mkdir(`${i}${r}`,{recursive:!0})}catch{console.log(`Could not create: ${i}${r}`)}try{await(await import("fs/promises")).writeFile(`${i}${r}${c}`,`${[...t].join("")}`)}catch{console.log(`Could not create workflow for: ${i}/workflows/NPM.yml`)}}}})((await import("../Variable/NPM.js")).default);export{m as default};
