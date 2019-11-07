// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class PluginLogger extends java.util.logging.Logger {
                /**
                 * Creates a new PluginLogger that extracts the name from a plugin.
                 */
                // @ts-ignore
                constructor(context: org.bukkit.plugin.Plugin)
                // @ts-ignore
                public log(logRecord: java.util.logging.LogRecord): void;
            }
        }
    }
}
