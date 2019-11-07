declare namespace java {
    namespace util {
        // @ts-ignore
        interface Deque {
            /**
             * Inserts the specified element at the front of this deque if it is
             * possible to do so immediately without violating capacity restrictions,
             * throwing an {@code IllegalStateException} if no space is currently
             * available.  When using a capacity-restricted deque, it is generally
             * preferable to use method {@link #offerFirst}.
             */
            // @ts-ignore
             addFirst(e: java.lang.Object): void;
            /**
             * Inserts the specified element at the end of this deque if it is
             * possible to do so immediately without violating capacity restrictions,
             * throwing an {@code IllegalStateException} if no space is currently
             * available.  When using a capacity-restricted deque, it is generally
             * preferable to use method {@link #offerLast}.
             * <p>This method is equivalent to {@link #add}.
             */
            // @ts-ignore
             addLast(e: java.lang.Object): void;
            /**
             * Inserts the specified element at the front of this deque unless it would
             * violate capacity restrictions.  When using a capacity-restricted deque,
             * this method is generally preferable to the {@link #addFirst} method,
             * which can fail to insert an element only by throwing an exception.
             */
            // @ts-ignore
             offerFirst(e: java.lang.Object): boolean;
            /**
             * Inserts the specified element at the end of this deque unless it would
             * violate capacity restrictions.  When using a capacity-restricted deque,
             * this method is generally preferable to the {@link #addLast} method,
             * which can fail to insert an element only by throwing an exception.
             */
            // @ts-ignore
             offerLast(e: java.lang.Object): boolean;
            /**
             * Retrieves and removes the first element of this deque.  This method
             * differs from {@link #pollFirst pollFirst} only in that it throws an
             * exception if this deque is empty.
             */
            // @ts-ignore
             removeFirst(): java.lang.Object;
            /**
             * Retrieves and removes the last element of this deque.  This method
             * differs from {@link #pollLast pollLast} only in that it throws an
             * exception if this deque is empty.
             */
            // @ts-ignore
             removeLast(): java.lang.Object;
            /**
             * Retrieves and removes the first element of this deque,
             * or returns {@code null} if this deque is empty.
             */
            // @ts-ignore
             pollFirst(): java.lang.Object;
            /**
             * Retrieves and removes the last element of this deque,
             * or returns {@code null} if this deque is empty.
             */
            // @ts-ignore
             pollLast(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the first element of this deque.
             * This method differs from {@link #peekFirst peekFirst} only in that it
             * throws an exception if this deque is empty.
             */
            // @ts-ignore
             getFirst(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the last element of this deque.
             * This method differs from {@link #peekLast peekLast} only in that it
             * throws an exception if this deque is empty.
             */
            // @ts-ignore
             getLast(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the first element of this deque,
             * or returns {@code null} if this deque is empty.
             */
            // @ts-ignore
             peekFirst(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the last element of this deque,
             * or returns {@code null} if this deque is empty.
             */
            // @ts-ignore
             peekLast(): java.lang.Object;
            /**
             * Removes the first occurrence of the specified element from this deque.
             * If the deque does not contain the element, it is unchanged.
             * More formally, removes the first element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>
             * (if such an element exists).
             * Returns {@code true} if this deque contained the specified element
             * (or equivalently, if this deque changed as a result of the call).
             */
            // @ts-ignore
             removeFirstOccurrence(o: java.lang.Object): boolean;
            /**
             * Removes the last occurrence of the specified element from this deque.
             * If the deque does not contain the element, it is unchanged.
             * More formally, removes the last element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>
             * (if such an element exists).
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
             * <p>This method is equivalent to {@link #addLast}.
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
             * <p>This method is equivalent to {@link #offerLast}.
             */
            // @ts-ignore
             offer(e: java.lang.Object): boolean;
            /**
             * Retrieves and removes the head of the queue represented by this deque
             * (in other words, the first element of this deque).
             * This method differs from {@link #poll poll} only in that it throws an
             * exception if this deque is empty.
             * <p>This method is equivalent to {@link #removeFirst()}.
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
             * Retrieves, but does not remove, the head of the queue represented by
             * this deque (in other words, the first element of this deque).
             * This method differs from {@link #peek peek} only in that it throws an
             * exception if this deque is empty.
             * <p>This method is equivalent to {@link #getFirst()}.
             */
            // @ts-ignore
             element(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the head of the queue represented by
             * this deque (in other words, the first element of this deque), or
             * returns {@code null} if this deque is empty.
             * <p>This method is equivalent to {@link #peekFirst()}.
             */
            // @ts-ignore
             peek(): java.lang.Object;
            /**
             * Pushes an element onto the stack represented by this deque (in other
             * words, at the head of this deque) if it is possible to do so
             * immediately without violating capacity restrictions, throwing an
             * {@code IllegalStateException} if no space is currently available.
             * <p>This method is equivalent to {@link #addFirst}.
             */
            // @ts-ignore
             push(e: java.lang.Object): void;
            /**
             * Pops an element from the stack represented by this deque.  In other
             * words, removes and returns the first element of this deque.
             * <p>This method is equivalent to {@link #removeFirst()}.
             */
            // @ts-ignore
             pop(): java.lang.Object;
            /**
             * Removes the first occurrence of the specified element from this deque.
             * If the deque does not contain the element, it is unchanged.
             * More formally, removes the first element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>
             * (if such an element exists).
             * Returns {@code true} if this deque contained the specified element
             * (or equivalently, if this deque changed as a result of the call).
             * <p>This method is equivalent to {@link #removeFirstOccurrence(Object)}.
             */
            // @ts-ignore
             remove(o: java.lang.Object): boolean;
            /**
             * Returns {@code true} if this deque contains the specified element.
             * More formally, returns {@code true} if and only if this deque contains
             * at least one element {@code e} such that
             * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
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
             * Returns an iterator over the elements in this deque in reverse
             * sequential order.  The elements will be returned in order from
             * last (tail) to first (head).
             */
            // @ts-ignore
             descendingIterator(): java.util.Iterator;
        }
    }
}
