declare namespace java {
    namespace util {
        namespace PrimitiveIterator {
            // @ts-ignore
            interface OfInt {
                /**
                 * Returns the next {@code int} element in the iteration.
                 */
                // @ts-ignore
                 nextInt(): number;
                /**
                 * Performs the given action for each remaining element until all elements
                 * have been processed or the action throws an exception.  Actions are
                 * performed in the order of iteration, if that order is specified.
                 * Exceptions thrown by the action are relayed to the caller.
                 */
                // @ts-ignore
                 forEachRemaining(action: java.util.function$.IntConsumer): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 next(): java.lang.Integer;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 forEachRemaining(action: java.util.function$.Consumer): void;
            }
        }
    }
}
