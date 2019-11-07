// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class FixedSetPrompt extends org.bukkit.conversations.ValidatingPrompt {
                /**
                 * Creates a FixedSetPrompt from a set of strings.
                 * <p>
                 * foo = new FixedSetPrompt("bar", "cheese", "panda");
                 */
                // @ts-ignore
                constructor(fixedSet: string)
                // @ts-ignore
                protected fixedSet: java.util.List;
                // @ts-ignore
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                /**
                 * Utility function to create a formatted string containing all the
                 * options declared in the constructor.
                 */
                // @ts-ignore
                protected formatFixedSet(): string;
            }
        }
    }
}
