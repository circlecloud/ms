// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface RespawnLocationData extends org.spongepowered.api.data.manipulator.mutable.MappedData {
                                /**
                                 * Gets the {@link MapValue} for the "respawn" locations set for various
                                 * {@link World#getUniqueId()} such that a {@link Player} may not have a
                                 * respawn point for a particular {@link World}, but may have multiple
                                 * respawn points for other {@link World}s.
                                 */
                                // @ts-ignore
                                 respawnLocation(): org.spongepowered.api.data.value.mutable.MapValue;
                                /**
                                 * Gets the respawn location for the given world, if available. If the
                                 * respawn point for that world has not been set, {@link Optional#empty()}
                                 * is returned.
                                 */
                                // @ts-ignore
                                 getForWorld(world: org.spongepowered.api.world.World): java.util.Optional;
                            }
                        }
                    }
                }
            }
        }
    }
}
