declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace dispatcher {
                    // @ts-ignore
                    interface Dispatcher extends org.spongepowered.api.command.CommandCallable {
                        /**
                         * Gets a list of commands. Each command, regardless of how many aliases it
                         * may have, will only appear once in the returned set.
                         * <p>The returned collection cannot be modified.</p>
                         */
                        // @ts-ignore
                         getCommands(): any[] /*java.util.Set*/;
                        /**
                         * Gets a list of primary aliases.
                         * <p>The returned collection cannot be modified.</p>
                         */
                        // @ts-ignore
                         getPrimaryAliases(): any[] /*java.util.Set*/;
                        /**
                         * Gets a list of all the command aliases, which includes the primary alias.
                         * <p>A command may have more than one alias assigned to it. The returned
                         * collection cannot be modified.</p>
                         */
                        // @ts-ignore
                         getAliases(): any[] /*java.util.Set*/;
                        /**
                         * Gets the {@link CommandMapping} associated with an alias. Returns null if
                         * no command is named by the given alias.
                         */
                        // @ts-ignore
                         get(alias: string): any;
                        /**
                         * Gets the {@link CommandMapping} associated with an alias in the context
                         * of a given {@link CommandSource}. Returns null if no command is named by
                         * the given alias.
                         */
                        // @ts-ignore
                         get(alias: string, source: org.spongepowered.api.command.CommandSource): any;
                        /**
                         * Gets all the {@link CommandMapping}s associated with an alias.
                         */
                        // @ts-ignore
                         getAll(alias: string): any[] /*java.util.Set*/;
                        /**
                         * Gets all commands currently registered with this dispatcher. The returned
                         * value is immutable.
                         */
                        // @ts-ignore
                         getAll(): any;
                        /**
                         * Returns whether the dispatcher contains a registered command for the
                         * given alias.
                         */
                        // @ts-ignore
                         containsAlias(alias: string): boolean;
                        /**
                         * Returns whether the dispatcher contains the given mapping.
                         */
                        // @ts-ignore
                         containsMapping(mapping: org.spongepowered.api.command.CommandMapping): boolean;
                    }
                }
            }
        }
    }
}
