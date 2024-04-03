var m=async()=>await(async d=>{for(const{Path:o,Name:l,File:f}of d)for(const[s,w]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("NPM"))){const a=`${s}/.github`,t=await f();if(o==="/workflows/"&&l==="NPM.yml")for(const i of w){const e=(await import("path")).dirname(i).replace(s,""),y=(await(await import("fs/promises")).readFile(i,"utf-8")).toString(),p=(await(await import("../Function/Type.js")).default()).get(i.split("/").pop());try{if(typeof p<"u"&&p==="NPM"){const r=JSON.parse(y);for(const c in r)if(Object.prototype.hasOwnProperty.call(r,c)){const u=r[c];if(c==="scripts")for(const n in u)Object.prototype.hasOwnProperty.call(u,n)&&(n==="build"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm install --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`),n==="prepublishOnly"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm install --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`),n==="Build"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm install --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`))}}}catch(r){console.log(`Could not create: ${i}`),console.log(r)}}if(t.size>1){try{await(await import("fs/promises")).mkdir(`${a}${o}`,{recursive:!0})}catch{console.log(`Could not create: ${a}${o}`)}try{await(await import("fs/promises")).writeFile(`${a}${o}${l}`,`${[...t].join("")}`)}catch{console.log(`Could not create workflow for: ${a}/workflows/NPM.yml`)}}}})((await import("../Variable/NPM.js")).default);export{m as default};
