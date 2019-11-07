// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDamageByBlockEvent extends org.bukkit.event.entity.EntityDamageEvent {
                    // @ts-ignore
                    constructor(damager: org.bukkit.block.Block, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, damage: number)
                    // @ts-ignore
                    constructor(damager: org.bukkit.block.Block, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map, modifierFunctions: java.util.Map)
                    /**
                     * Returns the block that damaged the player.
                     */
                    // @ts-ignore
                    public getDamager(): org.bukkit.block.Block;
                }
            }
        }
    }
}
