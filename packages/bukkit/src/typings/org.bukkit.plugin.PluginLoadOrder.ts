declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class PluginLoadOrder {
                public static STARTUP: org.bukkit.plugin.PluginLoadOrder;
                public static POSTWORLD: org.bukkit.plugin.PluginLoadOrder;
                public static values(): org.bukkit.plugin.PluginLoadOrder[];
                public static valueOf(name: string): org.bukkit.plugin.PluginLoadOrder;
            }
        }
    }
}
