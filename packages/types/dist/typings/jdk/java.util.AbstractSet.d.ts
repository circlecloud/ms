declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class AbstractSet extends java.util.AbstractCollection {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            /**
             * Compares the specified object with this set for equality.  Returns
             * <tt>true</tt> if the given object is also a set, the two sets have
             * the same size, and every member of the given set is contained in
             * this set.  This ensures that the <tt>equals</tt> method works
             * properly across different implementations of the <tt>Set</tt>
             * interface.<p>
             * This implementation first checks if the specified object is this
             * set; if so it returns <tt>true</tt>.  Then, it checks if the
             * specified object is a set whose size is identical to the size of
             * this set; if not, it returns false.  If so, it returns
             * <tt>containsAll((Collection) o)</tt>.
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this set.  The hash code of a set is
             * defined to be the sum of the hash codes of the elements in the set,
             * where the hash code of a <tt>null</tt> element is defined to be zero.
             * This ensures that <tt>s1.equals(s2)</tt> implies that
             * <tt>s1.hashCode()==s2.hashCode()</tt> for any two sets <tt>s1</tt>
             * and <tt>s2</tt>, as required by the general contract of
             * {@link Object#hashCode}.
             * <p>This implementation iterates over the set, calling the
             * <tt>hashCode</tt> method on each element in the set, and adding up
             * the results.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Removes from this set all of its elements that are contained in the
             * specified collection (optional operation).  If the specified
             * collection is also a set, this operation effectively modifies this
             * set so that its value is the <i>asymmetric set difference</i> of
             * the two sets.
             * <p>This implementation determines which is the smaller of this set
             * and the specified collection, by invoking the <tt>size</tt>
             * method on each.  If this set has fewer elements, then the
             * implementation iterates over this set, checking each element
             * returned by the iterator in turn to see if it is contained in
             * the specified collection.  If it is so contained, it is removed
             * from this set with the iterator's <tt>remove</tt> method.  If
             * the specified collection has fewer elements, then the
             * implementation iterates over the specified collection, removing
             * from this set each element returned by the iterator, using this
             * set's <tt>remove</tt> method.
             * <p>Note that this implementation will throw an
             * <tt>UnsupportedOperationException</tt> if the iterator returned by the
             * <tt>iterator</tt> method does not implement the <tt>remove</tt> method.
             */
            // @ts-ignore
            public removeAll(c: java.util.Collection): boolean;
        }
    }
}
