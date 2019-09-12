declare namespace org {
    namespace bukkit {
        namespace entity {
            class Sittable {
                /**
                 * Checks if this animal is sitting
                 */
                public isSitting(): boolean;
                /**
                 * Sets if this animal is sitting. Will remove any path that the animal
                 * was following beforehand.
                 */
                public setSitting(sitting: boolean): void;
            }
        }
    }
}
