declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                // @ts-ignore
                interface IForgeServerPacketHandler {
                    /**
                     * Handles any {@link net.md_5.bungee.protocol.packet.PluginMessage}
                     * packets.
                     */
                    // @ts-ignore
                     handle(message: PluginMessage, ch: net.md_5.bungee.netty.ChannelWrapper): java.lang.Object;
                    /**
                     * Sends any {@link net.md_5.bungee.protocol.packet.PluginMessage} packets.
                     */
                    // @ts-ignore
                     send(message: PluginMessage, con: net.md_5.bungee.UserConnection): java.lang.Object;
                }
            }
        }
    }
}
