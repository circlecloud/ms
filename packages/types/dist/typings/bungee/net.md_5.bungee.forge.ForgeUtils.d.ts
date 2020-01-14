declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                // @ts-ignore
                 class ForgeUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Gets the registered FML channels from the packet.
                     */
                    // @ts-ignore
                    public static readRegisteredChannels(pluginMessage: PluginMessage): java.util.Set;
                    /**
                     * Gets the modlist from the packet.
                     */
                    // @ts-ignore
                    public static readModList(pluginMessage: PluginMessage): java.util.Map;
                    /**
                     * Get the build number of FML from the packet.
                     */
                    // @ts-ignore
                    public static getFmlBuildNumber(modList: java.util.Map): number;
                }
            }
        }
    }
}
