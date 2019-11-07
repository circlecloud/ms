declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                // @ts-ignore
                interface PluginMessageListener {
                    /**
                     * A method that will be thrown when a PluginMessageSource sends a plugin
                     * message on a registered channel.
                     */
                    // @ts-ignore
                     onPluginMessageReceived(channel: string, player: org.bukkit.entity.Player, message: number): void;
                }
            }
        }
    }
}
