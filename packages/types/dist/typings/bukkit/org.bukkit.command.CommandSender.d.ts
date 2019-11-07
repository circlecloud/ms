declare namespace org {
    namespace bukkit {
        namespace command {
            // @ts-ignore
            interface CommandSender extends org.bukkit.permissions.Permissible {
                /**
                 * Sends this sender a message
                 */
                // @ts-ignore
                 sendMessage(message: string): void;
                /**
                 * Sends this sender multiple messages
                 */
                // @ts-ignore
                 sendMessage(messages: string): void;
                /**
                 * Returns the server instance that this command is running on
                 */
                // @ts-ignore
                 getServer(): org.bukkit.Server;
                /**
                 * Gets the name of this command sender
                 */
                // @ts-ignore
                 getName(): string;
            }
        }
    }
}
