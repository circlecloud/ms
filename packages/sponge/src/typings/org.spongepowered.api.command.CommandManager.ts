declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                interface CommandManager extends org.spongepowered.api.command.dispatcher.Dispatcher {
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
                     register(plugin: any, callable: org.spongepowered.api.command.CommandCallable, alias: string): any;
                    /**
                     * Register a given command using the given list of aliases.
                     * <p>If there is a conflict with one of the aliases (i.e. that alias
                     * is already assigned to another command), then the alias will be skipped.
                     * It is possible for there to be no alias to be available out of
                     * the provided list of aliases, which would mean that the command would
                     * not be assigned to any aliases.</p>
                     * <p>The first non-conflicted alias becomes the "primary alias."</p>
                     */
                    // @ts-ignore
                     register(plugin: any, callable: org.spongepowered.api.command.CommandCallable, aliases: any[] /*java.util.List*/): any;
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
                     register(plugin: any, callable: org.spongepowered.api.command.CommandCallable, aliases: any[] /*java.util.List*/, callback: any): any;
                    /**
                     * Remove a command identified by the given mapping.
                     */
                    // @ts-ignore
                     removeMapping(mapping: org.spongepowered.api.command.CommandMapping): any;
                    /**
                     * Gets a set of plugin containers that have commands registered.
                     */
                    // @ts-ignore
                     getPluginContainers(): any[] /*java.util.Set*/;
                    /**
                     * Gets a set of commands owned by the given plugin instance.
                     */
                    // @ts-ignore
                     getOwnedBy(instance: any): any[] /*java.util.Set*/;
                    /**
                     * Gets the owner of a CommandMapping, if any is present.
                     */
                    // @ts-ignore
                     getOwner(mapping: org.spongepowered.api.command.CommandMapping): any;
                    /**
                     * Gets the number of registered aliases.
                     */
                    // @ts-ignore
                     size(): number;
                    /**
                     * Execute the command based on input arguments.
                     * <p>The implementing class must perform the necessary permission
                     * checks.</p>
                     */
                    // @ts-ignore
                     process(source: org.spongepowered.api.command.CommandSource, arguments: string): org.spongepowered.api.command.CommandResult;
                    /**
                     * Gets a list of suggestions based on input.
                     * <p>If a suggestion is chosen by the user, it will replace the last
                     * word.</p>
                     */
                    // @ts-ignore
                     getSuggestions(source: org.spongepowered.api.command.CommandSource, arguments: string, targetPosition: org.spongepowered.api.world.Location): any[] /*java.util.List*/;
                }
            }
        }
    }
}
