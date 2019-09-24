declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDamageByEntityEvent extends org.bukkit.event.entity.EntityDamageEvent {
                    constructor(damager: org.bukkit.entity.Entity, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, damage: number)
                    constructor(damager: org.bukkit.entity.Entity, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: Map<any, any> /*java.util.Map*/, modifierFunctions: Map<any, any> /*java.util.Map*/)
                    /**
                     * Returns the entity that damaged the defender.
                     */
                    public getDamager(): org.bukkit.entity.Entity;
                }
            }
        }
    }
}
