#!/usr/bin/env node

/**
 * @module Maintain
 */
const Program = new (await import("commander")).Command()
	.name("Maintain")
	.description("🔧 Maintain GitHub repositories.")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1");

(await import("../Variable/Command.js")).default?.forEach(
	({ Action, Name, Description, Arguments }) => {
		const _Program = Program.command(Name)
			.description(typeof Description !== "undefined" ? Description : "")
			.action(Action);

		Arguments?.forEach(({ Name, Description }) =>
			_Program.argument(Name, Description),
		);
	},
);

export default Program.parse();
