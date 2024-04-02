/**
 * @module Complexity
 *
 */
/**
 * This function writes workflows for npm packages based on their package.json files.
 *
 * @param Files - The `files` parameter is an array of objects containing information
 * about the files to be processed. Each object has the following properties:
 *
 */
export default async () => {
	for (const [_Directory, FilesPackage] of await (
		await import("../Function/Directory.js")
	).default(await (await import("../Function/Package.js")).default())) {
		console.log("------ Complexity ------");
		console.log(_Directory);
		console.log(FilesPackage);

		// const rx = /[\s,\]\[\(\)]+/g;
		// const len = {};
		// for (const file of Deno.args)
		// 	for (const x of (await Deno.readTextFile(file)).split(rx))
		// 		len[x] = x.length + len[x] || x.length;
		// console.log(
		// 	Object.entries(len)
		// 		.filter((a) => a[1] >= 10 && a[0].length > 2)
		// 		.sort((a, b) => b[1] - a[1])
		// 		.map((a) => `${a[1]} ${a[0]}`)
		// 		.join("\n")
		// );
	}
};
