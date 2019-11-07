declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class ServerCommandEvent extends org.bukkit.event.server.ServerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sender: org.bukkit.command.CommandSender, command: string)
                    /**
                     * Gets the command that the user is attempting to execute from the
                     * console
                     */
                    // @ts-ignore
                    public getCommand(): string;
                    /**
                     * Sets the command that the server will execute
                     */
                    // @ts-ignore
                    public setCommand(message: string): void;
                    /**
                     * Get the command sender.
                     */
                    // @ts-ignore
                    public getSender(): org.bukkit.command.CommandSender;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
