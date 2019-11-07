// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Husk extends org.bukkit.entity.Zombie {
                /**
                 * Get if this entity is in the process of converting to a Zombie as a
                 * result of being underwater.
                 */
                // @ts-ignore
                 isConverting(): boolean;
                /**
                 * Gets the amount of ticks until this entity will be converted to a Zombie
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted.
                 */
                // @ts-ignore
                 getConversionTime(): number;
                /**
                 * Sets the amount of ticks until this entity will be converted to a Zombie
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 */
                // @ts-ignore
                 setConversionTime(time: number): void;
            }
        }
    }
}
