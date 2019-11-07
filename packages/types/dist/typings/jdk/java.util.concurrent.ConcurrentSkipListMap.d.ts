declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ConcurrentSkipListMap extends java.util.AbstractMap {
                /**
                 * Constructs a new, empty map, sorted according to the
                 * {@linkplain Comparable natural ordering} of the keys.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new, empty map, sorted according to the specified
                 * comparator.
                 */
                // @ts-ignore
                constructor(comparator: java.util.Comparator)
                /**
                 * Constructs a new map containing the same mappings as the given map,
                 * sorted according to the {@linkplain Comparable natural ordering} of
                 * the keys.
                 */
                // @ts-ignore
                constructor(m: java.util.Map)
                /**
                 * Constructs a new map containing the same mappings and using the
                 * same ordering as the specified sorted map.
                 */
                // @ts-ignore
                constructor(m: java.util.SortedMap)
                /**
                 * Returns a shallow copy of this {@code ConcurrentSkipListMap}
                 * instance. (The keys and values themselves are not cloned.)
                 */
                // @ts-ignore
                public clone(): java.util.concurrent.ConcurrentSkipListMap;
                /**
                 * Returns {@code true} if this map contains a mapping for the specified
                 * key.
                 */
                // @ts-ignore
                public containsKey(key: java.lang.Object): boolean;
                /**
                 * Returns the value to which the specified key is mapped,
                 * or {@code null} if this map contains no mapping for the key.
                 * <p>More formally, if this map contains a mapping from a key
                 * {@code k} to a value {@code v} such that {@code key} compares
                 * equal to {@code k} according to the map's ordering, then this
                 * method returns {@code v}; otherwise it returns {@code null}.
                 * (There can be at most one such mapping.)
                 */
                // @ts-ignore
                public get(key: java.lang.Object): java.lang.Object;
                /**
                 * Returns the value to which the specified key is mapped,
                 * or the given defaultValue if this map contains no mapping for the key.
                 */
                // @ts-ignore
                public getOrDefault(key: java.lang.Object, defaultValue: java.lang.Object): java.lang.Object;
                /**
                 * Associates the specified value with the specified key in this map.
                 * If the map previously contained a mapping for the key, the old
                 * value is replaced.
                 */
                // @ts-ignore
                public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
                /**
                 * Removes the mapping for the specified key from this map if present.
                 */
                // @ts-ignore
                public remove(key: java.lang.Object): java.lang.Object;
                /**
                 * Returns {@code true} if this map maps one or more keys to the
                 * specified value.  This operation requires time linear in the
                 * map size. Additionally, it is possible for the map to change
                 * during execution of this method, in which case the returned
                 * result may be inaccurate.
                 */
                // @ts-ignore
                public containsValue(value: java.lang.Object): boolean;
                /**
                 * Returns the number of key-value mappings in this map.  If this map
                 * contains more than {@code Integer.MAX_VALUE} elements, it
                 * returns {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these maps, determining the current
                 * number of elements requires traversing them all to count them.
                 * Additionally, it is possible for the size to change during
                 * execution of this method, in which case the returned result
                 * will be inaccurate. Thus, this method is typically not very
                 * useful in concurrent applications.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Returns {@code true} if this map contains no key-value mappings.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Removes all of the mappings from this map.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * If the specified key is not already associated with a value,
                 * attempts to compute its value using the given mapping function
                 * and enters it into this map unless {@code null}.  The function
                 * is <em>NOT</em> guaranteed to be applied once atomically only
                 * if the value is not present.
                 */
                // @ts-ignore
                public computeIfAbsent(key: java.lang.Object, mappingFunction: java.util.function$.Function): java.lang.Object;
                /**
                 * If the value for the specified key is present, attempts to
                 * compute a new mapping given the key and its current mapped
                 * value. The function is <em>NOT</em> guaranteed to be applied
                 * once atomically.
                 */
                // @ts-ignore
                public computeIfPresent(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Attempts to compute a mapping for the specified key and its
                 * current mapped value (or {@code null} if there is no current
                 * mapping). The function is <em>NOT</em> guaranteed to be applied
                 * once atomically.
                 */
                // @ts-ignore
                public compute(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * If the specified key is not already associated with a value,
                 * associates it with the given value.  Otherwise, replaces the
                 * value with the results of the given remapping function, or
                 * removes if {@code null}. The function is <em>NOT</em>
                 * guaranteed to be applied once atomically.
                 */
                // @ts-ignore
                public merge(key: java.lang.Object, value: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
                /**
                 * Returns a {@link NavigableSet} view of the keys contained in this map.
                 * <p>The set's iterator returns the keys in ascending order.
                 * The set's spliterator additionally reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#NONNULL}, {@link Spliterator#SORTED} and
                 * {@link Spliterator#ORDERED}, with an encounter order that is ascending
                 * key order.  The spliterator's comparator (see
                 * {@link java.util.Spliterator#getComparator()}) is {@code null} if
                 * the map's comparator (see {@link #comparator()}) is {@code null}.
                 * Otherwise, the spliterator's comparator is the same as or imposes the
                 * same total ordering as the map's comparator.
                 * <p>The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll}, and {@code clear}
                 * operations.  It does not support the {@code add} or {@code addAll}
                 * operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>This method is equivalent to method {@code navigableKeySet}.
                 */
                // @ts-ignore
                public keySet(): java.util.NavigableSet;
                // @ts-ignore
                public navigableKeySet(): java.util.NavigableSet;
                /**
                 * Returns a {@link Collection} view of the values contained in this map.
                 * <p>The collection's iterator returns the values in ascending order
                 * of the corresponding keys. The collections's spliterator additionally
                 * reports {@link Spliterator#CONCURRENT}, {@link Spliterator#NONNULL} and
                 * {@link Spliterator#ORDERED}, with an encounter order that is ascending
                 * order of the corresponding keys.
                 * <p>The collection is backed by the map, so changes to the map are
                 * reflected in the collection, and vice-versa.  The collection
                 * supports element removal, which removes the corresponding
                 * mapping from the map, via the {@code Iterator.remove},
                 * {@code Collection.remove}, {@code removeAll},
                 * {@code retainAll} and {@code clear} operations.  It does not
                 * support the {@code add} or {@code addAll} operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                public values(): java.util.Collection;
                /**
                 * Returns a {@link Set} view of the mappings contained in this map.
                 * <p>The set's iterator returns the entries in ascending key order.  The
                 * set's spliterator additionally reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#NONNULL}, {@link Spliterator#SORTED} and
                 * {@link Spliterator#ORDERED}, with an encounter order that is ascending
                 * key order.
                 * <p>The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll} and {@code clear}
                 * operations.  It does not support the {@code add} or
                 * {@code addAll} operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The {@code Map.Entry} elements traversed by the {@code iterator}
                 * or {@code spliterator} do <em>not</em> support the {@code setValue}
                 * operation.
                 */
                // @ts-ignore
                public entrySet(): java.util.Set;
                // @ts-ignore
                public descendingMap(): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                public descendingKeySet(): java.util.NavigableSet;
                /**
                 * Compares the specified object with this map for equality.
                 * Returns {@code true} if the given object is also a map and the
                 * two maps represent the same mappings.  More formally, two maps
                 * {@code m1} and {@code m2} represent the same mappings if
                 * {@code m1.entrySet().equals(m2.entrySet())}.  This
                 * operation may return misleading results if either map is
                 * concurrently modified during execution of this method.
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
                // @ts-ignore
                public comparator(): java.util.Comparator;
                // @ts-ignore
                public firstKey(): java.lang.Object;
                // @ts-ignore
                public lastKey(): java.lang.Object;
                // @ts-ignore
                public subMap(fromKey: java.lang.Object, fromInclusive: boolean, toKey: java.lang.Object, toInclusive: boolean): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                public headMap(toKey: java.lang.Object, inclusive: boolean): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                public tailMap(fromKey: java.lang.Object, inclusive: boolean): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                public subMap(fromKey: java.lang.Object, toKey: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                public headMap(toKey: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                public tailMap(fromKey: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
                /**
                 * Returns a key-value mapping associated with the greatest key
                 * strictly less than the given key, or {@code null} if there is
                 * no such key. The returned entry does <em>not</em> support the
                 * {@code Entry.setValue} method.
                 */
                // @ts-ignore
                public lowerEntry(key: java.lang.Object): java.util.Map.Entry;
                // @ts-ignore
                public lowerKey(key: java.lang.Object): java.lang.Object;
                /**
                 * Returns a key-value mapping associated with the greatest key
                 * less than or equal to the given key, or {@code null} if there
                 * is no such key. The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                public floorEntry(key: java.lang.Object): java.util.Map.Entry;
                // @ts-ignore
                public floorKey(key: java.lang.Object): java.lang.Object;
                /**
                 * Returns a key-value mapping associated with the least key
                 * greater than or equal to the given key, or {@code null} if
                 * there is no such entry. The returned entry does <em>not</em>
                 * support the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                public ceilingEntry(key: java.lang.Object): java.util.Map.Entry;
                // @ts-ignore
                public ceilingKey(key: java.lang.Object): java.lang.Object;
                /**
                 * Returns a key-value mapping associated with the least key
                 * strictly greater than the given key, or {@code null} if there
                 * is no such key. The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                public higherEntry(key: java.lang.Object): java.util.Map.Entry;
                // @ts-ignore
                public higherKey(key: java.lang.Object): java.lang.Object;
                /**
                 * Returns a key-value mapping associated with the least
                 * key in this map, or {@code null} if the map is empty.
                 * The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                public firstEntry(): java.util.Map.Entry;
                /**
                 * Returns a key-value mapping associated with the greatest
                 * key in this map, or {@code null} if the map is empty.
                 * The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                public lastEntry(): java.util.Map.Entry;
                /**
                 * Removes and returns a key-value mapping associated with
                 * the least key in this map, or {@code null} if the map is empty.
                 * The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                public pollFirstEntry(): java.util.Map.Entry;
                /**
                 * Removes and returns a key-value mapping associated with
                 * the greatest key in this map, or {@code null} if the map is empty.
                 * The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                public pollLastEntry(): java.util.Map.Entry;
                // @ts-ignore
                public forEach(action: java.util.function$.BiConsumer): void;
                // @ts-ignore
                public replaceAll(func: java.util.function$.BiFunction): void;
            }
        }
    }
}
