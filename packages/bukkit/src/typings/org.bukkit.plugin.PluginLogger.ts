declare namespace org {
    namespace bukkit {
        namespace plugin {
            class PluginLogger {
                /**
                 * Creates a new PluginLogger that extracts the name from a plugin.
                 */
                constructor(context: org.bukkit.plugin.Plugin)
                public log(logRecord: any): void;
            }
        }
    }
}
