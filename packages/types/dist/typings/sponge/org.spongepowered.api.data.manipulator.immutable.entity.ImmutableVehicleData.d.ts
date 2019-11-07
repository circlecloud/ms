// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableVehicleData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableValue} for the current "vehicle" being ridden.
                                 */
                                // @ts-ignore
                                 vehicle(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the base {@link ImmutableValue} for the "base vehicle" being ridden
                                 * such that the current vehicle may be riding another {@link Entity},
                                 * causing that entity to be called the "base vehicle".
                                 */
                                // @ts-ignore
                                 baseVehicle(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
