// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Hashtable extends java.util.Dictionary {
            /**
             * Constructs a new, empty hashtable with the specified initial
             * capacity and the specified load factor.
             */
            // @ts-ignore
            constructor(initialCapacity: number, loadFactor: number)
            /**
             * Constructs a new, empty hashtable with the specified initial capacity
             * and default load factor (0.75).
             */
            // @ts-ignore
            constructor(initialCapacity: number)
            /**
             * Constructs a new, empty hashtable with a default initial capacity (11)
             * and load factor (0.75).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new hashtable with the same mappings as the given
             * Map.  The hashtable is created with an initial capacity sufficient to
             * hold the mappings in the given Map and a default load factor (0.75).
             */
            // @ts-ignore
            constructor(t: java.util.Map)
            /**
             * Returns the number of keys in this hashtable.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Tests if this hashtable maps no keys to values.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Returns an enumeration of the keys in this hashtable.
             */
            // @ts-ignore
            public keys(): java.util.Enumeration;
            /**
             * Returns an enumeration of the values in this hashtable.
             * Use the Enumeration methods on the returned object to fetch the elements
             * sequentially.
             */
            // @ts-ignore
            public elements(): java.util.Enumeration;
            /**
             * Tests if some key maps into the specified value in this hashtable.
             * This operation is more expensive than the {@link #containsKey
             * containsKey} method.
             * <p>Note that this method is identical in functionality to
             * {@link #containsValue containsValue}, (which is part of the
             * {@link Map} interface in the collections framework).
             */
            // @ts-ignore
            public contains(value: java.lang.Object): boolean;
            /**
             * Returns true if this hashtable maps one or more keys to this value.
             * <p>Note that this method is identical in functionality to {@link
             * #contains contains} (which predates the {@link Map} interface).
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object): boolean;
            /**
             * Tests if the specified object is a key in this hashtable.
             */
            // @ts-ignore
            public containsKey(key: java.lang.Object): boolean;
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code (key.equals(k))},
             * then this method returns {@code v}; otherwise it returns
             * {@code null}.  (There can be at most one such mapping.)
             */
            // @ts-ignore
            public get(key: java.lang.Object): java.lang.Object;
            /**
             * Increases the capacity of and internally reorganizes this
             * hashtable, in order to accommodate and access its entries more
             * efficiently.  This method is called automatically when the
             * number of keys in the hashtable exceeds this hashtable's capacity
             * and load factor.
             */
            // @ts-ignore
            protected rehash(): void;
            /**
             * Maps the specified <code>key</code> to the specified
             * <code>value</code> in this hashtable. Neither the key nor the
             * value can be <code>null</code>. <p>
             * The value can be retrieved by calling the <code>get</code> method
             * with a key that is equal to the original key.
             */
            // @ts-ignore
            public put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Removes the key (and its corresponding value) from this
             * hashtable. This method does nothing if the key is not in the hashtable.
             */
            // @ts-ignore
            public remove(key: java.lang.Object): java.lang.Object;
            /**
             * Copies all of the mappings from the specified map to this hashtable.
             * These mappings will replace any mappings that this hashtable had for any
             * of the keys currently in the specified map.
             */
            // @ts-ignore
            public putAll(t: java.util.Map): void;
            /**
             * Clears this hashtable so that it contains no keys.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Creates a shallow copy of this hashtable. All the structure of the
             * hashtable itself is copied, but the keys and values are not cloned.
             * This is a relatively expensive operation.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Returns a string representation of this <tt>Hashtable</tt> object
             * in the form of a set of entries, enclosed in braces and separated
             * by the ASCII characters "<tt>,&nbsp;</tt>" (comma and space). Each
             * entry is rendered as the key, an equals sign <tt>=</tt>, and the
             * associated element, where the <tt>toString</tt> method is used to
             * convert the key and element to strings.
             */
            // @ts-ignore
            public toString(): string;
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
             * Compares the specified Object with this Map for equality,
             * as per the definition in the Map interface.
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this Map as per the definition in the
             * Map interface.
             */
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public getOrDefault(key: java.lang.Object, defaultValue: java.lang.Object): java.lang.Object;
            // @ts-ignore
            public forEach(action: java.util.function$.BiConsumer): void;
            // @ts-ignore
            public replaceAll(func: java.util.function$.BiFunction): void;
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
        }
    }
}
