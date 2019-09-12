declare namespace org {
    namespace bukkit {
        namespace entity {
            class PigZombie {
                /**
                 * Get the pig zombie's current anger level.
                 */
                public getAnger(): number;
                /**
                 * Set the pig zombie's current anger level.
                 */
                public setAnger(level: number): void;
                /**
                 * Shorthand; sets to either 0 or the default level.
                 */
                public setAngry(angry: boolean): void;
                /**
                 * Shorthand; gets whether the zombie is angry.
                 */
                public isAngry(): boolean;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                public isConverting(): boolean;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                public getConversionTime(): number;
                /**
                 * <b>Not applicable to this entity</b>
                 */
                public setConversionTime(time: number): void;
            }
        }
    }
}
