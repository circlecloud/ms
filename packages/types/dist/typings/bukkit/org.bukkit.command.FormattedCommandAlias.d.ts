declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
             class FormattedCommandAlias extends org.bukkit.command.Command {
                // @ts-ignore
                constructor(alias: string, formatStrings: string)
                // @ts-ignore
                public execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string): boolean;
            }
        }
    }
}
