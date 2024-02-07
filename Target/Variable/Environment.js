(await import("dotenv")).config();
const { string } = await import("zod");
var Environment_default = (await import("zod")).object({
  User: string().optional().default(""),
  Base: string().optional().default((await import("process")).cwd()),
  Token: string().optional().default("")
});
export {
  Environment_default as default,
  string
};
