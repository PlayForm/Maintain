#!/usr/bin/env node

/**
 * @module Maintain
 *
 */
const _Class = new (await import("commander")).Command()
	.name("Maintain")
	.description("🔧 Maintain.")
	.version(process.env["VERSION_PACKAGE"] ?? "0.0.1");

(await import("@Variable/Command.js")).default?.forEach(
	({ Action, Name, Description, Arguments }) => {
		const Command = _Class
			.command(Name)
			.description(typeof Description !== "undefined" ? Description : "")
			.action(Action);

		Arguments?.forEach(({ Name, Description }) =>
			Command.argument(Name, Description)
		);
	}
);

export default _Class.parse();
