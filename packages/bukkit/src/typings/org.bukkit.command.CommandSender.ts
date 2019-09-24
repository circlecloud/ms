declare namespace org {
    namespace bukkit {
        namespace command {
            interface CommandSender extends org.bukkit.permissions.Permissible {
                /**
                 * Sends this sender a message
                 */
                 sendMessage(message: string): void;
                /**
                 * Sends this sender multiple messages
                 */
                 sendMessage(messages: string): void;
                /**
                 * Returns the server instance that this command is running on
                 */
                 getServer(): org.bukkit.Server;
                /**
                 * Gets the name of this command sender
                 */
                 getName(): string;
            }
        }
    }
}
