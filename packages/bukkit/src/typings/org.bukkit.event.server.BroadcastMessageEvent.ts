declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class BroadcastMessageEvent implements org.bukkit.event.Cancellable {
                    constructor(message: string, recipients: any[] /*java.util.Set*/)
                    constructor(isAsync: boolean, message: string, recipients: any[] /*java.util.Set*/)
                    /**
                     * Get the message to broadcast.
                     */
                    public getMessage(): string;
                    /**
                     * Set the message to broadcast.
                     */
                    public setMessage(message: string): void;
                    /**
                     * Gets a set of recipients that this chat message will be displayed to.
                     * <p>
                     * The set returned is not guaranteed to be mutable and may auto-populate
                     * on access. Any listener accessing the returned set should be aware that
                     * it may reduce performance for a lazy set implementation.
                     * <p>
                     * Listeners should be aware that modifying the list may throw {@link
                     * UnsupportedOperationException} if the event caller provides an
                     * unmodifiable set.
                     */
                    public getRecipients(): any[] /*java.util.Set*/;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
