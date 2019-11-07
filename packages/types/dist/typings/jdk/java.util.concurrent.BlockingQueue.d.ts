declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface BlockingQueue {
                /**
                 * Inserts the specified element into this queue if it is possible to do
                 * so immediately without violating capacity restrictions, returning
                 * {@code true} upon success and throwing an
                 * {@code IllegalStateException} if no space is currently available.
                 * When using a capacity-restricted queue, it is generally preferable to
                 * use {@link #offer(Object) offer}.
                 */
                // @ts-ignore
                 add(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element into this queue if it is possible to do
                 * so immediately without violating capacity restrictions, returning
                 * {@code true} upon success and {@code false} if no space is currently
                 * available.  When using a capacity-restricted queue, this method is
                 * generally preferable to {@link #add}, which can fail to insert an
                 * element only by throwing an exception.
                 */
                // @ts-ignore
                 offer(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element into this queue, waiting if necessary
                 * for space to become available.
                 */
                // @ts-ignore
                 put(e: java.lang.Object): void;
                /**
                 * Inserts the specified element into this queue, waiting up to the
                 * specified wait time if necessary for space to become available.
                 */
                // @ts-ignore
                 offer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Retrieves and removes the head of this queue, waiting if necessary
                 * until an element becomes available.
                 */
                // @ts-ignore
                 take(): java.lang.Object;
                /**
                 * Retrieves and removes the head of this queue, waiting up to the
                 * specified wait time if necessary for an element to become available.
                 */
                // @ts-ignore
                 poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Returns the number of additional elements that this queue can ideally
                 * (in the absence of memory or resource constraints) accept without
                 * blocking, or {@code Integer.MAX_VALUE} if there is no intrinsic
                 * limit.
                 * <p>Note that you <em>cannot</em> always tell if an attempt to insert
                 * an element will succeed by inspecting {@code remainingCapacity}
                 * because it may be the case that another thread is about to
                 * insert or remove an element.
                 */
                // @ts-ignore
                 remainingCapacity(): number;
                /**
                 * Removes a single instance of the specified element from this queue,
                 * if it is present.  More formally, removes an element {@code e} such
                 * that {@code o.equals(e)}, if this queue contains one or more such
                 * elements.
                 * Returns {@code true} if this queue contained the specified element
                 * (or equivalently, if this queue changed as a result of the call).
                 */
                // @ts-ignore
                 remove(o: java.lang.Object): boolean;
                /**
                 * Returns {@code true} if this queue contains the specified element.
                 * More formally, returns {@code true} if and only if this queue contains
                 * at least one element {@code e} such that {@code o.equals(e)}.
                 */
                // @ts-ignore
                 contains(o: java.lang.Object): boolean;
                /**
                 * Removes all available elements from this queue and adds them
                 * to the given collection.  This operation may be more
                 * efficient than repeatedly polling this queue.  A failure
                 * encountered while attempting to add elements to
                 * collection {@code c} may result in elements being in neither,
                 * either or both collections when the associated exception is
                 * thrown.  Attempts to drain a queue to itself result in
                 * {@code IllegalArgumentException}. Further, the behavior of
                 * this operation is undefined if the specified collection is
                 * modified while the operation is in progress.
                 */
                // @ts-ignore
                 drainTo(c: java.util.Collection): number;
                /**
                 * Removes at most the given number of available elements from
                 * this queue and adds them to the given collection.  A failure
                 * encountered while attempting to add elements to
                 * collection {@code c} may result in elements being in neither,
                 * either or both collections when the associated exception is
                 * thrown.  Attempts to drain a queue to itself result in
                 * {@code IllegalArgumentException}. Further, the behavior of
                 * this operation is undefined if the specified collection is
                 * modified while the operation is in progress.
                 */
                // @ts-ignore
                 drainTo(c: java.util.Collection, maxElements: number): number;
            }
        }
    }
}
