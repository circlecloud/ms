declare namespace org {
    namespace bukkit {
        namespace conversations {
            class ConversationCanceller {
                /**
                 * Sets the conversation this ConversationCanceller can optionally cancel.
                 */
                public setConversation(conversation: org.bukkit.conversations.Conversation): void;
                /**
                 * Cancels a conversation based on user input.
                 */
                public cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                /**
                 * Allows the {@link ConversationFactory} to duplicate this
                 * ConversationCanceller when creating a new {@link Conversation}.
                 * <p>
                 * Implementing this method should reset any internal object state.
                 */
                public clone(): org.bukkit.conversations.ConversationCanceller;
            }
        }
    }
}
