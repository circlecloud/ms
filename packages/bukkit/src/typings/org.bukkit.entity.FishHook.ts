declare namespace org {
    namespace bukkit {
        namespace entity {
            class FishHook {
                /**
                 * Gets the chance of a fish biting.
                 * <p>
                 * 0.0 = No Chance.<br>
                 * 1.0 = Instant catch.
                 */
                public getBiteChance(): number;
                /**
                 * Sets the chance of a fish biting.
                 * <p>
                 * 0.0 = No Chance.<br>
                 * 1.0 = Instant catch.
                 */
                public setBiteChance(chance: number): void;
            }
        }
    }
}
