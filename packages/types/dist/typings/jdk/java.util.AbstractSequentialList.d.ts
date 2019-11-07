// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class AbstractSequentialList extends java.util.AbstractList {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the element at the specified position in this list.
             * <p>This implementation first gets a list iterator pointing to the
             * indexed element (with <tt>listIterator(index)</tt>).  Then, it gets
             * the element using <tt>ListIterator.next</tt> and returns it.
             */
            // @ts-ignore
            public get(index: number): java.lang.Object;
            /**
             * Replaces the element at the specified position in this list with the
             * specified element (optional operation).
             * <p>This implementation first gets a list iterator pointing to the
             * indexed element (with <tt>listIterator(index)</tt>).  Then, it gets
             * the current element using <tt>ListIterator.next</tt> and replaces it
             * with <tt>ListIterator.set</tt>.
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> if the list iterator does not
             * implement the <tt>set</tt> operation.
             */
            // @ts-ignore
            public set(index: number, element: java.lang.Object): java.lang.Object;
            /**
             * Inserts the specified element at the specified position in this list
             * (optional operation).  Shifts the element currently at that position
             * (if any) and any subsequent elements to the right (adds one to their
             * indices).
             * <p>This implementation first gets a list iterator pointing to the
             * indexed element (with <tt>listIterator(index)</tt>).  Then, it
             * inserts the specified element with <tt>ListIterator.add</tt>.
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> if the list iterator does not
             * implement the <tt>add</tt> operation.
             */
            // @ts-ignore
            public add(index: number, element: java.lang.Object): void;
            /**
             * Removes the element at the specified position in this list (optional
             * operation).  Shifts any subsequent elements to the left (subtracts one
             * from their indices).  Returns the element that was removed from the
             * list.
             * <p>This implementation first gets a list iterator pointing to the
             * indexed element (with <tt>listIterator(index)</tt>).  Then, it removes
             * the element with <tt>ListIterator.remove</tt>.
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> if the list iterator does not
             * implement the <tt>remove</tt> operation.
             */
            // @ts-ignore
            public remove(index: number): java.lang.Object;
            /**
             * Inserts all of the elements in the specified collection into this
             * list at the specified position (optional operation).  Shifts the
             * element currently at that position (if any) and any subsequent
             * elements to the right (increases their indices).  The new elements
             * will appear in this list in the order that they are returned by the
             * specified collection's iterator.  The behavior of this operation is
             * undefined if the specified collection is modified while the
             * operation is in progress.  (Note that this will occur if the specified
             * collection is this list, and it's nonempty.)
             * <p>This implementation gets an iterator over the specified collection and
             * a list iterator over this list pointing to the indexed element (with
             * <tt>listIterator(index)</tt>).  Then, it iterates over the specified
             * collection, inserting the elements obtained from the iterator into this
             * list, one at a time, using <tt>ListIterator.add</tt> followed by
             * <tt>ListIterator.next</tt> (to skip over the added element).
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> if the list iterator returned by
             * the <tt>listIterator</tt> method does not implement the <tt>add</tt>
             * operation.
             */
            // @ts-ignore
            public addAll(index: number, c: java.util.Collection): boolean;
            /**
             * Returns an iterator over the elements in this list (in proper
             * sequence).<p>
             * This implementation merely returns a list iterator over the list.
             */
            // @ts-ignore
            public iterator(): java.util.Iterator;
            /**
             * Returns a list iterator over the elements in this list (in proper
             * sequence).
             */
            // @ts-ignore
            public abstract listIterator(index: number): java.util.ListIterator;
        }
    }
}
