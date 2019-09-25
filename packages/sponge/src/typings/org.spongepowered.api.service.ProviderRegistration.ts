declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                // @ts-ignore
                interface ProviderRegistration {
                    /**
                     * Gets the service of this provider registration.
                     */
                    // @ts-ignore
                     getService(): any;
                    /**
                     * Gets the service provider of this provider registration.
                     */
                    // @ts-ignore
                     getProvider(): any;
                    /**
                     * Gets the {@link PluginContainer} that registered the provider of this
                     * provider registration.
                     */
                    // @ts-ignore
                     getPlugin(): org.spongepowered.api.plugin.PluginContainer;
                }
            }
        }
    }
}
