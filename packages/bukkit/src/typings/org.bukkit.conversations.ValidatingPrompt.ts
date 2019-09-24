declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class ValidatingPrompt implements org.bukkit.conversations.Prompt {
                constructor()
                /**
                 * Accepts and processes input from the user and validates it. If
                 * validation fails, this prompt is returned for re-execution, otherwise
                 * the next Prompt in the prompt graph is returned.
                 */
                public acceptInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
                /**
                 * Ensures that the prompt waits for the user to provide input.
                 */
                public blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean;
                /**
                 * Override this method to check the validity of the player's input.
                 */
                protected abstract isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                /**
                 * Override this method to accept and processes the validated input from
                 * the user. Using the input, the next Prompt in the prompt graph should
                 * be returned.
                 */
                protected abstract acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
                /**
                 * Optionally override this method to display an additional message if the
                 * user enters an invalid input.
                 */
                protected getFailedValidationText(context: org.bukkit.conversations.ConversationContext, invalidInput: string): string;
            }
        }
    }
}
