// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerChatEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, message: string)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, message: string, format: string, recipients: java.util.Set)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the message that the player is attempting to send
                     */
                    // @ts-ignore
                    public getMessage(): string;
                    /**
                     * Sets the message that the player will send
                     */
                    // @ts-ignore
                    public setMessage(message: string): void;
                    /**
                     * Sets the player that this message will display as, or command will be
                     * executed as
                     */
                    // @ts-ignore
                    public setPlayer(player: org.bukkit.entity.Player): void;
                    /**
                     * Gets the format to use to display this chat message
                     */
                    // @ts-ignore
                    public getFormat(): string;
                    /**
                     * Sets the format to use to display this chat message
                     */
                    // @ts-ignore
                    public setFormat(format: string): void;
                    /**
                     * Gets a set of recipients that this chat message will be displayed to
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
