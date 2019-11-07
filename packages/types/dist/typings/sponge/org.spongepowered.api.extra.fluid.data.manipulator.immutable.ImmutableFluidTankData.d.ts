// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace data {
                        namespace manipulator {
                            namespace immutable {
                                // @ts-ignore
                                interface ImmutableFluidTankData extends org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData {
                                    /**
                                     * Gets the {@link MapValue} of the various {@link FluidStackSnapshot}s
                                     * available from the owner. Note that a fluid tank may have multiple
                                     * {@link FluidStack}s differing based on {@link Direction}.
                                     */
                                    // @ts-ignore
                                     fluids(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
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
