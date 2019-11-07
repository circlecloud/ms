declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                interface CommandMapping {
                    /**
                     * Gets the primary alias.
                     */
                    // @ts-ignore
                     getPrimaryAlias(): string;
                    /**
                     * Gets an immutable list of all aliases.
                     * <p>The returned list must contain at least one entry, of which one must
                     * be the one returned by {@link #getPrimaryAlias()}.</p>
                     * <p>There may be several versions of the same alias with different
                     * casing, although generally implementations should ignore the casing
                     * of aliases.</p>
                     */
                    // @ts-ignore
                     getAllAliases(): java.util.Set;
                    /**
                     * Gets the callable.
                     */
                    // @ts-ignore
                     getCallable(): org.spongepowered.api.command.CommandCallable;
                }
            }
        }
    }
}
