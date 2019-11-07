// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface AffectsSpawningData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link Value} for the "affects spawning" state.
                                 * <p>A {@link Player} who does not affect spawning will be treated as a
                                 * spectator in regards to spawning. A {@link MobSpawner} will not be
                                 * activated by his presence and mobs around him may naturally despawn
                                 * if there is no other Player around who affects spawning.</p>
                                 */
                                // @ts-ignore
                                 affectsSpawning(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
