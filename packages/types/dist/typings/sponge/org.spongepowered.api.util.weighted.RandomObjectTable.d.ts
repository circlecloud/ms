declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace weighted {
                    // @ts-ignore
                    abstract class RandomObjectTable extends java.lang.Object {
                        /**
                         * Creates a new {@link RandomObjectTable} with the provided number of rolls.
                         */
                        // @ts-ignore
                        constructor(rolls: number)
                        /**
                         * Creates a new {@link RandomObjectTable} with the provided number of rolls.
                         */
                        // @ts-ignore
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
                        public add(object: java.lang.Object, weight: number): boolean;
                        // @ts-ignore
                        public addAll(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public contains(o: java.lang.Object): boolean;
                        /**
                         * Gets if this table contains the given object, the object may either be a
                         * {@link TableEntry} or the object contained within.
                         */
                        // @ts-ignore
                        public containsObject(obj: java.lang.Object): boolean;
                        // @ts-ignore
                        public containsAll(c: java.util.Collection): boolean;
                        /**
                         * Gets if this table contains all of the given objects, the objects may
                         * either be {@link TableEntry}s or the objects contained within the
                         * entries.
                         */
                        // @ts-ignore
                        public containsAllObjects(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public isEmpty(): boolean;
                        // @ts-ignore
                        public remove(entry: java.lang.Object): boolean;
                        /**
                         * Removes the first instance of an entry in this table which is a
                         * {@link WeightedObject} entry and contains the given object.
                         */
                        // @ts-ignore
                        public removeObject(object: java.lang.Object): boolean;
                        // @ts-ignore
                        public removeAll(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public retainAll(c: java.util.Collection): boolean;
                        // @ts-ignore
                        public clear(): void;
                        // @ts-ignore
                        public size(): number;
                        /**
                         * Performs a number of rolls according to the number of rolls defined by
                         * {@link #getRolls()} and returns items from the table for each roll.
                         */
                        // @ts-ignore
                        public abstract get(rand: java.util.Random): java.util.List;
                        /**
                         * Gets the entries in the table. Note that the specific sub class of this
                         * abstract table will determine the context that the entry weights should
                         * be interpreted in (either weights or chances).
                         */
                        // @ts-ignore
                        public getEntries(): java.util.List;
                        // @ts-ignore
                        public iterator(): java.util.Iterator;
                        // @ts-ignore
                        public toArray(): java.lang.Object[];
                        // @ts-ignore
                        public toArray(a: java.lang.Object): java.lang.Object[];
                    }
                }
            }
        }
    }
}
