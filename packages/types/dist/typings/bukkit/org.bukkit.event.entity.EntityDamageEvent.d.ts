// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDamageEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, damage: number)
                    // @ts-ignore
                    constructor(damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map, modifierFunctions: java.util.Map)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the original damage for the specified modifier, as defined at this
                     * event's construction.
                     */
                    // @ts-ignore
                    public getOriginalDamage(type: org.bukkit.event.entity.EntityDamageEvent.DamageModifier): number;
                    /**
                     * Sets the damage for the specified modifier.
                     */
                    // @ts-ignore
                    public setDamage(type: org.bukkit.event.entity.EntityDamageEvent.DamageModifier, damage: number): void;
                    /**
                     * Gets the damage change for some modifier
                     */
                    // @ts-ignore
                    public getDamage(type: org.bukkit.event.entity.EntityDamageEvent.DamageModifier): number;
                    /**
                     * This checks to see if a particular modifier is valid for this event's
                     * caller, such that, {@link #setDamage(DamageModifier, double)} will not
                     * throw an {@link UnsupportedOperationException}.
                     * <p>
                     * {@link DamageModifier#BASE} is always applicable.
                     */
                    // @ts-ignore
                    public isApplicable(type: org.bukkit.event.entity.EntityDamageEvent.DamageModifier): boolean;
                    /**
                     * Gets the raw amount of damage caused by the event
                     */
                    // @ts-ignore
                    public getDamage(): number;
                    /**
                     * Gets the amount of damage caused by the event after all damage
                     * reduction is applied.
                     */
                    // @ts-ignore
                    public getFinalDamage(): number;
                    /**
                     * Sets the raw amount of damage caused by the event.
                     * <p>
                     * For compatibility this also recalculates the modifiers and scales
                     * them by the difference between the modifier for the previous damage
                     * value and the new one.
                     */
                    // @ts-ignore
                    public setDamage(damage: number): void;
                    /**
                     * Gets the cause of the damage.
                     */
                    // @ts-ignore
                    public getCause(): org.bukkit.event.entity.EntityDamageEvent.DamageCause;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
