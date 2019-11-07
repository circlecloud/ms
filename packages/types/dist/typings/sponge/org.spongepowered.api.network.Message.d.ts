// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                // @ts-ignore
                interface Message {
                    /**
                     * Read the data from the channel buffer into this message.
                     */
                    // @ts-ignore
                     readFrom(buf: org.spongepowered.api.network.ChannelBuf): void;
                    /**
                     * Write the data from this message to the channel buffer.
                     */
                    // @ts-ignore
                     writeTo(buf: org.spongepowered.api.network.ChannelBuf): void;
                }
            }
        }
    }
}
