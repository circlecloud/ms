// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace explosive {
                    // @ts-ignore
                    interface FusedExplosive extends org.spongepowered.api.entity.explosive.Explosive {
                        /**
                         * Returns the {@link FuseData} for this explosive.
                         */
                        // @ts-ignore
                         getFuseData(): org.spongepowered.api.data.manipulator.mutable.entity.FuseData;
                        /**
                         * Returns true if this explosive is currently primed.
                         */
                        // @ts-ignore
                         isPrimed(): boolean;
                        /**
                         * Primes this explosive to detonate after the amount of ticks that
                         * this entity explodes in defined by {@link Keys#FUSE_DURATION}.
                         */
                        // @ts-ignore
                         prime(): void;
                        /**
                         * Cancels an actively primed explosive.
                         */
                        // @ts-ignore
                         defuse(): void;
                    }
                }
            }
        }
    }
}
