declare namespace java {
    namespace util {
        namespace stream {
            // @ts-ignore
            interface LongStream {
                /**
                 * Returns a stream consisting of the elements of this stream that match
                 * the given predicate.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 filter(predicate: java.util.function$.LongPredicate): java.util.stream.LongStream;
                /**
                 * Returns a stream consisting of the results of applying the given
                 * function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 map(mapper: java.util.function$.LongUnaryOperator): java.util.stream.LongStream;
                /**
                 * Returns an object-valued {@code Stream} consisting of the results of
                 * applying the given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 mapToObj(mapper: java.util.function$.LongFunction): java.util.stream.Stream;
                /**
                 * Returns an {@code IntStream} consisting of the results of applying the
                 * given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 mapToInt(mapper: java.util.function$.LongToIntFunction): java.util.stream.IntStream;
                /**
                 * Returns a {@code DoubleStream} consisting of the results of applying the
                 * given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 mapToDouble(mapper: java.util.function$.LongToDoubleFunction): java.util.stream.DoubleStream;
                /**
                 * Returns a stream consisting of the results of replacing each element of
                 * this stream with the contents of a mapped stream produced by applying
                 * the provided mapping function to each element.  Each mapped stream is
                 * {@link java.util.stream.BaseStream#close() closed} after its contents
                 * have been placed into this stream.  (If a mapped stream is {@code null}
                 * an empty stream is used, instead.)
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 flatMap(mapper: java.util.function$.LongFunction): java.util.stream.LongStream;
                /**
                 * Returns a stream consisting of the distinct elements of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 distinct(): java.util.stream.LongStream;
                /**
                 * Returns a stream consisting of the elements of this stream in sorted
                 * order.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 sorted(): java.util.stream.LongStream;
                /**
                 * Returns a stream consisting of the elements of this stream, additionally
                 * performing the provided action on each element as elements are consumed
                 * from the resulting stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 * <p>For parallel stream pipelines, the action may be called at
                 * whatever time and in whatever thread the element is made available by the
                 * upstream operation.  If the action modifies shared state,
                 * it is responsible for providing the required synchronization.
                 */
                // @ts-ignore
                 peek(action: java.util.function$.LongConsumer): java.util.stream.LongStream;
                /**
                 * Returns a stream consisting of the elements of this stream, truncated
                 * to be no longer than {@code maxSize} in length.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * stateful intermediate operation</a>.
                 */
                // @ts-ignore
                 limit(maxSize: number): java.util.stream.LongStream;
                /**
                 * Returns a stream consisting of the remaining elements of this stream
                 * after discarding the first {@code n} elements of the stream.
                 * If this stream contains fewer than {@code n} elements then an
                 * empty stream will be returned.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 skip(n: number): java.util.stream.LongStream;
                /**
                 * Performs an action for each element of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 * <p>For parallel stream pipelines, this operation does <em>not</em>
                 * guarantee to respect the encounter order of the stream, as doing so
                 * would sacrifice the benefit of parallelism.  For any given element, the
                 * action may be performed at whatever time and in whatever thread the
                 * library chooses.  If the action accesses shared state, it is
                 * responsible for providing the required synchronization.
                 */
                // @ts-ignore
                 forEach(action: java.util.function$.LongConsumer): void;
                /**
                 * Performs an action for each element of this stream, guaranteeing that
                 * each element is processed in encounter order for streams that have a
                 * defined encounter order.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 forEachOrdered(action: java.util.function$.LongConsumer): void;
                /**
                 * Returns an array containing the elements of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 toArray(): number[];
                /**
                 * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
                 * elements of this stream, using the provided identity value and an
                 * <a href="package-summary.html#Associativity">associative</a>
                 * accumulation function, and returns the reduced value.  This is equivalent
                 * to:
                 * <pre>{@code
                 * long result = identity;
                 * for (long element : this stream)
                 * result = accumulator.applyAsLong(result, element)
                 * return result;
                 * }</pre>
                 * but is not constrained to execute sequentially.
                 * <p>The {@code identity} value must be an identity for the accumulator
                 * function. This means that for all {@code x},
                 * {@code accumulator.apply(identity, x)} is equal to {@code x}.
                 * The {@code accumulator} function must be an
                 * <a href="package-summary.html#Associativity">associative</a> function.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 reduce(identity: number, op: java.util.function$.LongBinaryOperator): number;
                /**
                 * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
                 * elements of this stream, using an
                 * <a href="package-summary.html#Associativity">associative</a> accumulation
                 * function, and returns an {@code OptionalLong} describing the reduced value,
                 * if any. This is equivalent to:
                 * <pre>{@code
                 * boolean foundAny = false;
                 * long result = null;
                 * for (long element : this stream) {
                 * if (!foundAny) {
                 * foundAny = true;
                 * result = element;
                 * }
                 * else
                 * result = accumulator.applyAsLong(result, element);
                 * }
                 * return foundAny ? OptionalLong.of(result) : OptionalLong.empty();
                 * }</pre>
                 * but is not constrained to execute sequentially.
                 * <p>The {@code accumulator} function must be an
                 * <a href="package-summary.html#Associativity">associative</a> function.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 reduce(op: java.util.function$.LongBinaryOperator): java.util.OptionalLong;
                /**
                 * Performs a <a href="package-summary.html#MutableReduction">mutable
                 * reduction</a> operation on the elements of this stream.  A mutable
                 * reduction is one in which the reduced value is a mutable result container,
                 * such as an {@code ArrayList}, and elements are incorporated by updating
                 * the state of the result rather than by replacing the result.  This
                 * produces a result equivalent to:
                 * <pre>{@code
                 * R result = supplier.get();
                 * for (long element : this stream)
                 * accumulator.accept(result, element);
                 * return result;
                 * }</pre>
                 * <p>Like {@link #reduce(long, LongBinaryOperator)}, {@code collect} operations
                 * can be parallelized without requiring additional synchronization.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 collect(supplier: java.util.function$.Supplier, accumulator: java.util.function$.ObjLongConsumer, combiner: java.util.function$.BiConsumer): java.lang.Object;
                /**
                 * Returns the sum of elements in this stream.  This is a special case
                 * of a <a href="package-summary.html#Reduction">reduction</a>
                 * and is equivalent to:
                 * <pre>{@code
                 * return reduce(0, Long::sum);
                 * }</pre>
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 sum(): number;
                /**
                 * Returns an {@code OptionalLong} describing the minimum element of this
                 * stream, or an empty optional if this stream is empty.  This is a special
                 * case of a <a href="package-summary.html#Reduction">reduction</a>
                 * and is equivalent to:
                 * <pre>{@code
                 * return reduce(Long::min);
                 * }</pre>
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal operation</a>.
                 */
                // @ts-ignore
                 min(): java.util.OptionalLong;
                /**
                 * Returns an {@code OptionalLong} describing the maximum element of this
                 * stream, or an empty optional if this stream is empty.  This is a special
                 * case of a <a href="package-summary.html#Reduction">reduction</a>
                 * and is equivalent to:
                 * <pre>{@code
                 * return reduce(Long::max);
                 * }</pre>
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 max(): java.util.OptionalLong;
                /**
                 * Returns the count of elements in this stream.  This is a special case of
                 * a <a href="package-summary.html#Reduction">reduction</a> and is
                 * equivalent to:
                 * <pre>{@code
                 * return map(e -> 1L).sum();
                 * }</pre>
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal operation</a>.
                 */
                // @ts-ignore
                 count(): number;
                /**
                 * Returns an {@code OptionalDouble} describing the arithmetic mean of elements of
                 * this stream, or an empty optional if this stream is empty.  This is a
                 * special case of a
                 * <a href="package-summary.html#Reduction">reduction</a>.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 average(): java.util.OptionalDouble;
                /**
                 * Returns a {@code LongSummaryStatistics} describing various summary data
                 * about the elements of this stream.  This is a special case of a
                 * <a href="package-summary.html#Reduction">reduction</a>.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 summaryStatistics(): java.util.LongSummaryStatistics;
                /**
                 * Returns whether any elements of this stream match the provided
                 * predicate.  May not evaluate the predicate on all elements if not
                 * necessary for determining the result.  If the stream is empty then
                 * {@code false} is returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 anyMatch(predicate: java.util.function$.LongPredicate): boolean;
                /**
                 * Returns whether all elements of this stream match the provided predicate.
                 * May not evaluate the predicate on all elements if not necessary for
                 * determining the result.  If the stream is empty then {@code true} is
                 * returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 allMatch(predicate: java.util.function$.LongPredicate): boolean;
                /**
                 * Returns whether no elements of this stream match the provided predicate.
                 * May not evaluate the predicate on all elements if not necessary for
                 * determining the result.  If the stream is empty then {@code true} is
                 * returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 noneMatch(predicate: java.util.function$.LongPredicate): boolean;
                /**
                 * Returns an {@link OptionalLong} describing the first element of this
                 * stream, or an empty {@code OptionalLong} if the stream is empty.  If the
                 * stream has no encounter order, then any element may be returned.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 findFirst(): java.util.OptionalLong;
                /**
                 * Returns an {@link OptionalLong} describing some element of the stream, or
                 * an empty {@code OptionalLong} if the stream is empty.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 * <p>The behavior of this operation is explicitly nondeterministic; it is
                 * free to select any element in the stream.  This is to allow for maximal
                 * performance in parallel operations; the cost is that multiple invocations
                 * on the same source may not return the same result.  (If a stable result
                 * is desired, use {@link #findFirst()} instead.)
                 */
                // @ts-ignore
                 findAny(): java.util.OptionalLong;
                /**
                 * Returns a {@code DoubleStream} consisting of the elements of this stream,
                 * converted to {@code double}.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 asDoubleStream(): java.util.stream.DoubleStream;
                /**
                 * Returns a {@code Stream} consisting of the elements of this stream,
                 * each boxed to a {@code Long}.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 boxed(): java.util.stream.Stream;
                // @ts-ignore
                 sequential(): java.util.stream.LongStream;
                // @ts-ignore
                 parallel(): java.util.stream.LongStream;
                // @ts-ignore
                 iterator(): java.util.PrimitiveIterator.OfLong;
                // @ts-ignore
                 spliterator(): java.util.Spliterator.OfLong;
                /**
                 * Returns a builder for a {@code LongStream}.
                 */
                // @ts-ignore
                 builder(): java.util.stream.LongStream.Builder;
                /**
                 * Returns an empty sequential {@code LongStream}.
                 */
                // @ts-ignore
                 empty(): java.util.stream.LongStream;
                /**
                 * Returns a sequential {@code LongStream} containing a single element.
                 */
                // @ts-ignore
                 of(t: number): java.util.stream.LongStream;
                /**
                 * Returns a sequential ordered stream whose elements are the specified values.
                 */
                // @ts-ignore
                 of(values: number): java.util.stream.LongStream;
                /**
                 * Returns an infinite sequential ordered {@code LongStream} produced by iterative
                 * application of a function {@code f} to an initial element {@code seed},
                 * producing a {@code Stream} consisting of {@code seed}, {@code f(seed)},
                 * {@code f(f(seed))}, etc.
                 * <p>The first element (position {@code 0}) in the {@code LongStream} will
                 * be the provided {@code seed}.  For {@code n > 0}, the element at position
                 * {@code n}, will be the result of applying the function {@code f} to the
                 * element at position {@code n - 1}.
                 */
                // @ts-ignore
                 iterate(seed: number, f: java.util.function$.LongUnaryOperator): java.util.stream.LongStream;
                /**
                 * Returns an infinite sequential unordered stream where each element is
                 * generated by the provided {@code LongSupplier}.  This is suitable for
                 * generating constant streams, streams of random elements, etc.
                 */
                // @ts-ignore
                 generate(s: java.util.function$.LongSupplier): java.util.stream.LongStream;
                /**
                 * Returns a sequential ordered {@code LongStream} from {@code startInclusive}
                 * (inclusive) to {@code endExclusive} (exclusive) by an incremental step of
                 * {@code 1}.
                 */
                // @ts-ignore
                 range(startInclusive: number, endExclusive: number): java.util.stream.LongStream;
                /**
                 * Returns a sequential ordered {@code LongStream} from {@code startInclusive}
                 * (inclusive) to {@code endInclusive} (inclusive) by an incremental step of
                 * {@code 1}.
                 */
                // @ts-ignore
                 rangeClosed(startInclusive: number, endInclusive: number): java.util.stream.LongStream;
                /**
                 * Creates a lazily concatenated stream whose elements are all the
                 * elements of the first stream followed by all the elements of the
                 * second stream.  The resulting stream is ordered if both
                 * of the input streams are ordered, and parallel if either of the input
                 * streams is parallel.  When the resulting stream is closed, the close
                 * handlers for both input streams are invoked.
                 */
                // @ts-ignore
                 concat(a: java.util.stream.LongStream, b: java.util.stream.LongStream): java.util.stream.LongStream;
            }
        }
    }
}
