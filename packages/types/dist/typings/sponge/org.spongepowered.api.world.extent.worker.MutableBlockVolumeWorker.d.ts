// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        // @ts-ignore
                        interface MutableBlockVolumeWorker extends org.spongepowered.api.world.extent.worker.BlockVolumeWorker {
                            /**
                             * Similar to {@link BlockVolumeWorker#map(BlockVolumeMapper,
                             * MutableBlockVolume)} but uses the operating volume as the destination.
                             * Precautions must be taken as the volume is modified while the operation
                             * is being performed, and so the surrounding blocks might not be the
                             * original ones.
                             */
                            // @ts-ignore
                             map(mapper: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeMapper): void;
                            /**
                             * Similar to {@link BlockVolumeWorker#merge(BlockVolume, BlockVolumeMerger,
                             * MutableBlockVolume)} but uses the operating volume as the destination.
                             * Precautions must be taken as the volume is modified while the operation
                             * is being performed, and so the surrounding blocks might not be the
                             * original ones.
                             */
                            // @ts-ignore
                             merge(right: org.spongepowered.api.world.extent.BlockVolume, merger: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeMerger): void;
                            /**
                             * Applies a filler operation to the volume.
                             */
                            // @ts-ignore
                             fill(filler: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeFiller): void;
                        }
                    }
                }
            }
        }
    }
}
