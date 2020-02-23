declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
             class JavaPluginLoader extends java.lang.Object implements cn.nukkit.plugin.PluginLoader {
                // @ts-ignore
                constructor(server: cn.nukkit.Server)
                // @ts-ignore
                public loadPlugin(file: java.io.File): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public loadPlugin(filename: string): cn.nukkit.plugin.Plugin;
                // @ts-ignore
                public getPluginDescription(file: java.io.File): cn.nukkit.plugin.PluginDescription;
                // @ts-ignore
                public getPluginDescription(filename: string): cn.nukkit.plugin.PluginDescription;
                // @ts-ignore
                public getPluginFilters(): java.util.regex.Pattern[];
                // @ts-ignore
                public enablePlugin(plugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public disablePlugin(plugin: cn.nukkit.plugin.Plugin): void;
            }
        }
    }
}
