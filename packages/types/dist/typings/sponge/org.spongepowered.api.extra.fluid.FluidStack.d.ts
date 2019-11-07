declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    // @ts-ignore
                    interface FluidStack extends org.spongepowered.api.data.DataHolder {
                        /**
                         * Creates a new {@link Builder} to make fluid stacks.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.extra.fluid.FluidStack.Builder;
                        /**
                         * Gets the {@link FluidType} for this fluid stack.
                         */
                        // @ts-ignore
                         getFluid(): org.spongepowered.api.extra.fluid.FluidType;
                        /**
                         * Gets the "volume" of this {@link FluidStack}.
                         * <p>Note that the volume is measured in "milli buckets", otherwise read
                         * as {@code mB}. The scaling is as follows: 1 bucket = 1000mB, whereas 1
                         * block usually equals 1000mB.</p>
                         */
                        // @ts-ignore
                         getVolume(): number;
                        /**
                         * Sets the desired volume for this stack.
                         * <p>Note that the volume is measured in "milli buckets", otherwise read
                         * as {@code mB}. The scaling is as follows: 1 bucket = 1000mB, whereas 1
                         * block usually equals 1000mB.</p>
                         */
                        // @ts-ignore
                         setVolume(volume: number): org.spongepowered.api.extra.fluid.FluidStack;
                        /**
                         * Creates a snapshot of this {@link FluidStack}.
                         */
                        // @ts-ignore
                         createSnapshot(): org.spongepowered.api.extra.fluid.FluidStackSnapshot;
                    }
                }
            }
        }
    }
}
