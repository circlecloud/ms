declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace java {
                abstract class JavaPlugin {
                    constructor()
                    constructor(loader: org.bukkit.plugin.java.JavaPluginLoader, description: org.bukkit.plugin.PluginDescriptionFile, dataFolder: any, file: any)
                    /**
                     * Returns the folder that the plugin data's files are located in. The
                     * folder may not yet exist.
                     */
                    public getDataFolder(): any;
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
                     * Returns the file which contains this plugin
                     */
                    protected getFile(): any;
                    /**
                     * Returns the plugin.yaml file containing the details for this plugin
                     */
                    public getDescription(): org.bukkit.plugin.PluginDescriptionFile;
                    public getConfig(): org.bukkit.configuration.file.FileConfiguration;
                    /**
                     * Provides a reader for a text file located inside the jar.
                     * <p>
                     * The returned reader will read text with the UTF-8 charset.
                     */
                    protected getTextResource(file: string): any;
                    public reloadConfig(): void;
                    public saveConfig(): void;
                    public saveDefaultConfig(): void;
                    public saveResource(resourcePath: string, replace: boolean): void;
                    public getResource(filename: string): any;
                    /**
                     * Returns the ClassLoader which holds this plugin
                     */
                    protected getClassLoader(): any;
                    /**
                     * Sets the enabled state of this plugin
                     */
                    protected setEnabled(enabled: boolean): void;
                    /**
                     * {@inheritDoc}
                     */
                    public onCommand(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, label: string, args: string): boolean;
                    /**
                     * {@inheritDoc}
                     */
                    public onTabComplete(sender: org.bukkit.command.CommandSender, command: org.bukkit.command.Command, alias: string, args: string): any[] /*java.util.List*/;
                    /**
                     * Gets the command with the given name, specific to this plugin. Commands
                     * need to be registered in the {@link PluginDescriptionFile#getCommands()
                     * PluginDescriptionFile} to exist at runtime.
                     */
                    public getCommand(name: string): org.bukkit.command.PluginCommand;
                    public onLoad(): void;
                    public onDisable(): void;
                    public onEnable(): void;
                    public getDefaultWorldGenerator(worldName: string, id: string): org.bukkit.generator.ChunkGenerator;
                    public isNaggable(): boolean;
                    public setNaggable(canNag: boolean): void;
                    public getLogger(): any;
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
                    public static getPlugin(clazz: any): org.bukkit.plugin.java.JavaPlugin;
                    /**
                     * This method provides fast access to the plugin that has provided the
                     * given class.
                     */
                    public static getProvidingPlugin(clazz: any): org.bukkit.plugin.java.JavaPlugin;
                }
            }
        }
    }
}
