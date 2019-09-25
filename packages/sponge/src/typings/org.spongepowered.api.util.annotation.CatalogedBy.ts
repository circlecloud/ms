declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace annotation {
                    // @ts-ignore
                    interface CatalogedBy {
                        /**
                         * Gets the class that is the catalog for this {@link CatalogedBy} type.
                         * Since the type class annotated with {@link CatalogedBy} knows what the
                         * catalog class is, we can safely rely on the value to get all known
                         * instances of the {@link CatalogedBy}.
                         * <p>This is similar to knowing at runtime that all available
                         * "EntityType"(s) are cataloged in the "EntityTypes" class.</p>
                         */
                        // @ts-ignore
                         value(): any;
                    }
                }
            }
        }
    }
}
