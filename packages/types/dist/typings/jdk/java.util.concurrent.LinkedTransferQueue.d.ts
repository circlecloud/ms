declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class LinkedTransferQueue extends java.util.AbstractQueue {
                /**
                 * Creates an initially empty {@code LinkedTransferQueue}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code LinkedTransferQueue}
                 * initially containing the elements of the given collection,
                 * added in traversal order of the collection's iterator.
                 */
                // @ts-ignore
                constructor(c: java.util.Collection)
                /**
                 * Returns a {@link Spliterator} over the elements in this queue.
                 * <p>The returned spliterator is
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The {@code Spliterator} reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#ORDERED}, and {@link Spliterator#NONNULL}.
                 */
                // @ts-ignore
                public spliterator(): java.util.Spliterator;
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never block.
                 */
                // @ts-ignore
                public put(e: java.lang.Object): void;
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never block or
                 * return {@code false}.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never return {@code false}.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element at the tail of this queue.
                 * As the queue is unbounded, this method will never throw
                 * {@link IllegalStateException} or return {@code false}.
                 */
                // @ts-ignore
                public add(e: java.lang.Object): boolean;
                /**
                 * Transfers the element to a waiting consumer immediately, if possible.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * otherwise returning {@code false} without enqueuing the element.
                 */
                // @ts-ignore
                public tryTransfer(e: java.lang.Object): boolean;
                /**
                 * Transfers the element to a consumer, waiting if necessary to do so.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * else inserts the specified element at the tail of this queue
                 * and waits until the element is received by a consumer.
                 */
                // @ts-ignore
                public transfer(e: java.lang.Object): void;
                /**
                 * Transfers the element to a consumer if it is possible to do so
                 * before the timeout elapses.
                 * <p>More precisely, transfers the specified element immediately
                 * if there exists a consumer already waiting to receive it (in
                 * {@link #take} or timed {@link #poll(long,TimeUnit) poll}),
                 * else inserts the specified element at the tail of this queue
                 * and waits until the element is received by a consumer,
                 * returning {@code false} if the specified wait time elapses
                 * before the element can be transferred.
                 */
                // @ts-ignore
                public tryTransfer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                // @ts-ignore
                public take(): java.lang.Object;
                // @ts-ignore
                public poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                // @ts-ignore
                public poll(): java.lang.Object;
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
                // @ts-ignore
                public peek(): java.lang.Object;
                /**
                 * Returns {@code true} if this queue contains no elements.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                // @ts-ignore
                public hasWaitingConsumer(): boolean;
                /**
                 * Returns the number of elements in this queue.  If this queue
                 * contains more than {@code Integer.MAX_VALUE} elements, returns
                 * {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these queues, determining the current
                 * number of elements requires an O(n) traversal.
                 */
                // @ts-ignore
                public size(): number;
                // @ts-ignore
                public getWaitingConsumerCount(): number;
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
                 * Always returns {@code Integer.MAX_VALUE} because a
                 * {@code LinkedTransferQueue} is not capacity constrained.
                 */
                // @ts-ignore
                public remainingCapacity(): number;
            }
        }
    }
}
