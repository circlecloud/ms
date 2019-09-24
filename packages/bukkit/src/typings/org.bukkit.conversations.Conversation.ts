declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class Conversation {
                /**
                 * Initializes a new Conversation.
                 */
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, firstPrompt: org.bukkit.conversations.Prompt)
                /**
                 * Initializes a new Conversation.
                 */
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, firstPrompt: org.bukkit.conversations.Prompt, initialSessionData: Map<any, any> /*java.util.Map*/)
                protected currentPrompt: org.bukkit.conversations.Prompt;
                protected context: org.bukkit.conversations.ConversationContext;
                protected modal: boolean;
                protected localEchoEnabled: boolean;
                protected prefix: org.bukkit.conversations.ConversationPrefix;
                protected cancellers: any[] /*java.util.List*/;
                protected abandonedListeners: any[] /*java.util.List*/;
                /**
                 * Gets the entity for whom this conversation is mediating.
                 */
                public getForWhom(): org.bukkit.conversations.Conversable;
                /**
                 * Gets the modality of this conversation. If a conversation is modal, all
                 * messages directed to the player are suppressed for the duration of the
                 * conversation.
                 */
                public isModal(): boolean;
                /**
                 * Gets the status of local echo for this conversation. If local echo is
                 * enabled, any text submitted to a conversation gets echoed back into the
                 * submitter's chat window.
                 */
                public isLocalEchoEnabled(): boolean;
                /**
                 * Sets the status of local echo for this conversation. If local echo is
                 * enabled, any text submitted to a conversation gets echoed back into the
                 * submitter's chat window.
                 */
                public setLocalEchoEnabled(localEchoEnabled: boolean): void;
                /**
                 * Gets the {@link ConversationPrefix} that prepends all output from this
                 * conversation.
                 */
                public getPrefix(): org.bukkit.conversations.ConversationPrefix;
                /**
                 * Gets the list of {@link ConversationCanceller}s
                 */
                public getCancellers(): any[] /*java.util.List*/;
                /**
                 * Returns the Conversation's {@link ConversationContext}.
                 */
                public getContext(): org.bukkit.conversations.ConversationContext;
                /**
                 * Displays the first prompt of this conversation and begins redirecting
                 * the user's chat responses.
                 */
                public begin(): void;
                /**
                 * Returns Returns the current state of the conversation.
                 */
                public getState(): org.bukkit.conversations.Conversation.ConversationState;
                /**
                 * Passes player input into the current prompt. The next prompt (as
                 * determined by the current prompt) is then displayed to the user.
                 */
                public acceptInput(input: string): void;
                /**
                 * Adds a {@link ConversationAbandonedListener}.
                 */
                public addConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): void;
                /**
                 * Removes a {@link ConversationAbandonedListener}.
                 */
                public removeConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): void;
                /**
                 * Abandons and resets the current conversation. Restores the user's
                 * normal chat behavior.
                 */
                public abandon(): void;
                /**
                 * Abandons and resets the current conversation. Restores the user's
                 * normal chat behavior.
                 */
                public abandon(details: org.bukkit.conversations.ConversationAbandonedEvent): void;
                /**
                 * Displays the next user prompt and abandons the conversation if the next
                 * prompt is null.
                 */
                public outputNextPrompt(): void;
            }
        }
    }
}
