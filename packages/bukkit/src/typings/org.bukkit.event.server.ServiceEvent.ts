declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                abstract class ServiceEvent {
                    constructor(provider: org.bukkit.plugin.RegisteredServiceProvider)
                    public getProvider(): org.bukkit.plugin.RegisteredServiceProvider;
                }
            }
        }
    }
}
