declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                    abstract class RandomObjectTable {
                        /**
                         * Creates a new {@link RandomObjectTable} with the provided number of rolls.
                         */
                        constructor(rolls: number)
                        /**
                         * Creates a new {@link RandomObjectTable} with the provided number of rolls.
                         */
                        constructor(rolls: org.spongepowered.api.util.weighted.VariableAmount)
                        /**
                         * Gets the number of times this table will roll while retrieving items. For
                         * each roll a complete pass through of the table will occur.
                         */
                        // @ts-ignore
                        public getRolls(): org.spongepowered.api.util.weighted.VariableAmount;
                        /**
                         * Sets the number of times this table will roll while retrieving items.
                         */
                        // @ts-ignore
                        public setRolls(rolls: org.spongepowered.api.util.weighted.VariableAmount): void;
                        /**
                         * Sets the number of times this table will roll while retrieving items.
                         */
                        // @ts-ignore
                        public setRolls(rolls: number): void;
                        // @ts-ignore
                        public add(entry: org.spongepowered.api.util.weighted.TableEntry): boolean;
                        /**
                         * Adds the given object to the table with the given weight.
                         */
                        // @ts-ignore
                        public add(object: any, weight: number): boolean;
                        // @ts-ignore
                        public addAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public contains(o: any): boolean;
                        /**
                         * Gets if this table contains the given object, the object may either be a
                         * {@link TableEntry} or the object contained within.
                         */
                        // @ts-ignore
                        public containsObject(obj: any): boolean;
                        // @ts-ignore
                        public containsAll(c: any[] /*java.util.Collection*/): boolean;
                        /**
                         * Gets if this table contains all of the given objects, the objects may
                         * either be {@link TableEntry}s or the objects contained within the
                         * entries.
                         */
                        // @ts-ignore
                        public containsAllObjects(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public isEmpty(): boolean;
                        // @ts-ignore
                        public remove(entry: any): boolean;
                        /**
                         * Removes the first instance of an entry in this table which is a
                         * {@link WeightedObject} entry and contains the given object.
                         */
                        // @ts-ignore
                        public removeObject(object: any): boolean;
                        // @ts-ignore
                        public removeAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public retainAll(c: any[] /*java.util.Collection*/): boolean;
                        // @ts-ignore
                        public clear(): void;
                        // @ts-ignore
                        public size(): number;
                        /**
                         * Performs a number of rolls according to the number of rolls defined by
                         * {@link #getRolls()} and returns items from the table for each roll.
                         */
                        // @ts-ignore
                        public abstract get(rand: any): any[] /*java.util.List*/;
                        /**
                         * Gets the entries in the table. Note that the specific sub class of this
                         * abstract table will determine the context that the entry weights should
                         * be interpreted in (either weights or chances).
                         */
                        // @ts-ignore
                        public getEntries(): any[] /*java.util.List*/;
                        // @ts-ignore
                        public iterator(): any;
                        // @ts-ignore
                        public toArray(): any;
                        // @ts-ignore
                        public toArray(a: any): any;
                    }
                }
            }
        }
    }
}
