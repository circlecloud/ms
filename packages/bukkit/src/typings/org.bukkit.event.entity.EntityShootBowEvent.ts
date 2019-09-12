declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityShootBowEvent {
                    constructor(shooter: org.bukkit.entity.LivingEntity, bow: org.bukkit.inventory.ItemStack, projectile: org.bukkit.entity.Entity, force: number)
                    public getEntity(): org.bukkit.entity.LivingEntity;
                    /**
                     * Gets the bow ItemStack used to fire the arrow.
                     */
                    public getBow(): org.bukkit.inventory.ItemStack;
                    /**
                     * Gets the projectile which will be launched by this event
                     */
                    public getProjectile(): org.bukkit.entity.Entity;
                    /**
                     * Replaces the projectile which will be launched
                     */
                    public setProjectile(projectile: org.bukkit.entity.Entity): void;
                    /**
                     * Gets the force the arrow was launched with
                     */
                    public getForce(): number;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
