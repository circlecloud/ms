declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface PickupDelayData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "pickup delay".
                                 */
                                // @ts-ignore
                                 delay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the {@link Value} for the "is infinite" state of
                                 * the pickup delay.
                                 */
                                // @ts-ignore
                                 infinite(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
