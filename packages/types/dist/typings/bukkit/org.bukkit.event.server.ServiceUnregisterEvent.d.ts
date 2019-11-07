// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class ServiceUnregisterEvent extends org.bukkit.event.server.ServiceEvent {
                    // @ts-ignore
                    constructor(serviceProvider: org.bukkit.plugin.RegisteredServiceProvider)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
