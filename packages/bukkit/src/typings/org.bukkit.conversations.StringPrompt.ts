declare namespace org {
    namespace bukkit {
        namespace conversations {
            abstract class StringPrompt {
                constructor()
                /**
                 * Ensures that the prompt waits for the user to provide input.
                 */
                public blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean;
            }
        }
    }
}
