declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface PigZombie extends org.bukkit.entity.Zombie {
                /**
                 * Get the pig zombie's current anger level.
                 */
                 getAnger(): number;
                /**
                 * Set the pig zombie's current anger level.
                 */
                 setAnger(level: number): void;
                /**
                 * Shorthand; sets to either 0 or the default level.
                 */
                 setAngry(angry: boolean): void;
                /**
                 * Shorthand; gets whether the zombie is angry.
                 */
                 isAngry(): boolean;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                 isConverting(): boolean;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                 getConversionTime(): number;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                 setConversionTime(time: number): void;
            }
        }
    }
}
