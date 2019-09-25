declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace dispatcher {
                    // @ts-ignore
                     class SimpleDispatcher implements org.spongepowered.api.command.dispatcher.Dispatcher {
                        /**
                         * Creates a basic new dispatcher.
                         */
                        constructor()
                        /**
                         * Creates a new dispatcher with a specific disambiguator.
                         */
                        constructor(disambiguatorFunc: org.spongepowered.api.command.dispatcher.Disambiguator)
                        // @ts-ignore
                        public static FIRST_DISAMBIGUATOR: org.spongepowered.api.command.dispatcher.Disambiguator;
                        /**
                         * Register a given command using the given list of aliases.
                         * <p>If there is a conflict with one of the aliases (i.e. that alias
                         * is already assigned to another command), then the alias will be skipped.
                         * It is possible for there to be no alias to be available out of
                         * the provided list of aliases, which would mean that the command would not
                         * be assigned to any aliases.</p>
                         * <p>The first non-conflicted alias becomes the "primary alias."</p>
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, alias: string): any;
                        /**
                         * Register a given command using the given list of aliases.
                         * <p>If there is a conflict with one of the aliases (i.e. that alias
                         * is already assigned to another command), then the alias will be skipped.
                         * It is possible for there to be no alias to be available out of
                         * the provided list of aliases, which would mean that the command would not
                         * be assigned to any aliases.</p>
                         * <p>The first non-conflicted alias becomes the "primary alias."</p>
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, aliases: any[] /*java.util.List*/): any;
                        /**
                         * Register a given command using a given list of aliases.
                         * <p>The provided callback function will be called with a list of aliases
                         * that are not taken (from the list of aliases that were requested) and
                         * it should return a list of aliases to actually register. Aliases may be
                         * removed, and if no aliases remain, then the command will not be
                         * registered. It may be possible that no aliases are available, and thus
                         * the callback would receive an empty list. New aliases should not be added
                         * to the list in the callback as this may cause
                         * {@link IllegalArgumentException} to be thrown.</p>
                         * <p>The first non-conflicted alias becomes the "primary alias."</p>
                         */
                        // @ts-ignore
                        public register(callable: org.spongepowered.api.command.CommandCallable, aliases: any[] /*java.util.List*/, callback: any): any;
                        /**
                         * Remove a mapping identified by the given alias.
                         */
                        // @ts-ignore
                        public remove(alias: string): any[] /*java.util.Collection*/;
                        /**
                         * Remove all mappings identified by the given aliases.
                         */
                        // @ts-ignore
                        public removeAll(aliases: any[] /*java.util.Collection*/): boolean;
                        /**
                         * Remove a command identified by the given mapping.
                         */
                        // @ts-ignore
                        public removeMapping(mapping: org.spongepowered.api.command.CommandMapping): any;
                        /**
                         * Remove all mappings contained with the given collection.
                         */
                        // @ts-ignore
                        public removeMappings(mappings: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public getCommands(): any[] /*java.util.Set*/;
                        // @ts-ignore
                        public getPrimaryAliases(): any[] /*java.util.Set*/;
                        // @ts-ignore
                        public getAliases(): any[] /*java.util.Set*/;
                        // @ts-ignore
                        public get(alias: string): any;
                        // @ts-ignore
                        public get(alias: string, source: org.spongepowered.api.command.CommandSource): any;
                        // @ts-ignore
                        public containsAlias(alias: string): boolean;
                        // @ts-ignore
                        public containsMapping(mapping: org.spongepowered.api.command.CommandMapping): boolean;
                        // @ts-ignore
                        public process(source: org.spongepowered.api.command.CommandSource, commandLine: string): org.spongepowered.api.command.CommandResult;
                        // @ts-ignore
                        public getSuggestions(src: org.spongepowered.api.command.CommandSource, arguments: string, targetPosition: org.spongepowered.api.world.Location): any[] /*java.util.List*/;
                        // @ts-ignore
                        public testPermission(source: org.spongepowered.api.command.CommandSource): boolean;
                        // @ts-ignore
                        public getShortDescription(source: org.spongepowered.api.command.CommandSource): any;
                        // @ts-ignore
                        public getHelp(source: org.spongepowered.api.command.CommandSource): any;
                        /**
                         * Gets the number of registered aliases.
                         */
                        // @ts-ignore
                        public size(): number;
                        // @ts-ignore
                        public getUsage(source: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text;
                        // @ts-ignore
                        public getAll(alias: string): any[] /*java.util.Set*/;
                        // @ts-ignore
                        public getAll(): any;
                    }
                }
            }
        }
    }
}
