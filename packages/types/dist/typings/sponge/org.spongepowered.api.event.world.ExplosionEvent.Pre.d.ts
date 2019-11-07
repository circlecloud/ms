// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace ExplosionEvent {
                        // @ts-ignore
                        interface Pre extends org.spongepowered.api.event.world.ExplosionEvent, org.spongepowered.api.event.world.TargetWorldEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Sets the {@link Explosion} involved for this event. This will
                             * override the explosion used before calculations take place with
                             * regards to the blocks and entities affected.
                             */
                            // @ts-ignore
                             setExplosion(explosion: org.spongepowered.api.world.explosion.Explosion): void;
                        }
                    }
                }
            }
        }
    }
}
