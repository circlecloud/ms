declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ComplexLivingEntity extends org.bukkit.entity.LivingEntity {
                /**
                 * Gets a list of parts that belong to this complex entity
                 */
                // @ts-ignore
                 getParts(): java.util.Set;
            }
        }
    }
}
