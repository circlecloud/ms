// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface SizeData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the current x/z size of this entity.
                                 */
                                // @ts-ignore
                                 base(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the current y height of this entity.
                                 */
                                // @ts-ignore
                                 height(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "scale" size.
                                 */
                                // @ts-ignore
                                 scale(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
