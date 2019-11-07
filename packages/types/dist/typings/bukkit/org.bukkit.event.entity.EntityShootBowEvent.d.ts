declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityShootBowEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(shooter: org.bukkit.entity.LivingEntity, bow: org.bukkit.inventory.ItemStack, projectile: org.bukkit.entity.Entity, force: number)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the bow ItemStack used to fire the arrow.
                     */
                    // @ts-ignore
                    public getBow(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the projectile which will be launched by this event
                     */
                    // @ts-ignore
                    public getProjectile(): org.bukkit.entity.Entity;
                    /**
                     * Replaces the projectile which will be launched
                     */
                    // @ts-ignore
                    public setProjectile(projectile: org.bukkit.entity.Entity): void;
                    /**
                     * Gets the force the arrow was launched with
                     */
                    // @ts-ignore
                    public getForce(): number;
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
