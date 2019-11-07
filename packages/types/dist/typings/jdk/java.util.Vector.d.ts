declare namespace java {
    namespace util {
        // @ts-ignore
         class Vector extends java.util.AbstractList {
            /**
             * Constructs an empty vector with the specified initial capacity and
             * capacity increment.
             */
            // @ts-ignore
            constructor(initialCapacity: number, capacityIncrement: number)
            /**
             * Constructs an empty vector with the specified initial capacity and
             * with its capacity increment equal to zero.
             */
            // @ts-ignore
            constructor(initialCapacity: number)
            /**
             * Constructs an empty vector so that its internal data array
             * has size {@code 10} and its standard capacity increment is
             * zero.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a vector containing the elements of the specified
             * collection, in the order they are returned by the collection's
             * iterator.
             */
            // @ts-ignore
            constructor(c: java.util.Collection)
            // @ts-ignore
            protected elementData: java.lang.Object[];
            // @ts-ignore
            protected elementCount: number;
            // @ts-ignore
            protected capacityIncrement: number;
            /**
             * Copies the components of this vector into the specified array.
             * The item at index {@code k} in this vector is copied into
             * component {@code k} of {@code anArray}.
             */
            // @ts-ignore
            public copyInto(anArray: java.lang.Object): void;
            /**
             * Trims the capacity of this vector to be the vector's current
             * size. If the capacity of this vector is larger than its current
             * size, then the capacity is changed to equal the size by replacing
             * its internal data array, kept in the field {@code elementData},
             * with a smaller one. An application can use this operation to
             * minimize the storage of a vector.
             */
            // @ts-ignore
            public trimToSize(): void;
            /**
             * Increases the capacity of this vector, if necessary, to ensure
             * that it can hold at least the number of components specified by
             * the minimum capacity argument.
             * <p>If the current capacity of this vector is less than
             * {@code minCapacity}, then its capacity is increased by replacing its
             * internal data array, kept in the field {@code elementData}, with a
             * larger one.  The size of the new data array will be the old size plus
             * {@code capacityIncrement}, unless the value of
             * {@code capacityIncrement} is less than or equal to zero, in which case
             * the new capacity will be twice the old capacity; but if this new size
             * is still smaller than {@code minCapacity}, then the new capacity will
             * be {@code minCapacity}.
             */
            // @ts-ignore
            public ensureCapacity(minCapacity: number): void;
            /**
             * Sets the size of this vector. If the new size is greater than the
             * current size, new {@code null} items are added to the end of
             * the vector. If the new size is less than the current size, all
             * components at index {@code newSize} and greater are discarded.
             */
            // @ts-ignore
            public setSize(newSize: number): void;
            /**
             * Returns the current capacity of this vector.
             */
            // @ts-ignore
            public capacity(): number;
            /**
             * Returns the number of components in this vector.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Tests if this vector has no components.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Returns an enumeration of the components of this vector. The
             * returned {@code Enumeration} object will generate all items in
             * this vector. The first item generated is the item at index {@code 0},
             * then the item at index {@code 1}, and so on.
             */
            // @ts-ignore
            public elements(): java.util.Enumeration;
            /**
             * Returns {@code true} if this vector contains the specified element.
             * More formally, returns {@code true} if and only if this vector
             * contains at least one element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             */
            // @ts-ignore
            public contains(o: java.lang.Object): boolean;
            /**
             * Returns the index of the first occurrence of the specified element
             * in this vector, or -1 if this vector does not contain the element.
             * More formally, returns the lowest index {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            public indexOf(o: java.lang.Object): number;
            /**
             * Returns the index of the first occurrence of the specified element in
             * this vector, searching forwards from {@code index}, or returns -1 if
             * the element is not found.
             * More formally, returns the lowest index {@code i} such that
             * <tt>(i&nbsp;&gt;=&nbsp;index&nbsp;&amp;&amp;&nbsp;(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i))))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            public indexOf(o: java.lang.Object, index: number): number;
            /**
             * Returns the index of the last occurrence of the specified element
             * in this vector, or -1 if this vector does not contain the element.
             * More formally, returns the highest index {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            public lastIndexOf(o: java.lang.Object): number;
            /**
             * Returns the index of the last occurrence of the specified element in
             * this vector, searching backwards from {@code index}, or returns -1 if
             * the element is not found.
             * More formally, returns the highest index {@code i} such that
             * <tt>(i&nbsp;&lt;=&nbsp;index&nbsp;&amp;&amp;&nbsp;(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i))))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            public lastIndexOf(o: java.lang.Object, index: number): number;
            /**
             * Returns the component at the specified index.
             * <p>This method is identical in functionality to the {@link #get(int)}
             * method (which is part of the {@link List} interface).
             */
            // @ts-ignore
            public elementAt(index: number): java.lang.Object;
            /**
             * Returns the first component (the item at index {@code 0}) of
             * this vector.
             */
            // @ts-ignore
            public firstElement(): java.lang.Object;
            /**
             * Returns the last component of the vector.
             */
            // @ts-ignore
            public lastElement(): java.lang.Object;
            /**
             * Sets the component at the specified {@code index} of this
             * vector to be the specified object. The previous component at that
             * position is discarded.
             * <p>The index must be a value greater than or equal to {@code 0}
             * and less than the current size of the vector.
             * <p>This method is identical in functionality to the
             * {@link #set(int, Object) set(int, E)}
             * method (which is part of the {@link List} interface). Note that the
             * {@code set} method reverses the order of the parameters, to more closely
             * match array usage.  Note also that the {@code set} method returns the
             * old value that was stored at the specified position.
             */
            // @ts-ignore
            public setElementAt(obj: java.lang.Object, index: number): void;
            /**
             * Deletes the component at the specified index. Each component in
             * this vector with an index greater or equal to the specified
             * {@code index} is shifted downward to have an index one
             * smaller than the value it had previously. The size of this vector
             * is decreased by {@code 1}.
             * <p>The index must be a value greater than or equal to {@code 0}
             * and less than the current size of the vector.
             * <p>This method is identical in functionality to the {@link #remove(int)}
             * method (which is part of the {@link List} interface).  Note that the
             * {@code remove} method returns the old value that was stored at the
             * specified position.
             */
            // @ts-ignore
            public removeElementAt(index: number): void;
            /**
             * Inserts the specified object as a component in this vector at the
             * specified {@code index}. Each component in this vector with
             * an index greater or equal to the specified {@code index} is
             * shifted upward to have an index one greater than the value it had
             * previously.
             * <p>The index must be a value greater than or equal to {@code 0}
             * and less than or equal to the current size of the vector. (If the
             * index is equal to the current size of the vector, the new element
             * is appended to the Vector.)
             * <p>This method is identical in functionality to the
             * {@link #add(int, Object) add(int, E)}
             * method (which is part of the {@link List} interface).  Note that the
             * {@code add} method reverses the order of the parameters, to more closely
             * match array usage.
             */
            // @ts-ignore
            public insertElementAt(obj: java.lang.Object, index: number): void;
            /**
             * Adds the specified component to the end of this vector,
             * increasing its size by one. The capacity of this vector is
             * increased if its size becomes greater than its capacity.
             * <p>This method is identical in functionality to the
             * {@link #add(Object) add(E)}
             * method (which is part of the {@link List} interface).
             */
            // @ts-ignore
            public addElement(obj: java.lang.Object): void;
            /**
             * Removes the first (lowest-indexed) occurrence of the argument
             * from this vector. If the object is found in this vector, each
             * component in the vector with an index greater or equal to the
             * object's index is shifted downward to have an index one smaller
             * than the value it had previously.
             * <p>This method is identical in functionality to the
             * {@link #remove(Object)} method (which is part of the
             * {@link List} interface).
             */
            // @ts-ignore
            public removeElement(obj: java.lang.Object): boolean;
            /**
             * Removes all components from this vector and sets its size to zero.
             * <p>This method is identical in functionality to the {@link #clear}
             * method (which is part of the {@link List} interface).
             */
            // @ts-ignore
            public removeAllElements(): void;
            /**
             * Returns a clone of this vector. The copy will contain a
             * reference to a clone of the internal data array, not a reference
             * to the original internal data array of this {@code Vector} object.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Returns an array containing all of the elements in this Vector
             * in the correct order.
             */
            // @ts-ignore
            public toArray(): java.lang.Object[];
            /**
             * Returns an array containing all of the elements in this Vector in the
             * correct order; the runtime type of the returned array is that of the
             * specified array.  If the Vector fits in the specified array, it is
             * returned therein.  Otherwise, a new array is allocated with the runtime
             * type of the specified array and the size of this Vector.
             * <p>If the Vector fits in the specified array with room to spare
             * (i.e., the array has more elements than the Vector),
             * the element in the array immediately following the end of the
             * Vector is set to null.  (This is useful in determining the length
             * of the Vector <em>only</em> if the caller knows that the Vector
             * does not contain any null elements.)
             */
            // @ts-ignore
            public toArray(a: java.lang.Object): java.lang.Object[];
            /**
             * Returns the element at the specified position in this Vector.
             */
            // @ts-ignore
            public get(index: number): java.lang.Object;
            /**
             * Replaces the element at the specified position in this Vector with the
             * specified element.
             */
            // @ts-ignore
            public set(index: number, element: java.lang.Object): java.lang.Object;
            /**
             * Appends the specified element to the end of this Vector.
             */
            // @ts-ignore
            public add(e: java.lang.Object): boolean;
            /**
             * Removes the first occurrence of the specified element in this Vector
             * If the Vector does not contain the element, it is unchanged.  More
             * formally, removes the element with the lowest index i such that
             * {@code (o==null ? get(i)==null : o.equals(get(i)))} (if such
             * an element exists).
             */
            // @ts-ignore
            public remove(o: java.lang.Object): boolean;
            /**
             * Inserts the specified element at the specified position in this Vector.
             * Shifts the element currently at that position (if any) and any
             * subsequent elements to the right (adds one to their indices).
             */
            // @ts-ignore
            public add(index: number, element: java.lang.Object): void;
            /**
             * Removes the element at the specified position in this Vector.
             * Shifts any subsequent elements to the left (subtracts one from their
             * indices).  Returns the element that was removed from the Vector.
             */
            // @ts-ignore
            public remove(index: number): java.lang.Object;
            /**
             * Removes all of the elements from this Vector.  The Vector will
             * be empty after this call returns (unless it throws an exception).
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Returns true if this Vector contains all of the elements in the
             * specified Collection.
             */
            // @ts-ignore
            public containsAll(c: java.util.Collection): boolean;
            /**
             * Appends all of the elements in the specified Collection to the end of
             * this Vector, in the order that they are returned by the specified
             * Collection's Iterator.  The behavior of this operation is undefined if
             * the specified Collection is modified while the operation is in progress.
             * (This implies that the behavior of this call is undefined if the
             * specified Collection is this Vector, and this Vector is nonempty.)
             */
            // @ts-ignore
            public addAll(c: java.util.Collection): boolean;
            /**
             * Removes from this Vector all of its elements that are contained in the
             * specified Collection.
             */
            // @ts-ignore
            public removeAll(c: java.util.Collection): boolean;
            /**
             * Retains only the elements in this Vector that are contained in the
             * specified Collection.  In other words, removes from this Vector all
             * of its elements that are not contained in the specified Collection.
             */
            // @ts-ignore
            public retainAll(c: java.util.Collection): boolean;
            /**
             * Inserts all of the elements in the specified Collection into this
             * Vector at the specified position.  Shifts the element currently at
             * that position (if any) and any subsequent elements to the right
             * (increases their indices).  The new elements will appear in the Vector
             * in the order that they are returned by the specified Collection's
             * iterator.
             */
            // @ts-ignore
            public addAll(index: number, c: java.util.Collection): boolean;
            /**
             * Compares the specified Object with this Vector for equality.  Returns
             * true if and only if the specified Object is also a List, both Lists
             * have the same size, and all corresponding pairs of elements in the two
             * Lists are <em>equal</em>.  (Two elements {@code e1} and
             * {@code e2} are <em>equal</em> if {@code (e1==null ? e2==null :
             * e1.equals(e2))}.)  In other words, two Lists are defined to be
             * equal if they contain the same elements in the same order.
             */
            // @ts-ignore
            public equals(o: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this Vector.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a string representation of this Vector, containing
             * the String representation of each element.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a view of the portion of this List between fromIndex,
             * inclusive, and toIndex, exclusive.  (If fromIndex and toIndex are
             * equal, the returned List is empty.)  The returned List is backed by this
             * List, so changes in the returned List are reflected in this List, and
             * vice-versa.  The returned List supports all of the optional List
             * operations supported by this List.
             * <p>This method eliminates the need for explicit range operations (of
             * the sort that commonly exist for arrays).  Any operation that expects
             * a List can be used as a range operation by operating on a subList view
             * instead of a whole List.  For example, the following idiom
             * removes a range of elements from a List:
             * <pre>
             * list.subList(from, to).clear();
             * </pre>
             * Similar idioms may be constructed for indexOf and lastIndexOf,
             * and all of the algorithms in the Collections class can be applied to
             * a subList.
             * <p>The semantics of the List returned by this method become undefined if
             * the backing list (i.e., this List) is <i>structurally modified</i> in
             * any way other than via the returned List.  (Structural modifications are
             * those that change the size of the List, or otherwise perturb it in such
             * a fashion that iterations in progress may yield incorrect results.)
             */
            // @ts-ignore
            public subList(fromIndex: number, toIndex: number): java.util.List;
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
            // @ts-ignore
            public forEach(action: java.util.function$.Consumer): void;
            // @ts-ignore
            public removeIf(filter: java.util.function$.Predicate): boolean;
            // @ts-ignore
            public replaceAll(operator: java.util.function$.UnaryOperator): void;
            // @ts-ignore
            public sort(c: java.util.Comparator): void;
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
        }
    }
}
