declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                class ServiceRegisterEvent {
                    constructor(registeredProvider: org.bukkit.plugin.RegisteredServiceProvider)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
