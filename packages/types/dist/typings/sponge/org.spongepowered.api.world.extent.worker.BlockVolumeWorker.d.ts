// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        // @ts-ignore
                        interface BlockVolumeWorker {
                            /**
                             * Returns the volume this worker operates on.
                             */
                            // @ts-ignore
                             getVolume(): org.spongepowered.api.world.extent.BlockVolume;
                            /**
                             * Applies a mapping operation to all the blocks in the volume and saves the
                             * results to the destination volume.
                             */
                            // @ts-ignore
                             map(mapper: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeMapper, destination: org.spongepowered.api.world.extent.MutableBlockVolume): void;
                            /**
                             * Applies a merging operation to the blocks of the operating volume and an
                             * external one. Saves the results to the destination volume.
                             */
                            // @ts-ignore
                             merge(second: org.spongepowered.api.world.extent.BlockVolume, merger: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeMerger, destination: org.spongepowered.api.world.extent.MutableBlockVolume): void;
                            /**
                             * Iterates this block volume, calling the visitor on each coordinate
                             * triplet.
                             */
                            // @ts-ignore
                             iterate(visitor: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeVisitor): void;
                            /**
                             * Applies a reduction operation to the volume. The identity should be the
                             * result of no reduction being applied. For example, the additive identity
                             * is 0, the multiplicative one is 1 and the set union one is the empty
                             * set.
                             */
                            // @ts-ignore
                             reduce(reducer: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeReducer, merge: java.util.function$.BiFunction, identity: java.lang.Object): java.lang.Object;
                        }
                    }
                }
            }
        }
    }
}
