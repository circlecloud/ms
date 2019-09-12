declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                class ServerCommandEvent {
                    constructor(sender: org.bukkit.command.CommandSender, command: string)
                    /**
                     * Gets the command that the user is attempting to execute from the
                     * console
                     */
                    public getCommand(): string;
                    /**
                     * Sets the command that the server will execute
                     */
                    public setCommand(message: string): void;
                    /**
                     * Get the command sender.
                     */
                    public getSender(): org.bukkit.command.CommandSender;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
