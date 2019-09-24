declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class NullConversationPrefix implements org.bukkit.conversations.ConversationPrefix {
                constructor()
                /**
                 * Prepends each conversation message with an empty string.
                 */
                public getPrefix(context: org.bukkit.conversations.ConversationContext): string;
            }
        }
    }
}
