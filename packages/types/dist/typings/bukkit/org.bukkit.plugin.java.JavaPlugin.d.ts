// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace java {
                // @ts-ignore
                abstract class JavaPlugin extends org.bukkit.plugin.PluginBase {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(loader: org.bukkit.plugin.java.JavaPluginLoader, description: org.bukkit.plugin.PluginDescriptionFile, dataFolder: java.io.File, file: java.io.File)
                    /**
                     * Returns the folder that the plugin data's files are located in. The
                     * folder may not yet exist.
                     */
                    // @ts-ignore
                    public getDataFolder(): java.io.File;
                    /**
                     * Gets the associated PluginLoader responsible for this plugin
                     */
                    // @ts-ignore
                    public getPluginLoader(): org.bukkit.plugin.PluginLoader;
                    /**
                     * Returns the Server instance currently running this plugin
                     */
                    // @ts-ignore
                    public getServer(): org.bukkit.Server;
                    /**
                     * Returns a value indicating whether or not this plugin is currently
                     * enabled
                     */
                    // @ts-ignore
                    public isEnabled(): boolean;
                    /**
                     * Returns the file which contains this plugin
                     */
                    // @ts-ignore
                    protected getFile(): java.io.File;
                    /**
                     * Returns the plugin.yaml file containing the details for this plugin
                     */
                    // @ts-ignore
                    public getDescription(): org.bukkit.plugin.PluginDescriptionFile;
                    // @ts-ignore
                    public getConfig(): org.bukkit.configuration.file.FileConfiguration;
                    /**
                     * Provides a reader for a text file located inside the jar.
                     * <p>
                     * The returned reader will read text with the UTF-8 charset.
                     */
                    // @ts-ignore
                    protected getTextResource(file: string): java.io.Reader;
                    // @ts-ignore
                    public reloadConfig(): void;
                    // @ts-ignore
                    public saveConfig(): void;
                    // @ts-ignore
                    public saveDefaultConfig(): void;
                    // @ts-ignore
                    public saveResource(resourcePath: string, replace: boolean): void;
                    // @ts-ignore
                    public getResource(filename: string): java.io.InputStream;
                    /**
                     * Returns the ClassLoader which holds this plugin
                     */
                    // @ts-ignore
                    protected getClassLoader(): java.lang.ClassLoader;
                    /**
                     * Sets the enabled state of this plugin
                     */
                    // @ts-ignore
                    protected setEnabled(enabled: boolean): void;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public onCommand(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, label: string, args: string): boolean;
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public onTabComplete(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, alias: string, args: string): java.util.List;
                    /**
                     * Gets the command with the given name, specific to this plugin. Commands
                     * need to be registered in the {@link PluginDescriptionFile#getCommands()
                     * PluginDescriptionFile} to exist at runtime.
                     */
                    // @ts-ignore
                    public getCommand(name: string): org.bukkit.command.PluginCommand;
                    // @ts-ignore
                    public onLoad(): void;
                    // @ts-ignore
                    public onDisable(): void;
                    // @ts-ignore
                    public onEnable(): void;
                    // @ts-ignore
                    public getDefaultWorldGenerator(worldName: string, id: string): org.bukkit.generator.ChunkGenerator;
                    // @ts-ignore
                    public isNaggable(): boolean;
                    // @ts-ignore
                    public setNaggable(canNag: boolean): void;
                    // @ts-ignore
                    public getLogger(): java.util.logging.Logger;
                    // @ts-ignore
                    public toString(): string;
                    /**
                     * This method provides fast access to the plugin that has {@link
                     * #getProvidingPlugin(Class) provided} the given plugin class, which is
                     * usually the plugin that implemented it.
                     * <p>
                     * An exception to this would be if plugin's jar that contained the class
                     * does not extend the class, where the intended plugin would have
                     * resided in a different jar / classloader.
                     */
                    // @ts-ignore
                    public static getPlugin(clazz: java.lang.Class): org.bukkit.plugin.java.JavaPlugin;
                    /**
                     * This method provides fast access to the plugin that has provided the
                     * given class.
                     */
                    // @ts-ignore
                    public static getProvidingPlugin(clazz: java.lang.Class): org.bukkit.plugin.java.JavaPlugin;
                }
            }
        }
    }
}
