declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ExplosionPrimeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, radius: number, fire: boolean)
                    // @ts-ignore
                    constructor(explosive: org.bukkit.entity.Explosive)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the radius of the explosion
                     */
                    // @ts-ignore
                    public getRadius(): number;
                    /**
                     * Sets the radius of the explosion
                     */
                    // @ts-ignore
                    public setRadius(radius: number): void;
                    /**
                     * Gets whether this explosion will create fire or not
                     */
                    // @ts-ignore
                    public getFire(): boolean;
                    /**
                     * Sets whether this explosion will create fire or not
                     */
                    // @ts-ignore
                    public setFire(fire: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
