// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    // @ts-ignore
                     class TextStyle extends java.lang.Object implements org.spongepowered.api.text.TextElement {
                        /**
                         * Constructs a new {@link TextStyle}.
                         */
                        // @ts-ignore
                        constructor(bold: java.lang.Boolean, italic: java.lang.Boolean, underline: java.lang.Boolean, strikethrough: java.lang.Boolean, obfuscated: java.lang.Boolean)
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
                        public bold(bold: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextStyle} with the italic property changed.
                         */
                        // @ts-ignore
                        public italic(italic: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextStyle} with the underline property changed.
                         */
                        // @ts-ignore
                        public underline(underline: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextStyle} with the strikethrough property changed.
                         */
                        // @ts-ignore
                        public strikethrough(strikethrough: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextStyle} with the obfuscated property changed.
                         */
                        // @ts-ignore
                        public obfuscated(obfuscated: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Checks for whether text where this style is applied is bolded.
                         */
                        // @ts-ignore
                        public isBold(): java.util.Optional;
                        /**
                         * Checks for whether text where this style is applied is italicized.
                         */
                        // @ts-ignore
                        public isItalic(): java.util.Optional;
                        /**
                         * Checks for whether text where this style is applied has an underline.
                         */
                        // @ts-ignore
                        public hasUnderline(): java.util.Optional;
                        /**
                         * Checks for whether text where this style is applied has a strikethrough.
                         */
                        // @ts-ignore
                        public hasStrikethrough(): java.util.Optional;
                        /**
                         * Checks for whether text where this style is obfuscated.
                         */
                        // @ts-ignore
                        public isObfuscated(): java.util.Optional;
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
                        public equals(o: java.lang.Object): boolean;
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
