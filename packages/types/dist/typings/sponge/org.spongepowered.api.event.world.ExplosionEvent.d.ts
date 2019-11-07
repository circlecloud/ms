declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    // @ts-ignore
                    interface ExplosionEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the {@link Explosion} involved in this event.
                         */
                        // @ts-ignore
                         getExplosion(): org.spongepowered.api.world.explosion.Explosion;
                    }
                }
            }
        }
    }
}
