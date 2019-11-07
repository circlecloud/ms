// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Animals extends org.bukkit.entity.Ageable {
                /**
                 * Get the UUID of the entity that caused this entity to enter the
                 * {@link #canBreed()} state.
                 */
                // @ts-ignore
                 getBreedCause(): java.util.UUID;
                /**
                 * Set the UUID of the entity that caused this entity to enter the
                 * {@link #canBreed()} state.
                 */
                // @ts-ignore
                 setBreedCause(uuid: java.util.UUID): void;
                /**
                 * Get whether or not this entity is in love mode and will produce
                 * offspring with another entity in love mode. Will return true if
                 * and only if {@link #getLoveModeTicks()} is greater than 0.
                 */
                // @ts-ignore
                 isLoveMode(): boolean;
                /**
                 * Get the amount of ticks remaining for this entity in love mode.
                 * If the entity is not in love mode, 0 will be returned.
                 */
                // @ts-ignore
                 getLoveModeTicks(): number;
                /**
                 * Set the amount of ticks for which this entity should be in love mode.
                 * Setting the love mode ticks to 600 is the equivalent of a player
                 * feeding the entity their breeding item of choice.
                 */
                // @ts-ignore
                 setLoveModeTicks(ticks: number): void;
            }
        }
    }
}
