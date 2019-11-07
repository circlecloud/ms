declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                // @ts-ignore
                                interface BlockHealingSource extends org.spongepowered.api.event.cause.entity.health.source.HealingSource {
                                    /**
                                     * Creates a builder for building a {@link BlockHealingSource}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.event.cause.entity.health.source.BlockHealingSource.Builder;
                                    /**
                                     * Gets the location of the block that acted as the healing source.
                                     */
                                    // @ts-ignore
                                     getLocation(): org.spongepowered.api.world.Location;
                                    /**
                                     * Gets the block snapshot that is acting as the healing source.
                                     */
                                    // @ts-ignore
                                     getBlock(): org.spongepowered.api.block.BlockSnapshot;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
