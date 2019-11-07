declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                // @ts-ignore
                interface ChannelBinding {
                    /**
                     * Gets the registrar that this channel is bound to.
                     */
                    // @ts-ignore
                     getRegistrar(): org.spongepowered.api.network.ChannelRegistrar;
                    /**
                     * Gets this channel's bound name.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Gets the plugin that created this binding.
                     */
                    // @ts-ignore
                     getOwner(): org.spongepowered.api.plugin.PluginContainer;
                }
            }
        }
    }
}
