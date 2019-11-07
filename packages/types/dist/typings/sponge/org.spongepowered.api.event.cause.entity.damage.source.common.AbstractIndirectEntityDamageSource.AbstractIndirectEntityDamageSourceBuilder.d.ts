// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace common {
                                    namespace AbstractIndirectEntityDamageSource {
                                        // @ts-ignore
                                        abstract class AbstractIndirectEntityDamageSourceBuilder extends org.spongepowered.api.event.cause.entity.damage.source.common.AbstractEntityDamageSource.AbstractEntityDamageSourceBuilder implements org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource.AbstractBuilder {
                                            // @ts-ignore
                                            constructor()
                                            // @ts-ignore
                                            protected sourceEntity: org.spongepowered.api.entity.Entity;
                                            // @ts-ignore
                                            protected indirect: org.spongepowered.api.entity.Entity;
                                            // @ts-ignore
                                            public entity(entity: org.spongepowered.api.entity.Entity): org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource.AbstractBuilder;
                                            // @ts-ignore
                                            public proxySource(projectile: org.spongepowered.api.entity.Entity): org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource.AbstractBuilder;
                                            // @ts-ignore
                                            public reset(): org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource.AbstractBuilder;
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
}
