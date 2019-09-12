declare namespace org {
    namespace bukkit {
        namespace plugin {
            class Plugin {
                /**
                 * Returns the folder that the plugin data's files are located in. The
                 * folder may not yet exist.
                 */
                public getDataFolder(): any;
                /**
                 * Returns the plugin.yaml file containing the details for this plugin
                 */
                public getDescription(): org.bukkit.plugin.PluginDescriptionFile;
                /**
                 * Gets a {@link FileConfiguration} for this plugin, read through
                 * "config.yml"
                 * <p>
                 * If there is a default config.yml embedded in this plugin, it will be
                 * provided as a default for this Configuration.
                 */
                public getConfig(): org.bukkit.configuration.file.FileConfiguration;
                /**
                 * Gets an embedded resource in this plugin
                 */
                public getResource(filename: string): any;
                /**
                 * Saves the {@link FileConfiguration} retrievable by {@link #getConfig()}.
                 */
                public saveConfig(): void;
                /**
                 * Saves the raw contents of the default config.yml file to the location
                 * retrievable by {@link #getConfig()}.
                 * <p>
                 * This should fail silently if the config.yml already exists.
                 */
                public saveDefaultConfig(): void;
                /**
                 * Saves the raw contents of any resource embedded with a plugin's .jar
                 * file assuming it can be found using {@link #getResource(String)}.
                 * <p>
                 * The resource is saved into the plugin's data folder using the same
                 * hierarchy as the .jar file (subdirectories are preserved).
                 */
                public saveResource(resourcePath: string, replace: boolean): void;
                /**
                 * Discards any data in {@link #getConfig()} and reloads from disk.
                 */
                public reloadConfig(): void;
                /**
                 * Gets the associated PluginLoader responsible for this plugin
                 */
                public getPluginLoader(): org.bukkit.plugin.PluginLoader;
                /**
                 * Returns the Server instance currently running this plugin
                 */
                public getServer(): org.bukkit.Server;
                /**
                 * Returns a value indicating whether or not this plugin is currently
                 * enabled
                 */
                public isEnabled(): boolean;
                /**
                 * Called when this plugin is disabled
                 */
                public onDisable(): void;
                /**
                 * Called after a plugin is loaded but before it has been enabled.
                 * <p>
                 * When multiple plugins are loaded, the onLoad() for all plugins is
                 * called before any onEnable() is called.
                 */
                public onLoad(): void;
                /**
                 * Called when this plugin is enabled
                 */
                public onEnable(): void;
                /**
                 * Simple boolean if we can still nag to the logs about things
                 */
                public isNaggable(): boolean;
                /**
                 * Set naggable state
                 */
                public setNaggable(canNag: boolean): void;
                /**
                 * Gets a {@link ChunkGenerator} for use in a default world, as specified
                 * in the server configuration
                 */
                public getDefaultWorldGenerator(worldName: string, id: string): org.bukkit.generator.ChunkGenerator;
                /**
                 * Returns the plugin logger associated with this server's logger. The
                 * returned logger automatically tags all log messages with the plugin's
                 * name.
                 */
                public getLogger(): any;
                /**
                 * Returns the name of the plugin.
                 * <p>
                 * This should return the bare name of the plugin and should be used for
                 * comparison.
                 */
                public getName(): string;
            }
        }
    }
}
