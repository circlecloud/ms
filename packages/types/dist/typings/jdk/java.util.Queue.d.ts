// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface Queue {
            /**
             * Inserts the specified element into this queue if it is possible to do so
             * immediately without violating capacity restrictions, returning
             * {@code true} upon success and throwing an {@code IllegalStateException}
             * if no space is currently available.
             */
            // @ts-ignore
             add(e: java.lang.Object): boolean;
            /**
             * Inserts the specified element into this queue if it is possible to do
             * so immediately without violating capacity restrictions.
             * When using a capacity-restricted queue, this method is generally
             * preferable to {@link #add}, which can fail to insert an element only
             * by throwing an exception.
             */
            // @ts-ignore
             offer(e: java.lang.Object): boolean;
            /**
             * Retrieves and removes the head of this queue.  This method differs
             * from {@link #poll poll} only in that it throws an exception if this
             * queue is empty.
             */
            // @ts-ignore
             remove(): java.lang.Object;
            /**
             * Retrieves and removes the head of this queue,
             * or returns {@code null} if this queue is empty.
             */
            // @ts-ignore
             poll(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the head of this queue.  This method
             * differs from {@link #peek peek} only in that it throws an exception
             * if this queue is empty.
             */
            // @ts-ignore
             element(): java.lang.Object;
            /**
             * Retrieves, but does not remove, the head of this queue,
             * or returns {@code null} if this queue is empty.
             */
            // @ts-ignore
             peek(): java.lang.Object;
        }
    }
}
