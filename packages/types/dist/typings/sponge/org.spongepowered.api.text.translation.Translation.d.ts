declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace translation {
                    // @ts-ignore
                    interface Translation {
                        /**
                         * Gets the identifier for this {@link Translation}.
                         */
                        // @ts-ignore
                         getId(): string;
                        /**
                         * Gets the default translation without extra parameters.
                         */
                        // @ts-ignore
                         get(): string;
                        /**
                         * Gets the default translation format with the specified parameters.
                         */
                        // @ts-ignore
                         get(args: java.lang.Object): string;
                        /**
                         * Gets the translation without any parameters replaced.
                         */
                        // @ts-ignore
                         get(locale: java.util.Locale): string;
                        /**
                         * Gets the translation format with the specified parameters.
                         */
                        // @ts-ignore
                         get(locale: java.util.Locale, args: java.lang.Object): string;
                    }
                }
            }
        }
    }
}
