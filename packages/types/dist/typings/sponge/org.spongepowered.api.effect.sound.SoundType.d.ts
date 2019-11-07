declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace sound {
                    // @ts-ignore
                    interface SoundType extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a new {@link Builder} for building SoundTypes.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.effect.sound.SoundType.Builder;
                        /**
                         * Creates a <i>new</i>SoundType from the given ID. To fetch existing types,
                         * use {@link GameRegistry#getType(Class, String)}.
                         */
                        // @ts-ignore
                         of(id: string): org.spongepowered.api.effect.sound.SoundType;
                    }
                }
            }
        }
    }
}
