declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    // @ts-ignore
                    interface EventContextKey extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a builder to be used for creating a new {@link EventContextKey}.
                         */
                        // @ts-ignore
                         builder(clazz: any): org.spongepowered.api.event.cause.EventContextKey.Builder;
                        /**
                         * Gets the allowed type for the value of this key.
                         */
                        // @ts-ignore
                         getAllowedType(): any;
                    }
                }
            }
        }
    }
}
