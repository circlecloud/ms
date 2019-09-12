declare namespace org {
    namespace bukkit {
        namespace help {
            class GenericCommandHelpTopic {
                constructor(command: org.bukkit.command.Command)
                protected command: org.bukkit.command.Command;
                public canSee(sender: org.bukkit.command.CommandSender): boolean;
            }
        }
    }
}
