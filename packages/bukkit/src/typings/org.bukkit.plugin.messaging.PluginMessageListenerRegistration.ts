declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                // @ts-ignore
                 class PluginMessageListenerRegistration {
                    constructor(messenger: org.bukkit.plugin.messaging.Messenger, plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener)
                    /**
                     * Gets the plugin channel that this registration is about.
                     */
                    public getChannel(): string;
                    /**
                     * Gets the registered listener described by this registration.
                     */
                    public getListener(): org.bukkit.plugin.messaging.PluginMessageListener;
                    /**
                     * Gets the plugin that this registration is for.
                     */
                    public getPlugin(): org.bukkit.plugin.Plugin;
                    /**
                     * Checks if this registration is still valid.
                     */
                    public isValid(): boolean;
                    public equals(obj: any): boolean;
                    public hashCode(): number;
                }
            }
        }
    }
}
