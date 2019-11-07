declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerStatisticIncrementEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number, newValue: number)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number, newValue: number, entityType: org.bukkit.entity.EntityType)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number, newValue: number, material: org.bukkit.Material)
                    // @ts-ignore
                    protected statistic: org.bukkit.Statistic;
                    /**
                     * Gets the statistic that is being incremented.
                     */
                    // @ts-ignore
                    public getStatistic(): org.bukkit.Statistic;
                    /**
                     * Gets the previous value of the statistic.
                     */
                    // @ts-ignore
                    public getPreviousValue(): number;
                    /**
                     * Gets the new value of the statistic.
                     */
                    // @ts-ignore
                    public getNewValue(): number;
                    /**
                     * Gets the EntityType if {@link #getStatistic() getStatistic()} is an
                     * entity statistic otherwise returns null.
                     */
                    // @ts-ignore
                    public getEntityType(): org.bukkit.entity.EntityType;
                    /**
                     * Gets the Material if {@link #getStatistic() getStatistic()} is a block
                     * or item statistic otherwise returns null.
                     */
                    // @ts-ignore
                    public getMaterial(): org.bukkit.Material;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
