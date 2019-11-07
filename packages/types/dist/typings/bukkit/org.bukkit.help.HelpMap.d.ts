// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace help {
            // @ts-ignore
            interface HelpMap {
                /**
                 * Returns a help topic for a given topic name.
                 */
                // @ts-ignore
                 getHelpTopic(topicName: string): org.bukkit.help.HelpTopic;
                /**
                 * Returns a collection of all the registered help topics.
                 */
                // @ts-ignore
                 getHelpTopics(): java.util.Collection;
                /**
                 * Adds a topic to the server's help index.
                 */
                // @ts-ignore
                 addTopic(topic: org.bukkit.help.HelpTopic): void;
                /**
                 * Clears out the contents of the help index. Normally called during
                 * server reload.
                 */
                // @ts-ignore
                 clear(): void;
                /**
                 * Associates a {@link HelpTopicFactory} object with given command base
                 * class. Plugins typically call this method during {@code onLoad()}. Once
                 * registered, the custom HelpTopicFactory will be used to create a custom
                 * {@link HelpTopic} for all commands deriving from the {@code
                 * commandClass} base class, or all commands deriving from {@link
                 * org.bukkit.command.PluginCommand} who's executor derives from {@code
                 * commandClass} base class.
                 */
                // @ts-ignore
                 registerHelpTopicFactory(commandClass: java.lang.Class, factory: org.bukkit.help.HelpTopicFactory): void;
                /**
                 * Gets the list of plugins the server administrator has chosen to exclude
                 * from the help index. Plugin authors who choose to directly extend
                 * {@link org.bukkit.command.Command} instead of {@link
                 * org.bukkit.command.PluginCommand} will need to check this collection in
                 * their {@link HelpTopicFactory} implementations to ensure they meet the
                 * server administrator's expectations.
                 */
                // @ts-ignore
                 getIgnoredPlugins(): java.util.List;
            }
        }
    }
}
