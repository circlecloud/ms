// @ts-nocheck
declare namespace java {
    namespace util {
        namespace stream {
            // @ts-ignore
             class Collectors extends java.lang.Object {
                /**
                 * Returns a {@code Collector} that accumulates the input elements into a
                 * new {@code Collection}, in encounter order.  The {@code Collection} is
                 * created by the provided factory.
                 */
                // @ts-ignore
                public static toCollection(collectionFactory: java.util.function$.Supplier): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that accumulates the input elements into a
                 * new {@code List}. There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code List} returned; if more
                 * control over the returned {@code List} is required, use {@link #toCollection(Supplier)}.
                 */
                // @ts-ignore
                public static toList(): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that accumulates the input elements into a
                 * new {@code Set}. There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code Set} returned; if more
                 * control over the returned {@code Set} is required, use
                 * {@link #toCollection(Supplier)}.
                 * <p>This is an {@link Collector.Characteristics#UNORDERED unordered}
                 * Collector.
                 */
                // @ts-ignore
                public static toSet(): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that concatenates the input elements into a
                 * {@code String}, in encounter order.
                 */
                // @ts-ignore
                public static joining(): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that concatenates the input elements,
                 * separated by the specified delimiter, in encounter order.
                 */
                // @ts-ignore
                public static joining(delimiter: java.lang.CharSequence): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that concatenates the input elements,
                 * separated by the specified delimiter, with the specified prefix and
                 * suffix, in encounter order.
                 */
                // @ts-ignore
                public static joining(delimiter: java.lang.CharSequence, prefix: java.lang.CharSequence, suffix: java.lang.CharSequence): java.util.stream.Collector;
                /**
                 * Adapts a {@code Collector} accepting elements of type {@code U} to one
                 * accepting elements of type {@code T} by applying a mapping function to
                 * each input element before accumulation.
                 */
                // @ts-ignore
                public static mapping(mapper: java.util.function$.Function, downstream: java.util.stream.Collector): java.util.stream.Collector;
                /**
                 * Adapts a {@code Collector} to perform an additional finishing
                 * transformation.  For example, one could adapt the {@link #toList()}
                 * collector to always produce an immutable list with:
                 * <pre>{@code
                 * List<String> people
                 * = people.stream().collect(collectingAndThen(toList(), Collections::unmodifiableList));
                 * }</pre>
                 */
                // @ts-ignore
                public static collectingAndThen(downstream: java.util.stream.Collector, finisher: java.util.function$.Function): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} accepting elements of type {@code T} that
                 * counts the number of input elements.  If no elements are present, the
                 * result is 0.
                 */
                // @ts-ignore
                public static counting(): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that produces the minimal element according
                 * to a given {@code Comparator}, described as an {@code Optional<T>}.
                 */
                // @ts-ignore
                public static minBy(comparator: java.util.Comparator): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that produces the maximal element according
                 * to a given {@code Comparator}, described as an {@code Optional<T>}.
                 */
                // @ts-ignore
                public static maxBy(comparator: java.util.Comparator): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that produces the sum of a integer-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 */
                // @ts-ignore
                public static summingInt(mapper: java.util.function$.ToIntFunction): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that produces the sum of a long-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 */
                // @ts-ignore
                public static summingLong(mapper: java.util.function$.ToLongFunction): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that produces the sum of a double-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 * <p>The sum returned can vary depending upon the order in which
                 * values are recorded, due to accumulated rounding error in
                 * addition of values of differing magnitudes. Values sorted by increasing
                 * absolute magnitude tend to yield more accurate results.  If any recorded
                 * value is a {@code NaN} or the sum is at any point a {@code NaN} then the
                 * sum will be {@code NaN}.
                 */
                // @ts-ignore
                public static summingDouble(mapper: java.util.function$.ToDoubleFunction): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that produces the arithmetic mean of an integer-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 */
                // @ts-ignore
                public static averagingInt(mapper: java.util.function$.ToIntFunction): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that produces the arithmetic mean of a long-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 */
                // @ts-ignore
                public static averagingLong(mapper: java.util.function$.ToLongFunction): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that produces the arithmetic mean of a double-valued
                 * function applied to the input elements.  If no elements are present,
                 * the result is 0.
                 * <p>The average returned can vary depending upon the order in which
                 * values are recorded, due to accumulated rounding error in
                 * addition of values of differing magnitudes. Values sorted by increasing
                 * absolute magnitude tend to yield more accurate results.  If any recorded
                 * value is a {@code NaN} or the sum is at any point a {@code NaN} then the
                 * average will be {@code NaN}.
                 */
                // @ts-ignore
                public static averagingDouble(mapper: java.util.function$.ToDoubleFunction): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} which performs a reduction of its
                 * input elements under a specified {@code BinaryOperator} using the
                 * provided identity.
                 */
                // @ts-ignore
                public static reducing(identity: java.lang.Object, op: java.util.function$.BinaryOperator): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} which performs a reduction of its
                 * input elements under a specified {@code BinaryOperator}.  The result
                 * is described as an {@code Optional<T>}.
                 */
                // @ts-ignore
                public static reducing(op: java.util.function$.BinaryOperator): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} which performs a reduction of its
                 * input elements under a specified mapping function and
                 * {@code BinaryOperator}. This is a generalization of
                 * {@link #reducing(Object, BinaryOperator)} which allows a transformation
                 * of the elements before reduction.
                 */
                // @ts-ignore
                public static reducing(identity: java.lang.Object, mapper: java.util.function$.Function, op: java.util.function$.BinaryOperator): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} implementing a "group by" operation on
                 * input elements of type {@code T}, grouping elements according to a
                 * classification function, and returning the results in a {@code Map}.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The collector produces a {@code Map<K, List<T>>} whose keys are the
                 * values resulting from applying the classification function to the input
                 * elements, and whose corresponding values are {@code List}s containing the
                 * input elements which map to the associated key under the classification
                 * function.
                 * <p>There are no guarantees on the type, mutability, serializability, or
                 * thread-safety of the {@code Map} or {@code List} objects returned.
                 */
                // @ts-ignore
                public static groupingBy(classifier: java.util.function$.Function): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} implementing a cascaded "group by" operation
                 * on input elements of type {@code T}, grouping elements according to a
                 * classification function, and then performing a reduction operation on
                 * the values associated with a given key using the specified downstream
                 * {@code Collector}.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The downstream collector operates on elements of type {@code T} and
                 * produces a result of type {@code D}. The resulting collector produces a
                 * {@code Map<K, D>}.
                 * <p>There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code Map} returned.
                 * <p>For example, to compute the set of last names of people in each city:
                 * <pre>{@code
                 * Map<City, Set<String>> namesByCity
                 * = people.stream().collect(groupingBy(Person::getCity,
                 * mapping(Person::getLastName, toSet())));
                 * }</pre>
                 */
                // @ts-ignore
                public static groupingBy(classifier: java.util.function$.Function, downstream: java.util.stream.Collector): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} implementing a cascaded "group by" operation
                 * on input elements of type {@code T}, grouping elements according to a
                 * classification function, and then performing a reduction operation on
                 * the values associated with a given key using the specified downstream
                 * {@code Collector}.  The {@code Map} produced by the Collector is created
                 * with the supplied factory function.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The downstream collector operates on elements of type {@code T} and
                 * produces a result of type {@code D}. The resulting collector produces a
                 * {@code Map<K, D>}.
                 * <p>For example, to compute the set of last names of people in each city,
                 * where the city names are sorted:
                 * <pre>{@code
                 * Map<City, Set<String>> namesByCity
                 * = people.stream().collect(groupingBy(Person::getCity, TreeMap::new,
                 * mapping(Person::getLastName, toSet())));
                 * }</pre>
                 */
                // @ts-ignore
                public static groupingBy(classifier: java.util.function$.Function, mapFactory: java.util.function$.Supplier, downstream: java.util.stream.Collector): java.util.stream.Collector;
                /**
                 * Returns a concurrent {@code Collector} implementing a "group by"
                 * operation on input elements of type {@code T}, grouping elements
                 * according to a classification function.
                 * <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 * {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The collector produces a {@code ConcurrentMap<K, List<T>>} whose keys are the
                 * values resulting from applying the classification function to the input
                 * elements, and whose corresponding values are {@code List}s containing the
                 * input elements which map to the associated key under the classification
                 * function.
                 * <p>There are no guarantees on the type, mutability, or serializability
                 * of the {@code Map} or {@code List} objects returned, or of the
                 * thread-safety of the {@code List} objects returned.
                 */
                // @ts-ignore
                public static groupingByConcurrent(classifier: java.util.function$.Function): java.util.stream.Collector;
                /**
                 * Returns a concurrent {@code Collector} implementing a cascaded "group by"
                 * operation on input elements of type {@code T}, grouping elements
                 * according to a classification function, and then performing a reduction
                 * operation on the values associated with a given key using the specified
                 * downstream {@code Collector}.
                 * <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 * {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The downstream collector operates on elements of type {@code T} and
                 * produces a result of type {@code D}. The resulting collector produces a
                 * {@code Map<K, D>}.
                 * <p>For example, to compute the set of last names of people in each city,
                 * where the city names are sorted:
                 * <pre>{@code
                 * ConcurrentMap<City, Set<String>> namesByCity
                 * = people.stream().collect(groupingByConcurrent(Person::getCity,
                 * mapping(Person::getLastName, toSet())));
                 * }</pre>
                 */
                // @ts-ignore
                public static groupingByConcurrent(classifier: java.util.function$.Function, downstream: java.util.stream.Collector): java.util.stream.Collector;
                /**
                 * Returns a concurrent {@code Collector} implementing a cascaded "group by"
                 * operation on input elements of type {@code T}, grouping elements
                 * according to a classification function, and then performing a reduction
                 * operation on the values associated with a given key using the specified
                 * downstream {@code Collector}.  The {@code ConcurrentMap} produced by the
                 * Collector is created with the supplied factory function.
                 * <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 * {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 * <p>The classification function maps elements to some key type {@code K}.
                 * The downstream collector operates on elements of type {@code T} and
                 * produces a result of type {@code D}. The resulting collector produces a
                 * {@code Map<K, D>}.
                 * <p>For example, to compute the set of last names of people in each city,
                 * where the city names are sorted:
                 * <pre>{@code
                 * ConcurrentMap<City, Set<String>> namesByCity
                 * = people.stream().collect(groupingBy(Person::getCity, ConcurrentSkipListMap::new,
                 * mapping(Person::getLastName, toSet())));
                 * }</pre>
                 */
                // @ts-ignore
                public static groupingByConcurrent(classifier: java.util.function$.Function, mapFactory: java.util.function$.Supplier, downstream: java.util.stream.Collector): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} which partitions the input elements according
                 * to a {@code Predicate}, and organizes them into a
                 * {@code Map<Boolean, List<T>>}.
                 * There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code Map} returned.
                 */
                // @ts-ignore
                public static partitioningBy(predicate: java.util.function$.Predicate): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} which partitions the input elements according
                 * to a {@code Predicate}, reduces the values in each partition according to
                 * another {@code Collector}, and organizes them into a
                 * {@code Map<Boolean, D>} whose values are the result of the downstream
                 * reduction.
                 * <p>There are no guarantees on the type, mutability,
                 * serializability, or thread-safety of the {@code Map} returned.
                 */
                // @ts-ignore
                public static partitioningBy(predicate: java.util.function$.Predicate, downstream: java.util.stream.Collector): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that accumulates elements into a
                 * {@code Map} whose keys and values are the result of applying the provided
                 * mapping functions to the input elements.
                 * <p>If the mapped keys contains duplicates (according to
                 * {@link Object#equals(Object)}), an {@code IllegalStateException} is
                 * thrown when the collection operation is performed.  If the mapped keys
                 * may have duplicates, use {@link #toMap(Function, Function, BinaryOperator)}
                 * instead.
                 */
                // @ts-ignore
                public static toMap(keyMapper: java.util.function$.Function, valueMapper: java.util.function$.Function): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that accumulates elements into a
                 * {@code Map} whose keys and values are the result of applying the provided
                 * mapping functions to the input elements.
                 * <p>If the mapped
                 * keys contains duplicates (according to {@link Object#equals(Object)}),
                 * the value mapping function is applied to each equal element, and the
                 * results are merged using the provided merging function.
                 */
                // @ts-ignore
                public static toMap(keyMapper: java.util.function$.Function, valueMapper: java.util.function$.Function, mergeFunction: java.util.function$.BinaryOperator): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} that accumulates elements into a
                 * {@code Map} whose keys and values are the result of applying the provided
                 * mapping functions to the input elements.
                 * <p>If the mapped
                 * keys contains duplicates (according to {@link Object#equals(Object)}),
                 * the value mapping function is applied to each equal element, and the
                 * results are merged using the provided merging function.  The {@code Map}
                 * is created by a provided supplier function.
                 */
                // @ts-ignore
                public static toMap(keyMapper: java.util.function$.Function, valueMapper: java.util.function$.Function, mergeFunction: java.util.function$.BinaryOperator, mapSupplier: java.util.function$.Supplier): java.util.stream.Collector;
                /**
                 * Returns a concurrent {@code Collector} that accumulates elements into a
                 * {@code ConcurrentMap} whose keys and values are the result of applying
                 * the provided mapping functions to the input elements.
                 * <p>If the mapped keys contains duplicates (according to
                 * {@link Object#equals(Object)}), an {@code IllegalStateException} is
                 * thrown when the collection operation is performed.  If the mapped keys
                 * may have duplicates, use
                 * {@link #toConcurrentMap(Function, Function, BinaryOperator)} instead.
                 */
                // @ts-ignore
                public static toConcurrentMap(keyMapper: java.util.function$.Function, valueMapper: java.util.function$.Function): java.util.stream.Collector;
                /**
                 * Returns a concurrent {@code Collector} that accumulates elements into a
                 * {@code ConcurrentMap} whose keys and values are the result of applying
                 * the provided mapping functions to the input elements.
                 * <p>If the mapped keys contains duplicates (according to {@link Object#equals(Object)}),
                 * the value mapping function is applied to each equal element, and the
                 * results are merged using the provided merging function.
                 */
                // @ts-ignore
                public static toConcurrentMap(keyMapper: java.util.function$.Function, valueMapper: java.util.function$.Function, mergeFunction: java.util.function$.BinaryOperator): java.util.stream.Collector;
                /**
                 * Returns a concurrent {@code Collector} that accumulates elements into a
                 * {@code ConcurrentMap} whose keys and values are the result of applying
                 * the provided mapping functions to the input elements.
                 * <p>If the mapped keys contains duplicates (according to {@link Object#equals(Object)}),
                 * the value mapping function is applied to each equal element, and the
                 * results are merged using the provided merging function.  The
                 * {@code ConcurrentMap} is created by a provided supplier function.
                 * <p>This is a {@link Collector.Characteristics#CONCURRENT concurrent} and
                 * {@link Collector.Characteristics#UNORDERED unordered} Collector.
                 */
                // @ts-ignore
                public static toConcurrentMap(keyMapper: java.util.function$.Function, valueMapper: java.util.function$.Function, mergeFunction: java.util.function$.BinaryOperator, mapSupplier: java.util.function$.Supplier): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} which applies an {@code int}-producing
                 * mapping function to each input element, and returns summary statistics
                 * for the resulting values.
                 */
                // @ts-ignore
                public static summarizingInt(mapper: java.util.function$.ToIntFunction): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} which applies an {@code long}-producing
                 * mapping function to each input element, and returns summary statistics
                 * for the resulting values.
                 */
                // @ts-ignore
                public static summarizingLong(mapper: java.util.function$.ToLongFunction): java.util.stream.Collector;
                /**
                 * Returns a {@code Collector} which applies an {@code double}-producing
                 * mapping function to each input element, and returns summary statistics
                 * for the resulting values.
                 */
                // @ts-ignore
                public static summarizingDouble(mapper: java.util.function$.ToDoubleFunction): java.util.stream.Collector;
            }
        }
    }
}
