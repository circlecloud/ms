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
                 getBiteChance(): number;
                /**
                 * Sets the chance of a fish biting.
                 * <p>
                 * 0.0 = No Chance.<br>
                 * 1.0 = Instant catch.
                 */
                 setBiteChance(chance: number): void;
            }
        }
    }
}
