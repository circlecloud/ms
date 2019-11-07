// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
            interface Plugin extends org.bukkit.command.TabExecutor {
                /**
                 * Returns the folder that the plugin data's files are located in. The
                 * folder may not yet exist.
                 */
                // @ts-ignore
                 getDataFolder(): java.io.File;
                /**
                 * Returns the plugin.yaml file containing the details for this plugin
                 */
                // @ts-ignore
                 getDescription(): org.bukkit.plugin.PluginDescriptionFile;
                /**
                 * Gets a {@link FileConfiguration} for this plugin, read through
                 * "config.yml"
                 * <p>
                 * If there is a default config.yml embedded in this plugin, it will be
                 * provided as a default for this Configuration.
                 */
                // @ts-ignore
                 getConfig(): org.bukkit.configuration.file.FileConfiguration;
                /**
                 * Gets an embedded resource in this plugin
                 */
                // @ts-ignore
                 getResource(filename: string): java.io.InputStream;
                /**
                 * Saves the {@link FileConfiguration} retrievable by {@link #getConfig()}.
                 */
                // @ts-ignore
                 saveConfig(): void;
                /**
                 * Saves the raw contents of the default config.yml file to the location
                 * retrievable by {@link #getConfig()}.
                 * <p>
                 * This should fail silently if the config.yml already exists.
                 */
                // @ts-ignore
                 saveDefaultConfig(): void;
                /**
                 * Saves the raw contents of any resource embedded with a plugin's .jar
                 * file assuming it can be found using {@link #getResource(String)}.
                 * <p>
                 * The resource is saved into the plugin's data folder using the same
                 * hierarchy as the .jar file (subdirectories are preserved).
                 */
                // @ts-ignore
                 saveResource(resourcePath: string, replace: boolean): void;
                /**
                 * Discards any data in {@link #getConfig()} and reloads from disk.
                 */
                // @ts-ignore
                 reloadConfig(): void;
                /**
                 * Gets the associated PluginLoader responsible for this plugin
                 */
                // @ts-ignore
                 getPluginLoader(): org.bukkit.plugin.PluginLoader;
                /**
                 * Returns the Server instance currently running this plugin
                 */
                // @ts-ignore
                 getServer(): org.bukkit.Server;
                /**
                 * Returns a value indicating whether or not this plugin is currently
                 * enabled
                 */
                // @ts-ignore
                 isEnabled(): boolean;
                /**
                 * Called when this plugin is disabled
                 */
                // @ts-ignore
                 onDisable(): void;
                /**
                 * Called after a plugin is loaded but before it has been enabled.
                 * <p>
                 * When multiple plugins are loaded, the onLoad() for all plugins is
                 * called before any onEnable() is called.
                 */
                // @ts-ignore
                 onLoad(): void;
                /**
                 * Called when this plugin is enabled
                 */
                // @ts-ignore
                 onEnable(): void;
                /**
                 * Simple boolean if we can still nag to the logs about things
                 */
                // @ts-ignore
                 isNaggable(): boolean;
                /**
                 * Set naggable state
                 */
                // @ts-ignore
                 setNaggable(canNag: boolean): void;
                /**
                 * Gets a {@link ChunkGenerator} for use in a default world, as specified
                 * in the server configuration
                 */
                // @ts-ignore
                 getDefaultWorldGenerator(worldName: string, id: string): org.bukkit.generator.ChunkGenerator;
                /**
                 * Returns the plugin logger associated with this server's logger. The
                 * returned logger automatically tags all log messages with the plugin's
                 * name.
                 */
                // @ts-ignore
                 getLogger(): java.util.logging.Logger;
                /**
                 * Returns the name of the plugin.
                 * <p>
                 * This should return the bare name of the plugin and should be used for
                 * comparison.
                 */
                // @ts-ignore
                 getName(): string;
            }
        }
    }
}
