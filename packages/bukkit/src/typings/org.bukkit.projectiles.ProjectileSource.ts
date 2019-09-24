declare namespace org {
    namespace bukkit {
        namespace projectiles {
            // @ts-ignore
            interface ProjectileSource {
                /**
                 * Launches a {@link Projectile} from the ProjectileSource.
                 */
                 launchProjectile(projectile: any): org.bukkit.entity.Projectile;
                /**
                 * Launches a {@link Projectile} from the ProjectileSource with an
                 * initial velocity.
                 */
                 launchProjectile(projectile: any, velocity: org.bukkit.util.Vector): org.bukkit.entity.Projectile;
            }
        }
    }
}
