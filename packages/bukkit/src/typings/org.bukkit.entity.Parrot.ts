declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Parrot extends org.bukkit.entity.Animals, org.bukkit.entity.Tameable, org.bukkit.entity.Sittable {
                /**
                 * Get the variant of this parrot.
                 */
                 getVariant(): org.bukkit.entity.Parrot.Variant;
                /**
                 * Set the variant of this parrot.
                 */
                 setVariant(variant: org.bukkit.entity.Parrot.Variant): void;
            }
        }
    }
}
