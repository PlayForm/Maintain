var p=async()=>await(async c=>{for(const{Path:e,Name:s,File:l}of c)for(const[r,f]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default())){const a=`${r}/.github`,i=await l();if(e==="/")for(const o of f){const n=(await import("path")).dirname(o).replace(r,""),t=(await(await import("../Function/Type.js")).default()).get(o.split("/").pop());t!=="Cloudflare"&&i.add(`
    - package-ecosystem: "${typeof t<"u"?String(t).toLowerCase():(()=>{switch(o.split(".").pop()){case"csproj":return"nuget";default:return"npm"}})()}"
      directory: "${n||"/"}"
      schedule:
          interval: "daily"
      versioning-strategy: ${typeof t<"u"?(()=>{switch(t){case"Cargo":return"lockfile-only";default:return"increase"}})():"increase"}
`)}if(i.size>0){try{await(await import("fs/promises")).mkdir(`${a}${e}`,{recursive:!0})}catch{console.log(`Could not create: ${a}${e}`)}try{await(await import("fs/promises")).writeFile(`${a}${e}${s}`,`${[...i].join("")}`)}catch{console.log(`Could not create workflow for: ${a}/dependabot.yml`)}}}})((await import("../Variable/Dependabot.js")).default);export{p as default};
