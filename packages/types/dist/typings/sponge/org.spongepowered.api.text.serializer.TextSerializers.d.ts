declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    // @ts-ignore
                     class TextSerializers extends java.lang.Object {
                        // @ts-ignore
                        public static PLAIN: org.spongepowered.api.text.serializer.SafeTextSerializer;
                        // @ts-ignore
                        public static LEGACY_FORMATTING_CODE: org.spongepowered.api.text.serializer.FormattingCodeTextSerializer;
                        // @ts-ignore
                        public static FORMATTING_CODE: org.spongepowered.api.text.serializer.FormattingCodeTextSerializer;
                        // @ts-ignore
                        public static JSON: org.spongepowered.api.text.serializer.TextSerializer;
                        /**
                         * Returns a representation that accepts and outputs formatting codes, using
                         * the provided formatting character.
                         */
                        // @ts-ignore
                        public static formattingCode(formattingChar: string): org.spongepowered.api.text.serializer.FormattingCodeTextSerializer;
                    }
                }
            }
        }
    }
}
