declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace potion {
                    // @ts-ignore
                    interface PotionEffect extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.property.PropertyHolder {
                        /**
                         * Creates a new {@link Builder} to build a {@link PotionEffect}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.effect.potion.PotionEffect.Builder;
                        /**
                         * Creates a new {@link PotionEffect} with the provided
                         * {@link PotionEffectType}, the provided amplifier, and the provided
                         * duration in ticks.
                         */
                        // @ts-ignore
                         of(type: org.spongepowered.api.effect.potion.PotionEffectType, amplifier: number, duration: number): org.spongepowered.api.effect.potion.PotionEffect;
                        /**
                         * Gets the {@link PotionEffectType} of this potion.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.effect.potion.PotionEffectType;
                        /**
                         * Gets the duration in ticks for which this potion effect
                         * will apply for.
                         */
                        // @ts-ignore
                         getDuration(): number;
                        /**
                         * Gets the amplifier at which this potion effect
                         * will apply effects.
                         */
                        // @ts-ignore
                         getAmplifier(): number;
                        /**
                         * Gets if the potion effect is an ambient effect.
                         */
                        // @ts-ignore
                         isAmbient(): boolean;
                        /**
                         * Gets whether or not this potion effect should
                         * show particles.
                         */
                        // @ts-ignore
                         getShowParticles(): boolean;
                    }
                }
            }
        }
    }
}
