// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class SynchronousQueue extends java.util.AbstractQueue {
                /**
                 * Creates a {@code SynchronousQueue} with nonfair access policy.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a {@code SynchronousQueue} with the specified fairness policy.
                 */
                // @ts-ignore
                constructor(fair: boolean)
                /**
                 * Adds the specified element to this queue, waiting if necessary for
                 * another thread to receive it.
                 */
                // @ts-ignore
                public put(e: java.lang.Object): void;
                /**
                 * Inserts the specified element into this queue, waiting if necessary
                 * up to the specified wait time for another thread to receive it.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Inserts the specified element into this queue, if another thread is
                 * waiting to receive it.
                 */
                // @ts-ignore
                public offer(e: java.lang.Object): boolean;
                /**
                 * Retrieves and removes the head of this queue, waiting if necessary
                 * for another thread to insert it.
                 */
                // @ts-ignore
                public take(): java.lang.Object;
                /**
                 * Retrieves and removes the head of this queue, waiting
                 * if necessary up to the specified wait time, for another thread
                 * to insert it.
                 */
                // @ts-ignore
                public poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Retrieves and removes the head of this queue, if another thread
                 * is currently making an element available.
                 */
                // @ts-ignore
                public poll(): java.lang.Object;
                /**
                 * Always returns {@code true}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public isEmpty(): boolean;
                /**
                 * Always returns zero.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Always returns zero.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public remainingCapacity(): number;
                /**
                 * Does nothing.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public clear(): void;
                /**
                 * Always returns {@code false}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public contains(o: java.lang.Object): boolean;
                /**
                 * Always returns {@code false}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public remove(o: java.lang.Object): boolean;
                /**
                 * Returns {@code false} unless the given collection is empty.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public containsAll(c: java.util.Collection): boolean;
                /**
                 * Always returns {@code false}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public removeAll(c: java.util.Collection): boolean;
                /**
                 * Always returns {@code false}.
                 * A {@code SynchronousQueue} has no internal capacity.
                 */
                // @ts-ignore
                public retainAll(c: java.util.Collection): boolean;
                /**
                 * Always returns {@code null}.
                 * A {@code SynchronousQueue} does not return elements
                 * unless actively waited on.
                 */
                // @ts-ignore
                public peek(): java.lang.Object;
                /**
                 * Returns an empty iterator in which {@code hasNext} always returns
                 * {@code false}.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
                /**
                 * Returns an empty spliterator in which calls to
                 * {@link java.util.Spliterator#trySplit()} always return {@code null}.
                 */
                // @ts-ignore
                public spliterator(): java.util.Spliterator;
                /**
                 * Returns a zero-length array.
                 */
                // @ts-ignore
                public toArray(): java.lang.Object[];
                /**
                 * Sets the zeroeth element of the specified array to {@code null}
                 * (if the array has non-zero length) and returns it.
                 */
                // @ts-ignore
                public toArray(a: java.lang.Object): java.lang.Object[];
                // @ts-ignore
                public drainTo(c: java.util.Collection): number;
                // @ts-ignore
                public drainTo(c: java.util.Collection, maxElements: number): number;
            }
        }
    }
}
