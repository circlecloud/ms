declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class TabCompleteEvent extends org.bukkit.event.Event implements org.bukkit.event.Cancellable {
                    constructor(sender: org.bukkit.command.CommandSender, buffer: string, completions: any[] /*java.util.List*/)
                    /**
                     * Get the sender completing this command.
                     */
                    public getSender(): org.bukkit.command.CommandSender;
                    /**
                     * Return the entire buffer which formed the basis of this completion.
                     */
                    public getBuffer(): string;
                    /**
                     * The list of completions which will be offered to the sender, in order.
                     * This list is mutable and reflects what will be offered.
                     */
                    public getCompletions(): any[] /*java.util.List*/;
                    /**
                     * Set the completions offered, overriding any already set.
                     */
                    public setCompletions(completions: any[] /*java.util.List*/): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
