declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class LinkedBlockingQueue extends java.util.AbstractQueue {
                /**
                 * Creates a {@code LinkedBlockingQueue} with a capacity of
                 * {@link Integer#MAX_VALUE}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code LinkedBlockingQueue} with the given (fixed) capacity.
                 */
                // @ts-ignore
                constructor(capacity: number)
                /**
                 * Creates a {@code LinkedBlockingQueue} with a capacity of
                 * {@link Integer#MAX_VALUE}, initially containing the elements of the
                 * given collection,
                 * added in traversal order of the collection's iterator.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                /**
                 * Returns the number of elements in this queue.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Returns the number of additional elements that this queue can ideally
                 * (in the absence of memory or resource constraints) accept without
                 * blocking. This is always equal to the initial capacity of this queue
                 * less the current {@code size} of this queue.
                 * <p>Note that you <em>cannot</em> always tell if an attempt to insert
                 * an element will succeed by inspecting {@code remainingCapacity}
                 * because it may be the case that another thread is about to
                 * insert or remove an element.
                 */
                // @ts-ignore
                public remainingCapacity(): number;
                /**
                 * Inserts the specified element at the tail of this queue, waiting if
                 * necessary for space to become available.
                 */
                // @ts-ignore
                public put(e: java.lang.Object): void;
                /**
                 * Inserts the specified element at the tail of this queue, waiting if
                 * necessary up to the specified wait time for space to become available.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Inserts the specified element at the tail of this queue if it is
                 * possible to do so immediately without exceeding the queue's capacity,
                 * returning {@code true} upon success and {@code false} if this queue
                 * is full.
                 * When using a capacity-restricted queue, this method is generally
                 * preferable to method {@link BlockingQueue#add add}, which can fail to
                 * insert an element only by throwing an exception.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object): boolean;
                // @ts-ignore
                public take(): java.lang.Object;
                // @ts-ignore
                public poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                // @ts-ignore
                public poll(): java.lang.Object;
                // @ts-ignore
                public peek(): java.lang.Object;
                /**
                 * Removes a single instance of the specified element from this queue,
                 * if it is present.  More formally, removes an element {@code e} such
                 * that {@code o.equals(e)}, if this queue contains one or more such
                 * elements.
                 * Returns {@code true} if this queue contained the specified element
                 * (or equivalently, if this queue changed as a result of the call).
                 */
                // @ts-ignore
                public remove(o: java.lang.Object): boolean;
                /**
                 * Returns {@code true} if this queue contains the specified element.
                 * More formally, returns {@code true} if and only if this queue contains
                 * at least one element {@code e} such that {@code o.equals(e)}.
                 */
                // @ts-ignore
                public contains(o: java.lang.Object): boolean;
                /**
                 * Returns an array containing all of the elements in this queue, in
                 * proper sequence.
                 * <p>The returned array will be "safe" in that no references to it are
                 * maintained by this queue.  (In other words, this method must allocate
                 * a new array).  The caller is thus free to modify the returned array.
                 * <p>This method acts as bridge between array-based and collection-based
                 * APIs.
                 */
                // @ts-ignore
                public toArray(): java.lang.Object[];
                /**
                 * Returns an array containing all of the elements in this queue, in
                 * proper sequence; the runtime type of the returned array is that of
                 * the specified array.  If the queue fits in the specified array, it
                 * is returned therein.  Otherwise, a new array is allocated with the
                 * runtime type of the specified array and the size of this queue.
                 * <p>If this queue fits in the specified array with room to spare
                 * (i.e., the array has more elements than this queue), the element in
                 * the array immediately following the end of the queue is set to
                 * {@code null}.
                 * <p>Like the {@link #toArray()} method, this method acts as bridge between
                 * array-based and collection-based APIs.  Further, this method allows
                 * precise control over the runtime type of the output array, and may,
                 * under certain circumstances, be used to save allocation costs.
                 * <p>Suppose {@code x} is a queue known to contain only strings.
                 * The following code can be used to dump the queue into a newly
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
                 * Atomically removes all of the elements from this queue.
                 * The queue will be empty after this call returns.
                 */
                // @ts-ignore
                public clear(): void;
                // @ts-ignore
                public drainTo(c: java.util.Collection): number;
                // @ts-ignore
                public drainTo(c: java.util.Collection, maxElements: number): number;
                /**
                 * Returns an iterator over the elements in this queue in proper sequence.
                 * The elements will be returned in order from first (head) to last (tail).
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
                /**
                 * Returns a {@link Spliterator} over the elements in this queue.
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
