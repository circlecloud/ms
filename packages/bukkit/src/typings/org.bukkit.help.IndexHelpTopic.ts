declare namespace org {
    namespace bukkit {
        namespace help {
            class IndexHelpTopic {
                constructor(name: string, shortText: string, permission: string, topics: any[] /*java.util.Collection*/)
                constructor(name: string, shortText: string, permission: string, topics: any[] /*java.util.Collection*/, preamble: string)
                protected permission: string;
                protected preamble: string;
                protected allTopics: any[] /*java.util.Collection*/;
                /**
                 * Sets the contents of the internal allTopics collection.
                 */
                protected setTopicsCollection(topics: any[] /*java.util.Collection*/): void;
                public canSee(sender: org.bukkit.command.CommandSender): boolean;
                public amendCanSee(amendedPermission: string): void;
                public getFullText(sender: org.bukkit.command.CommandSender): string;
                /**
                 * Builds the topic preamble. Override this method to change how the index
                 * preamble looks.
                 */
                protected buildPreamble(sender: org.bukkit.command.CommandSender): string;
                /**
                 * Builds individual lines in the index topic. Override this method to
                 * change how index lines are rendered.
                 */
                protected buildIndexLine(sender: org.bukkit.command.CommandSender, topic: org.bukkit.help.HelpTopic): string;
            }
        }
    }
}
