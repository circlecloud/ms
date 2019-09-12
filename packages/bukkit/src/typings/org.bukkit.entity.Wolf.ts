declare namespace org {
    namespace bukkit {
        namespace entity {
            class Wolf {
                /**
                 * Checks if this wolf is angry
                 */
                public isAngry(): boolean;
                /**
                 * Sets the anger of this wolf.
                 * <p>
                 * An angry wolf can not be fed or tamed.
                 */
                public setAngry(angry: boolean): void;
                /**
                 * Get the collar color of this wolf
                 */
                public getCollarColor(): org.bukkit.DyeColor;
                /**
                 * Set the collar color of this wolf
                 */
                public setCollarColor(color: org.bukkit.DyeColor): void;
            }
        }
    }
}
