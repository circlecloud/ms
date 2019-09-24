declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Wolf extends org.bukkit.entity.Animals, org.bukkit.entity.Tameable, org.bukkit.entity.Sittable {
                /**
                 * Checks if this wolf is angry
                 */
                 isAngry(): boolean;
                /**
                 * Sets the anger of this wolf.
                 * <p>
                 * An angry wolf can not be fed or tamed.
                 */
                 setAngry(angry: boolean): void;
                /**
                 * Get the collar color of this wolf
                 */
                 getCollarColor(): org.bukkit.DyeColor;
                /**
                 * Set the collar color of this wolf
                 */
                 setCollarColor(color: org.bukkit.DyeColor): void;
            }
        }
    }
}
