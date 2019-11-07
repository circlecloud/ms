declare namespace java {
    namespace util {
        namespace Spliterator {
            // @ts-ignore
            interface OfPrimitive {
                // @ts-ignore
                 trySplit(): java.util.Spliterator.OfPrimitive;
                /**
                 * If a remaining element exists, performs the given action on it,
                 * returning {@code true}; else returns {@code false}.  If this
                 * Spliterator is {@link #ORDERED} the action is performed on the
                 * next element in encounter order.  Exceptions thrown by the
                 * action are relayed to the caller.
                 */
                // @ts-ignore
                 tryAdvance(action: java.lang.Object): boolean;
                /**
                 * Performs the given action for each remaining element, sequentially in
                 * the current thread, until all elements have been processed or the
                 * action throws an exception.  If this Spliterator is {@link #ORDERED},
                 * actions are performed in encounter order.  Exceptions thrown by the
                 * action are relayed to the caller.
                 */
                // @ts-ignore
                 forEachRemaining(action: java.lang.Object): void;
            }
        }
    }
}
