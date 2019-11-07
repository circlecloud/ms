declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                    interface SubjectReference {
                        /**
                         * Gets the identifier of the collection containing the subject
                         * being referenced.
                         */
                        // @ts-ignore
                         getCollectionIdentifier(): string;
                        /**
                         * Gets the identifier of the subject.
                         */
                        // @ts-ignore
                         getSubjectIdentifier(): string;
                        /**
                         * Resolves and returns the Subject being referenced.
                         * <p>The returned future will complete exceptionally if the subject
                         * collection with the given identifier cannot be loaded.</p>
                         */
                        // @ts-ignore
                         resolve(): java.util.concurrent.CompletableFuture;
                    }
                }
            }
        }
    }
}
