var m=async()=>await(async f=>{for(const{Path:r,Name:s,File:w}of f)for(const[l,d]of await(await import("../Source/Function/Directory.js")).default(await(await import("../Source/Function/Package.js")).default("NPM"))){const i=`${l}/.github`,e=await w();if(r==="/workflows/"&&s==="NPM.yml")for(const a of d){const t=(await import("node:path")).dirname(a).replace(l,""),y=(await(await import("node:fs/promises")).readFile(a,"utf-8")).toString(),p=(await(await import("../Source/Function/Type.js")).default()).get(a.split("/").pop());try{if(typeof p<"u"&&p==="NPM"){const o=JSON.parse(y);for(const c in o)if(Object.prototype.hasOwnProperty.call(o,c)){const u=o[c];if(c==="scripts")for(const n in u)Object.prototype.hasOwnProperty.call(u,n)&&(n==="build"&&e.add(`
            - name: Publish .${t}
              continue-on-error: true
              working-directory: .${t}
              run: |
                  npm publish --legacy-peer-deps --ignore-scripts
`),n==="prepublishOnly"&&e.add(`
            - name: Publish .${t}
              continue-on-error: true
              working-directory: .${t}
              run: |
                  npm publish --legacy-peer-deps --ignore-scripts
`),n==="Build"&&e.add(`
            - name: Publish .${t}
              continue-on-error: true
              working-directory: .${t}
              run: |
                  npm publish --legacy-peer-deps --ignore-scripts
`))}}}catch(o){console.log(`Could not create: ${a}`),console.log(o)}}if(e.size>1){try{await(await import("node:fs/promises")).mkdir(`${i}${r}`,{recursive:!0})}catch{console.log(`Could not create: ${i}${r}`)}try{await(await import("node:fs/promises")).writeFile(`${i}${r}${s}`,`${[...e].join("")}`)}catch{console.log(`Could not create workflow for: ${i}/workflows/NPM.yml`)}}}})((await import("../Source/Variable/NPM.js")).default);export{m as default};
