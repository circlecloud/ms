// @ts-nocheck
declare namespace java {
    namespace util {
        namespace PrimitiveIterator {
            // @ts-ignore
            interface OfDouble {
                /**
                 * Returns the next {@code double} element in the iteration.
                 */
                // @ts-ignore
                 nextDouble(): number;
                /**
                 * Performs the given action for each remaining element until all elements
                 * have been processed or the action throws an exception.  Actions are
                 * performed in the order of iteration, if that order is specified.
                 * Exceptions thrown by the action are relayed to the caller.
                 */
                // @ts-ignore
                 forEachRemaining(action: java.util.function$.DoubleConsumer): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 next(): java.lang.Double;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 forEachRemaining(action: java.util.function$.Consumer): void;
            }
        }
    }
}
