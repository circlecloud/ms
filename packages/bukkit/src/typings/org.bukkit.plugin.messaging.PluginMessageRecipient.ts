declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                class PluginMessageRecipient {
                    /**
                     * Sends this recipient a Plugin Message on the specified outgoing
                     * channel.
                     * <p>
                     * The message may not be larger than {@link Messenger#MAX_MESSAGE_SIZE}
                     * bytes, and the plugin must be registered to send messages on the
                     * specified channel.
                     */
                    public sendPluginMessage(source: org.bukkit.plugin.Plugin, channel: string, message: number): void;
                    /**
                     * Gets a set containing all the Plugin Channels that this client is
                     * listening on.
                     */
                    public getListeningPluginChannels(): any[] /*java.util.Set*/;
                }
            }
        }
    }
}
