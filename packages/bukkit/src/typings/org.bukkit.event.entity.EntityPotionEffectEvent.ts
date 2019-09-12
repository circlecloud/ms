declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class EntityPotionEffectEvent {
                    constructor(livingEntity: org.bukkit.entity.LivingEntity, oldEffect: org.bukkit.potion.PotionEffect, newEffect: org.bukkit.potion.PotionEffect, cause: org.bukkit.event.entity.EntityPotionEffectEvent.Cause, action: org.bukkit.event.entity.EntityPotionEffectEvent.Action, override: boolean)
                    /**
                     * Gets the old potion effect of the changed type, which will be removed.
                     */
                    public getOldEffect(): org.bukkit.potion.PotionEffect;
                    /**
                     * Gets new potion effect of the changed type to be applied.
                     */
                    public getNewEffect(): org.bukkit.potion.PotionEffect;
                    /**
                     * Gets the cause why the effect has changed.
                     */
                    public getCause(): org.bukkit.event.entity.EntityPotionEffectEvent.Cause;
                    /**
                     * Gets the action which will be performed on the potion effect type.
                     */
                    public getAction(): org.bukkit.event.entity.EntityPotionEffectEvent.Action;
                    /**
                     * Gets the modified potion effect type.
                     */
                    public getModifiedType(): org.bukkit.potion.PotionEffectType;
                    /**
                     * Returns if the new potion effect will override the old potion effect
                     * (Only applicable for the CHANGED Action).
                     */
                    public isOverride(): boolean;
                    /**
                     * Sets if the new potion effect will override the old potion effect (Only
                     * applicable for the CHANGED action).
                     */
                    public setOverride(override: boolean): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
