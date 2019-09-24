declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class PotionSplashEvent extends org.bukkit.event.entity.ProjectileHitEvent implements org.bukkit.event.Cancellable {
                    constructor(potion: org.bukkit.entity.ThrownPotion, affectedEntities: Map<any, any> /*java.util.Map*/)
                    public getEntity(): org.bukkit.entity.ThrownPotion;
                    /**
                     * Gets the potion which caused this event
                     */
                    public getPotion(): org.bukkit.entity.ThrownPotion;
                    /**
                     * Retrieves a list of all effected entities
                     */
                    public getAffectedEntities(): any[] /*java.util.Collection*/;
                    /**
                     * Gets the intensity of the potion's effects for given entity; This
                     * depends on the distance to the impact center
                     */
                    public getIntensity(entity: org.bukkit.entity.LivingEntity): number;
                    /**
                     * Overwrites the intensity for a given entity
                     */
                    public setIntensity(entity: org.bukkit.entity.LivingEntity, intensity: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
