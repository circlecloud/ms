declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
            interface PluginLoader {
                /**
                 * Loads the plugin contained in the specified file
                 */
                // @ts-ignore
                 loadPlugin(file: java.io.File): org.bukkit.plugin.Plugin;
                /**
                 * Loads a PluginDescriptionFile from the specified file
                 */
                // @ts-ignore
                 getPluginDescription(file: java.io.File): org.bukkit.plugin.PluginDescriptionFile;
                /**
                 * Returns a list of all filename filters expected by this PluginLoader
                 */
                // @ts-ignore
                 getPluginFileFilters(): java.util.regex.Pattern[];
                /**
                 * Creates and returns registered listeners for the event classes used in
                 * this listener
                 */
                // @ts-ignore
                 createRegisteredListeners(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): java.util.Map;
                /**
                 * Enables the specified plugin
                 * <p>
                 * Attempting to enable a plugin that is already enabled will have no
                 * effect
                 */
                // @ts-ignore
                 enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Disables the specified plugin
                 * <p>
                 * Attempting to disable a plugin that is not enabled will have no effect
                 */
                // @ts-ignore
                 disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
            }
        }
    }
}
