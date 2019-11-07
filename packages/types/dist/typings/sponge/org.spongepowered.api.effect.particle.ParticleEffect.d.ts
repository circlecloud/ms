declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    // @ts-ignore
                    interface ParticleEffect extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link Builder} to build a {@link ParticleEffect}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.effect.particle.ParticleEffect.Builder;
                        /**
                         * Gets the type of the particle effect.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.effect.particle.ParticleType;
                        /**
                         * Gets the value for the specified {@link ParticleOption}.
                         */
                        // @ts-ignore
                         getOption(option: org.spongepowered.api.effect.particle.ParticleOption): java.util.Optional;
                        /**
                         * Gets the value for the specified {@link ParticleOption} or
                         * the default value if not present.
                         */
                        // @ts-ignore
                         getOptionOrDefault(option: org.spongepowered.api.effect.particle.ParticleOption): java.util.Optional;
                        /**
                         * Gets a immutable {@link Map} with all the available
                         * {@link ParticleOption}s and their values.
                         */
                        // @ts-ignore
                         getOptions(): java.util.Map;
                    }
                }
            }
        }
    }
}
