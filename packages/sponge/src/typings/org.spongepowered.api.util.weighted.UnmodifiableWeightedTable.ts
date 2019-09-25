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
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable)
                        /**
                         * Creates a new {@link UnmodifiableWeightedTable} with the provided
                         * {@link WeightedTable} and {@code rolls}.
                         */
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable, rolls: number)
                        /**
                         * Creates a new {@link UnmodifiableWeightedTable} with the provided
                         * {@link WeightedTable} and {@link VariableAmount rolls}.
                         */
                        constructor(table: org.spongepowered.api.util.weighted.WeightedTable, rolls: org.spongepowered.api.util.weighted.VariableAmount)
                        // @ts-ignore
                        public add(entry: org.spongepowered.api.util.weighted.TableEntry): boolean;
                        // @ts-ignore
                        public add(object: any, weight: number): boolean;
                        // @ts-ignore
                        public addAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public setRolls(rolls: org.spongepowered.api.util.weighted.VariableAmount): void;
                        // @ts-ignore
                        public setRolls(rolls: number): void;
                        // @ts-ignore
                        public remove(entry: any): boolean;
                        // @ts-ignore
                        public removeObject(entry: any): boolean;
                        // @ts-ignore
                        public removeAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public removeIf(filter: any): boolean;
                        // @ts-ignore
                        public retainAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public clear(): void;
                        // @ts-ignore
                        public iterator(): any;
                        // @ts-ignore
                        public contains(o: any): boolean;
                        // @ts-ignore
                        public getRolls(): org.spongepowered.api.util.weighted.VariableAmount;
                        // @ts-ignore
                        public get(rand: any): any[] /*java.util.List*/;
                        // @ts-ignore
                        public containsObject(obj: any): boolean;
                        // @ts-ignore
                        public containsAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public containsAllObjects(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public isEmpty(): boolean;
                        // @ts-ignore
                        public size(): number;
                        // @ts-ignore
                        public getEntries(): any[] /*java.util.List*/;
                        // @ts-ignore
                        public toArray(): any;
                        // @ts-ignore
                        public toArray(a: any): any;
                        // @ts-ignore
                        public spliterator(): any;
                        // @ts-ignore
                        public stream(): any;
                        // @ts-ignore
                        public parallelStream(): any;
                        // @ts-ignore
                        public forEach(action: any): void;
                        // @ts-ignore
                        public toString(): string;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public equals(o: any): boolean;
                    }
                }
            }
        }
    }
}
