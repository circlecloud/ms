declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ShulkerBullet extends org.bukkit.entity.Projectile {
                /**
                 * Retrieve the target of this bullet.
                 */
                // @ts-ignore
                 getTarget(): org.bukkit.entity.Entity;
                /**
                 * Sets the target of this bullet
                 */
                // @ts-ignore
                 setTarget(target: org.bukkit.entity.Entity): void;
            }
        }
    }
}
