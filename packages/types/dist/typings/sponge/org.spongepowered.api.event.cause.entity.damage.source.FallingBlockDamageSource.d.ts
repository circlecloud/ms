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
                                interface FallingBlockDamageSource extends org.spongepowered.api.event.cause.entity.damage.source.EntityDamageSource {
                                    /**
                                     * Creates a new {@link Builder} for constructing a new {@link FallingBlockDamageSource}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.event.cause.entity.damage.source.FallingBlockDamageSource.Builder;
                                    // @ts-ignore
                                     getSource(): org.spongepowered.api.entity.FallingBlock;
                                    /**
                                     * Gets the {@link ImmutableFallingBlockData} backing the
                                     * {@link FallingBlock}.
                                     */
                                    // @ts-ignore
                                     getFallingBlockData(): org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFallingBlockData;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
