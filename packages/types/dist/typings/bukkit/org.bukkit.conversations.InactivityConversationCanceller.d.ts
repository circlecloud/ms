declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class InactivityConversationCanceller extends java.lang.Object implements org.bukkit.conversations.ConversationCanceller {
                /**
                 * Creates an InactivityConversationCanceller.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, timeoutSeconds: number)
                // @ts-ignore
                protected plugin: org.bukkit.plugin.Plugin;
                // @ts-ignore
                protected timeoutSeconds: number;
                // @ts-ignore
                protected conversation: org.bukkit.conversations.Conversation;
                // @ts-ignore
                public setConversation(conversation: org.bukkit.conversations.Conversation): void;
                // @ts-ignore
                public cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                // @ts-ignore
                public clone(): org.bukkit.conversations.ConversationCanceller;
                /**
                 * Subclasses of InactivityConversationCanceller can override this method
                 * to take additional actions when the inactivity timer abandons the
                 * conversation.
                 */
                // @ts-ignore
                protected cancelling(conversation: org.bukkit.conversations.Conversation): void;
            }
        }
    }
}
