declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace java {
                // @ts-ignore
                 class JavaPluginLoader extends java.lang.Object implements org.bukkit.plugin.PluginLoader {
                    /**
                     * This class was not meant to be constructed explicitly
                     */
                    // @ts-ignore
                    constructor(instance: org.bukkit.Server)
                    // @ts-ignore
                    public loadPlugin(file: java.io.File): org.bukkit.plugin.Plugin;
                    // @ts-ignore
                    public getPluginDescription(file: java.io.File): org.bukkit.plugin.PluginDescriptionFile;
                    // @ts-ignore
                    public getPluginFileFilters(): java.util.regex.Pattern[];
                    // @ts-ignore
                    public createRegisteredListeners(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): java.util.Map;
                    // @ts-ignore
                    public enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                    // @ts-ignore
                    public disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                }
            }
        }
    }
}
