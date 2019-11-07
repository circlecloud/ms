// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        interface Comparator {
            /**
             * Compares its two arguments for order.  Returns a negative integer,
             * zero, or a positive integer as the first argument is less than, equal
             * to, or greater than the second.<p>
             * In the foregoing description, the notation
             * <tt>sgn(</tt><i>expression</i><tt>)</tt> designates the mathematical
             * <i>signum</i> function, which is defined to return one of <tt>-1</tt>,
             * <tt>0</tt>, or <tt>1</tt> according to whether the value of
             * <i>expression</i> is negative, zero or positive.<p>
             * The implementor must ensure that <tt>sgn(compare(x, y)) ==
             * -sgn(compare(y, x))</tt> for all <tt>x</tt> and <tt>y</tt>.  (This
             * implies that <tt>compare(x, y)</tt> must throw an exception if and only
             * if <tt>compare(y, x)</tt> throws an exception.)<p>
             * The implementor must also ensure that the relation is transitive:
             * <tt>((compare(x, y)&gt;0) &amp;&amp; (compare(y, z)&gt;0))</tt> implies
             * <tt>compare(x, z)&gt;0</tt>.<p>
             * Finally, the implementor must ensure that <tt>compare(x, y)==0</tt>
             * implies that <tt>sgn(compare(x, z))==sgn(compare(y, z))</tt> for all
             * <tt>z</tt>.<p>
             * It is generally the case, but <i>not</i> strictly required that
             * <tt>(compare(x, y)==0) == (x.equals(y))</tt>.  Generally speaking,
             * any comparator that violates this condition should clearly indicate
             * this fact.  The recommended language is "Note: this comparator
             * imposes orderings that are inconsistent with equals."
             */
            // @ts-ignore
             compare(o1: java.lang.Object, o2: java.lang.Object): number;
            /**
             * Indicates whether some other object is &quot;equal to&quot; this
             * comparator.  This method must obey the general contract of
             * {@link Object#equals(Object)}.  Additionally, this method can return
             * <tt>true</tt> <i>only</i> if the specified object is also a comparator
             * and it imposes the same ordering as this comparator.  Thus,
             * <code>comp1.equals(comp2)</code> implies that <tt>sgn(comp1.compare(o1,
             * o2))==sgn(comp2.compare(o1, o2))</tt> for every object reference
             * <tt>o1</tt> and <tt>o2</tt>.<p>
             * Note that it is <i>always</i> safe <i>not</i> to override
             * <tt>Object.equals(Object)</tt>.  However, overriding this method may,
             * in some cases, improve performance by allowing programs to determine
             * that two distinct comparators impose the same order.
             */
            // @ts-ignore
             equals(obj: java.lang.Object): boolean;
            /**
             * Returns a comparator that imposes the reverse ordering of this
             * comparator.
             */
            // @ts-ignore
             reversed(): java.util.Comparator;
            /**
             * Returns a lexicographic-order comparator with another comparator.
             * If this {@code Comparator} considers two elements equal, i.e.
             * {@code compare(a, b) == 0}, {@code other} is used to determine the order.
             * <p>The returned comparator is serializable if the specified comparator
             * is also serializable.
             */
            // @ts-ignore
             thenComparing(other: java.util.Comparator): java.util.Comparator;
            /**
             * Returns a lexicographic-order comparator with a function that
             * extracts a key to be compared with the given {@code Comparator}.
             */
            // @ts-ignore
             thenComparing(keyExtractor: java.util.function$.Function, keyComparator: java.util.Comparator): java.util.Comparator;
            /**
             * Returns a lexicographic-order comparator with a function that
             * extracts a {@code Comparable} sort key.
             */
            // @ts-ignore
             thenComparing(keyExtractor: java.util.function$.Function): java.util.Comparator;
            /**
             * Returns a lexicographic-order comparator with a function that
             * extracts a {@code int} sort key.
             */
            // @ts-ignore
             thenComparingInt(keyExtractor: java.util.function$.ToIntFunction): java.util.Comparator;
            /**
             * Returns a lexicographic-order comparator with a function that
             * extracts a {@code long} sort key.
             */
            // @ts-ignore
             thenComparingLong(keyExtractor: java.util.function$.ToLongFunction): java.util.Comparator;
            /**
             * Returns a lexicographic-order comparator with a function that
             * extracts a {@code double} sort key.
             */
            // @ts-ignore
             thenComparingDouble(keyExtractor: java.util.function$.ToDoubleFunction): java.util.Comparator;
            /**
             * Returns a comparator that imposes the reverse of the <em>natural
             * ordering</em>.
             * <p>The returned comparator is serializable and throws {@link
             * NullPointerException} when comparing {@code null}.
             */
            // @ts-ignore
             reverseOrder(): java.util.Comparator;
            /**
             * Returns a comparator that compares {@link Comparable} objects in natural
             * order.
             * <p>The returned comparator is serializable and throws {@link
             * NullPointerException} when comparing {@code null}.
             */
            // @ts-ignore
             naturalOrder(): java.util.Comparator;
            /**
             * Returns a null-friendly comparator that considers {@code null} to be
             * less than non-null. When both are {@code null}, they are considered
             * equal. If both are non-null, the specified {@code Comparator} is used
             * to determine the order. If the specified comparator is {@code null},
             * then the returned comparator considers all non-null values to be equal.
             * <p>The returned comparator is serializable if the specified comparator
             * is serializable.
             */
            // @ts-ignore
             nullsFirst(comparator: java.util.Comparator): java.util.Comparator;
            /**
             * Returns a null-friendly comparator that considers {@code null} to be
             * greater than non-null. When both are {@code null}, they are considered
             * equal. If both are non-null, the specified {@code Comparator} is used
             * to determine the order. If the specified comparator is {@code null},
             * then the returned comparator considers all non-null values to be equal.
             * <p>The returned comparator is serializable if the specified comparator
             * is serializable.
             */
            // @ts-ignore
             nullsLast(comparator: java.util.Comparator): java.util.Comparator;
            /**
             * Accepts a function that extracts a sort key from a type {@code T}, and
             * returns a {@code Comparator<T>} that compares by that sort key using
             * the specified {@link Comparator}.
             * <p>The returned comparator is serializable if the specified function
             * and comparator are both serializable.
             */
            // @ts-ignore
             comparing(keyExtractor: java.util.function$.Function, keyComparator: java.util.Comparator): java.util.Comparator;
            /**
             * Accepts a function that extracts a {@link java.lang.Comparable
             * Comparable} sort key from a type {@code T}, and returns a {@code
             * Comparator<T>} that compares by that sort key.
             * <p>The returned comparator is serializable if the specified function
             * is also serializable.
             */
            // @ts-ignore
             comparing(keyExtractor: java.util.function$.Function): java.util.Comparator;
            /**
             * Accepts a function that extracts an {@code int} sort key from a type
             * {@code T}, and returns a {@code Comparator<T>} that compares by that
             * sort key.
             * <p>The returned comparator is serializable if the specified function
             * is also serializable.
             */
            // @ts-ignore
             comparingInt(keyExtractor: java.util.function$.ToIntFunction): java.util.Comparator;
            /**
             * Accepts a function that extracts a {@code long} sort key from a type
             * {@code T}, and returns a {@code Comparator<T>} that compares by that
             * sort key.
             * <p>The returned comparator is serializable if the specified function is
             * also serializable.
             */
            // @ts-ignore
             comparingLong(keyExtractor: java.util.function$.ToLongFunction): java.util.Comparator;
            /**
             * Accepts a function that extracts a {@code double} sort key from a type
             * {@code T}, and returns a {@code Comparator<T>} that compares by that
             * sort key.
             * <p>The returned comparator is serializable if the specified function
             * is also serializable.
             */
            // @ts-ignore
             comparingDouble(keyExtractor: java.util.function$.ToDoubleFunction): java.util.Comparator;
        }
    }
}
