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
                                    abstract class AbstractHealingSource implements org.spongepowered.api.event.cause.entity.health.source.HealingSource {
                                        constructor(builder: org.spongepowered.api.event.cause.entity.health.source.common.AbstractHealingSourceBuilder)
                                        // @ts-ignore
                                        public getHealingType(): org.spongepowered.api.event.cause.entity.health.HealingType;
                                        // @ts-ignore
                                        public isDifficultyScaled(): boolean;
                                        // @ts-ignore
                                        public isMagic(): boolean;
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
