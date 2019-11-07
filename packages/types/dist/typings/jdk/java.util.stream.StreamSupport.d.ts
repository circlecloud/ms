declare namespace java {
    namespace util {
        namespace stream {
            // @ts-ignore
             class StreamSupport extends java.lang.Object {
                /**
                 * Creates a new sequential or parallel {@code Stream} from a
                 * {@code Spliterator}.
                 * <p>The spliterator is only traversed, split, or queried for estimated
                 * size after the terminal operation of the stream pipeline commences.
                 * <p>It is strongly recommended the spliterator report a characteristic of
                 * {@code IMMUTABLE} or {@code CONCURRENT}, or be
                 * <a href="../Spliterator.html#binding">late-binding</a>.  Otherwise,
                 * {@link #stream(java.util.function.Supplier, int, boolean)} should be used
                 * to reduce the scope of potential interference with the source.  See
                 * <a href="package-summary.html#NonInterference">Non-Interference</a> for
                 * more details.
                 */
                // @ts-ignore
                public static stream(spliterator: java.util.Spliterator, parallel: boolean): java.util.stream.Stream;
                /**
                 * Creates a new sequential or parallel {@code Stream} from a
                 * {@code Supplier} of {@code Spliterator}.
                 * <p>The {@link Supplier#get()} method will be invoked on the supplier no
                 * more than once, and only after the terminal operation of the stream pipeline
                 * commences.
                 * <p>For spliterators that report a characteristic of {@code IMMUTABLE}
                 * or {@code CONCURRENT}, or that are
                 * <a href="../Spliterator.html#binding">late-binding</a>, it is likely
                 * more efficient to use {@link #stream(java.util.Spliterator, boolean)}
                 * instead.
                 * <p>The use of a {@code Supplier} in this form provides a level of
                 * indirection that reduces the scope of potential interference with the
                 * source.  Since the supplier is only invoked after the terminal operation
                 * commences, any modifications to the source up to the start of the
                 * terminal operation are reflected in the stream result.  See
                 * <a href="package-summary.html#NonInterference">Non-Interference</a> for
                 * more details.
                 */
                // @ts-ignore
                public static stream(supplier: java.util.function$.Supplier, characteristics: number, parallel: boolean): java.util.stream.Stream;
                /**
                 * Creates a new sequential or parallel {@code IntStream} from a
                 * {@code Spliterator.OfInt}.
                 * <p>The spliterator is only traversed, split, or queried for estimated size
                 * after the terminal operation of the stream pipeline commences.
                 * <p>It is strongly recommended the spliterator report a characteristic of
                 * {@code IMMUTABLE} or {@code CONCURRENT}, or be
                 * <a href="../Spliterator.html#binding">late-binding</a>.  Otherwise,
                 * {@link #intStream(java.util.function.Supplier, int, boolean)} should be
                 * used to reduce the scope of potential interference with the source.  See
                 * <a href="package-summary.html#NonInterference">Non-Interference</a> for
                 * more details.
                 */
                // @ts-ignore
                public static intStream(spliterator: java.util.Spliterator.OfInt, parallel: boolean): java.util.stream.IntStream;
                /**
                 * Creates a new sequential or parallel {@code IntStream} from a
                 * {@code Supplier} of {@code Spliterator.OfInt}.
                 * <p>The {@link Supplier#get()} method will be invoked on the supplier no
                 * more than once, and only after the terminal operation of the stream pipeline
                 * commences.
                 * <p>For spliterators that report a characteristic of {@code IMMUTABLE}
                 * or {@code CONCURRENT}, or that are
                 * <a href="../Spliterator.html#binding">late-binding</a>, it is likely
                 * more efficient to use {@link #intStream(java.util.Spliterator.OfInt, boolean)}
                 * instead.
                 * <p>The use of a {@code Supplier} in this form provides a level of
                 * indirection that reduces the scope of potential interference with the
                 * source.  Since the supplier is only invoked after the terminal operation
                 * commences, any modifications to the source up to the start of the
                 * terminal operation are reflected in the stream result.  See
                 * <a href="package-summary.html#NonInterference">Non-Interference</a> for
                 * more details.
                 */
                // @ts-ignore
                public static intStream(supplier: java.util.function$.Supplier, characteristics: number, parallel: boolean): java.util.stream.IntStream;
                /**
                 * Creates a new sequential or parallel {@code LongStream} from a
                 * {@code Spliterator.OfLong}.
                 * <p>The spliterator is only traversed, split, or queried for estimated
                 * size after the terminal operation of the stream pipeline commences.
                 * <p>It is strongly recommended the spliterator report a characteristic of
                 * {@code IMMUTABLE} or {@code CONCURRENT}, or be
                 * <a href="../Spliterator.html#binding">late-binding</a>.  Otherwise,
                 * {@link #longStream(java.util.function.Supplier, int, boolean)} should be
                 * used to reduce the scope of potential interference with the source.  See
                 * <a href="package-summary.html#NonInterference">Non-Interference</a> for
                 * more details.
                 */
                // @ts-ignore
                public static longStream(spliterator: java.util.Spliterator.OfLong, parallel: boolean): java.util.stream.LongStream;
                /**
                 * Creates a new sequential or parallel {@code LongStream} from a
                 * {@code Supplier} of {@code Spliterator.OfLong}.
                 * <p>The {@link Supplier#get()} method will be invoked on the supplier no
                 * more than once, and only after the terminal operation of the stream pipeline
                 * commences.
                 * <p>For spliterators that report a characteristic of {@code IMMUTABLE}
                 * or {@code CONCURRENT}, or that are
                 * <a href="../Spliterator.html#binding">late-binding</a>, it is likely
                 * more efficient to use {@link #longStream(java.util.Spliterator.OfLong, boolean)}
                 * instead.
                 * <p>The use of a {@code Supplier} in this form provides a level of
                 * indirection that reduces the scope of potential interference with the
                 * source.  Since the supplier is only invoked after the terminal operation
                 * commences, any modifications to the source up to the start of the
                 * terminal operation are reflected in the stream result.  See
                 * <a href="package-summary.html#NonInterference">Non-Interference</a> for
                 * more details.
                 */
                // @ts-ignore
                public static longStream(supplier: java.util.function$.Supplier, characteristics: number, parallel: boolean): java.util.stream.LongStream;
                /**
                 * Creates a new sequential or parallel {@code DoubleStream} from a
                 * {@code Spliterator.OfDouble}.
                 * <p>The spliterator is only traversed, split, or queried for estimated size
                 * after the terminal operation of the stream pipeline commences.
                 * <p>It is strongly recommended the spliterator report a characteristic of
                 * {@code IMMUTABLE} or {@code CONCURRENT}, or be
                 * <a href="../Spliterator.html#binding">late-binding</a>.  Otherwise,
                 * {@link #doubleStream(java.util.function.Supplier, int, boolean)} should
                 * be used to reduce the scope of potential interference with the source.  See
                 * <a href="package-summary.html#NonInterference">Non-Interference</a> for
                 * more details.
                 */
                // @ts-ignore
                public static doubleStream(spliterator: java.util.Spliterator.OfDouble, parallel: boolean): java.util.stream.DoubleStream;
                /**
                 * Creates a new sequential or parallel {@code DoubleStream} from a
                 * {@code Supplier} of {@code Spliterator.OfDouble}.
                 * <p>The {@link Supplier#get()} method will be invoked on the supplier no
                 * more than once, and only after the terminal operation of the stream pipeline
                 * commences.
                 * <p>For spliterators that report a characteristic of {@code IMMUTABLE}
                 * or {@code CONCURRENT}, or that are
                 * <a href="../Spliterator.html#binding">late-binding</a>, it is likely
                 * more efficient to use {@link #doubleStream(java.util.Spliterator.OfDouble, boolean)}
                 * instead.
                 * <p>The use of a {@code Supplier} in this form provides a level of
                 * indirection that reduces the scope of potential interference with the
                 * source.  Since the supplier is only invoked after the terminal operation
                 * commences, any modifications to the source up to the start of the
                 * terminal operation are reflected in the stream result.  See
                 * <a href="package-summary.html#NonInterference">Non-Interference</a> for
                 * more details.
                 */
                // @ts-ignore
                public static doubleStream(supplier: java.util.function$.Supplier, characteristics: number, parallel: boolean): java.util.stream.DoubleStream;
            }
        }
    }
}
