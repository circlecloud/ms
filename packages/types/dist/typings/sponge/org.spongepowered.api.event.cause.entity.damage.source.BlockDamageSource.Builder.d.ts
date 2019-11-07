// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace BlockDamageSource {
                                    // @ts-ignore
                                    interface Builder extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder {
                                        /**
                                         * Sets the {@link Location} to use as a "source".
                                         */
                                        // @ts-ignore
                                         block(location: org.spongepowered.api.world.Location): org.spongepowered.api.event.cause.entity.damage.source.BlockDamageSource.Builder;
                                        /**
                                         * Sets the {@link BlockSnapshot} to act as the "damage source".
                                         */
                                        // @ts-ignore
                                         block(blockState: org.spongepowered.api.block.BlockSnapshot): org.spongepowered.api.event.cause.entity.damage.source.BlockDamageSource.Builder;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
