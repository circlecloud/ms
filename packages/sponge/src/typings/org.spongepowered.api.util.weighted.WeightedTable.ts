declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                     class WeightedTable extends org.spongepowered.api.util.weighted.RandomObjectTable {
                        /**
                         * Creates a new {@link WeightedTable} with a default roll
                         * count of {@code 1}.
                         */
                        constructor()
                        /**
                         * Creates a new {@link WeightedTable} with the provided
                         * number of {@code rolls}.
                         */
                        constructor(rolls: number)
                        /**
                         * Creates a new {@link WeightedTable} with the provided
                         * {@link VariableAmount} for the amount of rolls and variance.
                         */
                        constructor(rolls: org.spongepowered.api.util.weighted.VariableAmount)
                        // @ts-ignore
                        public add(entry: org.spongepowered.api.util.weighted.TableEntry): boolean;
                        // @ts-ignore
                        public add(object: any, weight: number): boolean;
                        // @ts-ignore
                        public addAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public remove(entry: any): boolean;
                        // @ts-ignore
                        public removeObject(entry: any): boolean;
                        // @ts-ignore
                        public removeAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public retainAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public clear(): void;
                        /**
                         * Recalculates the total weight of all entries in this table.
                         */
                        // @ts-ignore
                        protected recalculateWeight(): void;
                        // @ts-ignore
                        public get(rand: any): any[] /*java.util.List*/;
                        // @ts-ignore
                        public iterator(): any;
                        // @ts-ignore
                        public equals(o: any): boolean;
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
