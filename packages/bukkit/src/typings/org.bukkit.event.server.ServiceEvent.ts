declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                abstract class ServiceEvent extends org.bukkit.event.server.ServerEvent {
                    constructor(provider: org.bukkit.plugin.RegisteredServiceProvider)
                    public getProvider(): org.bukkit.plugin.RegisteredServiceProvider;
                }
            }
        }
    }
}
