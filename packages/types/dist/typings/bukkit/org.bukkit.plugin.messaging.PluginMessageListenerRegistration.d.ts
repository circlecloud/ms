declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                // @ts-ignore
                 class PluginMessageListenerRegistration extends java.lang.Object {
                    // @ts-ignore
                    constructor(messenger: org.bukkit.plugin.messaging.Messenger, plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener)
                    /**
                     * Gets the plugin channel that this registration is about.
                     */
                    // @ts-ignore
                    public getChannel(): string;
                    /**
                     * Gets the registered listener described by this registration.
                     */
                    // @ts-ignore
                    public getListener(): org.bukkit.plugin.messaging.PluginMessageListener;
                    /**
                     * Gets the plugin that this registration is for.
                     */
                    // @ts-ignore
                    public getPlugin(): org.bukkit.plugin.Plugin;
                    /**
                     * Checks if this registration is still valid.
                     */
                    // @ts-ignore
                    public isValid(): boolean;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                }
            }
        }
    }
}
