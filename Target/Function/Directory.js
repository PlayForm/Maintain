var s=async r=>{const t=new Map;for(const e of r){const a=await(await import("./WalkUntilGit.js")).default(e);t.set(a,t.has(a)?t.get(a).add(e):new Set([e].sort()))}return t};export{s as default};
