// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                namespace HealingSource {
                                    // @ts-ignore
                                    interface HealingSourceBuilder extends org.spongepowered.api.util.ResettableBuilder {
                                        /**
                                         * Sets for the built {@link HealingSource} to have scaled with
                                         * difficulty, usually meaning that the amount is scaled.
                                         */
                                        // @ts-ignore
                                         scalesWithDifficulty(): org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder;
                                        /**
                                         * Sets that the built {@link HealingSource} to have been a "magical"
                                         * source.
                                         */
                                        // @ts-ignore
                                         magical(): org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder;
                                        /**
                                         * Sets the {@link HealingType}.
                                         */
                                        // @ts-ignore
                                         type(healingType: org.spongepowered.api.event.cause.entity.health.HealingType): org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder;
                                        // @ts-ignore
                                         build(): org.spongepowered.api.event.cause.entity.health.source.HealingSource;
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
