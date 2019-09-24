declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            interface ConversationPrefix {
                /**
                 * Gets the prefix to use before each message to the player.
                 */
                 getPrefix(context: org.bukkit.conversations.ConversationContext): string;
            }
        }
    }
}
