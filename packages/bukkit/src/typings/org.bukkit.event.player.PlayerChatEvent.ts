declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerChatEvent {
                    constructor(player: org.bukkit.entity.Player, message: string)
                    constructor(player: org.bukkit.entity.Player, message: string, format: string, recipients: any[] /*java.util.Set*/)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the message that the player is attempting to send
                     */
                    public getMessage(): string;
                    /**
                     * Sets the message that the player will send
                     */
                    public setMessage(message: string): void;
                    /**
                     * Sets the player that this message will display as, or command will be
                     * executed as
                     */
                    public setPlayer(player: org.bukkit.entity.Player): void;
                    /**
                     * Gets the format to use to display this chat message
                     */
                    public getFormat(): string;
                    /**
                     * Sets the format to use to display this chat message
                     */
                    public setFormat(format: string): void;
                    /**
                     * Gets a set of recipients that this chat message will be displayed to
                     */
                    public getRecipients(): any[] /*java.util.Set*/;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
