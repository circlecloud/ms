declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface BreathingData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the remaining air. Can be
                                 * changed to {@code (air >= 0 && air <= maxAir)}.
                                 */
                                // @ts-ignore
                                 remainingAir(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the {@link MutableBoundedValue} for the maximum air capacity.
                                 * The reasoning for it being bounded is that the air capacity must always
                                 * remain at least 1.
                                 */
                                // @ts-ignore
                                 maxAir(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
