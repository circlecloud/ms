declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace key {
                    // @ts-ignore
                    interface Key extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a {@link Key.Builder} which allows creation of a {@link Key}
                         * to later be registered for accessing values from
                         * a {@link ValueContainer}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.data.key.Key.Builder;
                        /**
                         * Gets the class of the {@link BaseValue} this {@link Key} is representing.
                         */
                        // @ts-ignore
                         getValueToken(): any;
                        /**
                         * Gets the class of the element of the {@link BaseValue} this {@link Key}
                         * is representing. On occasion, if the element is a {@link Collection} type,
                         * one can occasionally use {@link TypeToken#resolveType(Type)} with
                         * {@link Class#getTypeParameters()} as the type parameter of a collection
                         * is retrievable, such as the element type parameter for {@link List} or
                         * {@link Map}.
                         */
                        // @ts-ignore
                         getElementToken(): any;
                        /**
                         * Gets the {@link DataQuery} for recommended use with
                         * {@link DataContainer}s.
                         */
                        // @ts-ignore
                         getQuery(): org.spongepowered.api.data.DataQuery;
                        /**
                         * Register an event listener which listens to the value the key accesses
                         * changing.
                         */
                        // @ts-ignore
                         registerEvent(holderFilter: any, listener: org.spongepowered.api.event.EventListener): void;
                    }
                }
            }
        }
    }
}
