declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                // @ts-ignore
                interface ServiceManager {
                    /**
                     * Register a provider with the service manager.
                     * <p>Services are by definition replaceable at any given time.</p>
                     * <p>Services should only be registered during initialization. If services
                     * are registered later, then they may not be utilized.</p>
                     */
                    // @ts-ignore
                     setProvider(plugin: any, service: any, provider: any): void;
                    /**
                     * Return a provider for the given service, if one is available.
                     * <p>The returned provider may be a proxy to the real underlying proxy,
                     * depending on the implementation of the service manager.</p>
                     */
                    // @ts-ignore
                     provide(service: any): any;
                    /**
                     * Gets the {@link ProviderRegistration} for the given service, if available.
                     */
                    // @ts-ignore
                     getRegistration(service: any): any;
                    /**
                     * Gets whether the class of the type of service is already registered with
                     * this manager. This does not register or unregister any services.
                     */
                    // @ts-ignore
                     isRegistered(service: any): boolean;
                    /**
                     * Return a provider for the given service, raising an unchecked exception
                     * if a provider does not exist.
                     * <p>The returned provider may be a proxy to the real underlying proxy,
                     * depending on the implementation of the service manager.</p>
                     */
                    // @ts-ignore
                     provideUnchecked(service: any): any;
                }
            }
        }
    }
}
