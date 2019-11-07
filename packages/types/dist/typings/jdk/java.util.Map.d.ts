declare namespace java {
    namespace util {
        // @ts-ignore
        interface Map {
            /**
             * Returns the number of key-value mappings in this map.  If the
             * map contains more than <tt>Integer.MAX_VALUE</tt> elements, returns
             * <tt>Integer.MAX_VALUE</tt>.
             */
            // @ts-ignore
             size(): number;
            /**
             * Returns <tt>true</tt> if this map contains no key-value mappings.
             */
            // @ts-ignore
             isEmpty(): boolean;
            /**
             * Returns <tt>true</tt> if this map contains a mapping for the specified
             * key.  More formally, returns <tt>true</tt> if and only if
             * this map contains a mapping for a key <tt>k</tt> such that
             * <tt>(key==null ? k==null : key.equals(k))</tt>.  (There can be
             * at most one such mapping.)
             */
            // @ts-ignore
             containsKey(key: java.lang.Object): boolean;
            /**
             * Returns <tt>true</tt> if this map maps one or more keys to the
             * specified value.  More formally, returns <tt>true</tt> if and only if
             * this map contains at least one mapping to a value <tt>v</tt> such that
             * <tt>(value==null ? v==null : value.equals(v))</tt>.  This operation
             * will probably require time linear in the map size for most
             * implementations of the <tt>Map</tt> interface.
             */
            // @ts-ignore
             containsValue(value: java.lang.Object): boolean;
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code (key==null ? k==null :
             * key.equals(k))}, then this method returns {@code v}; otherwise
             * it returns {@code null}.  (There can be at most one such mapping.)
             * <p>If this map permits null values, then a return value of
             * {@code null} does not <i>necessarily</i> indicate that the map
             * contains no mapping for the key; it's also possible that the map
             * explicitly maps the key to {@code null}.  The {@link #containsKey
             * containsKey} operation may be used to distinguish these two cases.
             */
            // @ts-ignore
             get(key: java.lang.Object): java.lang.Object;
            /**
             * Associates the specified value with the specified key in this map
             * (optional operation).  If the map previously contained a mapping for
             * the key, the old value is replaced by the specified value.  (A map
             * <tt>m</tt> is said to contain a mapping for a key <tt>k</tt> if and only
             * if {@link #containsKey(Object) m.containsKey(k)} would return
             * <tt>true</tt>.)
             */
            // @ts-ignore
             put(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Removes the mapping for a key from this map if it is present
             * (optional operation).   More formally, if this map contains a mapping
             * from key <tt>k</tt> to value <tt>v</tt> such that
             * <code>(key==null ?  k==null : key.equals(k))</code>, that mapping
             * is removed.  (The map can contain at most one such mapping.)
             * <p>Returns the value to which this map previously associated the key,
             * or <tt>null</tt> if the map contained no mapping for the key.
             * <p>If this map permits null values, then a return value of
             * <tt>null</tt> does not <i>necessarily</i> indicate that the map
             * contained no mapping for the key; it's also possible that the map
             * explicitly mapped the key to <tt>null</tt>.
             * <p>The map will not contain a mapping for the specified key once the
             * call returns.
             */
            // @ts-ignore
             remove(key: java.lang.Object): java.lang.Object;
            /**
             * Copies all of the mappings from the specified map to this map
             * (optional operation).  The effect of this call is equivalent to that
             * of calling {@link #put(Object,Object) put(k, v)} on this map once
             * for each mapping from key <tt>k</tt> to value <tt>v</tt> in the
             * specified map.  The behavior of this operation is undefined if the
             * specified map is modified while the operation is in progress.
             */
            // @ts-ignore
             putAll(m: java.util.Map): void;
            /**
             * Removes all of the mappings from this map (optional operation).
             * The map will be empty after this call returns.
             */
            // @ts-ignore
             clear(): void;
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
             keySet(): java.util.Set;
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
             values(): java.util.Collection;
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
             entrySet(): java.util.Set;
            /**
             * Compares the specified object with this map for equality.  Returns
             * <tt>true</tt> if the given object is also a map and the two maps
             * represent the same mappings.  More formally, two maps <tt>m1</tt> and
             * <tt>m2</tt> represent the same mappings if
             * <tt>m1.entrySet().equals(m2.entrySet())</tt>.  This ensures that the
             * <tt>equals</tt> method works properly across different implementations
             * of the <tt>Map</tt> interface.
             */
            // @ts-ignore
             equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this map.  The hash code of a map is
             * defined to be the sum of the hash codes of each entry in the map's
             * <tt>entrySet()</tt> view.  This ensures that <tt>m1.equals(m2)</tt>
             * implies that <tt>m1.hashCode()==m2.hashCode()</tt> for any two maps
             * <tt>m1</tt> and <tt>m2</tt>, as required by the general contract of
             * {@link Object#hashCode}.
             */
            // @ts-ignore
             hashCode(): number;
            /**
             * Returns the value to which the specified key is mapped, or
             * {@code defaultValue} if this map contains no mapping for the key.
             */
            // @ts-ignore
             getOrDefault(key: java.lang.Object, defaultValue: java.lang.Object): java.lang.Object;
            /**
             * Performs the given action for each entry in this map until all entries
             * have been processed or the action throws an exception.   Unless
             * otherwise specified by the implementing class, actions are performed in
             * the order of entry set iteration (if an iteration order is specified.)
             * Exceptions thrown by the action are relayed to the caller.
             */
            // @ts-ignore
             forEach(action: java.util.function$.BiConsumer): void;
            /**
             * Replaces each entry's value with the result of invoking the given
             * function on that entry until all entries have been processed or the
             * function throws an exception.  Exceptions thrown by the function are
             * relayed to the caller.
             */
            // @ts-ignore
             replaceAll(func: java.util.function$.BiFunction): void;
            /**
             * If the specified key is not already associated with a value (or is mapped
             * to {@code null}) associates it with the given value and returns
             * {@code null}, else returns the current value.
             */
            // @ts-ignore
             putIfAbsent(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * Removes the entry for the specified key only if it is currently
             * mapped to the specified value.
             */
            // @ts-ignore
             remove(key: java.lang.Object, value: java.lang.Object): boolean;
            /**
             * Replaces the entry for the specified key only if currently
             * mapped to the specified value.
             */
            // @ts-ignore
             replace(key: java.lang.Object, oldValue: java.lang.Object, newValue: java.lang.Object): boolean;
            /**
             * Replaces the entry for the specified key only if it is
             * currently mapped to some value.
             */
            // @ts-ignore
             replace(key: java.lang.Object, value: java.lang.Object): java.lang.Object;
            /**
             * If the specified key is not already associated with a value (or is mapped
             * to {@code null}), attempts to compute its value using the given mapping
             * function and enters it into this map unless {@code null}.
             * <p>If the function returns {@code null} no mapping is recorded. If
             * the function itself throws an (unchecked) exception, the
             * exception is rethrown, and no mapping is recorded.  The most
             * common usage is to construct a new object serving as an initial
             * mapped value or memoized result, as in:
             * <pre> {@code
             * map.computeIfAbsent(key, k -> new Value(f(k)));
             * }</pre>
             * <p>Or to implement a multi-value map, {@code Map<K,Collection<V>>},
             * supporting multiple values per key:
             * <pre> {@code
             * map.computeIfAbsent(key, k -> new HashSet<V>()).add(v);
             * }</pre>
             */
            // @ts-ignore
             computeIfAbsent(key: java.lang.Object, mappingFunction: java.util.function$.Function): java.lang.Object;
            /**
             * If the value for the specified key is present and non-null, attempts to
             * compute a new mapping given the key and its current mapped value.
             * <p>If the function returns {@code null}, the mapping is removed.  If the
             * function itself throws an (unchecked) exception, the exception is
             * rethrown, and the current mapping is left unchanged.
             */
            // @ts-ignore
             computeIfPresent(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            /**
             * Attempts to compute a mapping for the specified key and its current
             * mapped value (or {@code null} if there is no current mapping). For
             * example, to either create or append a {@code String} msg to a value
             * mapping:
             * <pre> {@code
             * map.compute(key, (k, v) -> (v == null) ? msg : v.concat(msg))}</pre>
             * (Method {@link #merge merge()} is often simpler to use for such purposes.)
             * <p>If the function returns {@code null}, the mapping is removed (or
             * remains absent if initially absent).  If the function itself throws an
             * (unchecked) exception, the exception is rethrown, and the current mapping
             * is left unchanged.
             */
            // @ts-ignore
             compute(key: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
            /**
             * If the specified key is not already associated with a value or is
             * associated with null, associates it with the given non-null value.
             * Otherwise, replaces the associated value with the results of the given
             * remapping function, or removes if the result is {@code null}. This
             * method may be of use when combining multiple mapped values for a key.
             * For example, to either create or append a {@code String msg} to a
             * value mapping:
             * <pre> {@code
             * map.merge(key, msg, String::concat)
             * }</pre>
             * <p>If the function returns {@code null} the mapping is removed.  If the
             * function itself throws an (unchecked) exception, the exception is
             * rethrown, and the current mapping is left unchanged.
             */
            // @ts-ignore
             merge(key: java.lang.Object, value: java.lang.Object, remappingFunction: java.util.function$.BiFunction): java.lang.Object;
        }
    }
}
