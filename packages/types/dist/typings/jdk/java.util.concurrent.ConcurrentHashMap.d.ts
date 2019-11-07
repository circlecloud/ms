// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ConcurrentHashMap extends java.util.AbstractMap {
                /**
                 * Creates a new, empty map with the default initial table size (16).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new, empty map with an initial table size
                 * accommodating the specified number of elements without the need
                 * to dynamically resize.
                 */
                // @ts-ignore
                constructor(initialCapacity: number)
                /**
                 * Creates a new map with the same mappings as the given map.
                 */
                // @ts-ignore
                constructor(m: java.util.Map)
                /**
                 * Creates a new, empty map with an initial table size based on
                 * the given number of elements ({@code initialCapacity}) and
                 * initial table density ({@code loadFactor}).
                 */
                // @ts-ignore
                constructor(initialCapacity: number, loadFactor: number)
                /**
                 * Creates a new, empty map with an initial table size based on
                 * the given number of elements ({@code initialCapacity}), table
                 * density ({@code loadFactor}), and number of concurrently
                 * updating threads ({@code concurrencyLevel}).
                 */
                // @ts-ignore
                constructor(initialCapacity: number, loadFactor: number, concurrencyLevel: number)
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Returns the value to which the specified key is mapped,
                 * or {@code null} if this map contains no mapping for the key.
                 * <p>More formally, if this map contains a mapping from a key
                 * {@code k} to a value {@code v} such that {@code key.equals(k)},
                 * then this method returns {@code v}; otherwise it returns
                 * {@code null}.  (There can be at most one such mapping.)
                 */
                // @ts-ignore
                public get(key: java.lang.Object): java.lang.Object;
                /**
                 * Tests if the specified object is a key in this table.
                 */
                // @ts-ignore
                public containsKey(key: java.lang.Object): boolean;
                /**
                 * Returns {@code true} if this map maps one or more keys to the
                 * specified value. Note: This method may require a full traversal
                 * of the map, and is much slower than method {@code containsKey}.
                 */
                // @ts-ignore
                public containsValue(value: java.lang.Object): boolean;
                /**
                 * Maps the specified key to the specified value in this table.
                 * Neither the key nor the value can be null.
                 * <p>The value can be retrieved by calling the {@code get} method
                 * with a key that is equal to the original key.
                 */
                // @ts-ignore
                public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
                /**
                 * Copies all of the mappings from the specified map to this one.
                 * These mappings replace any mappings that this map had for any of the
                 * keys currently in the specified map.
                 */
                // @ts-ignore
                public putAll(m: java.util.Map): void;
                /**
                 * Removes the key (and its corresponding value) from this map.
                 * This method does nothing if the key is not in the map.
                 */
                // @ts-ignore
                public remove(key: java.lang.Object): java.lang.Object;
                /**
                 * Removes all of the mappings from this map.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Returns a {@link Set} view of the keys contained in this map.
                 * The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa. The set supports element
                 * removal, which removes the corresponding mapping from this map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll}, and {@code clear}
                 * operations.  It does not support the {@code add} or
                 * {@code addAll} operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The view's {@code spliterator} reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#DISTINCT}, and {@link Spliterator#NONNULL}.
                 */
                // @ts-ignore
                public keySet(): java.util.concurrent.ConcurrentHashMap.KeySetView;
                /**
                 * Returns a {@link Collection} view of the values contained in this map.
                 * The collection is backed by the map, so changes to the map are
                 * reflected in the collection, and vice-versa.  The collection
                 * supports element removal, which removes the corresponding
                 * mapping from this map, via the {@code Iterator.remove},
                 * {@code Collection.remove}, {@code removeAll},
                 * {@code retainAll}, and {@code clear} operations.  It does not
                 * support the {@code add} or {@code addAll} operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The view's {@code spliterator} reports {@link Spliterator#CONCURRENT}
                 * and {@link Spliterator#NONNULL}.
                 */
                // @ts-ignore
                public values(): java.util.Collection;
                /**
                 * Returns a {@link Set} view of the mappings contained in this map.
                 * The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll}, and {@code clear}
                 * operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The view's {@code spliterator} reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#DISTINCT}, and {@link Spliterator#NONNULL}.
                 */
                // @ts-ignore
                public entrySet(): java.util.Set;
                /**
                 * Returns the hash code value for this {@link Map}, i.e.,
                 * the sum of, for each key-value pair in the map,
                 * {@code key.hashCode() ^ value.hashCode()}.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string representation of this map.  The string
                 * representation consists of a list of key-value mappings (in no
                 * particular order) enclosed in braces ("{@code {}}").  Adjacent
                 * mappings are separated by the characters {@code ", "} (comma
                 * and space).  Each key-value mapping is rendered as the key
                 * followed by an equals sign ("{@code =}") followed by the
                 * associated value.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Compares the specified object with this map for equality.
                 * Returns {@code true} if the given object is a map with the same
                 * mappings as this map.  This operation may return misleading
                 * results if either map is concurrently modified during execution
                 * of this method.
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public putIfAbsent(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public remove(key: java.lang.Object, value: java.lang.Object): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public replace(key: java.lang.Object, oldValue: java.lang.Object, newValue: java.lang.Object): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public replace(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
                /**
                 * Returns the value to which the specified key is mapped, or the
                 * given default value if this map contains no mapping for the
                 * key.
                 */
                // @ts-ignore
                public getOrDefault(key: java.lang.Object, defaultValue: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public forEach(action: java.util.function$.BiConsumer): void;
                // @ts-ignore
                public replaceAll(func: java.util.function$.BiFunction): void;
                /**
                 * If the specified key is not already associated with a value,
                 * attempts to compute its value using the given mapping function
                 * and enters it into this map unless {@code null}.  The entire
                 * method invocation is performed atomically, so the function is
                 * applied at most once per key.  Some attempted update operations
                 * on this map by other threads may be blocked while computation
                 * is in progress, so the computation should be short and simple,
                 * and must not attempt to update any other mappings of this map.
                 */
                // @ts-ignore
                public computeIfAbsent(key: java.lang.Object, mappingFunction: java.util.function$.Function): java.lang.Object;
                /**
                 * If the value for the specified key is present, attempts to
                 * compute a new mapping given the key and its current mapped
                 * value.  The entire method invocation is performed atomically.
                 * Some attempted update operations on this map by other threads
                 * may be blocked while computation is in progress, so the
                 * computation should be short and simple, and must not attempt to
                 * update any other mappings of this map.
                 */
                // @ts-ignore
                public computeIfPresent(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Attempts to compute a mapping for the specified key and its
                 * current mapped value (or {@code null} if there is no current
                 * mapping). The entire method invocation is performed atomically.
                 * Some attempted update operations on this map by other threads
                 * may be blocked while computation is in progress, so the
                 * computation should be short and simple, and must not attempt to
                 * update any other mappings of this Map.
                 */
                // @ts-ignore
                public compute(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * If the specified key is not already associated with a
                 * (non-null) value, associates it with the given value.
                 * Otherwise, replaces the value with the results of the given
                 * remapping function, or removes if {@code null}. The entire
                 * method invocation is performed atomically.  Some attempted
                 * update operations on this map by other threads may be blocked
                 * while computation is in progress, so the computation should be
                 * short and simple, and must not attempt to update any other
                 * mappings of this Map.
                 */
                // @ts-ignore
                public merge(key: java.lang.Object, value: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Legacy method testing if some key maps into the specified value
                 * in this table.  This method is identical in functionality to
                 * {@link #containsValue(Object)}, and exists solely to ensure
                 * full compatibility with class {@link java.util.Hashtable},
                 * which supported this method prior to introduction of the
                 * Java Collections framework.
                 */
                // @ts-ignore
                public contains(value: java.lang.Object): boolean;
                /**
                 * Returns an enumeration of the keys in this table.
                 */
                // @ts-ignore
                public keys(): java.util.Enumeration;
                /**
                 * Returns an enumeration of the values in this table.
                 */
                // @ts-ignore
                public elements(): java.util.Enumeration;
                /**
                 * Returns the number of mappings. This method should be used
                 * instead of {@link #size} because a ConcurrentHashMap may
                 * contain more mappings than can be represented as an int. The
                 * value returned is an estimate; the actual count may differ if
                 * there are concurrent insertions or removals.
                 */
                // @ts-ignore
                public mappingCount(): number;
                /**
                 * Creates a new {@link Set} backed by a ConcurrentHashMap
                 * from the given type to {@code Boolean.TRUE}.
                 */
                // @ts-ignore
                public static newKeySet(): java.util.concurrent.ConcurrentHashMap.KeySetView;
                /**
                 * Creates a new {@link Set} backed by a ConcurrentHashMap
                 * from the given type to {@code Boolean.TRUE}.
                 */
                // @ts-ignore
                public static newKeySet(initialCapacity: number): java.util.concurrent.ConcurrentHashMap.KeySetView;
                /**
                 * Returns a {@link Set} view of the keys in this map, using the
                 * given common mapped value for any additions (i.e., {@link
                 * Collection#add} and {@link Collection#addAll(Collection)}).
                 * This is of course only appropriate if it is acceptable to use
                 * the same value for all additions from this view.
                 */
                // @ts-ignore
                public keySet(mappedValue: java.lang.Object): java.util.concurrent.ConcurrentHashMap.KeySetView;
                /**
                 * Performs the given action for each (key, value).
                 */
                // @ts-ignore
                public forEach(parallelismThreshold: number, action: java.util.function$.BiConsumer): void;
                /**
                 * Performs the given action for each non-null transformation
                 * of each (key, value).
                 */
                // @ts-ignore
                public forEach(parallelismThreshold: number, transformer: java.util.function$.BiFunction, action: java.util.function$.Consumer): void;
                /**
                 * Returns a non-null result from applying the given search
                 * function on each (key, value), or null if none.  Upon
                 * success, further element processing is suppressed and the
                 * results of any other parallel invocations of the search
                 * function are ignored.
                 */
                // @ts-ignore
                public search(parallelismThreshold: number, searchFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all (key, value) pairs using the given reducer to
                 * combine values, or null if none.
                 */
                // @ts-ignore
                public reduce(parallelismThreshold: number, transformer: java.util.function$.BiFunction, reducer: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all (key, value) pairs using the given reducer to
                 * combine values, and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceToDouble(parallelismThreshold: number, transformer: java.util.function$.ToDoubleBiFunction, basis: number, reducer: java.util.function$.DoubleBinaryOperator): number;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all (key, value) pairs using the given reducer to
                 * combine values, and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceToLong(parallelismThreshold: number, transformer: java.util.function$.ToLongBiFunction, basis: number, reducer: java.util.function$.LongBinaryOperator): number;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all (key, value) pairs using the given reducer to
                 * combine values, and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceToInt(parallelismThreshold: number, transformer: java.util.function$.ToIntBiFunction, basis: number, reducer: java.util.function$.IntBinaryOperator): number;
                /**
                 * Performs the given action for each key.
                 */
                // @ts-ignore
                public forEachKey(parallelismThreshold: number, action: java.util.function$.Consumer): void;
                /**
                 * Performs the given action for each non-null transformation
                 * of each key.
                 */
                // @ts-ignore
                public forEachKey(parallelismThreshold: number, transformer: java.util.function$.Function, action: java.util.function$.Consumer): void;
                /**
                 * Returns a non-null result from applying the given search
                 * function on each key, or null if none. Upon success,
                 * further element processing is suppressed and the results of
                 * any other parallel invocations of the search function are
                 * ignored.
                 */
                // @ts-ignore
                public searchKeys(parallelismThreshold: number, searchFunction: java.util.function$.Function): java.lang.Object;
                /**
                 * Returns the result of accumulating all keys using the given
                 * reducer to combine values, or null if none.
                 */
                // @ts-ignore
                public reduceKeys(parallelismThreshold: number, reducer: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all keys using the given reducer to combine values, or
                 * null if none.
                 */
                // @ts-ignore
                public reduceKeys(parallelismThreshold: number, transformer: java.util.function$.Function, reducer: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all keys using the given reducer to combine values, and
                 * the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceKeysToDouble(parallelismThreshold: number, transformer: java.util.function$.ToDoubleFunction, basis: number, reducer: java.util.function$.DoubleBinaryOperator): number;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all keys using the given reducer to combine values, and
                 * the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceKeysToLong(parallelismThreshold: number, transformer: java.util.function$.ToLongFunction, basis: number, reducer: java.util.function$.LongBinaryOperator): number;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all keys using the given reducer to combine values, and
                 * the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceKeysToInt(parallelismThreshold: number, transformer: java.util.function$.ToIntFunction, basis: number, reducer: java.util.function$.IntBinaryOperator): number;
                /**
                 * Performs the given action for each value.
                 */
                // @ts-ignore
                public forEachValue(parallelismThreshold: number, action: java.util.function$.Consumer): void;
                /**
                 * Performs the given action for each non-null transformation
                 * of each value.
                 */
                // @ts-ignore
                public forEachValue(parallelismThreshold: number, transformer: java.util.function$.Function, action: java.util.function$.Consumer): void;
                /**
                 * Returns a non-null result from applying the given search
                 * function on each value, or null if none.  Upon success,
                 * further element processing is suppressed and the results of
                 * any other parallel invocations of the search function are
                 * ignored.
                 */
                // @ts-ignore
                public searchValues(parallelismThreshold: number, searchFunction: java.util.function$.Function): java.lang.Object;
                /**
                 * Returns the result of accumulating all values using the
                 * given reducer to combine values, or null if none.
                 */
                // @ts-ignore
                public reduceValues(parallelismThreshold: number, reducer: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all values using the given reducer to combine values, or
                 * null if none.
                 */
                // @ts-ignore
                public reduceValues(parallelismThreshold: number, transformer: java.util.function$.Function, reducer: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all values using the given reducer to combine values,
                 * and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceValuesToDouble(parallelismThreshold: number, transformer: java.util.function$.ToDoubleFunction, basis: number, reducer: java.util.function$.DoubleBinaryOperator): number;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all values using the given reducer to combine values,
                 * and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceValuesToLong(parallelismThreshold: number, transformer: java.util.function$.ToLongFunction, basis: number, reducer: java.util.function$.LongBinaryOperator): number;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all values using the given reducer to combine values,
                 * and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceValuesToInt(parallelismThreshold: number, transformer: java.util.function$.ToIntFunction, basis: number, reducer: java.util.function$.IntBinaryOperator): number;
                /**
                 * Performs the given action for each entry.
                 */
                // @ts-ignore
                public forEachEntry(parallelismThreshold: number, action: java.util.function$.Consumer): void;
                /**
                 * Performs the given action for each non-null transformation
                 * of each entry.
                 */
                // @ts-ignore
                public forEachEntry(parallelismThreshold: number, transformer: java.util.function$.Function, action: java.util.function$.Consumer): void;
                /**
                 * Returns a non-null result from applying the given search
                 * function on each entry, or null if none.  Upon success,
                 * further element processing is suppressed and the results of
                 * any other parallel invocations of the search function are
                 * ignored.
                 */
                // @ts-ignore
                public searchEntries(parallelismThreshold: number, searchFunction: java.util.function$.Function): java.lang.Object;
                /**
                 * Returns the result of accumulating all entries using the
                 * given reducer to combine values, or null if none.
                 */
                // @ts-ignore
                public reduceEntries(parallelismThreshold: number, reducer: java.util.function$.BiFunction): java.util.Map.Entry;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all entries using the given reducer to combine values,
                 * or null if none.
                 */
                // @ts-ignore
                public reduceEntries(parallelismThreshold: number, transformer: java.util.function$.Function, reducer: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all entries using the given reducer to combine values,
                 * and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceEntriesToDouble(parallelismThreshold: number, transformer: java.util.function$.ToDoubleFunction, basis: number, reducer: java.util.function$.DoubleBinaryOperator): number;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all entries using the given reducer to combine values,
                 * and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceEntriesToLong(parallelismThreshold: number, transformer: java.util.function$.ToLongFunction, basis: number, reducer: java.util.function$.LongBinaryOperator): number;
                /**
                 * Returns the result of accumulating the given transformation
                 * of all entries using the given reducer to combine values,
                 * and the given basis as an identity value.
                 */
                // @ts-ignore
                public reduceEntriesToInt(parallelismThreshold: number, transformer: java.util.function$.ToIntFunction, basis: number, reducer: java.util.function$.IntBinaryOperator): number;
            }
        }
    }
}
