declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace common {
                                    // @ts-ignore
                                    abstract class AbstractDamageSourceBuilder extends java.lang.Object implements org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder {
                                        // @ts-ignore
                                        constructor()
                                        // @ts-ignore
                                        protected scales: boolean;
                                        // @ts-ignore
                                        protected bypasses: boolean;
                                        // @ts-ignore
                                        protected damageType: org.spongepowered.api.event.cause.entity.damage.DamageType;
                                        // @ts-ignore
                                        public scalesWithDifficulty(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public bypassesArmor(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public explosion(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public absolute(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public magical(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public creative(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public exhaustion(exhaustion: number): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public type(damageType: org.spongepowered.api.event.cause.entity.damage.DamageType): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public from(value: org.spongepowered.api.event.cause.entity.damage.source.DamageSource): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        // @ts-ignore
                                        public reset(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
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
