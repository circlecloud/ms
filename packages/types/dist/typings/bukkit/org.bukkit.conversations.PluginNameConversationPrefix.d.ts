declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class PluginNameConversationPrefix extends java.lang.Object implements org.bukkit.conversations.ConversationPrefix {
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, separator: string, prefixColor: org.bukkit.ChatColor)
                // @ts-ignore
                protected separator: string;
                // @ts-ignore
                protected prefixColor: org.bukkit.ChatColor;
                // @ts-ignore
                protected plugin: org.bukkit.plugin.Plugin;
                /**
                 * Prepends each conversation message with the plugin name.
                 */
                // @ts-ignore
                public getPrefix(context: org.bukkit.conversations.ConversationContext): string;
            }
        }
    }
}
