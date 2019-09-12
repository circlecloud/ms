declare namespace org {
    namespace bukkit {
        namespace potion {
            class PotionEffect {
                /**
                 * Creates a potion effect.
                 */
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean)
                /**
                 * Creates a potion effect with no defined color.
                 */
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean)
                /**
                 * Creates a potion effect. Assumes that particles are visible
                 */
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number, ambient: boolean)
                /**
                 * Creates a potion effect. Assumes ambient is true.
                 */
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number, amplifier: number)
                /**
                 * Constructor for deserialization.
                 */
                constructor(map: Map<any, any> /*java.util.Map*/)
                public serialize(): Map<any, any> /*java.util.Map*/;
                /**
                 * Attempts to add the effect represented by this object to the given
                 * {@link LivingEntity}.
                 */
                public apply(entity: org.bukkit.entity.LivingEntity): boolean;
                public equals(obj: any): boolean;
                /**
                 * Returns the amplifier of this effect. A higher amplifier means the
                 * potion effect happens more often over its duration and in some cases
                 * has more effect on its target.
                 */
                public getAmplifier(): number;
                /**
                 * Returns the duration (in ticks) that this effect will run for when
                 * applied to a {@link LivingEntity}.
                 */
                public getDuration(): number;
                /**
                 * Returns the {@link PotionEffectType} of this effect.
                 */
                public getType(): org.bukkit.potion.PotionEffectType;
                /**
                 * Makes potion effect produce more, translucent, particles.
                 */
                public isAmbient(): boolean;
                public hasParticles(): boolean;
                public getColor(): org.bukkit.Color;
                public hasIcon(): boolean;
                public hashCode(): number;
                public toString(): string;
            }
        }
    }
}
