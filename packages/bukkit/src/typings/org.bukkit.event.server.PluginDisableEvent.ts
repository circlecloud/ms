declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                class PluginDisableEvent {
                    constructor(plugin: org.bukkit.plugin.Plugin)
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
