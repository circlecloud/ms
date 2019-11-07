// @ts-nocheck
declare namespace java {
    namespace math {
        // @ts-ignore
         class BigDecimal extends java.lang.Number {
            /**
             * Translates a character array representation of a
             * {@code BigDecimal} into a {@code BigDecimal}, accepting the
             * same sequence of characters as the {@link #BigDecimal(String)}
             * constructor, while allowing a sub-array to be specified.
             * <p>Note that if the sequence of characters is already available
             * within a character array, using this constructor is faster than
             * converting the {@code char} array to string and using the
             * {@code BigDecimal(String)} constructor .
             */
            // @ts-ignore
            constructor(input: string, offset: number, len: number)
            /**
             * Translates a character array representation of a
             * {@code BigDecimal} into a {@code BigDecimal}, accepting the
             * same sequence of characters as the {@link #BigDecimal(String)}
             * constructor, while allowing a sub-array to be specified and
             * with rounding according to the context settings.
             * <p>Note that if the sequence of characters is already available
             * within a character array, using this constructor is faster than
             * converting the {@code char} array to string and using the
             * {@code BigDecimal(String)} constructor .
             */
            // @ts-ignore
            constructor(input: string, offset: number, len: number, mc: java.math.MathContext)
            /**
             * Translates a character array representation of a
             * {@code BigDecimal} into a {@code BigDecimal}, accepting the
             * same sequence of characters as the {@link #BigDecimal(String)}
             * constructor.
             * <p>Note that if the sequence of characters is already available
             * as a character array, using this constructor is faster than
             * converting the {@code char} array to string and using the
             * {@code BigDecimal(String)} constructor .
             */
            // @ts-ignore
            constructor(input: string)
            /**
             * Translates a character array representation of a
             * {@code BigDecimal} into a {@code BigDecimal}, accepting the
             * same sequence of characters as the {@link #BigDecimal(String)}
             * constructor and with rounding according to the context
             * settings.
             * <p>Note that if the sequence of characters is already available
             * as a character array, using this constructor is faster than
             * converting the {@code char} array to string and using the
             * {@code BigDecimal(String)} constructor .
             */
            // @ts-ignore
            constructor(input: string, mc: java.math.MathContext)
            /**
             * Translates the string representation of a {@code BigDecimal}
             * into a {@code BigDecimal}.  The string representation consists
             * of an optional sign, {@code '+'} (<tt> '&#92;u002B'</tt>) or
             * {@code '-'} (<tt>'&#92;u002D'</tt>), followed by a sequence of
             * zero or more decimal digits ("the integer"), optionally
             * followed by a fraction, optionally followed by an exponent.
             * <p>The fraction consists of a decimal point followed by zero
             * or more decimal digits.  The string must contain at least one
             * digit in either the integer or the fraction.  The number formed
             * by the sign, the integer and the fraction is referred to as the
             * <i>significand</i>.
             * <p>The exponent consists of the character {@code 'e'}
             * (<tt>'&#92;u0065'</tt>) or {@code 'E'} (<tt>'&#92;u0045'</tt>)
             * followed by one or more decimal digits.  The value of the
             * exponent must lie between -{@link Integer#MAX_VALUE} ({@link
             * Integer#MIN_VALUE}+1) and {@link Integer#MAX_VALUE}, inclusive.
             * <p>More formally, the strings this constructor accepts are
             * described by the following grammar:
             * <blockquote>
             * <dl>
             * <dt><i>BigDecimalString:</i>
             * <dd><i>Sign<sub>opt</sub> Significand Exponent<sub>opt</sub></i>
             * <dt><i>Sign:</i>
             * <dd>{@code +}
             * <dd>{@code -}
             * <dt><i>Significand:</i>
             * <dd><i>IntegerPart</i> {@code .} <i>FractionPart<sub>opt</sub></i>
             * <dd>{@code .} <i>FractionPart</i>
             * <dd><i>IntegerPart</i>
             * <dt><i>IntegerPart:</i>
             * <dd><i>Digits</i>
             * <dt><i>FractionPart:</i>
             * <dd><i>Digits</i>
             * <dt><i>Exponent:</i>
             * <dd><i>ExponentIndicator SignedInteger</i>
             * <dt><i>ExponentIndicator:</i>
             * <dd>{@code e}
             * <dd>{@code E}
             * <dt><i>SignedInteger:</i>
             * <dd><i>Sign<sub>opt</sub> Digits</i>
             * <dt><i>Digits:</i>
             * <dd><i>Digit</i>
             * <dd><i>Digits Digit</i>
             * <dt><i>Digit:</i>
             * <dd>any character for which {@link Character#isDigit}
             * returns {@code true}, including 0, 1, 2 ...
             * </dl>
             * </blockquote>
             * <p>The scale of the returned {@code BigDecimal} will be the
             * number of digits in the fraction, or zero if the string
             * contains no decimal point, subject to adjustment for any
             * exponent; if the string contains an exponent, the exponent is
             * subtracted from the scale.  The value of the resulting scale
             * must lie between {@code Integer.MIN_VALUE} and
             * {@code Integer.MAX_VALUE}, inclusive.
             * <p>The character-to-digit mapping is provided by {@link
             * java.lang.Character#digit} set to convert to radix 10.  The
             * String may not contain any extraneous characters (whitespace,
             * for example).
             * <p><b>Examples:</b><br>
             * The value of the returned {@code BigDecimal} is equal to
             * <i>significand</i> &times; 10<sup>&nbsp;<i>exponent</i></sup>.
             * For each string on the left, the resulting representation
             * [{@code BigInteger}, {@code scale}] is shown on the right.
             * <pre>
             * "0"            [0,0]
             * "0.00"         [0,2]
             * "123"          [123,0]
             * "-123"         [-123,0]
             * "1.23E3"       [123,-1]
             * "1.23E+3"      [123,-1]
             * "12.3E+7"      [123,-6]
             * "12.0"         [120,1]
             * "12.3"         [123,1]
             * "0.00123"      [123,5]
             * "-1.23E-12"    [-123,14]
             * "1234.5E-4"    [12345,5]
             * "0E+7"         [0,-7]
             * "-0"           [0,0]
             * </pre>
             * <p>Note: For values other than {@code float} and
             * {@code double} NaN and &plusmn;Infinity, this constructor is
             * compatible with the values returned by {@link Float#toString}
             * and {@link Double#toString}.  This is generally the preferred
             * way to convert a {@code float} or {@code double} into a
             * BigDecimal, as it doesn't suffer from the unpredictability of
             * the {@link #BigDecimal(double)} constructor.
             */
            // @ts-ignore
            constructor(val: string)
            /**
             * Translates the string representation of a {@code BigDecimal}
             * into a {@code BigDecimal}, accepting the same strings as the
             * {@link #BigDecimal(String)} constructor, with rounding
             * according to the context settings.
             */
            // @ts-ignore
            constructor(val: string, mc: java.math.MathContext)
            /**
             * Translates a {@code double} into a {@code BigDecimal} which
             * is the exact decimal representation of the {@code double}'s
             * binary floating-point value.  The scale of the returned
             * {@code BigDecimal} is the smallest value such that
             * <tt>(10<sup>scale</sup> &times; val)</tt> is an integer.
             * <p>
             * <b>Notes:</b>
             * <ol>
             * <li>
             * The results of this constructor can be somewhat unpredictable.
             * One might assume that writing {@code new BigDecimal(0.1)} in
             * Java creates a {@code BigDecimal} which is exactly equal to
             * 0.1 (an unscaled value of 1, with a scale of 1), but it is
             * actually equal to
             * 0.1000000000000000055511151231257827021181583404541015625.
             * This is because 0.1 cannot be represented exactly as a
             * {@code double} (or, for that matter, as a binary fraction of
             * any finite length).  Thus, the value that is being passed
             * <i>in</i> to the constructor is not exactly equal to 0.1,
             * appearances notwithstanding.
             * <li>
             * The {@code String} constructor, on the other hand, is
             * perfectly predictable: writing {@code new BigDecimal("0.1")}
             * creates a {@code BigDecimal} which is <i>exactly</i> equal to
             * 0.1, as one would expect.  Therefore, it is generally
             * recommended that the {@linkplain #BigDecimal(String)
             * <tt>String</tt> constructor} be used in preference to this one.
             * <li>
             * When a {@code double} must be used as a source for a
             * {@code BigDecimal}, note that this constructor provides an
             * exact conversion; it does not give the same result as
             * converting the {@code double} to a {@code String} using the
             * {@link Double#toString(double)} method and then using the
             * {@link #BigDecimal(String)} constructor.  To get that result,
             * use the {@code static} {@link #valueOf(double)} method.
             * </ol>
             */
            // @ts-ignore
            constructor(val: number)
            /**
             * Translates a {@code double} into a {@code BigDecimal}, with
             * rounding according to the context settings.  The scale of the
             * {@code BigDecimal} is the smallest value such that
             * <tt>(10<sup>scale</sup> &times; val)</tt> is an integer.
             * <p>The results of this constructor can be somewhat unpredictable
             * and its use is generally not recommended; see the notes under
             * the {@link #BigDecimal(double)} constructor.
             */
            // @ts-ignore
            constructor(val: number, mc: java.math.MathContext)
            /**
             * Translates a {@code BigInteger} into a {@code BigDecimal}.
             * The scale of the {@code BigDecimal} is zero.
             */
            // @ts-ignore
            constructor(val: java.math.BigInteger)
            /**
             * Translates a {@code BigInteger} into a {@code BigDecimal}
             * rounding according to the context settings.  The scale of the
             * {@code BigDecimal} is zero.
             */
            // @ts-ignore
            constructor(val: java.math.BigInteger, mc: java.math.MathContext)
            /**
             * Translates a {@code BigInteger} unscaled value and an
             * {@code int} scale into a {@code BigDecimal}.  The value of
             * the {@code BigDecimal} is
             * <tt>(unscaledVal &times; 10<sup>-scale</sup>)</tt>.
             */
            // @ts-ignore
            constructor(unscaledVal: java.math.BigInteger, scale: number)
            /**
             * Translates a {@code BigInteger} unscaled value and an
             * {@code int} scale into a {@code BigDecimal}, with rounding
             * according to the context settings.  The value of the
             * {@code BigDecimal} is <tt>(unscaledVal &times;
             * 10<sup>-scale</sup>)</tt>, rounded according to the
             * {@code precision} and rounding mode settings.
             */
            // @ts-ignore
            constructor(unscaledVal: java.math.BigInteger, scale: number, mc: java.math.MathContext)
            /**
             * Translates an {@code int} into a {@code BigDecimal}.  The
             * scale of the {@code BigDecimal} is zero.
             */
            // @ts-ignore
            constructor(val: number)
            /**
             * Translates an {@code int} into a {@code BigDecimal}, with
             * rounding according to the context settings.  The scale of the
             * {@code BigDecimal}, before any rounding, is zero.
             */
            // @ts-ignore
            constructor(val: number, mc: java.math.MathContext)
            /**
             * Translates a {@code long} into a {@code BigDecimal}.  The
             * scale of the {@code BigDecimal} is zero.
             */
            // @ts-ignore
            constructor(val: number)
            /**
             * Translates a {@code long} into a {@code BigDecimal}, with
             * rounding according to the context settings.  The scale of the
             * {@code BigDecimal}, before any rounding, is zero.
             */
            // @ts-ignore
            constructor(val: number, mc: java.math.MathContext)
            // @ts-ignore
            public static ZERO: java.math.BigDecimal;
            // @ts-ignore
            public static ONE: java.math.BigDecimal;
            // @ts-ignore
            public static TEN: java.math.BigDecimal;
            // @ts-ignore
            public static ROUND_UP: number;
            // @ts-ignore
            public static ROUND_DOWN: number;
            // @ts-ignore
            public static ROUND_CEILING: number;
            // @ts-ignore
            public static ROUND_FLOOR: number;
            // @ts-ignore
            public static ROUND_HALF_UP: number;
            // @ts-ignore
            public static ROUND_HALF_DOWN: number;
            // @ts-ignore
            public static ROUND_HALF_EVEN: number;
            // @ts-ignore
            public static ROUND_UNNECESSARY: number;
            /**
             * Translates a {@code long} unscaled value and an
             * {@code int} scale into a {@code BigDecimal}.  This
             * {@literal "static factory method"} is provided in preference to
             * a ({@code long}, {@code int}) constructor because it
             * allows for reuse of frequently used {@code BigDecimal} values..
             */
            // @ts-ignore
            public static valueOf(unscaledVal: number, scale: number): java.math.BigDecimal;
            /**
             * Translates a {@code long} value into a {@code BigDecimal}
             * with a scale of zero.  This {@literal "static factory method"}
             * is provided in preference to a ({@code long}) constructor
             * because it allows for reuse of frequently used
             * {@code BigDecimal} values.
             */
            // @ts-ignore
            public static valueOf(val: number): java.math.BigDecimal;
            /**
             * Translates a {@code double} into a {@code BigDecimal}, using
             * the {@code double}'s canonical string representation provided
             * by the {@link Double#toString(double)} method.
             * <p><b>Note:</b> This is generally the preferred way to convert
             * a {@code double} (or {@code float}) into a
             * {@code BigDecimal}, as the value returned is equal to that
             * resulting from constructing a {@code BigDecimal} from the
             * result of using {@link Double#toString(double)}.
             */
            // @ts-ignore
            public static valueOf(val: number): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this +
             * augend)}, and whose scale is {@code max(this.scale(),
             * augend.scale())}.
             */
            // @ts-ignore
            public add(augend: java.math.BigDecimal): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this + augend)},
             * with rounding according to the context settings.
             * If either number is zero and the precision setting is nonzero then
             * the other number, rounded if necessary, is used as the result.
             */
            // @ts-ignore
            public add(augend: java.math.BigDecimal, mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this -
             * subtrahend)}, and whose scale is {@code max(this.scale(),
             * subtrahend.scale())}.
             */
            // @ts-ignore
            public subtract(subtrahend: java.math.BigDecimal): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this - subtrahend)},
             * with rounding according to the context settings.
             * If {@code subtrahend} is zero then this, rounded if necessary, is used as the
             * result.  If this is zero then the result is {@code subtrahend.negate(mc)}.
             */
            // @ts-ignore
            public subtract(subtrahend: java.math.BigDecimal, mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is <tt>(this &times;
             * multiplicand)</tt>, and whose scale is {@code (this.scale() +
             * multiplicand.scale())}.
             */
            // @ts-ignore
            public multiply(multiplicand: java.math.BigDecimal): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is <tt>(this &times;
             * multiplicand)</tt>, with rounding according to the context settings.
             */
            // @ts-ignore
            public multiply(multiplicand: java.math.BigDecimal, mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this /
             * divisor)}, and whose scale is as specified.  If rounding must
             * be performed to generate a result with the specified scale, the
             * specified rounding mode is applied.
             * <p>The new {@link #divide(BigDecimal, int, RoundingMode)} method
             * should be used in preference to this legacy method.
             */
            // @ts-ignore
            public divide(divisor: java.math.BigDecimal, scale: number, roundingMode: number): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this /
             * divisor)}, and whose scale is as specified.  If rounding must
             * be performed to generate a result with the specified scale, the
             * specified rounding mode is applied.
             */
            // @ts-ignore
            public divide(divisor: java.math.BigDecimal, scale: number, roundingMode: java.math.RoundingMode): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this /
             * divisor)}, and whose scale is {@code this.scale()}.  If
             * rounding must be performed to generate a result with the given
             * scale, the specified rounding mode is applied.
             * <p>The new {@link #divide(BigDecimal, RoundingMode)} method
             * should be used in preference to this legacy method.
             */
            // @ts-ignore
            public divide(divisor: java.math.BigDecimal, roundingMode: number): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this /
             * divisor)}, and whose scale is {@code this.scale()}.  If
             * rounding must be performed to generate a result with the given
             * scale, the specified rounding mode is applied.
             */
            // @ts-ignore
            public divide(divisor: java.math.BigDecimal, roundingMode: java.math.RoundingMode): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this /
             * divisor)}, and whose preferred scale is {@code (this.scale() -
             * divisor.scale())}; if the exact quotient cannot be
             * represented (because it has a non-terminating decimal
             * expansion) an {@code ArithmeticException} is thrown.
             */
            // @ts-ignore
            public divide(divisor: java.math.BigDecimal): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this /
             * divisor)}, with rounding according to the context settings.
             */
            // @ts-ignore
            public divide(divisor: java.math.BigDecimal, mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is the integer part
             * of the quotient {@code (this / divisor)} rounded down.  The
             * preferred scale of the result is {@code (this.scale() -
             * divisor.scale())}.
             */
            // @ts-ignore
            public divideToIntegralValue(divisor: java.math.BigDecimal): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is the integer part
             * of {@code (this / divisor)}.  Since the integer part of the
             * exact quotient does not depend on the rounding mode, the
             * rounding mode does not affect the values returned by this
             * method.  The preferred scale of the result is
             * {@code (this.scale() - divisor.scale())}.  An
             * {@code ArithmeticException} is thrown if the integer part of
             * the exact quotient needs more than {@code mc.precision}
             * digits.
             */
            // @ts-ignore
            public divideToIntegralValue(divisor: java.math.BigDecimal, mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this % divisor)}.
             * <p>The remainder is given by
             * {@code this.subtract(this.divideToIntegralValue(divisor).multiply(divisor))}.
             * Note that this is not the modulo operation (the result can be
             * negative).
             */
            // @ts-ignore
            public remainder(divisor: java.math.BigDecimal): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (this %
             * divisor)}, with rounding according to the context settings.
             * The {@code MathContext} settings affect the implicit divide
             * used to compute the remainder.  The remainder computation
             * itself is by definition exact.  Therefore, the remainder may
             * contain more than {@code mc.getPrecision()} digits.
             * <p>The remainder is given by
             * {@code this.subtract(this.divideToIntegralValue(divisor,
             * mc).multiply(divisor))}.  Note that this is not the modulo
             * operation (the result can be negative).
             */
            // @ts-ignore
            public remainder(divisor: java.math.BigDecimal, mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a two-element {@code BigDecimal} array containing the
             * result of {@code divideToIntegralValue} followed by the result of
             * {@code remainder} on the two operands.
             * <p>Note that if both the integer quotient and remainder are
             * needed, this method is faster than using the
             * {@code divideToIntegralValue} and {@code remainder} methods
             * separately because the division need only be carried out once.
             */
            // @ts-ignore
            public divideAndRemainder(divisor: java.math.BigDecimal): java.math.BigDecimal[];
            /**
             * Returns a two-element {@code BigDecimal} array containing the
             * result of {@code divideToIntegralValue} followed by the result of
             * {@code remainder} on the two operands calculated with rounding
             * according to the context settings.
             * <p>Note that if both the integer quotient and remainder are
             * needed, this method is faster than using the
             * {@code divideToIntegralValue} and {@code remainder} methods
             * separately because the division need only be carried out once.
             */
            // @ts-ignore
            public divideAndRemainder(divisor: java.math.BigDecimal, mc: java.math.MathContext): java.math.BigDecimal[];
            /**
             * Returns a {@code BigDecimal} whose value is
             * <tt>(this<sup>n</sup>)</tt>, The power is computed exactly, to
             * unlimited precision.
             * <p>The parameter {@code n} must be in the range 0 through
             * 999999999, inclusive.  {@code ZERO.pow(0)} returns {@link
             * #ONE}.
             * Note that future releases may expand the allowable exponent
             * range of this method.
             */
            // @ts-ignore
            public pow(n: number): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is
             * <tt>(this<sup>n</sup>)</tt>.  The current implementation uses
             * the core algorithm defined in ANSI standard X3.274-1996 with
             * rounding according to the context settings.  In general, the
             * returned numerical value is within two ulps of the exact
             * numerical value for the chosen precision.  Note that future
             * releases may use a different algorithm with a decreased
             * allowable error bound and increased allowable exponent range.
             * <p>The X3.274-1996 algorithm is:
             * <ul>
             * <li> An {@code ArithmeticException} exception is thrown if
             * <ul>
             * <li>{@code abs(n) > 999999999}
             * <li>{@code mc.precision == 0} and {@code n < 0}
             * <li>{@code mc.precision > 0} and {@code n} has more than
             * {@code mc.precision} decimal digits
             * </ul>
             * <li> if {@code n} is zero, {@link #ONE} is returned even if
             * {@code this} is zero, otherwise
             * <ul>
             * <li> if {@code n} is positive, the result is calculated via
             * the repeated squaring technique into a single accumulator.
             * The individual multiplications with the accumulator use the
             * same math context settings as in {@code mc} except for a
             * precision increased to {@code mc.precision + elength + 1}
             * where {@code elength} is the number of decimal digits in
             * {@code n}.
             * <li> if {@code n} is negative, the result is calculated as if
             * {@code n} were positive; this value is then divided into one
             * using the working precision specified above.
             * <li> The final value from either the positive or negative case
             * is then rounded to the destination precision.
             * </ul>
             * </ul>
             */
            // @ts-ignore
            public pow(n: number, mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is the absolute value
             * of this {@code BigDecimal}, and whose scale is
             * {@code this.scale()}.
             */
            // @ts-ignore
            public abs(): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is the absolute value
             * of this {@code BigDecimal}, with rounding according to the
             * context settings.
             */
            // @ts-ignore
            public abs(mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (-this)},
             * and whose scale is {@code this.scale()}.
             */
            // @ts-ignore
            public negate(): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (-this)},
             * with rounding according to the context settings.
             */
            // @ts-ignore
            public negate(mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (+this)}, and whose
             * scale is {@code this.scale()}.
             * <p>This method, which simply returns this {@code BigDecimal}
             * is included for symmetry with the unary minus method {@link
             * #negate()}.
             */
            // @ts-ignore
            public plus(): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose value is {@code (+this)},
             * with rounding according to the context settings.
             * <p>The effect of this method is identical to that of the {@link
             * #round(MathContext)} method.
             */
            // @ts-ignore
            public plus(mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns the signum function of this {@code BigDecimal}.
             */
            // @ts-ignore
            public signum(): number;
            /**
             * Returns the <i>scale</i> of this {@code BigDecimal}.  If zero
             * or positive, the scale is the number of digits to the right of
             * the decimal point.  If negative, the unscaled value of the
             * number is multiplied by ten to the power of the negation of the
             * scale.  For example, a scale of {@code -3} means the unscaled
             * value is multiplied by 1000.
             */
            // @ts-ignore
            public scale(): number;
            /**
             * Returns the <i>precision</i> of this {@code BigDecimal}.  (The
             * precision is the number of digits in the unscaled value.)
             * <p>The precision of a zero value is 1.
             */
            // @ts-ignore
            public precision(): number;
            /**
             * Returns a {@code BigInteger} whose value is the <i>unscaled
             * value</i> of this {@code BigDecimal}.  (Computes <tt>(this *
             * 10<sup>this.scale()</sup>)</tt>.)
             */
            // @ts-ignore
            public unscaledValue(): java.math.BigInteger;
            /**
             * Returns a {@code BigDecimal} rounded according to the
             * {@code MathContext} settings.  If the precision setting is 0 then
             * no rounding takes place.
             * <p>The effect of this method is identical to that of the
             * {@link #plus(MathContext)} method.
             */
            // @ts-ignore
            public round(mc: java.math.MathContext): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose scale is the specified
             * value, and whose unscaled value is determined by multiplying or
             * dividing this {@code BigDecimal}'s unscaled value by the
             * appropriate power of ten to maintain its overall value.  If the
             * scale is reduced by the operation, the unscaled value must be
             * divided (rather than multiplied), and the value may be changed;
             * in this case, the specified rounding mode is applied to the
             * division.
             * <p>Note that since BigDecimal objects are immutable, calls of
             * this method do <i>not</i> result in the original object being
             * modified, contrary to the usual convention of having methods
             * named <tt>set<i>X</i></tt> mutate field <i>{@code X}</i>.
             * Instead, {@code setScale} returns an object with the proper
             * scale; the returned object may or may not be newly allocated.
             */
            // @ts-ignore
            public setScale(newScale: number, roundingMode: java.math.RoundingMode): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose scale is the specified
             * value, and whose unscaled value is determined by multiplying or
             * dividing this {@code BigDecimal}'s unscaled value by the
             * appropriate power of ten to maintain its overall value.  If the
             * scale is reduced by the operation, the unscaled value must be
             * divided (rather than multiplied), and the value may be changed;
             * in this case, the specified rounding mode is applied to the
             * division.
             * <p>Note that since BigDecimal objects are immutable, calls of
             * this method do <i>not</i> result in the original object being
             * modified, contrary to the usual convention of having methods
             * named <tt>set<i>X</i></tt> mutate field <i>{@code X}</i>.
             * Instead, {@code setScale} returns an object with the proper
             * scale; the returned object may or may not be newly allocated.
             * <p>The new {@link #setScale(int, RoundingMode)} method should
             * be used in preference to this legacy method.
             */
            // @ts-ignore
            public setScale(newScale: number, roundingMode: number): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} whose scale is the specified
             * value, and whose value is numerically equal to this
             * {@code BigDecimal}'s.  Throws an {@code ArithmeticException}
             * if this is not possible.
             * <p>This call is typically used to increase the scale, in which
             * case it is guaranteed that there exists a {@code BigDecimal}
             * of the specified scale and the correct value.  The call can
             * also be used to reduce the scale if the caller knows that the
             * {@code BigDecimal} has sufficiently many zeros at the end of
             * its fractional part (i.e., factors of ten in its integer value)
             * to allow for the rescaling without changing its value.
             * <p>This method returns the same result as the two-argument
             * versions of {@code setScale}, but saves the caller the trouble
             * of specifying a rounding mode in cases where it is irrelevant.
             * <p>Note that since {@code BigDecimal} objects are immutable,
             * calls of this method do <i>not</i> result in the original
             * object being modified, contrary to the usual convention of
             * having methods named <tt>set<i>X</i></tt> mutate field
             * <i>{@code X}</i>.  Instead, {@code setScale} returns an
             * object with the proper scale; the returned object may or may
             * not be newly allocated.
             */
            // @ts-ignore
            public setScale(newScale: number): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} which is equivalent to this one
             * with the decimal point moved {@code n} places to the left.  If
             * {@code n} is non-negative, the call merely adds {@code n} to
             * the scale.  If {@code n} is negative, the call is equivalent
             * to {@code movePointRight(-n)}.  The {@code BigDecimal}
             * returned by this call has value <tt>(this &times;
             * 10<sup>-n</sup>)</tt> and scale {@code max(this.scale()+n,
             * 0)}.
             */
            // @ts-ignore
            public movePointLeft(n: number): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} which is equivalent to this one
             * with the decimal point moved {@code n} places to the right.
             * If {@code n} is non-negative, the call merely subtracts
             * {@code n} from the scale.  If {@code n} is negative, the call
             * is equivalent to {@code movePointLeft(-n)}.  The
             * {@code BigDecimal} returned by this call has value <tt>(this
             * &times; 10<sup>n</sup>)</tt> and scale {@code max(this.scale()-n,
             * 0)}.
             */
            // @ts-ignore
            public movePointRight(n: number): java.math.BigDecimal;
            /**
             * Returns a BigDecimal whose numerical value is equal to
             * ({@code this} * 10<sup>n</sup>).  The scale of
             * the result is {@code (this.scale() - n)}.
             */
            // @ts-ignore
            public scaleByPowerOfTen(n: number): java.math.BigDecimal;
            /**
             * Returns a {@code BigDecimal} which is numerically equal to
             * this one but with any trailing zeros removed from the
             * representation.  For example, stripping the trailing zeros from
             * the {@code BigDecimal} value {@code 600.0}, which has
             * [{@code BigInteger}, {@code scale}] components equals to
             * [6000, 1], yields {@code 6E2} with [{@code BigInteger},
             * {@code scale}] components equals to [6, -2].  If
             * this BigDecimal is numerically equal to zero, then
             * {@code BigDecimal.ZERO} is returned.
             */
            // @ts-ignore
            public stripTrailingZeros(): java.math.BigDecimal;
            /**
             * Compares this {@code BigDecimal} with the specified
             * {@code BigDecimal}.  Two {@code BigDecimal} objects that are
             * equal in value but have a different scale (like 2.0 and 2.00)
             * are considered equal by this method.  This method is provided
             * in preference to individual methods for each of the six boolean
             * comparison operators ({@literal <}, ==,
             * {@literal >}, {@literal >=}, !=, {@literal <=}).  The
             * suggested idiom for performing these comparisons is:
             * {@code (x.compareTo(y)} &lt;<i>op</i>&gt; {@code 0)}, where
             * &lt;<i>op</i>&gt; is one of the six comparison operators.
             */
            // @ts-ignore
            public compareTo(val: java.math.BigDecimal): number;
            /**
             * Compares this {@code BigDecimal} with the specified
             * {@code Object} for equality.  Unlike {@link
             * #compareTo(BigDecimal) compareTo}, this method considers two
             * {@code BigDecimal} objects equal only if they are equal in
             * value and scale (thus 2.0 is not equal to 2.00 when compared by
             * this method).
             */
            // @ts-ignore
            public equals(x: java.lang.Object): boolean;
            /**
             * Returns the minimum of this {@code BigDecimal} and
             * {@code val}.
             */
            // @ts-ignore
            public min(val: java.math.BigDecimal): java.math.BigDecimal;
            /**
             * Returns the maximum of this {@code BigDecimal} and {@code val}.
             */
            // @ts-ignore
            public max(val: java.math.BigDecimal): java.math.BigDecimal;
            /**
             * Returns the hash code for this {@code BigDecimal}.  Note that
             * two {@code BigDecimal} objects that are numerically equal but
             * differ in scale (like 2.0 and 2.00) will generally <i>not</i>
             * have the same hash code.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the string representation of this {@code BigDecimal},
             * using scientific notation if an exponent is needed.
             * <p>A standard canonical string form of the {@code BigDecimal}
             * is created as though by the following steps: first, the
             * absolute value of the unscaled value of the {@code BigDecimal}
             * is converted to a string in base ten using the characters
             * {@code '0'} through {@code '9'} with no leading zeros (except
             * if its value is zero, in which case a single {@code '0'}
             * character is used).
             * <p>Next, an <i>adjusted exponent</i> is calculated; this is the
             * negated scale, plus the number of characters in the converted
             * unscaled value, less one.  That is,
             * {@code -scale+(ulength-1)}, where {@code ulength} is the
             * length of the absolute value of the unscaled value in decimal
             * digits (its <i>precision</i>).
             * <p>If the scale is greater than or equal to zero and the
             * adjusted exponent is greater than or equal to {@code -6}, the
             * number will be converted to a character form without using
             * exponential notation.  In this case, if the scale is zero then
             * no decimal point is added and if the scale is positive a
             * decimal point will be inserted with the scale specifying the
             * number of characters to the right of the decimal point.
             * {@code '0'} characters are added to the left of the converted
             * unscaled value as necessary.  If no character precedes the
             * decimal point after this insertion then a conventional
             * {@code '0'} character is prefixed.
             * <p>Otherwise (that is, if the scale is negative, or the
             * adjusted exponent is less than {@code -6}), the number will be
             * converted to a character form using exponential notation.  In
             * this case, if the converted {@code BigInteger} has more than
             * one digit a decimal point is inserted after the first digit.
             * An exponent in character form is then suffixed to the converted
             * unscaled value (perhaps with inserted decimal point); this
             * comprises the letter {@code 'E'} followed immediately by the
             * adjusted exponent converted to a character form.  The latter is
             * in base ten, using the characters {@code '0'} through
             * {@code '9'} with no leading zeros, and is always prefixed by a
             * sign character {@code '-'} (<tt>'&#92;u002D'</tt>) if the
             * adjusted exponent is negative, {@code '+'}
             * (<tt>'&#92;u002B'</tt>) otherwise).
             * <p>Finally, the entire string is prefixed by a minus sign
             * character {@code '-'} (<tt>'&#92;u002D'</tt>) if the unscaled
             * value is less than zero.  No sign character is prefixed if the
             * unscaled value is zero or positive.
             * <p><b>Examples:</b>
             * <p>For each representation [<i>unscaled value</i>, <i>scale</i>]
             * on the left, the resulting string is shown on the right.
             * <pre>
             * [123,0]      "123"
             * [-123,0]     "-123"
             * [123,-1]     "1.23E+3"
             * [123,-3]     "1.23E+5"
             * [123,1]      "12.3"
             * [123,5]      "0.00123"
             * [123,10]     "1.23E-8"
             * [-123,12]    "-1.23E-10"
             * </pre>
             * <b>Notes:</b>
             * <ol>
             * <li>There is a one-to-one mapping between the distinguishable
             * {@code BigDecimal} values and the result of this conversion.
             * That is, every distinguishable {@code BigDecimal} value
             * (unscaled value and scale) has a unique string representation
             * as a result of using {@code toString}.  If that string
             * representation is converted back to a {@code BigDecimal} using
             * the {@link #BigDecimal(String)} constructor, then the original
             * value will be recovered.
             * <li>The string produced for a given number is always the same;
             * it is not affected by locale.  This means that it can be used
             * as a canonical string representation for exchanging decimal
             * data, or as a key for a Hashtable, etc.  Locale-sensitive
             * number formatting and parsing is handled by the {@link
             * java.text.NumberFormat} class and its subclasses.
             * <li>The {@link #toEngineeringString} method may be used for
             * presenting numbers with exponents in engineering notation, and the
             * {@link #setScale(int,RoundingMode) setScale} method may be used for
             * rounding a {@code BigDecimal} so it has a known number of digits after
             * the decimal point.
             * <li>The digit-to-character mapping provided by
             * {@code Character.forDigit} is used.
             * </ol>
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a string representation of this {@code BigDecimal},
             * using engineering notation if an exponent is needed.
             * <p>Returns a string that represents the {@code BigDecimal} as
             * described in the {@link #toString()} method, except that if
             * exponential notation is used, the power of ten is adjusted to
             * be a multiple of three (engineering notation) such that the
             * integer part of nonzero values will be in the range 1 through
             * 999.  If exponential notation is used for zero values, a
             * decimal point and one or two fractional zero digits are used so
             * that the scale of the zero value is preserved.  Note that
             * unlike the output of {@link #toString()}, the output of this
             * method is <em>not</em> guaranteed to recover the same [integer,
             * scale] pair of this {@code BigDecimal} if the output string is
             * converting back to a {@code BigDecimal} using the {@linkplain
             * #BigDecimal(String) string constructor}.  The result of this method meets
             * the weaker constraint of always producing a numerically equal
             * result from applying the string constructor to the method's output.
             */
            // @ts-ignore
            public toEngineeringString(): string;
            /**
             * Returns a string representation of this {@code BigDecimal}
             * without an exponent field.  For values with a positive scale,
             * the number of digits to the right of the decimal point is used
             * to indicate scale.  For values with a zero or negative scale,
             * the resulting string is generated as if the value were
             * converted to a numerically equal value with zero scale and as
             * if all the trailing zeros of the zero scale value were present
             * in the result.
             * The entire string is prefixed by a minus sign character '-'
             * (<tt>'&#92;u002D'</tt>) if the unscaled value is less than
             * zero. No sign character is prefixed if the unscaled value is
             * zero or positive.
             * Note that if the result of this method is passed to the
             * {@linkplain #BigDecimal(String) string constructor}, only the
             * numerical value of this {@code BigDecimal} will necessarily be
             * recovered; the representation of the new {@code BigDecimal}
             * may have a different scale.  In particular, if this
             * {@code BigDecimal} has a negative scale, the string resulting
             * from this method will have a scale of zero when processed by
             * the string constructor.
             * (This method behaves analogously to the {@code toString}
             * method in 1.4 and earlier releases.)
             */
            // @ts-ignore
            public toPlainString(): string;
            /**
             * Converts this {@code BigDecimal} to a {@code BigInteger}.
             * This conversion is analogous to the
             * <i>narrowing primitive conversion</i> from {@code double} to
             * {@code long} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * any fractional part of this
             * {@code BigDecimal} will be discarded.  Note that this
             * conversion can lose information about the precision of the
             * {@code BigDecimal} value.
             * <p>
             * To have an exception thrown if the conversion is inexact (in
             * other words if a nonzero fractional part is discarded), use the
             * {@link #toBigIntegerExact()} method.
             */
            // @ts-ignore
            public toBigInteger(): java.math.BigInteger;
            /**
             * Converts this {@code BigDecimal} to a {@code BigInteger},
             * checking for lost information.  An exception is thrown if this
             * {@code BigDecimal} has a nonzero fractional part.
             */
            // @ts-ignore
            public toBigIntegerExact(): java.math.BigInteger;
            /**
             * Converts this {@code BigDecimal} to a {@code long}.
             * This conversion is analogous to the
             * <i>narrowing primitive conversion</i> from {@code double} to
             * {@code short} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * any fractional part of this
             * {@code BigDecimal} will be discarded, and if the resulting
             * "{@code BigInteger}" is too big to fit in a
             * {@code long}, only the low-order 64 bits are returned.
             * Note that this conversion can lose information about the
             * overall magnitude and precision of this {@code BigDecimal} value as well
             * as return a result with the opposite sign.
             */
            // @ts-ignore
            public longValue(): number;
            /**
             * Converts this {@code BigDecimal} to a {@code long}, checking
             * for lost information.  If this {@code BigDecimal} has a
             * nonzero fractional part or is out of the possible range for a
             * {@code long} result then an {@code ArithmeticException} is
             * thrown.
             */
            // @ts-ignore
            public longValueExact(): number;
            /**
             * Converts this {@code BigDecimal} to an {@code int}.
             * This conversion is analogous to the
             * <i>narrowing primitive conversion</i> from {@code double} to
             * {@code short} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * any fractional part of this
             * {@code BigDecimal} will be discarded, and if the resulting
             * "{@code BigInteger}" is too big to fit in an
             * {@code int}, only the low-order 32 bits are returned.
             * Note that this conversion can lose information about the
             * overall magnitude and precision of this {@code BigDecimal}
             * value as well as return a result with the opposite sign.
             */
            // @ts-ignore
            public intValue(): number;
            /**
             * Converts this {@code BigDecimal} to an {@code int}, checking
             * for lost information.  If this {@code BigDecimal} has a
             * nonzero fractional part or is out of the possible range for an
             * {@code int} result then an {@code ArithmeticException} is
             * thrown.
             */
            // @ts-ignore
            public intValueExact(): number;
            /**
             * Converts this {@code BigDecimal} to a {@code short}, checking
             * for lost information.  If this {@code BigDecimal} has a
             * nonzero fractional part or is out of the possible range for a
             * {@code short} result then an {@code ArithmeticException} is
             * thrown.
             */
            // @ts-ignore
            public shortValueExact(): number;
            /**
             * Converts this {@code BigDecimal} to a {@code byte}, checking
             * for lost information.  If this {@code BigDecimal} has a
             * nonzero fractional part or is out of the possible range for a
             * {@code byte} result then an {@code ArithmeticException} is
             * thrown.
             */
            // @ts-ignore
            public byteValueExact(): number;
            /**
             * Converts this {@code BigDecimal} to a {@code float}.
             * This conversion is similar to the
             * <i>narrowing primitive conversion</i> from {@code double} to
             * {@code float} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * if this {@code BigDecimal} has too great a
             * magnitude to represent as a {@code float}, it will be
             * converted to {@link Float#NEGATIVE_INFINITY} or {@link
             * Float#POSITIVE_INFINITY} as appropriate.  Note that even when
             * the return value is finite, this conversion can lose
             * information about the precision of the {@code BigDecimal}
             * value.
             */
            // @ts-ignore
            public floatValue(): number;
            /**
             * Converts this {@code BigDecimal} to a {@code double}.
             * This conversion is similar to the
             * <i>narrowing primitive conversion</i> from {@code double} to
             * {@code float} as defined in section 5.1.3 of
             * <cite>The Java&trade; Language Specification</cite>:
             * if this {@code BigDecimal} has too great a
             * magnitude represent as a {@code double}, it will be
             * converted to {@link Double#NEGATIVE_INFINITY} or {@link
             * Double#POSITIVE_INFINITY} as appropriate.  Note that even when
             * the return value is finite, this conversion can lose
             * information about the precision of the {@code BigDecimal}
             * value.
             */
            // @ts-ignore
            public doubleValue(): number;
            /**
             * Returns the size of an ulp, a unit in the last place, of this
             * {@code BigDecimal}.  An ulp of a nonzero {@code BigDecimal}
             * value is the positive distance between this value and the
             * {@code BigDecimal} value next larger in magnitude with the
             * same number of digits.  An ulp of a zero value is numerically
             * equal to 1 with the scale of {@code this}.  The result is
             * stored with the same scale as {@code this} so the result
             * for zero and nonzero values is equal to {@code [1,
             * this.scale()]}.
             */
            // @ts-ignore
            public ulp(): java.math.BigDecimal;
        }
    }
}
