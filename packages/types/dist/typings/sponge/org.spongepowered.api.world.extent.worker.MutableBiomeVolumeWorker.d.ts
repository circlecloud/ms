// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        // @ts-ignore
                        interface MutableBiomeVolumeWorker extends org.spongepowered.api.world.extent.worker.BiomeVolumeWorker {
                            /**
                             * Similar to {@link BiomeVolumeWorker#map(BiomeVolumeMapper,
                             * MutableBiomeVolume)} but uses the operating volume as the destination.
                             * Precautions must be taken as the volume is modified while the operation
                             * is being performed, and so the surrounding blocks might not be the
                             * original ones.
                             */
                            // @ts-ignore
                             map(mapper: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeMapper): void;
                            /**
                             * Similar to {@link BiomeVolumeWorker#merge(BiomeVolume, BiomeVolumeMerger,
                             * MutableBiomeVolume)} but uses the operating volume as the destination.
                             * Precautions must be taken as the volume is modified while the operation
                             * is being performed, and so the surrounding blocks might not be the
                             * original ones.
                             */
                            // @ts-ignore
                             merge(right: org.spongepowered.api.world.extent.BiomeVolume, merger: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeMerger): void;
                            /**
                             * Applies a filler operation to the volume.
                             */
                            // @ts-ignore
                             fill(filler: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeFiller): void;
                        }
                    }
                }
            }
        }
    }
}
