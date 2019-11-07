declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
            interface ServicesManager {
                /**
                 * Register a provider of a service.
                 */
                // @ts-ignore
                 register(service: java.lang.Class, provider: java.lang.Object, plugin: org.bukkit.plugin.Plugin, priority: org.bukkit.plugin.ServicePriority): void;
                /**
                 * Unregister all the providers registered by a particular plugin.
                 */
                // @ts-ignore
                 unregisterAll(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Unregister a particular provider for a particular service.
                 */
                // @ts-ignore
                 unregister(service: java.lang.Class, provider: java.lang.Object): void;
                /**
                 * Unregister a particular provider.
                 */
                // @ts-ignore
                 unregister(provider: java.lang.Object): void;
                /**
                 * Queries for a provider. This may return if no provider has been
                 * registered for a service. The highest priority provider is returned.
                 */
                // @ts-ignore
                 load(service: java.lang.Class): java.lang.Object;
                /**
                 * Queries for a provider registration. This may return if no provider
                 * has been registered for a service.
                 */
                // @ts-ignore
                 getRegistration(service: java.lang.Class): org.bukkit.plugin.RegisteredServiceProvider;
                /**
                 * Get registrations of providers for a plugin.
                 */
                // @ts-ignore
                 getRegistrations(plugin: org.bukkit.plugin.Plugin): java.util.List;
                /**
                 * Get registrations of providers for a service. The returned list is
                 * unmodifiable.
                 */
                // @ts-ignore
                 getRegistrations(service: java.lang.Class): java.util.Collection;
                /**
                 * Get a list of known services. A service is known if it has registered
                 * providers for it.
                 */
                // @ts-ignore
                 getKnownServices(): java.util.Collection;
                /**
                 * Returns whether a provider has been registered for a service. Do not
                 * check this first only to call <code>load(service)</code> later, as that
                 * would be a non-thread safe situation.
                 */
                // @ts-ignore
                 isProvidedFor(service: java.lang.Class): boolean;
            }
        }
    }
}
