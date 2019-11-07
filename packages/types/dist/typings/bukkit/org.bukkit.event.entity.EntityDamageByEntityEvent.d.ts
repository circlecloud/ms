// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDamageByEntityEvent extends org.bukkit.event.entity.EntityDamageEvent {
                    // @ts-ignore
                    constructor(damager: org.bukkit.entity.Entity, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, damage: number)
                    // @ts-ignore
                    constructor(damager: org.bukkit.entity.Entity, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map, modifierFunctions: java.util.Map)
                    /**
                     * Returns the entity that damaged the defender.
                     */
                    // @ts-ignore
                    public getDamager(): org.bukkit.entity.Entity;
                }
            }
        }
    }
}
