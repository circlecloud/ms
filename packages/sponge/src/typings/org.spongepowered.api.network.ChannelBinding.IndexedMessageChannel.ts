declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace ChannelBinding {
                    // @ts-ignore
                    interface IndexedMessageChannel extends org.spongepowered.api.network.ChannelBinding {
                        /**
                         * Register a message class to this channel without a receiving handler.
                         * This will only allow the message to be sent, this channel binding
                         * will <strong>not</strong> be able to receive the message.
                         * <p>The message ID is used to identify this message class as it is
                         * sent and received across the network, it is a single byte and thus
                         * has a range of 0 to 255.</p>
                         */
                        // @ts-ignore
                         registerMessage(messageClass: any, messageId: number): void;
                        /**
                         * Register a message class to this channel and a handler for receiving
                         * the message. The handler is invoked every time the message is sent to
                         * <strong>either</strong> side.
                         */
                        // @ts-ignore
                         registerMessage(messageClass: any, messageId: number, handler: org.spongepowered.api.network.MessageHandler): void;
                        /**
                         * Register a message class to this channel and a handler for receiving
                         * the message. The handler is invoked every time the message is sent to
                         * the given side.
                         */
                        // @ts-ignore
                         registerMessage(messageClass: any, messageId: number, side: org.spongepowered.api.Platform.Type, handler: org.spongepowered.api.network.MessageHandler): void;
                        /**
                         * Register a {@link MessageHandler} for a {@link Message}.
                         */
                        // @ts-ignore
                         addHandler(messageClass: any, side: org.spongepowered.api.Platform.Type, handler: org.spongepowered.api.network.MessageHandler): void;
                        /**
                         * Register a {@link MessageHandler} for a {@link Message}
                         */
                        // @ts-ignore
                         addHandler(messageClass: any, handler: org.spongepowered.api.network.MessageHandler): void;
                        /**
                         * Sends the message to the player across this channel. The message may
                         * not be sent if the player doesn't have a registered handler.
                         */
                        // @ts-ignore
                         sendTo(player: org.spongepowered.api.entity.living.player.Player, message: org.spongepowered.api.network.Message): void;
                        /**
                         * Sends the message to the server. The message may not be sent if there
                         * is no registered handler. This <strong>must</strong> be called from
                         * the client side.
                         */
                        // @ts-ignore
                         sendToServer(message: org.spongepowered.api.network.Message): void;
                        /**
                         * Sends the message to all players on the server.
                         */
                        // @ts-ignore
                         sendToAll(message: org.spongepowered.api.network.Message): void;
                    }
                }
            }
        }
    }
}
