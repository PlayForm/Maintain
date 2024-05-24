var m=async()=>await(async f=>{for(const{Path:o,Name:s,File:w}of f)for(const[l,d]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("NPM"))){const i=`${l}/.github`,t=await w();if(o==="/workflows/"&&s==="NPM.yml")for(const a of d){const e=(await import("path")).dirname(a).replace(l,""),y=(await(await import("fs/promises")).readFile(a,"utf-8")).toString(),p=(await(await import("../Function/Type.js")).default()).get(a.split("/").pop());try{if(typeof p<"u"&&p==="NPM"){const r=JSON.parse(y);for(const c in r)if(Object.prototype.hasOwnProperty.call(r,c)){const u=r[c];if(c==="scripts")for(const n in u)Object.prototype.hasOwnProperty.call(u,n)&&(n==="build"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm publish --legacy-peer-deps --provenance --ignore-scripts
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`),n==="prepublishOnly"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm publish --legacy-peer-deps --provenance --ignore-scripts
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`),n==="Build"&&t.add(`
            - name: Publish .${e}
              continue-on-error: true
              working-directory: .${e}
              run: |
                  npm publish --legacy-peer-deps --provenance --ignore-scripts
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`))}}}catch(r){console.log(`Could not create: ${a}`),console.log(r)}}if(t.size>1){try{await(await import("fs/promises")).mkdir(`${i}${o}`,{recursive:!0})}catch{console.log(`Could not create: ${i}${o}`)}try{await(await import("fs/promises")).writeFile(`${i}${o}${s}`,`${[...t].join("")}`)}catch{console.log(`Could not create workflow for: ${i}/workflows/NPM.yml`)}}}})((await import("../Variable/NPM.js")).default);export{m as default};
