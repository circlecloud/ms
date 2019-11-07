// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                abstract class PluginEvent extends org.bukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(plugin: org.bukkit.plugin.Plugin)
                    /**
                     * Gets the plugin involved in this event
                     */
                    // @ts-ignore
                    public getPlugin(): org.bukkit.plugin.Plugin;
                }
            }
        }
    }
}
