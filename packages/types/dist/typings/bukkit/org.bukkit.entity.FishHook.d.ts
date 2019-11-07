declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface FishHook extends org.bukkit.entity.Projectile {
                /**
                 * Gets the chance of a fish biting.
                 * <p>
                 * 0.0 = No Chance.<br>
                 * 1.0 = Instant catch.
                 */
                // @ts-ignore
                 getBiteChance(): number;
                /**
                 * Sets the chance of a fish biting.
                 * <p>
                 * 0.0 = No Chance.<br>
                 * 1.0 = Instant catch.
                 */
                // @ts-ignore
                 setBiteChance(chance: number): void;
            }
        }
    }
}
