// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                // @ts-ignore
                interface RawDataListener {
                    /**
                     * Handles the given {@link ChannelBuf} data sent by a remote connection.
                     */
                    // @ts-ignore
                     handlePayload(data: org.spongepowered.api.network.ChannelBuf, connection: org.spongepowered.api.network.RemoteConnection, side: org.spongepowered.api.Platform.Type): void;
                }
            }
        }
    }
}
