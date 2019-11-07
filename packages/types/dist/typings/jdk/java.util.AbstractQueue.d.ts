declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class AbstractQueue extends java.util.AbstractCollection {
            /**
             * Constructor for use by subclasses.
             */
            // @ts-ignore
            constructor()
            /**
             * Inserts the specified element into this queue if it is possible to do so
             * immediately without violating capacity restrictions, returning
             * <tt>true</tt> upon success and throwing an <tt>IllegalStateException</tt>
             * if no space is currently available.
             * <p>This implementation returns <tt>true</tt> if <tt>offer</tt> succeeds,
             * else throws an <tt>IllegalStateException</tt>.
             */
            // @ts-ignore
            public add(e: java.lang.Object): boolean;
            /**
             * Retrieves and removes the head of this queue.  This method differs
             * from {@link #poll poll} only in that it throws an exception if this
             * queue is empty.
             * <p>This implementation returns the result of <tt>poll</tt>
             * unless the queue is empty.
             */
            // @ts-ignore
            public remove(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the head of this queue.  This method
             * differs from {@link #peek peek} only in that it throws an exception if
             * this queue is empty.
             * <p>This implementation returns the result of <tt>peek</tt>
             * unless the queue is empty.
             */
            // @ts-ignore
            public element(): java.lang.Object;
            /**
             * Removes all of the elements from this queue.
             * The queue will be empty after this call returns.
             * <p>This implementation repeatedly invokes {@link #poll poll} until it
             * returns <tt>null</tt>.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Adds all of the elements in the specified collection to this
             * queue.  Attempts to addAll of a queue to itself result in
             * <tt>IllegalArgumentException</tt>. Further, the behavior of
             * this operation is undefined if the specified collection is
             * modified while the operation is in progress.
             * <p>This implementation iterates over the specified collection,
             * and adds each element returned by the iterator to this
             * queue, in turn.  A runtime exception encountered while
             * trying to add an element (including, in particular, a
             * <tt>null</tt> element) may result in only some of the elements
             * having been successfully added when the associated exception is
             * thrown.
             */
            // @ts-ignore
            public addAll(c: java.util.Collection): boolean;
        }
    }
}
