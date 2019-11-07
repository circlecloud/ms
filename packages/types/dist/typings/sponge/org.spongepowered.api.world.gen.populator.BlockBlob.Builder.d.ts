// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace BlockBlob {
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                /**
                                 * Sets the {@link BlockState} that this populator will place down to
                                 * form the blob.
                                 */
                                // @ts-ignore
                                 block(block: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.BlockBlob.Builder;
                                /**
                                 * Sets the radius of the area for the blob, cannot be negative.
                                 */
                                // @ts-ignore
                                 radius(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.BlockBlob.Builder;
                                /**
                                 * Sets the radius of the area for the blob, cannot be negative.
                                 */
                                // @ts-ignore
                                 radius(radius: number): org.spongepowered.api.world.gen.populator.BlockBlob.Builder;
                                /**
                                 * Sets the number of blobs to spawn per chunk, must be greater than
                                 * zero.
                                 */
                                // @ts-ignore
                                 blobCount(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.BlockBlob.Builder;
                                /**
                                 * Sets the number of blobs to spawn per chunk, must be greater than
                                 * zero.
                                 */
                                // @ts-ignore
                                 blobCount(count: number): org.spongepowered.api.world.gen.populator.BlockBlob.Builder;
                                /**
                                 * Builds a new instance of a {@link BlockBlob} populator with the
                                 * settings set within the builder.
                                 */
                                // @ts-ignore
                                 build(): org.spongepowered.api.world.gen.populator.BlockBlob;
                            }
                        }
                    }
                }
            }
        }
    }
}
