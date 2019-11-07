// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace potion {
                    // @ts-ignore
                    interface PotionEffectType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets whether this potion effect is applied instantly or over time.
                         */
                        // @ts-ignore
                         isInstant(): boolean;
                        /**
                         * Gets the {@link Translation} for this potion effect type as a potion
                         * name.
                         */
                        // @ts-ignore
                         getPotionTranslation(): org.spongepowered.api.text.translation.Translation;
                    }
                }
            }
        }
    }
}
