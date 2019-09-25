declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                // @ts-ignore
                 class SimpleServiceManager implements org.spongepowered.api.service.ServiceManager {
                    /**
                     * Construct a simple {@link ServiceManager}.
                     */
                    constructor(pluginManager: org.spongepowered.api.plugin.PluginManager)
                    // @ts-ignore
                    public setProvider(plugin: any, service: any, provider: any): void;
                    // @ts-ignore
                    public provide(service: any): any;
                    // @ts-ignore
                    public getRegistration(service: any): any;
                    // @ts-ignore
                    public provideUnchecked(service: any): any;
                }
            }
        }
    }
}
