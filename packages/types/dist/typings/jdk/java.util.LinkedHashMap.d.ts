// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class LinkedHashMap extends java.util.HashMap {
            /**
             * Constructs an empty insertion-ordered <tt>LinkedHashMap</tt> instance
             * with the specified initial capacity and load factor.
             */
            // @ts-ignore
            constructor(initialCapacity: number, loadFactor: number)
            /**
             * Constructs an empty insertion-ordered <tt>LinkedHashMap</tt> instance
             * with the specified initial capacity and a default load factor (0.75).
             */
            // @ts-ignore
            constructor(initialCapacity: number)
            /**
             * Constructs an empty insertion-ordered <tt>LinkedHashMap</tt> instance
             * with the default initial capacity (16) and load factor (0.75).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an insertion-ordered <tt>LinkedHashMap</tt> instance with
             * the same mappings as the specified map.  The <tt>LinkedHashMap</tt>
             * instance is created with a default load factor (0.75) and an initial
             * capacity sufficient to hold the mappings in the specified map.
             */
            // @ts-ignore
            constructor(m: java.util.Map)
            /**
             * Constructs an empty <tt>LinkedHashMap</tt> instance with the
             * specified initial capacity, load factor and ordering mode.
             */
            // @ts-ignore
            constructor(initialCapacity: number, loadFactor: number, accessOrder: boolean)
            /**
             * Returns <tt>true</tt> if this map maps one or more keys to the
             * specified value.
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object): boolean;
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
             * {@inheritDoc}
             */
            // @ts-ignore
            public getOrDefault(key: java.lang.Object, defaultValue: java.lang.Object): java.lang.Object;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Returns <tt>true</tt> if this map should remove its eldest entry.
             * This method is invoked by <tt>put</tt> and <tt>putAll</tt> after
             * inserting a new entry into the map.  It provides the implementor
             * with the opportunity to remove the eldest entry each time a new one
             * is added.  This is useful if the map represents a cache: it allows
             * the map to reduce memory consumption by deleting stale entries.
             * <p>Sample use: this override will allow the map to grow up to 100
             * entries and then delete the eldest entry each time a new entry is
             * added, maintaining a steady state of 100 entries.
             * <pre>
             * private static final int MAX_ENTRIES = 100;
             * protected boolean removeEldestEntry(Map.Entry eldest) {
             * return size() &gt; MAX_ENTRIES;
             * }
             * </pre>
             * <p>This method typically does not modify the map in any way,
             * instead allowing the map to modify itself as directed by its
             * return value.  It <i>is</i> permitted for this method to modify
             * the map directly, but if it does so, it <i>must</i> return
             * <tt>false</tt> (indicating that the map should not attempt any
             * further modification).  The effects of returning <tt>true</tt>
             * after modifying the map from within this method are unspecified.
             * <p>This implementation merely returns <tt>false</tt> (so that this
             * map acts like a normal map - the eldest element is never removed).
             */
            // @ts-ignore
            protected removeEldestEntry(eldest: java.util.Map.Entry): boolean;
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
             * Its {@link Spliterator} typically provides faster sequential
             * performance but much poorer parallel performance than that of
             * {@code HashMap}.
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
             * Its {@link Spliterator} typically provides faster sequential
             * performance but much poorer parallel performance than that of
             * {@code HashMap}.
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
             * Its {@link Spliterator} typically provides faster sequential
             * performance but much poorer parallel performance than that of
             * {@code HashMap}.
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
