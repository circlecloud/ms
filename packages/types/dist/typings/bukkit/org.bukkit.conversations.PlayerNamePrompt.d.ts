// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
            abstract class PlayerNamePrompt extends org.bukkit.conversations.ValidatingPrompt {
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                protected isInputValid(context: org.bukkit.conversations.ConversationContext, input: string): boolean;
                // @ts-ignore
                protected acceptValidatedInput(context: org.bukkit.conversations.ConversationContext, input: string): org.bukkit.conversations.Prompt;
            }
        }
    }
}
