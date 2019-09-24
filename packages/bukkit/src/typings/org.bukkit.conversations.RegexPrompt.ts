declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class RegexPrompt extends org.bukkit.conversations.ValidatingPrompt {
                constructor(regex: string)
                constructor(pattern: any)
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
            }
        }
    }
}
