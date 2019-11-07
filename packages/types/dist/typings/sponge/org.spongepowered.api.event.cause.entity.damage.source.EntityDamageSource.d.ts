// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                // @ts-ignore
                                interface EntityDamageSource extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource {
                                    /**
                                     * Creates a new {@link Builder} for building an {@link EntityDamageSource}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.event.cause.entity.damage.source.EntityDamageSource.Builder;
                                    /**
                                     * Gets the {@link Entity} that is the source.
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
