// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace potion {
                    namespace PotionEffect {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                            // @ts-ignore
                             from(potionEffect: org.spongepowered.api.effect.potion.PotionEffect): org.spongepowered.api.effect.potion.PotionEffect.Builder;
                            /**
                             * Sets the {@link PotionEffectType} of the potion.
                             */
                            // @ts-ignore
                             potionType(potionEffectType: org.spongepowered.api.effect.potion.PotionEffectType): org.spongepowered.api.effect.potion.PotionEffect.Builder;
                            /**
                             * Sets the duration in ticks of the potion effect.
                             */
                            // @ts-ignore
                             duration(duration: number): org.spongepowered.api.effect.potion.PotionEffect.Builder;
                            /**
                             * Sets the amplifier power of the potion effect.
                             * <p>Amplifiers must be above zero.</p>
                             */
                            // @ts-ignore
                             amplifier(amplifier: number): org.spongepowered.api.effect.potion.PotionEffect.Builder;
                            /**
                             * Sets the potion effect to be ambient or not.
                             */
                            // @ts-ignore
                             ambience(ambience: boolean): org.spongepowered.api.effect.potion.PotionEffect.Builder;
                            /**
                             * Sets the potion effect to show particles when applied or not.
                             */
                            // @ts-ignore
                             particles(showsParticles: boolean): org.spongepowered.api.effect.potion.PotionEffect.Builder;
                            /**
                             * Builds an instance of a PotionEffect.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.effect.potion.PotionEffect;
                            // @ts-ignore
                             reset(): org.spongepowered.api.effect.potion.PotionEffect.Builder;
                        }
                    }
                }
            }
        }
    }
}
