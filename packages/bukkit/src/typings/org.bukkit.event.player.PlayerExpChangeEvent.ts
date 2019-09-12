declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerExpChangeEvent {
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
