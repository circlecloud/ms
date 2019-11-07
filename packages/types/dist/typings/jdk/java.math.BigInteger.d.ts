declare namespace java {
    namespace math {
        // @ts-ignore
         class BigInteger extends java.lang.Number {
            /**
             * Translates a byte array containing the two's-complement binary
             * representation of a BigInteger into a BigInteger.  The input array is
             * assumed to be in <i>big-endian</i> byte-order: the most significant
             * byte is in the zeroth element.
             */
            // @ts-ignore
            constructor(val: number)
            /**
             * Translates the sign-magnitude representation of a BigInteger into a
             * BigInteger.  The sign is represented as an integer signum value: -1 for
             * negative, 0 for zero, or 1 for positive.  The magnitude is a byte array
             * in <i>big-endian</i> byte-order: the most significant byte is in the
             * zeroth element.  A zero-length magnitude array is permissible, and will
             * result in a BigInteger value of 0, whether signum is -1, 0 or 1.
             */
            // @ts-ignore
            constructor(signum: number, magnitude: number)
            /**
             * Translates the String representation of a BigInteger in the
             * specified radix into a BigInteger.  The String representation
             * consists of an optional minus or plus sign followed by a
             * sequence of one or more digits in the specified radix.  The
             * character-to-digit mapping is provided by {@code
             * Character.digit}.  The String may not contain any extraneous
             * characters (whitespace, for example).
             */
            // @ts-ignore
            constructor(val: string, radix: number)
            /**
             * Translates the decimal String representation of a BigInteger into a
             * BigInteger.  The String representation consists of an optional minus
             * sign followed by a sequence of one or more decimal digits.  The
             * character-to-digit mapping is provided by {@code Character.digit}.
             * The String may not contain any extraneous characters (whitespace, for
             * example).
             */
            // @ts-ignore
            constructor(val: string)
            /**
             * Constructs a randomly generated BigInteger, uniformly distributed over
             * the range 0 to (2<sup>{@code numBits}</sup> - 1), inclusive.
             * The uniformity of the distribution assumes that a fair source of random
             * bits is provided in {@code rnd}.  Note that this constructor always
             * constructs a non-negative BigInteger.
             */
            // @ts-ignore
            constructor(numBits: number, rnd: java.util.Random)
            /**
             * Constructs a randomly generated positive BigInteger that is probably
             * prime, with the specified bitLength.
             * <p>It is recommended that the {@link #probablePrime probablePrime}
             * method be used in preference to this constructor unless there
             * is a compelling need to specify a certainty.
             */
            // @ts-ignore
            constructor(bitLength: number, certainty: number, rnd: java.util.Random)
            // @ts-ignore
            public static ZERO: java.math.BigInteger;
            // @ts-ignore
            public static ONE: java.math.BigInteger;
            // @ts-ignore
            public static TEN: java.math.BigInteger;
            /**
             * Returns a positive BigInteger that is probably prime, with the
             * specified bitLength. The probability that a BigInteger returned
             * by this method is composite does not exceed 2<sup>-100</sup>.
             */
            // @ts-ignore
            public static probablePrime(bitLength: number, rnd: java.util.Random): java.math.BigInteger;
            /**
             * Returns the first integer greater than this {@code BigInteger} that
             * is probably prime.  The probability that the number returned by this
             * method is composite does not exceed 2<sup>-100</sup>. This method will
             * never skip over a prime when searching: if it returns {@code p}, there
             * is no prime {@code q} such that {@code this < q < p}.
             */
            // @ts-ignore
            public nextProbablePrime(): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is equal to that of the
             * specified {@code long}.  This "static factory method" is
             * provided in preference to a ({@code long}) constructor
             * because it allows for reuse of frequently used BigIntegers.
             */
            // @ts-ignore
            public static valueOf(val: number): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this + val)}.
             */
            // @ts-ignore
            public add(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this - val)}.
             */
            // @ts-ignore
            public subtract(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this * val)}.
             */
            // @ts-ignore
            public multiply(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this / val)}.
             */
            // @ts-ignore
            public divide(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns an array of two BigIntegers containing {@code (this / val)}
             * followed by {@code (this % val)}.
             */
            // @ts-ignore
            public divideAndRemainder(val: java.math.BigInteger): java.math.BigInteger[];
            /**
             * Returns a BigInteger whose value is {@code (this % val)}.
             */
            // @ts-ignore
            public remainder(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is <tt>(this<sup>exponent</sup>)</tt>.
             * Note that {@code exponent} is an integer rather than a BigInteger.
             */
            // @ts-ignore
            public pow(exponent: number): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is the greatest common divisor of
             * {@code abs(this)} and {@code abs(val)}.  Returns 0 if
             * {@code this == 0 && val == 0}.
             */
            // @ts-ignore
            public gcd(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is the absolute value of this
             * BigInteger.
             */
            // @ts-ignore
            public abs(): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (-this)}.
             */
            // @ts-ignore
            public negate(): java.math.BigInteger;
            /**
             * Returns the signum function of this BigInteger.
             */
            // @ts-ignore
            public signum(): number;
            /**
             * Returns a BigInteger whose value is {@code (this mod m}).  This method
             * differs from {@code remainder} in that it always returns a
             * <i>non-negative</i> BigInteger.
             */
            // @ts-ignore
            public mod(m: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is
             * <tt>(this<sup>exponent</sup> mod m)</tt>.  (Unlike {@code pow}, this
             * method permits negative exponents.)
             */
            // @ts-ignore
            public modPow(exponent: java.math.BigInteger, m: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this}<sup>-1</sup> {@code mod m)}.
             */
            // @ts-ignore
            public modInverse(m: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this << n)}.
             * The shift distance, {@code n}, may be negative, in which case
             * this method performs a right shift.
             * (Computes <tt>floor(this * 2<sup>n</sup>)</tt>.)
             */
            // @ts-ignore
            public shiftLeft(n: number): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this >> n)}.  Sign
             * extension is performed.  The shift distance, {@code n}, may be
             * negative, in which case this method performs a left shift.
             * (Computes <tt>floor(this / 2<sup>n</sup>)</tt>.)
             */
            // @ts-ignore
            public shiftRight(n: number): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this & val)}.  (This
             * method returns a negative BigInteger if and only if this and val are
             * both negative.)
             */
            // @ts-ignore
            public and(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this | val)}.  (This method
             * returns a negative BigInteger if and only if either this or val is
             * negative.)
             */
            // @ts-ignore
            public or(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this ^ val)}.  (This method
             * returns a negative BigInteger if and only if exactly one of this and
             * val are negative.)
             */
            // @ts-ignore
            public xor(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (~this)}.  (This method
             * returns a negative value if and only if this BigInteger is
             * non-negative.)
             */
            // @ts-ignore
            public not(): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is {@code (this & ~val)}.  This
             * method, which is equivalent to {@code and(val.not())}, is provided as
             * a convenience for masking operations.  (This method returns a negative
             * BigInteger if and only if {@code this} is negative and {@code val} is
             * positive.)
             */
            // @ts-ignore
            public andNot(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns {@code true} if and only if the designated bit is set.
             * (Computes {@code ((this & (1<<n)) != 0)}.)
             */
            // @ts-ignore
            public testBit(n: number): boolean;
            /**
             * Returns a BigInteger whose value is equivalent to this BigInteger
             * with the designated bit set.  (Computes {@code (this | (1<<n))}.)
             */
            // @ts-ignore
            public setBit(n: number): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is equivalent to this BigInteger
             * with the designated bit cleared.
             * (Computes {@code (this & ~(1<<n))}.)
             */
            // @ts-ignore
            public clearBit(n: number): java.math.BigInteger;
            /**
             * Returns a BigInteger whose value is equivalent to this BigInteger
             * with the designated bit flipped.
             * (Computes {@code (this ^ (1<<n))}.)
             */
            // @ts-ignore
            public flipBit(n: number): java.math.BigInteger;
            /**
             * Returns the index of the rightmost (lowest-order) one bit in this
             * BigInteger (the number of zero bits to the right of the rightmost
             * one bit).  Returns -1 if this BigInteger contains no one bits.
             * (Computes {@code (this == 0? -1 : log2(this & -this))}.)
             */
            // @ts-ignore
            public getLowestSetBit(): number;
            /**
             * Returns the number of bits in the minimal two's-complement
             * representation of this BigInteger, <i>excluding</i> a sign bit.
             * For positive BigIntegers, this is equivalent to the number of bits in
             * the ordinary binary representation.  (Computes
             * {@code (ceil(log2(this < 0 ? -this : this+1)))}.)
             */
            // @ts-ignore
            public bitLength(): number;
            /**
             * Returns the number of bits in the two's complement representation
             * of this BigInteger that differ from its sign bit.  This method is
             * useful when implementing bit-vector style sets atop BigIntegers.
             */
            // @ts-ignore
            public bitCount(): number;
            /**
             * Returns {@code true} if this BigInteger is probably prime,
             * {@code false} if it's definitely composite.  If
             * {@code certainty} is &le; 0, {@code true} is
             * returned.
             */
            // @ts-ignore
            public isProbablePrime(certainty: number): boolean;
            /**
             * Compares this BigInteger with the specified BigInteger.  This
             * method is provided in preference to individual methods for each
             * of the six boolean comparison operators ({@literal <}, ==,
             * {@literal >}, {@literal >=}, !=, {@literal <=}).  The suggested
             * idiom for performing these comparisons is: {@code
             * (x.compareTo(y)} &lt;<i>op</i>&gt; {@code 0)}, where
             * &lt;<i>op</i>&gt; is one of the six comparison operators.
             */
            // @ts-ignore
            public compareTo(val: java.math.BigInteger): number;
            /**
             * Compares this BigInteger with the specified Object for equality.
             */
            // @ts-ignore
            public equals(x: java.lang.Object): boolean;
            /**
             * Returns the minimum of this BigInteger and {@code val}.
             */
            // @ts-ignore
            public min(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns the maximum of this BigInteger and {@code val}.
             */
            // @ts-ignore
            public max(val: java.math.BigInteger): java.math.BigInteger;
            /**
             * Returns the hash code for this BigInteger.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the String representation of this BigInteger in the
             * given radix.  If the radix is outside the range from {@link
             * Character#MIN_RADIX} to {@link Character#MAX_RADIX} inclusive,
             * it will default to 10 (as is the case for
             * {@code Integer.toString}).  The digit-to-character mapping
             * provided by {@code Character.forDigit} is used, and a minus
             * sign is prepended if appropriate.  (This representation is
             * compatible with the {@link #BigInteger(String, int) (String,
             * int)} constructor.)
             */
            // @ts-ignore
            public toString(radix: number): string;
            /**
             * Returns the decimal String representation of this BigInteger.
             * The digit-to-character mapping provided by
             * {@code Character.forDigit} is used, and a minus sign is
             * prepended if appropriate.  (This representation is compatible
             * with the {@link #BigInteger(String) (String)} constructor, and
             * allows for String concatenation with Java's + operator.)
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a byte array containing the two's-complement
             * representation of this BigInteger.  The byte array will be in
             * <i>big-endian</i> byte-order: the most significant byte is in
             * the zeroth element.  The array will contain the minimum number
             * of bytes required to represent this BigInteger, including at
             * least one sign bit, which is {@code (ceil((this.bitLength() +
             * 1)/8))}.  (This representation is compatible with the
             * {@link #BigInteger(byte[]) (byte[])} constructor.)
             */
            // @ts-ignore
            public toByteArray(): number[];
            /**
             * Converts this BigInteger to an {@code int}.  This
             * conversion is analogous to a
             * <i>narrowing primitive conversion</i> from {@code long} to
             * {@code int} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * if this BigInteger is too big to fit in an
             * {@code int}, only the low-order 32 bits are returned.
             * Note that this conversion can lose information about the
             * overall magnitude of the BigInteger value as well as return a
             * result with the opposite sign.
             */
            // @ts-ignore
            public intValue(): number;
            /**
             * Converts this BigInteger to a {@code long}.  This
             * conversion is analogous to a
             * <i>narrowing primitive conversion</i> from {@code long} to
             * {@code int} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * if this BigInteger is too big to fit in a
             * {@code long}, only the low-order 64 bits are returned.
             * Note that this conversion can lose information about the
             * overall magnitude of the BigInteger value as well as return a
             * result with the opposite sign.
             */
            // @ts-ignore
            public longValue(): number;
            /**
             * Converts this BigInteger to a {@code float}.  This
             * conversion is similar to the
             * <i>narrowing primitive conversion</i> from {@code double} to
             * {@code float} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * if this BigInteger has too great a magnitude
             * to represent as a {@code float}, it will be converted to
             * {@link Float#NEGATIVE_INFINITY} or {@link
             * Float#POSITIVE_INFINITY} as appropriate.  Note that even when
             * the return value is finite, this conversion can lose
             * information about the precision of the BigInteger value.
             */
            // @ts-ignore
            public floatValue(): number;
            /**
             * Converts this BigInteger to a {@code double}.  This
             * conversion is similar to the
             * <i>narrowing primitive conversion</i> from {@code double} to
             * {@code float} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * if this BigInteger has too great a magnitude
             * to represent as a {@code double}, it will be converted to
             * {@link Double#NEGATIVE_INFINITY} or {@link
             * Double#POSITIVE_INFINITY} as appropriate.  Note that even when
             * the return value is finite, this conversion can lose
             * information about the precision of the BigInteger value.
             */
            // @ts-ignore
            public doubleValue(): number;
            /**
             * Converts this {@code BigInteger} to a {@code long}, checking
             * for lost information.  If the value of this {@code BigInteger}
             * is out of the range of the {@code long} type, then an
             * {@code ArithmeticException} is thrown.
             */
            // @ts-ignore
            public longValueExact(): number;
            /**
             * Converts this {@code BigInteger} to an {@code int}, checking
             * for lost information.  If the value of this {@code BigInteger}
             * is out of the range of the {@code int} type, then an
             * {@code ArithmeticException} is thrown.
             */
            // @ts-ignore
            public intValueExact(): number;
            /**
             * Converts this {@code BigInteger} to a {@code short}, checking
             * for lost information.  If the value of this {@code BigInteger}
             * is out of the range of the {@code short} type, then an
             * {@code ArithmeticException} is thrown.
             */
            // @ts-ignore
            public shortValueExact(): number;
            /**
             * Converts this {@code BigInteger} to a {@code byte}, checking
             * for lost information.  If the value of this {@code BigInteger}
             * is out of the range of the {@code byte} type, then an
             * {@code ArithmeticException} is thrown.
             */
            // @ts-ignore
            public byteValueExact(): number;
        }
    }
}
