declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class ConversationContext extends java.lang.Object {
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, initialSessionData: java.util.Map)
                /**
                 * Gets the plugin that owns this conversation.
                 */
                // @ts-ignore
                public getPlugin(): org.bukkit.plugin.Plugin;
                /**
                 * Gets the subject of the conversation.
                 */
                // @ts-ignore
                public getForWhom(): org.bukkit.conversations.Conversable;
                /**
                 * Gets the underlying sessionData map.
                 * May be directly modified to manipulate session data.
                 */
                // @ts-ignore
                public getAllSessionData(): java.util.Map;
                /**
                 * Gets session data shared between all {@link Prompt} invocations. Use
                 * this as a way to pass data through each Prompt as the conversation
                 * develops.
                 */
                // @ts-ignore
                public getSessionData(key: java.lang.Object): java.lang.Object;
                /**
                 * Sets session data shared between all {@link Prompt} invocations. Use
                 * this as a way to pass data through each prompt as the conversation
                 * develops.
                 */
                // @ts-ignore
                public setSessionData(key: java.lang.Object, value: java.lang.Object): void;
            }
        }
    }
}
