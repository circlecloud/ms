declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        // @ts-ignore
                        interface BlockBlob extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link BlockBlob} populator.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.world.gen.populator.BlockBlob.Builder;
                            /**
                             * Gets the {@link BlockState} that this populator will place down to form
                             * the blob.
                             */
                            // @ts-ignore
                             getBlock(): org.spongepowered.api.block.BlockState;
                            /**
                             * Sets the {@link BlockState} that this populator will place down to form
                             * the blob.
                             */
                            // @ts-ignore
                             setBlock(state: org.spongepowered.api.block.BlockState): void;
                            /**
                             * Gets the radius of the area for the blob.
                             */
                            // @ts-ignore
                             getRadius(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the radius of the area for the blob, cannot be negative.
                             */
                            // @ts-ignore
                             setRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the radius of the area for the blob, cannot be negative.
                             */
                            // @ts-ignore
                             setRadius(radius: number): void;
                            /**
                             * Gets the number of blobs which will be placed per chunk.
                             */
                            // @ts-ignore
                             getCount(): org.spongepowered.api.util.weighted.VariableAmount;
                            /**
                             * Sets the number of blobs to spawn per chunk, must be greater than zero.
                             */
                            // @ts-ignore
                             setCount(count: org.spongepowered.api.util.weighted.VariableAmount): void;
                            /**
                             * Sets the number of blobs to spawn per chunk, must be greater than zero.
                             */
                            // @ts-ignore
                             setCount(count: number): void;
                        }
                    }
                }
            }
        }
    }
}
