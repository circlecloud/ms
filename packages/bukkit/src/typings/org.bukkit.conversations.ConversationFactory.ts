declare namespace org {
    namespace bukkit {
        namespace conversations {
            // @ts-ignore
             class ConversationFactory {
                /**
                 * Constructs a ConversationFactory.
                 */
                constructor(plugin: org.bukkit.plugin.Plugin)
                protected plugin: org.bukkit.plugin.Plugin;
                protected isModal: boolean;
                protected localEchoEnabled: boolean;
                protected prefix: org.bukkit.conversations.ConversationPrefix;
                protected firstPrompt: org.bukkit.conversations.Prompt;
                protected initialSessionData: Map<any, any> /*java.util.Map*/;
                protected playerOnlyMessage: string;
                protected cancellers: any[] /*java.util.List*/;
                protected abandonedListeners: any[] /*java.util.List*/;
                /**
                 * Sets the modality of all {@link Conversation}s created by this factory.
                 * If a conversation is modal, all messages directed to the player are
                 * suppressed for the duration of the conversation.
                 * <p>
                 * The default is True.
                 */
                public withModality(modal: boolean): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the local echo status for all {@link Conversation}s created by
                 * this factory. If local echo is enabled, any text submitted to a
                 * conversation gets echoed back into the submitter's chat window.
                 */
                public withLocalEcho(localEchoEnabled: boolean): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the {@link ConversationPrefix} that prepends all output from all
                 * generated conversations.
                 * <p>
                 * The default is a {@link NullConversationPrefix};
                 */
                public withPrefix(prefix: org.bukkit.conversations.ConversationPrefix): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the number of inactive seconds to wait before automatically
                 * abandoning all generated conversations.
                 * <p>
                 * The default is 600 seconds (5 minutes).
                 */
                public withTimeout(timeoutSeconds: number): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the first prompt to use in all generated conversations.
                 * <p>
                 * The default is Prompt.END_OF_CONVERSATION.
                 */
                public withFirstPrompt(firstPrompt: org.bukkit.conversations.Prompt): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets any initial data with which to populate the conversation context
                 * sessionData map.
                 */
                public withInitialSessionData(initialSessionData: Map<any, any> /*java.util.Map*/): org.bukkit.conversations.ConversationFactory;
                /**
                 * Sets the player input that, when received, will immediately terminate
                 * the conversation.
                 */
                public withEscapeSequence(escapeSequence: string): org.bukkit.conversations.ConversationFactory;
                /**
                 * Adds a {@link ConversationCanceller} to constructed conversations.
                 */
                public withConversationCanceller(canceller: org.bukkit.conversations.ConversationCanceller): org.bukkit.conversations.ConversationFactory;
                /**
                 * Prevents this factory from creating a conversation for non-player
                 * {@link Conversable} objects.
                 */
                public thatExcludesNonPlayersWithMessage(playerOnlyMessage: string): org.bukkit.conversations.ConversationFactory;
                /**
                 * Adds a {@link ConversationAbandonedListener} to all conversations
                 * constructed by this factory.
                 */
                public addConversationAbandonedListener(listener: org.bukkit.conversations.ConversationAbandonedListener): org.bukkit.conversations.ConversationFactory;
                /**
                 * Constructs a {@link Conversation} in accordance with the defaults set
                 * for this factory.
                 */
                public buildConversation(forWhom: org.bukkit.conversations.Conversable): org.bukkit.conversations.Conversation;
            }
        }
    }
}
