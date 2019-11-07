// @ts-nocheck
declare namespace java {
    namespace util {
        namespace stream {
            // @ts-ignore
            interface DoubleStream {
                /**
                 * Returns a stream consisting of the elements of this stream that match
                 * the given predicate.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 filter(predicate: java.util.function$.DoublePredicate): java.util.stream.DoubleStream;
                /**
                 * Returns a stream consisting of the results of applying the given
                 * function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 map(mapper: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream;
                /**
                 * Returns an object-valued {@code Stream} consisting of the results of
                 * applying the given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 mapToObj(mapper: java.util.function$.DoubleFunction): java.util.stream.Stream;
                /**
                 * Returns an {@code IntStream} consisting of the results of applying the
                 * given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 mapToInt(mapper: java.util.function$.DoubleToIntFunction): java.util.stream.IntStream;
                /**
                 * Returns a {@code LongStream} consisting of the results of applying the
                 * given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 mapToLong(mapper: java.util.function$.DoubleToLongFunction): java.util.stream.LongStream;
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
                 flatMap(mapper: java.util.function$.DoubleFunction): java.util.stream.DoubleStream;
                /**
                 * Returns a stream consisting of the distinct elements of this stream. The
                 * elements are compared for equality according to
                 * {@link java.lang.Double#compare(double, double)}.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 distinct(): java.util.stream.DoubleStream;
                /**
                 * Returns a stream consisting of the elements of this stream in sorted
                 * order. The elements are compared for equality according to
                 * {@link java.lang.Double#compare(double, double)}.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 sorted(): java.util.stream.DoubleStream;
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
                 peek(action: java.util.function$.DoubleConsumer): java.util.stream.DoubleStream;
                /**
                 * Returns a stream consisting of the elements of this stream, truncated
                 * to be no longer than {@code maxSize} in length.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * stateful intermediate operation</a>.
                 */
                // @ts-ignore
                 limit(maxSize: number): java.util.stream.DoubleStream;
                /**
                 * Returns a stream consisting of the remaining elements of this stream
                 * after discarding the first {@code n} elements of the stream.
                 * If this stream contains fewer than {@code n} elements then an
                 * empty stream will be returned.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 skip(n: number): java.util.stream.DoubleStream;
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
                 forEach(action: java.util.function$.DoubleConsumer): void;
                /**
                 * Performs an action for each element of this stream, guaranteeing that
                 * each element is processed in encounter order for streams that have a
                 * defined encounter order.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 forEachOrdered(action: java.util.function$.DoubleConsumer): void;
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
                 * double result = identity;
                 * for (double element : this stream)
                 * result = accumulator.applyAsDouble(result, element)
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
                 reduce(identity: number, op: java.util.function$.DoubleBinaryOperator): number;
                /**
                 * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
                 * elements of this stream, using an
                 * <a href="package-summary.html#Associativity">associative</a> accumulation
                 * function, and returns an {@code OptionalDouble} describing the reduced
                 * value, if any. This is equivalent to:
                 * <pre>{@code
                 * boolean foundAny = false;
                 * double result = null;
                 * for (double element : this stream) {
                 * if (!foundAny) {
                 * foundAny = true;
                 * result = element;
                 * }
                 * else
                 * result = accumulator.applyAsDouble(result, element);
                 * }
                 * return foundAny ? OptionalDouble.of(result) : OptionalDouble.empty();
                 * }</pre>
                 * but is not constrained to execute sequentially.
                 * <p>The {@code accumulator} function must be an
                 * <a href="package-summary.html#Associativity">associative</a> function.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 reduce(op: java.util.function$.DoubleBinaryOperator): java.util.OptionalDouble;
                /**
                 * Performs a <a href="package-summary.html#MutableReduction">mutable
                 * reduction</a> operation on the elements of this stream.  A mutable
                 * reduction is one in which the reduced value is a mutable result container,
                 * such as an {@code ArrayList}, and elements are incorporated by updating
                 * the state of the result rather than by replacing the result.  This
                 * produces a result equivalent to:
                 * <pre>{@code
                 * R result = supplier.get();
                 * for (double element : this stream)
                 * accumulator.accept(result, element);
                 * return result;
                 * }</pre>
                 * <p>Like {@link #reduce(double, DoubleBinaryOperator)}, {@code collect}
                 * operations can be parallelized without requiring additional
                 * synchronization.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 collect(supplier: java.util.function$.Supplier, accumulator: java.util.function$.ObjDoubleConsumer, combiner: java.util.function$.BiConsumer): java.lang.Object;
                /**
                 * Returns the sum of elements in this stream.
                 * Summation is a special case of a <a
                 * href="package-summary.html#Reduction">reduction</a>. If
                 * floating-point summation were exact, this method would be
                 * equivalent to:
                 * <pre>{@code
                 * return reduce(0, Double::sum);
                 * }</pre>
                 * However, since floating-point summation is not exact, the above
                 * code is not necessarily equivalent to the summation computation
                 * done by this method.
                 * <p>If any stream element is a NaN or the sum is at any point a NaN
                 * then the sum will be NaN.
                 * The value of a floating-point sum is a function both
                 * of the input values as well as the order of addition
                 * operations. The order of addition operations of this method is
                 * intentionally not defined to allow for implementation
                 * flexibility to improve the speed and accuracy of the computed
                 * result.
                 * In particular, this method may be implemented using compensated
                 * summation or other technique to reduce the error bound in the
                 * numerical sum compared to a simple summation of {@code double}
                 * values.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 sum(): number;
                /**
                 * Returns an {@code OptionalDouble} describing the minimum element of this
                 * stream, or an empty OptionalDouble if this stream is empty.  The minimum
                 * element will be {@code Double.NaN} if any stream element was NaN. Unlike
                 * the numerical comparison operators, this method considers negative zero
                 * to be strictly smaller than positive zero. This is a special case of a
                 * <a href="package-summary.html#Reduction">reduction</a> and is
                 * equivalent to:
                 * <pre>{@code
                 * return reduce(Double::min);
                 * }</pre>
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 min(): java.util.OptionalDouble;
                /**
                 * Returns an {@code OptionalDouble} describing the maximum element of this
                 * stream, or an empty OptionalDouble if this stream is empty.  The maximum
                 * element will be {@code Double.NaN} if any stream element was NaN. Unlike
                 * the numerical comparison operators, this method considers negative zero
                 * to be strictly smaller than positive zero. This is a
                 * special case of a
                 * <a href="package-summary.html#Reduction">reduction</a> and is
                 * equivalent to:
                 * <pre>{@code
                 * return reduce(Double::max);
                 * }</pre>
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 max(): java.util.OptionalDouble;
                /**
                 * Returns the count of elements in this stream.  This is a special case of
                 * a <a href="package-summary.html#Reduction">reduction</a> and is
                 * equivalent to:
                 * <pre>{@code
                 * return mapToLong(e -> 1L).sum();
                 * }</pre>
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal operation</a>.
                 */
                // @ts-ignore
                 count(): number;
                /**
                 * Returns an {@code OptionalDouble} describing the arithmetic
                 * mean of elements of this stream, or an empty optional if this
                 * stream is empty.
                 * If any recorded value is a NaN or the sum is at any point a NaN
                 * then the average will be NaN.
                 * <p>The average returned can vary depending upon the order in
                 * which values are recorded.
                 * This method may be implemented using compensated summation or
                 * other technique to reduce the error bound in the {@link #sum
                 * numerical sum} used to compute the average.
                 * <p>The average is a special case of a <a
                 * href="package-summary.html#Reduction">reduction</a>.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 average(): java.util.OptionalDouble;
                /**
                 * Returns a {@code DoubleSummaryStatistics} describing various summary data
                 * about the elements of this stream.  This is a special
                 * case of a <a href="package-summary.html#Reduction">reduction</a>.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 summaryStatistics(): java.util.DoubleSummaryStatistics;
                /**
                 * Returns whether any elements of this stream match the provided
                 * predicate.  May not evaluate the predicate on all elements if not
                 * necessary for determining the result.  If the stream is empty then
                 * {@code false} is returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 anyMatch(predicate: java.util.function$.DoublePredicate): boolean;
                /**
                 * Returns whether all elements of this stream match the provided predicate.
                 * May not evaluate the predicate on all elements if not necessary for
                 * determining the result.  If the stream is empty then {@code true} is
                 * returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 allMatch(predicate: java.util.function$.DoublePredicate): boolean;
                /**
                 * Returns whether no elements of this stream match the provided predicate.
                 * May not evaluate the predicate on all elements if not necessary for
                 * determining the result.  If the stream is empty then {@code true} is
                 * returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 noneMatch(predicate: java.util.function$.DoublePredicate): boolean;
                /**
                 * Returns an {@link OptionalDouble} describing the first element of this
                 * stream, or an empty {@code OptionalDouble} if the stream is empty.  If
                 * the stream has no encounter order, then any element may be returned.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 findFirst(): java.util.OptionalDouble;
                /**
                 * Returns an {@link OptionalDouble} describing some element of the stream,
                 * or an empty {@code OptionalDouble} if the stream is empty.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 * <p>The behavior of this operation is explicitly nondeterministic; it is
                 * free to select any element in the stream.  This is to allow for maximal
                 * performance in parallel operations; the cost is that multiple invocations
                 * on the same source may not return the same result.  (If a stable result
                 * is desired, use {@link #findFirst()} instead.)
                 */
                // @ts-ignore
                 findAny(): java.util.OptionalDouble;
                /**
                 * Returns a {@code Stream} consisting of the elements of this stream,
                 * boxed to {@code Double}.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 boxed(): java.util.stream.Stream;
                // @ts-ignore
                 sequential(): java.util.stream.DoubleStream;
                // @ts-ignore
                 parallel(): java.util.stream.DoubleStream;
                // @ts-ignore
                 iterator(): java.util.PrimitiveIterator.OfDouble;
                // @ts-ignore
                 spliterator(): java.util.Spliterator.OfDouble;
                /**
                 * Returns a builder for a {@code DoubleStream}.
                 */
                // @ts-ignore
                 builder(): java.util.stream.DoubleStream.Builder;
                /**
                 * Returns an empty sequential {@code DoubleStream}.
                 */
                // @ts-ignore
                 empty(): java.util.stream.DoubleStream;
                /**
                 * Returns a sequential {@code DoubleStream} containing a single element.
                 */
                // @ts-ignore
                 of(t: number): java.util.stream.DoubleStream;
                /**
                 * Returns a sequential ordered stream whose elements are the specified values.
                 */
                // @ts-ignore
                 of(values: number): java.util.stream.DoubleStream;
                /**
                 * Returns an infinite sequential ordered {@code DoubleStream} produced by iterative
                 * application of a function {@code f} to an initial element {@code seed},
                 * producing a {@code Stream} consisting of {@code seed}, {@code f(seed)},
                 * {@code f(f(seed))}, etc.
                 * <p>The first element (position {@code 0}) in the {@code DoubleStream}
                 * will be the provided {@code seed}.  For {@code n > 0}, the element at
                 * position {@code n}, will be the result of applying the function {@code f}
                 * to the element at position {@code n - 1}.
                 */
                // @ts-ignore
                 iterate(seed: number, f: java.util.function$.DoubleUnaryOperator): java.util.stream.DoubleStream;
                /**
                 * Returns an infinite sequential unordered stream where each element is
                 * generated by the provided {@code DoubleSupplier}.  This is suitable for
                 * generating constant streams, streams of random elements, etc.
                 */
                // @ts-ignore
                 generate(s: java.util.function$.DoubleSupplier): java.util.stream.DoubleStream;
                /**
                 * Creates a lazily concatenated stream whose elements are all the
                 * elements of the first stream followed by all the elements of the
                 * second stream.  The resulting stream is ordered if both
                 * of the input streams are ordered, and parallel if either of the input
                 * streams is parallel.  When the resulting stream is closed, the close
                 * handlers for both input streams are invoked.
                 */
                // @ts-ignore
                 concat(a: java.util.stream.DoubleStream, b: java.util.stream.DoubleStream): java.util.stream.DoubleStream;
            }
        }
    }
}
