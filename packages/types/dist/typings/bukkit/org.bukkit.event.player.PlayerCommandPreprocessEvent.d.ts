// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerCommandPreprocessEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, message: string)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, message: string, recipients: java.util.Set)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the command that the player is attempting to send.
                     * <p>
                     * All commands begin with a special character; implementations do not
                     * consider the first character when executing the content.
                     */
                    // @ts-ignore
                    public getMessage(): string;
                    /**
                     * Sets the command that the player will send.
                     * <p>
                     * All commands begin with a special character; implementations do not
                     * consider the first character when executing the content.
                     */
                    // @ts-ignore
                    public setMessage(command: string): void;
                    /**
                     * Sets the player that this command will be executed as.
                     */
                    // @ts-ignore
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
                    // @ts-ignore
                    public getRecipients(): java.util.Set;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
