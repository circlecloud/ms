declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                    interface Subject extends org.spongepowered.api.service.context.Contextual {
                        /**
                         * Returns a possible {@link CommandSource} for the subject, if it relates
                         * to one.
                         * <p>If this subject represents an actual user currently connected, this
                         * method returns this user. This user may in fact be the same as this
                         * subject. Some subjects may never directly map to a command source, while
                         * others may temporarily not have an accessible command source.</p>
                         */
                        // @ts-ignore
                         getCommandSource(): any;
                        /**
                         * Returns the subject collection this subject is a member of.
                         */
                        // @ts-ignore
                         getContainingCollection(): org.spongepowered.api.service.permission.SubjectCollection;
                        /**
                         * Gets a SubjectReference representing this subject.
                         */
                        // @ts-ignore
                         asSubjectReference(): org.spongepowered.api.service.permission.SubjectReference;
                        /**
                         * Returns if this Subject has persistent, non-transient data.
                         * <p>If true, this subject should have two distinct stores of SubjectData,
                         * and the non-transient form should be saved between sessions.</p>
                         * <p>If false, this subject will have only one store of SubjectData, which
                         * will not be persisted between sessions.</p>
                         */
                        // @ts-ignore
                         isSubjectDataPersisted(): boolean;
                        /**
                         * Returns the primary data backing for this Subject.
                         * <p>If this Subject is not persisted, this data will not be saved
                         * between sessions.</p>
                         * <p>For subjects which are not persisted, the same store will be returned
                         * by {@link #getTransientSubjectData()}.</p>
                         */
                        // @ts-ignore
                         getSubjectData(): org.spongepowered.api.service.permission.SubjectData;
                        /**
                         * Returns the transient data backing for this Subject.
                         * <p>Transient data is guaranteed to only last for the duration of the
                         * subject's session, and is not persisted.</p>
                         * <p>For subjects which are not persisted, the same store will be returned
                         * by {@link #getSubjectData()}.</p>
                         */
                        // @ts-ignore
                         getTransientSubjectData(): org.spongepowered.api.service.permission.SubjectData;
                        /**
                         * Test whether the subject is permitted to perform an action corresponding
                         * to the given permission string.
                         * <p>This must return the same boolean equivalent as
                         * {@link #getPermissionValue(Set, String)}.</p>
                         */
                        // @ts-ignore
                         hasPermission(contexts: any[] /*java.util.Set*/, permission: string): boolean;
                        /**
                         * Test whether the subject is permitted to perform an action given as the
                         * given permission string.
                         * <p>This must return the same value as {@link #hasPermission(Set, String)}
                         * using {@link #getActiveContexts()}.</p>
                         */
                        // @ts-ignore
                         hasPermission(permission: string): boolean;
                        /**
                         * Returns the calculated value set for a given permission.
                         * <p>It is expected that this method will also account for values
                         * inherited from parent subjects, as well as permission nodes inherited
                         * implicitly from a more generic level.</p>
                         * <p>Additionally, the defaults defined the {@link SubjectCollection}
                         * that holds this subject, as well as defaults defined in
                         * {@link PermissionService#getDefaults()} should be considered for this
                         * lookup.</p>
                         * <p>This method is likely to be called frequently, so it is desirable
                         * that implementations cache the results to method calls.</p>
                         */
                        // @ts-ignore
                         getPermissionValue(contexts: any[] /*java.util.Set*/, permission: string): org.spongepowered.api.util.Tristate;
                        /**
                         * Check if this subject is a child of the given parent in the subject's
                         * current context, traversing inheritance.
                         * <p>This must return the same value as
                         * {@link #isChildOf(Set, SubjectReference)} using
                         * {@link #getActiveContexts()}.</p>
                         */
                        // @ts-ignore
                         isChildOf(parent: org.spongepowered.api.service.permission.SubjectReference): boolean;
                        /**
                         * Check if this subject is a child of the given parent in the given context
                         * combination, traversing inheritance.
                         * <p>It is expected that this method will also account for data from
                         * distant parents, inherited from direct parent subjects.
                         * <p>Additionally, the defaults defined the {@link SubjectCollection}
                         * that holds this subject, as well as defaults defined in
                         * {@link PermissionService#getDefaults()} should be considered for this
                         * lookup.</p>
                         */
                        // @ts-ignore
                         isChildOf(contexts: any[] /*java.util.Set*/, parent: org.spongepowered.api.service.permission.SubjectReference): boolean;
                        /**
                         * Return all parents that this group has in its current context
                         * combination.
                         * <p>This must include inherited values if the permissions
                         * service supports inheritance.</p>
                         * <p>It must also must return the same value as {@link #getParents(Set)}
                         * using {@link #getActiveContexts()}.</p>
                         */
                        // @ts-ignore
                         getParents(): any[] /*java.util.List*/;
                        /**
                         * Return all parents that this group has in the given context combination.
                         * <p>This must include inherited values if the permissions
                         * service supports inheritance.</p>
                         */
                        // @ts-ignore
                         getParents(contexts: any[] /*java.util.Set*/): any[] /*java.util.List*/;
                        /**
                         * Gets the value of a given option in the given context.
                         * <p>It is expected that this method will account for options
                         * inherited from parent subjects.
                         * <p>Additionally, the default options defined by the
                         * {@link SubjectCollection} that holds this subject, as well as defaults
                         * defined in {@link PermissionService#getDefaults()} should be considered
                         * for this lookup.
                         */
                        // @ts-ignore
                         getOption(contexts: any[] /*java.util.Set*/, key: string): any;
                        /**
                         * Gets the value of a given option in the subject's current context.
                         * <p>This must return the same value as {@link #getOption(Set, String)}
                         * using {@link #getActiveContexts()}.</p>
                         */
                        // @ts-ignore
                         getOption(key: string): any;
                    }
                }
            }
        }
    }
}
