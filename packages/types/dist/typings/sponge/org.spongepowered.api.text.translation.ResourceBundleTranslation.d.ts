declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace translation {
                    // @ts-ignore
                     class ResourceBundleTranslation extends java.lang.Object implements org.spongepowered.api.text.translation.Translation {
                        /**
                         * Create a ResourceBundle-backed translation for the given key and bundle
                         * factory.
                         */
                        // @ts-ignore
                        constructor(key: string, bundleFunction: java.util.function$.Function)
                        // @ts-ignore
                        public getId(): string;
                        // @ts-ignore
                        public get(locale: java.util.Locale): string;
                        // @ts-ignore
                        public get(locale: java.util.Locale, args: java.lang.Object): string;
                    }
                }
            }
        }
    }
}
