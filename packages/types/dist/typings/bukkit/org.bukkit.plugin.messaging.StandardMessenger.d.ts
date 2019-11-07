declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                // @ts-ignore
                 class StandardMessenger extends java.lang.Object implements org.bukkit.plugin.messaging.Messenger {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public isReservedChannel(channel: string): boolean;
                    // @ts-ignore
                    public registerOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    // @ts-ignore
                    public unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    // @ts-ignore
                    public unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin): void;
                    // @ts-ignore
                    public registerIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): org.bukkit.plugin.messaging.PluginMessageListenerRegistration;
                    // @ts-ignore
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): void;
                    // @ts-ignore
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    // @ts-ignore
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin): void;
                    // @ts-ignore
                    public getOutgoingChannels(): java.util.Set;
                    // @ts-ignore
                    public getOutgoingChannels(plugin: org.bukkit.plugin.Plugin): java.util.Set;
                    // @ts-ignore
                    public getIncomingChannels(): java.util.Set;
                    // @ts-ignore
                    public getIncomingChannels(plugin: org.bukkit.plugin.Plugin): java.util.Set;
                    // @ts-ignore
                    public getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin): java.util.Set;
                    // @ts-ignore
                    public getIncomingChannelRegistrations(channel: string): java.util.Set;
                    // @ts-ignore
                    public getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin, channel: string): java.util.Set;
                    // @ts-ignore
                    public isRegistrationValid(registration: org.bukkit.plugin.messaging.PluginMessageListenerRegistration): boolean;
                    // @ts-ignore
                    public isIncomingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean;
                    // @ts-ignore
                    public isOutgoingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean;
                    // @ts-ignore
                    public dispatchIncomingMessage(source: org.bukkit.entity.Player, channel: string, message: number): void;
                    /**
                     * Validates a Plugin Channel name.
                     */
                    // @ts-ignore
                    public static validateChannel(channel: string): void;
                    /**
                     * Validates and corrects a Plugin Channel name. Method is not reentrant / idempotent.
                     */
                    // @ts-ignore
                    public static validateAndCorrectChannel(channel: string): string;
                    /**
                     * Validates the input of a Plugin Message, ensuring the arguments are all
                     * valid.
                     */
                    // @ts-ignore
                    public static validatePluginMessage(messenger: org.bukkit.plugin.messaging.Messenger, source: org.bukkit.plugin.Plugin, channel: string, message: number): void;
                }
            }
        }
    }
}
