declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface JoinData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link Value} of the {@link Instant} that a {@link Player} joined
                                 * the {@link Server} the first time.
                                 */
                                // @ts-ignore
                                 firstPlayed(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} of the {@link Instant} that a {@link Player} joined
                                 * the {@link Server} the last time.
                                 */
                                // @ts-ignore
                                 lastPlayed(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
