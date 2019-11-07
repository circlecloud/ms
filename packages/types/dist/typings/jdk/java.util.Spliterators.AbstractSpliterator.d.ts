declare namespace java {
    namespace util {
        namespace Spliterators {
            // @ts-ignore
            abstract class AbstractSpliterator extends java.lang.Object {
                /**
                 * Creates a spliterator reporting the given estimated size and
                 * additionalCharacteristics.
                 */
                // @ts-ignore
                constructor(est: number, additionalCharacteristics: number)
                /**
                 * {@inheritDoc}
                 * This implementation permits limited parallelism.
                 */
                // @ts-ignore
                public trySplit(): java.util.Spliterator;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public estimateSize(): number;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public characteristics(): number;
            }
        }
    }
}
