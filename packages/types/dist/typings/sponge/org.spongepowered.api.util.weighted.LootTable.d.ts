// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                     class LootTable extends java.lang.Object {
                        /**
                         * Creates a new {@link LootTable}.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Adds a table to the pool.
                         */
                        // @ts-ignore
                        public addTable(table: org.spongepowered.api.util.weighted.RandomObjectTable): void;
                        /**
                         * Adds all tables from the given {@link LootTable} to this LootTable's pool.
                         */
                        // @ts-ignore
                        public addAll(other: org.spongepowered.api.util.weighted.LootTable): void;
                        /**
                         * Removes a table from the pool.
                         */
                        // @ts-ignore
                        public removeTable(table: org.spongepowered.api.util.weighted.RandomObjectTable): boolean;
                        /**
                         * Gets all tables in the pool.
                         */
                        // @ts-ignore
                        public getTables(): java.util.List;
                        /**
                         * Clears all tables from the pool.
                         */
                        // @ts-ignore
                        public clearPool(): void;
                        /**
                         * Gets a List of objects as retrieved from all pools.
                         */
                        // @ts-ignore
                        public get(rand: java.util.Random): java.util.List;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
