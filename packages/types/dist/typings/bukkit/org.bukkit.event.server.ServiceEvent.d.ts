declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                abstract class ServiceEvent extends org.bukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(provider: org.bukkit.plugin.RegisteredServiceProvider)
                    // @ts-ignore
                    public getProvider(): org.bukkit.plugin.RegisteredServiceProvider;
                }
            }
        }
    }
}
