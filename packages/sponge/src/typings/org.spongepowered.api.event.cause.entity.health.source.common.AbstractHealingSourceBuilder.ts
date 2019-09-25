declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                namespace common {
                                    // @ts-ignore
                                    abstract class AbstractHealingSourceBuilder implements org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder {
                                        constructor()
                                        // @ts-ignore
                                        protected scales: boolean;
                                        // @ts-ignore
                                        protected healingType: org.spongepowered.api.event.cause.entity.health.HealingType;
                                        // @ts-ignore
                                        public scalesWithDifficulty(): org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder;
                                        // @ts-ignore
                                        public magical(): org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder;
                                        // @ts-ignore
                                        public type(healingType: org.spongepowered.api.event.cause.entity.health.HealingType): org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder;
                                        // @ts-ignore
                                        public from(value: org.spongepowered.api.event.cause.entity.health.source.HealingSource): org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder;
                                        // @ts-ignore
                                        public reset(): org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder;
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
