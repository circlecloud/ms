declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            interface Prompt {
                // @ts-ignore
                 END_OF_CONVERSATION: org.bukkit.conversations.Prompt;
                /**
                 * Gets the text to display to the user when this prompt is first
                 * presented.
                 */
                // @ts-ignore
                 getPromptText(context: org.bukkit.conversations.ConversationContext): string;
                /**
                 * Checks to see if this prompt implementation should wait for user input
                 * or immediately display the next prompt.
                 */
                // @ts-ignore
                 blocksForInput(context: org.bukkit.conversations.ConversationContext): boolean;
                /**
                 * Accepts and processes input from the user. Using the input, the next
                 * Prompt in the prompt graph is returned.
                 */
                // @ts-ignore
                 acceptInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
            }
        }
    }
}
