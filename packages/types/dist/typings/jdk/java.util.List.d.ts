// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface List {
            /**
             * Returns the number of elements in this list.  If this list contains
             * more than <tt>Integer.MAX_VALUE</tt> elements, returns
             * <tt>Integer.MAX_VALUE</tt>.
             */
            // @ts-ignore
             size(): number;
            /**
             * Returns <tt>true</tt> if this list contains no elements.
             */
            // @ts-ignore
             isEmpty(): boolean;
            /**
             * Returns <tt>true</tt> if this list contains the specified element.
             * More formally, returns <tt>true</tt> if and only if this list contains
             * at least one element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             */
            // @ts-ignore
             contains(o: java.lang.Object): boolean;
            /**
             * Returns an iterator over the elements in this list in proper sequence.
             */
            // @ts-ignore
             iterator(): java.util.Iterator;
            /**
             * Returns an array containing all of the elements in this list in proper
             * sequence (from first to last element).
             * <p>The returned array will be "safe" in that no references to it are
             * maintained by this list.  (In other words, this method must
             * allocate a new array even if this list is backed by an array).
             * The caller is thus free to modify the returned array.
             * <p>This method acts as bridge between array-based and collection-based
             * APIs.
             */
            // @ts-ignore
             toArray(): java.lang.Object[];
            /**
             * Returns an array containing all of the elements in this list in
             * proper sequence (from first to last element); the runtime type of
             * the returned array is that of the specified array.  If the list fits
             * in the specified array, it is returned therein.  Otherwise, a new
             * array is allocated with the runtime type of the specified array and
             * the size of this list.
             * <p>If the list fits in the specified array with room to spare (i.e.,
             * the array has more elements than the list), the element in the array
             * immediately following the end of the list is set to <tt>null</tt>.
             * (This is useful in determining the length of the list <i>only</i> if
             * the caller knows that the list does not contain any null elements.)
             * <p>Like the {@link #toArray()} method, this method acts as bridge between
             * array-based and collection-based APIs.  Further, this method allows
             * precise control over the runtime type of the output array, and may,
             * under certain circumstances, be used to save allocation costs.
             * <p>Suppose <tt>x</tt> is a list known to contain only strings.
             * The following code can be used to dump the list into a newly
             * allocated array of <tt>String</tt>:
             * <pre>{@code
             * String[] y = x.toArray(new String[0]);
             * }</pre>
             * Note that <tt>toArray(new Object[0])</tt> is identical in function to
             * <tt>toArray()</tt>.
             */
            // @ts-ignore
             toArray(a: java.lang.Object): java.lang.Object[];
            /**
             * Appends the specified element to the end of this list (optional
             * operation).
             * <p>Lists that support this operation may place limitations on what
             * elements may be added to this list.  In particular, some
             * lists will refuse to add null elements, and others will impose
             * restrictions on the type of elements that may be added.  List
             * classes should clearly specify in their documentation any restrictions
             * on what elements may be added.
             */
            // @ts-ignore
             add(e: java.lang.Object): boolean;
            /**
             * Removes the first occurrence of the specified element from this list,
             * if it is present (optional operation).  If this list does not contain
             * the element, it is unchanged.  More formally, removes the element with
             * the lowest index <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>
             * (if such an element exists).  Returns <tt>true</tt> if this list
             * contained the specified element (or equivalently, if this list changed
             * as a result of the call).
             */
            // @ts-ignore
             remove(o: java.lang.Object): boolean;
            /**
             * Returns <tt>true</tt> if this list contains all of the elements of the
             * specified collection.
             */
            // @ts-ignore
             containsAll(c: java.util.Collection): boolean;
            /**
             * Appends all of the elements in the specified collection to the end of
             * this list, in the order that they are returned by the specified
             * collection's iterator (optional operation).  The behavior of this
             * operation is undefined if the specified collection is modified while
             * the operation is in progress.  (Note that this will occur if the
             * specified collection is this list, and it's nonempty.)
             */
            // @ts-ignore
             addAll(c: java.util.Collection): boolean;
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
             */
            // @ts-ignore
             addAll(index: number, c: java.util.Collection): boolean;
            /**
             * Removes from this list all of its elements that are contained in the
             * specified collection (optional operation).
             */
            // @ts-ignore
             removeAll(c: java.util.Collection): boolean;
            /**
             * Retains only the elements in this list that are contained in the
             * specified collection (optional operation).  In other words, removes
             * from this list all of its elements that are not contained in the
             * specified collection.
             */
            // @ts-ignore
             retainAll(c: java.util.Collection): boolean;
            /**
             * Replaces each element of this list with the result of applying the
             * operator to that element.  Errors or runtime exceptions thrown by
             * the operator are relayed to the caller.
             */
            // @ts-ignore
             replaceAll(operator: java.util.function$.UnaryOperator): void;
            /**
             * Sorts this list according to the order induced by the specified
             * {@link Comparator}.
             * <p>All elements in this list must be <i>mutually comparable</i> using the
             * specified comparator (that is, {@code c.compare(e1, e2)} must not throw
             * a {@code ClassCastException} for any elements {@code e1} and {@code e2}
             * in the list).
             * <p>If the specified comparator is {@code null} then all elements in this
             * list must implement the {@link Comparable} interface and the elements'
             * {@linkplain Comparable natural ordering} should be used.
             * <p>This list must be modifiable, but need not be resizable.
             */
            // @ts-ignore
             sort(c: java.util.Comparator): void;
            /**
             * Removes all of the elements from this list (optional operation).
             * The list will be empty after this call returns.
             */
            // @ts-ignore
             clear(): void;
            /**
             * Compares the specified object with this list for equality.  Returns
             * <tt>true</tt> if and only if the specified object is also a list, both
             * lists have the same size, and all corresponding pairs of elements in
             * the two lists are <i>equal</i>.  (Two elements <tt>e1</tt> and
             * <tt>e2</tt> are <i>equal</i> if <tt>(e1==null ? e2==null :
             * e1.equals(e2))</tt>.)  In other words, two lists are defined to be
             * equal if they contain the same elements in the same order.  This
             * definition ensures that the equals method works properly across
             * different implementations of the <tt>List</tt> interface.
             */
            // @ts-ignore
             equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this list.  The hash code of a list
             * is defined to be the result of the following calculation:
             * <pre>{@code
             * int hashCode = 1;
             * for (E e : list)
             * hashCode = 31*hashCode + (e==null ? 0 : e.hashCode());
             * }</pre>
             * This ensures that <tt>list1.equals(list2)</tt> implies that
             * <tt>list1.hashCode()==list2.hashCode()</tt> for any two lists,
             * <tt>list1</tt> and <tt>list2</tt>, as required by the general
             * contract of {@link Object#hashCode}.
             */
            // @ts-ignore
             hashCode(): number;
            /**
             * Returns the element at the specified position in this list.
             */
            // @ts-ignore
             get(index: number): java.lang.Object;
            /**
             * Replaces the element at the specified position in this list with the
             * specified element (optional operation).
             */
            // @ts-ignore
             set(index: number, element: java.lang.Object): java.lang.Object;
            /**
             * Inserts the specified element at the specified position in this list
             * (optional operation).  Shifts the element currently at that position
             * (if any) and any subsequent elements to the right (adds one to their
             * indices).
             */
            // @ts-ignore
             add(index: number, element: java.lang.Object): void;
            /**
             * Removes the element at the specified position in this list (optional
             * operation).  Shifts any subsequent elements to the left (subtracts one
             * from their indices).  Returns the element that was removed from the
             * list.
             */
            // @ts-ignore
             remove(index: number): java.lang.Object;
            /**
             * Returns the index of the first occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the lowest index <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
             indexOf(o: java.lang.Object): number;
            /**
             * Returns the index of the last occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the highest index <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
             lastIndexOf(o: java.lang.Object): number;
            /**
             * Returns a list iterator over the elements in this list (in proper
             * sequence).
             */
            // @ts-ignore
             listIterator(): java.util.ListIterator;
            /**
             * Returns a list iterator over the elements in this list (in proper
             * sequence), starting at the specified position in the list.
             * The specified index indicates the first element that would be
             * returned by an initial call to {@link ListIterator#next next}.
             * An initial call to {@link ListIterator#previous previous} would
             * return the element with the specified index minus one.
             */
            // @ts-ignore
             listIterator(index: number): java.util.ListIterator;
            /**
             * Returns a view of the portion of this list between the specified
             * <tt>fromIndex</tt>, inclusive, and <tt>toIndex</tt>, exclusive.  (If
             * <tt>fromIndex</tt> and <tt>toIndex</tt> are equal, the returned list is
             * empty.)  The returned list is backed by this list, so non-structural
             * changes in the returned list are reflected in this list, and vice-versa.
             * The returned list supports all of the optional list operations supported
             * by this list.<p>
             * This method eliminates the need for explicit range operations (of
             * the sort that commonly exist for arrays).  Any operation that expects
             * a list can be used as a range operation by passing a subList view
             * instead of a whole list.  For example, the following idiom
             * removes a range of elements from a list:
             * <pre>{@code
             * list.subList(from, to).clear();
             * }</pre>
             * Similar idioms may be constructed for <tt>indexOf</tt> and
             * <tt>lastIndexOf</tt>, and all of the algorithms in the
             * <tt>Collections</tt> class can be applied to a subList.<p>
             * The semantics of the list returned by this method become undefined if
             * the backing list (i.e., this list) is <i>structurally modified</i> in
             * any way other than via the returned list.  (Structural modifications are
             * those that change the size of this list, or otherwise perturb it in such
             * a fashion that iterations in progress may yield incorrect results.)
             */
            // @ts-ignore
             subList(fromIndex: number, toIndex: number): java.util.List;
            /**
             * Creates a {@link Spliterator} over the elements in this list.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED} and
             * {@link Spliterator#ORDERED}.  Implementations should document the
             * reporting of additional characteristic values.
             */
            // @ts-ignore
             spliterator(): java.util.Spliterator;
        }
    }
}
