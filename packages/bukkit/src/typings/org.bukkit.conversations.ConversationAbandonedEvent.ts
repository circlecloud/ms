declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class ConversationAbandonedEvent {
                constructor(conversation: org.bukkit.conversations.Conversation)
                constructor(conversation: org.bukkit.conversations.Conversation, canceller: org.bukkit.conversations.ConversationCanceller)
                /**
                 * Gets the object that caused the conversation to be abandoned.
                 */
                public getCanceller(): org.bukkit.conversations.ConversationCanceller;
                /**
                 * Gets the abandoned conversation's conversation context.
                 */
                public getContext(): org.bukkit.conversations.ConversationContext;
                /**
                 * Indicates how the conversation was abandoned - naturally as part of the
                 * prompt chain or prematurely via a {@link ConversationCanceller}.
                 */
                public gracefulExit(): boolean;
            }
        }
    }
}
