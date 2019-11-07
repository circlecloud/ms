declare namespace java {
    namespace util {
        namespace Spliterator {
            // @ts-ignore
            interface OfInt {
                // @ts-ignore
                 trySplit(): java.util.Spliterator.OfInt;
                // @ts-ignore
                 tryAdvance(action: java.util.function$.IntConsumer): boolean;
                // @ts-ignore
                 forEachRemaining(action: java.util.function$.IntConsumer): void;
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
