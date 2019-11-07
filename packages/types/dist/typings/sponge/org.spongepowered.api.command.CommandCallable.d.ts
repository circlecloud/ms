// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                interface CommandCallable {
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
                     getSuggestions(source: org.spongepowered.api.command.CommandSource, arguments: string, targetPosition: org.spongepowered.api.world.Location): java.util.List;
                    /**
                     * Test whether this command can probably be executed by the given source.
                     * <p>If implementations are unsure if the command can be executed by
                     * the source, {@code true} should be returned. Return values of this method
                     * may be used to determine whether this command is listed in command
                     * listings.</p>
                     */
                    // @ts-ignore
                     testPermission(source: org.spongepowered.api.command.CommandSource): boolean;
                    /**
                     * Gets a short one-line description of this command.
                     * <p>The help system may display the description in the command list.</p>
                     */
                    // @ts-ignore
                     getShortDescription(source: org.spongepowered.api.command.CommandSource): java.util.Optional;
                    /**
                     * Gets a longer formatted help message about this command.
                     * <p>It is recommended to use the default text color and style. Sections
                     * with text actions (e.g. hyperlinks) should be underlined.</p>
                     * <p>Multi-line messages can be created by separating the lines with
                     * {@code \n}.</p>
                     * <p>The help system may display this message when a source requests
                     * detailed information about a command.</p>
                     */
                    // @ts-ignore
                     getHelp(source: org.spongepowered.api.command.CommandSource): java.util.Optional;
                    /**
                     * Gets the usage string of this command.
                     * <p>A usage string may look like
                     * {@code [-w &lt;world&gt;] &lt;var1&gt; &lt;var2&gt;}.</p>
                     * <p>The string must not contain the command alias.</p>
                     */
                    // @ts-ignore
                     getUsage(source: org.spongepowered.api.command.CommandSource): org.spongepowered.api.text.Text;
                }
            }
        }
    }
}
