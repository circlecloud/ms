declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class PriorityBlockingQueue extends java.util.AbstractQueue {
                /**
                 * Creates a {@code PriorityBlockingQueue} with the default
                 * initial capacity (11) that orders its elements according to
                 * their {@linkplain Comparable natural ordering}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code PriorityBlockingQueue} with the specified
                 * initial capacity that orders its elements according to their
                 * {@linkplain Comparable natural ordering}.
                 */
                // @ts-ignore
                constructor(initialCapacity: number)
                /**
                 * Creates a {@code PriorityBlockingQueue} with the specified initial
                 * capacity that orders its elements according to the specified
                 * comparator.
                 */
                // @ts-ignore
                constructor(initialCapacity: number, comparator: java.util.Comparator)
                /**
                 * Creates a {@code PriorityBlockingQueue} containing the elements
                 * in the specified collection.  If the specified collection is a
                 * {@link SortedSet} or a {@link PriorityQueue}, this
                 * priority queue will be ordered according to the same ordering.
                 * Otherwise, this priority queue will be ordered according to the
                 * {@linkplain Comparable natural ordering} of its elements.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                /**
                 * Inserts the specified element into this priority queue.
                 */
                // @ts-ignore
                public add(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element into this priority queue.
                 * As the queue is unbounded, this method will never return {@code false}.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element into this priority queue.
                 * As the queue is unbounded, this method will never block.
                 */
                // @ts-ignore
                public put(e: java.lang.Object): void;
                /**
                 * Inserts the specified element into this priority queue.
                 * As the queue is unbounded, this method will never block or
                 * return {@code false}.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                // @ts-ignore
                public poll(): java.lang.Object;
                // @ts-ignore
                public take(): java.lang.Object;
                // @ts-ignore
                public poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                // @ts-ignore
                public peek(): java.lang.Object;
                /**
                 * Returns the comparator used to order the elements in this queue,
                 * or {@code null} if this queue uses the {@linkplain Comparable
                 * natural ordering} of its elements.
                 */
                // @ts-ignore
                public comparator(): java.util.Comparator;
                // @ts-ignore
                public size(): number;
                /**
                 * Always returns {@code Integer.MAX_VALUE} because
                 * a {@code PriorityBlockingQueue} is not capacity constrained.
                 */
                // @ts-ignore
                public remainingCapacity(): number;
                /**
                 * Removes a single instance of the specified element from this queue,
                 * if it is present.  More formally, removes an element {@code e} such
                 * that {@code o.equals(e)}, if this queue contains one or more such
                 * elements.  Returns {@code true} if and only if this queue contained
                 * the specified element (or equivalently, if this queue changed as a
                 * result of the call).
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
                 * Returns an array containing all of the elements in this queue.
                 * The returned array elements are in no particular order.
                 * <p>The returned array will be "safe" in that no references to it are
                 * maintained by this queue.  (In other words, this method must allocate
                 * a new array).  The caller is thus free to modify the returned array.
                 * <p>This method acts as bridge between array-based and collection-based
                 * APIs.
                 */
                // @ts-ignore
                public toArray(): java.lang.Object[];
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public drainTo(c: java.util.Collection): number;
                // @ts-ignore
                public drainTo(c: java.util.Collection, maxElements: number): number;
                /**
                 * Atomically removes all of the elements from this queue.
                 * The queue will be empty after this call returns.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Returns an array containing all of the elements in this queue; the
                 * runtime type of the returned array is that of the specified array.
                 * The returned array elements are in no particular order.
                 * If the queue fits in the specified array, it is returned therein.
                 * Otherwise, a new array is allocated with the runtime type of the
                 * specified array and the size of this queue.
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
                /**
                 * Returns an iterator over the elements in this queue. The
                 * iterator does not return the elements in any particular order.
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
                /**
                 * Returns a {@link Spliterator} over the elements in this queue.
                 * <p>The returned spliterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The {@code Spliterator} reports {@link Spliterator#SIZED} and
                 * {@link Spliterator#NONNULL}.
                 */
                // @ts-ignore
                public spliterator(): java.util.Spliterator;
            }
        }
    }
}
