// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace explosion {
                    // @ts-ignore
                    interface Explosion extends org.spongepowered.api.world.Locatable {
                        /**
                         * Creates a new {@link Builder} to build a {@link Explosion}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.world.explosion.Explosion.Builder;
                        /**
                         * Gets the source {@link Explosive} of the explosion.
                         */
                        // @ts-ignore
                         getSourceExplosive(): java.util.Optional;
                        /**
                         * Gets the radius of the explosion.
                         */
                        // @ts-ignore
                         getRadius(): number;
                        /**
                         * Gets whether the affected blocks have a chance to catch on fire.
                         */
                        // @ts-ignore
                         canCauseFire(): boolean;
                        /**
                         * Gets whether the explosion will play a smoke effect.
                         */
                        // @ts-ignore
                         shouldPlaySmoke(): boolean;
                        /**
                         * Gets whether the affected blocks should be destroyed on explosion.
                         */
                        // @ts-ignore
                         shouldBreakBlocks(): boolean;
                        /**
                         * Gets whether this explosion will damage entities.
                         */
                        // @ts-ignore
                         shouldDamageEntities(): boolean;
                    }
                }
            }
        }
    }
}
