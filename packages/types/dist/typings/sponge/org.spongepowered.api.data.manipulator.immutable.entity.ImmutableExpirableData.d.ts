declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableExpirableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the amount of "ticks"
                                 * remaining before the "expiration" occurs.
                                 */
                                // @ts-ignore
                                 expireTicks(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
