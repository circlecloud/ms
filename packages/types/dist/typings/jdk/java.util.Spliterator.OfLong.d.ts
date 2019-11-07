declare namespace java {
    namespace util {
        namespace Spliterator {
            // @ts-ignore
            interface OfLong {
                // @ts-ignore
                 trySplit(): java.util.Spliterator.OfLong;
                // @ts-ignore
                 tryAdvance(action: java.util.function$.LongConsumer): boolean;
                // @ts-ignore
                 forEachRemaining(action: java.util.function$.LongConsumer): void;
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
