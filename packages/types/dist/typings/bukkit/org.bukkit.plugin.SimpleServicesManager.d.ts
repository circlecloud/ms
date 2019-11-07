// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class SimpleServicesManager extends java.lang.Object implements org.bukkit.plugin.ServicesManager {
                // @ts-ignore
                constructor()
                /**
                 * Register a provider of a service.
                 */
                // @ts-ignore
                public register(service: java.lang.Class, provider: java.lang.Object, plugin: org.bukkit.plugin.Plugin, priority: org.bukkit.plugin.ServicePriority): void;
                /**
                 * Unregister all the providers registered by a particular plugin.
                 */
                // @ts-ignore
                public unregisterAll(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Unregister a particular provider for a particular service.
                 */
                // @ts-ignore
                public unregister(service: java.lang.Class, provider: java.lang.Object): void;
                /**
                 * Unregister a particular provider.
                 */
                // @ts-ignore
                public unregister(provider: java.lang.Object): void;
                /**
                 * Queries for a provider. This may return if no provider has been
                 * registered for a service. The highest priority provider is returned.
                 */
                // @ts-ignore
                public load(service: java.lang.Class): java.lang.Object;
                /**
                 * Queries for a provider registration. This may return if no provider
                 * has been registered for a service.
                 */
                // @ts-ignore
                public getRegistration(service: java.lang.Class): org.bukkit.plugin.RegisteredServiceProvider;
                /**
                 * Get registrations of providers for a plugin.
                 */
                // @ts-ignore
                public getRegistrations(plugin: org.bukkit.plugin.Plugin): java.util.List;
                /**
                 * Get registrations of providers for a service. The returned list is
                 * an unmodifiable copy.
                 */
                // @ts-ignore
                public getRegistrations(service: java.lang.Class): java.util.List;
                /**
                 * Get a list of known services. A service is known if it has registered
                 * providers for it.
                 */
                // @ts-ignore
                public getKnownServices(): java.util.Set;
                /**
                 * Returns whether a provider has been registered for a service.
                 */
                // @ts-ignore
                public isProvidedFor(service: java.lang.Class): boolean;
            }
        }
    }
}
