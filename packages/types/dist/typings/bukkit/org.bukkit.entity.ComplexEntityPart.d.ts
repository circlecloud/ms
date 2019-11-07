declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ComplexEntityPart extends org.bukkit.entity.Entity {
                /**
                 * Gets the parent {@link ComplexLivingEntity} of this part.
                 */
                // @ts-ignore
                 getParent(): org.bukkit.entity.ComplexLivingEntity;
            }
        }
    }
}
