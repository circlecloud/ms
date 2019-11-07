// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Firework extends org.bukkit.entity.Entity {
                /**
                 * Get a copy of the fireworks meta
                 */
                // @ts-ignore
                 getFireworkMeta(): org.bukkit.inventory.meta.FireworkMeta;
                /**
                 * Apply the provided meta to the fireworks
                 */
                // @ts-ignore
                 setFireworkMeta(meta: org.bukkit.inventory.meta.FireworkMeta): void;
                /**
                 * Cause this firework to explode at earliest opportunity, as if it has no
                 * remaining fuse.
                 */
                // @ts-ignore
                 detonate(): void;
                /**
                 * Gets if the firework was shot at an angle (i.e. from a crossbow).
                 * A firework which was not shot at an angle will fly straight upwards.
                 */
                // @ts-ignore
                 isShotAtAngle(): boolean;
                /**
                 * Sets if the firework was shot at an angle (i.e. from a crossbow).
                 * A firework which was not shot at an angle will fly straight upwards.
                 */
                // @ts-ignore
                 setShotAtAngle(shotAtAngle: boolean): void;
            }
        }
    }
}
