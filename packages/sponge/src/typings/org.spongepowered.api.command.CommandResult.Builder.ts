declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace CommandResult {
                    // @ts-ignore
                     class Builder {
                        /**
                         * Sets if the command has been processed.
                         */
                        // @ts-ignore
                        public successCount(successCount: any): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Sets the amount of blocks affected by the command.
                         */
                        // @ts-ignore
                        public affectedBlocks(affectedBlocks: any): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Sets the amount of entities affected by the command.
                         */
                        // @ts-ignore
                        public affectedEntities(affectedEntities: any): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Sets the amount of items affected by the command.
                         */
                        // @ts-ignore
                        public affectedItems(affectedItems: any): org.spongepowered.api.command.CommandResult.Builder;
                        /**
                         * Sets the query result of the command, e.g. the time of the day,
                         * an amount of money or a player's amount of XP.
                         */
                        // @ts-ignore
                        public queryResult(queryResult: any): org.spongepowered.api.command.CommandResult.Builder;
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
