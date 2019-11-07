// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class Conversation extends java.lang.Object {
                /**
                 * Initializes a new Conversation.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, firstPrompt: org.bukkit.conversations.Prompt)
                /**
                 * Initializes a new Conversation.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, forWhom: org.bukkit.conversations.Conversable, firstPrompt: org.bukkit.conversations.Prompt, initialSessionData: java.util.Map)
                // @ts-ignore
                protected currentPrompt: org.bukkit.conversations.Prompt;
                // @ts-ignore
                protected context: org.bukkit.conversations.ConversationContext;
                // @ts-ignore
                protected modal: boolean;
                // @ts-ignore
                protected localEchoEnabled: boolean;
                // @ts-ignore
                protected prefix: org.bukkit.conversations.ConversationPrefix;
                // @ts-ignore
                protected cancellers: java.util.List;
                // @ts-ignore
                protected abandonedListeners: java.util.List;
                /**
                 * Gets the entity for whom this conversation is mediating.
                 */
                // @ts-ignore
                public getForWhom(): org.bukkit.conversations.Conversable;
                /**
                 * Gets the modality of this conversation. If a conversation is modal, all
                 * messages directed to the player are suppressed for the duration of the
                 * conversation.
                 */
                // @ts-ignore
                public isModal(): boolean;
                /**
                 * Gets the status of local echo for this conversation. If local echo is
                 * enabled, any text submitted to a conversation gets echoed back into the
                 * submitter's chat window.
                 */
                // @ts-ignore
                public isLocalEchoEnabled(): boolean;
                /**
                 * Sets the status of local echo for this conversation. If local echo is
                 * enabled, any text submitted to a conversation gets echoed back into the
                 * submitter's chat window.
                 */
                // @ts-ignore
                public setLocalEchoEnabled(localEchoEnabled: boolean): void;
                /**
                 * Gets the {@link ConversationPrefix} that prepends all output from this
                 * conversation.
                 */
                // @ts-ignore
                public getPrefix(): org.bukkit.conversations.ConversationPrefix;
                /**
                 * Gets the list of {@link ConversationCanceller}s
                 */
                // @ts-ignore
                public getCancellers(): java.util.List;
                /**
                 * Returns the Conversation's {@link ConversationContext}.
                 */
                // @ts-ignore
                public getContext(): org.bukkit.conversations.ConversationContext;
                /**
                 * Displays the first prompt of this conversation and begins redirecting
                 * the user's chat responses.
                 */
                // @ts-ignore
                public begin(): void;
                /**
                 * Returns Returns the current state of the conversation.
                 */
                // @ts-ignore
                public getState(): org.bukkit.conversations.Conversation.ConversationState;
                /**
                 * Passes player input into the current prompt. The next prompt (as
                 * determined by the current prompt) is then displayed to the user.
                 */
                // @ts-ignore
                public acceptInput(input: string): void;
                /**
                 * Adds a {@link ConversationAbandonedListener}.
                 */
                // @ts-ignore
                public addConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): void;
                /**
                 * Removes a {@link ConversationAbandonedListener}.
                 */
                // @ts-ignore
                public removeConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): void;
                /**
                 * Abandons and resets the current conversation. Restores the user's
                 * normal chat behavior.
                 */
                // @ts-ignore
                public abandon(): void;
                /**
                 * Abandons and resets the current conversation. Restores the user's
                 * normal chat behavior.
                 */
                // @ts-ignore
                public abandon(details: org.bukkit.conversations.ConversationAbandonedEvent): void;
                /**
                 * Displays the next user prompt and abandons the conversation if the next
                 * prompt is null.
                 */
                // @ts-ignore
                public outputNextPrompt(): void;
            }
        }
    }
}
