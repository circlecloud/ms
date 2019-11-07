declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface FuseData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * The amount of ticks before the {@link FusedExplosive} detonates when
                                 * primed.
                                 */
                                // @ts-ignore
                                 fuseDuration(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * The amount of ticks before {@link FusedExplosive} detonates. Setting
                                 * this value has no effect if the explosive is not currently
                                 * primed and is set to an arbitrary value that differs from explosive to
                                 * explosive when not-primed. Therefore, this value should be ignored when
                                 * the explosive is not primed. Instead, set the fuse duration of the
                                 * explosive which is the value used to initialize this value when the
                                 * explosive is primed.
                                 */
                                // @ts-ignore
                                 ticksRemaining(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
