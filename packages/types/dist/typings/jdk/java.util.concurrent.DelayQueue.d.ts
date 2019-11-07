declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class DelayQueue extends java.util.AbstractQueue {
                /**
                 * Creates a new {@code DelayQueue} that is initially empty.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code DelayQueue} initially containing the elements of the
                 * given collection of {@link Delayed} instances.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                /**
                 * Inserts the specified element into this delay queue.
                 */
                // @ts-ignore
                public add(e: java.util.concurrent.Delayed): boolean;
                /**
                 * Inserts the specified element into this delay queue.
                 */
                // @ts-ignore
                public offer(e: java.util.concurrent.Delayed): boolean;
                /**
                 * Inserts the specified element into this delay queue. As the queue is
                 * unbounded this method will never block.
                 */
                // @ts-ignore
                public put(e: java.util.concurrent.Delayed): void;
                /**
                 * Inserts the specified element into this delay queue. As the queue is
                 * unbounded this method will never block.
                 */
                // @ts-ignore
                public offer(e: java.util.concurrent.Delayed, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Retrieves and removes the head of this queue, or returns {@code null}
                 * if this queue has no elements with an expired delay.
                 */
                // @ts-ignore
                public poll(): java.util.concurrent.Delayed;
                /**
                 * Retrieves and removes the head of this queue, waiting if necessary
                 * until an element with an expired delay is available on this queue.
                 */
                // @ts-ignore
                public take(): java.util.concurrent.Delayed;
                /**
                 * Retrieves and removes the head of this queue, waiting if necessary
                 * until an element with an expired delay is available on this queue,
                 * or the specified wait time expires.
                 */
                // @ts-ignore
                public poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.util.concurrent.Delayed;
                /**
                 * Retrieves, but does not remove, the head of this queue, or
                 * returns {@code null} if this queue is empty.  Unlike
                 * {@code poll}, if no expired elements are available in the queue,
                 * this method returns the element that will expire next,
                 * if one exists.
                 */
                // @ts-ignore
                public peek(): java.util.concurrent.Delayed;
                // @ts-ignore
                public size(): number;
                // @ts-ignore
                public drainTo(c: java.util.Collection): number;
                // @ts-ignore
                public drainTo(c: java.util.Collection, maxElements: number): number;
                /**
                 * Atomically removes all of the elements from this delay queue.
                 * The queue will be empty after this call returns.
                 * Elements with an unexpired delay are not waited for; they are
                 * simply discarded from the queue.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Always returns {@code Integer.MAX_VALUE} because
                 * a {@code DelayQueue} is not capacity constrained.
                 */
                // @ts-ignore
                public remainingCapacity(): number;
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
                 * <p>The following code can be used to dump a delay queue into a newly
                 * allocated array of {@code Delayed}:
                 * <pre> {@code Delayed[] a = q.toArray(new Delayed[0]);}</pre>
                 * Note that {@code toArray(new Object[0])} is identical in function to
                 * {@code toArray()}.
                 */
                // @ts-ignore
                public toArray(a: java.lang.Object): java.lang.Object[];
                /**
                 * Removes a single instance of the specified element from this
                 * queue, if it is present, whether or not it has expired.
                 */
                // @ts-ignore
                public remove(o: java.lang.Object): boolean;
                /**
                 * Returns an iterator over all the elements (both expired and
                 * unexpired) in this queue. The iterator does not return the
                 * elements in any particular order.
                 * <p>The returned iterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
            }
        }
    }
}
