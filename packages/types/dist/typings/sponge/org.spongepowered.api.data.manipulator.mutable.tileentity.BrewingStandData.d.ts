declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            // @ts-ignore
                            interface BrewingStandData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the remaining brew time.
                                 * <p>If nothing is brewing the value is 0.</p>
                                 */
                                // @ts-ignore
                                 remainingBrewTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
