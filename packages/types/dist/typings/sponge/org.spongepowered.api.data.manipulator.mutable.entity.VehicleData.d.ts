// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface VehicleData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link Value} for the current "vehicle" being ridden.
                                 */
                                // @ts-ignore
                                 vehicle(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the base {@link Value} for the "base vehicle" being ridden
                                 * such that the current vehicle may be riding another {@link Entity},
                                 * causing that entity to be called the "base vehicle".
                                 */
                                // @ts-ignore
                                 baseVehicle(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
