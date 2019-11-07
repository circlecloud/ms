declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class ConversationAbandonedEvent extends java.util.EventObject {
                // @ts-ignore
                constructor(conversation: org.bukkit.conversations.Conversation)
                // @ts-ignore
                constructor(conversation: org.bukkit.conversations.Conversation, canceller: org.bukkit.conversations.ConversationCanceller)
                /**
                 * Gets the object that caused the conversation to be abandoned.
                 */
                // @ts-ignore
                public getCanceller(): org.bukkit.conversations.ConversationCanceller;
                /**
                 * Gets the abandoned conversation's conversation context.
                 */
                // @ts-ignore
                public getContext(): org.bukkit.conversations.ConversationContext;
                /**
                 * Indicates how the conversation was abandoned - naturally as part of the
                 * prompt chain or prematurely via a {@link ConversationCanceller}.
                 */
                // @ts-ignore
                public gracefulExit(): boolean;
            }
        }
    }
}
