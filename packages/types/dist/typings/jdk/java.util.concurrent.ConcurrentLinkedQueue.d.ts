// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ConcurrentLinkedQueue extends java.util.AbstractQueue {
                /**
                 * Creates a {@code ConcurrentLinkedQueue} that is initially empty.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code ConcurrentLinkedQueue}
                 * initially containing the elements of the given collection,
                 * added in traversal order of the collection's iterator.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never throw
                 * {@link IllegalStateException} or return {@code false}.
                 */
                // @ts-ignore
                public add(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never return {@code false}.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object): boolean;
                // @ts-ignore
                public poll(): java.lang.Object;
                // @ts-ignore
                public peek(): java.lang.Object;
                /**
                 * Returns {@code true} if this queue contains no elements.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Returns the number of elements in this queue.  If this queue
                 * contains more than {@code Integer.MAX_VALUE} elements, returns
                 * {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these queues, determining the current
                 * number of elements requires an O(n) traversal.
                 * Additionally, if elements are added or removed during execution
                 * of this method, the returned result may be inaccurate.  Thus,
                 * this method is typically not very useful in concurrent
                 * applications.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Returns {@code true} if this queue contains the specified element.
                 * More formally, returns {@code true} if and only if this queue contains
                 * at least one element {@code e} such that {@code o.equals(e)}.
                 */
                // @ts-ignore
                public contains(o: java.lang.Object): boolean;
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
                 * Appends all of the elements in the specified collection to the end of
                 * this queue, in the order that they are returned by the specified
                 * collection's iterator.  Attempts to {@code addAll} of a queue to
                 * itself result in {@code IllegalArgumentException}.
                 */
                // @ts-ignore
                public addAll(c: java.util.Collection): boolean;
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
