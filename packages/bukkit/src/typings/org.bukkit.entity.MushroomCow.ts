declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface MushroomCow extends org.bukkit.entity.Cow {
                /**
                 * Get the variant of this cow.
                 */
                 getVariant(): org.bukkit.entity.MushroomCow.Variant;
                /**
                 * Set the variant of this cow.
                 */
                 setVariant(variant: org.bukkit.entity.MushroomCow.Variant): void;
            }
        }
    }
}
