declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                // @ts-ignore
                 class StandardMessenger implements org.bukkit.plugin.messaging.Messenger {
                    constructor()
                    public isReservedChannel(channel: string): boolean;
                    public registerOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    public unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    public unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin): void;
                    public registerIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): org.bukkit.plugin.messaging.PluginMessageListenerRegistration;
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): void;
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin): void;
                    public getOutgoingChannels(): any[] /*java.util.Set*/;
                    public getOutgoingChannels(plugin: org.bukkit.plugin.Plugin): any[] /*java.util.Set*/;
                    public getIncomingChannels(): any[] /*java.util.Set*/;
                    public getIncomingChannels(plugin: org.bukkit.plugin.Plugin): any[] /*java.util.Set*/;
                    public getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin): any[] /*java.util.Set*/;
                    public getIncomingChannelRegistrations(channel: string): any[] /*java.util.Set*/;
                    public getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin, channel: string): any[] /*java.util.Set*/;
                    public isRegistrationValid(registration: org.bukkit.plugin.messaging.PluginMessageListenerRegistration): boolean;
                    public isIncomingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean;
                    public isOutgoingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean;
                    public dispatchIncomingMessage(source: org.bukkit.entity.Player, channel: string, message: number): void;
                    /**
                     * Validates a Plugin Channel name.
                     */
                    public static validateChannel(channel: string): void;
                    /**
                     * Validates and corrects a Plugin Channel name. Method is not reentrant / idempotent.
                     */
                    public static validateAndCorrectChannel(channel: string): string;
                    /**
                     * Validates the input of a Plugin Message, ensuring the arguments are all
                     * valid.
                     */
                    public static validatePluginMessage(messenger: org.bukkit.plugin.messaging.Messenger, source: org.bukkit.plugin.Plugin, channel: string, message: number): void;
                }
            }
        }
    }
}
