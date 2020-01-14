declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                // @ts-ignore
                interface IForgeClientPacketHandler {
                    /**
                     * Handles any {@link PluginMessage} packets.
                     */
                    // @ts-ignore
                     handle(message: PluginMessage, con: any /*net.md_5.bungee.UserConnection*/): java.lang.Object;
                    /**
                     * Sends any {@link PluginMessage} packets.
                     */
                    // @ts-ignore
                     send(message: PluginMessage, con: any /*net.md_5.bungee.UserConnection*/): java.lang.Object;
                }
            }
        }
    }
}
