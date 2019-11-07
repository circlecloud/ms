declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableIgniteableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the remaining amount of
                                 * "ticks" the {@link Entity} remains on fire.
                                 */
                                // @ts-ignore
                                 fireTicks(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the remaining amount of
                                 * "ticks" before the fire will damage the owning {@link Entity}.
                                 */
                                // @ts-ignore
                                 fireDelay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
