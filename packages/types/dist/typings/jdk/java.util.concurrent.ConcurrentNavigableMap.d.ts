declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface ConcurrentNavigableMap {
                // @ts-ignore
                 subMap(fromKey: java.lang.Object, fromInclusive: boolean, toKey: java.lang.Object, toInclusive: boolean): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                 headMap(toKey: java.lang.Object, inclusive: boolean): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                 tailMap(fromKey: java.lang.Object, inclusive: boolean): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                 subMap(fromKey: java.lang.Object, toKey: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                 headMap(toKey: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
                // @ts-ignore
                 tailMap(fromKey: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
                /**
                 * Returns a reverse order view of the mappings contained in this map.
                 * The descending map is backed by this map, so changes to the map are
                 * reflected in the descending map, and vice-versa.
                 * <p>The returned map has an ordering equivalent to
                 * {@link Collections#reverseOrder(Comparator) Collections.reverseOrder}{@code (comparator())}.
                 * The expression {@code m.descendingMap().descendingMap()} returns a
                 * view of {@code m} essentially equivalent to {@code m}.
                 */
                // @ts-ignore
                 descendingMap(): java.util.concurrent.ConcurrentNavigableMap;
                /**
                 * Returns a {@link NavigableSet} view of the keys contained in this map.
                 * The set's iterator returns the keys in ascending order.
                 * The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll}, and {@code clear}
                 * operations.  It does not support the {@code add} or {@code addAll}
                 * operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                 navigableKeySet(): java.util.NavigableSet;
                /**
                 * Returns a {@link NavigableSet} view of the keys contained in this map.
                 * The set's iterator returns the keys in ascending order.
                 * The set is backed by the map, so changes to the map are
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
                 keySet(): java.util.NavigableSet;
                /**
                 * Returns a reverse order {@link NavigableSet} view of the keys contained in this map.
                 * The set's iterator returns the keys in descending order.
                 * The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll}, and {@code clear}
                 * operations.  It does not support the {@code add} or {@code addAll}
                 * operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                 descendingKeySet(): java.util.NavigableSet;
            }
        }
    }
}
