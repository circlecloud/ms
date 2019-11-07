declare namespace java {
    namespace util {
        // @ts-ignore
         class ArrayDeque extends java.util.AbstractCollection {
            /**
             * Constructs an empty array deque with an initial capacity
             * sufficient to hold 16 elements.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an empty array deque with an initial capacity
             * sufficient to hold the specified number of elements.
             */
            // @ts-ignore
            constructor(numElements: number)
            /**
             * Constructs a deque containing the elements of the specified
             * collection, in the order they are returned by the collection's
             * iterator.  (The first element returned by the collection's
             * iterator becomes the first element, or <i>front</i> of the
             * deque.)
             */
            // @ts-ignore
            constructor(c: java.util.Collection)
            /**
             * Inserts the specified element at the front of this deque.
             */
            // @ts-ignore
            public addFirst(e: java.lang.Object): void;
            /**
             * Inserts the specified element at the end of this deque.
             * <p>This method is equivalent to {@link #add}.
             */
            // @ts-ignore
            public addLast(e: java.lang.Object): void;
            /**
             * Inserts the specified element at the front of this deque.
             */
            // @ts-ignore
            public offerFirst(e: java.lang.Object): boolean;
            /**
             * Inserts the specified element at the end of this deque.
             */
            // @ts-ignore
            public offerLast(e: java.lang.Object): boolean;
            // @ts-ignore
            public removeFirst(): java.lang.Object;
            // @ts-ignore
            public removeLast(): java.lang.Object;
            // @ts-ignore
            public pollFirst(): java.lang.Object;
            // @ts-ignore
            public pollLast(): java.lang.Object;
            // @ts-ignore
            public getFirst(): java.lang.Object;
            // @ts-ignore
            public getLast(): java.lang.Object;
            // @ts-ignore
            public peekFirst(): java.lang.Object;
            // @ts-ignore
            public peekLast(): java.lang.Object;
            /**
             * Removes the first occurrence of the specified element in this
             * deque (when traversing the deque from head to tail).
             * If the deque does not contain the element, it is unchanged.
             * More formally, removes the first element {@code e} such that
             * {@code o.equals(e)} (if such an element exists).
             * Returns {@code true} if this deque contained the specified element
             * (or equivalently, if this deque changed as a result of the call).
             */
            // @ts-ignore
            public removeFirstOccurrence(o: java.lang.Object): boolean;
            /**
             * Removes the last occurrence of the specified element in this
             * deque (when traversing the deque from head to tail).
             * If the deque does not contain the element, it is unchanged.
             * More formally, removes the last element {@code e} such that
             * {@code o.equals(e)} (if such an element exists).
             * Returns {@code true} if this deque contained the specified element
             * (or equivalently, if this deque changed as a result of the call).
             */
            // @ts-ignore
            public removeLastOccurrence(o: java.lang.Object): boolean;
            /**
             * Inserts the specified element at the end of this deque.
             * <p>This method is equivalent to {@link #addLast}.
             */
            // @ts-ignore
            public add(e: java.lang.Object): boolean;
            /**
             * Inserts the specified element at the end of this deque.
             * <p>This method is equivalent to {@link #offerLast}.
             */
            // @ts-ignore
            public offer(e: java.lang.Object): boolean;
            /**
             * Retrieves and removes the head of the queue represented by this deque.
             * This method differs from {@link #poll poll} only in that it throws an
             * exception if this deque is empty.
             * <p>This method is equivalent to {@link #removeFirst}.
             */
            // @ts-ignore
            public remove(): java.lang.Object;
            /**
             * Retrieves and removes the head of the queue represented by this deque
             * (in other words, the first element of this deque), or returns
             * {@code null} if this deque is empty.
             * <p>This method is equivalent to {@link #pollFirst}.
             */
            // @ts-ignore
            public poll(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the head of the queue represented by
             * this deque.  This method differs from {@link #peek peek} only in
             * that it throws an exception if this deque is empty.
             * <p>This method is equivalent to {@link #getFirst}.
             */
            // @ts-ignore
            public element(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the head of the queue represented by
             * this deque, or returns {@code null} if this deque is empty.
             * <p>This method is equivalent to {@link #peekFirst}.
             */
            // @ts-ignore
            public peek(): java.lang.Object;
            /**
             * Pushes an element onto the stack represented by this deque.  In other
             * words, inserts the element at the front of this deque.
             * <p>This method is equivalent to {@link #addFirst}.
             */
            // @ts-ignore
            public push(e: java.lang.Object): void;
            /**
             * Pops an element from the stack represented by this deque.  In other
             * words, removes and returns the first element of this deque.
             * <p>This method is equivalent to {@link #removeFirst()}.
             */
            // @ts-ignore
            public pop(): java.lang.Object;
            /**
             * Returns the number of elements in this deque.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Returns {@code true} if this deque contains no elements.
             */
            // @ts-ignore
            public isEmpty(): boolean;
            /**
             * Returns an iterator over the elements in this deque.  The elements
             * will be ordered from first (head) to last (tail).  This is the same
             * order that elements would be dequeued (via successive calls to
             * {@link #remove} or popped (via successive calls to {@link #pop}).
             */
            // @ts-ignore
            public iterator(): java.util.Iterator;
            // @ts-ignore
            public descendingIterator(): java.util.Iterator;
            /**
             * Returns {@code true} if this deque contains the specified element.
             * More formally, returns {@code true} if and only if this deque contains
             * at least one element {@code e} such that {@code o.equals(e)}.
             */
            // @ts-ignore
            public contains(o: java.lang.Object): boolean;
            /**
             * Removes a single instance of the specified element from this deque.
             * If the deque does not contain the element, it is unchanged.
             * More formally, removes the first element {@code e} such that
             * {@code o.equals(e)} (if such an element exists).
             * Returns {@code true} if this deque contained the specified element
             * (or equivalently, if this deque changed as a result of the call).
             * <p>This method is equivalent to {@link #removeFirstOccurrence(Object)}.
             */
            // @ts-ignore
            public remove(o: java.lang.Object): boolean;
            /**
             * Removes all of the elements from this deque.
             * The deque will be empty after this call returns.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Returns an array containing all of the elements in this deque
             * in proper sequence (from first to last element).
             * <p>The returned array will be "safe" in that no references to it are
             * maintained by this deque.  (In other words, this method must allocate
             * a new array).  The caller is thus free to modify the returned array.
             * <p>This method acts as bridge between array-based and collection-based
             * APIs.
             */
            // @ts-ignore
            public toArray(): java.lang.Object[];
            /**
             * Returns an array containing all of the elements in this deque in
             * proper sequence (from first to last element); the runtime type of the
             * returned array is that of the specified array.  If the deque fits in
             * the specified array, it is returned therein.  Otherwise, a new array
             * is allocated with the runtime type of the specified array and the
             * size of this deque.
             * <p>If this deque fits in the specified array with room to spare
             * (i.e., the array has more elements than this deque), the element in
             * the array immediately following the end of the deque is set to
             * {@code null}.
             * <p>Like the {@link #toArray()} method, this method acts as bridge between
             * array-based and collection-based APIs.  Further, this method allows
             * precise control over the runtime type of the output array, and may,
             * under certain circumstances, be used to save allocation costs.
             * <p>Suppose {@code x} is a deque known to contain only strings.
             * The following code can be used to dump the deque into a newly
             * allocated array of {@code String}:
             * <pre> {@code String[] y = x.toArray(new String[0]);}</pre>
             * Note that {@code toArray(new Object[0])} is identical in function to
             * {@code toArray()}.
             */
            // @ts-ignore
            public toArray(a: java.lang.Object): java.lang.Object[];
            /**
             * Returns a copy of this deque.
             */
            // @ts-ignore
            public clone(): java.util.ArrayDeque;
            /**
             * Creates a <em><a href="Spliterator.html#binding">late-binding</a></em>
             * and <em>fail-fast</em> {@link Spliterator} over the elements in this
             * deque.
             * <p>The {@code Spliterator} reports {@link Spliterator#SIZED},
             * {@link Spliterator#SUBSIZED}, {@link Spliterator#ORDERED}, and
             * {@link Spliterator#NONNULL}.  Overriding implementations should document
             * the reporting of additional characteristic values.
             */
            // @ts-ignore
            public spliterator(): java.util.Spliterator;
        }
    }
}
