declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                // @ts-ignore
                interface ChannelRegistrar {
                    /**
                     * Creates a new channel binding for the given channel name. The channel can
                     * be used to send and receive messages.
                     */
                    // @ts-ignore
                     createChannel(plugin: any, channel: string): org.spongepowered.api.network.ChannelBinding.IndexedMessageChannel;
                    /**
                     * Creates a new raw channel binding. The channel can be used to send and
                     * Receive data from {@link ChannelBuf} objects.
                     */
                    // @ts-ignore
                     createRawChannel(plugin: any, channel: string): org.spongepowered.api.network.ChannelBinding.RawDataChannel;
                    /**
                     * Gets a channel binding if a channel registered by that name exists.
                     */
                    // @ts-ignore
                     getChannel(channel: string): any;
                    /**
                     * Gets or creates a {@link ChannelBinding.IndexedMessageChannel} by the
                     * given name. If the channel exists and is a indexed message channel, then
                     * it is returned. If the channel is not an indexed message channel, then
                     * {@link IllegalStateException} is thrown. Otherwise, a new channel is
                     * created.
                     */
                    // @ts-ignore
                     getOrCreate(plugin: any, channel: string): org.spongepowered.api.network.ChannelBinding.IndexedMessageChannel;
                    /**
                     * Gets or creates a {@link ChannelBinding.RawDataChannel} by the given
                     * name. If the channel exists and is a raw data channel, then it is
                     * returned. If the channel is not a raw data channel, then
                     * {@link IllegalStateException} is thrown. Otherwise, a new channel is
                     * created.
                     */
                    // @ts-ignore
                     getOrCreateRaw(plugin: any, channel: string): org.spongepowered.api.network.ChannelBinding.RawDataChannel;
                    /**
                     * Remove the channel binding from this registrar, freeing up the channel
                     * name. All method calls on the channel binding instance will now throw
                     * {@link IllegalStateException}.
                     */
                    // @ts-ignore
                     unbindChannel(channel: org.spongepowered.api.network.ChannelBinding): void;
                    /**
                     * Gets the set of registered channels.
                     */
                    // @ts-ignore
                     getRegisteredChannels(side: org.spongepowered.api.Platform.Type): any[] /*java.util.Set*/;
                    /**
                     * Returns whether the given channel name is available for creating with
                     * {@link #createChannel}.
                     */
                    // @ts-ignore
                     isChannelAvailable(channelName: string): boolean;
                }
            }
        }
    }
}
