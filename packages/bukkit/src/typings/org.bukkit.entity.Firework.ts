declare namespace org {
    namespace bukkit {
        namespace entity {
            class Firework {
                /**
                 * Get a copy of the fireworks meta
                 */
                public getFireworkMeta(): org.bukkit.inventory.meta.FireworkMeta;
                /**
                 * Apply the provided meta to the fireworks
                 */
                public setFireworkMeta(meta: org.bukkit.inventory.meta.FireworkMeta): void;
                /**
                 * Cause this firework to explode at earliest opportunity, as if it has no
                 * remaining fuse.
                 */
                public detonate(): void;
                /**
                 * Gets if the firework was shot at an angle (i.e. from a crossbow).
                 * A firework which was not shot at an angle will fly straight upwards.
                 */
                public isShotAtAngle(): boolean;
                /**
                 * Sets if the firework was shot at an angle (i.e. from a crossbow).
                 * A firework which was not shot at an angle will fly straight upwards.
                 */
                public setShotAtAngle(shotAtAngle: boolean): void;
            }
        }
    }
}
