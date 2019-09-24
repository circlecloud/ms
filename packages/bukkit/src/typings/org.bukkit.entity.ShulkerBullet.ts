declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ShulkerBullet extends org.bukkit.entity.Projectile {
                /**
                 * Retrieve the target of this bullet.
                 */
                 getTarget(): org.bukkit.entity.Entity;
                /**
                 * Sets the target of this bullet
                 */
                 setTarget(target: org.bukkit.entity.Entity): void;
            }
        }
    }
}
