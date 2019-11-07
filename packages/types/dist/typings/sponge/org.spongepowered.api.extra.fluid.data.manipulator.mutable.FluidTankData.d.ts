// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace data {
                        namespace manipulator {
                            namespace mutable {
                                // @ts-ignore
                                interface FluidTankData extends org.spongepowered.api.data.manipulator.mutable.MappedData {
                                    /**
                                     * Gets the {@link MapValue} of the various {@link FluidStackSnapshot}s
                                     * available from the owner. Note that a fluid tank may have multiple
                                     * {@link FluidStack}s differing based on {@link Direction}.
                                     */
                                    // @ts-ignore
                                     fluids(): org.spongepowered.api.data.value.mutable.MapValue;
                                    /**
                                     * Gets the {@link List} of {@link FluidStackSnapshot}s at a defined
                                     * {@link Direction}.
                                     */
                                    // @ts-ignore
                                     fluidAtDirection(direction: org.spongepowered.api.util.Direction): java.util.Optional;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
