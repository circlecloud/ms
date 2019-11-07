// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class TreeMap extends java.util.AbstractMap {
            /**
             * Constructs a new, empty tree map, using the natural ordering of its
             * keys.  All keys inserted into the map must implement the {@link
             * Comparable} interface.  Furthermore, all such keys must be
             * <em>mutually comparable</em>: {@code k1.compareTo(k2)} must not throw
             * a {@code ClassCastException} for any keys {@code k1} and
             * {@code k2} in the map.  If the user attempts to put a key into the
             * map that violates this constraint (for example, the user attempts to
             * put a string key into a map whose keys are integers), the
             * {@code put(Object key, Object value)} call will throw a
             * {@code ClassCastException}.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new, empty tree map, ordered according to the given
             * comparator.  All keys inserted into the map must be <em>mutually
             * comparable</em> by the given comparator: {@code comparator.compare(k1,
             * k2)} must not throw a {@code ClassCastException} for any keys
             * {@code k1} and {@code k2} in the map.  If the user attempts to put
             * a key into the map that violates this constraint, the {@code put(Object
             * key, Object value)} call will throw a
             * {@code ClassCastException}.
             */
            // @ts-ignore
            constructor(comparator: java.util.Comparator)
            /**
             * Constructs a new tree map containing the same mappings as the given
             * map, ordered according to the <em>natural ordering</em> of its keys.
             * All keys inserted into the new map must implement the {@link
             * Comparable} interface.  Furthermore, all such keys must be
             * <em>mutually comparable</em>: {@code k1.compareTo(k2)} must not throw
             * a {@code ClassCastException} for any keys {@code k1} and
             * {@code k2} in the map.  This method runs in n*log(n) time.
             */
            // @ts-ignore
            constructor(m: java.util.Map)
            /**
             * Constructs a new tree map containing the same mappings and
             * using the same ordering as the specified sorted map.  This
             * method runs in linear time.
             */
            // @ts-ignore
            constructor(m: java.util.SortedMap)
            /**
             * Returns the number of key-value mappings in this map.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns {@code true} if this map contains a mapping for the specified
             * key.
             */
            // @ts-ignore
            public containsKey(key: java.lang.Object): boolean;
            /**
             * Returns {@code true} if this map maps one or more keys to the
             * specified value.  More formally, returns {@code true} if and only if
             * this map contains at least one mapping to a value {@code v} such
             * that {@code (value==null ? v==null : value.equals(v))}.  This
             * operation will probably require time linear in the map size for
             * most implementations.
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object): boolean;
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code key} compares
             * equal to {@code k} according to the map's ordering, then this
             * method returns {@code v}; otherwise it returns {@code null}.
             * (There can be at most one such mapping.)
             * <p>A return value of {@code null} does not <em>necessarily</em>
             * indicate that the map contains no mapping for the key; it's also
             * possible that the map explicitly maps the key to {@code null}.
             * The {@link #containsKey containsKey} operation may be used to
             * distinguish these two cases.
             */
            // @ts-ignore
            public get(key: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public comparator(): java.util.Comparator;
            // @ts-ignore
            public firstKey(): java.lang.Object;
            // @ts-ignore
            public lastKey(): java.lang.Object;
            /**
             * Copies all of the mappings from the specified map to this map.
             * These mappings replace any mappings that this map had for any
             * of the keys currently in the specified map.
             */
            // @ts-ignore
            public putAll(map: java.util.Map): void;
            /**
             * Associates the specified value with the specified key in this map.
             * If the map previously contained a mapping for the key, the old
             * value is replaced.
             */
            // @ts-ignore
            public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Removes the mapping for this key from this TreeMap if present.
             */
            // @ts-ignore
            public remove(key: java.lang.Object): java.lang.Object;
            /**
             * Removes all of the mappings from this map.
             * The map will be empty after this call returns.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Returns a shallow copy of this {@code TreeMap} instance. (The keys and
             * values themselves are not cloned.)
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            // @ts-ignore
            public firstEntry(): java.util.Map.Entry;
            // @ts-ignore
            public lastEntry(): java.util.Map.Entry;
            // @ts-ignore
            public pollFirstEntry(): java.util.Map.Entry;
            // @ts-ignore
            public pollLastEntry(): java.util.Map.Entry;
            // @ts-ignore
            public lowerEntry(key: java.lang.Object): java.util.Map.Entry;
            // @ts-ignore
            public lowerKey(key: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public floorEntry(key: java.lang.Object): java.util.Map.Entry;
            // @ts-ignore
            public floorKey(key: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public ceilingEntry(key: java.lang.Object): java.util.Map.Entry;
            // @ts-ignore
            public ceilingKey(key: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public higherEntry(key: java.lang.Object): java.util.Map.Entry;
            // @ts-ignore
            public higherKey(key: java.lang.Object): java.lang.Object;
            /**
             * Returns a {@link Set} view of the keys contained in this map.
             * <p>The set's iterator returns the keys in ascending order.
             * The set's spliterator is
             * <em><a href="Spliterator.html#binding">late-binding</a></em>,
             * <em>fail-fast</em>, and additionally reports {@link Spliterator#SORTED}
             * and {@link Spliterator#ORDERED} with an encounter order that is ascending
             * key order.  The spliterator's comparator (see
             * {@link java.util.Spliterator#getComparator()}) is {@code null} if
             * the tree map's comparator (see {@link #comparator()}) is {@code null}.
             * Otherwise, the spliterator's comparator is the same as or imposes the
             * same total ordering as the tree map's comparator.
             * <p>The set is backed by the map, so changes to the map are
             * reflected in the set, and vice-versa.  If the map is modified
             * while an iteration over the set is in progress (except through
             * the iterator's own {@code remove} operation), the results of
             * the iteration are undefined.  The set supports element removal,
             * which removes the corresponding mapping from the map, via the
             * {@code Iterator.remove}, {@code Set.remove},
             * {@code removeAll}, {@code retainAll}, and {@code clear}
             * operations.  It does not support the {@code add} or {@code addAll}
             * operations.
             */
            // @ts-ignore
            public keySet(): java.util.Set;
            // @ts-ignore
            public navigableKeySet(): java.util.NavigableSet;
            // @ts-ignore
            public descendingKeySet(): java.util.NavigableSet;
            /**
             * Returns a {@link Collection} view of the values contained in this map.
             * <p>The collection's iterator returns the values in ascending order
             * of the corresponding keys. The collection's spliterator is
             * <em><a href="Spliterator.html#binding">late-binding</a></em>,
             * <em>fail-fast</em>, and additionally reports {@link Spliterator#ORDERED}
             * with an encounter order that is ascending order of the corresponding
             * keys.
             * <p>The collection is backed by the map, so changes to the map are
             * reflected in the collection, and vice-versa.  If the map is
             * modified while an iteration over the collection is in progress
             * (except through the iterator's own {@code remove} operation),
             * the results of the iteration are undefined.  The collection
             * supports element removal, which removes the corresponding
             * mapping from the map, via the {@code Iterator.remove},
             * {@code Collection.remove}, {@code removeAll},
             * {@code retainAll} and {@code clear} operations.  It does not
             * support the {@code add} or {@code addAll} operations.
             */
            // @ts-ignore
            public values(): java.util.Collection;
            /**
             * Returns a {@link Set} view of the mappings contained in this map.
             * <p>The set's iterator returns the entries in ascending key order. The
             * sets's spliterator is
             * <em><a href="Spliterator.html#binding">late-binding</a></em>,
             * <em>fail-fast</em>, and additionally reports {@link Spliterator#SORTED} and
             * {@link Spliterator#ORDERED} with an encounter order that is ascending key
             * order.
             * <p>The set is backed by the map, so changes to the map are
             * reflected in the set, and vice-versa.  If the map is modified
             * while an iteration over the set is in progress (except through
             * the iterator's own {@code remove} operation, or through the
             * {@code setValue} operation on a map entry returned by the
             * iterator) the results of the iteration are undefined.  The set
             * supports element removal, which removes the corresponding
             * mapping from the map, via the {@code Iterator.remove},
             * {@code Set.remove}, {@code removeAll}, {@code retainAll} and
             * {@code clear} operations.  It does not support the
             * {@code add} or {@code addAll} operations.
             */
            // @ts-ignore
            public entrySet(): java.util.Set;
            // @ts-ignore
            public descendingMap(): java.util.NavigableMap;
            // @ts-ignore
            public subMap(fromKey: java.lang.Object, fromInclusive: boolean, toKey: java.lang.Object, toInclusive: boolean): java.util.NavigableMap;
            // @ts-ignore
            public headMap(toKey: java.lang.Object, inclusive: boolean): java.util.NavigableMap;
            // @ts-ignore
            public tailMap(fromKey: java.lang.Object, inclusive: boolean): java.util.NavigableMap;
            // @ts-ignore
            public subMap(fromKey: java.lang.Object, toKey: java.lang.Object): java.util.SortedMap;
            // @ts-ignore
            public headMap(toKey: java.lang.Object): java.util.SortedMap;
            // @ts-ignore
            public tailMap(fromKey: java.lang.Object): java.util.SortedMap;
            // @ts-ignore
            public replace(key: java.lang.Object, oldValue: java.lang.Object, newValue: java.lang.Object): boolean;
            // @ts-ignore
            public replace(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public forEach(action: java.util.function$.BiConsumer): void;
            // @ts-ignore
            public replaceAll(func: java.util.function$.BiFunction): void;
        }
    }
}
