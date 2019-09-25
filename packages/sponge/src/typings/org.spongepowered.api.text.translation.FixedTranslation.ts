declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace translation {
                    // @ts-ignore
                     class FixedTranslation implements org.spongepowered.api.text.translation.Translation {
                        /**
                         * Create a new translation with an id and value that are the same.
                         */
                        constructor(value: string)
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
