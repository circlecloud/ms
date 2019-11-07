declare namespace java {
    namespace util {
        // @ts-ignore
        interface PrimitiveIterator {
            /**
             * Performs the given action for each remaining element, in the order
             * elements occur when iterating, until all elements have been processed
             * or the action throws an exception.  Errors or runtime exceptions
             * thrown by the action are relayed to the caller.
             */
            // @ts-ignore
             forEachRemaining(action: java.lang.Object): void;
        }
    }
}
