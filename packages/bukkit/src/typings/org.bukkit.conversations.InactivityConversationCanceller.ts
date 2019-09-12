declare namespace org {
    namespace bukkit {
        namespace conversations {
            class InactivityConversationCanceller {
                /**
                 * Creates an InactivityConversationCanceller.
                 */
                constructor(plugin: org.bukkit.plugin.Plugin, timeoutSeconds: number)
                protected plugin: org.bukkit.plugin.Plugin;
                protected timeoutSeconds: number;
                protected conversation: org.bukkit.conversations.Conversation;
                public setConversation(conversation: org.bukkit.conversations.Conversation): void;
                public cancelBasedOnInput(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                public clone(): org.bukkit.conversations.ConversationCanceller;
                /**
                 * Subclasses of InactivityConversationCanceller can override this method
                 * to take additional actions when the inactivity timer abandons the
                 * conversation.
                 */
                protected cancelling(conversation: org.bukkit.conversations.Conversation): void;
            }
        }
    }
}
