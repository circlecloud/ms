declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            // @ts-ignore
                            interface BiomeVolumeMapper {
                                /**
                                 * Produces a new biome from the original biome given as its volume and
                                 * coordinates.
                                 */
                                // @ts-ignore
                                 map(volume: org.spongepowered.api.world.extent.UnmodifiableBiomeVolume, x: number, y: number, z: number): org.spongepowered.api.world.biome.BiomeType;
                            }
                        }
                    }
                }
            }
        }
    }
}
