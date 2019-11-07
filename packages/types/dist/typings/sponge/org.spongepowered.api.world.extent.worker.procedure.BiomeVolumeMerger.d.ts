// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            // @ts-ignore
                            interface BiomeVolumeMerger {
                                /**
                                 * Produces a new biome from two original biomes given as their volumes and
                                 * their coordinates.
                                 */
                                // @ts-ignore
                                 merge(firstVolume: org.spongepowered.api.world.extent.UnmodifiableBiomeVolume, xFirst: number, yFirst: number, zFirst: number, secondVolume: org.spongepowered.api.world.extent.UnmodifiableBiomeVolume, xSecond: number, ySecond: number, zSecond: number): org.spongepowered.api.world.biome.BiomeType;
                            }
                        }
                    }
                }
            }
        }
    }
}
