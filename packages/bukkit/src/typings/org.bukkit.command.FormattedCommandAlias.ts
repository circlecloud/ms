declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
             class FormattedCommandAlias {
                constructor(alias: string, formatStrings: string)
                public execute(sender: org.bukkit.command.CommandSender, commandLabel: string, args: string): boolean;
            }
        }
    }
}
