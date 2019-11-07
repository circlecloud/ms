// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface SortedMap {
            /**
             * Returns the comparator used to order the keys in this map, or
             * {@code null} if this map uses the {@linkplain Comparable
             * natural ordering} of its keys.
             */
            // @ts-ignore
             comparator(): java.util.Comparator;
            /**
             * Returns a view of the portion of this map whose keys range from
             * {@code fromKey}, inclusive, to {@code toKey}, exclusive.  (If
             * {@code fromKey} and {@code toKey} are equal, the returned map
             * is empty.)  The returned map is backed by this map, so changes
             * in the returned map are reflected in this map, and vice-versa.
             * The returned map supports all optional map operations that this
             * map supports.
             * <p>The returned map will throw an {@code IllegalArgumentException}
             * on an attempt to insert a key outside its range.
             */
            // @ts-ignore
             subMap(fromKey: java.lang.Object, toKey: java.lang.Object): java.util.SortedMap;
            /**
             * Returns a view of the portion of this map whose keys are
             * strictly less than {@code toKey}.  The returned map is backed
             * by this map, so changes in the returned map are reflected in
             * this map, and vice-versa.  The returned map supports all
             * optional map operations that this map supports.
             * <p>The returned map will throw an {@code IllegalArgumentException}
             * on an attempt to insert a key outside its range.
             */
            // @ts-ignore
             headMap(toKey: java.lang.Object): java.util.SortedMap;
            /**
             * Returns a view of the portion of this map whose keys are
             * greater than or equal to {@code fromKey}.  The returned map is
             * backed by this map, so changes in the returned map are
             * reflected in this map, and vice-versa.  The returned map
             * supports all optional map operations that this map supports.
             * <p>The returned map will throw an {@code IllegalArgumentException}
             * on an attempt to insert a key outside its range.
             */
            // @ts-ignore
             tailMap(fromKey: java.lang.Object): java.util.SortedMap;
            /**
             * Returns the first (lowest) key currently in this map.
             */
            // @ts-ignore
             firstKey(): java.lang.Object;
            /**
             * Returns the last (highest) key currently in this map.
             */
            // @ts-ignore
             lastKey(): java.lang.Object;
            /**
             * Returns a {@link Set} view of the keys contained in this map.
             * The set's iterator returns the keys in ascending order.
             * The set is backed by the map, so changes to the map are
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
             keySet(): java.util.Set;
            /**
             * Returns a {@link Collection} view of the values contained in this map.
             * The collection's iterator returns the values in ascending order
             * of the corresponding keys.
             * The collection is backed by the map, so changes to the map are
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
             values(): java.util.Collection;
            /**
             * Returns a {@link Set} view of the mappings contained in this map.
             * The set's iterator returns the entries in ascending key order.
             * The set is backed by the map, so changes to the map are
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
             entrySet(): java.util.Set;
        }
    }
}
