// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class LongSummaryStatistics extends java.lang.Object {
            /**
             * Construct an empty instance with zero count, zero sum,
             * {@code Long.MAX_VALUE} min, {@code Long.MIN_VALUE} max and zero
             * average.
             */
            // @ts-ignore
            constructor()
            /**
             * Records a new {@code int} value into the summary information.
             */
            // @ts-ignore
            public accept(value: number): void;
            /**
             * Records a new {@code long} value into the summary information.
             */
            // @ts-ignore
            public accept(value: number): void;
            /**
             * Combines the state of another {@code LongSummaryStatistics} into this
             * one.
             */
            // @ts-ignore
            public combine(other: java.util.LongSummaryStatistics): void;
            /**
             * Returns the count of values recorded.
             */
            // @ts-ignore
            public getCount(): number;
            /**
             * Returns the sum of values recorded, or zero if no values have been
             * recorded.
             */
            // @ts-ignore
            public getSum(): number;
            /**
             * Returns the minimum value recorded, or {@code Long.MAX_VALUE} if no
             * values have been recorded.
             */
            // @ts-ignore
            public getMin(): number;
            /**
             * Returns the maximum value recorded, or {@code Long.MIN_VALUE} if no
             * values have been recorded
             */
            // @ts-ignore
            public getMax(): number;
            /**
             * Returns the arithmetic mean of values recorded, or zero if no values have been
             * recorded.
             */
            // @ts-ignore
            public getAverage(): number;
            // @ts-ignore
            public toString(): string;
        }
    }
}
