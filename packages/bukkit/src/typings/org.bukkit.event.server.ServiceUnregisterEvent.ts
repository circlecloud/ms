declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class ServiceUnregisterEvent {
                    constructor(serviceProvider: org.bukkit.plugin.RegisteredServiceProvider)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
