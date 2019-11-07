// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            // @ts-ignore
                            interface BlockVolumeMerger {
                                /**
                                 * Produces a new block from two original blocks given as their volumes and
                                 * their coordinates.
                                 */
                                // @ts-ignore
                                 merge(firstVolume: org.spongepowered.api.world.extent.UnmodifiableBlockVolume, xFirst: number, yFirst: number, zFirst: number, secondVolume: org.spongepowered.api.world.extent.UnmodifiableBlockVolume, xSecond: number, ySecond: number, zSecond: number): org.spongepowered.api.block.BlockState;
                            }
                        }
                    }
                }
            }
        }
    }
}
