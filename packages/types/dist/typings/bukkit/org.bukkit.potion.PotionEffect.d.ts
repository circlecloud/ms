declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
             class PotionEffect extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                /**
                 * Creates a potion effect.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean)
                /**
                 * Creates a potion effect with no defined color.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean)
                /**
                 * Creates a potion effect. Assumes that particles are visible
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number, ambient: boolean)
                /**
                 * Creates a potion effect. Assumes ambient is true.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number)
                /**
                 * Constructor for deserialization.
                 */
                // @ts-ignore
                constructor(map: java.util.Map)
                // @ts-ignore
                public serialize(): java.util.Map;
                /**
                 * Attempts to add the effect represented by this object to the given
                 * {@link LivingEntity}.
                 */
                // @ts-ignore
                public apply(entity: org.bukkit.entity.LivingEntity): boolean;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns the amplifier of this effect. A higher amplifier means the
                 * potion effect happens more often over its duration and in some cases
                 * has more effect on its target.
                 */
                // @ts-ignore
                public getAmplifier(): number;
                /**
                 * Returns the duration (in ticks) that this effect will run for when
                 * applied to a {@link LivingEntity}.
                 */
                // @ts-ignore
                public getDuration(): number;
                /**
                 * Returns the {@link PotionEffectType} of this effect.
                 */
                // @ts-ignore
                public getType(): org.bukkit.potion.PotionEffectType;
                /**
                 * Makes potion effect produce more, translucent, particles.
                 */
                // @ts-ignore
                public isAmbient(): boolean;
                // @ts-ignore
                public hasParticles(): boolean;
                // @ts-ignore
                public getColor(): org.bukkit.Color;
                // @ts-ignore
                public hasIcon(): boolean;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
