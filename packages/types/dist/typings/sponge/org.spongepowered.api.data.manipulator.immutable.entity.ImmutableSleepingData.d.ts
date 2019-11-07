declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableSleepingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableValue} for the "sleeping" state.
                                 */
                                // @ts-ignore
                                 sleeping(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for whether the owning {@link Player}'s
                                 * "sleeping" state is ignored when vanilla mechanics dictate that all
                                 * {@link Player}s must be sleeping to advance through the night.
                                 */
                                // @ts-ignore
                                 ignoreSleeping(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
