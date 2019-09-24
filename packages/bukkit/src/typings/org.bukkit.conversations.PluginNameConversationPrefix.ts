declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class PluginNameConversationPrefix implements org.bukkit.conversations.ConversationPrefix {
                constructor(plugin: org.bukkit.plugin.Plugin)
                constructor(plugin: org.bukkit.plugin.Plugin, separator: string, prefixColor: org.bukkit.ChatColor)
                protected separator: string;
                protected prefixColor: org.bukkit.ChatColor;
                protected plugin: org.bukkit.plugin.Plugin;
                /**
                 * Prepends each conversation message with the plugin name.
                 */
                public getPrefix(context: org.bukkit.conversations.ConversationContext): string;
            }
        }
    }
}
