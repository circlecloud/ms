declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    // @ts-ignore
                    interface SubjectData {
                        // @ts-ignore
                         GLOBAL_CONTEXT: any[] /*java.util.Set*/;
                        /**
                         * Return all permissions associated with this data object.
                         */
                        // @ts-ignore
                         getAllPermissions(): Map<any, any> /*java.util.Map*/;
                        /**
                         * Returns the list of permissions set for the given context.
                         * <p>This list is immutable and is not a live view. If no permissions have
                         * been set, it returns an empty list.</p>
                         */
                        // @ts-ignore
                         getPermissions(contexts: any[] /*java.util.Set*/): Map<any, any> /*java.util.Map*/;
                        /**
                         * Sets a permission to a given value.
                         * <p>Setting value as {@link Tristate#UNDEFINED} unsets the permission.</p>
                         * <p>An empty set of contexts applies this permission to the global
                         * context.</p>
                         */
                        // @ts-ignore
                         setPermission(contexts: any[] /*java.util.Set*/, permission: string, value: org.spongepowered.api.util.Tristate): any;
                        /**
                         * Clear all permissions set in any context.
                         */
                        // @ts-ignore
                         clearPermissions(): any;
                        /**
                         * Clear all permissions set in a given context combination.
                         * <p>Passing an empty context set clears permissions in the global
                         * context.</p>
                         */
                        // @ts-ignore
                         clearPermissions(contexts: any[] /*java.util.Set*/): any;
                        /**
                         * Return all registered parent subjects for all contexts.
                         * <p>The returned map is immutable and not a live view. The results of this
                         * method do not traverse any sort of inheritance structure a permissions
                         * plugin may implement.</p>
                         */
                        // @ts-ignore
                         getAllParents(): Map<any, any> /*java.util.Map*/;
                        /**
                         * Return all registered parent subjects for a given context.
                         * <p>The returned map is immutable and not a live view. The results of this
                         * method do not traverse any sort of inheritance structure a permissions
                         * plugin may implement.</p>
                         */
                        // @ts-ignore
                         getParents(contexts: any[] /*java.util.Set*/): any[] /*java.util.List*/;
                        /**
                         * Adds a parent in a particular context combination.
                         * <p>Passing an empty context combination means the parent is added in the
                         * global context.</p>
                         */
                        // @ts-ignore
                         addParent(contexts: any[] /*java.util.Set*/, parent: org.spongepowered.api.service.permission.SubjectReference): any;
                        /**
                         * Removes a parent in a particular context combination.
                         * <p>Passing an empty context combination means the parent is removed in
                         * the global context.</p>
                         */
                        // @ts-ignore
                         removeParent(contexts: any[] /*java.util.Set*/, parent: org.spongepowered.api.service.permission.SubjectReference): any;
                        /**
                         * Remove all parents in any context combination.
                         */
                        // @ts-ignore
                         clearParents(): any;
                        /**
                         * Remove all parents in a given context combination.
                         * <p>Passing an empty context set clears parents in the global
                         * context.</p>
                         */
                        // @ts-ignore
                         clearParents(contexts: any[] /*java.util.Set*/): any;
                        /**
                         * Return all options for all context combinations currently registered.
                         */
                        // @ts-ignore
                         getAllOptions(): Map<any, any> /*java.util.Map*/;
                        /**
                         * Gets options for a specific context combination.
                         */
                        // @ts-ignore
                         getOptions(contexts: any[] /*java.util.Set*/): Map<any, any> /*java.util.Map*/;
                        /**
                         * Sets a specific option to a value.
                         * <p>Passing a null value will unset the option.</p>
                         */
                        // @ts-ignore
                         setOption(contexts: any[] /*java.util.Set*/, key: string, value: string): any;
                        /**
                         * Clear all options.
                         */
                        // @ts-ignore
                         clearOptions(): any;
                        /**
                         * Clear all options in the given context combination.
                         * <p>Passing an empty context set clears options in the global
                         * context.</p>
                         */
                        // @ts-ignore
                         clearOptions(contexts: any[] /*java.util.Set*/): any;
                    }
                }
            }
        }
    }
}
