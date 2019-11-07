// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerExpChangeEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, expAmount: number)
                    /**
                     * Get the amount of experience the player will receive
                     */
                    // @ts-ignore
                    public getAmount(): number;
                    /**
                     * Set the amount of experience the player will receive
                     */
                    // @ts-ignore
                    public setAmount(amount: number): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
