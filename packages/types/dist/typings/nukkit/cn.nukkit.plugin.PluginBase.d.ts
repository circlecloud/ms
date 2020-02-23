declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
            abstract class PluginBase extends java.lang.Object implements cn.nukkit.plugin.Plugin {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public onLoad(): void;
                // @ts-ignore
                public onEnable(): void;
                // @ts-ignore
                public onDisable(): void;
                // @ts-ignore
                public isEnabled(): boolean;
                /**
                 * 加载这个插件。<br>
                 * Enables this plugin.
                 * <p>
                 * <p>如果你需要卸载这个插件，建议使用{@link #setEnabled(boolean)}<br>
                 * If you need to disable this plugin, it's recommended to use {@link #setEnabled(boolean)}</p>
                 */
                // @ts-ignore
                public setEnabled(): void;
                /**
                 * 加载或卸载这个插件。<br>
                 * Enables or disables this plugin.
                 * <p>
                 * <p>插件管理器插件常常使用这个方法。<br>
                 * It's normally used by a plugin manager plugin to manage plugins.</p>
                 */
                // @ts-ignore
                public setEnabled(value: boolean): void;
                // @ts-ignore
                public isDisabled(): boolean;
                // @ts-ignore
                public getDataFolder(): java.io.File;
                // @ts-ignore
                public getDescription(): cn.nukkit.plugin.PluginDescription;
                /**
                 * 初始化这个插件。<br>
                 * Initialize the plugin.
                 * <p>
                 * <p>这个方法会在加载(load)之前被插件加载器调用，初始化关于插件的一些事项，不能被重写。<br>
                 * Called by plugin loader before load, and initialize the plugin. Can't be overridden.</p>
                 */
                // @ts-ignore
                public init(loader: cn.nukkit.plugin.PluginLoader, server: cn.nukkit.Server, description: cn.nukkit.plugin.PluginDescription, dataFolder: java.io.File, file: java.io.File): void;
                // @ts-ignore
                public getLogger(): cn.nukkit.plugin.PluginLogger;
                /**
                 * 返回这个插件是否已经初始化。<br>
                 * Returns if this plugin is initialized.
                 */
                // @ts-ignore
                public isInitialized(): boolean;
                /**
                 * TODO: FINISH JAVADOC
                 */
                // @ts-ignore
                public getCommand(name: string): cn.nukkit.command.PluginIdentifiableCommand;
                // @ts-ignore
                public onCommand(sender: cn.nukkit.command.CommandSender, command: cn.nukkit.command.Command, label: string, args: string): boolean;
                // @ts-ignore
                public getResource(filename: string): java.io.InputStream;
                // @ts-ignore
                public saveResource(filename: string): boolean;
                // @ts-ignore
                public saveResource(filename: string, replace: boolean): boolean;
                // @ts-ignore
                public saveResource(filename: string, outputName: string, replace: boolean): boolean;
                // @ts-ignore
                public getConfig(): cn.nukkit.utils.Config;
                // @ts-ignore
                public saveConfig(): void;
                // @ts-ignore
                public saveDefaultConfig(): void;
                // @ts-ignore
                public reloadConfig(): void;
                // @ts-ignore
                public getServer(): cn.nukkit.Server;
                // @ts-ignore
                public getName(): string;
                /**
                 * 返回这个插件完整的名字。<br>
                 * Returns the full name of this plugin.
                 * <p>
                 * <p>一个插件完整的名字由{@code 名字+" v"+版本号}组成。比如：<br>
                 * A full name of a plugin is composed by {@code name+" v"+version}.for example:</p>
                 * <p>{@code HelloWorld v1.0.0}</p>
                 */
                // @ts-ignore
                public getFullName(): string;
                /**
                 * 返回这个插件的文件{@code File}对象。对于jar格式的插件，就是jar文件本身。<br>
                 * Returns the {@code File} object of this plugin itself. For jar-packed plugins, it is the jar file itself.
                 */
                // @ts-ignore
                protected getFile(): java.io.File;
                // @ts-ignore
                public getPluginLoader(): cn.nukkit.plugin.PluginLoader;
            }
        }
    }
}
