// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace help {
            // @ts-ignore
            interface HelpTopicFactory {
                /**
                 * This method accepts a command deriving from a custom command base class
                 * and constructs a custom HelpTopic for it.
                 */
                // @ts-ignore
                 createTopic(command: org.bukkit.command.Command): org.bukkit.help.HelpTopic;
            }
        }
    }
}
