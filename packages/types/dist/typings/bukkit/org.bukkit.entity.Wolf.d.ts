// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Wolf extends org.bukkit.entity.Animals, org.bukkit.entity.Tameable, org.bukkit.entity.Sittable {
                /**
                 * Checks if this wolf is angry
                 */
                // @ts-ignore
                 isAngry(): boolean;
                /**
                 * Sets the anger of this wolf.
                 * <p>
                 * An angry wolf can not be fed or tamed.
                 */
                // @ts-ignore
                 setAngry(angry: boolean): void;
                /**
                 * Get the collar color of this wolf
                 */
                // @ts-ignore
                 getCollarColor(): org.bukkit.DyeColor;
                /**
                 * Set the collar color of this wolf
                 */
                // @ts-ignore
                 setCollarColor(color: org.bukkit.DyeColor): void;
            }
        }
    }
}
