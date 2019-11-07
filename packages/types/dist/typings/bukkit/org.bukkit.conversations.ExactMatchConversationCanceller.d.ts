// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class ExactMatchConversationCanceller extends java.lang.Object implements org.bukkit.conversations.ConversationCanceller {
                /**
                 * Builds an ExactMatchConversationCanceller.
                 */
                // @ts-ignore
                constructor(escapeSequence: string)
                // @ts-ignore
                public setConversation(conversation: org.bukkit.conversations.Conversation): void;
                // @ts-ignore
                public cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                // @ts-ignore
                public clone(): org.bukkit.conversations.ConversationCanceller;
            }
        }
    }
}
