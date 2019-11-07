declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ConcurrentSkipListSet extends java.util.AbstractSet {
                /**
                 * Constructs a new, empty set that orders its elements according to
                 * their {@linkplain Comparable natural ordering}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new, empty set that orders its elements according to
                 * the specified comparator.
                 */
                // @ts-ignore
                constructor(comparator: java.util.Comparator)
                /**
                 * Constructs a new set containing the elements in the specified
                 * collection, that orders its elements according to their
                 * {@linkplain Comparable natural ordering}.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                /**
                 * Constructs a new set containing the same elements and using the
                 * same ordering as the specified sorted set.
                 */
                // @ts-ignore
                constructor(s: java.util.SortedSet)
                /**
                 * Returns a shallow copy of this {@code ConcurrentSkipListSet}
                 * instance. (The elements themselves are not cloned.)
                 */
                // @ts-ignore
                public clone(): java.util.concurrent.ConcurrentSkipListSet;
                /**
                 * Returns the number of elements in this set.  If this set
                 * contains more than {@code Integer.MAX_VALUE} elements, it
                 * returns {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these sets, determining the current
                 * number of elements requires traversing them all to count them.
                 * Additionally, it is possible for the size to change during
                 * execution of this method, in which case the returned result
                 * will be inaccurate. Thus, this method is typically not very
                 * useful in concurrent applications.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Returns {@code true} if this set contains no elements.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Returns {@code true} if this set contains the specified element.
                 * More formally, returns {@code true} if and only if this set
                 * contains an element {@code e} such that {@code o.equals(e)}.
                 */
                // @ts-ignore
                public contains(o: java.lang.Object): boolean;
                /**
                 * Adds the specified element to this set if it is not already present.
                 * More formally, adds the specified element {@code e} to this set if
                 * the set contains no element {@code e2} such that {@code e.equals(e2)}.
                 * If this set already contains the element, the call leaves the set
                 * unchanged and returns {@code false}.
                 */
                // @ts-ignore
                public add(e: java.lang.Object): boolean;
                /**
                 * Removes the specified element from this set if it is present.
                 * More formally, removes an element {@code e} such that
                 * {@code o.equals(e)}, if this set contains such an element.
                 * Returns {@code true} if this set contained the element (or
                 * equivalently, if this set changed as a result of the call).
                 * (This set will not contain the element once the call returns.)
                 */
                // @ts-ignore
                public remove(o: java.lang.Object): boolean;
                /**
                 * Removes all of the elements from this set.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Returns an iterator over the elements in this set in ascending order.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
                /**
                 * Returns an iterator over the elements in this set in descending order.
                 */
                // @ts-ignore
                public descendingIterator(): java.util.Iterator;
                /**
                 * Compares the specified object with this set for equality.  Returns
                 * {@code true} if the specified object is also a set, the two sets
                 * have the same size, and every member of the specified set is
                 * contained in this set (or equivalently, every member of this set is
                 * contained in the specified set).  This definition ensures that the
                 * equals method works properly across different implementations of the
                 * set interface.
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                /**
                 * Removes from this set all of its elements that are contained in
                 * the specified collection.  If the specified collection is also
                 * a set, this operation effectively modifies this set so that its
                 * value is the <i>asymmetric set difference</i> of the two sets.
                 */
                // @ts-ignore
                public removeAll(c: java.util.Collection): boolean;
                // @ts-ignore
                public lower(e: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public floor(e: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public ceiling(e: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public higher(e: java.lang.Object): java.lang.Object;
                // @ts-ignore
                public pollFirst(): java.lang.Object;
                // @ts-ignore
                public pollLast(): java.lang.Object;
                // @ts-ignore
                public comparator(): java.util.Comparator;
                // @ts-ignore
                public first(): java.lang.Object;
                // @ts-ignore
                public last(): java.lang.Object;
                // @ts-ignore
                public subSet(fromElement: java.lang.Object, fromInclusive: boolean, toElement: java.lang.Object, toInclusive: boolean): java.util.NavigableSet;
                // @ts-ignore
                public headSet(toElement: java.lang.Object, inclusive: boolean): java.util.NavigableSet;
                // @ts-ignore
                public tailSet(fromElement: java.lang.Object, inclusive: boolean): java.util.NavigableSet;
                // @ts-ignore
                public subSet(fromElement: java.lang.Object, toElement: java.lang.Object): java.util.NavigableSet;
                // @ts-ignore
                public headSet(toElement: java.lang.Object): java.util.NavigableSet;
                // @ts-ignore
                public tailSet(fromElement: java.lang.Object): java.util.NavigableSet;
                /**
                 * Returns a reverse order view of the elements contained in this set.
                 * The descending set is backed by this set, so changes to the set are
                 * reflected in the descending set, and vice-versa.
                 * <p>The returned set has an ordering equivalent to
                 * {@link Collections#reverseOrder(Comparator) Collections.reverseOrder}{@code (comparator())}.
                 * The expression {@code s.descendingSet().descendingSet()} returns a
                 * view of {@code s} essentially equivalent to {@code s}.
                 */
                // @ts-ignore
                public descendingSet(): java.util.NavigableSet;
                /**
                 * Returns a {@link Spliterator} over the elements in this set.
                 * <p>The {@code Spliterator} reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#NONNULL}, {@link Spliterator#DISTINCT},
                 * {@link Spliterator#SORTED} and {@link Spliterator#ORDERED}, with an
                 * encounter order that is ascending order.  Overriding implementations
                 * should document the reporting of additional characteristic values.
                 * <p>The spliterator's comparator (see
                 * {@link java.util.Spliterator#getComparator()}) is {@code null} if
                 * the set's comparator (see {@link #comparator()}) is {@code null}.
                 * Otherwise, the spliterator's comparator is the same as or imposes the
                 * same total ordering as the set's comparator.
                 */
                // @ts-ignore
                public spliterator(): java.util.Spliterator;
            }
        }
    }
}
