declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    // @ts-ignore
                    interface Projectile extends org.spongepowered.api.entity.Entity {
                        /**
                         * Gets the shooter of this projectile.
                         * <p>All projectiles have a {@link ProjectileSource} regardless of whether
                         * the projectile was launched via plugin or mod.</p>
                         */
                        // @ts-ignore
                         getShooter(): org.spongepowered.api.entity.projectile.source.ProjectileSource;
                        /**
                         * Sets the shooter of this projectile.
                         * <p>All projectiles have a {@link ProjectileSource} regardless of whether
                         * the projectile was launched via plugin or mod.</p>
                         */
                        // @ts-ignore
                         setShooter(shooter: org.spongepowered.api.entity.projectile.source.ProjectileSource): void;
                    }
                }
            }
        }
    }
}
