var d=async()=>await(async w=>{for(const{Path:e,Name:c,File:u}of w)for(const[n,y]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default("NPM"))){const o=`${n}/.github`,i=await u();if(e==="/workflows/"&&c==="NPM.yml")for(const a of y){const l=(await import("path")).dirname(a).replace(n,""),m=(await(await import("fs/promises")).readFile(a,"utf-8")).toString(),s=(await(await import("../Function/Type.js")).default()).get(a.split("/").pop());try{if(typeof s<"u"&&s==="NPM"){const t=JSON.parse(m);for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const p=t[r];if(r==="scripts")for(const f in p)Object.prototype.hasOwnProperty.call(p,f)&&f==="prepublishOnly"&&i.add(`
            - name: Publish .${l}
              continue-on-error: true
              working-directory: .${l}
              run: |
                  npm install --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`)}}}catch(t){console.log(`Could not create: ${a}`),console.log(t)}}if(i.size>1){try{await(await import("fs/promises")).mkdir(`${o}${e}`,{recursive:!0})}catch{console.log(`Could not create: ${o}${e}`)}try{await(await import("fs/promises")).writeFile(`${o}${e}${c}`,`${[...i].join("")}`)}catch{console.log(`Could not create workflow for: ${o}/workflows/NPM.yml`)}}}})((await import("../Variable/NPM.js")).default);export{d as default};
