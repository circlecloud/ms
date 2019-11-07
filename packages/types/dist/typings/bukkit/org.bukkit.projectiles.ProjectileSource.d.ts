// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace projectiles {
            // @ts-ignore
            interface ProjectileSource {
                /**
                 * Launches a {@link Projectile} from the ProjectileSource.
                 */
                // @ts-ignore
                 launchProjectile(projectile: java.lang.Class): org.bukkit.entity.Projectile;
                /**
                 * Launches a {@link Projectile} from the ProjectileSource with an
                 * initial velocity.
                 */
                // @ts-ignore
                 launchProjectile(projectile: java.lang.Class, velocity: org.bukkit.util.Vector): org.bukkit.entity.Projectile;
            }
        }
    }
}
