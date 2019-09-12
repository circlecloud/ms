declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace java {
                class JavaPluginLoader {
                    /**
                     * This class was not meant to be constructed explicitly
                     */
                    constructor(instance: org.bukkit.Server)
                    public loadPlugin(file: any): org.bukkit.plugin.Plugin;
                    public getPluginDescription(file: any): org.bukkit.plugin.PluginDescriptionFile;
                    public getPluginFileFilters(): any;
                    public createRegisteredListeners(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): Map<any, any> /*java.util.Map*/;
                    public enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                    public disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                }
            }
        }
    }
}
