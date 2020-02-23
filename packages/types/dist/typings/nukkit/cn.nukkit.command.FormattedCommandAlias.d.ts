declare namespace cn {
    namespace nukkit {
        namespace command {
            // @ts-ignore
             class FormattedCommandAlias extends cn.nukkit.command.Command {
                // @ts-ignore
                constructor(alias: string, formatStrings: string)
                // @ts-ignore
                constructor(alias: string, formatStrings: java.util.List)
                // @ts-ignore
                public execute(sender: cn.nukkit.command.CommandSender, commandLabel: string, args: string): boolean;
            }
        }
    }
}
