declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace sound {
                    namespace SoundType {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Builds a new instance of a {@link SoundType}.
                             * <p>Note: If no domain (indicated by the string before ':') is present
                             * in the id, the default "minecraft" domain will be used.</p>
                             */
                            // @ts-ignore
                             build(id: string): org.spongepowered.api.effect.sound.SoundType;
                        }
                    }
                }
            }
        }
    }
}
