declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Parrot extends org.bukkit.entity.Animals, org.bukkit.entity.Tameable, org.bukkit.entity.Sittable {
                /**
                 * Get the variant of this parrot.
                 */
                // @ts-ignore
                 getVariant(): org.bukkit.entity.Parrot.Variant;
                /**
                 * Set the variant of this parrot.
                 */
                // @ts-ignore
                 setVariant(variant: org.bukkit.entity.Parrot.Variant): void;
            }
        }
    }
}
