declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerKickEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(playerKicked: org.bukkit.entity.Player, kickReason: string, leaveMessage: string)
                    /**
                     * Gets the reason why the player is getting kicked
                     */
                    // @ts-ignore
                    public getReason(): string;
                    /**
                     * Gets the leave message send to all online players
                     */
                    // @ts-ignore
                    public getLeaveMessage(): string;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Sets the reason why the player is getting kicked
                     */
                    // @ts-ignore
                    public setReason(kickReason: string): void;
                    /**
                     * Sets the leave message send to all online players
                     */
                    // @ts-ignore
                    public setLeaveMessage(leaveMessage: string): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
