declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            // @ts-ignore
                            interface BlockVolumeReducer {
                                /**
                                 * Reduces a block given as its volume and coordinates into the ongoing
                                 * reduction.
                                 */
                                // @ts-ignore
                                 reduce(volume: org.spongepowered.api.world.extent.UnmodifiableBlockVolume, x: number, y: number, z: number, reduction: any): any;
                            }
                        }
                    }
                }
            }
        }
    }
}
