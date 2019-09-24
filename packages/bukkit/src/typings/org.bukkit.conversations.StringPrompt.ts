declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class StringPrompt implements org.bukkit.conversations.Prompt {
                constructor()
                /**
                 * Ensures that the prompt waits for the user to provide input.
                 */
                public blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean;
            }
        }
    }
}
