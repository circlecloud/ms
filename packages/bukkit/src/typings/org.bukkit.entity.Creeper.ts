declare namespace org {
    namespace bukkit {
        namespace entity {
            class Creeper {
                /**
                 * Checks if this Creeper is powered (Electrocuted)
                 */
                public isPowered(): boolean;
                /**
                 * Sets the Powered status of this Creeper
                 */
                public setPowered(value: boolean): void;
                /**
                 * Set the maximum fuse ticks for this Creeper, where the maximum ticks
                 * is the amount of time in which a creeper is allowed to be in the
                 * primed state before exploding.
                 */
                public setMaxFuseTicks(ticks: number): void;
                /**
                 * Get the maximum fuse ticks for this Creeper, where the maximum ticks
                 * is the amount of time in which a creeper is allowed to be in the
                 * primed state before exploding.
                 */
                public getMaxFuseTicks(): number;
                /**
                 * Set the explosion radius in which this Creeper's explosion will affect.
                 */
                public setExplosionRadius(radius: number): void;
                /**
                 * Get the explosion radius in which this Creeper's explosion will affect.
                 */
                public getExplosionRadius(): number;
                /**
                 * Makes this Creeper explode instantly.
                 * The resulting explosion can be cancelled by an
                 * {@link org.bukkit.event.entity.ExplosionPrimeEvent} and obeys the mob
                 * griefing gamerule.
                 */
                public explode(): void;
                /**
                 * Ignites this Creeper, beginning its fuse.
                 * The amount of time the Creeper takes to explode will depend on what
                 * {@link #setMaxFuseTicks} is set as.
                 * The resulting explosion can be cancelled by an
                 * {@link org.bukkit.event.entity.ExplosionPrimeEvent} and obeys the mob
                 * griefing gamerule.
                 */
                public ignite(): void;
            }
        }
    }
}
