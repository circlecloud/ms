declare namespace org {
    namespace bukkit {
        namespace entity {
            class Projectile {
                /**
                 * Retrieve the shooter of this projectile.
                 */
                public getShooter(): org.bukkit.projectiles.ProjectileSource;
                /**
                 * Set the shooter of this projectile.
                 */
                public setShooter(source: org.bukkit.projectiles.ProjectileSource): void;
                /**
                 * Determine if this projectile should bounce or not when it hits.
                 * <p>
                 * If a small fireball does not bounce it will set the target on fire.
                 */
                public doesBounce(): boolean;
                /**
                 * Set whether or not this projectile should bounce or not when it hits
                 * something.
                 */
                public setBounce(doesBounce: boolean): void;
            }
        }
    }
}
