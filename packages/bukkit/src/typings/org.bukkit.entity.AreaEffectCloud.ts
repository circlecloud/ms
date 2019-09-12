declare namespace org {
    namespace bukkit {
        namespace entity {
            class AreaEffectCloud {
                /**
                 * Gets the duration which this cloud will exist for (in ticks).
                 */
                public getDuration(): number;
                /**
                 * Sets the duration which this cloud will exist for (in ticks).
                 */
                public setDuration(duration: number): void;
                /**
                 * Gets the time which an entity has to be exposed to the cloud before the
                 * effect is applied.
                 */
                public getWaitTime(): number;
                /**
                 * Sets the time which an entity has to be exposed to the cloud before the
                 * effect is applied.
                 */
                public setWaitTime(waitTime: number): void;
                /**
                 * Gets the time that an entity will be immune from subsequent exposure.
                 */
                public getReapplicationDelay(): number;
                /**
                 * Sets the time that an entity will be immune from subsequent exposure.
                 */
                public setReapplicationDelay(delay: number): void;
                /**
                 * Gets the amount that the duration of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                public getDurationOnUse(): number;
                /**
                 * Sets the amount that the duration of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                public setDurationOnUse(duration: number): void;
                /**
                 * Gets the initial radius of the cloud.
                 */
                public getRadius(): number;
                /**
                 * Sets the initial radius of the cloud.
                 */
                public setRadius(radius: number): void;
                /**
                 * Gets the amount that the radius of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                public getRadiusOnUse(): number;
                /**
                 * Sets the amount that the radius of this cloud will decrease by when it
                 * applies an effect to an entity.
                 */
                public setRadiusOnUse(radius: number): void;
                /**
                 * Gets the amount that the radius of this cloud will decrease by each tick.
                 */
                public getRadiusPerTick(): number;
                /**
                 * Gets the amount that the radius of this cloud will decrease by each tick.
                 */
                public setRadiusPerTick(radius: number): void;
                /**
                 * Gets the particle which this cloud will be composed of
                 */
                public getParticle(): org.bukkit.Particle;
                /**
                 * Sets the particle which this cloud will be composed of
                 */
                public setParticle(particle: org.bukkit.Particle): void;
                /**
                 * Sets the particle which this cloud will be composed of
                 */
                public setParticle(particle: org.bukkit.Particle, data: any): void;
                /**
                 * Sets the underlying potion data
                 */
                public setBasePotionData(data: org.bukkit.potion.PotionData): void;
                /**
                 * Returns the potion data about the base potion
                 */
                public getBasePotionData(): org.bukkit.potion.PotionData;
                /**
                 * Checks for the presence of custom potion effects.
                 */
                public hasCustomEffects(): boolean;
                /**
                 * Gets an immutable list containing all custom potion effects applied to
                 * this cloud.
                 * <p>
                 * Plugins should check that hasCustomEffects() returns true before calling
                 * this method.
                 */
                public getCustomEffects(): any[] /*java.util.List*/;
                /**
                 * Adds a custom potion effect to this cloud.
                 */
                public addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean;
                /**
                 * Removes a custom potion effect from this cloud.
                 */
                public removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Checks for a specific custom potion effect type on this cloud.
                 */
                public hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean;
                /**
                 * Removes all custom potion effects from this cloud.
                 */
                public clearCustomEffects(): void;
                /**
                 * Gets the color of this cloud. Will be applied as a tint to its particles.
                 */
                public getColor(): org.bukkit.Color;
                /**
                 * Sets the color of this cloud. Will be applied as a tint to its particles.
                 */
                public setColor(color: org.bukkit.Color): void;
                /**
                 * Retrieve the original source of this cloud.
                 */
                public getSource(): org.bukkit.projectiles.ProjectileSource;
                /**
                 * Set the original source of this cloud.
                 */
                public setSource(source: org.bukkit.projectiles.ProjectileSource): void;
            }
        }
    }
}
