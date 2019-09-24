declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerKickEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    constructor(playerKicked: org.bukkit.entity.Player, kickReason: string, leaveMessage: string)
                    /**
                     * Gets the reason why the player is getting kicked
                     */
                    public getReason(): string;
                    /**
                     * Gets the leave message send to all online players
                     */
                    public getLeaveMessage(): string;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Sets the reason why the player is getting kicked
                     */
                    public setReason(kickReason: string): void;
                    /**
                     * Sets the leave message send to all online players
                     */
                    public setLeaveMessage(leaveMessage: string): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
