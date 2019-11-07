declare namespace org {
    namespace bukkit {
        namespace help {
            // @ts-ignore
             class GenericCommandHelpTopic extends org.bukkit.help.HelpTopic {
                // @ts-ignore
                constructor(command: org.bukkit.command.Command)
                // @ts-ignore
                protected command: org.bukkit.command.Command;
                // @ts-ignore
                public canSee(sender: org.bukkit.command.CommandSender): boolean;
            }
        }
    }
}
