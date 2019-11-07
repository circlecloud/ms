declare namespace java {
    namespace util {
        // @ts-ignore
        interface Iterator {
            /**
             * Returns {@code true} if the iteration has more elements.
             * (In other words, returns {@code true} if {@link #next} would
             * return an element rather than throwing an exception.)
             */
            // @ts-ignore
             hasNext(): boolean;
            /**
             * Returns the next element in the iteration.
             */
            // @ts-ignore
             next(): java.lang.Object;
            /**
             * Removes from the underlying collection the last element returned
             * by this iterator (optional operation).  This method can be called
             * only once per call to {@link #next}.  The behavior of an iterator
             * is unspecified if the underlying collection is modified while the
             * iteration is in progress in any way other than by calling this
             * method.
             */
            // @ts-ignore
             remove(): void;
            /**
             * Performs the given action for each remaining element until all elements
             * have been processed or the action throws an exception.  Actions are
             * performed in the order of iteration, if that order is specified.
             * Exceptions thrown by the action are relayed to the caller.
             */
            // @ts-ignore
             forEachRemaining(action: java.util.function$.Consumer): void;
        }
    }
}
