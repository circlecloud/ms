declare namespace org {
    namespace bukkit {
        namespace conversations {
            class NullConversationPrefix {
                constructor()
                /**
                 * Prepends each conversation message with an empty string.
                 */
                public getPrefix(context: org.bukkit.conversations.ConversationContext): string;
            }
        }
    }
}
