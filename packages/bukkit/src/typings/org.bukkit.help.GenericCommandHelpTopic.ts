declare namespace org {
    namespace bukkit {
        namespace help {
            // @ts-ignore
             class GenericCommandHelpTopic extends org.bukkit.help.HelpTopic {
                constructor(command: org.bukkit.command.Command)
                protected command: org.bukkit.command.Command;
                public canSee(sender: org.bukkit.command.CommandSender): boolean;
            }
        }
    }
}
