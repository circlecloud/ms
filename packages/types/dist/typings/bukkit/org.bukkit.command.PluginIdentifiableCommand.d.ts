declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface PluginIdentifiableCommand {
                /**
                 * Gets the owner of this PluginIdentifiableCommand.
                 */
                // @ts-ignore
                 getPlugin(): org.bukkit.plugin.Plugin;
            }
        }
    }
}
