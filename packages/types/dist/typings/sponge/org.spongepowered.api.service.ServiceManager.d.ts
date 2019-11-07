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
                     setProvider(plugin: java.lang.Object, service: java.lang.Class, provider: java.lang.Object): void;
                    /**
                     * Return a provider for the given service, if one is available.
                     * <p>The returned provider may be a proxy to the real underlying proxy,
                     * depending on the implementation of the service manager.</p>
                     */
                    // @ts-ignore
                     provide(service: java.lang.Class): java.util.Optional;
                    /**
                     * Gets the {@link ProviderRegistration} for the given service, if available.
                     */
                    // @ts-ignore
                     getRegistration(service: java.lang.Class): java.util.Optional;
                    /**
                     * Gets whether the class of the type of service is already registered with
                     * this manager. This does not register or unregister any services.
                     */
                    // @ts-ignore
                     isRegistered(service: java.lang.Class): boolean;
                    /**
                     * Return a provider for the given service, raising an unchecked exception
                     * if a provider does not exist.
                     * <p>The returned provider may be a proxy to the real underlying proxy,
                     * depending on the implementation of the service manager.</p>
                     */
                    // @ts-ignore
                     provideUnchecked(service: java.lang.Class): java.lang.Object;
                }
            }
        }
    }
}
