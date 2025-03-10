var f=async()=>await(async c=>{for(const{Path:t,Name:s,File:l}of c)for(const[r,d]of await(await import("../Function/Directory.js")).default(await(await import("../Function/Package.js")).default())){const a=`${r}/.github`,i=await l();if(t==="/")for(const o of d){const n=(await import("node:path")).dirname(o).replace(r,""),e=(await(await import("../Function/Type.js")).default()).get(o.split("/").pop());e!=="Cloudflare"&&i.add(`
    - package-ecosystem: "${typeof e<"u"?String(e).toLowerCase():(()=>{switch(o.split(".").pop()){case"csproj":return"nuget";default:return"npm"}})()}"
      directory: "${n||"/"}"
      schedule:
          interval: "daily"
      versioning-strategy: ${typeof e<"u"?(()=>{switch(e){case"Cargo":return"lockfile-only";default:return"increase"}})():"increase"}
      ${e==="NPM"?`ignore:
          - dependency-name: "tailwindcss"
            versions:
                - "^4.0.0"`:""}
`)}if(i.size>0){try{await(await import("node:fs/promises")).mkdir(`${a}${t}`,{recursive:!0})}catch{console.log(`Could not create: ${a}${t}`)}try{await(await import("node:fs/promises")).writeFile(`${a}${t}${s}`,`${[...i].join("")}`)}catch{console.log(`Could not create workflow for: ${a}/dependabot.yml`)}}}})((await import("../Variable/Dependabot.js")).default);export{f as default};
