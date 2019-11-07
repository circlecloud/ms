declare namespace java {
    namespace lang {
        // @ts-ignore
        interface Iterable {
            /**
             * Returns an iterator over elements of type {@code T}.
             */
            // @ts-ignore
             iterator(): java.util.Iterator;
            /**
             * Performs the given action for each element of the {@code Iterable}
             * until all elements have been processed or the action throws an
             * exception.  Unless otherwise specified by the implementing class,
             * actions are performed in the order of iteration (if an iteration order
             * is specified).  Exceptions thrown by the action are relayed to the
             * caller.
             */
            // @ts-ignore
             forEach(action: java.util.function$.Consumer): void;
            /**
             * Creates a {@link Spliterator} over the elements described by this
             * {@code Iterable}.
             */
            // @ts-ignore
             spliterator(): java.util.Spliterator;
        }
    }
}
