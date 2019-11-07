declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    interface PropertyRegistry {
                        /**
                         * Registers the provided {@link PropertyStore} for the given
                         * {@link Property} {@link Class}. Note that only a single
                         * {@link PropertyStore} can be registered per {@link Property}. Multiple
                         * registrations will result in exceptions being thrown.
                         */
                        // @ts-ignore
                         register(propertyClass: java.lang.Class, propertyStore: org.spongepowered.api.data.property.PropertyStore): void;
                        /**
                         * Retrieves the {@link PropertyStore} associated for the provided
                         * {@link Property} class.
                         */
                        // @ts-ignore
                         getStore(propertyClass: java.lang.Class): java.util.Optional;
                    }
                }
            }
        }
    }
}
