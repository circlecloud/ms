declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                abstract class PluginEvent {
                    constructor(plugin: org.bukkit.plugin.Plugin)
                    /**
                     * Gets the plugin involved in this event
                     */
                    public getPlugin(): org.bukkit.plugin.Plugin;
                }
            }
        }
    }
}
