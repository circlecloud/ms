// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    // @ts-ignore
                    interface MessageReceiver {
                        /**
                         * Sends a message to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessage(message: org.spongepowered.api.text.Text): void;
                        /**
                         * Sends a message constructed from the {@link TextTemplate} to
                         * this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessage(template: org.spongepowered.api.text.TextTemplate): void;
                        /**
                         * Sends a message constructed from the {@link TextTemplate} and
                         * {@code parameters} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessage(template: org.spongepowered.api.text.TextTemplate, parameters: java.util.Map): void;
                        /**
                         * Sends the message(s) to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessages(messages: org.spongepowered.api.text.Text): void;
                        /**
                         * Sends the message(s) to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessages(messages: java.lang.Iterable): void;
                        /**
                         * Return the message channel that messages from this source should be sent
                         * to.
                         */
                        // @ts-ignore
                         getMessageChannel(): org.spongepowered.api.text.channel.MessageChannel;
                        /**
                         * Sets the message channel that messages sent by this source should be sent
                         * to.
                         */
                        // @ts-ignore
                         setMessageChannel(channel: org.spongepowered.api.text.channel.MessageChannel): void;
                    }
                }
            }
        }
    }
}
