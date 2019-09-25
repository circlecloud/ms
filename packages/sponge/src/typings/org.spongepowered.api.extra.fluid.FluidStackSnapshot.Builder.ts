declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace FluidStackSnapshot {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.ImmutableDataBuilder {
                            // @ts-ignore
                             fluid(fluidType: org.spongepowered.api.extra.fluid.FluidType): org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder;
                            // @ts-ignore
                             volume(volume: number): org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder;
                            /**
                             * Resets this builder and accepts all data from the incoming {@link FluidStack}.
                             */
                            // @ts-ignore
                             from(fluidStack: org.spongepowered.api.extra.fluid.FluidStack): org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder;
                        }
                    }
                }
            }
        }
    }
}
