declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerCommandPreprocessEvent {
                    constructor(player: org.bukkit.entity.Player, message: string)
                    constructor(player: org.bukkit.entity.Player, message: string, recipients: any[] /*java.util.Set*/)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the command that the player is attempting to send.
                     * <p>
                     * All commands begin with a special character; implementations do not
                     * consider the first character when executing the content.
                     */
                    public getMessage(): string;
                    /**
                     * Sets the command that the player will send.
                     * <p>
                     * All commands begin with a special character; implementations do not
                     * consider the first character when executing the content.
                     */
                    public setMessage(command: string): void;
                    /**
                     * Sets the player that this command will be executed as.
                     */
                    public setPlayer(player: org.bukkit.entity.Player): void;
                    /**
                     * Gets a set of recipients that this chat message will be displayed to.
                     * <p>
                     * The set returned is not guaranteed to be mutable and may auto-populate
                     * on access. Any listener accessing the returned set should be aware that
                     * it may reduce performance for a lazy set implementation. Listeners
                     * should be aware that modifying the list may throw {@link
                     * UnsupportedOperationException} if the event caller provides an
                     * unmodifiable set.
                     */
                    public getRecipients(): any[] /*java.util.Set*/;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
