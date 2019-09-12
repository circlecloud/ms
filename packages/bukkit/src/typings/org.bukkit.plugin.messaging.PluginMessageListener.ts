declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                class PluginMessageListener {
                    /**
                     * A method that will be thrown when a PluginMessageSource sends a plugin
                     * message on a registered channel.
                     */
                    public onPluginMessageReceived(channel: string, player: org.bukkit.entity.Player, message: number): void;
                }
            }
        }
    }
}
