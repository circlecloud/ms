declare namespace java {
    namespace util {
        // @ts-ignore
         class TreeSet extends java.util.AbstractSet {
            /**
             * Constructs a new, empty tree set, sorted according to the
             * natural ordering of its elements.  All elements inserted into
             * the set must implement the {@link Comparable} interface.
             * Furthermore, all such elements must be <i>mutually
             * comparable</i>: {@code e1.compareTo(e2)} must not throw a
             * {@code ClassCastException} for any elements {@code e1} and
             * {@code e2} in the set.  If the user attempts to add an element
             * to the set that violates this constraint (for example, the user
             * attempts to add a string element to a set whose elements are
             * integers), the {@code add} call will throw a
             * {@code ClassCastException}.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new, empty tree set, sorted according to the specified
             * comparator.  All elements inserted into the set must be <i>mutually
             * comparable</i> by the specified comparator: {@code comparator.compare(e1,
             * e2)} must not throw a {@code ClassCastException} for any elements
             * {@code e1} and {@code e2} in the set.  If the user attempts to add
             * an element to the set that violates this constraint, the
             * {@code add} call will throw a {@code ClassCastException}.
             */
            // @ts-ignore
            constructor(comparator: java.util.Comparator)
            /**
             * Constructs a new tree set containing the elements in the specified
             * collection, sorted according to the <i>natural ordering</i> of its
             * elements.  All elements inserted into the set must implement the
             * {@link Comparable} interface.  Furthermore, all such elements must be
             * <i>mutually comparable</i>: {@code e1.compareTo(e2)} must not throw a
             * {@code ClassCastException} for any elements {@code e1} and
             * {@code e2} in the set.
             */
            // @ts-ignore
            constructor(c: java.util.Collection)
            /**
             * Constructs a new tree set containing the same elements and
             * using the same ordering as the specified sorted set.
             */
            // @ts-ignore
            constructor(s: java.util.SortedSet)
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
            // @ts-ignore
            public descendingSet(): java.util.NavigableSet;
            /**
             * Returns the number of elements in this set (its cardinality).
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
             * contains an element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             */
            // @ts-ignore
            public contains(o: java.lang.Object): boolean;
            /**
             * Adds the specified element to this set if it is not already present.
             * More formally, adds the specified element {@code e} to this set if
             * the set contains no element {@code e2} such that
             * <tt>(e==null&nbsp;?&nbsp;e2==null&nbsp;:&nbsp;e.equals(e2))</tt>.
             * If this set already contains the element, the call leaves the set
             * unchanged and returns {@code false}.
             */
            // @ts-ignore
            public add(e: java.lang.Object): boolean;
            /**
             * Removes the specified element from this set if it is present.
             * More formally, removes an element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>,
             * if this set contains such an element.  Returns {@code true} if
             * this set contained the element (or equivalently, if this set
             * changed as a result of the call).  (This set will not contain the
             * element once the call returns.)
             */
            // @ts-ignore
            public remove(o: java.lang.Object): boolean;
            /**
             * Removes all of the elements from this set.
             * The set will be empty after this call returns.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Adds all of the elements in the specified collection to this set.
             */
            // @ts-ignore
            public addAll(c: java.util.Collection): boolean;
            // @ts-ignore
            public subSet(fromElement: java.lang.Object, fromInclusive: boolean, toElement: java.lang.Object, toInclusive: boolean): java.util.NavigableSet;
            // @ts-ignore
            public headSet(toElement: java.lang.Object, inclusive: boolean): java.util.NavigableSet;
            // @ts-ignore
            public tailSet(fromElement: java.lang.Object, inclusive: boolean): java.util.NavigableSet;
            // @ts-ignore
            public subSet(fromElement: java.lang.Object, toElement: java.lang.Object): java.util.SortedSet;
            // @ts-ignore
            public headSet(toElement: java.lang.Object): java.util.SortedSet;
            // @ts-ignore
            public tailSet(fromElement: java.lang.Object): java.util.SortedSet;
            // @ts-ignore
            public comparator(): java.util.Comparator;
            // @ts-ignore
            public first(): java.lang.Object;
            // @ts-ignore
            public last(): java.lang.Object;
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
            /**
             * Returns a shallow copy of this {@code TreeSet} instance. (The elements
             * themselves are not cloned.)
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@link Spliterator} over the elements in this
             * set.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED},
             * {@link Spliterator#DISTINCT}, {@link Spliterator#SORTED}, and
             * {@link Spliterator#ORDERED}.  Overriding implementations should document
             * the reporting of additional characteristic values.
             * <p>The spliterator's comparator (see
             * {@link java.util.Spliterator#getComparator()}) is {@code null} if
             * the tree set's comparator (see {@link #comparator()}) is {@code null}.
             * Otherwise, the spliterator's comparator is the same as or imposes the
             * same total ordering as the tree set's comparator.
             */
            // @ts-ignore
            public spliterator(): java.util.Spliterator;
        }
    }
}
