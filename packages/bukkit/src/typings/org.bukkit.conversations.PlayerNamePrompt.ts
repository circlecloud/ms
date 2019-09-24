declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class PlayerNamePrompt extends org.bukkit.conversations.ValidatingPrompt {
                constructor(plugin: org.bukkit.plugin.Plugin)
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                protected acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
            }
        }
    }
}
