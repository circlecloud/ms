// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface Spliterator {
            // @ts-ignore
             ORDERED: number;
            // @ts-ignore
             DISTINCT: number;
            // @ts-ignore
             SORTED: number;
            // @ts-ignore
             SIZED: number;
            // @ts-ignore
             NONNULL: number;
            // @ts-ignore
             IMMUTABLE: number;
            // @ts-ignore
             CONCURRENT: number;
            // @ts-ignore
             SUBSIZED: number;
            /**
             * If a remaining element exists, performs the given action on it,
             * returning {@code true}; else returns {@code false}.  If this
             * Spliterator is {@link #ORDERED} the action is performed on the
             * next element in encounter order.  Exceptions thrown by the
             * action are relayed to the caller.
             */
            // @ts-ignore
             tryAdvance(action: java.util.function$.Consumer): boolean;
            /**
             * Performs the given action for each remaining element, sequentially in
             * the current thread, until all elements have been processed or the action
             * throws an exception.  If this Spliterator is {@link #ORDERED}, actions
             * are performed in encounter order.  Exceptions thrown by the action
             * are relayed to the caller.
             */
            // @ts-ignore
             forEachRemaining(action: java.util.function$.Consumer): void;
            /**
             * If this spliterator can be partitioned, returns a Spliterator
             * covering elements, that will, upon return from this method, not
             * be covered by this Spliterator.
             * <p>If this Spliterator is {@link #ORDERED}, the returned Spliterator
             * must cover a strict prefix of the elements.
             * <p>Unless this Spliterator covers an infinite number of elements,
             * repeated calls to {@code trySplit()} must eventually return {@code null}.
             * Upon non-null return:
             * <ul>
             * <li>the value reported for {@code estimateSize()} before splitting,
             * must, after splitting, be greater than or equal to {@code estimateSize()}
             * for this and the returned Spliterator; and</li>
             * <li>if this Spliterator is {@code SUBSIZED}, then {@code estimateSize()}
             * for this spliterator before splitting must be equal to the sum of
             * {@code estimateSize()} for this and the returned Spliterator after
             * splitting.</li>
             * </ul>
             * <p>This method may return {@code null} for any reason,
             * including emptiness, inability to split after traversal has
             * commenced, data structure constraints, and efficiency
             * considerations.
             */
            // @ts-ignore
             trySplit(): java.util.Spliterator;
            /**
             * Returns an estimate of the number of elements that would be
             * encountered by a {@link #forEachRemaining} traversal, or returns {@link
             * Long#MAX_VALUE} if infinite, unknown, or too expensive to compute.
             * <p>If this Spliterator is {@link #SIZED} and has not yet been partially
             * traversed or split, or this Spliterator is {@link #SUBSIZED} and has
             * not yet been partially traversed, this estimate must be an accurate
             * count of elements that would be encountered by a complete traversal.
             * Otherwise, this estimate may be arbitrarily inaccurate, but must decrease
             * as specified across invocations of {@link #trySplit}.
             */
            // @ts-ignore
             estimateSize(): number;
            /**
             * Convenience method that returns {@link #estimateSize()} if this
             * Spliterator is {@link #SIZED}, else {@code -1}.
             */
            // @ts-ignore
             getExactSizeIfKnown(): number;
            /**
             * Returns a set of characteristics of this Spliterator and its
             * elements. The result is represented as ORed values from {@link
             * #ORDERED}, {@link #DISTINCT}, {@link #SORTED}, {@link #SIZED},
             * {@link #NONNULL}, {@link #IMMUTABLE}, {@link #CONCURRENT},
             * {@link #SUBSIZED}.  Repeated calls to {@code characteristics()} on
             * a given spliterator, prior to or in-between calls to {@code trySplit},
             * should always return the same result.
             * <p>If a Spliterator reports an inconsistent set of
             * characteristics (either those returned from a single invocation
             * or across multiple invocations), no guarantees can be made
             * about any computation using this Spliterator.
             */
            // @ts-ignore
             characteristics(): number;
            /**
             * Returns {@code true} if this Spliterator's {@link
             * #characteristics} contain all of the given characteristics.
             */
            // @ts-ignore
             hasCharacteristics(characteristics: number): boolean;
            /**
             * If this Spliterator's source is {@link #SORTED} by a {@link Comparator},
             * returns that {@code Comparator}. If the source is {@code SORTED} in
             * {@linkplain Comparable natural order}, returns {@code null}.  Otherwise,
             * if the source is not {@code SORTED}, throws {@link IllegalStateException}.
             */
            // @ts-ignore
             getComparator(): java.util.Comparator;
        }
    }
}
