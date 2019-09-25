declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace translation {
                    // @ts-ignore
                     class ResourceBundleTranslation implements org.spongepowered.api.text.translation.Translation {
                        /**
                         * Create a ResourceBundle-backed translation for the given key and bundle
                         * factory.
                         */
                        constructor(key: string, bundleFunction: any)
                        // @ts-ignore
                        public getId(): string;
                        // @ts-ignore
                        public get(locale: any): string;
                        // @ts-ignore
                        public get(locale: any, args: any): string;
                    }
                }
            }
        }
    }
}
