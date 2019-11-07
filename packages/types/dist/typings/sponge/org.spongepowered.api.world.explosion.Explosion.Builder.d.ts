// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace explosion {
                    namespace Explosion {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the location origin of the explosion.
                             */
                            // @ts-ignore
                             location(location: org.spongepowered.api.world.Location): org.spongepowered.api.world.explosion.Explosion.Builder;
                            /**
                             * Sets the source explosive of the explosion.
                             */
                            // @ts-ignore
                             sourceExplosive(source: org.spongepowered.api.entity.explosive.Explosive): org.spongepowered.api.world.explosion.Explosion.Builder;
                            /**
                             * Sets the radius of the explosion.
                             */
                            // @ts-ignore
                             radius(radius: number): org.spongepowered.api.world.explosion.Explosion.Builder;
                            /**
                             * Sets whether the affected blocks have a chance to catch on fire.
                             */
                            // @ts-ignore
                             canCauseFire(fire: boolean): org.spongepowered.api.world.explosion.Explosion.Builder;
                            /**
                             * Sets whether the explosion will damage entities nearby.
                             */
                            // @ts-ignore
                             shouldDamageEntities(damage: boolean): org.spongepowered.api.world.explosion.Explosion.Builder;
                            /**
                             * Sets whether the explosion will have smoke particles.
                             */
                            // @ts-ignore
                             shouldPlaySmoke(smoke: boolean): org.spongepowered.api.world.explosion.Explosion.Builder;
                            /**
                             * Sets whether the affected blocks should be destroyed on explosion.
                             */
                            // @ts-ignore
                             shouldBreakBlocks(destroy: boolean): org.spongepowered.api.world.explosion.Explosion.Builder;
                            /**
                             * Attempts to create a {@link Explosion} from the specified parameters.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.world.explosion.Explosion;
                        }
                    }
                }
            }
        }
    }
}
