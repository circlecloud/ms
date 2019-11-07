declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            // @ts-ignore
                            interface ImmutableBrewingStandData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the remaining brew time.
                                 * <p>If nothing is brewing the immutable value is 0.</p>
                                 */
                                // @ts-ignore
                                 remainingBrewTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
