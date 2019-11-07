declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    // @ts-ignore
                    interface FluidStackSnapshot extends org.spongepowered.api.data.ImmutableDataHolder {
                        /**
                         * Creates a new {@link Builder} to build a new {@link FluidStackSnapshot}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.extra.fluid.FluidStackSnapshot.Builder;
                        /**
                         * Gets the {@link FluidType} of this snapshot.
                         */
                        // @ts-ignore
                         getFluid(): org.spongepowered.api.extra.fluid.FluidType;
                        /**
                         * Gets the volume of this snapshot.
                         * <p>Note that the volume is measured in "milli buckets", otherwise read
                         * as {@code mB}. The scaling is as follows: 1 bucket = 1000mB, whereas 1
                         * block usually equals 1000mB.</p>
                         */
                        // @ts-ignore
                         getVolume(): number;
                        /**
                         * Creates a new {@link FluidStack} based on this snapshot.
                         */
                        // @ts-ignore
                         createStack(): org.spongepowered.api.extra.fluid.FluidStack;
                    }
                }
            }
        }
    }
}
