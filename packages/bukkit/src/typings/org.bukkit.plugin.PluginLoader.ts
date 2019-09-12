declare namespace org {
    namespace bukkit {
        namespace plugin {
            class PluginLoader {
                /**
                 * Loads the plugin contained in the specified file
                 */
                public loadPlugin(file: any): org.bukkit.plugin.Plugin;
                /**
                 * Loads a PluginDescriptionFile from the specified file
                 */
                public getPluginDescription(file: any): org.bukkit.plugin.PluginDescriptionFile;
                /**
                 * Returns a list of all filename filters expected by this PluginLoader
                 */
                public getPluginFileFilters(): any;
                /**
                 * Creates and returns registered listeners for the event classes used in
                 * this listener
                 */
                public createRegisteredListeners(listener: org.bukkit.event.Listener, plugin: org.bukkit.plugin.Plugin): Map<any, any> /*java.util.Map*/;
                /**
                 * Enables the specified plugin
                 * <p>
                 * Attempting to enable a plugin that is already enabled will have no
                 * effect
                 */
                public enablePlugin(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Disables the specified plugin
                 * <p>
                 * Attempting to disable a plugin that is not enabled will have no effect
                 */
                public disablePlugin(plugin: org.bukkit.plugin.Plugin): void;
            }
        }
    }
}
