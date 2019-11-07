declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class TabCompleteEvent extends org.bukkit.event.Event implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sender: org.bukkit.command.CommandSender, buffer: string, completions: java.util.List)
                    /**
                     * Get the sender completing this command.
                     */
                    // @ts-ignore
                    public getSender(): org.bukkit.command.CommandSender;
                    /**
                     * Return the entire buffer which formed the basis of this completion.
                     */
                    // @ts-ignore
                    public getBuffer(): string;
                    /**
                     * The list of completions which will be offered to the sender, in order.
                     * This list is mutable and reflects what will be offered.
                     */
                    // @ts-ignore
                    public getCompletions(): java.util.List;
                    /**
                     * Set the completions offered, overriding any already set.
                     */
                    // @ts-ignore
                    public setCompletions(completions: java.util.List): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
