declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class ConversationFactory extends java.lang.Object {
                /**
                 * Constructs a ConversationFactory.
                 */
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                protected plugin: org.bukkit.plugin.Plugin;
                // @ts-ignore
                protected isModal: boolean;
                // @ts-ignore
                protected localEchoEnabled: boolean;
                // @ts-ignore
                protected prefix: org.bukkit.conversations.ConversationPrefix;
                // @ts-ignore
                protected firstPrompt: org.bukkit.conversations.Prompt;
                // @ts-ignore
                protected initialSessionData: java.util.Map;
                // @ts-ignore
                protected playerOnlyMessage: string;
                // @ts-ignore
                protected cancellers: java.util.List;
                // @ts-ignore
                protected abandonedListeners: java.util.List;
                /**
                 * Sets the modality of all {@link Conversation}s created by this factory.
                 * If a conversation is modal, all messages directed to the player are
                 * suppressed for the duration of the conversation.
                 * <p>
                 * The default is True.
                 */
                // @ts-ignore
                public withModality(modal: boolean): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the local echo status for all {@link Conversation}s created by
                 * this factory. If local echo is enabled, any text submitted to a
                 * conversation gets echoed back into the submitter's chat window.
                 */
                // @ts-ignore
                public withLocalEcho(localEchoEnabled: boolean): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the {@link ConversationPrefix} that prepends all output from all
                 * generated conversations.
                 * <p>
                 * The default is a {@link NullConversationPrefix};
                 */
                // @ts-ignore
                public withPrefix(prefix: org.bukkit.conversations.ConversationPrefix): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the number of inactive seconds to wait before automatically
                 * abandoning all generated conversations.
                 * <p>
                 * The default is 600 seconds (5 minutes).
                 */
                // @ts-ignore
                public withTimeout(timeoutSeconds: number): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the first prompt to use in all generated conversations.
                 * <p>
                 * The default is Prompt.END_OF_CONVERSATION.
                 */
                // @ts-ignore
                public withFirstPrompt(firstPrompt: org.bukkit.conversations.Prompt): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets any initial data with which to populate the conversation context
                 * sessionData map.
                 */
                // @ts-ignore
                public withInitialSessionData(initialSessionData: java.util.Map): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the player input that, when received, will immediately terminate
                 * the conversation.
                 */
                // @ts-ignore
                public withEscapeSequence(escapeSequence: string): org.bukkit.conversations.ConversationFactory;
                /**
                 * Adds a {@link ConversationCanceller} to constructed conversations.
                 */
                // @ts-ignore
                public withConversationCanceller(canceller: org.bukkit.conversations.ConversationCanceller): org.bukkit.conversations.ConversationFactory;
                /**
                 * Prevents this factory from creating a conversation for non-player
                 * {@link Conversable} objects.
                 */
                // @ts-ignore
                public thatExcludesNonPlayersWithMessage(playerOnlyMessage: string): org.bukkit.conversations.ConversationFactory;
                /**
                 * Adds a {@link ConversationAbandonedListener} to all conversations
                 * constructed by this factory.
                 */
                // @ts-ignore
                public addConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): org.bukkit.conversations.ConversationFactory;
                /**
                 * Constructs a {@link Conversation} in accordance with the defaults set
                 * for this factory.
                 */
                // @ts-ignore
                public buildConversation(forWhom: org.bukkit.conversations.Conversable): org.bukkit.conversations.Conversation;
            }
        }
    }
}
