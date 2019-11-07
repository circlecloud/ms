declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ConcurrentLinkedDeque extends java.util.AbstractCollection {
                /**
                 * Constructs an empty deque.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a deque initially containing the elements of
                 * the given collection, added in traversal order of the
                 * collection's iterator.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                /**
                 * Inserts the specified element at the front of this deque.
                 * As the deque is unbounded, this method will never throw
                 * {@link IllegalStateException}.
                 */
                // @ts-ignore
                public addFirst(e: java.lang.Object): void;
                /**
                 * Inserts the specified element at the end of this deque.
                 * As the deque is unbounded, this method will never throw
                 * {@link IllegalStateException}.
                 * <p>This method is equivalent to {@link #add}.
                 */
                // @ts-ignore
                public addLast(e: java.lang.Object): void;
                /**
                 * Inserts the specified element at the front of this deque.
                 * As the deque is unbounded, this method will never return {@code false}.
                 */
                // @ts-ignore
                public offerFirst(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element at the end of this deque.
                 * As the deque is unbounded, this method will never return {@code false}.
                 * <p>This method is equivalent to {@link #add}.
                 */
                // @ts-ignore
                public offerLast(e: java.lang.Object): boolean;
                // @ts-ignore
                public peekFirst(): java.lang.Object;
                // @ts-ignore
                public peekLast(): java.lang.Object;
                // @ts-ignore
                public getFirst(): java.lang.Object;
                // @ts-ignore
                public getLast(): java.lang.Object;
                // @ts-ignore
                public pollFirst(): java.lang.Object;
                // @ts-ignore
                public pollLast(): java.lang.Object;
                // @ts-ignore
                public removeFirst(): java.lang.Object;
                // @ts-ignore
                public removeLast(): java.lang.Object;
                /**
                 * Inserts the specified element at the tail of this deque.
                 * As the deque is unbounded, this method will never return {@code false}.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element at the tail of this deque.
                 * As the deque is unbounded, this method will never throw
                 * {@link IllegalStateException} or return {@code false}.
                 */
                // @ts-ignore
                public add(e: java.lang.Object): boolean;
                // @ts-ignore
                public poll(): java.lang.Object;
                // @ts-ignore
                public peek(): java.lang.Object;
                // @ts-ignore
                public remove(): java.lang.Object;
                // @ts-ignore
                public pop(): java.lang.Object;
                // @ts-ignore
                public element(): java.lang.Object;
                // @ts-ignore
                public push(e: java.lang.Object): void;
                /**
                 * Removes the first element {@code e} such that
                 * {@code o.equals(e)}, if such an element exists in this deque.
                 * If the deque does not contain the element, it is unchanged.
                 */
                // @ts-ignore
                public removeFirstOccurrence(o: java.lang.Object): boolean;
                /**
                 * Removes the last element {@code e} such that
                 * {@code o.equals(e)}, if such an element exists in this deque.
                 * If the deque does not contain the element, it is unchanged.
                 */
                // @ts-ignore
                public removeLastOccurrence(o: java.lang.Object): boolean;
                /**
                 * Returns {@code true} if this deque contains at least one
                 * element {@code e} such that {@code o.equals(e)}.
                 */
                // @ts-ignore
                public contains(o: java.lang.Object): boolean;
                /**
                 * Returns {@code true} if this collection contains no elements.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Returns the number of elements in this deque.  If this deque
                 * contains more than {@code Integer.MAX_VALUE} elements, it
                 * returns {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these deques, determining the current
                 * number of elements requires traversing them all to count them.
                 * Additionally, it is possible for the size to change during
                 * execution of this method, in which case the returned result
                 * will be inaccurate. Thus, this method is typically not very
                 * useful in concurrent applications.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Removes the first element {@code e} such that
                 * {@code o.equals(e)}, if such an element exists in this deque.
                 * If the deque does not contain the element, it is unchanged.
                 */
                // @ts-ignore
                public remove(o: java.lang.Object): boolean;
                /**
                 * Appends all of the elements in the specified collection to the end of
                 * this deque, in the order that they are returned by the specified
                 * collection's iterator.  Attempts to {@code addAll} of a deque to
                 * itself result in {@code IllegalArgumentException}.
                 */
                // @ts-ignore
                public addAll(c: java.util.Collection): boolean;
                /**
                 * Removes all of the elements from this deque.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Returns an array containing all of the elements in this deque, in
                 * proper sequence (from first to last element).
                 * <p>The returned array will be "safe" in that no references to it are
                 * maintained by this deque.  (In other words, this method must allocate
                 * a new array).  The caller is thus free to modify the returned array.
                 * <p>This method acts as bridge between array-based and collection-based
                 * APIs.
                 */
                // @ts-ignore
                public toArray(): java.lang.Object[];
                /**
                 * Returns an array containing all of the elements in this deque,
                 * in proper sequence (from first to last element); the runtime
                 * type of the returned array is that of the specified array.  If
                 * the deque fits in the specified array, it is returned therein.
                 * Otherwise, a new array is allocated with the runtime type of
                 * the specified array and the size of this deque.
                 * <p>If this deque fits in the specified array with room to spare
                 * (i.e., the array has more elements than this deque), the element in
                 * the array immediately following the end of the deque is set to
                 * {@code null}.
                 * <p>Like the {@link #toArray()} method, this method acts as
                 * bridge between array-based and collection-based APIs.  Further,
                 * this method allows precise control over the runtime type of the
                 * output array, and may, under certain circumstances, be used to
                 * save allocation costs.
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
                 * Returns an iterator over the elements in this deque in proper sequence.
                 * The elements will be returned in order from first (head) to last (tail).
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
                /**
                 * Returns an iterator over the elements in this deque in reverse
                 * sequential order.  The elements will be returned in order from
                 * last (tail) to first (head).
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                public descendingIterator(): java.util.Iterator;
                /**
                 * Returns a {@link Spliterator} over the elements in this deque.
                 * <p>The returned spliterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The {@code Spliterator} reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#ORDERED}, and {@link Spliterator#NONNULL}.
                 */
                // @ts-ignore
                public spliterator(): java.util.Spliterator;
            }
        }
    }
}
