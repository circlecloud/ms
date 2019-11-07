declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                // @ts-ignore
                interface MessageHandler {
                    /**
                     * Handles the message sent by a remote connection.
                     */
                    // @ts-ignore
                     handleMessage(message: org.spongepowered.api.network.Message, connection: org.spongepowered.api.network.RemoteConnection, side: org.spongepowered.api.Platform.Type): void;
                }
            }
        }
    }
}
