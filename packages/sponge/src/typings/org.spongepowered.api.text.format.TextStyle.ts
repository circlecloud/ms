declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    // @ts-ignore
                     class TextStyle implements org.spongepowered.api.text.TextElement {
                        /**
                         * Constructs a new {@link TextStyle}.
                         */
                        constructor(bold: any, italic: any, underline: any, strikethrough: any, obfuscated: any)
                        /**
                         * Returns whether this {@link TextStyle} is a composite of multiple text
                         * styles.
                         */
                        // @ts-ignore
                        public isComposite(): boolean;
                        /**
                         * Returns whether this {@link TextStyle} has no set properties.
                         */
                        // @ts-ignore
                        public isEmpty(): boolean;
                        /**
                         * Returns a new {@link TextStyle} with the bold property changed.
                         */
                        // @ts-ignore
                        public bold(bold: any): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextStyle} with the italic property changed.
                         */
                        // @ts-ignore
                        public italic(italic: any): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextStyle} with the underline property changed.
                         */
                        // @ts-ignore
                        public underline(underline: any): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextStyle} with the strikethrough property changed.
                         */
                        // @ts-ignore
                        public strikethrough(strikethrough: any): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextStyle} with the obfuscated property changed.
                         */
                        // @ts-ignore
                        public obfuscated(obfuscated: any): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Checks for whether text where this style is applied is bolded.
                         */
                        // @ts-ignore
                        public isBold(): any;
                        /**
                         * Checks for whether text where this style is applied is italicized.
                         */
                        // @ts-ignore
                        public isItalic(): any;
                        /**
                         * Checks for whether text where this style is applied has an underline.
                         */
                        // @ts-ignore
                        public hasUnderline(): any;
                        /**
                         * Checks for whether text where this style is applied has a strikethrough.
                         */
                        // @ts-ignore
                        public hasStrikethrough(): any;
                        /**
                         * Checks for whether text where this style is obfuscated.
                         */
                        // @ts-ignore
                        public isObfuscated(): any;
                        /**
                         * Returns whether the given {@link TextStyle} is contained in this
                         * {@link TextStyle}.
                         * <p>For example, a {@link TextStyle} with {@code bold: true, italic:
                         * true}} would return {@code true} for <code>contains(
                         * {@link TextStyles#BOLD})</code> and <code>contains(
                         * {@link TextStyles#ITALIC}).</code></p>
                         * <p>If the specified {@link TextStyle} is a composite of multiple styles
                         * it returns {@code true} if this style has at least all of the properties
                         * set in the specified style.</p>
                         */
                        // @ts-ignore
                        public contains(styles: org.spongepowered.api.text.format.TextStyle): boolean;
                        /**
                         * Negates this {@link TextStyle}. This is useful for undoing text styles
                         * that are inherited from parent messages.
                         */
                        // @ts-ignore
                        public negate(): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Composes this {@link TextStyle} with the specified text styles.
                         */
                        // @ts-ignore
                        public and(styles: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Composes this {@link TextStyle} with the passed in TextStyles, but
                         * negates them before composition. This is the same as negating all the
                         * passed in {@link TextStyle} and then using the {@link #and(TextStyle...)}
                         * method.
                         */
                        // @ts-ignore
                        public andNot(styles: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextStyle;
                        // @ts-ignore
                        public applyTo(builder: org.spongepowered.api.text.Text.Builder): void;
                        // @ts-ignore
                        public equals(o: any): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
