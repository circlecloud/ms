declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    // @ts-ignore
                    interface ChatTypeMessageReceiver {
                        /**
                         * Sends a message with the specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessage(type: org.spongepowered.api.text.chat.ChatType, message: org.spongepowered.api.text.Text): void;
                        /**
                         * Sends a message constructed from the {@link TextTemplate} with the
                         * specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessage(type: org.spongepowered.api.text.chat.ChatType, template: org.spongepowered.api.text.TextTemplate): void;
                        /**
                         * Sends a message constructed from the {@link TextTemplate} and
                         * {@code parameters} with the specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessage(type: org.spongepowered.api.text.chat.ChatType, template: org.spongepowered.api.text.TextTemplate, parameters: Map<any, any> /*java.util.Map*/): void;
                        /**
                         * Sends the message(s) with the specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessages(type: org.spongepowered.api.text.chat.ChatType, messages: org.spongepowered.api.text.Text): void;
                        /**
                         * Sends the message(s) with the specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         */
                        // @ts-ignore
                         sendMessages(type: org.spongepowered.api.text.chat.ChatType, messages: any): void;
                    }
                }
            }
        }
    }
}
