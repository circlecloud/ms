declare namespace org {
    namespace bukkit {
        namespace conversations {
            class ExactMatchConversationCanceller {
                /**
                 * Builds an ExactMatchConversationCanceller.
                 */
                constructor(escapeSequence: string)
                public setConversation(conversation: org.bukkit.conversations.Conversation): void;
                public cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                public clone(): org.bukkit.conversations.ConversationCanceller;
            }
        }
    }
}
