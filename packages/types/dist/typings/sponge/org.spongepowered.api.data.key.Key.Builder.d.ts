// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace key {
                    namespace Key {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.CatalogBuilder {
                            /**
                             * Starter method for the builder, to be used immediately after
                             * {@link Key#builder()} is called. This defines the generics for the
                             * builder itself to provide the properly generified {@link Key}.
                             * <p>Common {@link TypeToken TypeTokens} can be found in
                             * {@link TypeTokens}. If a new TypeToken is to be created, it is
                             * recommended to create an anonymous class instance of a token,
                             * as recommended by Guava's wiki found
                             * <a href="https://github.com/google/guava/wiki/ReflectionExplained#introduction">here</a>.
                             * </p>
                             */
                            // @ts-ignore
                             type(token: any): org.spongepowered.api.data.key.Key.Builder;
                            // @ts-ignore
                             id(id: string): org.spongepowered.api.data.key.Key.Builder;
                            // @ts-ignore
                             name(name: string): org.spongepowered.api.data.key.Key.Builder;
                            /**
                             * Sets the {@link DataQuery} recommended for use with
                             * {@link DataContainer}s. See {@link Key#getQuery()}.
                             */
                            // @ts-ignore
                             query(query: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.key.Key.Builder;
                            /**
                             * Builds a new {@link Key}, provided that the
                             * {@link #type(TypeToken)}, {@link #id(String)},
                             * {@link #name(String)}, and {@link #query(DataQuery)}
                             * are set.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.data.key.Key;
                            // @ts-ignore
                             from(value: org.spongepowered.api.data.key.Key): org.spongepowered.api.data.key.Key.Builder;
                        }
                    }
                }
            }
        }
    }
}
