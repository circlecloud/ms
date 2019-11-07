// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class IntSummaryStatistics extends java.lang.Object {
            /**
             * Construct an empty instance with zero count, zero sum,
             * {@code Integer.MAX_VALUE} min, {@code Integer.MIN_VALUE} max and zero
             * average.
             */
            // @ts-ignore
            constructor()
            /**
             * Records a new value into the summary information
             */
            // @ts-ignore
            public accept(value: number): void;
            /**
             * Combines the state of another {@code IntSummaryStatistics} into this one.
             */
            // @ts-ignore
            public combine(other: java.util.IntSummaryStatistics): void;
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
             * Returns the minimum value recorded, or {@code Integer.MAX_VALUE} if no
             * values have been recorded.
             */
            // @ts-ignore
            public getMin(): number;
            /**
             * Returns the maximum value recorded, or {@code Integer.MIN_VALUE} if no
             * values have been recorded.
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
