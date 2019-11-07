// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface SortedSet {
            /**
             * Returns the comparator used to order the elements in this set,
             * or <tt>null</tt> if this set uses the {@linkplain Comparable
             * natural ordering} of its elements.
             */
            // @ts-ignore
             comparator(): java.util.Comparator;
            /**
             * Returns a view of the portion of this set whose elements range
             * from <tt>fromElement</tt>, inclusive, to <tt>toElement</tt>,
             * exclusive.  (If <tt>fromElement</tt> and <tt>toElement</tt> are
             * equal, the returned set is empty.)  The returned set is backed
             * by this set, so changes in the returned set are reflected in
             * this set, and vice-versa.  The returned set supports all
             * optional set operations that this set supports.
             * <p>The returned set will throw an <tt>IllegalArgumentException</tt>
             * on an attempt to insert an element outside its range.
             */
            // @ts-ignore
             subSet(fromElement: java.lang.Object, toElement: java.lang.Object): java.util.SortedSet;
            /**
             * Returns a view of the portion of this set whose elements are
             * strictly less than <tt>toElement</tt>.  The returned set is
             * backed by this set, so changes in the returned set are
             * reflected in this set, and vice-versa.  The returned set
             * supports all optional set operations that this set supports.
             * <p>The returned set will throw an <tt>IllegalArgumentException</tt>
             * on an attempt to insert an element outside its range.
             */
            // @ts-ignore
             headSet(toElement: java.lang.Object): java.util.SortedSet;
            /**
             * Returns a view of the portion of this set whose elements are
             * greater than or equal to <tt>fromElement</tt>.  The returned
             * set is backed by this set, so changes in the returned set are
             * reflected in this set, and vice-versa.  The returned set
             * supports all optional set operations that this set supports.
             * <p>The returned set will throw an <tt>IllegalArgumentException</tt>
             * on an attempt to insert an element outside its range.
             */
            // @ts-ignore
             tailSet(fromElement: java.lang.Object): java.util.SortedSet;
            /**
             * Returns the first (lowest) element currently in this set.
             */
            // @ts-ignore
             first(): java.lang.Object;
            /**
             * Returns the last (highest) element currently in this set.
             */
            // @ts-ignore
             last(): java.lang.Object;
            /**
             * Creates a {@code Spliterator} over the elements in this sorted set.
             * <p>The {@code Spliterator} reports {@link Spliterator#DISTINCT},
             * {@link Spliterator#SORTED} and {@link Spliterator#ORDERED}.
             * Implementations should document the reporting of additional
             * characteristic values.
             * <p>The spliterator's comparator (see
             * {@link java.util.Spliterator#getComparator()}) must be {@code null} if
             * the sorted set's comparator (see {@link #comparator()}) is {@code null}.
             * Otherwise, the spliterator's comparator must be the same as or impose the
             * same total ordering as the sorted set's comparator.
             */
            // @ts-ignore
             spliterator(): java.util.Spliterator;
        }
    }
}
