declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface ProxiedCommandSender extends org.bukkit.command.CommandSender {
                /**
                 * Returns the CommandSender which triggered this proxied command
                 */
                 getCaller(): org.bukkit.command.CommandSender;
                /**
                 * Returns the CommandSender which is being used to call the command
                 */
                 getCallee(): org.bukkit.command.CommandSender;
            }
        }
    }
}
