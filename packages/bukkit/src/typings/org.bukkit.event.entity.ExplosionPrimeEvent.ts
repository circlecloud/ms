declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ExplosionPrimeEvent implements org.bukkit.event.Cancellable {
                    constructor(what: org.bukkit.entity.Entity, radius: number, fire: boolean)
                    constructor(explosive: org.bukkit.entity.Explosive)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the radius of the explosion
                     */
                    public getRadius(): number;
                    /**
                     * Sets the radius of the explosion
                     */
                    public setRadius(radius: number): void;
                    /**
                     * Gets whether this explosion will create fire or not
                     */
                    public getFire(): boolean;
                    /**
                     * Sets whether this explosion will create fire or not
                     */
                    public setFire(fire: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
