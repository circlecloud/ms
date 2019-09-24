declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityExplodeEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.Entity, location: org.bukkit.Location, blocks: any[] /*java.util.List*/, yield: number)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Returns the list of blocks that would have been removed or were removed
                     * from the explosion event.
                     */
                    public blockList(): any[] /*java.util.List*/;
                    /**
                     * Returns the location where the explosion happened.
                     * <p>
                     * It is not possible to get this value from the Entity as the Entity no
                     * longer exists in the world.
                     */
                    public getLocation(): org.bukkit.Location;
                    /**
                     * Returns the percentage of blocks to drop from this explosion
                     */
                    public getYield(): number;
                    /**
                     * Sets the percentage of blocks to drop from this explosion
                     */
                    public setYield(yield: number): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
