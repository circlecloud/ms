declare namespace java {
    namespace util {
        // @ts-ignore
         class SplittableRandom extends java.lang.Object {
            /**
             * Creates a new SplittableRandom instance using the specified
             * initial seed. SplittableRandom instances created with the same
             * seed in the same program generate identical sequences of values.
             */
            // @ts-ignore
            constructor(seed: number)
            /**
             * Creates a new SplittableRandom instance that is likely to
             * generate sequences of values that are statistically independent
             * of those of any other instances in the current program; and
             * may, and typically does, vary across program invocations.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs and returns a new SplittableRandom instance that
             * shares no mutable state with this instance. However, with very
             * high probability, the set of values collectively generated by
             * the two objects has the same statistical properties as if the
             * same quantity of values were generated by a single thread using
             * a single SplittableRandom object.  Either or both of the two
             * objects may be further split using the {@code split()} method,
             * and the same expected statistical properties apply to the
             * entire set of generators constructed by such recursive
             * splitting.
             */
            // @ts-ignore
            public split(): java.util.SplittableRandom;
            /**
             * Returns a pseudorandom {@code int} value.
             */
            // @ts-ignore
            public nextInt(): number;
            /**
             * Returns a pseudorandom {@code int} value between zero (inclusive)
             * and the specified bound (exclusive).
             */
            // @ts-ignore
            public nextInt(bound: number): number;
            /**
             * Returns a pseudorandom {@code int} value between the specified
             * origin (inclusive) and the specified bound (exclusive).
             */
            // @ts-ignore
            public nextInt(origin: number, bound: number): number;
            /**
             * Returns a pseudorandom {@code long} value.
             */
            // @ts-ignore
            public nextLong(): number;
            /**
             * Returns a pseudorandom {@code long} value between zero (inclusive)
             * and the specified bound (exclusive).
             */
            // @ts-ignore
            public nextLong(bound: number): number;
            /**
             * Returns a pseudorandom {@code long} value between the specified
             * origin (inclusive) and the specified bound (exclusive).
             */
            // @ts-ignore
            public nextLong(origin: number, bound: number): number;
            /**
             * Returns a pseudorandom {@code double} value between zero
             * (inclusive) and one (exclusive).
             */
            // @ts-ignore
            public nextDouble(): number;
            /**
             * Returns a pseudorandom {@code double} value between 0.0
             * (inclusive) and the specified bound (exclusive).
             */
            // @ts-ignore
            public nextDouble(bound: number): number;
            /**
             * Returns a pseudorandom {@code double} value between the specified
             * origin (inclusive) and bound (exclusive).
             */
            // @ts-ignore
            public nextDouble(origin: number, bound: number): number;
            /**
             * Returns a pseudorandom {@code boolean} value.
             */
            // @ts-ignore
            public nextBoolean(): boolean;
            /**
             * Returns a stream producing the given {@code streamSize} number
             * of pseudorandom {@code int} values from this generator and/or
             * one split from it.
             */
            // @ts-ignore
            public ints(streamSize: number): java.util.stream.IntStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code int}
             * values from this generator and/or one split from it.
             */
            // @ts-ignore
            public ints(): java.util.stream.IntStream;
            /**
             * Returns a stream producing the given {@code streamSize} number
             * of pseudorandom {@code int} values from this generator and/or one split
             * from it; each value conforms to the given origin (inclusive) and bound
             * (exclusive).
             */
            // @ts-ignore
            public ints(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.IntStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * int} values from this generator and/or one split from it; each value
             * conforms to the given origin (inclusive) and bound (exclusive).
             */
            // @ts-ignore
            public ints(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.IntStream;
            /**
             * Returns a stream producing the given {@code streamSize} number
             * of pseudorandom {@code long} values from this generator and/or
             * one split from it.
             */
            // @ts-ignore
            public longs(streamSize: number): java.util.stream.LongStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * long} values from this generator and/or one split from it.
             */
            // @ts-ignore
            public longs(): java.util.stream.LongStream;
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code long} values from this generator and/or one split
             * from it; each value conforms to the given origin (inclusive) and bound
             * (exclusive).
             */
            // @ts-ignore
            public longs(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.LongStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * long} values from this generator and/or one split from it; each value
             * conforms to the given origin (inclusive) and bound (exclusive).
             */
            // @ts-ignore
            public longs(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.LongStream;
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code double} values from this generator and/or one split
             * from it; each value is between zero (inclusive) and one (exclusive).
             */
            // @ts-ignore
            public doubles(streamSize: number): java.util.stream.DoubleStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * double} values from this generator and/or one split from it; each value
             * is between zero (inclusive) and one (exclusive).
             */
            // @ts-ignore
            public doubles(): java.util.stream.DoubleStream;
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code double} values from this generator and/or one split
             * from it; each value conforms to the given origin (inclusive) and bound
             * (exclusive).
             */
            // @ts-ignore
            public doubles(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.DoubleStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * double} values from this generator and/or one split from it; each value
             * conforms to the given origin (inclusive) and bound (exclusive).
             */
            // @ts-ignore
            public doubles(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.DoubleStream;
        }
    }
}
