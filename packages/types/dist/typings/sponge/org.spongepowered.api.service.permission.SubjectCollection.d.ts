// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                    interface SubjectCollection {
                        /**
                         * Return the identifier for this collection.
                         */
                        // @ts-ignore
                         getIdentifier(): string;
                        /**
                         * Returns a predicate which determines whether or not a given identifier is
                         * valid for a subject held by this collection.
                         * <p>It is expected that the {@link PermissionService#SUBJECTS_USER}
                         * collection should accept identifiers in UUID RFC4122 string format. (In
                         * the format produced by {@link UUID#toString()}</p>
                         */
                        // @ts-ignore
                         getIdentifierValidityPredicate(): java.util.function$.Predicate;
                        /**
                         * Loads and returns a subject with the given identifier.
                         * <p>The returned future will complete exceptionally if the subject with
                         * the given identifier cannot be loaded.</p>
                         * <p>A {@link IllegalArgumentException} will be thrown directly by this
                         * method if the identifier does not pass the identifier validity
                         * predicate.</p>
                         */
                        // @ts-ignore
                         loadSubject(identifier: string): java.util.concurrent.CompletableFuture;
                        /**
                         * Returns a subject with the given identifier, if the subject is already
                         * loaded within this collection.
                         * <p>It is important to note that a subject with the given identifier
                         * may still exist, even if this method returns an empty
                         * optional. Checking for the presence of a subject should be
                         * done using {@link #hasSubject(String)}.</p>
                         * <p>If the subject identifier does not pass the validity predicate, this
                         * method will return an empty optional, and not throw an exception.</p>
                         */
                        // @ts-ignore
                         getSubject(identifier: string): java.util.Optional;
                        /**
                         * Returns whether a subject with the given identifier currently exists.
                         * <p>The return value of this function does not influence whether or
                         * not the results from any subject lookups should be obtained.
                         */
                        // @ts-ignore
                         hasSubject(identifier: string): java.util.concurrent.CompletableFuture;
                        /**
                         * Gets a map of subjects from the provided set of identifiers.
                         * <p>If any of the identifiers do not pass the collections
                         * {@link #getIdentifierValidityPredicate()}, a subject will not be returned
                         * for that identifier.</p>
                         */
                        // @ts-ignore
                         loadSubjects(identifiers: java.util.Set): java.util.concurrent.CompletableFuture;
                        /**
                         * Returns an immutable copy of all subjects currently loaded in this
                         * collection.
                         */
                        // @ts-ignore
                         getLoadedSubjects(): java.util.Collection;
                        /**
                         * Gets a set of Subject identifiers being stored in the collection. This
                         * method must return a complete list, including identifiers of subjects not
                         * currently loaded.
                         * <p>The results of this method should not be passed directly to
                         * {@link #loadSubjects(Set)}. Instead, each individual subject should be
                         * loaded, processed, and then allowed to be unloaded using
                         * {@link #suggestUnload(String)}.</p>
                         * <p>If you simply need to process each subject in the collection, you can
                         * use {@link #applyToAll(Consumer)} and gather data.</p>
                         */
                        // @ts-ignore
                         getAllIdentifiers(): java.util.concurrent.CompletableFuture;
                        /**
                         * Creates a new subject reference to represent the expressed subject.
                         * <p>Note that instances of SubjectReference must be capable of resolving
                         * the identifier to a Subject without being passed a reference to the
                         * service.</p>
                         * <p>A {@link IllegalArgumentException} will be thrown directly by this
                         * method if the identifier does not pass the identifier validity
                         * predicate.</p>
                         */
                        // @ts-ignore
                         newSubjectReference(subjectIdentifier: string): org.spongepowered.api.service.permission.SubjectReference;
                        /**
                         * Performs an action on each Subject in the collection.
                         * <p>Subjects are loaded, supplied to the consumer, and then allowed to be
                         * uncached by the implementation.</p>
                         * <p>This should be used to apply bulk changes or gather data about all
                         * Subjects in the collection. The provided consumer will be supplied
                         * asynchronously. Acting upon a large collection may be particularly
                         * resource intensive.</p>
                         * <p>Implementations may choose to load and process subjects in
                         * parallel.</p>
                         */
                        // @ts-ignore
                         applyToAll(action: java.util.function$.Consumer): java.util.concurrent.CompletableFuture;
                        /**
                         * Performs an action on each Subject in the provided set.
                         * <p>Subjects are loaded, supplied to the consumer, and then allowed to be
                         * uncached by the implementation.</p>
                         * <p>This should be used to apply bulk changes or gather data about all
                         * Subjects in the collection. The provided consumer will be supplied
                         * asynchronously. Acting upon a large collection may be particularly
                         * resource intensive.</p>
                         * <p>Implementations may choose to load and process subjects in
                         * parallel.</p>
                         */
                        // @ts-ignore
                         applyToAll(action: java.util.function$.Consumer, identifiers: java.util.Set): java.util.concurrent.CompletableFuture;
                        /**
                         * Return the identifiers of all known subjects with the given permission
                         * set.
                         * <p>This method <p>DOES NOT</p> consider inheritance, and will only query
                         * the data set to the subjects {@link Subject#getSubjectData()}. Transient
                         * data is not considered.</p>
                         * <p>As no context is passed, it is up to the implementation to decide
                         * which contexts to use. When available,
                         * {@link Subject#getActiveContexts()} is used for the lookup. Otherwise, it
                         * is likely that {@link SubjectData#GLOBAL_CONTEXT} will be
                         * used.</p>
                         */
                        // @ts-ignore
                         getAllWithPermission(permission: string): java.util.concurrent.CompletableFuture;
                        /**
                         * Return the identifiers of all known subjects with the given permission
                         * set.
                         * <p>This method <p>DOES NOT</p> consider inheritance, and will only query
                         * the data set to the subjects {@link Subject#getSubjectData()}. Transient
                         * data is not considered.</p>
                         */
                        // @ts-ignore
                         getAllWithPermission(contexts: java.util.Set, permission: string): java.util.concurrent.CompletableFuture;
                        /**
                         * Return all loaded subjects with the given permission set.
                         * <p>This method <p>DOES NOT</p> consider inheritance, and will only query
                         * the data set to the subjects {@link Subject#getSubjectData()}. Transient
                         * data is not considered.</p>
                         * <p>As no context is passed, it is up to the implementation to decide
                         * which contexts to use. When available,
                         * {@link Subject#getActiveContexts()} is used for the lookup. Otherwise, it
                         * is likely that {@link SubjectData#GLOBAL_CONTEXT} will be
                         * used.</p>
                         */
                        // @ts-ignore
                         getLoadedWithPermission(permission: string): java.util.Map;
                        /**
                         * Return all loaded subjects with the given permission set.
                         * <p>This method <p>DOES NOT</p> consider inheritance, and will only query
                         * the data set to the subjects {@link Subject#getSubjectData()}. Transient
                         * data is not considered.</p>
                         */
                        // @ts-ignore
                         getLoadedWithPermission(contexts: java.util.Set, permission: string): java.util.Map;
                        /**
                         * Gets the subject holding data that is applied by default to all
                         * subjects in this collection.
                         * <p>This subject is at the root of all inheritance trees for subjects in
                         * this collection, but at a higher priority chan defaults expressed to
                         * {@link PermissionService#getDefaults()}.</p>
                         * <p>Note: This data may be persisted, so plugins that add
                         * permissions to this subject must take care to not override
                         * permissions already set or modified.</p>
                         * <p>It is also recommended to use
                         * {@link Subject#getTransientSubjectData()} where possible to avoid
                         * persisting unnecessary data.</p>
                         * <p>Assigning default permissions should be used sparingly, and by
                         * convention, only in situations where "default" game behaviour is restored
                         * by granting a certain permission.</p>
                         */
                        // @ts-ignore
                         getDefaults(): org.spongepowered.api.service.permission.Subject;
                        /**
                         * Indicate that a certain subject may be unloaded by the implementation.
                         * <p>This is only a hint to the implementation, and does not guarantee that
                         * the subject will be unloaded.</p>
                         */
                        // @ts-ignore
                         suggestUnload(identifier: string): void;
                    }
                }
            }
        }
    }
}
