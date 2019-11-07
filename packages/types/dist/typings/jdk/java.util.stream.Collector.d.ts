// @ts-nocheck
declare namespace java {
    namespace util {
        namespace stream {
            // @ts-ignore
            interface Collector {
                /**
                 * A function that creates and returns a new mutable result container.
                 */
                // @ts-ignore
                 supplier(): java.util.function$.Supplier;
                /**
                 * A function that folds a value into a mutable result container.
                 */
                // @ts-ignore
                 accumulator(): java.util.function$.BiConsumer;
                /**
                 * A function that accepts two partial results and merges them.  The
                 * combiner function may fold state from one argument into the other and
                 * return that, or may return a new result container.
                 */
                // @ts-ignore
                 combiner(): java.util.function$.BinaryOperator;
                /**
                 * Perform the final transformation from the intermediate accumulation type
                 * {@code A} to the final result type {@code R}.
                 * <p>If the characteristic {@code IDENTITY_TRANSFORM} is
                 * set, this function may be presumed to be an identity transform with an
                 * unchecked cast from {@code A} to {@code R}.
                 */
                // @ts-ignore
                 finisher(): java.util.function$.Function;
                /**
                 * Returns a {@code Set} of {@code Collector.Characteristics} indicating
                 * the characteristics of this Collector.  This set should be immutable.
                 */
                // @ts-ignore
                 characteristics(): java.util.Set;
                /**
                 * Returns a new {@code Collector} described by the given {@code supplier},
                 * {@code accumulator}, and {@code combiner} functions.  The resulting
                 * {@code Collector} has the {@code Collector.Characteristics.IDENTITY_FINISH}
                 * characteristic.
                 */
                // @ts-ignore
                 of(supplier: java.util.function$.Supplier, accumulator: java.util.function$.BiConsumer, combiner: java.util.function$.BinaryOperator, characteristics: java.util.stream.Collector.Characteristics): java.util.stream.Collector;
                /**
                 * Returns a new {@code Collector} described by the given {@code supplier},
                 * {@code accumulator}, {@code combiner}, and {@code finisher} functions.
                 */
                // @ts-ignore
                 of(supplier: java.util.function$.Supplier, accumulator: java.util.function$.BiConsumer, combiner: java.util.function$.BinaryOperator, finisher: java.util.function$.Function, characteristics: java.util.stream.Collector.Characteristics): java.util.stream.Collector;
            }
        }
    }
}
