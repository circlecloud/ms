declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class AsyncPlayerChatEvent {
                    constructor(async: boolean, who: org.bukkit.entity.Player, message: string, players: any[] /*java.util.Set*/)
                    /**
                     * Gets the message that the player is attempting to send. This message
                     * will be used with {@link #getFormat()}.
                     */
                    public getMessage(): string;
                    /**
                     * Sets the message that the player will send. This message will be used
                     * with {@link #getFormat()}.
                     */
                    public setMessage(message: string): void;
                    /**
                     * Gets the format to use to display this chat message.
                     * <p>
                     * When this event finishes execution, the first format parameter is the
                     * {@link Player#getDisplayName()} and the second parameter is {@link
                     * #getMessage()}
                     */
                    public getFormat(): string;
                    /**
                     * Sets the format to use to display this chat message.
                     * <p>
                     * When this event finishes execution, the first format parameter is the
                     * {@link Player#getDisplayName()} and the second parameter is {@link
                     * #getMessage()}
                     */
                    public setFormat(format: string): void;
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
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
