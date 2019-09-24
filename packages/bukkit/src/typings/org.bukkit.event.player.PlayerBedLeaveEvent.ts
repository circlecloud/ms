declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerBedLeaveEvent {
                    constructor(who: org.bukkit.entity.Player, bed: org.bukkit.block.Block, setBedSpawn: boolean)
                    /**
                     * Returns the bed block involved in this event.
                     */
                    public getBed(): org.bukkit.block.Block;
                    /**
                     * Get if this event should set the new spawn location for the
                     * {@link Player}.
                     * <br>
                     * This does not remove any existing spawn location, only prevent it from
                     * being changed (if true).
                     * <br>
                     * To change a {@link Player}'s spawn location, use
                     * {@link Player#setBedSpawnLocation(Location)}.
                     */
                    public shouldSetSpawnLocation(): boolean;
                    /**
                     * Set if this event should set the new spawn location for the
                     * {@link Player}.
                     * <br>
                     * This will not remove any existing spawn location, only prevent it from
                     * being changed (if true).
                     * <br>
                     * To change a {@link Player}'s spawn location, use
                     * {@link Player#setBedSpawnLocation(Location)}.
                     */
                    public setSpawnLocation(setBedSpawn: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
