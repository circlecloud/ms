declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                // @ts-ignore
                                interface IndirectEntityDamageSource extends org.spongepowered.api.event.cause.entity.damage.source.EntityDamageSource {
                                    /**
                                     * Creates a new {@link Builder} for constructing
                                     * {@link IndirectEntityDamageSource}s.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource.Builder;
                                    /**
                                     * Gets the {@link Entity} that is indirectly using the {@link #getSource()}
                                     * to cause damage.
                                     */
                                    // @ts-ignore
                                     getIndirectSource(): org.spongepowered.api.entity.Entity;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
