declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            interface ConversationAbandonedListener {
                /**
                 * Called whenever a {@link Conversation} is abandoned.
                 */
                 conversationAbandoned(abandonedEvent: org.bukkit.conversations.ConversationAbandonedEvent): void;
            }
        }
    }
}
