#!/usr/bin/env node
const Program = new (await import("commander")).Command().name("Maintain").description("Maintains GitHub repositories. \u{1F527}").version("0.0.13");
(await import("../Variable/Command.js")).default?.forEach(
  ({ Action, Name, Description, Arguments }) => {
    const _Program = Program.command(Name).description(typeof Description !== "undefined" ? Description : "").action(Action);
    Arguments?.forEach(
      ({ Name: Name2, Description: Description2 }) => _Program.argument(Name2, Description2)
    );
  }
);
var YesMaintain_default = Program.parse();
export {
  YesMaintain_default as default
};
