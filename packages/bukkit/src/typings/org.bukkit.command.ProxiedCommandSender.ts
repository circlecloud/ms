declare namespace org {
    namespace bukkit {
        namespace command {
            class ProxiedCommandSender {
                /**
                 * Returns the CommandSender which triggered this proxied command
                 */
                public getCaller(): org.bukkit.command.CommandSender;
                /**
                 * Returns the CommandSender which is being used to call the command
                 */
                public getCallee(): org.bukkit.command.CommandSender;
            }
        }
    }
}
