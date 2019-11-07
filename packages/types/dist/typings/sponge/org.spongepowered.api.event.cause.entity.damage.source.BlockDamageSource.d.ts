declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                // @ts-ignore
                                interface BlockDamageSource extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource {
                                    /**
                                     * Creates a new {@link Builder builder} for building a
                                     * {@link BlockDamageSource}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.event.cause.entity.damage.source.BlockDamageSource.Builder;
                                    /**
                                     * Gets the location of the {@link BlockSnapshot}.
                                     */
                                    // @ts-ignore
                                     getLocation(): org.spongepowered.api.world.Location;
                                    /**
                                     * Gets the {@link BlockSnapshot} of the source.
                                     */
                                    // @ts-ignore
                                     getBlockSnapshot(): org.spongepowered.api.block.BlockSnapshot;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
