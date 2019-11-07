// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Double extends java.lang.Number {
            /**
             * Constructs a newly allocated {@code Double} object that
             * represents the primitive {@code double} argument.
             */
            // @ts-ignore
            constructor(value: number)
            /**
             * Constructs a newly allocated {@code Double} object that
             * represents the floating-point value of type {@code double}
             * represented by the string. The string is converted to a
             * {@code double} value as if by the {@code valueOf} method.
             */
            // @ts-ignore
            constructor(s: string)
            // @ts-ignore
            public static POSITIVE_INFINITY: number;
            // @ts-ignore
            public static NEGATIVE_INFINITY: number;
            // @ts-ignore
            public static NaN: number;
            // @ts-ignore
            public static MAX_VALUE: number;
            // @ts-ignore
            public static MIN_NORMAL: number;
            // @ts-ignore
            public static MIN_VALUE: number;
            // @ts-ignore
            public static MAX_EXPONENT: number;
            // @ts-ignore
            public static MIN_EXPONENT: number;
            // @ts-ignore
            public static SIZE: number;
            // @ts-ignore
            public static BYTES: number;
            // @ts-ignore
            public static TYPE: java.lang.Class;
            /**
             * Returns a string representation of the {@code double}
             * argument. All characters mentioned below are ASCII characters.
             * <ul>
             * <li>If the argument is NaN, the result is the string
             * "{@code NaN}".
             * <li>Otherwise, the result is a string that represents the sign and
             * magnitude (absolute value) of the argument. If the sign is negative,
             * the first character of the result is '{@code -}'
             * ({@code '\u002D'}); if the sign is positive, no sign character
             * appears in the result. As for the magnitude <i>m</i>:
             * <ul>
             * <li>If <i>m</i> is infinity, it is represented by the characters
             * {@code "Infinity"}; thus, positive infinity produces the result
             * {@code "Infinity"} and negative infinity produces the result
             * {@code "-Infinity"}.
             * <li>If <i>m</i> is zero, it is represented by the characters
             * {@code "0.0"}; thus, negative zero produces the result
             * {@code "-0.0"} and positive zero produces the result
             * {@code "0.0"}.
             * <li>If <i>m</i> is greater than or equal to 10<sup>-3</sup> but less
             * than 10<sup>7</sup>, then it is represented as the integer part of
             * <i>m</i>, in decimal form with no leading zeroes, followed by
             * '{@code .}' ({@code '\u002E'}), followed by one or
             * more decimal digits representing the fractional part of <i>m</i>.
             * <li>If <i>m</i> is less than 10<sup>-3</sup> or greater than or
             * equal to 10<sup>7</sup>, then it is represented in so-called
             * "computerized scientific notation." Let <i>n</i> be the unique
             * integer such that 10<sup><i>n</i></sup> &le; <i>m</i> {@literal <}
             * 10<sup><i>n</i>+1</sup>; then let <i>a</i> be the
             * mathematically exact quotient of <i>m</i> and
             * 10<sup><i>n</i></sup> so that 1 &le; <i>a</i> {@literal <} 10. The
             * magnitude is then represented as the integer part of <i>a</i>,
             * as a single decimal digit, followed by '{@code .}'
             * ({@code '\u002E'}), followed by decimal digits
             * representing the fractional part of <i>a</i>, followed by the
             * letter '{@code E}' ({@code '\u0045'}), followed
             * by a representation of <i>n</i> as a decimal integer, as
             * produced by the method {@link Integer#toString(int)}.
             * </ul>
             * </ul>
             * How many digits must be printed for the fractional part of
             * <i>m</i> or <i>a</i>? There must be at least one digit to represent
             * the fractional part, and beyond that as many, but only as many, more
             * digits as are needed to uniquely distinguish the argument value from
             * adjacent values of type {@code double}. That is, suppose that
             * <i>x</i> is the exact mathematical value represented by the decimal
             * representation produced by this method for a finite nonzero argument
             * <i>d</i>. Then <i>d</i> must be the {@code double} value nearest
             * to <i>x</i>; or if two {@code double} values are equally close
             * to <i>x</i>, then <i>d</i> must be one of them and the least
             * significant bit of the significand of <i>d</i> must be {@code 0}.
             * <p>To create localized string representations of a floating-point
             * value, use subclasses of {@link java.text.NumberFormat}.
             */
            // @ts-ignore
            public static toString(d: number): string;
            /**
             * Returns a hexadecimal string representation of the
             * {@code double} argument. All characters mentioned below
             * are ASCII characters.
             * <ul>
             * <li>If the argument is NaN, the result is the string
             * "{@code NaN}".
             * <li>Otherwise, the result is a string that represents the sign
             * and magnitude of the argument. If the sign is negative, the
             * first character of the result is '{@code -}'
             * ({@code '\u002D'}); if the sign is positive, no sign
             * character appears in the result. As for the magnitude <i>m</i>:
             * <ul>
             * <li>If <i>m</i> is infinity, it is represented by the string
             * {@code "Infinity"}; thus, positive infinity produces the
             * result {@code "Infinity"} and negative infinity produces
             * the result {@code "-Infinity"}.
             * <li>If <i>m</i> is zero, it is represented by the string
             * {@code "0x0.0p0"}; thus, negative zero produces the result
             * {@code "-0x0.0p0"} and positive zero produces the result
             * {@code "0x0.0p0"}.
             * <li>If <i>m</i> is a {@code double} value with a
             * normalized representation, substrings are used to represent the
             * significand and exponent fields.  The significand is
             * represented by the characters {@code "0x1."}
             * followed by a lowercase hexadecimal representation of the rest
             * of the significand as a fraction.  Trailing zeros in the
             * hexadecimal representation are removed unless all the digits
             * are zero, in which case a single zero is used. Next, the
             * exponent is represented by {@code "p"} followed
             * by a decimal string of the unbiased exponent as if produced by
             * a call to {@link Integer#toString(int) Integer.toString} on the
             * exponent value.
             * <li>If <i>m</i> is a {@code double} value with a subnormal
             * representation, the significand is represented by the
             * characters {@code "0x0."} followed by a
             * hexadecimal representation of the rest of the significand as a
             * fraction.  Trailing zeros in the hexadecimal representation are
             * removed. Next, the exponent is represented by
             * {@code "p-1022"}.  Note that there must be at
             * least one nonzero digit in a subnormal significand.
             * </ul>
             * </ul>
             * <table border>
             * <caption>Examples</caption>
             * <tr><th>Floating-point Value</th><th>Hexadecimal String</th>
             * <tr><td>{@code 1.0}</td> <td>{@code 0x1.0p0}</td>
             * <tr><td>{@code -1.0}</td>        <td>{@code -0x1.0p0}</td>
             * <tr><td>{@code 2.0}</td> <td>{@code 0x1.0p1}</td>
             * <tr><td>{@code 3.0}</td> <td>{@code 0x1.8p1}</td>
             * <tr><td>{@code 0.5}</td> <td>{@code 0x1.0p-1}</td>
             * <tr><td>{@code 0.25}</td>        <td>{@code 0x1.0p-2}</td>
             * <tr><td>{@code Double.MAX_VALUE}</td>
             * <td>{@code 0x1.fffffffffffffp1023}</td>
             * <tr><td>{@code Minimum Normal Value}</td>
             * <td>{@code 0x1.0p-1022}</td>
             * <tr><td>{@code Maximum Subnormal Value}</td>
             * <td>{@code 0x0.fffffffffffffp-1022}</td>
             * <tr><td>{@code Double.MIN_VALUE}</td>
             * <td>{@code 0x0.0000000000001p-1022}</td>
             * </table>
             */
            // @ts-ignore
            public static toHexString(d: number): string;
            /**
             * Returns a {@code Double} object holding the
             * {@code double} value represented by the argument string
             * {@code s}.
             * <p>If {@code s} is {@code null}, then a
             * {@code NullPointerException} is thrown.
             * <p>Leading and trailing whitespace characters in {@code s}
             * are ignored.  Whitespace is removed as if by the {@link
             * String#trim} method; that is, both ASCII space and control
             * characters are removed. The rest of {@code s} should
             * constitute a <i>FloatValue</i> as described by the lexical
             * syntax rules:
             * <blockquote>
             * <dl>
             * <dt><i>FloatValue:</i>
             * <dd><i>Sign<sub>opt</sub></i> {@code NaN}
             * <dd><i>Sign<sub>opt</sub></i> {@code Infinity}
             * <dd><i>Sign<sub>opt</sub> FloatingPointLiteral</i>
             * <dd><i>Sign<sub>opt</sub> HexFloatingPointLiteral</i>
             * <dd><i>SignedInteger</i>
             * </dl>
             * <dl>
             * <dt><i>HexFloatingPointLiteral</i>:
             * <dd> <i>HexSignificand BinaryExponent FloatTypeSuffix<sub>opt</sub></i>
             * </dl>
             * <dl>
             * <dt><i>HexSignificand:</i>
             * <dd><i>HexNumeral</i>
             * <dd><i>HexNumeral</i> {@code .}
             * <dd>{@code 0x} <i>HexDigits<sub>opt</sub>
             * </i>{@code .}<i> HexDigits</i>
             * <dd>{@code 0X}<i> HexDigits<sub>opt</sub>
             * </i>{@code .} <i>HexDigits</i>
             * </dl>
             * <dl>
             * <dt><i>BinaryExponent:</i>
             * <dd><i>BinaryExponentIndicator SignedInteger</i>
             * </dl>
             * <dl>
             * <dt><i>BinaryExponentIndicator:</i>
             * <dd>{@code p}
             * <dd>{@code P}
             * </dl>
             * </blockquote>
             * where <i>Sign</i>, <i>FloatingPointLiteral</i>,
             * <i>HexNumeral</i>, <i>HexDigits</i>, <i>SignedInteger</i> and
             * <i>FloatTypeSuffix</i> are as defined in the lexical structure
             * sections of
             * <cite>The Java&trade; Language Specification</cite>,
             * except that underscores are not accepted between digits.
             * If {@code s} does not have the form of
             * a <i>FloatValue</i>, then a {@code NumberFormatException}
             * is thrown. Otherwise, {@code s} is regarded as
             * representing an exact decimal value in the usual
             * "computerized scientific notation" or as an exact
             * hexadecimal value; this exact numerical value is then
             * conceptually converted to an "infinitely precise"
             * binary value that is then rounded to type {@code double}
             * by the usual round-to-nearest rule of IEEE 754 floating-point
             * arithmetic, which includes preserving the sign of a zero
             * value.
             * Note that the round-to-nearest rule also implies overflow and
             * underflow behaviour; if the exact value of {@code s} is large
             * enough in magnitude (greater than or equal to ({@link
             * #MAX_VALUE} + {@link Math#ulp(double) ulp(MAX_VALUE)}/2),
             * rounding to {@code double} will result in an infinity and if the
             * exact value of {@code s} is small enough in magnitude (less
             * than or equal to {@link #MIN_VALUE}/2), rounding to float will
             * result in a zero.
             * Finally, after rounding a {@code Double} object representing
             * this {@code double} value is returned.
             * <p> To interpret localized string representations of a
             * floating-point value, use subclasses of {@link
             * java.text.NumberFormat}.
             * <p>Note that trailing format specifiers, specifiers that
             * determine the type of a floating-point literal
             * ({@code 1.0f} is a {@code float} value;
             * {@code 1.0d} is a {@code double} value), do
             * <em>not</em> influence the results of this method.  In other
             * words, the numerical value of the input string is converted
             * directly to the target floating-point type.  The two-step
             * sequence of conversions, string to {@code float} followed
             * by {@code float} to {@code double}, is <em>not</em>
             * equivalent to converting a string directly to
             * {@code double}. For example, the {@code float}
             * literal {@code 0.1f} is equal to the {@code double}
             * value {@code 0.10000000149011612}; the {@code float}
             * literal {@code 0.1f} represents a different numerical
             * value than the {@code double} literal
             * {@code 0.1}. (The numerical value 0.1 cannot be exactly
             * represented in a binary floating-point number.)
             * <p>To avoid calling this method on an invalid string and having
             * a {@code NumberFormatException} be thrown, the regular
             * expression below can be used to screen the input string:
             * <pre>{@code
             * final String Digits     = "(\\p{Digit}+)";
             * final String HexDigits  = "(\\p{XDigit}+)";
             * // an exponent is 'e' or 'E' followed by an optionally
             * // signed decimal integer.
             * final String Exp        = "[eE][+-]?"+Digits;
             * final String fpRegex    =
             * ("[\\x00-\\x20]*"+  // Optional leading "whitespace"
             * "[+-]?(" + // Optional sign character
             * "NaN|" +           // "NaN" string
             * "Infinity|" +      // "Infinity" string
             * // A decimal floating-point string representing a finite positive
             * // number without a leading sign has at most five basic pieces:
             * // Digits . Digits ExponentPart FloatTypeSuffix
             * //
             * // Since this method allows integer-only strings as input
             * // in addition to strings of floating-point literals, the
             * // two sub-patterns below are simplifications of the grammar
             * // productions from section 3.10.2 of
             * // The Java Language Specification.
             * // Digits ._opt Digits_opt ExponentPart_opt FloatTypeSuffix_opt
             * "((("+Digits+"(\\.)?("+Digits+"?)("+Exp+")?)|"+
             * // . Digits ExponentPart_opt FloatTypeSuffix_opt
             * "(\\.("+Digits+")("+Exp+")?)|"+
             * // Hexadecimal strings
             * "((" +
             * // 0[xX] HexDigits ._opt BinaryExponent FloatTypeSuffix_opt
             * "(0[xX]" + HexDigits + "(\\.)?)|" +
             * // 0[xX] HexDigits_opt . HexDigits BinaryExponent FloatTypeSuffix_opt
             * "(0[xX]" + HexDigits + "?(\\.)" + HexDigits + ")" +
             * ")[pP][+-]?" + Digits + "))" +
             * "[fFdD]?))" +
             * "[\\x00-\\x20]*");// Optional trailing "whitespace"
             * if (Pattern.matches(fpRegex, myString))
             * Double.valueOf(myString); // Will not throw NumberFormatException
             * else {
             * // Perform suitable alternative action
             * }
             * }</pre>
             */
            // @ts-ignore
            public static valueOf(s: string): java.lang.Double;
            /**
             * Returns a {@code Double} instance representing the specified
             * {@code double} value.
             * If a new {@code Double} instance is not required, this method
             * should generally be used in preference to the constructor
             * {@link #Double(double)}, as this method is likely to yield
             * significantly better space and time performance by caching
             * frequently requested values.
             */
            // @ts-ignore
            public static valueOf(d: number): java.lang.Double;
            /**
             * Returns a new {@code double} initialized to the value
             * represented by the specified {@code String}, as performed
             * by the {@code valueOf} method of class
             * {@code Double}.
             */
            // @ts-ignore
            public static parseDouble(s: string): number;
            /**
             * Returns {@code true} if the specified number is a
             * Not-a-Number (NaN) value, {@code false} otherwise.
             */
            // @ts-ignore
            public static isNaN(v: number): boolean;
            /**
             * Returns {@code true} if the specified number is infinitely
             * large in magnitude, {@code false} otherwise.
             */
            // @ts-ignore
            public static isInfinite(v: number): boolean;
            /**
             * Returns {@code true} if the argument is a finite floating-point
             * value; returns {@code false} otherwise (for NaN and infinity
             * arguments).
             */
            // @ts-ignore
            public static isFinite(d: number): boolean;
            /**
             * Returns {@code true} if this {@code Double} value is
             * a Not-a-Number (NaN), {@code false} otherwise.
             */
            // @ts-ignore
            public isNaN(): boolean;
            /**
             * Returns {@code true} if this {@code Double} value is
             * infinitely large in magnitude, {@code false} otherwise.
             */
            // @ts-ignore
            public isInfinite(): boolean;
            /**
             * Returns a string representation of this {@code Double} object.
             * The primitive {@code double} value represented by this
             * object is converted to a string exactly as if by the method
             * {@code toString} of one argument.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns the value of this {@code Double} as a {@code byte}
             * after a narrowing primitive conversion.
             */
            // @ts-ignore
            public byteValue(): number;
            /**
             * Returns the value of this {@code Double} as a {@code short}
             * after a narrowing primitive conversion.
             */
            // @ts-ignore
            public shortValue(): number;
            /**
             * Returns the value of this {@code Double} as an {@code int}
             * after a narrowing primitive conversion.
             */
            // @ts-ignore
            public intValue(): number;
            /**
             * Returns the value of this {@code Double} as a {@code long}
             * after a narrowing primitive conversion.
             */
            // @ts-ignore
            public longValue(): number;
            /**
             * Returns the value of this {@code Double} as a {@code float}
             * after a narrowing primitive conversion.
             */
            // @ts-ignore
            public floatValue(): number;
            /**
             * Returns the {@code double} value of this {@code Double} object.
             */
            // @ts-ignore
            public doubleValue(): number;
            /**
             * Returns a hash code for this {@code Double} object. The
             * result is the exclusive OR of the two halves of the
             * {@code long} integer bit representation, exactly as
             * produced by the method {@link #doubleToLongBits(double)}, of
             * the primitive {@code double} value represented by this
             * {@code Double} object. That is, the hash code is the value
             * of the expression:
             * <blockquote>
             * {@code (int)(v^(v>>>32))}
             * </blockquote>
             * where {@code v} is defined by:
             * <blockquote>
             * {@code long v = Double.doubleToLongBits(this.doubleValue());}
             * </blockquote>
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a hash code for a {@code double} value; compatible with
             * {@code Double.hashCode()}.
             */
            // @ts-ignore
            public static hashCode(value: number): number;
            /**
             * Compares this object against the specified object.  The result
             * is {@code true} if and only if the argument is not
             * {@code null} and is a {@code Double} object that
             * represents a {@code double} that has the same value as the
             * {@code double} represented by this object. For this
             * purpose, two {@code double} values are considered to be
             * the same if and only if the method {@link
             * #doubleToLongBits(double)} returns the identical
             * {@code long} value when applied to each.
             * <p>Note that in most cases, for two instances of class
             * {@code Double}, {@code d1} and {@code d2}, the
             * value of {@code d1.equals(d2)} is {@code true} if and
             * only if
             * <blockquote>
             * {@code d1.doubleValue() == d2.doubleValue()}
             * </blockquote>
             * <p>also has the value {@code true}. However, there are two
             * exceptions:
             * <ul>
             * <li>If {@code d1} and {@code d2} both represent
             * {@code Double.NaN}, then the {@code equals} method
             * returns {@code true}, even though
             * {@code Double.NaN==Double.NaN} has the value
             * {@code false}.
             * <li>If {@code d1} represents {@code +0.0} while
             * {@code d2} represents {@code -0.0}, or vice versa,
             * the {@code equal} test has the value {@code false},
             * even though {@code +0.0==-0.0} has the value {@code true}.
             * </ul>
             * This definition allows hash tables to operate properly.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a representation of the specified floating-point value
             * according to the IEEE 754 floating-point "double
             * format" bit layout.
             * <p>Bit 63 (the bit that is selected by the mask
             * {@code 0x8000000000000000L}) represents the sign of the
             * floating-point number. Bits
             * 62-52 (the bits that are selected by the mask
             * {@code 0x7ff0000000000000L}) represent the exponent. Bits 51-0
             * (the bits that are selected by the mask
             * {@code 0x000fffffffffffffL}) represent the significand
             * (sometimes called the mantissa) of the floating-point number.
             * <p>If the argument is positive infinity, the result is
             * {@code 0x7ff0000000000000L}.
             * <p>If the argument is negative infinity, the result is
             * {@code 0xfff0000000000000L}.
             * <p>If the argument is NaN, the result is
             * {@code 0x7ff8000000000000L}.
             * <p>In all cases, the result is a {@code long} integer that, when
             * given to the {@link #longBitsToDouble(long)} method, will produce a
             * floating-point value the same as the argument to
             * {@code doubleToLongBits} (except all NaN values are
             * collapsed to a single "canonical" NaN value).
             */
            // @ts-ignore
            public static doubleToLongBits(value: number): number;
            /**
             * Returns a representation of the specified floating-point value
             * according to the IEEE 754 floating-point "double
             * format" bit layout, preserving Not-a-Number (NaN) values.
             * <p>Bit 63 (the bit that is selected by the mask
             * {@code 0x8000000000000000L}) represents the sign of the
             * floating-point number. Bits
             * 62-52 (the bits that are selected by the mask
             * {@code 0x7ff0000000000000L}) represent the exponent. Bits 51-0
             * (the bits that are selected by the mask
             * {@code 0x000fffffffffffffL}) represent the significand
             * (sometimes called the mantissa) of the floating-point number.
             * <p>If the argument is positive infinity, the result is
             * {@code 0x7ff0000000000000L}.
             * <p>If the argument is negative infinity, the result is
             * {@code 0xfff0000000000000L}.
             * <p>If the argument is NaN, the result is the {@code long}
             * integer representing the actual NaN value.  Unlike the
             * {@code doubleToLongBits} method,
             * {@code doubleToRawLongBits} does not collapse all the bit
             * patterns encoding a NaN to a single "canonical" NaN
             * value.
             * <p>In all cases, the result is a {@code long} integer that,
             * when given to the {@link #longBitsToDouble(long)} method, will
             * produce a floating-point value the same as the argument to
             * {@code doubleToRawLongBits}.
             */
            // @ts-ignore
            public static doubleToRawLongBits(value: number): number;
            /**
             * Returns the {@code double} value corresponding to a given
             * bit representation.
             * The argument is considered to be a representation of a
             * floating-point value according to the IEEE 754 floating-point
             * "double format" bit layout.
             * <p>If the argument is {@code 0x7ff0000000000000L}, the result
             * is positive infinity.
             * <p>If the argument is {@code 0xfff0000000000000L}, the result
             * is negative infinity.
             * <p>If the argument is any value in the range
             * {@code 0x7ff0000000000001L} through
             * {@code 0x7fffffffffffffffL} or in the range
             * {@code 0xfff0000000000001L} through
             * {@code 0xffffffffffffffffL}, the result is a NaN.  No IEEE
             * 754 floating-point operation provided by Java can distinguish
             * between two NaN values of the same type with different bit
             * patterns.  Distinct values of NaN are only distinguishable by
             * use of the {@code Double.doubleToRawLongBits} method.
             * <p>In all other cases, let <i>s</i>, <i>e</i>, and <i>m</i> be three
             * values that can be computed from the argument:
             * <blockquote><pre>{@code
             * int s = ((bits >> 63) == 0) ? 1 : -1;
             * int e = (int)((bits >> 52) & 0x7ffL);
             * long m = (e == 0) ?
             * (bits & 0xfffffffffffffL) << 1 :
             * (bits & 0xfffffffffffffL) | 0x10000000000000L;
             * }</pre></blockquote>
             * Then the floating-point result equals the value of the mathematical
             * expression <i>s</i>&middot;<i>m</i>&middot;2<sup><i>e</i>-1075</sup>.
             * <p>Note that this method may not be able to return a
             * {@code double} NaN with exactly same bit pattern as the
             * {@code long} argument.  IEEE 754 distinguishes between two
             * kinds of NaNs, quiet NaNs and <i>signaling NaNs</i>.  The
             * differences between the two kinds of NaN are generally not
             * visible in Java.  Arithmetic operations on signaling NaNs turn
             * them into quiet NaNs with a different, but often similar, bit
             * pattern.  However, on some processors merely copying a
             * signaling NaN also performs that conversion.  In particular,
             * copying a signaling NaN to return it to the calling method
             * may perform this conversion.  So {@code longBitsToDouble}
             * may not be able to return a {@code double} with a
             * signaling NaN bit pattern.  Consequently, for some
             * {@code long} values,
             * {@code doubleToRawLongBits(longBitsToDouble(start))} may
             * <i>not</i> equal {@code start}.  Moreover, which
             * particular bit patterns represent signaling NaNs is platform
             * dependent; although all NaN bit patterns, quiet or signaling,
             * must be in the NaN range identified above.
             */
            // @ts-ignore
            public static longBitsToDouble(bits: number): number;
            /**
             * Compares two {@code Double} objects numerically.  There
             * are two ways in which comparisons performed by this method
             * differ from those performed by the Java language numerical
             * comparison operators ({@code <, <=, ==, >=, >})
             * when applied to primitive {@code double} values:
             * <ul><li>
             * {@code Double.NaN} is considered by this method
             * to be equal to itself and greater than all other
             * {@code double} values (including
             * {@code Double.POSITIVE_INFINITY}).
             * <li>
             * {@code 0.0d} is considered by this method to be greater
             * than {@code -0.0d}.
             * </ul>
             * This ensures that the <i>natural ordering</i> of
             * {@code Double} objects imposed by this method is <i>consistent
             * with equals</i>.
             */
            // @ts-ignore
            public compareTo(anotherDouble: java.lang.Double): number;
            /**
             * Compares the two specified {@code double} values. The sign
             * of the integer value returned is the same as that of the
             * integer that would be returned by the call:
             * <pre>
             * new Double(d1).compareTo(new Double(d2))
             * </pre>
             */
            // @ts-ignore
            public static compare(d1: number, d2: number): number;
            /**
             * Adds two {@code double} values together as per the + operator.
             */
            // @ts-ignore
            public static sum(a: number, b: number): number;
            /**
             * Returns the greater of two {@code double} values
             * as if by calling {@link Math#max(double, double) Math.max}.
             */
            // @ts-ignore
            public static max(a: number, b: number): number;
            /**
             * Returns the smaller of two {@code double} values
             * as if by calling {@link Math#min(double, double) Math.min}.
             */
            // @ts-ignore
            public static min(a: number, b: number): number;
        }
    }
}
