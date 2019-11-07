declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            interface ConversationCanceller {
                /**
                 * Sets the conversation this ConversationCanceller can optionally cancel.
                 */
                // @ts-ignore
                 setConversation(conversation: org.bukkit.conversations.Conversation): void;
                /**
                 * Cancels a conversation based on user input.
                 */
                // @ts-ignore
                 cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                /**
                 * Allows the {@link ConversationFactory} to duplicate this
                 * ConversationCanceller when creating a new {@link Conversation}.
                 * <p>
                 * Implementing this method should reset any internal object state.
                 */
                // @ts-ignore
                 clone(): org.bukkit.conversations.ConversationCanceller;
            }
        }
    }
}
