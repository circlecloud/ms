declare namespace cn {
    namespace nukkit {
        namespace plugin {
            namespace service {
                // @ts-ignore
                interface ServiceManager {
                    /**
                     * Register an object as a service's provider.
                     */
                    // @ts-ignore
                     register(service: java.lang.Class, provider: java.lang.Object, plugin: cn.nukkit.plugin.Plugin, priority: cn.nukkit.plugin.service.ServicePriority): boolean;
                    /**
                     * Cancel service's provider(s) offered this plugin.
                     */
                    // @ts-ignore
                     cancel(plugin: cn.nukkit.plugin.Plugin): java.util.List;
                    /**
                     * Cancel a service's provider.
                     */
                    // @ts-ignore
                     cancel(service: java.lang.Class, provider: java.lang.Object): cn.nukkit.plugin.service.RegisteredServiceProvider;
                    /**
                     * Return the service's provider.
                     */
                    // @ts-ignore
                     getProvider(service: java.lang.Class): cn.nukkit.plugin.service.RegisteredServiceProvider;
                    /**
                     * Return the known service(s).
                     */
                    // @ts-ignore
                     getKnownService(): java.util.List;
                    // @ts-ignore
                     getRegistrations(plugin: cn.nukkit.plugin.Plugin): java.util.List;
                    // @ts-ignore
                     getRegistrations(service: java.lang.Class): java.util.List;
                    // @ts-ignore
                     isProvidedFor(service: java.lang.Class): boolean;
                }
            }
        }
    }
}
