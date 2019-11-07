declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                // @ts-ignore
                 class CommandResult extends java.lang.Object {
                    /**
                     * Returns a {@link Builder}.
                     */
                    // @ts-ignore
                    public static builder(): org.spongepowered.api.command.CommandResult.Builder;
                    /**
                     * Returns a new {@link CommandResult} indicating that a command was
                     * processed.
                     */
                    // @ts-ignore
                    public static empty(): org.spongepowered.api.command.CommandResult;
                    /**
                     * Returns a result indicating the command was processed with a single
                     * success.
                     */
                    // @ts-ignore
                    public static success(): org.spongepowered.api.command.CommandResult;
                    /**
                     * Returns a result indicating the command was processed with a single
                     * success.
                     */
                    // @ts-ignore
                    public static successCount(count: number): org.spongepowered.api.command.CommandResult;
                    /**
                     * Returns a result indicating the command was processed with an
                     * amount of affected blocks.
                     */
                    // @ts-ignore
                    public static affectedBlocks(count: number): org.spongepowered.api.command.CommandResult;
                    /**
                     * Returns a result indicating the command was processed with an
                     * amount of affected entities.
                     */
                    // @ts-ignore
                    public static affectedEntities(count: number): org.spongepowered.api.command.CommandResult;
                    /**
                     * Returns a result indicating the command was processed with an
                     * amount of affected items.
                     */
                    // @ts-ignore
                    public static affectedItems(count: number): org.spongepowered.api.command.CommandResult;
                    /**
                     * Returns a result indicating the command was processed with an
                     * amount of queries.
                     */
                    // @ts-ignore
                    public static queryResult(count: number): org.spongepowered.api.command.CommandResult;
                    /**
                     * Gets the success count of the command.
                     */
                    // @ts-ignore
                    public getSuccessCount(): java.util.Optional;
                    /**
                     * Gets the number of blocks affected by the command.
                     */
                    // @ts-ignore
                    public getAffectedBlocks(): java.util.Optional;
                    /**
                     * Gets the number of entities affected by the command.
                     */
                    // @ts-ignore
                    public getAffectedEntities(): java.util.Optional;
                    /**
                     * Gets the number of items affected by the command.
                     */
                    // @ts-ignore
                    public getAffectedItems(): java.util.Optional;
                    /**
                     * Gets the query result of the command, e.g. the time of the day,
                     * an amount of money or a player's amount of XP.
                     */
                    // @ts-ignore
                    public getQueryResult(): java.util.Optional;
                }
            }
        }
    }
}
