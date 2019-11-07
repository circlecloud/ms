// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    // @ts-ignore
                    interface ParticleType extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the default value for the specified {@link ParticleOption}, it may
                         * return {@link Optional#empty()} if the particle option isn't supported
                         * by this particle type.
                         */
                        // @ts-ignore
                         getDefaultOption(option: org.spongepowered.api.effect.particle.ParticleOption): java.util.Optional;
                        /**
                         * Gets a immutable {@link Map} with all the available
                         * {@link ParticleOption}s and their values. When a option isn't
                         * available inside this {@link Map} it's most likely not supported
                         * by this particle type.
                         */
                        // @ts-ignore
                         getDefaultOptions(): java.util.Map;
                    }
                }
            }
        }
    }
}
