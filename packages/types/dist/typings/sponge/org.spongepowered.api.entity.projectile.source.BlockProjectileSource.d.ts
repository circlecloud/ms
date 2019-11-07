// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    namespace source {
                        // @ts-ignore
                        interface BlockProjectileSource extends org.spongepowered.api.entity.projectile.source.ProjectileSource {
                            /**
                             * Gets the {@link Location} where the projectile source is at.
                             */
                            // @ts-ignore
                             getLocation(): org.spongepowered.api.world.Location;
                            /**
                             * Gets the {@link BlockState} of the projectile source.
                             */
                            // @ts-ignore
                             getBlock(): org.spongepowered.api.block.BlockState;
                        }
                    }
                }
            }
        }
    }
}
