declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Projectile extends org.bukkit.entity.Entity {
                /**
                 * Retrieve the shooter of this projectile.
                 */
                // @ts-ignore
                 getShooter(): org.bukkit.projectiles.ProjectileSource;
                /**
                 * Set the shooter of this projectile.
                 */
                // @ts-ignore
                 setShooter(source: org.bukkit.projectiles.ProjectileSource): void;
                /**
                 * Determine if this projectile should bounce or not when it hits.
                 * <p>
                 * If a small fireball does not bounce it will set the target on fire.
                 */
                // @ts-ignore
                 doesBounce(): boolean;
                /**
                 * Set whether or not this projectile should bounce or not when it hits
                 * something.
                 */
                // @ts-ignore
                 setBounce(doesBounce: boolean): void;
            }
        }
    }
}
