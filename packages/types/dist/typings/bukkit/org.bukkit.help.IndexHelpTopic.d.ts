// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace help {
            // @ts-ignore
             class IndexHelpTopic extends org.bukkit.help.HelpTopic {
                // @ts-ignore
                constructor(name: string, shortText: string, permission: string, topics: java.util.Collection)
                // @ts-ignore
                constructor(name: string, shortText: string, permission: string, topics: java.util.Collection, preamble: string)
                // @ts-ignore
                protected permission: string;
                // @ts-ignore
                protected preamble: string;
                // @ts-ignore
                protected allTopics: java.util.Collection;
                /**
                 * Sets the contents of the internal allTopics collection.
                 */
                // @ts-ignore
                protected setTopicsCollection(topics: java.util.Collection): void;
                // @ts-ignore
                public canSee(sender: org.bukkit.command.CommandSender): boolean;
                // @ts-ignore
                public amendCanSee(amendedPermission: string): void;
                // @ts-ignore
                public getFullText(sender: org.bukkit.command.CommandSender): string;
                /**
                 * Builds the topic preamble. Override this method to change how the index
                 * preamble looks.
                 */
                // @ts-ignore
                protected buildPreamble(sender: org.bukkit.command.CommandSender): string;
                /**
                 * Builds individual lines in the index topic. Override this method to
                 * change how index lines are rendered.
                 */
                // @ts-ignore
                protected buildIndexLine(sender: org.bukkit.command.CommandSender, topic: org.bukkit.help.HelpTopic): string;
            }
        }
    }
}
