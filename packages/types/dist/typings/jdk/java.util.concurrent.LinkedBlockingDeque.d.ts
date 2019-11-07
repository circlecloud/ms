// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class LinkedBlockingDeque extends java.util.AbstractQueue {
                /**
                 * Creates a {@code LinkedBlockingDeque} with a capacity of
                 * {@link Integer#MAX_VALUE}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code LinkedBlockingDeque} with the given (fixed) capacity.
                 */
                // @ts-ignore
                constructor(capacity: number)
                /**
                 * Creates a {@code LinkedBlockingDeque} with a capacity of
                 * {@link Integer#MAX_VALUE}, initially containing the elements of
                 * the given collection, added in traversal order of the
                 * collection's iterator.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                // @ts-ignore
                public addFirst(e: java.lang.Object): void;
                // @ts-ignore
                public addLast(e: java.lang.Object): void;
                // @ts-ignore
                public offerFirst(e: java.lang.Object): boolean;
                // @ts-ignore
                public offerLast(e: java.lang.Object): boolean;
                // @ts-ignore
                public putFirst(e: java.lang.Object): void;
                // @ts-ignore
                public putLast(e: java.lang.Object): void;
                // @ts-ignore
                public offerFirst(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                // @ts-ignore
                public offerLast(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                // @ts-ignore
                public removeFirst(): java.lang.Object;
                // @ts-ignore
                public removeLast(): java.lang.Object;
                // @ts-ignore
                public pollFirst(): java.lang.Object;
                // @ts-ignore
                public pollLast(): java.lang.Object;
                // @ts-ignore
                public takeFirst(): java.lang.Object;
                // @ts-ignore
                public takeLast(): java.lang.Object;
                // @ts-ignore
                public pollFirst(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                // @ts-ignore
                public pollLast(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                // @ts-ignore
                public getFirst(): java.lang.Object;
                // @ts-ignore
                public getLast(): java.lang.Object;
                // @ts-ignore
                public peekFirst(): java.lang.Object;
                // @ts-ignore
                public peekLast(): java.lang.Object;
                // @ts-ignore
                public removeFirstOccurrence(o: java.lang.Object): boolean;
                // @ts-ignore
                public removeLastOccurrence(o: java.lang.Object): boolean;
                /**
                 * Inserts the specified element at the end of this deque unless it would
                 * violate capacity restrictions.  When using a capacity-restricted deque,
                 * it is generally preferable to use method {@link #offer(Object) offer}.
                 * <p>This method is equivalent to {@link #addLast}.
                 */
                // @ts-ignore
                public add(e: java.lang.Object): boolean;
                // @ts-ignore
                public offer(e: java.lang.Object): boolean;
                // @ts-ignore
                public put(e: java.lang.Object): void;
                // @ts-ignore
                public offer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Retrieves and removes the head of the queue represented by this deque.
                 * This method differs from {@link #poll poll} only in that it throws an
                 * exception if this deque is empty.
                 * <p>This method is equivalent to {@link #removeFirst() removeFirst}.
                 */
                // @ts-ignore
                public remove(): java.lang.Object;
                // @ts-ignore
                public poll(): java.lang.Object;
                // @ts-ignore
                public take(): java.lang.Object;
                // @ts-ignore
                public poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Retrieves, but does not remove, the head of the queue represented by
                 * this deque.  This method differs from {@link #peek peek} only in that
                 * it throws an exception if this deque is empty.
                 * <p>This method is equivalent to {@link #getFirst() getFirst}.
                 */
                // @ts-ignore
                public element(): java.lang.Object;
                // @ts-ignore
                public peek(): java.lang.Object;
                /**
                 * Returns the number of additional elements that this deque can ideally
                 * (in the absence of memory or resource constraints) accept without
                 * blocking. This is always equal to the initial capacity of this deque
                 * less the current {@code size} of this deque.
                 * <p>Note that you <em>cannot</em> always tell if an attempt to insert
                 * an element will succeed by inspecting {@code remainingCapacity}
                 * because it may be the case that another thread is about to
                 * insert or remove an element.
                 */
                // @ts-ignore
                public remainingCapacity(): number;
                // @ts-ignore
                public drainTo(c: java.util.Collection): number;
                // @ts-ignore
                public drainTo(c: java.util.Collection, maxElements: number): number;
                // @ts-ignore
                public push(e: java.lang.Object): void;
                // @ts-ignore
                public pop(): java.lang.Object;
                /**
                 * Removes the first occurrence of the specified element from this deque.
                 * If the deque does not contain the element, it is unchanged.
                 * More formally, removes the first element {@code e} such that
                 * {@code o.equals(e)} (if such an element exists).
                 * Returns {@code true} if this deque contained the specified element
                 * (or equivalently, if this deque changed as a result of the call).
                 * <p>This method is equivalent to
                 * {@link #removeFirstOccurrence(Object) removeFirstOccurrence}.
                 */
                // @ts-ignore
                public remove(o: java.lang.Object): boolean;
                /**
                 * Returns the number of elements in this deque.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Returns {@code true} if this deque contains the specified element.
                 * More formally, returns {@code true} if and only if this deque contains
                 * at least one element {@code e} such that {@code o.equals(e)}.
                 */
                // @ts-ignore
                public contains(o: java.lang.Object): boolean;
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
                 * Returns an array containing all of the elements in this deque, in
                 * proper sequence; the runtime type of the returned array is that of
                 * the specified array.  If the deque fits in the specified array, it
                 * is returned therein.  Otherwise, a new array is allocated with the
                 * runtime type of the specified array and the size of this deque.
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
                // @ts-ignore
                public toString(): string;
                /**
                 * Atomically removes all of the elements from this deque.
                 * The deque will be empty after this call returns.
                 */
                // @ts-ignore
                public clear(): void;
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
