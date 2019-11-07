declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityExplodeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, location: org.bukkit.Location, blocks: java.util.List, yield: number)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the list of blocks that would have been removed or were removed
                     * from the explosion event.
                     */
                    // @ts-ignore
                    public blockList(): java.util.List;
                    /**
                     * Returns the location where the explosion happened.
                     * <p>
                     * It is not possible to get this value from the Entity as the Entity no
                     * longer exists in the world.
                     */
                    // @ts-ignore
                    public getLocation(): org.bukkit.Location;
                    /**
                     * Returns the percentage of blocks to drop from this explosion
                     */
                    // @ts-ignore
                    public getYield(): number;
                    /**
                     * Sets the percentage of blocks to drop from this explosion
                     */
                    // @ts-ignore
                    public setYield(yield: number): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
