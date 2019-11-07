// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace meta {
                    namespace PatternLayer {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                            /**
                             * Sets the {@link BannerPatternShape} to be used.
                             */
                            // @ts-ignore
                             pattern(shape: org.spongepowered.api.data.type.BannerPatternShape): org.spongepowered.api.data.meta.PatternLayer.Builder;
                            /**
                             * Sets the {@link DyeColor} to be used.
                             */
                            // @ts-ignore
                             color(color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.meta.PatternLayer.Builder;
                            /**
                             * Builds a {@link PatternLayer} provided that the
                             * color and pattern are set.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.data.meta.PatternLayer;
                            // @ts-ignore
                             reset(): org.spongepowered.api.data.meta.PatternLayer.Builder;
                        }
                    }
                }
            }
        }
    }
}
