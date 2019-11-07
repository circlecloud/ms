declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            // @ts-ignore
                            interface BlockVolumeVisitor {
                                /**
                                 * Visits a block given as its volume and coordinates.
                                 */
                                // @ts-ignore
                                 visit(volume: org.spongepowered.api.world.extent.BlockVolume, x: number, y: number, z: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
