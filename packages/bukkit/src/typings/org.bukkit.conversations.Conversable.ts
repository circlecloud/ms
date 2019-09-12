declare namespace org {
    namespace bukkit {
        namespace conversations {
            class Conversable {
                /**
                 * Tests to see of a Conversable object is actively engaged in a
                 * conversation.
                 */
                public isConversing(): boolean;
                /**
                 * Accepts input into the active conversation. If no conversation is in
                 * progress, this method does nothing.
                 */
                public acceptConversationInput(input: string): void;
                /**
                 * Enters into a dialog with a Conversation object.
                 */
                public beginConversation(conversation: org.bukkit.conversations.Conversation): boolean;
                /**
                 * Abandons an active conversation.
                 */
                public abandonConversation(conversation: org.bukkit.conversations.Conversation): void;
                /**
                 * Abandons an active conversation.
                 */
                public abandonConversation(conversation: org.bukkit.conversations.Conversation, details: org.bukkit.conversations.ConversationAbandonedEvent): void;
                /**
                 * Sends this sender a message raw
                 */
                public sendRawMessage(message: string): void;
            }
        }
    }
}
