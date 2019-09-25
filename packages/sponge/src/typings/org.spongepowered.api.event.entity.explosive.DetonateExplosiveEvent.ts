declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace explosive {
                        // @ts-ignore
                        interface DetonateExplosiveEvent extends org.spongepowered.api.event.entity.explosive.TargetExplosiveEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Returns the explosion of the vanilla behavior that this event was
                             * initialized with.
                             */
                            // @ts-ignore
                             getOriginalExplosion(): org.spongepowered.api.world.explosion.Explosion;
                            /**
                             * Returns the {@link Builder} that will be used to build the
                             * explosion for the impending detonation.
                             */
                            // @ts-ignore
                             getExplosionBuilder(): org.spongepowered.api.world.explosion.Explosion.Builder;
                        }
                    }
                }
            }
        }
    }
}
