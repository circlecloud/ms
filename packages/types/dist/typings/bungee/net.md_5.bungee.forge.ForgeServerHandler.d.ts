declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                // @ts-ignore
                 class ForgeServerHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Handles any {@link PluginMessage} that contains a FML Handshake or Forge
                     * Register.
                     */
                    // @ts-ignore
                    public handle(message: PluginMessage): void;
                    /**
                     * Receives a {@link PluginMessage} from ForgeClientData to pass to Server.
                     */
                    // @ts-ignore
                    public receive(message: PluginMessage): void;
                    /**
                     * Flags the server as a Forge server. Cannot be used to set a server back
                     * to vanilla (there would be no need)
                     */
                    // @ts-ignore
                    public setServerAsForgeServer(): void;
                }
            }
        }
    }
}
