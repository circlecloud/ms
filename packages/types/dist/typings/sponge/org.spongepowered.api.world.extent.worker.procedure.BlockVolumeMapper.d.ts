// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            // @ts-ignore
                            interface BlockVolumeMapper {
                                /**
                                 * Produces a new block from the original block given as its volume and
                                 * coordinates.
                                 */
                                // @ts-ignore
                                 map(volume: org.spongepowered.api.world.extent.UnmodifiableBlockVolume, x: number, y: number, z: number): org.spongepowered.api.block.BlockState;
                            }
                        }
                    }
                }
            }
        }
    }
}
