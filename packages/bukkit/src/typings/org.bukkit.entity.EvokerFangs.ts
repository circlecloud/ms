declare namespace org {
    namespace bukkit {
        namespace entity {
            class EvokerFangs {
                /**
                 * Gets the {@link LivingEntity} which summoned the fangs.
                 */
                public getOwner(): org.bukkit.entity.LivingEntity;
                /**
                 * Sets the {@link LivingEntity} which summoned the fangs.
                 */
                public setOwner(owner: org.bukkit.entity.LivingEntity): void;
            }
        }
    }
}
