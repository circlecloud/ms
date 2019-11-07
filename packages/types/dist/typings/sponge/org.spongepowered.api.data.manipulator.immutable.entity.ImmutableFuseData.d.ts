// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableFuseData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * The amount of ticks before the {@link FusedExplosive} detonates when
                                 * primed.
                                 */
                                // @ts-ignore
                                 fuseDuration(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * The amount of ticks before {@link FusedExplosive} detonates. This value
                                 * may be zero if the {@link FusedExplosive} is not currently primed nor
                                 * will setting this value have any effect if the {@link FusedExplosive} is
                                 * not primed.
                                 */
                                // @ts-ignore
                                 ticksRemaining(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
