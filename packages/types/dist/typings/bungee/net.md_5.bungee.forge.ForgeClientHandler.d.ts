declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                // @ts-ignore
                 class ForgeClientHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Handles the Forge packet.
                     */
                    // @ts-ignore
                    public handle(message: PluginMessage): void;
                    /**
                     * Receives a {@link PluginMessage} from ForgeServer to pass to Client.
                     */
                    // @ts-ignore
                    public receive(message: PluginMessage): void;
                    /**
                     * Resets the client handshake state to HELLO, and, if we know the handshake
                     * has been completed before, send the reset packet.
                     */
                    // @ts-ignore
                    public resetHandshake(): void;
                    /**
                     * Sends the server mod list to the client, or stores it for sending later.
                     */
                    // @ts-ignore
                    public setServerModList(modList: PluginMessage): void;
                    /**
                     * Sends the server ID list to the client, or stores it for sending later.
                     */
                    // @ts-ignore
                    public setServerIdList(idList: PluginMessage): void;
                    /**
                     * Returns whether the handshake is complete.
                     */
                    // @ts-ignore
                    public isHandshakeComplete(): boolean;
                    // @ts-ignore
                    public setHandshakeComplete(): void;
                    /**
                     * Returns whether we know if the user is a forge user. In FML 1.8, a "FML"
                     * token is included in the initial handshake. We can use that to determine
                     * if the user is a Forge 1.8 user.
                     */
                    // @ts-ignore
                    public isForgeUser(): boolean;
                }
            }
        }
    }
}
