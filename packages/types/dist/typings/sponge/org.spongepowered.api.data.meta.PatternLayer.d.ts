// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace meta {
                    // @ts-ignore
                    interface PatternLayer extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a {@link PatternLayer} with the desired
                         * {@link BannerPatternShape} and {@link DyeColor}.
                         */
                        // @ts-ignore
                         of(shape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.meta.PatternLayer;
                        /**
                         * Gets the pattern shape for this layer.
                         */
                        // @ts-ignore
                         getShape(): org.spongepowered.api.data.type.BannerPatternShape;
                        /**
                         * Gets the color for this layer.
                         */
                        // @ts-ignore
                         getColor(): org.spongepowered.api.data.type.DyeColor;
                    }
                }
            }
        }
    }
}
