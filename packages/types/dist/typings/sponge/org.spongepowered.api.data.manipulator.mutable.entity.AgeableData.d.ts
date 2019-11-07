// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface AgeableData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "age" state.
                                 */
                                // @ts-ignore
                                 age(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the {@link Value} for whether the {@link #age()} is
                                 * considered to be an "adult".
                                 */
                                // @ts-ignore
                                 adult(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
