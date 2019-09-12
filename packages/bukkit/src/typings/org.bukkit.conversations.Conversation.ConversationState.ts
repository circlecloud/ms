declare namespace org {
    namespace bukkit {
        namespace conversations {
            namespace Conversation {
                class ConversationState {
                    public static UNSTARTED: org.bukkit.conversations.Conversation.ConversationState;
                    public static STARTED: org.bukkit.conversations.Conversation.ConversationState;
                    public static ABANDONED: org.bukkit.conversations.Conversation.ConversationState;
                    public static values(): org.bukkit.conversations.Conversation.ConversationState[];
                    public static valueOf(name: string): org.bukkit.conversations.Conversation.ConversationState;
                }
            }
        }
    }
}
