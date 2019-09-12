declare namespace org {
    namespace bukkit {
        namespace plugin {
            class SimpleServicesManager {
                constructor()
                /**
                 * Register a provider of a service.
                 */
                public register(service: any, provider: any, plugin: org.bukkit.plugin.Plugin, priority: org.bukkit.plugin.ServicePriority): void;
                /**
                 * Unregister all the providers registered by a particular plugin.
                 */
                public unregisterAll(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Unregister a particular provider for a particular service.
                 */
                public unregister(service: any, provider: any): void;
                /**
                 * Unregister a particular provider.
                 */
                public unregister(provider: any): void;
                /**
                 * Queries for a provider. This may return if no provider has been
                 * registered for a service. The highest priority provider is returned.
                 */
                public load(service: any): any;
                /**
                 * Queries for a provider registration. This may return if no provider
                 * has been registered for a service.
                 */
                public getRegistration(service: any): org.bukkit.plugin.RegisteredServiceProvider;
                /**
                 * Get registrations of providers for a plugin.
                 */
                public getRegistrations(plugin: org.bukkit.plugin.Plugin): any[] /*java.util.List*/;
                /**
                 * Get registrations of providers for a service. The returned list is
                 * an unmodifiable copy.
                 */
                public getRegistrations(service: any): any[] /*java.util.List*/;
                /**
                 * Get a list of known services. A service is known if it has registered
                 * providers for it.
                 */
                public getKnownServices(): any[] /*java.util.Set*/;
                /**
                 * Returns whether a provider has been registered for a service.
                 */
                public isProvidedFor(service: any): boolean;
            }
        }
    }
}
