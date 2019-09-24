declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class ConversationContext {
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, initialSessionData: Map<any, any> /*java.util.Map*/)
                /**
                 * Gets the plugin that owns this conversation.
                 */
                public getPlugin(): org.bukkit.plugin.Plugin;
                /**
                 * Gets the subject of the conversation.
                 */
                public getForWhom(): org.bukkit.conversations.Conversable;
                /**
                 * Gets the underlying sessionData map.
                 * May be directly modified to manipulate session data.
                 */
                public getAllSessionData(): Map<any, any> /*java.util.Map*/;
                /**
                 * Gets session data shared between all {@link Prompt} invocations. Use
                 * this as a way to pass data through each Prompt as the conversation
                 * develops.
                 */
                public getSessionData(key: any): any;
                /**
                 * Sets session data shared between all {@link Prompt} invocations. Use
                 * this as a way to pass data through each prompt as the conversation
                 * develops.
                 */
                public setSessionData(key: any, value: any): void;
            }
        }
    }
}
