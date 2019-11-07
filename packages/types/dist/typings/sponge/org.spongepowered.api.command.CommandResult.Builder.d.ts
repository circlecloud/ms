// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace CommandResult {
                    // @ts-ignore
                     class Builder extends java.lang.Object {
                        /**
                         * Sets if the command has been processed.
                         */
                        // @ts-ignore
                        public successCount(successCount: java.lang.Integer): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Sets the amount of blocks affected by the command.
                         */
                        // @ts-ignore
                        public affectedBlocks(affectedBlocks: java.lang.Integer): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Sets the amount of entities affected by the command.
                         */
                        // @ts-ignore
                        public affectedEntities(affectedEntities: java.lang.Integer): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Sets the amount of items affected by the command.
                         */
                        // @ts-ignore
                        public affectedItems(affectedItems: java.lang.Integer): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Sets the query result of the command, e.g. the time of the day,
                         * an amount of money or a player's amount of XP.
                         */
                        // @ts-ignore
                        public queryResult(queryResult: java.lang.Integer): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Builds the {@link CommandResult}.
                         */
                        // @ts-ignore
                        public build(): org.spongepowered.api.command.CommandResult;
                    }
                }
            }
        }
    }
}
