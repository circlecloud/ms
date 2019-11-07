// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableJoinData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableValue} of the {@link Instant} that a
                                 * {@link Player} joined the {@link Server} the first time.
                                 */
                                // @ts-ignore
                                 firstPlayed(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} of the {@link Instant} that a
                                 * {@link Player} joined the {@link Server} the last time.
                                 */
                                // @ts-ignore
                                 lastPlayed(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
