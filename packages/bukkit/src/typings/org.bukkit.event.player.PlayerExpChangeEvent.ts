declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerExpChangeEvent extends org.bukkit.event.player.PlayerEvent {
                    constructor(player: org.bukkit.entity.Player, expAmount: number)
                    /**
                     * Get the amount of experience the player will receive
                     */
                    public getAmount(): number;
                    /**
                     * Set the amount of experience the player will receive
                     */
                    public setAmount(amount: number): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
