// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface SleepingData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link Value} for whether the owning {@link Player}'s
                                 * "sleeping" state is ignored when vanilla mechanics dictate that all
                                 * {@link Player}s must be sleeping to advance through the night.
                                 */
                                // @ts-ignore
                                 sleeping(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
