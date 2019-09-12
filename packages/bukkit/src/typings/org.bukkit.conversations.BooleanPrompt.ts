declare namespace org {
    namespace bukkit {
        namespace conversations {
            abstract class BooleanPrompt {
                constructor()
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                protected acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
            }
        }
    }
}
