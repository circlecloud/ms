declare namespace cn {
    namespace nukkit {
        namespace plugin {
            namespace service {
                // @ts-ignore
                 class NKServiceManager extends java.lang.Object implements cn.nukkit.plugin.service.ServiceManager {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public register(service: java.lang.Class, provider: java.lang.Object, plugin: cn.nukkit.plugin.Plugin, priority: cn.nukkit.plugin.service.ServicePriority): boolean;
                    // @ts-ignore
                    protected provide(service: java.lang.Class, instance: java.lang.Object, plugin: cn.nukkit.plugin.Plugin, priority: cn.nukkit.plugin.service.ServicePriority): boolean;
                    // @ts-ignore
                    public cancel(plugin: cn.nukkit.plugin.Plugin): java.util.List;
                    // @ts-ignore
                    public cancel(service: java.lang.Class, provider: java.lang.Object): cn.nukkit.plugin.service.RegisteredServiceProvider;
                    // @ts-ignore
                    public getProvider(service: java.lang.Class): cn.nukkit.plugin.service.RegisteredServiceProvider;
                    // @ts-ignore
                    public getKnownService(): java.util.List;
                    // @ts-ignore
                    public getRegistrations(plugin: cn.nukkit.plugin.Plugin): java.util.List;
                    // @ts-ignore
                    public getRegistrations(service: java.lang.Class): java.util.List;
                    // @ts-ignore
                    public isProvidedFor(service: java.lang.Class): boolean;
                }
            }
        }
    }
}
