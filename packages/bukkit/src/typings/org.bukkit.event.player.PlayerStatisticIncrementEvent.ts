declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerStatisticIncrementEvent {
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number, newValue: number)
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number, newValue: number, entityType: org.bukkit.entity.EntityType)
                    constructor(player: org.bukkit.entity.Player, statistic: org.bukkit.Statistic, initialValue: number, newValue: number, material: org.bukkit.Material)
                    protected statistic: org.bukkit.Statistic;
                    /**
                     * Gets the statistic that is being incremented.
                     */
                    public getStatistic(): org.bukkit.Statistic;
                    /**
                     * Gets the previous value of the statistic.
                     */
                    public getPreviousValue(): number;
                    /**
                     * Gets the new value of the statistic.
                     */
                    public getNewValue(): number;
                    /**
                     * Gets the EntityType if {@link #getStatistic() getStatistic()} is an
                     * entity statistic otherwise returns null.
                     */
                    public getEntityType(): org.bukkit.entity.EntityType;
                    /**
                     * Gets the Material if {@link #getStatistic() getStatistic()} is a block
                     * or item statistic otherwise returns null.
                     */
                    public getMaterial(): org.bukkit.Material;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
