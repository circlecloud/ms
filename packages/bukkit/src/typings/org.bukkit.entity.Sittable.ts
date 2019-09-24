declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Sittable {
                /**
                 * Checks if this animal is sitting
                 */
                 isSitting(): boolean;
                /**
                 * Sets if this animal is sitting. Will remove any path that the animal
                 * was following beforehand.
                 */
                 setSitting(sitting: boolean): void;
            }
        }
    }
}
