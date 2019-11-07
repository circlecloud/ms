// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                     class UnmodifiableWeightedTable extends org.spongepowered.api.util.weighted.WeightedTable {
                        /**
                         * Creates a new {@link UnmodifiableWeightedTable} with the provided
                         * {@link WeightedTable}.
                         */
                        // @ts-ignore
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable)
                        /**
                         * Creates a new {@link UnmodifiableWeightedTable} with the provided
                         * {@link WeightedTable} and {@code rolls}.
                         */
                        // @ts-ignore
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable, rolls: number)
                        /**
                         * Creates a new {@link UnmodifiableWeightedTable} with the provided
                         * {@link WeightedTable} and {@link VariableAmount rolls}.
                         */
                        // @ts-ignore
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable, rolls: org.spongepowered.api.util.weighted.VariableAmount)
                        // @ts-ignore
                        public add(entry: org.spongepowered.api.util.weighted.TableEntry): boolean;
                        // @ts-ignore
                        public add(object: java.lang.Object, weight: number): boolean;
                        // @ts-ignore
                        public addAll(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public setRolls(rolls: org.spongepowered.api.util.weighted.VariableAmount): void;
                        // @ts-ignore
                        public setRolls(rolls: number): void;
                        // @ts-ignore
                        public remove(entry: java.lang.Object): boolean;
                        // @ts-ignore
                        public removeObject(entry: java.lang.Object): boolean;
                        // @ts-ignore
                        public removeAll(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public removeIf(filter: java.util.function$.Predicate): boolean;
                        // @ts-ignore
                        public retainAll(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public clear(): void;
                        // @ts-ignore
                        public iterator(): java.util.Iterator;
                        // @ts-ignore
                        public contains(o: java.lang.Object): boolean;
                        // @ts-ignore
                        public getRolls(): org.spongepowered.api.util.weighted.VariableAmount;
                        // @ts-ignore
                        public get(rand: java.util.Random): java.util.List;
                        // @ts-ignore
                        public containsObject(obj: java.lang.Object): boolean;
                        // @ts-ignore
                        public containsAll(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public containsAllObjects(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public isEmpty(): boolean;
                        // @ts-ignore
                        public size(): number;
                        // @ts-ignore
                        public getEntries(): java.util.List;
                        // @ts-ignore
                        public toArray(): java.lang.Object[];
                        // @ts-ignore
                        public toArray(a: java.lang.Object): java.lang.Object[];
                        // @ts-ignore
                        public spliterator(): java.util.Spliterator;
                        // @ts-ignore
                        public stream(): java.util.stream.Stream;
                        // @ts-ignore
                        public parallelStream(): java.util.stream.Stream;
                        // @ts-ignore
                        public forEach(action: java.util.function$.Consumer): void;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public equals(o: java.lang.Object): boolean;
                    }
                }
            }
        }
    }
}
