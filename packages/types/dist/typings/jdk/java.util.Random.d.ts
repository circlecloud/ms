// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Random extends java.lang.Object {
            /**
             * Creates a new random number generator. This constructor sets
             * the seed of the random number generator to a value very likely
             * to be distinct from any other invocation of this constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new random number generator using a single {@code long} seed.
             * The seed is the initial value of the internal state of the pseudorandom
             * number generator which is maintained by method {@link #next}.
             * <p>The invocation {@code new Random(seed)} is equivalent to:
             * <pre> {@code
             * Random rnd = new Random();
             * rnd.setSeed(seed);}</pre>
             */
            // @ts-ignore
            constructor(seed: number)
            /**
             * Sets the seed of this random number generator using a single
             * {@code long} seed. The general contract of {@code setSeed} is
             * that it alters the state of this random number generator object
             * so as to be in exactly the same state as if it had just been
             * created with the argument {@code seed} as a seed. The method
             * {@code setSeed} is implemented by class {@code Random} by
             * atomically updating the seed to
             * <pre>{@code (seed ^ 0x5DEECE66DL) & ((1L << 48) - 1)}</pre>
             * and clearing the {@code haveNextNextGaussian} flag used by {@link
             * #nextGaussian}.
             * <p>The implementation of {@code setSeed} by class {@code Random}
             * happens to use only 48 bits of the given seed. In general, however,
             * an overriding method may use all 64 bits of the {@code long}
             * argument as a seed value.
             */
            // @ts-ignore
            public setSeed(seed: number): void;
            /**
             * Generates the next pseudorandom number. Subclasses should
             * override this, as this is used by all other methods.
             * <p>The general contract of {@code next} is that it returns an
             * {@code int} value and if the argument {@code bits} is between
             * {@code 1} and {@code 32} (inclusive), then that many low-order
             * bits of the returned value will be (approximately) independently
             * chosen bit values, each of which is (approximately) equally
             * likely to be {@code 0} or {@code 1}. The method {@code next} is
             * implemented by class {@code Random} by atomically updating the seed to
             * <pre>{@code (seed * 0x5DEECE66DL + 0xBL) & ((1L << 48) - 1)}</pre>
             * and returning
             * <pre>{@code (int)(seed >>> (48 - bits))}.</pre>
             * This is a linear congruential pseudorandom number generator, as
             * defined by D. H. Lehmer and described by Donald E. Knuth in
             * <i>The Art of Computer Programming,</i> Volume 3:
             * <i>Seminumerical Algorithms</i>, section 3.2.1.
             */
            // @ts-ignore
            protected next(bits: number): number;
            /**
             * Generates random bytes and places them into a user-supplied
             * byte array.  The number of random bytes produced is equal to
             * the length of the byte array.
             * <p>The method {@code nextBytes} is implemented by class {@code Random}
             * as if by:
             * <pre> {@code
             * public void nextBytes(byte[] bytes) {
             * for (int i = 0; i < bytes.length; )
             * for (int rnd = nextInt(), n = Math.min(bytes.length - i, 4);
             * n-- > 0; rnd >>= 8)
             * bytes[i++] = (byte)rnd;
             * }}</pre>
             */
            // @ts-ignore
            public nextBytes(bytes: number): void;
            /**
             * Returns the next pseudorandom, uniformly distributed {@code int}
             * value from this random number generator's sequence. The general
             * contract of {@code nextInt} is that one {@code int} value is
             * pseudorandomly generated and returned. All 2<sup>32</sup> possible
             * {@code int} values are produced with (approximately) equal probability.
             * <p>The method {@code nextInt} is implemented by class {@code Random}
             * as if by:
             * <pre> {@code
             * public int nextInt() {
             * return next(32);
             * }}</pre>
             */
            // @ts-ignore
            public nextInt(): number;
            /**
             * Returns a pseudorandom, uniformly distributed {@code int} value
             * between 0 (inclusive) and the specified value (exclusive), drawn from
             * this random number generator's sequence.  The general contract of
             * {@code nextInt} is that one {@code int} value in the specified range
             * is pseudorandomly generated and returned.  All {@code bound} possible
             * {@code int} values are produced with (approximately) equal
             * probability.  The method {@code nextInt(int bound)} is implemented by
             * class {@code Random} as if by:
             * <pre> {@code
             * public int nextInt(int bound) {
             * if (bound <= 0)
             * throw new IllegalArgumentException("bound must be positive");
             * if ((bound & -bound) == bound)  // i.e., bound is a power of 2
             * return (int)((bound * (long)next(31)) >> 31);
             * int bits, val;
             * do {
             * bits = next(31);
             * val = bits % bound;
             * } while (bits - val + (bound-1) < 0);
             * return val;
             * }}</pre>
             * <p>The hedge "approximately" is used in the foregoing description only
             * because the next method is only approximately an unbiased source of
             * independently chosen bits.  If it were a perfect source of randomly
             * chosen bits, then the algorithm shown would choose {@code int}
             * values from the stated range with perfect uniformity.
             * <p>
             * The algorithm is slightly tricky.  It rejects values that would result
             * in an uneven distribution (due to the fact that 2^31 is not divisible
             * by n). The probability of a value being rejected depends on n.  The
             * worst case is n=2^30+1, for which the probability of a reject is 1/2,
             * and the expected number of iterations before the loop terminates is 2.
             * <p>
             * The algorithm treats the case where n is a power of two specially: it
             * returns the correct number of high-order bits from the underlying
             * pseudo-random number generator.  In the absence of special treatment,
             * the correct number of <i>low-order</i> bits would be returned.  Linear
             * congruential pseudo-random number generators such as the one
             * implemented by this class are known to have short periods in the
             * sequence of values of their low-order bits.  Thus, this special case
             * greatly increases the length of the sequence of values returned by
             * successive calls to this method if n is a small power of two.
             */
            // @ts-ignore
            public nextInt(bound: number): number;
            /**
             * Returns the next pseudorandom, uniformly distributed {@code long}
             * value from this random number generator's sequence. The general
             * contract of {@code nextLong} is that one {@code long} value is
             * pseudorandomly generated and returned.
             * <p>The method {@code nextLong} is implemented by class {@code Random}
             * as if by:
             * <pre> {@code
             * public long nextLong() {
             * return ((long)next(32) << 32) + next(32);
             * }}</pre>
             * Because class {@code Random} uses a seed with only 48 bits,
             * this algorithm will not return all possible {@code long} values.
             */
            // @ts-ignore
            public nextLong(): number;
            /**
             * Returns the next pseudorandom, uniformly distributed
             * {@code boolean} value from this random number generator's
             * sequence. The general contract of {@code nextBoolean} is that one
             * {@code boolean} value is pseudorandomly generated and returned.  The
             * values {@code true} and {@code false} are produced with
             * (approximately) equal probability.
             * <p>The method {@code nextBoolean} is implemented by class {@code Random}
             * as if by:
             * <pre> {@code
             * public boolean nextBoolean() {
             * return next(1) != 0;
             * }}</pre>
             */
            // @ts-ignore
            public nextBoolean(): boolean;
            /**
             * Returns the next pseudorandom, uniformly distributed {@code float}
             * value between {@code 0.0} and {@code 1.0} from this random
             * number generator's sequence.
             * <p>The general contract of {@code nextFloat} is that one
             * {@code float} value, chosen (approximately) uniformly from the
             * range {@code 0.0f} (inclusive) to {@code 1.0f} (exclusive), is
             * pseudorandomly generated and returned. All 2<sup>24</sup> possible
             * {@code float} values of the form <i>m&nbsp;x&nbsp;</i>2<sup>-24</sup>,
             * where <i>m</i> is a positive integer less than 2<sup>24</sup>, are
             * produced with (approximately) equal probability.
             * <p>The method {@code nextFloat} is implemented by class {@code Random}
             * as if by:
             * <pre> {@code
             * public float nextFloat() {
             * return next(24) / ((float)(1 << 24));
             * }}</pre>
             * <p>The hedge "approximately" is used in the foregoing description only
             * because the next method is only approximately an unbiased source of
             * independently chosen bits. If it were a perfect source of randomly
             * chosen bits, then the algorithm shown would choose {@code float}
             * values from the stated range with perfect uniformity.<p>
             * [In early versions of Java, the result was incorrectly calculated as:
             * <pre> {@code
             * return next(30) / ((float)(1 << 30));}</pre>
             * This might seem to be equivalent, if not better, but in fact it
             * introduced a slight nonuniformity because of the bias in the rounding
             * of floating-point numbers: it was slightly more likely that the
             * low-order bit of the significand would be 0 than that it would be 1.]
             */
            // @ts-ignore
            public nextFloat(): number;
            /**
             * Returns the next pseudorandom, uniformly distributed
             * {@code double} value between {@code 0.0} and
             * {@code 1.0} from this random number generator's sequence.
             * <p>The general contract of {@code nextDouble} is that one
             * {@code double} value, chosen (approximately) uniformly from the
             * range {@code 0.0d} (inclusive) to {@code 1.0d} (exclusive), is
             * pseudorandomly generated and returned.
             * <p>The method {@code nextDouble} is implemented by class {@code Random}
             * as if by:
             * <pre> {@code
             * public double nextDouble() {
             * return (((long)next(26) << 27) + next(27))
             * / (double)(1L << 53);
             * }}</pre>
             * <p>The hedge "approximately" is used in the foregoing description only
             * because the {@code next} method is only approximately an unbiased
             * source of independently chosen bits. If it were a perfect source of
             * randomly chosen bits, then the algorithm shown would choose
             * {@code double} values from the stated range with perfect uniformity.
             * <p>[In early versions of Java, the result was incorrectly calculated as:
             * <pre> {@code
             * return (((long)next(27) << 27) + next(27))
             * / (double)(1L << 54);}</pre>
             * This might seem to be equivalent, if not better, but in fact it
             * introduced a large nonuniformity because of the bias in the rounding
             * of floating-point numbers: it was three times as likely that the
             * low-order bit of the significand would be 0 than that it would be 1!
             * This nonuniformity probably doesn't matter much in practice, but we
             * strive for perfection.]
             */
            // @ts-ignore
            public nextDouble(): number;
            /**
             * Returns the next pseudorandom, Gaussian ("normally") distributed
             * {@code double} value with mean {@code 0.0} and standard
             * deviation {@code 1.0} from this random number generator's sequence.
             * <p>
             * The general contract of {@code nextGaussian} is that one
             * {@code double} value, chosen from (approximately) the usual
             * normal distribution with mean {@code 0.0} and standard deviation
             * {@code 1.0}, is pseudorandomly generated and returned.
             * <p>The method {@code nextGaussian} is implemented by class
             * {@code Random} as if by a threadsafe version of the following:
             * <pre> {@code
             * private double nextNextGaussian;
             * private boolean haveNextNextGaussian = false;
             * public double nextGaussian() {
             * if (haveNextNextGaussian) {
             * haveNextNextGaussian = false;
             * return nextNextGaussian;
             * } else {
             * double v1, v2, s;
             * do {
             * v1 = 2 * nextDouble() - 1;   // between -1.0 and 1.0
             * v2 = 2 * nextDouble() - 1;   // between -1.0 and 1.0
             * s = v1 * v1 + v2 * v2;
             * } while (s >= 1 || s == 0);
             * double multiplier = StrictMath.sqrt(-2 * StrictMath.log(s)/s);
             * nextNextGaussian = v2 * multiplier;
             * haveNextNextGaussian = true;
             * return v1 * multiplier;
             * }
             * }}</pre>
             * This uses the <i>polar method</i> of G. E. P. Box, M. E. Muller, and
             * G. Marsaglia, as described by Donald E. Knuth in <i>The Art of
             * Computer Programming</i>, Volume 3: <i>Seminumerical Algorithms</i>,
             * section 3.4.1, subsection C, algorithm P. Note that it generates two
             * independent values at the cost of only one call to {@code StrictMath.log}
             * and one call to {@code StrictMath.sqrt}.
             */
            // @ts-ignore
            public nextGaussian(): number;
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code int} values.
             * <p>A pseudorandom {@code int} value is generated as if it's the result of
             * calling the method {@link #nextInt()}.
             */
            // @ts-ignore
            public ints(streamSize: number): java.util.stream.IntStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code int}
             * values.
             * <p>A pseudorandom {@code int} value is generated as if it's the result of
             * calling the method {@link #nextInt()}.
             */
            // @ts-ignore
            public ints(): java.util.stream.IntStream;
            /**
             * Returns a stream producing the given {@code streamSize} number
             * of pseudorandom {@code int} values, each conforming to the given
             * origin (inclusive) and bound (exclusive).
             * <p>A pseudorandom {@code int} value is generated as if it's the result of
             * calling the following method with the origin and bound:
             * <pre> {@code
             * int nextInt(int origin, int bound) {
             * int n = bound - origin;
             * if (n > 0) {
             * return nextInt(n) + origin;
             * }
             * else {  // range not representable as int
             * int r;
             * do {
             * r = nextInt();
             * } while (r < origin || r >= bound);
             * return r;
             * }
             * }}</pre>
             */
            // @ts-ignore
            public ints(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.IntStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * int} values, each conforming to the given origin (inclusive) and bound
             * (exclusive).
             * <p>A pseudorandom {@code int} value is generated as if it's the result of
             * calling the following method with the origin and bound:
             * <pre> {@code
             * int nextInt(int origin, int bound) {
             * int n = bound - origin;
             * if (n > 0) {
             * return nextInt(n) + origin;
             * }
             * else {  // range not representable as int
             * int r;
             * do {
             * r = nextInt();
             * } while (r < origin || r >= bound);
             * return r;
             * }
             * }}</pre>
             */
            // @ts-ignore
            public ints(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.IntStream;
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code long} values.
             * <p>A pseudorandom {@code long} value is generated as if it's the result
             * of calling the method {@link #nextLong()}.
             */
            // @ts-ignore
            public longs(streamSize: number): java.util.stream.LongStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code long}
             * values.
             * <p>A pseudorandom {@code long} value is generated as if it's the result
             * of calling the method {@link #nextLong()}.
             */
            // @ts-ignore
            public longs(): java.util.stream.LongStream;
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code long}, each conforming to the given origin
             * (inclusive) and bound (exclusive).
             * <p>A pseudorandom {@code long} value is generated as if it's the result
             * of calling the following method with the origin and bound:
             * <pre> {@code
             * long nextLong(long origin, long bound) {
             * long r = nextLong();
             * long n = bound - origin, m = n - 1;
             * if ((n & m) == 0L)  // power of two
             * r = (r & m) + origin;
             * else if (n > 0L) {  // reject over-represented candidates
             * for (long u = r >>> 1;            // ensure nonnegative
             * u + m - (r = u % n) < 0L;    // rejection check
             * u = nextLong() >>> 1) // retry
             * ;
             * r += origin;
             * }
             * else {              // range not representable as long
             * while (r < origin || r >= bound)
             * r = nextLong();
             * }
             * return r;
             * }}</pre>
             */
            // @ts-ignore
            public longs(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.LongStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * long} values, each conforming to the given origin (inclusive) and bound
             * (exclusive).
             * <p>A pseudorandom {@code long} value is generated as if it's the result
             * of calling the following method with the origin and bound:
             * <pre> {@code
             * long nextLong(long origin, long bound) {
             * long r = nextLong();
             * long n = bound - origin, m = n - 1;
             * if ((n & m) == 0L)  // power of two
             * r = (r & m) + origin;
             * else if (n > 0L) {  // reject over-represented candidates
             * for (long u = r >>> 1;            // ensure nonnegative
             * u + m - (r = u % n) < 0L;    // rejection check
             * u = nextLong() >>> 1) // retry
             * ;
             * r += origin;
             * }
             * else {              // range not representable as long
             * while (r < origin || r >= bound)
             * r = nextLong();
             * }
             * return r;
             * }}</pre>
             */
            // @ts-ignore
            public longs(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.LongStream;
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code double} values, each between zero
             * (inclusive) and one (exclusive).
             * <p>A pseudorandom {@code double} value is generated as if it's the result
             * of calling the method {@link #nextDouble()}.
             */
            // @ts-ignore
            public doubles(streamSize: number): java.util.stream.DoubleStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * double} values, each between zero (inclusive) and one
             * (exclusive).
             * <p>A pseudorandom {@code double} value is generated as if it's the result
             * of calling the method {@link #nextDouble()}.
             */
            // @ts-ignore
            public doubles(): java.util.stream.DoubleStream;
            /**
             * Returns a stream producing the given {@code streamSize} number of
             * pseudorandom {@code double} values, each conforming to the given origin
             * (inclusive) and bound (exclusive).
             * <p>A pseudorandom {@code double} value is generated as if it's the result
             * of calling the following method with the origin and bound:
             * <pre> {@code
             * double nextDouble(double origin, double bound) {
             * double r = nextDouble();
             * r = r * (bound - origin) + origin;
             * if (r >= bound) // correct for rounding
             * r = Math.nextDown(bound);
             * return r;
             * }}</pre>
             */
            // @ts-ignore
            public doubles(streamSize: number, randomNumberOrigin: number, randomNumberBound: number): java.util.stream.DoubleStream;
            /**
             * Returns an effectively unlimited stream of pseudorandom {@code
             * double} values, each conforming to the given origin (inclusive) and bound
             * (exclusive).
             * <p>A pseudorandom {@code double} value is generated as if it's the result
             * of calling the following method with the origin and bound:
             * <pre> {@code
             * double nextDouble(double origin, double bound) {
             * double r = nextDouble();
             * r = r * (bound - origin) + origin;
             * if (r >= bound) // correct for rounding
             * r = Math.nextDown(bound);
             * return r;
             * }}</pre>
             */
            // @ts-ignore
            public doubles(randomNumberOrigin: number, randomNumberBound: number): java.util.stream.DoubleStream;
        }
    }
}
