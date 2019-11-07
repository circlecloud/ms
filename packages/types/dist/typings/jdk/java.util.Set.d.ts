declare namespace java {
    namespace util {
        // @ts-ignore
        interface Set {
            /**
             * Returns the number of elements in this set (its cardinality).  If this
             * set contains more than <tt>Integer.MAX_VALUE</tt> elements, returns
             * <tt>Integer.MAX_VALUE</tt>.
             */
            // @ts-ignore
             size(): number;
            /**
             * Returns <tt>true</tt> if this set contains no elements.
             */
            // @ts-ignore
             isEmpty(): boolean;
            /**
             * Returns <tt>true</tt> if this set contains the specified element.
             * More formally, returns <tt>true</tt> if and only if this set
             * contains an element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             */
            // @ts-ignore
             contains(o: java.lang.Object): boolean;
            /**
             * Returns an iterator over the elements in this set.  The elements are
             * returned in no particular order (unless this set is an instance of some
             * class that provides a guarantee).
             */
            // @ts-ignore
             iterator(): java.util.Iterator;
            /**
             * Returns an array containing all of the elements in this set.
             * If this set makes any guarantees as to what order its elements
             * are returned by its iterator, this method must return the
             * elements in the same order.
             * <p>The returned array will be "safe" in that no references to it
             * are maintained by this set.  (In other words, this method must
             * allocate a new array even if this set is backed by an array).
             * The caller is thus free to modify the returned array.
             * <p>This method acts as bridge between array-based and collection-based
             * APIs.
             */
            // @ts-ignore
             toArray(): java.lang.Object[];
            /**
             * Returns an array containing all of the elements in this set; the
             * runtime type of the returned array is that of the specified array.
             * If the set fits in the specified array, it is returned therein.
             * Otherwise, a new array is allocated with the runtime type of the
             * specified array and the size of this set.
             * <p>If this set fits in the specified array with room to spare
             * (i.e., the array has more elements than this set), the element in
             * the array immediately following the end of the set is set to
             * <tt>null</tt>.  (This is useful in determining the length of this
             * set <i>only</i> if the caller knows that this set does not contain
             * any null elements.)
             * <p>If this set makes any guarantees as to what order its elements
             * are returned by its iterator, this method must return the elements
             * in the same order.
             * <p>Like the {@link #toArray()} method, this method acts as bridge between
             * array-based and collection-based APIs.  Further, this method allows
             * precise control over the runtime type of the output array, and may,
             * under certain circumstances, be used to save allocation costs.
             * <p>Suppose <tt>x</tt> is a set known to contain only strings.
             * The following code can be used to dump the set into a newly allocated
             * array of <tt>String</tt>:
             * <pre>
             * String[] y = x.toArray(new String[0]);</pre>
             * Note that <tt>toArray(new Object[0])</tt> is identical in function to
             * <tt>toArray()</tt>.
             */
            // @ts-ignore
             toArray(a: java.lang.Object): java.lang.Object[];
            /**
             * Adds the specified element to this set if it is not already present
             * (optional operation).  More formally, adds the specified element
             * <tt>e</tt> to this set if the set contains no element <tt>e2</tt>
             * such that
             * <tt>(e==null&nbsp;?&nbsp;e2==null&nbsp;:&nbsp;e.equals(e2))</tt>.
             * If this set already contains the element, the call leaves the set
             * unchanged and returns <tt>false</tt>.  In combination with the
             * restriction on constructors, this ensures that sets never contain
             * duplicate elements.
             * <p>The stipulation above does not imply that sets must accept all
             * elements; sets may refuse to add any particular element, including
             * <tt>null</tt>, and throw an exception, as described in the
             * specification for {@link Collection#add Collection.add}.
             * Individual set implementations should clearly document any
             * restrictions on the elements that they may contain.
             */
            // @ts-ignore
             add(e: java.lang.Object): boolean;
            /**
             * Removes the specified element from this set if it is present
             * (optional operation).  More formally, removes an element <tt>e</tt>
             * such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>, if
             * this set contains such an element.  Returns <tt>true</tt> if this set
             * contained the element (or equivalently, if this set changed as a
             * result of the call).  (This set will not contain the element once the
             * call returns.)
             */
            // @ts-ignore
             remove(o: java.lang.Object): boolean;
            /**
             * Returns <tt>true</tt> if this set contains all of the elements of the
             * specified collection.  If the specified collection is also a set, this
             * method returns <tt>true</tt> if it is a <i>subset</i> of this set.
             */
            // @ts-ignore
             containsAll(c: java.util.Collection): boolean;
            /**
             * Adds all of the elements in the specified collection to this set if
             * they're not already present (optional operation).  If the specified
             * collection is also a set, the <tt>addAll</tt> operation effectively
             * modifies this set so that its value is the <i>union</i> of the two
             * sets.  The behavior of this operation is undefined if the specified
             * collection is modified while the operation is in progress.
             */
            // @ts-ignore
             addAll(c: java.util.Collection): boolean;
            /**
             * Retains only the elements in this set that are contained in the
             * specified collection (optional operation).  In other words, removes
             * from this set all of its elements that are not contained in the
             * specified collection.  If the specified collection is also a set, this
             * operation effectively modifies this set so that its value is the
             * <i>intersection</i> of the two sets.
             */
            // @ts-ignore
             retainAll(c: java.util.Collection): boolean;
            /**
             * Removes from this set all of its elements that are contained in the
             * specified collection (optional operation).  If the specified
             * collection is also a set, this operation effectively modifies this
             * set so that its value is the <i>asymmetric set difference</i> of
             * the two sets.
             */
            // @ts-ignore
             removeAll(c: java.util.Collection): boolean;
            /**
             * Removes all of the elements from this set (optional operation).
             * The set will be empty after this call returns.
             */
            // @ts-ignore
             clear(): void;
            /**
             * Compares the specified object with this set for equality.  Returns
             * <tt>true</tt> if the specified object is also a set, the two sets
             * have the same size, and every member of the specified set is
             * contained in this set (or equivalently, every member of this set is
             * contained in the specified set).  This definition ensures that the
             * equals method works properly across different implementations of the
             * set interface.
             */
            // @ts-ignore
             equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this set.  The hash code of a set is
             * defined to be the sum of the hash codes of the elements in the set,
             * where the hash code of a <tt>null</tt> element is defined to be zero.
             * This ensures that <tt>s1.equals(s2)</tt> implies that
             * <tt>s1.hashCode()==s2.hashCode()</tt> for any two sets <tt>s1</tt>
             * and <tt>s2</tt>, as required by the general contract of
             * {@link Object#hashCode}.
             */
            // @ts-ignore
             hashCode(): number;
            /**
             * Creates a {@code Spliterator} over the elements in this set.
             * <p>The {@code Spliterator} reports {@link Spliterator#DISTINCT}.
             * Implementations should document the reporting of additional
             * characteristic values.
             */
            // @ts-ignore
             spliterator(): java.util.Spliterator;
        }
    }
}
