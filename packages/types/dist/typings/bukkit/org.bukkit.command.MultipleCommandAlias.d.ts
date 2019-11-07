// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
             class MultipleCommandAlias extends org.bukkit.command.Command {
                // @ts-ignore
                constructor(name: string, commands: org.bukkit.command.Command)
                /**
                 * Gets the commands associated with the multi-command alias.
                 */
                // @ts-ignore
                public getCommands(): org.bukkit.command.Command[];
                // @ts-ignore
                public execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string): boolean;
            }
        }
    }
}
