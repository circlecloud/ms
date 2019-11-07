// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class LingeringPotionSplashEvent extends org.bukkit.event.entity.ProjectileHitEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(potion: org.bukkit.entity.ThrownPotion, entity: org.bukkit.entity.AreaEffectCloud)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.ThrownPotion;
                    /**
                     * Gets the AreaEffectCloud spawned
                     */
                    // @ts-ignore
                    public getAreaEffectCloud(): org.bukkit.entity.AreaEffectCloud;
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
