declare namespace java {
    namespace util {
        // @ts-ignore
         class ArrayList extends java.util.AbstractList {
            /**
             * Constructs an empty list with the specified initial capacity.
             */
            // @ts-ignore
            constructor(initialCapacity: number)
            /**
             * Constructs an empty list with an initial capacity of ten.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a list containing the elements of the specified
             * collection, in the order they are returned by the collection's
             * iterator.
             */
            // @ts-ignore
            constructor(c: java.util.Collection)
            /**
             * Trims the capacity of this <tt>ArrayList</tt> instance to be the
             * list's current size.  An application can use this operation to minimize
             * the storage of an <tt>ArrayList</tt> instance.
             */
            // @ts-ignore
            public trimToSize(): void;
            /**
             * Increases the capacity of this <tt>ArrayList</tt> instance, if
             * necessary, to ensure that it can hold at least the number of elements
             * specified by the minimum capacity argument.
             */
            // @ts-ignore
            public ensureCapacity(minCapacity: number): void;
            /**
             * Returns the number of elements in this list.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns <tt>true</tt> if this list contains no elements.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Returns <tt>true</tt> if this list contains the specified element.
             * More formally, returns <tt>true</tt> if and only if this list contains
             * at least one element <tt>e</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             */
            // @ts-ignore
            public contains(o: java.lang.Object): boolean;
            /**
             * Returns the index of the first occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the lowest index <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            public indexOf(o: java.lang.Object): number;
            /**
             * Returns the index of the last occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the highest index <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            public lastIndexOf(o: java.lang.Object): number;
            /**
             * Returns a shallow copy of this <tt>ArrayList</tt> instance.  (The
             * elements themselves are not copied.)
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Returns an array containing all of the elements in this list
             * in proper sequence (from first to last element).
             * <p>The returned array will be "safe" in that no references to it are
             * maintained by this list.  (In other words, this method must allocate
             * a new array).  The caller is thus free to modify the returned array.
             * <p>This method acts as bridge between array-based and collection-based
             * APIs.
             */
            // @ts-ignore
            public toArray(): java.lang.Object[];
            /**
             * Returns an array containing all of the elements in this list in proper
             * sequence (from first to last element); the runtime type of the returned
             * array is that of the specified array.  If the list fits in the
             * specified array, it is returned therein.  Otherwise, a new array is
             * allocated with the runtime type of the specified array and the size of
             * this list.
             * <p>If the list fits in the specified array with room to spare
             * (i.e., the array has more elements than the list), the element in
             * the array immediately following the end of the collection is set to
             * <tt>null</tt>.  (This is useful in determining the length of the
             * list <i>only</i> if the caller knows that the list does not contain
             * any null elements.)
             */
            // @ts-ignore
            public toArray(a: java.lang.Object): java.lang.Object[];
            /**
             * Returns the element at the specified position in this list.
             */
            // @ts-ignore
            public get(index: number): java.lang.Object;
            /**
             * Replaces the element at the specified position in this list with
             * the specified element.
             */
            // @ts-ignore
            public set(index: number, element: java.lang.Object): java.lang.Object;
            /**
             * Appends the specified element to the end of this list.
             */
            // @ts-ignore
            public add(e: java.lang.Object): boolean;
            /**
             * Inserts the specified element at the specified position in this
             * list. Shifts the element currently at that position (if any) and
             * any subsequent elements to the right (adds one to their indices).
             */
            // @ts-ignore
            public add(index: number, element: java.lang.Object): void;
            /**
             * Removes the element at the specified position in this list.
             * Shifts any subsequent elements to the left (subtracts one from their
             * indices).
             */
            // @ts-ignore
            public remove(index: number): java.lang.Object;
            /**
             * Removes the first occurrence of the specified element from this list,
             * if it is present.  If the list does not contain the element, it is
             * unchanged.  More formally, removes the element with the lowest index
             * <tt>i</tt> such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>
             * (if such an element exists).  Returns <tt>true</tt> if this list
             * contained the specified element (or equivalently, if this list
             * changed as a result of the call).
             */
            // @ts-ignore
            public remove(o: java.lang.Object): boolean;
            /**
             * Removes all of the elements from this list.  The list will
             * be empty after this call returns.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Appends all of the elements in the specified collection to the end of
             * this list, in the order that they are returned by the
             * specified collection's Iterator.  The behavior of this operation is
             * undefined if the specified collection is modified while the operation
             * is in progress.  (This implies that the behavior of this call is
             * undefined if the specified collection is this list, and this
             * list is nonempty.)
             */
            // @ts-ignore
            public addAll(c: java.util.Collection): boolean;
            /**
             * Inserts all of the elements in the specified collection into this
             * list, starting at the specified position.  Shifts the element
             * currently at that position (if any) and any subsequent elements to
             * the right (increases their indices).  The new elements will appear
             * in the list in the order that they are returned by the
             * specified collection's iterator.
             */
            // @ts-ignore
            public addAll(index: number, c: java.util.Collection): boolean;
            /**
             * Removes from this list all of the elements whose index is between
             * {@code fromIndex}, inclusive, and {@code toIndex}, exclusive.
             * Shifts any succeeding elements to the left (reduces their index).
             * This call shortens the list by {@code (toIndex - fromIndex)} elements.
             * (If {@code toIndex==fromIndex}, this operation has no effect.)
             */
            // @ts-ignore
            protected removeRange(fromIndex: number, toIndex: number): void;
            /**
             * Removes from this list all of its elements that are contained in the
             * specified collection.
             */
            // @ts-ignore
            public removeAll(c: java.util.Collection): boolean;
            /**
             * Retains only the elements in this list that are contained in the
             * specified collection.  In other words, removes from this list all
             * of its elements that are not contained in the specified collection.
             */
            // @ts-ignore
            public retainAll(c: java.util.Collection): boolean;
            /**
             * Returns a list iterator over the elements in this list (in proper
             * sequence), starting at the specified position in the list.
             * The specified index indicates the first element that would be
             * returned by an initial call to {@link ListIterator#next next}.
             * An initial call to {@link ListIterator#previous previous} would
             * return the element with the specified index minus one.
             * <p>The returned list iterator is <a href="#fail-fast"><i>fail-fast</i></a>.
             */
            // @ts-ignore
            public listIterator(index: number): java.util.ListIterator;
            /**
             * Returns a list iterator over the elements in this list (in proper
             * sequence).
             * <p>The returned list iterator is <a href="#fail-fast"><i>fail-fast</i></a>.
             */
            // @ts-ignore
            public listIterator(): java.util.ListIterator;
            /**
             * Returns an iterator over the elements in this list in proper sequence.
             * <p>The returned iterator is <a href="#fail-fast"><i>fail-fast</i></a>.
             */
            // @ts-ignore
            public iterator(): java.util.Iterator;
            /**
             * Returns a view of the portion of this list between the specified
             * {@code fromIndex}, inclusive, and {@code toIndex}, exclusive.  (If
             * {@code fromIndex} and {@code toIndex} are equal, the returned list is
             * empty.)  The returned list is backed by this list, so non-structural
             * changes in the returned list are reflected in this list, and vice-versa.
             * The returned list supports all of the optional list operations.
             * <p>This method eliminates the need for explicit range operations (of
             * the sort that commonly exist for arrays).  Any operation that expects
             * a list can be used as a range operation by passing a subList view
             * instead of a whole list.  For example, the following idiom
             * removes a range of elements from a list:
             * <pre>
             * list.subList(from, to).clear();
             * </pre>
             * Similar idioms may be constructed for {@link #indexOf(Object)} and
             * {@link #lastIndexOf(Object)}, and all of the algorithms in the
             * {@link Collections} class can be applied to a subList.
             * <p>The semantics of the list returned by this method become undefined if
             * the backing list (i.e., this list) is <i>structurally modified</i> in
             * any way other than via the returned list.  (Structural modifications are
             * those that change the size of this list, or otherwise perturb it in such
             * a fashion that iterations in progress may yield incorrect results.)
             */
            // @ts-ignore
            public subList(fromIndex: number, toIndex: number): java.util.List;
            // @ts-ignore
            public forEach(action: java.util.function$.Consumer): void;
            /**
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@link Spliterator} over the elements in this
             * list.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, and {@link Spliterator#ORDERED}.
             * Overriding implementations should document the reporting of additional
             * characteristic values.
             */
            // @ts-ignore
            public spliterator(): java.util.Spliterator;
            // @ts-ignore
            public removeIf(filter: java.util.function$.Predicate): boolean;
            // @ts-ignore
            public replaceAll(operator: java.util.function$.UnaryOperator): void;
            // @ts-ignore
            public sort(c: java.util.Comparator): void;
        }
    }
}
