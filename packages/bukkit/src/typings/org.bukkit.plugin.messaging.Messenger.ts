declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                // @ts-ignore
                interface Messenger {
                     MAX_MESSAGE_SIZE: number;
                     MAX_CHANNEL_SIZE: number;
                    /**
                     * Checks if the specified channel is a reserved name.
                     * <br>
                     * All channels within the "minecraft" namespace except for
                     * "minecraft:brand" are reserved.
                     */
                     isReservedChannel(channel: string): boolean;
                    /**
                     * Registers the specific plugin to the requested outgoing plugin channel,
                     * allowing it to send messages through that channel to any clients.
                     */
                     registerOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    /**
                     * Unregisters the specific plugin from the requested outgoing plugin
                     * channel, no longer allowing it to send messages through that channel to
                     * any clients.
                     */
                     unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    /**
                     * Unregisters the specific plugin from all outgoing plugin channels, no
                     * longer allowing it to send any plugin messages.
                     */
                     unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin): void;
                    /**
                     * Registers the specific plugin for listening on the requested incoming
                     * plugin channel, allowing it to act upon any plugin messages.
                     */
                     registerIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): org.bukkit.plugin.messaging.PluginMessageListenerRegistration;
                    /**
                     * Unregisters the specific plugin's listener from listening on the
                     * requested incoming plugin channel, no longer allowing it to act upon
                     * any plugin messages.
                     */
                     unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): void;
                    /**
                     * Unregisters the specific plugin from listening on the requested
                     * incoming plugin channel, no longer allowing it to act upon any plugin
                     * messages.
                     */
                     unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void;
                    /**
                     * Unregisters the specific plugin from listening on all plugin channels
                     * through all listeners.
                     */
                     unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin): void;
                    /**
                     * Gets a set containing all the outgoing plugin channels.
                     */
                     getOutgoingChannels(): any[] /*java.util.Set*/;
                    /**
                     * Gets a set containing all the outgoing plugin channels that the
                     * specified plugin is registered to.
                     */
                     getOutgoingChannels(plugin: org.bukkit.plugin.Plugin): any[] /*java.util.Set*/;
                    /**
                     * Gets a set containing all the incoming plugin channels.
                     */
                     getIncomingChannels(): any[] /*java.util.Set*/;
                    /**
                     * Gets a set containing all the incoming plugin channels that the
                     * specified plugin is registered for.
                     */
                     getIncomingChannels(plugin: org.bukkit.plugin.Plugin): any[] /*java.util.Set*/;
                    /**
                     * Gets a set containing all the incoming plugin channel registrations
                     * that the specified plugin has.
                     */
                     getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin): any[] /*java.util.Set*/;
                    /**
                     * Gets a set containing all the incoming plugin channel registrations
                     * that are on the requested channel.
                     */
                     getIncomingChannelRegistrations(channel: string): any[] /*java.util.Set*/;
                    /**
                     * Gets a set containing all the incoming plugin channel registrations
                     * that the specified plugin has on the requested channel.
                     */
                     getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin, channel: string): any[] /*java.util.Set*/;
                    /**
                     * Checks if the specified plugin message listener registration is valid.
                     * <p>
                     * A registration is considered valid if it has not be unregistered and
                     * that the plugin is still enabled.
                     */
                     isRegistrationValid(registration: org.bukkit.plugin.messaging.PluginMessageListenerRegistration): boolean;
                    /**
                     * Checks if the specified plugin has registered to receive incoming
                     * messages through the requested channel.
                     */
                     isIncomingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean;
                    /**
                     * Checks if the specified plugin has registered to send outgoing messages
                     * through the requested channel.
                     */
                     isOutgoingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean;
                    /**
                     * Dispatches the specified incoming message to any registered listeners.
                     */
                     dispatchIncomingMessage(source: org.bukkit.entity.Player, channel: string, message: number): void;
                }
            }
        }
    }
}
