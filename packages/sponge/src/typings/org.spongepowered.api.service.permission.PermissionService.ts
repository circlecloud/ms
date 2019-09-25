declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                    interface PermissionService extends org.spongepowered.api.service.context.ContextualService {
                        // @ts-ignore
                         SUBJECTS_USER: string;
                        // @ts-ignore
                         SUBJECTS_GROUP: string;
                        // @ts-ignore
                         SUBJECTS_SYSTEM: string;
                        // @ts-ignore
                         SUBJECTS_DEFAULT: string;
                        // @ts-ignore
                         SUBJECTS_COMMAND_BLOCK: string;
                        // @ts-ignore
                         SUBJECTS_ROLE_TEMPLATE: string;
                        /**
                         * Returns the subject collection which holds users.
                         * <p>User identifiers are expected to be UUIDs in RFC4122 string format
                         * (This *does* have dashes).</p>
                         * <p>This method should return the same SubjectCollection as the result of
                         * invoking {@link #loadCollection(String)} with {@link #SUBJECTS_USER}.</p>
                         */
                        // @ts-ignore
                         getUserSubjects(): org.spongepowered.api.service.permission.SubjectCollection;
                        /**
                         * Returns the subject collection which holds groups.
                         * <p>This method should return the same SubjectCollection as the result of
                         * invoking {@link #loadCollection(String)} with {@link #SUBJECTS_GROUP}.</p>
                         */
                        // @ts-ignore
                         getGroupSubjects(): org.spongepowered.api.service.permission.SubjectCollection;
                        /**
                         * Gets the subject holding data that is applied by default to all
                         * subjects.
                         * <p>This subject is at the root of all inheritance trees, below
                         * even SubjectCollection defaults, meaning it has the lowest
                         * priority when all other weighting is equal.</p>
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
                         * Returns a predicate which determines whether or not a given identifier
                         * is valid for a subject collection held by this service.
                         * <p>It is expected that as a minimum, the standard identifiers expressed
                         * as static parameters in this class will pass the predicate.</p>
                         */
                        // @ts-ignore
                         getIdentifierValidityPredicate(): any;
                        /**
                         * Loads and returns a subject collection with the given identifier.
                         * <p>The returned future will complete exceptionally if the subject
                         * collection with the given identifier cannot be loaded.</p>
                         * <p>A {@link IllegalArgumentException} will be thrown directly by this
                         * method if the identifier does not pass the identifier validity
                         * predicate.</p>
                         */
                        // @ts-ignore
                         loadCollection(identifier: string): any;
                        /**
                         * Returns a subject collection with the given identifier, if the
                         * collection is already loaded within this service.
                         * <p>It is important to note that a subject collection with the given
                         * identifier may still exist, even if this method returns an empty
                         * optional. Checking for the presence of a subject collection should
                         * be done using {@link #hasCollection(String)}.</p>
                         * <p>If the collection identifier does not pass the validity predicate,
                         * this method will return an empty optional, and not throw an
                         * exception.</p>
                         */
                        // @ts-ignore
                         getCollection(identifier: string): any;
                        /**
                         * Returns whether a subject collection with the given identifier currently
                         * exists.
                         */
                        // @ts-ignore
                         hasCollection(identifier: string): any;
                        /**
                         * Returns an immutable copy of all currently loaded subject collections
                         * held by this permission service.
                         */
                        // @ts-ignore
                         getLoadedCollections(): Map<any, any> /*java.util.Map*/;
                        /**
                         * Returns a set of the subject collection identifiers known to this
                         * service.
                         */
                        // @ts-ignore
                         getAllIdentifiers(): any;
                        /**
                         * Creates a new subject reference to represent the expressed subject.
                         * <p>Note that instances of SubjectReference must be capable of resolving
                         * the identifier to a Subject without being passed a reference to the
                         * service.</p>
                         * <p>A {@link IllegalArgumentException} will be thrown directly by this
                         * method if either identifiers do not pass the identifier validity
                         * predicates.</p>
                         */
                        // @ts-ignore
                         newSubjectReference(collectionIdentifier: string, subjectIdentifier: string): org.spongepowered.api.service.permission.SubjectReference;
                        /**
                         * Creates a new description builder for the given plugin's permission.
                         */
                        // @ts-ignore
                         newDescriptionBuilder(plugin: any): org.spongepowered.api.service.permission.PermissionDescription.Builder;
                        /**
                         * Gets the registered or generated {@link PermissionDescription} for the
                         * given permission if available.
                         * <p>If the given permission is not defined itself this might also return
                         * the associated permission template.</p>
                         */
                        // @ts-ignore
                         getDescription(permission: string): any;
                        /**
                         * Gets a immutable collection containing all registered or generated
                         * {@link PermissionDescription}s.
                         * <p>Implementations may generate descriptions automatically for
                         * permissions in use on the server, based upon permissions stored in
                         * subject data, or based upon checks being performed.</p>
                         */
                        // @ts-ignore
                         getDescriptions(): any[] /*java.util.Collection*/;
                    }
                }
            }
        }
    }
}
