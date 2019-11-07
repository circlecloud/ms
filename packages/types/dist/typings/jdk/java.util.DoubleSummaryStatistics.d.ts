// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class DoubleSummaryStatistics extends java.lang.Object {
            /**
             * Construct an empty instance with zero count, zero sum,
             * {@code Double.POSITIVE_INFINITY} min, {@code Double.NEGATIVE_INFINITY}
             * max and zero average.
             */
            // @ts-ignore
            constructor()
            /**
             * Records another value into the summary information.
             */
            // @ts-ignore
            public accept(value: number): void;
            /**
             * Combines the state of another {@code DoubleSummaryStatistics} into this
             * one.
             */
            // @ts-ignore
            public combine(other: java.util.DoubleSummaryStatistics): void;
            /**
             * Return the count of values recorded.
             */
            // @ts-ignore
            public getCount(): number;
            /**
             * Returns the sum of values recorded, or zero if no values have been
             * recorded.
             * If any recorded value is a NaN or the sum is at any point a NaN
             * then the sum will be NaN.
             * <p> The value of a floating-point sum is a function both of the
             * input values as well as the order of addition operations. The
             * order of addition operations of this method is intentionally
             * not defined to allow for implementation flexibility to improve
             * the speed and accuracy of the computed result.
             * In particular, this method may be implemented using compensated
             * summation or other technique to reduce the error bound in the
             * numerical sum compared to a simple summation of {@code double}
             * values.
             */
            // @ts-ignore
            public getSum(): number;
            /**
             * Returns the minimum recorded value, {@code Double.NaN} if any recorded
             * value was NaN or {@code Double.POSITIVE_INFINITY} if no values were
             * recorded. Unlike the numerical comparison operators, this method
             * considers negative zero to be strictly smaller than positive zero.
             */
            // @ts-ignore
            public getMin(): number;
            /**
             * Returns the maximum recorded value, {@code Double.NaN} if any recorded
             * value was NaN or {@code Double.NEGATIVE_INFINITY} if no values were
             * recorded. Unlike the numerical comparison operators, this method
             * considers negative zero to be strictly smaller than positive zero.
             */
            // @ts-ignore
            public getMax(): number;
            /**
             * Returns the arithmetic mean of values recorded, or zero if no
             * values have been recorded.
             * If any recorded value is a NaN or the sum is at any point a NaN
             * then the average will be code NaN.
             * <p>The average returned can vary depending upon the order in
             * which values are recorded.
             * This method may be implemented using compensated summation or
             * other technique to reduce the error bound in the {@link #getSum
             * numerical sum} used to compute the average.
             */
            // @ts-ignore
            public getAverage(): number;
            /**
             * {@inheritDoc}
             * Returns a non-empty string representation of this object suitable for
             * debugging. The exact presentation format is unspecified and may vary
             * between implementations and versions.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
