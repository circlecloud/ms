declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                // @ts-ignore
                                interface EntityHealingSource extends org.spongepowered.api.event.cause.entity.health.source.HealingSource {
                                    /**
                                     * Gets a new builder to build a new {@link EntityHealingSource}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.event.cause.entity.health.source.EntityHealingSource.Builder;
                                    /**
                                     * Gets the source entity acting as the healing source.
                                     */
                                    // @ts-ignore
                                     getSource(): org.spongepowered.api.entity.Entity;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
