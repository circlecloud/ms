declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface IgniteableData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the remaining amount of
                                 * "ticks" the {@link Entity} remains on fire.
                                 */
                                // @ts-ignore
                                 fireTicks(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the {@link MutableBoundedValue} for the remaining amount of
                                 * "ticks" before the fire will damage the owning {@link Entity}.
                                 */
                                // @ts-ignore
                                 fireDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
