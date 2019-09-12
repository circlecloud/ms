declare namespace org {
    namespace bukkit {
        namespace command {
            class CommandSender {
                /**
                 * Sends this sender a message
                 */
                public sendMessage(message: string): void;
                /**
                 * Sends this sender multiple messages
                 */
                public sendMessage(messages: string): void;
                /**
                 * Returns the server instance that this command is running on
                 */
                public getServer(): org.bukkit.Server;
                /**
                 * Gets the name of this command sender
                 */
                public getName(): string;
            }
        }
    }
}
