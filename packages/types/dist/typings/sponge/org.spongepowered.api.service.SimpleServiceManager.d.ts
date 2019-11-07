declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                // @ts-ignore
                 class SimpleServiceManager extends java.lang.Object implements org.spongepowered.api.service.ServiceManager {
                    /**
                     * Construct a simple {@link ServiceManager}.
                     */
                    // @ts-ignore
                    constructor(pluginManager: org.spongepowered.api.plugin.PluginManager)
                    // @ts-ignore
                    public setProvider(plugin: java.lang.Object, service: java.lang.Class, provider: java.lang.Object): void;
                    // @ts-ignore
                    public provide(service: java.lang.Class): java.util.Optional;
                    // @ts-ignore
                    public getRegistration(service: java.lang.Class): java.util.Optional;
                    // @ts-ignore
                    public provideUnchecked(service: java.lang.Class): java.lang.Object;
                }
            }
        }
    }
}
