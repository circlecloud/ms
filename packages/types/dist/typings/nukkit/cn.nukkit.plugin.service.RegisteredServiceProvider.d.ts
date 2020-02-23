declare namespace cn {
    namespace nukkit {
        namespace plugin {
            namespace service {
                // @ts-ignore
                 class RegisteredServiceProvider extends java.lang.Object {
                    /**
                     * Return the provided service.
                     */
                    // @ts-ignore
                    public getService(): java.lang.Class;
                    /**
                     * Return the plugin provide this service.
                     */
                    // @ts-ignore
                    public getPlugin(): cn.nukkit.plugin.Plugin;
                    /**
                     * Return the service provider.
                     */
                    // @ts-ignore
                    public getProvider(): java.lang.Object;
                    // @ts-ignore
                    public getPriority(): cn.nukkit.plugin.service.ServicePriority;
                    // @ts-ignore
                    public equals(o: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public compareTo(other: cn.nukkit.plugin.service.RegisteredServiceProvider): number;
                }
            }
        }
    }
}
