declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface AreaEffectCloud extends org.bukkit.entity.Entity {
                /**
                 * Gets the duration which this cloud will exist for (in ticks).
                 */
                // @ts-ignore
                 getDuration(): number;
                /**
                 * Sets the duration which this cloud will exist for (in ticks).
                 */
                // @ts-ignore
                 setDuration(duration: number): void;
                /**
                 * Gets the time which an entity has to be exposed to the cloud before the
                 * effect is applied.
                 */
                // @ts-ignore
                 getWaitTime(): number;
                /**
                 * Sets the time which an entity has to be exposed to the cloud before the
                 * effect is applied.
                 */
                // @ts-ignore
                 setWaitTime(waitTime: number): void;
                /**
                 * Gets the time that an entity will be immune from subsequent exposure.
                 */
                // @ts-ignore
                 getReapplicationDelay(): number;
                /**
                 * Sets the time that an entity will be immune from subsequent exposure.
                 */
                // @ts-ignore
                 setReapplicationDelay(delay: number): void;
                /**
                 * Gets the amount that the duration of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                // @ts-ignore
                 getDurationOnUse(): number;
                /**
                 * Sets the amount that the duration of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                // @ts-ignore
                 setDurationOnUse(duration: number): void;
                /**
                 * Gets the initial radius of the cloud.
                 */
                // @ts-ignore
                 getRadius(): number;
                /**
                 * Sets the initial radius of the cloud.
                 */
                // @ts-ignore
                 setRadius(radius: number): void;
                /**
                 * Gets the amount that the radius of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                // @ts-ignore
                 getRadiusOnUse(): number;
                /**
                 * Sets the amount that the radius of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                // @ts-ignore
                 setRadiusOnUse(radius: number): void;
                /**
                 * Gets the amount that the radius of this cloud will decrease by each tick.
                 */
                // @ts-ignore
                 getRadiusPerTick(): number;
                /**
                 * Gets the amount that the radius of this cloud will decrease by each tick.
                 */
                // @ts-ignore
                 setRadiusPerTick(radius: number): void;
                /**
                 * Gets the particle which this cloud will be composed of
                 */
                // @ts-ignore
                 getParticle(): org.bukkit.Particle;
                /**
                 * Sets the particle which this cloud will be composed of
                 */
                // @ts-ignore
                 setParticle(particle: org.bukkit.Particle): void;
                /**
                 * Sets the particle which this cloud will be composed of
                 */
                // @ts-ignore
                 setParticle(particle: org.bukkit.Particle, data: java.lang.Object): void;
                /**
                 * Sets the underlying potion data
                 */
                // @ts-ignore
                 setBasePotionData(data: org.bukkit.potion.PotionData): void;
                /**
                 * Returns the potion data about the base potion
                 */
                // @ts-ignore
                 getBasePotionData(): org.bukkit.potion.PotionData;
                /**
                 * Checks for the presence of custom potion effects.
                 */
                // @ts-ignore
                 hasCustomEffects(): boolean;
                /**
                 * Gets an immutable list containing all custom potion effects applied to
                 * this cloud.
                 * <p>
                 * Plugins should check that hasCustomEffects() returns true before calling
                 * this method.
                 */
                // @ts-ignore
                 getCustomEffects(): java.util.List;
                /**
                 * Adds a custom potion effect to this cloud.
                 */
                // @ts-ignore
                 addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean;
                /**
                 * Removes a custom potion effect from this cloud.
                 */
                // @ts-ignore
                 removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Checks for a specific custom potion effect type on this cloud.
                 */
                // @ts-ignore
                 hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Removes all custom potion effects from this cloud.
                 */
                // @ts-ignore
                 clearCustomEffects(): void;
                /**
                 * Gets the color of this cloud. Will be applied as a tint to its particles.
                 */
                // @ts-ignore
                 getColor(): org.bukkit.Color;
                /**
                 * Sets the color of this cloud. Will be applied as a tint to its particles.
                 */
                // @ts-ignore
                 setColor(color: org.bukkit.Color): void;
                /**
                 * Retrieve the original source of this cloud.
                 */
                // @ts-ignore
                 getSource(): org.bukkit.projectiles.ProjectileSource;
                /**
                 * Set the original source of this cloud.
                 */
                // @ts-ignore
                 setSource(source: org.bukkit.projectiles.ProjectileSource): void;
            }
        }
    }
}
