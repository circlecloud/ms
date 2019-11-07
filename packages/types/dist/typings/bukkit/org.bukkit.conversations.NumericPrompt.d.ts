declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class NumericPrompt extends org.bukkit.conversations.ValidatingPrompt {
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                /**
                 * Override this method to do further validation on the numeric player
                 * input after the input has been determined to actually be a number.
                 */
                // @ts-ignore
                protected isNumberValid(context: org.bukkit.conversations.ConversationContext, input: java.lang.Number): boolean;
                // @ts-ignore
                protected acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
                // @ts-ignore
                protected getFailedValidationText(context: org.bukkit.conversations.ConversationContext, invalidInput: string): string;
                /**
                 * Optionally override this method to display an additional message if the
                 * user enters an invalid number.
                 */
                // @ts-ignore
                protected getInputNotNumericText(context: org.bukkit.conversations.ConversationContext, invalidInput: string): string;
                /**
                 * Optionally override this method to display an additional message if the
                 * user enters an invalid numeric input.
                 */
                // @ts-ignore
                protected getFailedValidationText(context: org.bukkit.conversations.ConversationContext, invalidInput: java.lang.Number): string;
            }
        }
    }
}
