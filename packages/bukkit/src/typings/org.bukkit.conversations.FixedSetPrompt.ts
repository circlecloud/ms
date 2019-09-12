declare namespace org {
    namespace bukkit {
        namespace conversations {
            abstract class FixedSetPrompt {
                /**
                 * Creates a FixedSetPrompt from a set of strings.
                 * <p>
                 * foo = new FixedSetPrompt("bar", "cheese", "panda");
                 */
                constructor(fixedSet: string)
                protected fixedSet: any[] /*java.util.List*/;
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                /**
                 * Utility function to create a formatted string containing all the
                 * options declared in the constructor.
                 */
                protected formatFixedSet(): string;
            }
        }
    }
}
