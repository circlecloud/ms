declare namespace java {
    namespace util {
        // @ts-ignore
        interface NavigableMap {
            /**
             * Returns a key-value mapping associated with the greatest key
             * strictly less than the given key, or {@code null} if there is
             * no such key.
             */
            // @ts-ignore
             lowerEntry(key: java.lang.Object): java.util.Map.Entry;
            /**
             * Returns the greatest key strictly less than the given key, or
             * {@code null} if there is no such key.
             */
            // @ts-ignore
             lowerKey(key: java.lang.Object): java.lang.Object;
            /**
             * Returns a key-value mapping associated with the greatest key
             * less than or equal to the given key, or {@code null} if there
             * is no such key.
             */
            // @ts-ignore
             floorEntry(key: java.lang.Object): java.util.Map.Entry;
            /**
             * Returns the greatest key less than or equal to the given key,
             * or {@code null} if there is no such key.
             */
            // @ts-ignore
             floorKey(key: java.lang.Object): java.lang.Object;
            /**
             * Returns a key-value mapping associated with the least key
             * greater than or equal to the given key, or {@code null} if
             * there is no such key.
             */
            // @ts-ignore
             ceilingEntry(key: java.lang.Object): java.util.Map.Entry;
            /**
             * Returns the least key greater than or equal to the given key,
             * or {@code null} if there is no such key.
             */
            // @ts-ignore
             ceilingKey(key: java.lang.Object): java.lang.Object;
            /**
             * Returns a key-value mapping associated with the least key
             * strictly greater than the given key, or {@code null} if there
             * is no such key.
             */
            // @ts-ignore
             higherEntry(key: java.lang.Object): java.util.Map.Entry;
            /**
             * Returns the least key strictly greater than the given key, or
             * {@code null} if there is no such key.
             */
            // @ts-ignore
             higherKey(key: java.lang.Object): java.lang.Object;
            /**
             * Returns a key-value mapping associated with the least
             * key in this map, or {@code null} if the map is empty.
             */
            // @ts-ignore
             firstEntry(): java.util.Map.Entry;
            /**
             * Returns a key-value mapping associated with the greatest
             * key in this map, or {@code null} if the map is empty.
             */
            // @ts-ignore
             lastEntry(): java.util.Map.Entry;
            /**
             * Removes and returns a key-value mapping associated with
             * the least key in this map, or {@code null} if the map is empty.
             */
            // @ts-ignore
             pollFirstEntry(): java.util.Map.Entry;
            /**
             * Removes and returns a key-value mapping associated with
             * the greatest key in this map, or {@code null} if the map is empty.
             */
            // @ts-ignore
             pollLastEntry(): java.util.Map.Entry;
            /**
             * Returns a reverse order view of the mappings contained in this map.
             * The descending map is backed by this map, so changes to the map are
             * reflected in the descending map, and vice-versa.  If either map is
             * modified while an iteration over a collection view of either map
             * is in progress (except through the iterator's own {@code remove}
             * operation), the results of the iteration are undefined.
             * <p>The returned map has an ordering equivalent to
             * <tt>{@link Collections#reverseOrder(Comparator) Collections.reverseOrder}(comparator())</tt>.
             * The expression {@code m.descendingMap().descendingMap()} returns a
             * view of {@code m} essentially equivalent to {@code m}.
             */
            // @ts-ignore
             descendingMap(): java.util.NavigableMap;
            /**
             * Returns a {@link NavigableSet} view of the keys contained in this map.
             * The set's iterator returns the keys in ascending order.
             * The set is backed by the map, so changes to the map are reflected in
             * the set, and vice-versa.  If the map is modified while an iteration
             * over the set is in progress (except through the iterator's own {@code
             * remove} operation), the results of the iteration are undefined.  The
             * set supports element removal, which removes the corresponding mapping
             * from the map, via the {@code Iterator.remove}, {@code Set.remove},
             * {@code removeAll}, {@code retainAll}, and {@code clear} operations.
             * It does not support the {@code add} or {@code addAll} operations.
             */
            // @ts-ignore
             navigableKeySet(): java.util.NavigableSet;
            /**
             * Returns a reverse order {@link NavigableSet} view of the keys contained in this map.
             * The set's iterator returns the keys in descending order.
             * The set is backed by the map, so changes to the map are reflected in
             * the set, and vice-versa.  If the map is modified while an iteration
             * over the set is in progress (except through the iterator's own {@code
             * remove} operation), the results of the iteration are undefined.  The
             * set supports element removal, which removes the corresponding mapping
             * from the map, via the {@code Iterator.remove}, {@code Set.remove},
             * {@code removeAll}, {@code retainAll}, and {@code clear} operations.
             * It does not support the {@code add} or {@code addAll} operations.
             */
            // @ts-ignore
             descendingKeySet(): java.util.NavigableSet;
            /**
             * Returns a view of the portion of this map whose keys range from
             * {@code fromKey} to {@code toKey}.  If {@code fromKey} and
             * {@code toKey} are equal, the returned map is empty unless
             * {@code fromInclusive} and {@code toInclusive} are both true.  The
             * returned map is backed by this map, so changes in the returned map are
             * reflected in this map, and vice-versa.  The returned map supports all
             * optional map operations that this map supports.
             * <p>The returned map will throw an {@code IllegalArgumentException}
             * on an attempt to insert a key outside of its range, or to construct a
             * submap either of whose endpoints lie outside its range.
             */
            // @ts-ignore
             subMap(fromKey: java.lang.Object, fromInclusive: boolean, toKey: java.lang.Object, toInclusive: boolean): java.util.NavigableMap;
            /**
             * Returns a view of the portion of this map whose keys are less than (or
             * equal to, if {@code inclusive} is true) {@code toKey}.  The returned
             * map is backed by this map, so changes in the returned map are reflected
             * in this map, and vice-versa.  The returned map supports all optional
             * map operations that this map supports.
             * <p>The returned map will throw an {@code IllegalArgumentException}
             * on an attempt to insert a key outside its range.
             */
            // @ts-ignore
             headMap(toKey: java.lang.Object, inclusive: boolean): java.util.NavigableMap;
            /**
             * Returns a view of the portion of this map whose keys are greater than (or
             * equal to, if {@code inclusive} is true) {@code fromKey}.  The returned
             * map is backed by this map, so changes in the returned map are reflected
             * in this map, and vice-versa.  The returned map supports all optional
             * map operations that this map supports.
             * <p>The returned map will throw an {@code IllegalArgumentException}
             * on an attempt to insert a key outside its range.
             */
            // @ts-ignore
             tailMap(fromKey: java.lang.Object, inclusive: boolean): java.util.NavigableMap;
            /**
             * {@inheritDoc}
             * <p>Equivalent to {@code subMap(fromKey, true, toKey, false)}.
             */
            // @ts-ignore
             subMap(fromKey: java.lang.Object, toKey: java.lang.Object): java.util.SortedMap;
            /**
             * {@inheritDoc}
             * <p>Equivalent to {@code headMap(toKey, false)}.
             */
            // @ts-ignore
             headMap(toKey: java.lang.Object): java.util.SortedMap;
            /**
             * {@inheritDoc}
             * <p>Equivalent to {@code tailMap(fromKey, true)}.
             */
            // @ts-ignore
             tailMap(fromKey: java.lang.Object): java.util.SortedMap;
        }
    }
}
