declare namespace org {
    namespace bukkit {
        namespace conversations {
            abstract class NumericPrompt {
                constructor()
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                /**
                 * Override this method to do further validation on the numeric player
                 * input after the input has been determined to actually be a number.
                 */
                protected isNumberValid(context: org.bukkit.conversations.ConversationContext, input: any): boolean;
                protected acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
                protected getFailedValidationText(context: org.bukkit.conversations.ConversationContext, invalidInput: string): string;
                /**
                 * Optionally override this method to display an additional message if the
                 * user enters an invalid number.
                 */
                protected getInputNotNumericText(context: org.bukkit.conversations.ConversationContext, invalidInput: string): string;
                /**
                 * Optionally override this method to display an additional message if the
                 * user enters an invalid numeric input.
                 */
                protected getFailedValidationText(context: org.bukkit.conversations.ConversationContext, invalidInput: any): string;
            }
        }
    }
}
