declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntityDamageByBlockEvent extends org.bukkit.event.entity.EntityDamageEvent {
                    constructor(damager: org.bukkit.block.Block, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, damage: number)
                    constructor(damager: org.bukkit.block.Block, damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: Map<any, any> /*java.util.Map*/, modifierFunctions: Map<any, any> /*java.util.Map*/)
                    /**
                     * Returns the block that damaged the player.
                     */
                    public getDamager(): org.bukkit.block.Block;
                }
            }
        }
    }
}
