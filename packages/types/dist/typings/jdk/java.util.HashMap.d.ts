declare namespace java {
    namespace util {
        // @ts-ignore
         class HashMap extends java.util.AbstractMap {
            /**
             * Constructs an empty <tt>HashMap</tt> with the specified initial
             * capacity and load factor.
             */
            // @ts-ignore
            constructor(initialCapacity: number, loadFactor: number)
            /**
             * Constructs an empty <tt>HashMap</tt> with the specified initial
             * capacity and the default load factor (0.75).
             */
            // @ts-ignore
            constructor(initialCapacity: number)
            /**
             * Constructs an empty <tt>HashMap</tt> with the default initial capacity
             * (16) and the default load factor (0.75).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <tt>HashMap</tt> with the same mappings as the
             * specified <tt>Map</tt>.  The <tt>HashMap</tt> is created with
             * default load factor (0.75) and an initial capacity sufficient to
             * hold the mappings in the specified <tt>Map</tt>.
             */
            // @ts-ignore
            constructor(m: java.util.Map)
            /**
             * Returns the number of key-value mappings in this map.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns <tt>true</tt> if this map contains no key-value mappings.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code (key==null ? k==null :
             * key.equals(k))}, then this method returns {@code v}; otherwise
             * it returns {@code null}.  (There can be at most one such mapping.)
             * <p>A return value of {@code null} does not <i>necessarily</i>
             * indicate that the map contains no mapping for the key; it's also
             * possible that the map explicitly maps the key to {@code null}.
             * The {@link #containsKey containsKey} operation may be used to
             * distinguish these two cases.
             */
            // @ts-ignore
            public get(key: java.lang.Object): java.lang.Object;
            /**
             * Returns <tt>true</tt> if this map contains a mapping for the
             * specified key.
             */
            // @ts-ignore
            public containsKey(key: java.lang.Object): boolean;
            /**
             * Associates the specified value with the specified key in this map.
             * If the map previously contained a mapping for the key, the old
             * value is replaced.
             */
            // @ts-ignore
            public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Copies all of the mappings from the specified map to this map.
             * These mappings will replace any mappings that this map had for
             * any of the keys currently in the specified map.
             */
            // @ts-ignore
            public putAll(m: java.util.Map): void;
            /**
             * Removes the mapping for the specified key from this map if present.
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
             * Returns <tt>true</tt> if this map maps one or more keys to the
             * specified value.
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object): boolean;
            /**
             * Returns a {@link Set} view of the keys contained in this map.
             * The set is backed by the map, so changes to the map are
             * reflected in the set, and vice-versa.  If the map is modified
             * while an iteration over the set is in progress (except through
             * the iterator's own <tt>remove</tt> operation), the results of
             * the iteration are undefined.  The set supports element removal,
             * which removes the corresponding mapping from the map, via the
             * <tt>Iterator.remove</tt>, <tt>Set.remove</tt>,
             * <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt>
             * operations.  It does not support the <tt>add</tt> or <tt>addAll</tt>
             * operations.
             */
            // @ts-ignore
            public keySet(): java.util.Set;
            /**
             * Returns a {@link Collection} view of the values contained in this map.
             * The collection is backed by the map, so changes to the map are
             * reflected in the collection, and vice-versa.  If the map is
             * modified while an iteration over the collection is in progress
             * (except through the iterator's own <tt>remove</tt> operation),
             * the results of the iteration are undefined.  The collection
             * supports element removal, which removes the corresponding
             * mapping from the map, via the <tt>Iterator.remove</tt>,
             * <tt>Collection.remove</tt>, <tt>removeAll</tt>,
             * <tt>retainAll</tt> and <tt>clear</tt> operations.  It does not
             * support the <tt>add</tt> or <tt>addAll</tt> operations.
             */
            // @ts-ignore
            public values(): java.util.Collection;
            /**
             * Returns a {@link Set} view of the mappings contained in this map.
             * The set is backed by the map, so changes to the map are
             * reflected in the set, and vice-versa.  If the map is modified
             * while an iteration over the set is in progress (except through
             * the iterator's own <tt>remove</tt> operation, or through the
             * <tt>setValue</tt> operation on a map entry returned by the
             * iterator) the results of the iteration are undefined.  The set
             * supports element removal, which removes the corresponding
             * mapping from the map, via the <tt>Iterator.remove</tt>,
             * <tt>Set.remove</tt>, <tt>removeAll</tt>, <tt>retainAll</tt> and
             * <tt>clear</tt> operations.  It does not support the
             * <tt>add</tt> or <tt>addAll</tt> operations.
             */
            // @ts-ignore
            public entrySet(): java.util.Set;
            // @ts-ignore
            public getOrDefault(key: java.lang.Object, defaultValue: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public putIfAbsent(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public remove(key: java.lang.Object, value: java.lang.Object): boolean;
            // @ts-ignore
            public replace(key: java.lang.Object, oldValue: java.lang.Object, newValue: java.lang.Object): boolean;
            // @ts-ignore
            public replace(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public computeIfAbsent(key: java.lang.Object, mappingFunction: java.util.function$.Function): java.lang.Object;
            // @ts-ignore
            public computeIfPresent(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            // @ts-ignore
            public compute(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            // @ts-ignore
            public merge(key: java.lang.Object, value: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            // @ts-ignore
            public forEach(action: java.util.function$.BiConsumer): void;
            // @ts-ignore
            public replaceAll(func: java.util.function$.BiFunction): void;
            /**
             * Returns a shallow copy of this <tt>HashMap</tt> instance: the keys and
             * values themselves are not cloned.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
