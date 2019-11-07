// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class PotionSplashEvent extends org.bukkit.event.entity.ProjectileHitEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(potion: org.bukkit.entity.ThrownPotion, affectedEntities: java.util.Map)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.ThrownPotion;
                    /**
                     * Gets the potion which caused this event
                     */
                    // @ts-ignore
                    public getPotion(): org.bukkit.entity.ThrownPotion;
                    /**
                     * Retrieves a list of all effected entities
                     */
                    // @ts-ignore
                    public getAffectedEntities(): java.util.Collection;
                    /**
                     * Gets the intensity of the potion's effects for given entity; This
                     * depends on the distance to the impact center
                     */
                    // @ts-ignore
                    public getIntensity(entity: org.bukkit.entity.LivingEntity): number;
                    /**
                     * Overwrites the intensity for a given entity
                     */
                    // @ts-ignore
                    public setIntensity(entity: org.bukkit.entity.LivingEntity, intensity: number): void;
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
