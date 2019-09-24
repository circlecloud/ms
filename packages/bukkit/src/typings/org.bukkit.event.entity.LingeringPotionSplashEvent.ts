declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class LingeringPotionSplashEvent extends org.bukkit.event.entity.ProjectileHitEvent implements org.bukkit.event.Cancellable {
                    constructor(potion: org.bukkit.entity.ThrownPotion, entity: org.bukkit.entity.AreaEffectCloud)
                    public getEntity(): org.bukkit.entity.ThrownPotion;
                    /**
                     * Gets the AreaEffectCloud spawned
                     */
                    public getAreaEffectCloud(): org.bukkit.entity.AreaEffectCloud;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
