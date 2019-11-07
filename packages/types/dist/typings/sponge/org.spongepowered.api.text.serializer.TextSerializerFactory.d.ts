declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    // @ts-ignore
                    interface TextSerializerFactory {
                        /**
                         * Returns a representation that accepts and outputs legacy color codes,
                         * using the provided legacy character.
                         */
                        // @ts-ignore
                         getFormattingCodeTextSerializer(legacyChar: string): org.spongepowered.api.text.serializer.FormattingCodeTextSerializer;
                    }
                }
            }
        }
    }
}
