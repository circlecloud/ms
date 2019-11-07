// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableRespawnLocation extends org.spongepowered.api.data.manipulator.immutable.ImmutableMappedData {
                                /**
                                 * Gets the {@link ImmutableMapValue} for the "respawn" locations set for
                                 * various {@link World#getUniqueId()} such that a {@link Player} may not
                                 * have a respawn point for a particular {@link World}, but may have
                                 * multiple respawn points for other {@link World}s.
                                 */
                                // @ts-ignore
                                 respawnLocation(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
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
