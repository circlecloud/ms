declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
            interface ServicesManager {
                /**
                 * Register a provider of a service.
                 */
                 register(service: any, provider: any, plugin: org.bukkit.plugin.Plugin, priority: org.bukkit.plugin.ServicePriority): void;
                /**
                 * Unregister all the providers registered by a particular plugin.
                 */
                 unregisterAll(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Unregister a particular provider for a particular service.
                 */
                 unregister(service: any, provider: any): void;
                /**
                 * Unregister a particular provider.
                 */
                 unregister(provider: any): void;
                /**
                 * Queries for a provider. This may return if no provider has been
                 * registered for a service. The highest priority provider is returned.
                 */
                 load(service: any): any;
                /**
                 * Queries for a provider registration. This may return if no provider
                 * has been registered for a service.
                 */
                 getRegistration(service: any): org.bukkit.plugin.RegisteredServiceProvider;
                /**
                 * Get registrations of providers for a plugin.
                 */
                 getRegistrations(plugin: org.bukkit.plugin.Plugin): any[] /*java.util.List*/;
                /**
                 * Get registrations of providers for a service. The returned list is
                 * unmodifiable.
                 */
                 getRegistrations(service: any): any[] /*java.util.Collection*/;
                /**
                 * Get a list of known services. A service is known if it has registered
                 * providers for it.
                 */
                 getKnownServices(): any[] /*java.util.Collection*/;
                /**
                 * Returns whether a provider has been registered for a service. Do not
                 * check this first only to call <code>load(service)</code> later, as that
                 * would be a non-thread safe situation.
                 */
                 isProvidedFor(service: any): boolean;
            }
        }
    }
}
