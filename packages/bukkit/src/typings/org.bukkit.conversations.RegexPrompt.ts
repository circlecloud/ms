declare namespace org {
    namespace bukkit {
        namespace conversations {
            abstract class RegexPrompt {
                constructor(regex: string)
                constructor(pattern: any)
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
            }
        }
    }
}
