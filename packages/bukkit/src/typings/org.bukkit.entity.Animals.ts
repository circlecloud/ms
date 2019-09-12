declare namespace org {
    namespace bukkit {
        namespace entity {
            class Animals {
                /**
                 * Get the UUID of the entity that caused this entity to enter the
                 * {@link #canBreed()} state.
                 */
                public getBreedCause(): any;
                /**
                 * Set the UUID of the entity that caused this entity to enter the
                 * {@link #canBreed()} state.
                 */
                public setBreedCause(uuid: any): void;
                /**
                 * Get whether or not this entity is in love mode and will produce
                 * offspring with another entity in love mode. Will return true if
                 * and only if {@link #getLoveModeTicks()} is greater than 0.
                 */
                public isLoveMode(): boolean;
                /**
                 * Get the amount of ticks remaining for this entity in love mode.
                 * If the entity is not in love mode, 0 will be returned.
                 */
                public getLoveModeTicks(): number;
                /**
                 * Set the amount of ticks for which this entity should be in love mode.
                 * Setting the love mode ticks to 600 is the equivalent of a player
                 * feeding the entity their breeding item of choice.
                 */
                public setLoveModeTicks(ticks: number): void;
            }
        }
    }
}
