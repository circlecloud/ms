// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace ChannelBinding {
                    // @ts-ignore
                    interface RawDataChannel extends org.spongepowered.api.network.ChannelBinding {
                        /**
                         * Adds a listener to this channel that is invoked every time data is
                         * sent to it on <strong>either</strong> side.
                         */
                        // @ts-ignore
                         addListener(listener: org.spongepowered.api.network.RawDataListener): void;
                        /**
                         * Adds a listener to this channel that is invoked every time data is
                         * sent to it on the given side.
                         */
                        // @ts-ignore
                         addListener(side: org.spongepowered.api.Platform.Type, listener: org.spongepowered.api.network.RawDataListener): void;
                        /**
                         * Removes the listener from handling data.
                         */
                        // @ts-ignore
                         removeListener(listener: org.spongepowered.api.network.RawDataListener): void;
                        /**
                         * Sends the raw payload to the player across this channel. The data may
                         * not be sent if the player doesn't have a registered handler.
                         */
                        // @ts-ignore
                         sendTo(player: org.spongepowered.api.entity.living.player.Player, payload: java.util.function$.Consumer): void;
                        /**
                         * Sends the raw payload to the server. The data may not be sent if
                         * there is no registered handler. This <strong>must</strong> be called
                         * from the client side.
                         */
                        // @ts-ignore
                         sendToServer(payload: java.util.function$.Consumer): void;
                        /**
                         * Sends the raw payload to all players on the server.
                         */
                        // @ts-ignore
                         sendToAll(payload: java.util.function$.Consumer): void;
                    }
                }
            }
        }
    }
}
