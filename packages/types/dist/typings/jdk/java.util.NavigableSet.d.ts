declare namespace java {
    namespace util {
        // @ts-ignore
        interface NavigableSet {
            /**
             * Returns the greatest element in this set strictly less than the
             * given element, or {@code null} if there is no such element.
             */
            // @ts-ignore
             lower(e: java.lang.Object): java.lang.Object;
            /**
             * Returns the greatest element in this set less than or equal to
             * the given element, or {@code null} if there is no such element.
             */
            // @ts-ignore
             floor(e: java.lang.Object): java.lang.Object;
            /**
             * Returns the least element in this set greater than or equal to
             * the given element, or {@code null} if there is no such element.
             */
            // @ts-ignore
             ceiling(e: java.lang.Object): java.lang.Object;
            /**
             * Returns the least element in this set strictly greater than the
             * given element, or {@code null} if there is no such element.
             */
            // @ts-ignore
             higher(e: java.lang.Object): java.lang.Object;
            /**
             * Retrieves and removes the first (lowest) element,
             * or returns {@code null} if this set is empty.
             */
            // @ts-ignore
             pollFirst(): java.lang.Object;
            /**
             * Retrieves and removes the last (highest) element,
             * or returns {@code null} if this set is empty.
             */
            // @ts-ignore
             pollLast(): java.lang.Object;
            /**
             * Returns an iterator over the elements in this set, in ascending order.
             */
            // @ts-ignore
             iterator(): java.util.Iterator;
            /**
             * Returns a reverse order view of the elements contained in this set.
             * The descending set is backed by this set, so changes to the set are
             * reflected in the descending set, and vice-versa.  If either set is
             * modified while an iteration over either set is in progress (except
             * through the iterator's own {@code remove} operation), the results of
             * the iteration are undefined.
             * <p>The returned set has an ordering equivalent to
             * <tt>{@link Collections#reverseOrder(Comparator) Collections.reverseOrder}(comparator())</tt>.
             * The expression {@code s.descendingSet().descendingSet()} returns a
             * view of {@code s} essentially equivalent to {@code s}.
             */
            // @ts-ignore
             descendingSet(): java.util.NavigableSet;
            /**
             * Returns an iterator over the elements in this set, in descending order.
             * Equivalent in effect to {@code descendingSet().iterator()}.
             */
            // @ts-ignore
             descendingIterator(): java.util.Iterator;
            /**
             * Returns a view of the portion of this set whose elements range from
             * {@code fromElement} to {@code toElement}.  If {@code fromElement} and
             * {@code toElement} are equal, the returned set is empty unless {@code
             * fromInclusive} and {@code toInclusive} are both true.  The returned set
             * is backed by this set, so changes in the returned set are reflected in
             * this set, and vice-versa.  The returned set supports all optional set
             * operations that this set supports.
             * <p>The returned set will throw an {@code IllegalArgumentException}
             * on an attempt to insert an element outside its range.
             */
            // @ts-ignore
             subSet(fromElement: java.lang.Object, fromInclusive: boolean, toElement: java.lang.Object, toInclusive: boolean): java.util.NavigableSet;
            /**
             * Returns a view of the portion of this set whose elements are less than
             * (or equal to, if {@code inclusive} is true) {@code toElement}.  The
             * returned set is backed by this set, so changes in the returned set are
             * reflected in this set, and vice-versa.  The returned set supports all
             * optional set operations that this set supports.
             * <p>The returned set will throw an {@code IllegalArgumentException}
             * on an attempt to insert an element outside its range.
             */
            // @ts-ignore
             headSet(toElement: java.lang.Object, inclusive: boolean): java.util.NavigableSet;
            /**
             * Returns a view of the portion of this set whose elements are greater
             * than (or equal to, if {@code inclusive} is true) {@code fromElement}.
             * The returned set is backed by this set, so changes in the returned set
             * are reflected in this set, and vice-versa.  The returned set supports
             * all optional set operations that this set supports.
             * <p>The returned set will throw an {@code IllegalArgumentException}
             * on an attempt to insert an element outside its range.
             */
            // @ts-ignore
             tailSet(fromElement: java.lang.Object, inclusive: boolean): java.util.NavigableSet;
            /**
             * {@inheritDoc}
             * <p>Equivalent to {@code subSet(fromElement, true, toElement, false)}.
             */
            // @ts-ignore
             subSet(fromElement: java.lang.Object, toElement: java.lang.Object): java.util.SortedSet;
            /**
             * {@inheritDoc}
             * <p>Equivalent to {@code headSet(toElement, false)}.
             */
            // @ts-ignore
             headSet(toElement: java.lang.Object): java.util.SortedSet;
            /**
             * {@inheritDoc}
             * <p>Equivalent to {@code tailSet(fromElement, true)}.
             */
            // @ts-ignore
             tailSet(fromElement: java.lang.Object): java.util.SortedSet;
        }
    }
}
