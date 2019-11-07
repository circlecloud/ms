declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                namespace BlockHealingSource {
                                    // @ts-ignore
                                    interface Builder extends org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder {
                                        // @ts-ignore
                                         block(location: org.spongepowered.api.world.Location): org.spongepowered.api.event.cause.entity.health.source.BlockHealingSource.Builder;
                                        // @ts-ignore
                                         block(blockState: org.spongepowered.api.block.BlockSnapshot): org.spongepowered.api.event.cause.entity.health.source.BlockHealingSource.Builder;
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
