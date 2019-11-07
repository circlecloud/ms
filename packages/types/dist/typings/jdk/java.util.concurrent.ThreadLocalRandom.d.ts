// @ts-nocheck
declare namespace java {
    namespace util {
        namespace concurrent {
            // @ts-ignore
             class ThreadLocalRandom extends java.util.Random {
                /**
                 * Returns the current thread's {@code ThreadLocalRandom}.
                 */
                // @ts-ignore
                public static current(): java.util.concurrent.ThreadLocalRandom;
                /**
                 * Throws {@code UnsupportedOperationException}.  Setting seeds in
                 * this generator is not supported.
                 */
                // @ts-ignore
                public setSeed(seed: number): void;
                // @ts-ignore
                protected next(bits: number): number;
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
                 * Returns a pseudorandom {@code float} value between zero
                 * (inclusive) and one (exclusive).
                 */
                // @ts-ignore
                public nextFloat(): number;
                // @ts-ignore
                public nextGaussian(): number;
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code int} values.
                 */
                // @ts-ignore
                public ints(streamSize: number): java.util.stream.IntStream;
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code int}
                 * values.
                 */
                // @ts-ignore
                public ints(): java.util.stream.IntStream;
                /**
                 * Returns a stream producing the given {@code streamSize} number
                 * of pseudorandom {@code int} values, each conforming to the given
                 * origin (inclusive) and bound (exclusive).
                 */
                // @ts-ignore
                public ints(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.IntStream;
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code
                 * int} values, each conforming to the given origin (inclusive) and bound
                 * (exclusive).
                 */
                // @ts-ignore
                public ints(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.IntStream;
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code long} values.
                 */
                // @ts-ignore
                public longs(streamSize: number): java.util.stream.LongStream;
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code long}
                 * values.
                 */
                // @ts-ignore
                public longs(): java.util.stream.LongStream;
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code long}, each conforming to the given origin
                 * (inclusive) and bound (exclusive).
                 */
                // @ts-ignore
                public longs(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.LongStream;
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code
                 * long} values, each conforming to the given origin (inclusive) and bound
                 * (exclusive).
                 */
                // @ts-ignore
                public longs(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.LongStream;
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code double} values, each between zero
                 * (inclusive) and one (exclusive).
                 */
                // @ts-ignore
                public doubles(streamSize: number): java.util.stream.DoubleStream;
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code
                 * double} values, each between zero (inclusive) and one
                 * (exclusive).
                 */
                // @ts-ignore
                public doubles(): java.util.stream.DoubleStream;
                /**
                 * Returns a stream producing the given {@code streamSize} number of
                 * pseudorandom {@code double} values, each conforming to the given origin
                 * (inclusive) and bound (exclusive).
                 */
                // @ts-ignore
                public doubles(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.DoubleStream;
                /**
                 * Returns an effectively unlimited stream of pseudorandom {@code
                 * double} values, each conforming to the given origin (inclusive) and bound
                 * (exclusive).
                 */
                // @ts-ignore
                public doubles(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.DoubleStream;
            }
        }
    }
}
