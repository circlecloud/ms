declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
             class MultipleCommandAlias {
                constructor(name: string, commands: org.bukkit.command.Command)
                /**
                 * Gets the commands associated with the multi-command alias.
                 */
                public getCommands(): org.bukkit.command.Command[];
                public execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string): boolean;
            }
        }
    }
}
