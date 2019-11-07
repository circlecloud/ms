declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class RegexPrompt extends org.bukkit.conversations.ValidatingPrompt {
                // @ts-ignore
                constructor(regex: string)
                // @ts-ignore
                constructor(pattern: java.util.regex.Pattern)
                // @ts-ignore
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
            }
        }
    }
}
