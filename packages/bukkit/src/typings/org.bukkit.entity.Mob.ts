declare namespace org {
    namespace bukkit {
        namespace entity {
            class Mob {
                /**
                 * Instructs this Mob to set the specified LivingEntity as its target.
                 * <p>
                 * Hostile creatures may attack their target, and friendly creatures may
                 * follow their target.
                 */
                public setTarget(target: org.bukkit.entity.LivingEntity): void;
                /**
                 * Gets the current target of this Mob
                 */
                public getTarget(): org.bukkit.entity.LivingEntity;
            }
        }
    }
}
