declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    namespace ParticleEffect {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                            // @ts-ignore
                             from(particleEffect: org.spongepowered.api.effect.particle.ParticleEffect): org.spongepowered.api.effect.particle.ParticleEffect.Builder;
                            // @ts-ignore
                             reset(): org.spongepowered.api.effect.particle.ParticleEffect.Builder;
                            /**
                             * Sets the particle type for the particle effect.
                             */
                            // @ts-ignore
                             type(particleType: org.spongepowered.api.effect.particle.ParticleType): org.spongepowered.api.effect.particle.ParticleEffect.Builder;
                            /**
                             * Sets the value of the specified {@link ParticleOption}.
                             */
                            // @ts-ignore
                             option(option: org.spongepowered.api.effect.particle.ParticleOption, value: any): org.spongepowered.api.effect.particle.ParticleEffect.Builder;
                            /**
                             * Sets the velocity of the particle effect.
                             * <p>The default velocity is {@link Vector3d#ZERO}.</p>
                             */
                            // @ts-ignore
                             velocity(velocity: any /*Vector3d*/): org.spongepowered.api.effect.particle.ParticleEffect.Builder;
                            /**
                             * Sets the offset of the particle effect.
                             * <p>The default offset is {@link Vector3d#ZERO}.</p>
                             */
                            // @ts-ignore
                             offset(offset: any /*Vector3d*/): org.spongepowered.api.effect.particle.ParticleEffect.Builder;
                            /**
                             * Sets the amount of particles of the particle effect.
                             * <p>The default quantity is 1.</p>
                             */
                            // @ts-ignore
                             quantity(quantity: number): org.spongepowered.api.effect.particle.ParticleEffect.Builder;
                            /**
                             * Builds an instance of a ParticleEffect.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.effect.particle.ParticleEffect;
                        }
                    }
                }
            }
        }
    }
}
