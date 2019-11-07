// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class IdentityHashMap extends java.util.AbstractMap {
            /**
             * Constructs a new, empty identity hash map with a default expected
             * maximum size (21).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new, empty map with the specified expected maximum size.
             * Putting more than the expected number of key-value mappings into
             * the map may cause the internal data structure to grow, which may be
             * somewhat time-consuming.
             */
            // @ts-ignore
            constructor(expectedMaxSize: number)
            /**
             * Constructs a new identity hash map containing the keys-value mappings
             * in the specified map.
             */
            // @ts-ignore
            constructor(m: java.util.Map)
            /**
             * Returns the number of key-value mappings in this identity hash map.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns <tt>true</tt> if this identity hash map contains no key-value
             * mappings.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code (key == k)},
             * then this method returns {@code v}; otherwise it returns
             * {@code null}.  (There can be at most one such mapping.)
             * <p>A return value of {@code null} does not <i>necessarily</i>
             * indicate that the map contains no mapping for the key; it's also
             * possible that the map explicitly maps the key to {@code null}.
             * The {@link #containsKey containsKey} operation may be used to
             * distinguish these two cases.
             */
            // @ts-ignore
            public get(key: java.lang.Object): java.lang.Object;
            /**
             * Tests whether the specified object reference is a key in this identity
             * hash map.
             */
            // @ts-ignore
            public containsKey(key: java.lang.Object): boolean;
            /**
             * Tests whether the specified object reference is a value in this identity
             * hash map.
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object): boolean;
            /**
             * Associates the specified value with the specified key in this identity
             * hash map.  If the map previously contained a mapping for the key, the
             * old value is replaced.
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
             * Removes the mapping for this key from this map if present.
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
             * Compares the specified object with this map for equality.  Returns
             * <tt>true</tt> if the given object is also a map and the two maps
             * represent identical object-reference mappings.  More formally, this
             * map is equal to another map <tt>m</tt> if and only if
             * <tt>this.entrySet().equals(m.entrySet())</tt>.
             * <p><b>Owing to the reference-equality-based semantics of this map it is
             * possible that the symmetry and transitivity requirements of the
             * <tt>Object.equals</tt> contract may be violated if this map is compared
             * to a normal map.  However, the <tt>Object.equals</tt> contract is
             * guaranteed to hold among <tt>IdentityHashMap</tt> instances.</b>
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this map.  The hash code of a map is
             * defined to be the sum of the hash codes of each entry in the map's
             * <tt>entrySet()</tt> view.  This ensures that <tt>m1.equals(m2)</tt>
             * implies that <tt>m1.hashCode()==m2.hashCode()</tt> for any two
             * <tt>IdentityHashMap</tt> instances <tt>m1</tt> and <tt>m2</tt>, as
             * required by the general contract of {@link Object#hashCode}.
             * <p><b>Owing to the reference-equality-based semantics of the
             * <tt>Map.Entry</tt> instances in the set returned by this map's
             * <tt>entrySet</tt> method, it is possible that the contractual
             * requirement of <tt>Object.hashCode</tt> mentioned in the previous
             * paragraph will be violated if one of the two objects being compared is
             * an <tt>IdentityHashMap</tt> instance and the other is a normal map.</b>
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a shallow copy of this identity hash map: the keys and values
             * themselves are not cloned.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Returns an identity-based set view of the keys contained in this map.
             * The set is backed by the map, so changes to the map are reflected in
             * the set, and vice-versa.  If the map is modified while an iteration
             * over the set is in progress, the results of the iteration are
             * undefined.  The set supports element removal, which removes the
             * corresponding mapping from the map, via the <tt>Iterator.remove</tt>,
             * <tt>Set.remove</tt>, <tt>removeAll</tt>, <tt>retainAll</tt>, and
             * <tt>clear</tt> methods.  It does not support the <tt>add</tt> or
             * <tt>addAll</tt> methods.
             * <p><b>While the object returned by this method implements the
             * <tt>Set</tt> interface, it does <i>not</i> obey <tt>Set's</tt> general
             * contract.  Like its backing map, the set returned by this method
             * defines element equality as reference-equality rather than
             * object-equality.  This affects the behavior of its <tt>contains</tt>,
             * <tt>remove</tt>, <tt>containsAll</tt>, <tt>equals</tt>, and
             * <tt>hashCode</tt> methods.</b>
             * <p><b>The <tt>equals</tt> method of the returned set returns <tt>true</tt>
             * only if the specified object is a set containing exactly the same
             * object references as the returned set.  The symmetry and transitivity
             * requirements of the <tt>Object.equals</tt> contract may be violated if
             * the set returned by this method is compared to a normal set.  However,
             * the <tt>Object.equals</tt> contract is guaranteed to hold among sets
             * returned by this method.</b>
             * <p>The <tt>hashCode</tt> method of the returned set returns the sum of
             * the <i>identity hashcodes</i> of the elements in the set, rather than
             * the sum of their hashcodes.  This is mandated by the change in the
             * semantics of the <tt>equals</tt> method, in order to enforce the
             * general contract of the <tt>Object.hashCode</tt> method among sets
             * returned by this method.
             */
            // @ts-ignore
            public keySet(): java.util.Set;
            /**
             * Returns a {@link Collection} view of the values contained in this map.
             * The collection is backed by the map, so changes to the map are
             * reflected in the collection, and vice-versa.  If the map is
             * modified while an iteration over the collection is in progress,
             * the results of the iteration are undefined.  The collection
             * supports element removal, which removes the corresponding
             * mapping from the map, via the <tt>Iterator.remove</tt>,
             * <tt>Collection.remove</tt>, <tt>removeAll</tt>,
             * <tt>retainAll</tt> and <tt>clear</tt> methods.  It does not
             * support the <tt>add</tt> or <tt>addAll</tt> methods.
             * <p><b>While the object returned by this method implements the
             * <tt>Collection</tt> interface, it does <i>not</i> obey
             * <tt>Collection's</tt> general contract.  Like its backing map,
             * the collection returned by this method defines element equality as
             * reference-equality rather than object-equality.  This affects the
             * behavior of its <tt>contains</tt>, <tt>remove</tt> and
             * <tt>containsAll</tt> methods.</b>
             */
            // @ts-ignore
            public values(): java.util.Collection;
            /**
             * Returns a {@link Set} view of the mappings contained in this map.
             * Each element in the returned set is a reference-equality-based
             * <tt>Map.Entry</tt>.  The set is backed by the map, so changes
             * to the map are reflected in the set, and vice-versa.  If the
             * map is modified while an iteration over the set is in progress,
             * the results of the iteration are undefined.  The set supports
             * element removal, which removes the corresponding mapping from
             * the map, via the <tt>Iterator.remove</tt>, <tt>Set.remove</tt>,
             * <tt>removeAll</tt>, <tt>retainAll</tt> and <tt>clear</tt>
             * methods.  It does not support the <tt>add</tt> or
             * <tt>addAll</tt> methods.
             * <p>Like the backing map, the <tt>Map.Entry</tt> objects in the set
             * returned by this method define key and value equality as
             * reference-equality rather than object-equality.  This affects the
             * behavior of the <tt>equals</tt> and <tt>hashCode</tt> methods of these
             * <tt>Map.Entry</tt> objects.  A reference-equality based <tt>Map.Entry
             * e</tt> is equal to an object <tt>o</tt> if and only if <tt>o</tt> is a
             * <tt>Map.Entry</tt> and <tt>e.getKey()==o.getKey() &amp;&amp;
             * e.getValue()==o.getValue()</tt>.  To accommodate these equals
             * semantics, the <tt>hashCode</tt> method returns
             * <tt>System.identityHashCode(e.getKey()) ^
             * System.identityHashCode(e.getValue())</tt>.
             * <p><b>Owing to the reference-equality-based semantics of the
             * <tt>Map.Entry</tt> instances in the set returned by this method,
             * it is possible that the symmetry and transitivity requirements of
             * the {@link Object#equals(Object)} contract may be violated if any of
             * the entries in the set is compared to a normal map entry, or if
             * the set returned by this method is compared to a set of normal map
             * entries (such as would be returned by a call to this method on a normal
             * map).  However, the <tt>Object.equals</tt> contract is guaranteed to
             * hold among identity-based map entries, and among sets of such entries.
             * </b>
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
