declare namespace org {
    namespace bukkit {
        namespace projectiles {
            class ProjectileSource {
                /**
                 * Launches a {@link Projectile} from the ProjectileSource.
                 */
                public launchProjectile(projectile: any): org.bukkit.entity.Projectile;
                /**
                 * Launches a {@link Projectile} from the ProjectileSource with an
                 * initial velocity.
                 */
                public launchProjectile(projectile: any, velocity: org.bukkit.util.Vector): org.bukkit.entity.Projectile;
            }
        }
    }
}
