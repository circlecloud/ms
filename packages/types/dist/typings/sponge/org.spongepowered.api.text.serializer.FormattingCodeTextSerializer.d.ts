// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    // @ts-ignore
                    interface FormattingCodeTextSerializer extends org.spongepowered.api.text.serializer.SafeTextSerializer {
                        /**
                         * Returns the formatting character for this
                         * {@link FormattingCodeTextSerializer}.
                         */
                        // @ts-ignore
                         getCharacter(): string;
                        /**
                         * Removes the color codes for this {@link FormattingCodeTextSerializer}
                         * from a string.
                         */
                        // @ts-ignore
                         stripCodes(text: string): string;
                        /**
                         * Replaces the formatting codes in the specified string with a different
                         * specified character, e.g. {@code &cHello &eSponge! -> $cHello $eSponge!}
                         */
                        // @ts-ignore
                         replaceCodes(text: string, to: string): string;
                        /**
                         * Replaces the formatting codes in the specified string with a different
                         * character for the specified {@link FormattingCodeTextSerializer},
                         * e.g. {@code &cHello &eSponge! -> $cHello $eSponge!}
                         */
                        // @ts-ignore
                         replaceCodes(text: string, serializer: org.spongepowered.api.text.serializer.FormattingCodeTextSerializer): string;
                    }
                }
            }
        }
    }
}
