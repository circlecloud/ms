declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface AreaEffectCloud extends org.bukkit.entity.Entity {
                /**
                 * Gets the duration which this cloud will exist for (in ticks).
                 */
                 getDuration(): number;
                /**
                 * Sets the duration which this cloud will exist for (in ticks).
                 */
                 setDuration(duration: number): void;
                /**
                 * Gets the time which an entity has to be exposed to the cloud before the
                 * effect is applied.
                 */
                 getWaitTime(): number;
                /**
                 * Sets the time which an entity has to be exposed to the cloud before the
                 * effect is applied.
                 */
                 setWaitTime(waitTime: number): void;
                /**
                 * Gets the time that an entity will be immune from subsequent exposure.
                 */
                 getReapplicationDelay(): number;
                /**
                 * Sets the time that an entity will be immune from subsequent exposure.
                 */
                 setReapplicationDelay(delay: number): void;
                /**
                 * Gets the amount that the duration of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                 getDurationOnUse(): number;
                /**
                 * Sets the amount that the duration of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                 setDurationOnUse(duration: number): void;
                /**
                 * Gets the initial radius of the cloud.
                 */
                 getRadius(): number;
                /**
                 * Sets the initial radius of the cloud.
                 */
                 setRadius(radius: number): void;
                /**
                 * Gets the amount that the radius of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                 getRadiusOnUse(): number;
                /**
                 * Sets the amount that the radius of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                 setRadiusOnUse(radius: number): void;
                /**
                 * Gets the amount that the radius of this cloud will decrease by each tick.
                 */
                 getRadiusPerTick(): number;
                /**
                 * Gets the amount that the radius of this cloud will decrease by each tick.
                 */
                 setRadiusPerTick(radius: number): void;
                /**
                 * Gets the particle which this cloud will be composed of
                 */
                 getParticle(): org.bukkit.Particle;
                /**
                 * Sets the particle which this cloud will be composed of
                 */
                 setParticle(particle: org.bukkit.Particle): void;
                /**
                 * Sets the particle which this cloud will be composed of
                 */
                 setParticle(particle: org.bukkit.Particle, data: any): void;
                /**
                 * Sets the underlying potion data
                 */
                 setBasePotionData(data: org.bukkit.potion.PotionData): void;
                /**
                 * Returns the potion data about the base potion
                 */
                 getBasePotionData(): org.bukkit.potion.PotionData;
                /**
                 * Checks for the presence of custom potion effects.
                 */
                 hasCustomEffects(): boolean;
                /**
                 * Gets an immutable list containing all custom potion effects applied to
                 * this cloud.
                 * <p>
                 * Plugins should check that hasCustomEffects() returns true before calling
                 * this method.
                 */
                 getCustomEffects(): any[] /*java.util.List*/;
                /**
                 * Adds a custom potion effect to this cloud.
                 */
                 addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean;
                /**
                 * Removes a custom potion effect from this cloud.
                 */
                 removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Checks for a specific custom potion effect type on this cloud.
                 */
                 hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Removes all custom potion effects from this cloud.
                 */
                 clearCustomEffects(): void;
                /**
                 * Gets the color of this cloud. Will be applied as a tint to its particles.
                 */
                 getColor(): org.bukkit.Color;
                /**
                 * Sets the color of this cloud. Will be applied as a tint to its particles.
                 */
                 setColor(color: org.bukkit.Color): void;
                /**
                 * Retrieve the original source of this cloud.
                 */
                 getSource(): org.bukkit.projectiles.ProjectileSource;
                /**
                 * Set the original source of this cloud.
                 */
                 setSource(source: org.bukkit.projectiles.ProjectileSource): void;
            }
        }
    }
}
