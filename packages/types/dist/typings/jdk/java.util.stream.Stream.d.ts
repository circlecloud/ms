declare namespace java {
    namespace util {
        namespace stream {
            // @ts-ignore
            interface Stream {
                /**
                 * Returns a stream consisting of the elements of this stream that match
                 * the given predicate.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 filter(predicate: java.util.function$.Predicate): java.util.stream.Stream;
                /**
                 * Returns a stream consisting of the results of applying the given
                 * function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 map(mapper: java.util.function$.Function): java.util.stream.Stream;
                /**
                 * Returns an {@code IntStream} consisting of the results of applying the
                 * given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 mapToInt(mapper: java.util.function$.ToIntFunction): java.util.stream.IntStream;
                /**
                 * Returns a {@code LongStream} consisting of the results of applying the
                 * given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 mapToLong(mapper: java.util.function$.ToLongFunction): java.util.stream.LongStream;
                /**
                 * Returns a {@code DoubleStream} consisting of the results of applying the
                 * given function to the elements of this stream.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 mapToDouble(mapper: java.util.function$.ToDoubleFunction): java.util.stream.DoubleStream;
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
                 flatMap(mapper: java.util.function$.Function): java.util.stream.Stream;
                /**
                 * Returns an {@code IntStream} consisting of the results of replacing each
                 * element of this stream with the contents of a mapped stream produced by
                 * applying the provided mapping function to each element.  Each mapped
                 * stream is {@link java.util.stream.BaseStream#close() closed} after its
                 * contents have been placed into this stream.  (If a mapped stream is
                 * {@code null} an empty stream is used, instead.)
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 flatMapToInt(mapper: java.util.function$.Function): java.util.stream.IntStream;
                /**
                 * Returns an {@code LongStream} consisting of the results of replacing each
                 * element of this stream with the contents of a mapped stream produced by
                 * applying the provided mapping function to each element.  Each mapped
                 * stream is {@link java.util.stream.BaseStream#close() closed} after its
                 * contents have been placed into this stream.  (If a mapped stream is
                 * {@code null} an empty stream is used, instead.)
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 flatMapToLong(mapper: java.util.function$.Function): java.util.stream.LongStream;
                /**
                 * Returns an {@code DoubleStream} consisting of the results of replacing
                 * each element of this stream with the contents of a mapped stream produced
                 * by applying the provided mapping function to each element.  Each mapped
                 * stream is {@link java.util.stream.BaseStream#close() closed} after its
                 * contents have placed been into this stream.  (If a mapped stream is
                 * {@code null} an empty stream is used, instead.)
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 flatMapToDouble(mapper: java.util.function$.Function): java.util.stream.DoubleStream;
                /**
                 * Returns a stream consisting of the distinct elements (according to
                 * {@link Object#equals(Object)}) of this stream.
                 * <p>For ordered streams, the selection of distinct elements is stable
                 * (for duplicated elements, the element appearing first in the encounter
                 * order is preserved.)  For unordered streams, no stability guarantees
                 * are made.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 distinct(): java.util.stream.Stream;
                /**
                 * Returns a stream consisting of the elements of this stream, sorted
                 * according to natural order.  If the elements of this stream are not
                 * {@code Comparable}, a {@code java.lang.ClassCastException} may be thrown
                 * when the terminal operation is executed.
                 * <p>For ordered streams, the sort is stable.  For unordered streams, no
                 * stability guarantees are made.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 sorted(): java.util.stream.Stream;
                /**
                 * Returns a stream consisting of the elements of this stream, sorted
                 * according to the provided {@code Comparator}.
                 * <p>For ordered streams, the sort is stable.  For unordered streams, no
                 * stability guarantees are made.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 sorted(comparator: java.util.Comparator): java.util.stream.Stream;
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
                 peek(action: java.util.function$.Consumer): java.util.stream.Stream;
                /**
                 * Returns a stream consisting of the elements of this stream, truncated
                 * to be no longer than {@code maxSize} in length.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * stateful intermediate operation</a>.
                 */
                // @ts-ignore
                 limit(maxSize: number): java.util.stream.Stream;
                /**
                 * Returns a stream consisting of the remaining elements of this stream
                 * after discarding the first {@code n} elements of the stream.
                 * If this stream contains fewer than {@code n} elements then an
                 * empty stream will be returned.
                 * <p>This is a <a href="package-summary.html#StreamOps">stateful
                 * intermediate operation</a>.
                 */
                // @ts-ignore
                 skip(n: number): java.util.stream.Stream;
                /**
                 * Performs an action for each element of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 * <p>The behavior of this operation is explicitly nondeterministic.
                 * For parallel stream pipelines, this operation does <em>not</em>
                 * guarantee to respect the encounter order of the stream, as doing so
                 * would sacrifice the benefit of parallelism.  For any given element, the
                 * action may be performed at whatever time and in whatever thread the
                 * library chooses.  If the action accesses shared state, it is
                 * responsible for providing the required synchronization.
                 */
                // @ts-ignore
                 forEach(action: java.util.function$.Consumer): void;
                /**
                 * Performs an action for each element of this stream, in the encounter
                 * order of the stream if the stream has a defined encounter order.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 * <p>This operation processes the elements one at a time, in encounter
                 * order if one exists.  Performing the action for one element
                 * <a href="../concurrent/package-summary.html#MemoryVisibility"><i>happens-before</i></a>
                 * performing the action for subsequent elements, but for any given element,
                 * the action may be performed in whatever thread the library chooses.
                 */
                // @ts-ignore
                 forEachOrdered(action: java.util.function$.Consumer): void;
                /**
                 * Returns an array containing the elements of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 toArray(): java.lang.Object[];
                /**
                 * Returns an array containing the elements of this stream, using the
                 * provided {@code generator} function to allocate the returned array, as
                 * well as any additional arrays that might be required for a partitioned
                 * execution or for resizing.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 toArray(generator: java.util.function$.IntFunction): java.lang.Object[];
                /**
                 * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
                 * elements of this stream, using the provided identity value and an
                 * <a href="package-summary.html#Associativity">associative</a>
                 * accumulation function, and returns the reduced value.  This is equivalent
                 * to:
                 * <pre>{@code
                 * T result = identity;
                 * for (T element : this stream)
                 * result = accumulator.apply(result, element)
                 * return result;
                 * }</pre>
                 * but is not constrained to execute sequentially.
                 * <p>The {@code identity} value must be an identity for the accumulator
                 * function. This means that for all {@code t},
                 * {@code accumulator.apply(identity, t)} is equal to {@code t}.
                 * The {@code accumulator} function must be an
                 * <a href="package-summary.html#Associativity">associative</a> function.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 reduce(identity: java.lang.Object, accumulator: java.util.function$.BinaryOperator): java.lang.Object;
                /**
                 * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
                 * elements of this stream, using an
                 * <a href="package-summary.html#Associativity">associative</a> accumulation
                 * function, and returns an {@code Optional} describing the reduced value,
                 * if any. This is equivalent to:
                 * <pre>{@code
                 * boolean foundAny = false;
                 * T result = null;
                 * for (T element : this stream) {
                 * if (!foundAny) {
                 * foundAny = true;
                 * result = element;
                 * }
                 * else
                 * result = accumulator.apply(result, element);
                 * }
                 * return foundAny ? Optional.of(result) : Optional.empty();
                 * }</pre>
                 * but is not constrained to execute sequentially.
                 * <p>The {@code accumulator} function must be an
                 * <a href="package-summary.html#Associativity">associative</a> function.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 reduce(accumulator: java.util.function$.BinaryOperator): java.util.Optional;
                /**
                 * Performs a <a href="package-summary.html#Reduction">reduction</a> on the
                 * elements of this stream, using the provided identity, accumulation and
                 * combining functions.  This is equivalent to:
                 * <pre>{@code
                 * U result = identity;
                 * for (T element : this stream)
                 * result = accumulator.apply(result, element)
                 * return result;
                 * }</pre>
                 * but is not constrained to execute sequentially.
                 * <p>The {@code identity} value must be an identity for the combiner
                 * function.  This means that for all {@code u}, {@code combiner(identity, u)}
                 * is equal to {@code u}.  Additionally, the {@code combiner} function
                 * must be compatible with the {@code accumulator} function; for all
                 * {@code u} and {@code t}, the following must hold:
                 * <pre>{@code
                 * combiner.apply(u, accumulator.apply(identity, t)) == accumulator.apply(u, t)
                 * }</pre>
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 reduce(identity: java.lang.Object, accumulator: java.util.function$.BiFunction, combiner: java.util.function$.BinaryOperator): java.lang.Object;
                /**
                 * Performs a <a href="package-summary.html#MutableReduction">mutable
                 * reduction</a> operation on the elements of this stream.  A mutable
                 * reduction is one in which the reduced value is a mutable result container,
                 * such as an {@code ArrayList}, and elements are incorporated by updating
                 * the state of the result rather than by replacing the result.  This
                 * produces a result equivalent to:
                 * <pre>{@code
                 * R result = supplier.get();
                 * for (T element : this stream)
                 * accumulator.accept(result, element);
                 * return result;
                 * }</pre>
                 * <p>Like {@link #reduce(Object, BinaryOperator)}, {@code collect} operations
                 * can be parallelized without requiring additional synchronization.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 collect(supplier: java.util.function$.Supplier, accumulator: java.util.function$.BiConsumer, combiner: java.util.function$.BiConsumer): java.lang.Object;
                /**
                 * Performs a <a href="package-summary.html#MutableReduction">mutable
                 * reduction</a> operation on the elements of this stream using a
                 * {@code Collector}.  A {@code Collector}
                 * encapsulates the functions used as arguments to
                 * {@link #collect(Supplier, BiConsumer, BiConsumer)}, allowing for reuse of
                 * collection strategies and composition of collect operations such as
                 * multiple-level grouping or partitioning.
                 * <p>If the stream is parallel, and the {@code Collector}
                 * is {@link Collector.Characteristics#CONCURRENT concurrent}, and
                 * either the stream is unordered or the collector is
                 * {@link Collector.Characteristics#UNORDERED unordered},
                 * then a concurrent reduction will be performed (see {@link Collector} for
                 * details on concurrent reduction.)
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 * <p>When executed in parallel, multiple intermediate results may be
                 * instantiated, populated, and merged so as to maintain isolation of
                 * mutable data structures.  Therefore, even when executed in parallel
                 * with non-thread-safe data structures (such as {@code ArrayList}), no
                 * additional synchronization is needed for a parallel reduction.
                 */
                // @ts-ignore
                 collect(collector: java.util.stream.Collector): java.lang.Object;
                /**
                 * Returns the minimum element of this stream according to the provided
                 * {@code Comparator}.  This is a special case of a
                 * <a href="package-summary.html#Reduction">reduction</a>.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal operation</a>.
                 */
                // @ts-ignore
                 min(comparator: java.util.Comparator): java.util.Optional;
                /**
                 * Returns the maximum element of this stream according to the provided
                 * {@code Comparator}.  This is a special case of a
                 * <a href="package-summary.html#Reduction">reduction</a>.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 max(comparator: java.util.Comparator): java.util.Optional;
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
                 * Returns whether any elements of this stream match the provided
                 * predicate.  May not evaluate the predicate on all elements if not
                 * necessary for determining the result.  If the stream is empty then
                 * {@code false} is returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 anyMatch(predicate: java.util.function$.Predicate): boolean;
                /**
                 * Returns whether all elements of this stream match the provided predicate.
                 * May not evaluate the predicate on all elements if not necessary for
                 * determining the result.  If the stream is empty then {@code true} is
                 * returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 allMatch(predicate: java.util.function$.Predicate): boolean;
                /**
                 * Returns whether no elements of this stream match the provided predicate.
                 * May not evaluate the predicate on all elements if not necessary for
                 * determining the result.  If the stream is empty then {@code true} is
                 * returned and the predicate is not evaluated.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 noneMatch(predicate: java.util.function$.Predicate): boolean;
                /**
                 * Returns an {@link Optional} describing the first element of this stream,
                 * or an empty {@code Optional} if the stream is empty.  If the stream has
                 * no encounter order, then any element may be returned.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 */
                // @ts-ignore
                 findFirst(): java.util.Optional;
                /**
                 * Returns an {@link Optional} describing some element of the stream, or an
                 * empty {@code Optional} if the stream is empty.
                 * <p>This is a <a href="package-summary.html#StreamOps">short-circuiting
                 * terminal operation</a>.
                 * <p>The behavior of this operation is explicitly nondeterministic; it is
                 * free to select any element in the stream.  This is to allow for maximal
                 * performance in parallel operations; the cost is that multiple invocations
                 * on the same source may not return the same result.  (If a stable result
                 * is desired, use {@link #findFirst()} instead.)
                 */
                // @ts-ignore
                 findAny(): java.util.Optional;
                /**
                 * Returns a builder for a {@code Stream}.
                 */
                // @ts-ignore
                 builder(): java.util.stream.Stream.Builder;
                /**
                 * Returns an empty sequential {@code Stream}.
                 */
                // @ts-ignore
                 empty(): java.util.stream.Stream;
                /**
                 * Returns a sequential {@code Stream} containing a single element.
                 */
                // @ts-ignore
                 of(t: java.lang.Object): java.util.stream.Stream;
                /**
                 * Returns a sequential ordered stream whose elements are the specified values.
                 */
                // @ts-ignore
                 of(values: java.lang.Object): java.util.stream.Stream;
                /**
                 * Returns an infinite sequential ordered {@code Stream} produced by iterative
                 * application of a function {@code f} to an initial element {@code seed},
                 * producing a {@code Stream} consisting of {@code seed}, {@code f(seed)},
                 * {@code f(f(seed))}, etc.
                 * <p>The first element (position {@code 0}) in the {@code Stream} will be
                 * the provided {@code seed}.  For {@code n > 0}, the element at position
                 * {@code n}, will be the result of applying the function {@code f} to the
                 * element at position {@code n - 1}.
                 */
                // @ts-ignore
                 iterate(seed: java.lang.Object, f: java.util.function$.UnaryOperator): java.util.stream.Stream;
                /**
                 * Returns an infinite sequential unordered stream where each element is
                 * generated by the provided {@code Supplier}.  This is suitable for
                 * generating constant streams, streams of random elements, etc.
                 */
                // @ts-ignore
                 generate(s: java.util.function$.Supplier): java.util.stream.Stream;
                /**
                 * Creates a lazily concatenated stream whose elements are all the
                 * elements of the first stream followed by all the elements of the
                 * second stream.  The resulting stream is ordered if both
                 * of the input streams are ordered, and parallel if either of the input
                 * streams is parallel.  When the resulting stream is closed, the close
                 * handlers for both input streams are invoked.
                 */
                // @ts-ignore
                 concat(a: java.util.stream.Stream, b: java.util.stream.Stream): java.util.stream.Stream;
            }
        }
    }
}
