declare namespace java {
    namespace util {
        // @ts-ignore
         class LinkedList extends java.util.AbstractSequentialList {
            /**
             * Constructs an empty list.
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
             * Returns the first element in this list.
             */
            // @ts-ignore
            public getFirst(): java.lang.Object;
            /**
             * Returns the last element in this list.
             */
            // @ts-ignore
            public getLast(): java.lang.Object;
            /**
             * Removes and returns the first element from this list.
             */
            // @ts-ignore
            public removeFirst(): java.lang.Object;
            /**
             * Removes and returns the last element from this list.
             */
            // @ts-ignore
            public removeLast(): java.lang.Object;
            /**
             * Inserts the specified element at the beginning of this list.
             */
            // @ts-ignore
            public addFirst(e: java.lang.Object): void;
            /**
             * Appends the specified element to the end of this list.
             * <p>This method is equivalent to {@link #add}.
             */
            // @ts-ignore
            public addLast(e: java.lang.Object): void;
            /**
             * Returns {@code true} if this list contains the specified element.
             * More formally, returns {@code true} if and only if this list contains
             * at least one element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
             */
            // @ts-ignore
            public contains(o: java.lang.Object): boolean;
            /**
             * Returns the number of elements in this list.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Appends the specified element to the end of this list.
             * <p>This method is equivalent to {@link #addLast}.
             */
            // @ts-ignore
            public add(e: java.lang.Object): boolean;
            /**
             * Removes the first occurrence of the specified element from this list,
             * if it is present.  If this list does not contain the element, it is
             * unchanged.  More formally, removes the element with the lowest index
             * {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>
             * (if such an element exists).  Returns {@code true} if this list
             * contained the specified element (or equivalently, if this list
             * changed as a result of the call).
             */
            // @ts-ignore
            public remove(o: java.lang.Object): boolean;
            /**
             * Appends all of the elements in the specified collection to the end of
             * this list, in the order that they are returned by the specified
             * collection's iterator.  The behavior of this operation is undefined if
             * the specified collection is modified while the operation is in
             * progress.  (Note that this will occur if the specified collection is
             * this list, and it's nonempty.)
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
             * Removes all of the elements from this list.
             * The list will be empty after this call returns.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Returns the element at the specified position in this list.
             */
            // @ts-ignore
            public get(index: number): java.lang.Object;
            /**
             * Replaces the element at the specified position in this list with the
             * specified element.
             */
            // @ts-ignore
            public set(index: number, element: java.lang.Object): java.lang.Object;
            /**
             * Inserts the specified element at the specified position in this list.
             * Shifts the element currently at that position (if any) and any
             * subsequent elements to the right (adds one to their indices).
             */
            // @ts-ignore
            public add(index: number, element: java.lang.Object): void;
            /**
             * Removes the element at the specified position in this list.  Shifts any
             * subsequent elements to the left (subtracts one from their indices).
             * Returns the element that was removed from the list.
             */
            // @ts-ignore
            public remove(index: number): java.lang.Object;
            /**
             * Returns the index of the first occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the lowest index {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            public indexOf(o: java.lang.Object): number;
            /**
             * Returns the index of the last occurrence of the specified element
             * in this list, or -1 if this list does not contain the element.
             * More formally, returns the highest index {@code i} such that
             * <tt>(o==null&nbsp;?&nbsp;get(i)==null&nbsp;:&nbsp;o.equals(get(i)))</tt>,
             * or -1 if there is no such index.
             */
            // @ts-ignore
            public lastIndexOf(o: java.lang.Object): number;
            /**
             * Retrieves, but does not remove, the head (first element) of this list.
             */
            // @ts-ignore
            public peek(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the head (first element) of this list.
             */
            // @ts-ignore
            public element(): java.lang.Object;
            /**
             * Retrieves and removes the head (first element) of this list.
             */
            // @ts-ignore
            public poll(): java.lang.Object;
            /**
             * Retrieves and removes the head (first element) of this list.
             */
            // @ts-ignore
            public remove(): java.lang.Object;
            /**
             * Adds the specified element as the tail (last element) of this list.
             */
            // @ts-ignore
            public offer(e: java.lang.Object): boolean;
            /**
             * Inserts the specified element at the front of this list.
             */
            // @ts-ignore
            public offerFirst(e: java.lang.Object): boolean;
            /**
             * Inserts the specified element at the end of this list.
             */
            // @ts-ignore
            public offerLast(e: java.lang.Object): boolean;
            /**
             * Retrieves, but does not remove, the first element of this list,
             * or returns {@code null} if this list is empty.
             */
            // @ts-ignore
            public peekFirst(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the last element of this list,
             * or returns {@code null} if this list is empty.
             */
            // @ts-ignore
            public peekLast(): java.lang.Object;
            /**
             * Retrieves and removes the first element of this list,
             * or returns {@code null} if this list is empty.
             */
            // @ts-ignore
            public pollFirst(): java.lang.Object;
            /**
             * Retrieves and removes the last element of this list,
             * or returns {@code null} if this list is empty.
             */
            // @ts-ignore
            public pollLast(): java.lang.Object;
            /**
             * Pushes an element onto the stack represented by this list.  In other
             * words, inserts the element at the front of this list.
             * <p>This method is equivalent to {@link #addFirst}.
             */
            // @ts-ignore
            public push(e: java.lang.Object): void;
            /**
             * Pops an element from the stack represented by this list.  In other
             * words, removes and returns the first element of this list.
             * <p>This method is equivalent to {@link #removeFirst()}.
             */
            // @ts-ignore
            public pop(): java.lang.Object;
            /**
             * Removes the first occurrence of the specified element in this
             * list (when traversing the list from head to tail).  If the list
             * does not contain the element, it is unchanged.
             */
            // @ts-ignore
            public removeFirstOccurrence(o: java.lang.Object): boolean;
            /**
             * Removes the last occurrence of the specified element in this
             * list (when traversing the list from head to tail).  If the list
             * does not contain the element, it is unchanged.
             */
            // @ts-ignore
            public removeLastOccurrence(o: java.lang.Object): boolean;
            /**
             * Returns a list-iterator of the elements in this list (in proper
             * sequence), starting at the specified position in the list.
             * Obeys the general contract of {@code List.listIterator(int)}.<p>
             * The list-iterator is <i>fail-fast</i>: if the list is structurally
             * modified at any time after the Iterator is created, in any way except
             * through the list-iterator's own {@code remove} or {@code add}
             * methods, the list-iterator will throw a
             * {@code ConcurrentModificationException}.  Thus, in the face of
             * concurrent modification, the iterator fails quickly and cleanly, rather
             * than risking arbitrary, non-deterministic behavior at an undetermined
             * time in the future.
             */
            // @ts-ignore
            public listIterator(index: number): java.util.ListIterator;
            // @ts-ignore
            public descendingIterator(): java.util.Iterator;
            /**
             * Returns a shallow copy of this {@code LinkedList}. (The elements
             * themselves are not cloned.)
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
             * Returns an array containing all of the elements in this list in
             * proper sequence (from first to last element); the runtime type of
             * the returned array is that of the specified array.  If the list fits
             * in the specified array, it is returned therein.  Otherwise, a new
             * array is allocated with the runtime type of the specified array and
             * the size of this list.
             * <p>If the list fits in the specified array with room to spare (i.e.,
             * the array has more elements than the list), the element in the array
             * immediately following the end of the list is set to {@code null}.
             * (This is useful in determining the length of the list <i>only</i> if
             * the caller knows that the list does not contain any null elements.)
             * <p>Like the {@link #toArray()} method, this method acts as bridge between
             * array-based and collection-based APIs.  Further, this method allows
             * precise control over the runtime type of the output array, and may,
             * under certain circumstances, be used to save allocation costs.
             * <p>Suppose {@code x} is a list known to contain only strings.
             * The following code can be used to dump the list into a newly
             * allocated array of {@code String}:
             * <pre>
             * String[] y = x.toArray(new String[0]);</pre>
             * Note that {@code toArray(new Object[0])} is identical in function to
             * {@code toArray()}.
             */
            // @ts-ignore
            public toArray(a: java.lang.Object): java.lang.Object[];
            /**
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@link Spliterator} over the elements in this
             * list.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED} and
             * {@link Spliterator#ORDERED}.  Overriding implementations should document
             * the reporting of additional characteristic values.
             */
            // @ts-ignore
            public spliterator(): java.util.Spliterator;
        }
    }
}
