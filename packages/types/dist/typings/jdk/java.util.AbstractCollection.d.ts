declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class AbstractCollection extends java.lang.Object {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            /**
             * Returns an iterator over the elements contained in this collection.
             */
            // @ts-ignore
            public abstract iterator(): java.util.Iterator;
            // @ts-ignore
            public abstract size(): number;
            /**
             * {@inheritDoc}
             * <p>This implementation returns <tt>size() == 0</tt>.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * {@inheritDoc}
             * <p>This implementation iterates over the elements in the collection,
             * checking each element in turn for equality with the specified element.
             */
            // @ts-ignore
            public contains(o: java.lang.Object): boolean;
            /**
             * {@inheritDoc}
             * <p>This implementation returns an array containing all the elements
             * returned by this collection's iterator, in the same order, stored in
             * consecutive elements of the array, starting with index {@code 0}.
             * The length of the returned array is equal to the number of elements
             * returned by the iterator, even if the size of this collection changes
             * during iteration, as might happen if the collection permits
             * concurrent modification during iteration.  The {@code size} method is
             * called only as an optimization hint; the correct result is returned
             * even if the iterator returns a different number of elements.
             * <p>This method is equivalent to:
             * <pre> {@code
             * List<E> list = new ArrayList<E>(size());
             * for (E e : this)
             * list.add(e);
             * return list.toArray();
             * }</pre>
             */
            // @ts-ignore
            public toArray(): java.lang.Object[];
            /**
             * {@inheritDoc}
             * <p>This implementation returns an array containing all the elements
             * returned by this collection's iterator in the same order, stored in
             * consecutive elements of the array, starting with index {@code 0}.
             * If the number of elements returned by the iterator is too large to
             * fit into the specified array, then the elements are returned in a
             * newly allocated array with length equal to the number of elements
             * returned by the iterator, even if the size of this collection
             * changes during iteration, as might happen if the collection permits
             * concurrent modification during iteration.  The {@code size} method is
             * called only as an optimization hint; the correct result is returned
             * even if the iterator returns a different number of elements.
             * <p>This method is equivalent to:
             * <pre> {@code
             * List<E> list = new ArrayList<E>(size());
             * for (E e : this)
             * list.add(e);
             * return list.toArray(a);
             * }</pre>
             */
            // @ts-ignore
            public toArray(a: java.lang.Object): java.lang.Object[];
            /**
             * {@inheritDoc}
             * <p>This implementation always throws an
             * <tt>UnsupportedOperationException</tt>.
             */
            // @ts-ignore
            public add(e: java.lang.Object): boolean;
            /**
             * {@inheritDoc}
             * <p>This implementation iterates over the collection looking for the
             * specified element.  If it finds the element, it removes the element
             * from the collection using the iterator's remove method.
             * <p>Note that this implementation throws an
             * <tt>UnsupportedOperationException</tt> if the iterator returned by this
             * collection's iterator method does not implement the <tt>remove</tt>
             * method and this collection contains the specified object.
             */
            // @ts-ignore
            public remove(o: java.lang.Object): boolean;
            /**
             * {@inheritDoc}
             * <p>This implementation iterates over the specified collection,
             * checking each element returned by the iterator in turn to see
             * if it's contained in this collection.  If all elements are so
             * contained <tt>true</tt> is returned, otherwise <tt>false</tt>.
             */
            // @ts-ignore
            public containsAll(c: java.util.Collection): boolean;
            /**
             * {@inheritDoc}
             * <p>This implementation iterates over the specified collection, and adds
             * each object returned by the iterator to this collection, in turn.
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> unless <tt>add</tt> is
             * overridden (assuming the specified collection is non-empty).
             */
            // @ts-ignore
            public addAll(c: java.util.Collection): boolean;
            /**
             * {@inheritDoc}
             * <p>This implementation iterates over this collection, checking each
             * element returned by the iterator in turn to see if it's contained
             * in the specified collection.  If it's so contained, it's removed from
             * this collection with the iterator's <tt>remove</tt> method.
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> if the iterator returned by the
             * <tt>iterator</tt> method does not implement the <tt>remove</tt> method
             * and this collection contains one or more elements in common with the
             * specified collection.
             */
            // @ts-ignore
            public removeAll(c: java.util.Collection): boolean;
            /**
             * {@inheritDoc}
             * <p>This implementation iterates over this collection, checking each
             * element returned by the iterator in turn to see if it's contained
             * in the specified collection.  If it's not so contained, it's removed
             * from this collection with the iterator's <tt>remove</tt> method.
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> if the iterator returned by the
             * <tt>iterator</tt> method does not implement the <tt>remove</tt> method
             * and this collection contains one or more elements not present in the
             * specified collection.
             */
            // @ts-ignore
            public retainAll(c: java.util.Collection): boolean;
            /**
             * {@inheritDoc}
             * <p>This implementation iterates over this collection, removing each
             * element using the <tt>Iterator.remove</tt> operation.  Most
             * implementations will probably choose to override this method for
             * efficiency.
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> if the iterator returned by this
             * collection's <tt>iterator</tt> method does not implement the
             * <tt>remove</tt> method and this collection is non-empty.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Returns a string representation of this collection.  The string
             * representation consists of a list of the collection's elements in the
             * order they are returned by its iterator, enclosed in square brackets
             * (<tt>"[]"</tt>).  Adjacent elements are separated by the characters
             * <tt>", "</tt> (comma and space).  Elements are converted to strings as
             * by {@link String#valueOf(Object)}.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
