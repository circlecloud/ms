// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class BroadcastMessageEvent extends org.bukkit.event.server.ServerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(message: string, recipients: java.util.Set)
                    // @ts-ignore
                    constructor(isAsync: boolean, message: string, recipients: java.util.Set)
                    /**
                     * Get the message to broadcast.
                     */
                    // @ts-ignore
                    public getMessage(): string;
                    /**
                     * Set the message to broadcast.
                     */
                    // @ts-ignore
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
                    // @ts-ignore
                    public getRecipients(): java.util.Set;
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
