// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
            interface BlockingDeque {
                /**
                 * Inserts the specified element at the front of this deque if it is
                 * possible to do so immediately without violating capacity restrictions,
                 * throwing an {@code IllegalStateException} if no space is currently
                 * available.  When using a capacity-restricted deque, it is generally
                 * preferable to use {@link #offerFirst(Object) offerFirst}.
                 */
                // @ts-ignore
                 addFirst(e: java.lang.Object): void;
                /**
                 * Inserts the specified element at the end of this deque if it is
                 * possible to do so immediately without violating capacity restrictions,
                 * throwing an {@code IllegalStateException} if no space is currently
                 * available.  When using a capacity-restricted deque, it is generally
                 * preferable to use {@link #offerLast(Object) offerLast}.
                 */
                // @ts-ignore
                 addLast(e: java.lang.Object): void;
                /**
                 * Inserts the specified element at the front of this deque if it is
                 * possible to do so immediately without violating capacity restrictions,
                 * returning {@code true} upon success and {@code false} if no space is
                 * currently available.
                 * When using a capacity-restricted deque, this method is generally
                 * preferable to the {@link #addFirst(Object) addFirst} method, which can
                 * fail to insert an element only by throwing an exception.
                 */
                // @ts-ignore
                 offerFirst(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element at the end of this deque if it is
                 * possible to do so immediately without violating capacity restrictions,
                 * returning {@code true} upon success and {@code false} if no space is
                 * currently available.
                 * When using a capacity-restricted deque, this method is generally
                 * preferable to the {@link #addLast(Object) addLast} method, which can
                 * fail to insert an element only by throwing an exception.
                 */
                // @ts-ignore
                 offerLast(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element at the front of this deque,
                 * waiting if necessary for space to become available.
                 */
                // @ts-ignore
                 putFirst(e: java.lang.Object): void;
                /**
                 * Inserts the specified element at the end of this deque,
                 * waiting if necessary for space to become available.
                 */
                // @ts-ignore
                 putLast(e: java.lang.Object): void;
                /**
                 * Inserts the specified element at the front of this deque,
                 * waiting up to the specified wait time if necessary for space to
                 * become available.
                 */
                // @ts-ignore
                 offerFirst(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Inserts the specified element at the end of this deque,
                 * waiting up to the specified wait time if necessary for space to
                 * become available.
                 */
                // @ts-ignore
                 offerLast(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Retrieves and removes the first element of this deque, waiting
                 * if necessary until an element becomes available.
                 */
                // @ts-ignore
                 takeFirst(): java.lang.Object;
                /**
                 * Retrieves and removes the last element of this deque, waiting
                 * if necessary until an element becomes available.
                 */
                // @ts-ignore
                 takeLast(): java.lang.Object;
                /**
                 * Retrieves and removes the first element of this deque, waiting
                 * up to the specified wait time if necessary for an element to
                 * become available.
                 */
                // @ts-ignore
                 pollFirst(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Retrieves and removes the last element of this deque, waiting
                 * up to the specified wait time if necessary for an element to
                 * become available.
                 */
                // @ts-ignore
                 pollLast(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Removes the first occurrence of the specified element from this deque.
                 * If the deque does not contain the element, it is unchanged.
                 * More formally, removes the first element {@code e} such that
                 * {@code o.equals(e)} (if such an element exists).
                 * Returns {@code true} if this deque contained the specified element
                 * (or equivalently, if this deque changed as a result of the call).
                 */
                // @ts-ignore
                 removeFirstOccurrence(o: java.lang.Object): boolean;
                /**
                 * Removes the last occurrence of the specified element from this deque.
                 * If the deque does not contain the element, it is unchanged.
                 * More formally, removes the last element {@code e} such that
                 * {@code o.equals(e)} (if such an element exists).
                 * Returns {@code true} if this deque contained the specified element
                 * (or equivalently, if this deque changed as a result of the call).
                 */
                // @ts-ignore
                 removeLastOccurrence(o: java.lang.Object): boolean;
                /**
                 * Inserts the specified element into the queue represented by this deque
                 * (in other words, at the tail of this deque) if it is possible to do so
                 * immediately without violating capacity restrictions, returning
                 * {@code true} upon success and throwing an
                 * {@code IllegalStateException} if no space is currently available.
                 * When using a capacity-restricted deque, it is generally preferable to
                 * use {@link #offer(Object) offer}.
                 * <p>This method is equivalent to {@link #addLast(Object) addLast}.
                 */
                // @ts-ignore
                 add(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element into the queue represented by this deque
                 * (in other words, at the tail of this deque) if it is possible to do so
                 * immediately without violating capacity restrictions, returning
                 * {@code true} upon success and {@code false} if no space is currently
                 * available.  When using a capacity-restricted deque, this method is
                 * generally preferable to the {@link #add} method, which can fail to
                 * insert an element only by throwing an exception.
                 * <p>This method is equivalent to {@link #offerLast(Object) offerLast}.
                 */
                // @ts-ignore
                 offer(e: java.lang.Object): boolean;
                /**
                 * Inserts the specified element into the queue represented by this deque
                 * (in other words, at the tail of this deque), waiting if necessary for
                 * space to become available.
                 * <p>This method is equivalent to {@link #putLast(Object) putLast}.
                 */
                // @ts-ignore
                 put(e: java.lang.Object): void;
                /**
                 * Inserts the specified element into the queue represented by this deque
                 * (in other words, at the tail of this deque), waiting up to the
                 * specified wait time if necessary for space to become available.
                 * <p>This method is equivalent to
                 * {@link #offerLast(Object,long,TimeUnit) offerLast}.
                 */
                // @ts-ignore
                 offer(e: java.lang.Object, timeout: number, unit: java.util.concurrent.TimeUnit): boolean;
                /**
                 * Retrieves and removes the head of the queue represented by this deque
                 * (in other words, the first element of this deque).
                 * This method differs from {@link #poll poll} only in that it
                 * throws an exception if this deque is empty.
                 * <p>This method is equivalent to {@link #removeFirst() removeFirst}.
                 */
                // @ts-ignore
                 remove(): java.lang.Object;
                /**
                 * Retrieves and removes the head of the queue represented by this deque
                 * (in other words, the first element of this deque), or returns
                 * {@code null} if this deque is empty.
                 * <p>This method is equivalent to {@link #pollFirst()}.
                 */
                // @ts-ignore
                 poll(): java.lang.Object;
                /**
                 * Retrieves and removes the head of the queue represented by this deque
                 * (in other words, the first element of this deque), waiting if
                 * necessary until an element becomes available.
                 * <p>This method is equivalent to {@link #takeFirst() takeFirst}.
                 */
                // @ts-ignore
                 take(): java.lang.Object;
                /**
                 * Retrieves and removes the head of the queue represented by this deque
                 * (in other words, the first element of this deque), waiting up to the
                 * specified wait time if necessary for an element to become available.
                 * <p>This method is equivalent to
                 * {@link #pollFirst(long,TimeUnit) pollFirst}.
                 */
                // @ts-ignore
                 poll(timeout: number, unit: java.util.concurrent.TimeUnit): java.lang.Object;
                /**
                 * Retrieves, but does not remove, the head of the queue represented by
                 * this deque (in other words, the first element of this deque).
                 * This method differs from {@link #peek peek} only in that it throws an
                 * exception if this deque is empty.
                 * <p>This method is equivalent to {@link #getFirst() getFirst}.
                 */
                // @ts-ignore
                 element(): java.lang.Object;
                /**
                 * Retrieves, but does not remove, the head of the queue represented by
                 * this deque (in other words, the first element of this deque), or
                 * returns {@code null} if this deque is empty.
                 * <p>This method is equivalent to {@link #peekFirst() peekFirst}.
                 */
                // @ts-ignore
                 peek(): java.lang.Object;
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
                 remove(o: java.lang.Object): boolean;
                /**
                 * Returns {@code true} if this deque contains the specified element.
                 * More formally, returns {@code true} if and only if this deque contains
                 * at least one element {@code e} such that {@code o.equals(e)}.
                 */
                // @ts-ignore
                 contains(o: java.lang.Object): boolean;
                /**
                 * Returns the number of elements in this deque.
                 */
                // @ts-ignore
                 size(): number;
                /**
                 * Returns an iterator over the elements in this deque in proper sequence.
                 * The elements will be returned in order from first (head) to last (tail).
                 */
                // @ts-ignore
                 iterator(): java.util.Iterator;
                /**
                 * Pushes an element onto the stack represented by this deque (in other
                 * words, at the head of this deque) if it is possible to do so
                 * immediately without violating capacity restrictions, throwing an
                 * {@code IllegalStateException} if no space is currently available.
                 * <p>This method is equivalent to {@link #addFirst(Object) addFirst}.
                 */
                // @ts-ignore
                 push(e: java.lang.Object): void;
            }
        }
    }
}
