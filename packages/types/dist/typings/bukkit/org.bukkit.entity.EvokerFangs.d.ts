declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface EvokerFangs extends org.bukkit.entity.Entity {
                /**
                 * Gets the {@link LivingEntity} which summoned the fangs.
                 */
                // @ts-ignore
                 getOwner(): org.bukkit.entity.LivingEntity;
                /**
                 * Sets the {@link LivingEntity} which summoned the fangs.
                 */
                // @ts-ignore
                 setOwner(owner: org.bukkit.entity.LivingEntity): void;
            }
        }
    }
}
