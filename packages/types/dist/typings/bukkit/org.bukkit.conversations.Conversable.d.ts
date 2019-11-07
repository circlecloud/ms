declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            interface Conversable {
                /**
                 * Tests to see of a Conversable object is actively engaged in a
                 * conversation.
                 */
                // @ts-ignore
                 isConversing(): boolean;
                /**
                 * Accepts input into the active conversation. If no conversation is in
                 * progress, this method does nothing.
                 */
                // @ts-ignore
                 acceptConversationInput(input: string): void;
                /**
                 * Enters into a dialog with a Conversation object.
                 */
                // @ts-ignore
                 beginConversation(conversation: org.bukkit.conversations.Conversation): boolean;
                /**
                 * Abandons an active conversation.
                 */
                // @ts-ignore
                 abandonConversation(conversation: org.bukkit.conversations.Conversation): void;
                /**
                 * Abandons an active conversation.
                 */
                // @ts-ignore
                 abandonConversation(conversation: org.bukkit.conversations.Conversation, details: org.bukkit.conversations.ConversationAbandonedEvent): void;
                /**
                 * Sends this sender a message raw
                 */
                // @ts-ignore
                 sendRawMessage(message: string): void;
            }
        }
    }
}
