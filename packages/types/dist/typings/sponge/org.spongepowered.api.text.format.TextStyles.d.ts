declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    // @ts-ignore
                     class TextStyles extends java.lang.Object {
                        // @ts-ignore
                        public static NONE: org.spongepowered.api.text.format.TextStyle;
                        // @ts-ignore
                        public static OBFUSCATED: org.spongepowered.api.text.format.TextStyle.Base;
                        // @ts-ignore
                        public static BOLD: org.spongepowered.api.text.format.TextStyle.Base;
                        // @ts-ignore
                        public static STRIKETHROUGH: org.spongepowered.api.text.format.TextStyle.Base;
                        // @ts-ignore
                        public static UNDERLINE: org.spongepowered.api.text.format.TextStyle.Base;
                        // @ts-ignore
                        public static ITALIC: org.spongepowered.api.text.format.TextStyle.Base;
                        // @ts-ignore
                        public static RESET: org.spongepowered.api.text.format.TextStyle.Base;
                        /**
                         * Returns an empty {@link TextStyle}.
                         */
                        // @ts-ignore
                        public static of(): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Constructs a composite text style from the specified styles. This will
                         * result in the same as calling {@link TextStyle#and(TextStyle...)} on all
                         * of the text styles.
                         */
                        // @ts-ignore
                        public static of(styles: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextStyle;
                    }
                }
            }
        }
    }
}
