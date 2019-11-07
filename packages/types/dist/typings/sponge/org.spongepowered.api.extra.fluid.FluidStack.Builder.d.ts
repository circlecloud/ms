// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace FluidStack {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                            /**
                             * Sets the {@link FluidType} to use to build the {@link FluidStack}.
                             */
                            // @ts-ignore
                             fluid(fluidType: org.spongepowered.api.extra.fluid.FluidType): org.spongepowered.api.extra.fluid.FluidStack.Builder;
                            /**
                             * Sets the desired volume of the {@link FluidStack}.
                             * <p>Note that the volume is measured in "milli buckets", otherwise
                             * read as {@code mB}. The scaling is as follows: 1 bucket = 1000mB,
                             * whereas 1 block usually equals 1000mB.</p>
                             */
                            // @ts-ignore
                             volume(volume: number): org.spongepowered.api.extra.fluid.FluidStack.Builder;
                            /**
                             * Builds a new {@link FluidStack} based on the desired volume and
                             * {@link FluidType}. If either are not set (invalid), an
                             * {@link IllegalStateException} may be thrown.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.extra.fluid.FluidStack;
                            /**
                             * Resets and fills this builder with all the information from the
                             * provided {@link FluidStackSnapshot}.
                             */
                            // @ts-ignore
                             from(fluidStackSnapshot: org.spongepowered.api.extra.fluid.FluidStackSnapshot): org.spongepowered.api.extra.fluid.FluidStack.Builder;
                            // @ts-ignore
                             from(value: org.spongepowered.api.extra.fluid.FluidStack): org.spongepowered.api.extra.fluid.FluidStack.Builder;
                            // @ts-ignore
                             reset(): org.spongepowered.api.extra.fluid.FluidStack.Builder;
                        }
                    }
                }
            }
        }
    }
}
