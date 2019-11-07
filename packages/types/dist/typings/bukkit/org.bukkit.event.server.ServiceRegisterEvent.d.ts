declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class ServiceRegisterEvent extends org.bukkit.event.server.ServiceEvent {
                    // @ts-ignore
                    constructor(registeredProvider: org.bukkit.plugin.RegisteredServiceProvider)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
