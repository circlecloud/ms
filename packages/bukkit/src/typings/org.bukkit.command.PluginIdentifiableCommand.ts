declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface PluginIdentifiableCommand {
                /**
                 * Gets the owner of this PluginIdentifiableCommand.
                 */
                 getPlugin(): org.bukkit.plugin.Plugin;
            }
        }
    }
}
