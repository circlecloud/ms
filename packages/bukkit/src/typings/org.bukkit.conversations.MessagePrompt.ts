declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class MessagePrompt implements org.bukkit.conversations.Prompt {
                constructor()
                /**
                 * Message prompts never wait for user input before continuing.
                 */
                public blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean;
                /**
                 * Accepts and ignores any user input, returning the next prompt in the
                 * prompt graph instead.
                 */
                public acceptInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
                /**
                 * Override this method to return the next prompt in the prompt graph.
                 */
                protected abstract getNextPrompt(context: org.bukkit.conversations.ConversationContext): org.bukkit.conversations.Prompt;
            }
        }
    }
}
