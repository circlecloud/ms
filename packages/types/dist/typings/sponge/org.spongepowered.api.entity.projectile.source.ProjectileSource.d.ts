// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    namespace source {
                        // @ts-ignore
                        interface ProjectileSource {
                            // @ts-ignore
                             UNKNOWN: org.spongepowered.api.entity.projectile.source.UnknownProjectileSource;
                            /**
                             * Launches a {@link Projectile} from this projectile source.
                             */
                            // @ts-ignore
                             launchProjectile(projectileClass: java.lang.Class): java.util.Optional;
                            /**
                             * Launches a {@link Projectile} from this projectile source.
                             */
                            // @ts-ignore
                             launchProjectile(projectileClass: java.lang.Class, velocity: any /*Vector3d*/): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
