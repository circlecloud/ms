declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                    interface SubjectData {
                        // @ts-ignore
                         GLOBAL_CONTEXT: java.util.Set;
                        /**
                         * Return all permissions associated with this data object.
                         */
                        // @ts-ignore
                         getAllPermissions(): java.util.Map;
                        /**
                         * Returns the list of permissions set for the given context.
                         * <p>This list is immutable and is not a live view. If no permissions have
                         * been set, it returns an empty list.</p>
                         */
                        // @ts-ignore
                         getPermissions(contexts: java.util.Set): java.util.Map;
                        /**
                         * Sets a permission to a given value.
                         * <p>Setting value as {@link Tristate#UNDEFINED} unsets the permission.</p>
                         * <p>An empty set of contexts applies this permission to the global
                         * context.</p>
                         */
                        // @ts-ignore
                         setPermission(contexts: java.util.Set, permission: string, value: org.spongepowered.api.util.Tristate): java.util.concurrent.CompletableFuture;
                        /**
                         * Clear all permissions set in any context.
                         */
                        // @ts-ignore
                         clearPermissions(): java.util.concurrent.CompletableFuture;
                        /**
                         * Clear all permissions set in a given context combination.
                         * <p>Passing an empty context set clears permissions in the global
                         * context.</p>
                         */
                        // @ts-ignore
                         clearPermissions(contexts: java.util.Set): java.util.concurrent.CompletableFuture;
                        /**
                         * Return all registered parent subjects for all contexts.
                         * <p>The returned map is immutable and not a live view. The results of this
                         * method do not traverse any sort of inheritance structure a permissions
                         * plugin may implement.</p>
                         */
                        // @ts-ignore
                         getAllParents(): java.util.Map;
                        /**
                         * Return all registered parent subjects for a given context.
                         * <p>The returned map is immutable and not a live view. The results of this
                         * method do not traverse any sort of inheritance structure a permissions
                         * plugin may implement.</p>
                         */
                        // @ts-ignore
                         getParents(contexts: java.util.Set): java.util.List;
                        /**
                         * Adds a parent in a particular context combination.
                         * <p>Passing an empty context combination means the parent is added in the
                         * global context.</p>
                         */
                        // @ts-ignore
                         addParent(contexts: java.util.Set, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture;
                        /**
                         * Removes a parent in a particular context combination.
                         * <p>Passing an empty context combination means the parent is removed in
                         * the global context.</p>
                         */
                        // @ts-ignore
                         removeParent(contexts: java.util.Set, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture;
                        /**
                         * Remove all parents in any context combination.
                         */
                        // @ts-ignore
                         clearParents(): java.util.concurrent.CompletableFuture;
                        /**
                         * Remove all parents in a given context combination.
                         * <p>Passing an empty context set clears parents in the global
                         * context.</p>
                         */
                        // @ts-ignore
                         clearParents(contexts: java.util.Set): java.util.concurrent.CompletableFuture;
                        /**
                         * Return all options for all context combinations currently registered.
                         */
                        // @ts-ignore
                         getAllOptions(): java.util.Map;
                        /**
                         * Gets options for a specific context combination.
                         */
                        // @ts-ignore
                         getOptions(contexts: java.util.Set): java.util.Map;
                        /**
                         * Sets a specific option to a value.
                         * <p>Passing a null value will unset the option.</p>
                         */
                        // @ts-ignore
                         setOption(contexts: java.util.Set, key: string, value: string): java.util.concurrent.CompletableFuture;
                        /**
                         * Clear all options.
                         */
                        // @ts-ignore
                         clearOptions(): java.util.concurrent.CompletableFuture;
                        /**
                         * Clear all options in the given context combination.
                         * <p>Passing an empty context set clears options in the global
                         * context.</p>
                         */
                        // @ts-ignore
                         clearOptions(contexts: java.util.Set): java.util.concurrent.CompletableFuture;
                    }
                }
            }
        }
    }
}
