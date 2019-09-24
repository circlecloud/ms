declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class PluginDisableEvent extends org.bukkit.event.server.PluginEvent {
                    constructor(plugin: org.bukkit.plugin.Plugin)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
