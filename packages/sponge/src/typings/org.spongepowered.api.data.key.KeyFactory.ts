declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace key {
                    // @ts-ignore
                     class KeyFactory {
                        /**
                         * Creates a new {@link Key} with the provided <code>E</code> element class
                         * and <code>V</code> {@link Value} class along with the provided default
                         * {@link DataQuery} to be used with the generated {@link Key}.
                         * <p>Note that {@link Key}s are not registered, but it is recommended to
                         * avoid generating {@link Key}s of potentially conflicting
                         * {@link DataQuery}(s).</p>
                         */
                        // @ts-ignore
                        public static makeSingleKey(elementToken: any, valueToken: any, query: org.spongepowered.api.data.DataQuery, id: string, name: string): org.spongepowered.api.data.key.Key;
                        /**
                         * Creates a new {@link Key} based on a {@link ListValue} of a type
                         * <code>E</code> element along with the provided {@link DataQuery}.
                         */
                        // @ts-ignore
                        public static makeListKey(elementToken: any, valueToken: any, query: org.spongepowered.api.data.DataQuery, id: string, name: string): org.spongepowered.api.data.key.Key;
                        /**
                         * Creates a new {@link Key} based on a {@link SetValue} of a type
                         * <code>E</code> element along with the provided {@link DataQuery}.
                         */
                        // @ts-ignore
                        public static makeSetKey(elementToken: any, valueToken: any, query: org.spongepowered.api.data.DataQuery, id: string, name: string): org.spongepowered.api.data.key.Key;
                        /**
                         * Creates a new {@link Key} based on a {@link MapValue} of the types
                         * <code>K</code> keys and <code>V</code> values with the provided
                         * {@link DataQuery} for accessing the {@link Map} in {@link DataView}s.
                         */
                        // @ts-ignore
                        public static makeMapKey(elementToken: any, valueToken: any, query: org.spongepowered.api.data.DataQuery, id: string, name: string): org.spongepowered.api.data.key.Key;
                        /**
                         * Creates a new {@link Key} based on an {@link OptionalValue} of the type
                         * <code>E</code> element type with the provided {@link DataQuery} for
                         * accessing the optionally null value in {@link DataView}s.
                         */
                        // @ts-ignore
                        public static makeOptionalKey(elementToken: any, valueToken: any, query: org.spongepowered.api.data.DataQuery, id: string, name: string): org.spongepowered.api.data.key.Key;
                    }
                }
            }
        }
    }
}
