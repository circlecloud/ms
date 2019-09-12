declare namespace org {
    namespace bukkit {
        namespace entity {
            class ShulkerBullet {
                /**
                 * Retrieve the target of this bullet.
                 */
                public getTarget(): org.bukkit.entity.Entity;
                /**
                 * Sets the target of this bullet
                 */
                public setTarget(target: org.bukkit.entity.Entity): void;
            }
        }
    }
}
