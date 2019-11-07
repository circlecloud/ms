declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface PigZombie extends org.bukkit.entity.Zombie {
                /**
                 * Get the pig zombie's current anger level.
                 */
                // @ts-ignore
                 getAnger(): number;
                /**
                 * Set the pig zombie's current anger level.
                 */
                // @ts-ignore
                 setAnger(level: number): void;
                /**
                 * Shorthand; sets to either 0 or the default level.
                 */
                // @ts-ignore
                 setAngry(angry: boolean): void;
                /**
                 * Shorthand; gets whether the zombie is angry.
                 */
                // @ts-ignore
                 isAngry(): boolean;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                // @ts-ignore
                 isConverting(): boolean;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                // @ts-ignore
                 getConversionTime(): number;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                // @ts-ignore
                 setConversionTime(time: number): void;
            }
        }
    }
}
