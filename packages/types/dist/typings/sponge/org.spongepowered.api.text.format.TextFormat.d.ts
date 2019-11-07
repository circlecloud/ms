declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    // @ts-ignore
                     class TextFormat extends java.lang.Object implements org.spongepowered.api.text.TextElement {
                        // @ts-ignore
                        public static NONE: org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Gets the {@link TextFormat} with the default style and color.
                         */
                        // @ts-ignore
                        public static of(): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Constructs a new {@link TextFormat} with the specific style.
                         */
                        // @ts-ignore
                        public static of(style: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Constructs a new {@link TextFormat} with the specific color.
                         */
                        // @ts-ignore
                        public static of(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Constructs a new {@link TextFormat} with the specific color and style.
                         */
                        // @ts-ignore
                        public static of(color: org.spongepowered.api.text.format.TextColor, style: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Returns the {@link TextColor} in this format.
                         */
                        // @ts-ignore
                        public getColor(): org.spongepowered.api.text.format.TextColor;
                        /**
                         * Returns the {@link TextStyle} in this format.
                         */
                        // @ts-ignore
                        public getStyle(): org.spongepowered.api.text.format.TextStyle;
                        /**
                         * Returns a new {@link TextFormat} with the given color.
                         */
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Returns a new {@link TextFormat} with the given style.
                         */
                        // @ts-ignore
                        public style(style: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Returns a new {@link TextFormat} that combines this and the given format.
                         * The given format takes higher priority than this one. Due to this the
                         * color will only fallback to this one if the given format's color is
                         * {@link TextColors#NONE}. If the given format's color is
                         * {@link TextColors#RESET} then {@link TextColors#NONE} will be used.
                         * Styles are combined using {@link TextStyle#and(TextStyle...)}.
                         */
                        // @ts-ignore
                        public merge(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.format.TextFormat;
                        /**
                         * Returns whether this {@link TextFormat} has no color and format
                         * specified.
                         */
                        // @ts-ignore
                        public isEmpty(): boolean;
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
