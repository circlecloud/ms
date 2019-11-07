declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Mob extends org.bukkit.entity.LivingEntity, org.bukkit.loot.Lootable {
                /**
                 * Instructs this Mob to set the specified LivingEntity as its target.
                 * <p>
                 * Hostile creatures may attack their target, and friendly creatures may
                 * follow their target.
                 */
                // @ts-ignore
                 setTarget(target: org.bukkit.entity.LivingEntity): void;
                /**
                 * Gets the current target of this Mob
                 */
                // @ts-ignore
                 getTarget(): org.bukkit.entity.LivingEntity;
            }
        }
    }
}
