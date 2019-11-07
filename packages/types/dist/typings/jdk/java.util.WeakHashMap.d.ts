declare namespace java {
    namespace util {
        // @ts-ignore
         class WeakHashMap extends java.util.AbstractMap {
            /**
             * Constructs a new, empty <tt>WeakHashMap</tt> with the given initial
             * capacity and the given load factor.
             */
            // @ts-ignore
            constructor(initialCapacity: number, loadFactor: number)
            /**
             * Constructs a new, empty <tt>WeakHashMap</tt> with the given initial
             * capacity and the default load factor (0.75).
             */
            // @ts-ignore
            constructor(initialCapacity: number)
            /**
             * Constructs a new, empty <tt>WeakHashMap</tt> with the default initial
             * capacity (16) and load factor (0.75).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <tt>WeakHashMap</tt> with the same mappings as the
             * specified map.  The <tt>WeakHashMap</tt> is created with the default
             * load factor (0.75) and an initial capacity sufficient to hold the
             * mappings in the specified map.
             */
            // @ts-ignore
            constructor(m: java.util.Map)
            /**
             * Returns the number of key-value mappings in this map.
             * This result is a snapshot, and may not reflect unprocessed
             * entries that will be removed before next attempted access
             * because they are no longer referenced.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns <tt>true</tt> if this map contains no key-value mappings.
             * This result is a snapshot, and may not reflect unprocessed
             * entries that will be removed before next attempted access
             * because they are no longer referenced.
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
             * If the map previously contained a mapping for this key, the old
             * value is replaced.
             */
            // @ts-ignore
            public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Copies all of the mappings from the specified map to this map.
             * These mappings will replace any mappings that this map had for any
             * of the keys currently in the specified map.
             */
            // @ts-ignore
            public putAll(m: java.util.Map): void;
            /**
             * Removes the mapping for a key from this weak hash map if it is present.
             * More formally, if this map contains a mapping from key <tt>k</tt> to
             * value <tt>v</tt> such that <code>(key==null ?  k==null :
             * key.equals(k))</code>, that mapping is removed.  (The map can contain
             * at most one such mapping.)
             * <p>Returns the value to which this map previously associated the key,
             * or <tt>null</tt> if the map contained no mapping for the key.  A
             * return value of <tt>null</tt> does not <i>necessarily</i> indicate
             * that the map contained no mapping for the key; it's also possible
             * that the map explicitly mapped the key to <tt>null</tt>.
             * <p>The map will not contain a mapping for the specified key once the
             * call returns.
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
            public forEach(action: java.util.function$.BiConsumer): void;
            // @ts-ignore
            public replaceAll(func: java.util.function$.BiFunction): void;
        }
    }
}
