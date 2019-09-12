declare namespace org {
    namespace bukkit {
        namespace help {
            class HelpTopicFactory {
                /**
                 * This method accepts a command deriving from a custom command base class
                 * and constructs a custom HelpTopic for it.
                 */
                public createTopic(command: org.bukkit.command.Command): org.bukkit.help.HelpTopic;
            }
        }
    }
}
