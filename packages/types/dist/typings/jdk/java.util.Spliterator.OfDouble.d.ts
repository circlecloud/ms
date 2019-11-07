declare namespace java {
    namespace util {
        namespace Spliterator {
            // @ts-ignore
            interface OfDouble {
                // @ts-ignore
                 trySplit(): java.util.Spliterator.OfDouble;
                // @ts-ignore
                 tryAdvance(action: java.util.function$.DoubleConsumer): boolean;
                // @ts-ignore
                 forEachRemaining(action: java.util.function$.DoubleConsumer): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 tryAdvance(action: java.util.function$.Consumer): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 forEachRemaining(action: java.util.function$.Consumer): void;
            }
        }
    }
}
