declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class ExactMatchConversationCanceller implements org.bukkit.conversations.ConversationCanceller {
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
