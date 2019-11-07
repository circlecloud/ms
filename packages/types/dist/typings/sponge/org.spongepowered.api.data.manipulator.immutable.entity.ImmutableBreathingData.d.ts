// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableBreathingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the remaining air. Can be
                                 * changed to {@code (air >= 0 && air <= maxAir)}.
                                 */
                                // @ts-ignore
                                 remainingAir(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the maximum air capacity.
                                 * The reasoning for it being bounded is that the air capacity must always
                                 * remain at least 1.
                                 */
                                // @ts-ignore
                                 maxAir(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
