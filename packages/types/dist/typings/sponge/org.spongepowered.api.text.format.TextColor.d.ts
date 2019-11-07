// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    // @ts-ignore
                    interface TextColor extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.TextElement {
                        /**
                         * Returns the corresponding {@link Color} for this {@link TextColor}.
                         */
                        // @ts-ignore
                         getColor(): org.spongepowered.api.util.Color;
                        // @ts-ignore
                         applyTo(builder: org.spongepowered.api.text.Text.Builder): void;
                    }
                }
            }
        }
    }
}
