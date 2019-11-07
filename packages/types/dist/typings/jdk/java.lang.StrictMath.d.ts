declare namespace java {
    namespace lang {
        // @ts-ignore
         class StrictMath extends java.lang.Object {
            // @ts-ignore
            public static E: number;
            // @ts-ignore
            public static PI: number;
            /**
             * Returns the trigonometric sine of an angle. Special cases:
             * <ul><li>If the argument is NaN or an infinity, then the
             * result is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.</ul>
             */
            // @ts-ignore
            public static sin(a: number): number;
            /**
             * Returns the trigonometric cosine of an angle. Special cases:
             * <ul><li>If the argument is NaN or an infinity, then the
             * result is NaN.</ul>
             */
            // @ts-ignore
            public static cos(a: number): number;
            /**
             * Returns the trigonometric tangent of an angle. Special cases:
             * <ul><li>If the argument is NaN or an infinity, then the result
             * is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.</ul>
             */
            // @ts-ignore
            public static tan(a: number): number;
            /**
             * Returns the arc sine of a value; the returned angle is in the
             * range -<i>pi</i>/2 through <i>pi</i>/2.  Special cases:
             * <ul><li>If the argument is NaN or its absolute value is greater
             * than 1, then the result is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.</ul>
             */
            // @ts-ignore
            public static asin(a: number): number;
            /**
             * Returns the arc cosine of a value; the returned angle is in the
             * range 0.0 through <i>pi</i>.  Special case:
             * <ul><li>If the argument is NaN or its absolute value is greater
             * than 1, then the result is NaN.</ul>
             */
            // @ts-ignore
            public static acos(a: number): number;
            /**
             * Returns the arc tangent of a value; the returned angle is in the
             * range -<i>pi</i>/2 through <i>pi</i>/2.  Special cases:
             * <ul><li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.</ul>
             */
            // @ts-ignore
            public static atan(a: number): number;
            /**
             * Converts an angle measured in degrees to an approximately
             * equivalent angle measured in radians.  The conversion from
             * degrees to radians is generally inexact.
             */
            // @ts-ignore
            public static toRadians(angdeg: number): number;
            /**
             * Converts an angle measured in radians to an approximately
             * equivalent angle measured in degrees.  The conversion from
             * radians to degrees is generally inexact; users should
             * <i>not</i> expect {@code cos(toRadians(90.0))} to exactly
             * equal {@code 0.0}.
             */
            // @ts-ignore
            public static toDegrees(angrad: number): number;
            /**
             * Returns Euler's number <i>e</i> raised to the power of a
             * {@code double} value. Special cases:
             * <ul><li>If the argument is NaN, the result is NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is negative infinity, then the result is
             * positive zero.</ul>
             */
            // @ts-ignore
            public static exp(a: number): number;
            /**
             * Returns the natural logarithm (base <i>e</i>) of a {@code double}
             * value. Special cases:
             * <ul><li>If the argument is NaN or less than zero, then the result
             * is NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is positive zero or negative zero, then the
             * result is negative infinity.</ul>
             */
            // @ts-ignore
            public static log(a: number): number;
            /**
             * Returns the base 10 logarithm of a {@code double} value.
             * Special cases:
             * <ul><li>If the argument is NaN or less than zero, then the result
             * is NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is positive zero or negative zero, then the
             * result is negative infinity.
             * <li> If the argument is equal to 10<sup><i>n</i></sup> for
             * integer <i>n</i>, then the result is <i>n</i>.
             * </ul>
             */
            // @ts-ignore
            public static log10(a: number): number;
            /**
             * Returns the correctly rounded positive square root of a
             * {@code double} value.
             * Special cases:
             * <ul><li>If the argument is NaN or less than zero, then the result
             * is NaN.
             * <li>If the argument is positive infinity, then the result is positive
             * infinity.
             * <li>If the argument is positive zero or negative zero, then the
             * result is the same as the argument.</ul>
             * Otherwise, the result is the {@code double} value closest to
             * the true mathematical square root of the argument value.
             */
            // @ts-ignore
            public static sqrt(a: number): number;
            /**
             * Returns the cube root of a {@code double} value.  For
             * positive finite {@code x}, {@code cbrt(-x) ==
             * -cbrt(x)}; that is, the cube root of a negative value is
             * the negative of the cube root of that value's magnitude.
             * Special cases:
             * <ul>
             * <li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is infinite, then the result is an infinity
             * with the same sign as the argument.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * </ul>
             */
            // @ts-ignore
            public static cbrt(a: number): number;
            /**
             * Computes the remainder operation on two arguments as prescribed
             * by the IEEE 754 standard.
             * The remainder value is mathematically equal to
             * <code>f1&nbsp;-&nbsp;f2</code>&nbsp;&times;&nbsp;<i>n</i>,
             * where <i>n</i> is the mathematical integer closest to the exact
             * mathematical value of the quotient {@code f1/f2}, and if two
             * mathematical integers are equally close to {@code f1/f2},
             * then <i>n</i> is the integer that is even. If the remainder is
             * zero, its sign is the same as the sign of the first argument.
             * Special cases:
             * <ul><li>If either argument is NaN, or the first argument is infinite,
             * or the second argument is positive zero or negative zero, then the
             * result is NaN.
             * <li>If the first argument is finite and the second argument is
             * infinite, then the result is the same as the first argument.</ul>
             */
            // @ts-ignore
            public static IEEEremainder(f1: number, f2: number): number;
            /**
             * Returns the smallest (closest to negative infinity)
             * {@code double} value that is greater than or equal to the
             * argument and is equal to a mathematical integer. Special cases:
             * <ul><li>If the argument value is already equal to a
             * mathematical integer, then the result is the same as the
             * argument.  <li>If the argument is NaN or an infinity or
             * positive zero or negative zero, then the result is the same as
             * the argument.  <li>If the argument value is less than zero but
             * greater than -1.0, then the result is negative zero.</ul> Note
             * that the value of {@code StrictMath.ceil(x)} is exactly the
             * value of {@code -StrictMath.floor(-x)}.
             */
            // @ts-ignore
            public static ceil(a: number): number;
            /**
             * Returns the largest (closest to positive infinity)
             * {@code double} value that is less than or equal to the
             * argument and is equal to a mathematical integer. Special cases:
             * <ul><li>If the argument value is already equal to a
             * mathematical integer, then the result is the same as the
             * argument.  <li>If the argument is NaN or an infinity or
             * positive zero or negative zero, then the result is the same as
             * the argument.</ul>
             */
            // @ts-ignore
            public static floor(a: number): number;
            /**
             * Returns the {@code double} value that is closest in value
             * to the argument and is equal to a mathematical integer. If two
             * {@code double} values that are mathematical integers are
             * equally close to the value of the argument, the result is the
             * integer value that is even. Special cases:
             * <ul><li>If the argument value is already equal to a mathematical
             * integer, then the result is the same as the argument.
             * <li>If the argument is NaN or an infinity or positive zero or negative
             * zero, then the result is the same as the argument.</ul>
             */
            // @ts-ignore
            public static rint(a: number): number;
            /**
             * Returns the angle <i>theta</i> from the conversion of rectangular
             * coordinates ({@code x},&nbsp;{@code y}) to polar
             * coordinates (r,&nbsp;<i>theta</i>).
             * This method computes the phase <i>theta</i> by computing an arc tangent
             * of {@code y/x} in the range of -<i>pi</i> to <i>pi</i>. Special
             * cases:
             * <ul><li>If either argument is NaN, then the result is NaN.
             * <li>If the first argument is positive zero and the second argument
             * is positive, or the first argument is positive and finite and the
             * second argument is positive infinity, then the result is positive
             * zero.
             * <li>If the first argument is negative zero and the second argument
             * is positive, or the first argument is negative and finite and the
             * second argument is positive infinity, then the result is negative zero.
             * <li>If the first argument is positive zero and the second argument
             * is negative, or the first argument is positive and finite and the
             * second argument is negative infinity, then the result is the
             * {@code double} value closest to <i>pi</i>.
             * <li>If the first argument is negative zero and the second argument
             * is negative, or the first argument is negative and finite and the
             * second argument is negative infinity, then the result is the
             * {@code double} value closest to -<i>pi</i>.
             * <li>If the first argument is positive and the second argument is
             * positive zero or negative zero, or the first argument is positive
             * infinity and the second argument is finite, then the result is the
             * {@code double} value closest to <i>pi</i>/2.
             * <li>If the first argument is negative and the second argument is
             * positive zero or negative zero, or the first argument is negative
             * infinity and the second argument is finite, then the result is the
             * {@code double} value closest to -<i>pi</i>/2.
             * <li>If both arguments are positive infinity, then the result is the
             * {@code double} value closest to <i>pi</i>/4.
             * <li>If the first argument is positive infinity and the second argument
             * is negative infinity, then the result is the {@code double}
             * value closest to 3*<i>pi</i>/4.
             * <li>If the first argument is negative infinity and the second argument
             * is positive infinity, then the result is the {@code double} value
             * closest to -<i>pi</i>/4.
             * <li>If both arguments are negative infinity, then the result is the
             * {@code double} value closest to -3*<i>pi</i>/4.</ul>
             */
            // @ts-ignore
            public static atan2(y: number, x: number): number;
            /**
             * Returns the value of the first argument raised to the power of the
             * second argument. Special cases:
             * <ul><li>If the second argument is positive or negative zero, then the
             * result is 1.0.
             * <li>If the second argument is 1.0, then the result is the same as the
             * first argument.
             * <li>If the second argument is NaN, then the result is NaN.
             * <li>If the first argument is NaN and the second argument is nonzero,
             * then the result is NaN.
             * <li>If
             * <ul>
             * <li>the absolute value of the first argument is greater than 1
             * and the second argument is positive infinity, or
             * <li>the absolute value of the first argument is less than 1 and
             * the second argument is negative infinity,
             * </ul>
             * then the result is positive infinity.
             * <li>If
             * <ul>
             * <li>the absolute value of the first argument is greater than 1 and
             * the second argument is negative infinity, or
             * <li>the absolute value of the
             * first argument is less than 1 and the second argument is positive
             * infinity,
             * </ul>
             * then the result is positive zero.
             * <li>If the absolute value of the first argument equals 1 and the
             * second argument is infinite, then the result is NaN.
             * <li>If
             * <ul>
             * <li>the first argument is positive zero and the second argument
             * is greater than zero, or
             * <li>the first argument is positive infinity and the second
             * argument is less than zero,
             * </ul>
             * then the result is positive zero.
             * <li>If
             * <ul>
             * <li>the first argument is positive zero and the second argument
             * is less than zero, or
             * <li>the first argument is positive infinity and the second
             * argument is greater than zero,
             * </ul>
             * then the result is positive infinity.
             * <li>If
             * <ul>
             * <li>the first argument is negative zero and the second argument
             * is greater than zero but not a finite odd integer, or
             * <li>the first argument is negative infinity and the second
             * argument is less than zero but not a finite odd integer,
             * </ul>
             * then the result is positive zero.
             * <li>If
             * <ul>
             * <li>the first argument is negative zero and the second argument
             * is a positive finite odd integer, or
             * <li>the first argument is negative infinity and the second
             * argument is a negative finite odd integer,
             * </ul>
             * then the result is negative zero.
             * <li>If
             * <ul>
             * <li>the first argument is negative zero and the second argument
             * is less than zero but not a finite odd integer, or
             * <li>the first argument is negative infinity and the second
             * argument is greater than zero but not a finite odd integer,
             * </ul>
             * then the result is positive infinity.
             * <li>If
             * <ul>
             * <li>the first argument is negative zero and the second argument
             * is a negative finite odd integer, or
             * <li>the first argument is negative infinity and the second
             * argument is a positive finite odd integer,
             * </ul>
             * then the result is negative infinity.
             * <li>If the first argument is finite and less than zero
             * <ul>
             * <li> if the second argument is a finite even integer, the
             * result is equal to the result of raising the absolute value of
             * the first argument to the power of the second argument
             * <li>if the second argument is a finite odd integer, the result
             * is equal to the negative of the result of raising the absolute
             * value of the first argument to the power of the second
             * argument
             * <li>if the second argument is finite and not an integer, then
             * the result is NaN.
             * </ul>
             * <li>If both arguments are integers, then the result is exactly equal
             * to the mathematical result of raising the first argument to the power
             * of the second argument if that result can in fact be represented
             * exactly as a {@code double} value.</ul>
             * <p>(In the foregoing descriptions, a floating-point value is
             * considered to be an integer if and only if it is finite and a
             * fixed point of the method {@link #ceil ceil} or,
             * equivalently, a fixed point of the method {@link #floor
             * floor}. A value is a fixed point of a one-argument
             * method if and only if the result of applying the method to the
             * value is equal to the value.)
             */
            // @ts-ignore
            public static pow(a: number, b: number): number;
            /**
             * Returns the closest {@code int} to the argument, with ties
             * rounding to positive infinity.
             * <p>Special cases:
             * <ul><li>If the argument is NaN, the result is 0.
             * <li>If the argument is negative infinity or any value less than or
             * equal to the value of {@code Integer.MIN_VALUE}, the result is
             * equal to the value of {@code Integer.MIN_VALUE}.
             * <li>If the argument is positive infinity or any value greater than or
             * equal to the value of {@code Integer.MAX_VALUE}, the result is
             * equal to the value of {@code Integer.MAX_VALUE}.</ul>
             */
            // @ts-ignore
            public static round(a: number): number;
            /**
             * Returns the closest {@code long} to the argument, with ties
             * rounding to positive infinity.
             * <p>Special cases:
             * <ul><li>If the argument is NaN, the result is 0.
             * <li>If the argument is negative infinity or any value less than or
             * equal to the value of {@code Long.MIN_VALUE}, the result is
             * equal to the value of {@code Long.MIN_VALUE}.
             * <li>If the argument is positive infinity or any value greater than or
             * equal to the value of {@code Long.MAX_VALUE}, the result is
             * equal to the value of {@code Long.MAX_VALUE}.</ul>
             */
            // @ts-ignore
            public static round(a: number): number;
            /**
             * Returns a {@code double} value with a positive sign, greater
             * than or equal to {@code 0.0} and less than {@code 1.0}.
             * Returned values are chosen pseudorandomly with (approximately)
             * uniform distribution from that range.
             * <p>When this method is first called, it creates a single new
             * pseudorandom-number generator, exactly as if by the expression
             * <blockquote>{@code new java.util.Random()}</blockquote>
             * This new pseudorandom-number generator is used thereafter for
             * all calls to this method and is used nowhere else.
             * <p>This method is properly synchronized to allow correct use by
             * more than one thread. However, if many threads need to generate
             * pseudorandom numbers at a great rate, it may reduce contention
             * for each thread to have its own pseudorandom-number generator.
             */
            // @ts-ignore
            public static random(): number;
            /**
             * Returns the sum of its arguments,
             * throwing an exception if the result overflows an {@code int}.
             */
            // @ts-ignore
            public static addExact(x: number, y: number): number;
            /**
             * Returns the sum of its arguments,
             * throwing an exception if the result overflows a {@code long}.
             */
            // @ts-ignore
            public static addExact(x: number, y: number): number;
            /**
             * Returns the difference of the arguments,
             * throwing an exception if the result overflows an {@code int}.
             */
            // @ts-ignore
            public static subtractExact(x: number, y: number): number;
            /**
             * Returns the difference of the arguments,
             * throwing an exception if the result overflows a {@code long}.
             */
            // @ts-ignore
            public static subtractExact(x: number, y: number): number;
            /**
             * Returns the product of the arguments,
             * throwing an exception if the result overflows an {@code int}.
             */
            // @ts-ignore
            public static multiplyExact(x: number, y: number): number;
            /**
             * Returns the product of the arguments,
             * throwing an exception if the result overflows a {@code long}.
             */
            // @ts-ignore
            public static multiplyExact(x: number, y: number): number;
            /**
             * Returns the value of the {@code long} argument;
             * throwing an exception if the value overflows an {@code int}.
             */
            // @ts-ignore
            public static toIntExact(value: number): number;
            /**
             * Returns the largest (closest to positive infinity)
             * {@code int} value that is less than or equal to the algebraic quotient.
             * There is one special case, if the dividend is the
             * {@linkplain Integer#MIN_VALUE Integer.MIN_VALUE} and the divisor is {@code -1},
             * then integer overflow occurs and
             * the result is equal to the {@code Integer.MIN_VALUE}.
             * <p>
             * See {@link Math#floorDiv(int, int) Math.floorDiv} for examples and
             * a comparison to the integer division {@code /} operator.
             */
            // @ts-ignore
            public static floorDiv(x: number, y: number): number;
            /**
             * Returns the largest (closest to positive infinity)
             * {@code long} value that is less than or equal to the algebraic quotient.
             * There is one special case, if the dividend is the
             * {@linkplain Long#MIN_VALUE Long.MIN_VALUE} and the divisor is {@code -1},
             * then integer overflow occurs and
             * the result is equal to the {@code Long.MIN_VALUE}.
             * <p>
             * See {@link Math#floorDiv(int, int) Math.floorDiv} for examples and
             * a comparison to the integer division {@code /} operator.
             */
            // @ts-ignore
            public static floorDiv(x: number, y: number): number;
            /**
             * Returns the floor modulus of the {@code int} arguments.
             * <p>
             * The floor modulus is {@code x - (floorDiv(x, y) * y)},
             * has the same sign as the divisor {@code y}, and
             * is in the range of {@code -abs(y) < r < +abs(y)}.
             * <p>
             * The relationship between {@code floorDiv} and {@code floorMod} is such that:
             * <ul>
             * <li>{@code floorDiv(x, y) * y + floorMod(x, y) == x}
             * </ul>
             * <p>
             * See {@link Math#floorMod(int, int) Math.floorMod} for examples and
             * a comparison to the {@code %} operator.
             */
            // @ts-ignore
            public static floorMod(x: number, y: number): number;
            /**
             * Returns the floor modulus of the {@code long} arguments.
             * <p>
             * The floor modulus is {@code x - (floorDiv(x, y) * y)},
             * has the same sign as the divisor {@code y}, and
             * is in the range of {@code -abs(y) < r < +abs(y)}.
             * <p>
             * The relationship between {@code floorDiv} and {@code floorMod} is such that:
             * <ul>
             * <li>{@code floorDiv(x, y) * y + floorMod(x, y) == x}
             * </ul>
             * <p>
             * See {@link Math#floorMod(int, int) Math.floorMod} for examples and
             * a comparison to the {@code %} operator.
             */
            // @ts-ignore
            public static floorMod(x: number, y: number): number;
            /**
             * Returns the absolute value of an {@code int} value.
             * If the argument is not negative, the argument is returned.
             * If the argument is negative, the negation of the argument is returned.
             * <p>Note that if the argument is equal to the value of
             * {@link Integer#MIN_VALUE}, the most negative representable
             * {@code int} value, the result is that same value, which is
             * negative.
             */
            // @ts-ignore
            public static abs(a: number): number;
            /**
             * Returns the absolute value of a {@code long} value.
             * If the argument is not negative, the argument is returned.
             * If the argument is negative, the negation of the argument is returned.
             * <p>Note that if the argument is equal to the value of
             * {@link Long#MIN_VALUE}, the most negative representable
             * {@code long} value, the result is that same value, which
             * is negative.
             */
            // @ts-ignore
            public static abs(a: number): number;
            /**
             * Returns the absolute value of a {@code float} value.
             * If the argument is not negative, the argument is returned.
             * If the argument is negative, the negation of the argument is returned.
             * Special cases:
             * <ul><li>If the argument is positive zero or negative zero, the
             * result is positive zero.
             * <li>If the argument is infinite, the result is positive infinity.
             * <li>If the argument is NaN, the result is NaN.</ul>
             * In other words, the result is the same as the value of the expression:
             * <p>{@code Float.intBitsToFloat(0x7fffffff & Float.floatToIntBits(a))}
             */
            // @ts-ignore
            public static abs(a: number): number;
            /**
             * Returns the absolute value of a {@code double} value.
             * If the argument is not negative, the argument is returned.
             * If the argument is negative, the negation of the argument is returned.
             * Special cases:
             * <ul><li>If the argument is positive zero or negative zero, the result
             * is positive zero.
             * <li>If the argument is infinite, the result is positive infinity.
             * <li>If the argument is NaN, the result is NaN.</ul>
             * In other words, the result is the same as the value of the expression:
             * <p>{@code Double.longBitsToDouble((Double.doubleToLongBits(a)<<1)>>>1)}
             */
            // @ts-ignore
            public static abs(a: number): number;
            /**
             * Returns the greater of two {@code int} values. That is, the
             * result is the argument closer to the value of
             * {@link Integer#MAX_VALUE}. If the arguments have the same value,
             * the result is that same value.
             */
            // @ts-ignore
            public static max(a: number, b: number): number;
            /**
             * Returns the greater of two {@code long} values. That is, the
             * result is the argument closer to the value of
             * {@link Long#MAX_VALUE}. If the arguments have the same value,
             * the result is that same value.
             */
            // @ts-ignore
            public static max(a: number, b: number): number;
            /**
             * Returns the greater of two {@code float} values.  That is,
             * the result is the argument closer to positive infinity. If the
             * arguments have the same value, the result is that same
             * value. If either value is NaN, then the result is NaN.  Unlike
             * the numerical comparison operators, this method considers
             * negative zero to be strictly smaller than positive zero. If one
             * argument is positive zero and the other negative zero, the
             * result is positive zero.
             */
            // @ts-ignore
            public static max(a: number, b: number): number;
            /**
             * Returns the greater of two {@code double} values.  That
             * is, the result is the argument closer to positive infinity. If
             * the arguments have the same value, the result is that same
             * value. If either value is NaN, then the result is NaN.  Unlike
             * the numerical comparison operators, this method considers
             * negative zero to be strictly smaller than positive zero. If one
             * argument is positive zero and the other negative zero, the
             * result is positive zero.
             */
            // @ts-ignore
            public static max(a: number, b: number): number;
            /**
             * Returns the smaller of two {@code int} values. That is,
             * the result the argument closer to the value of
             * {@link Integer#MIN_VALUE}.  If the arguments have the same
             * value, the result is that same value.
             */
            // @ts-ignore
            public static min(a: number, b: number): number;
            /**
             * Returns the smaller of two {@code long} values. That is,
             * the result is the argument closer to the value of
             * {@link Long#MIN_VALUE}. If the arguments have the same
             * value, the result is that same value.
             */
            // @ts-ignore
            public static min(a: number, b: number): number;
            /**
             * Returns the smaller of two {@code float} values.  That is,
             * the result is the value closer to negative infinity. If the
             * arguments have the same value, the result is that same
             * value. If either value is NaN, then the result is NaN.  Unlike
             * the numerical comparison operators, this method considers
             * negative zero to be strictly smaller than positive zero.  If
             * one argument is positive zero and the other is negative zero,
             * the result is negative zero.
             */
            // @ts-ignore
            public static min(a: number, b: number): number;
            /**
             * Returns the smaller of two {@code double} values.  That
             * is, the result is the value closer to negative infinity. If the
             * arguments have the same value, the result is that same
             * value. If either value is NaN, then the result is NaN.  Unlike
             * the numerical comparison operators, this method considers
             * negative zero to be strictly smaller than positive zero. If one
             * argument is positive zero and the other is negative zero, the
             * result is negative zero.
             */
            // @ts-ignore
            public static min(a: number, b: number): number;
            /**
             * Returns the size of an ulp of the argument.  An ulp, unit in
             * the last place, of a {@code double} value is the positive
             * distance between this floating-point value and the {@code
             * double} value next larger in magnitude.  Note that for non-NaN
             * <i>x</i>, <code>ulp(-<i>x</i>) == ulp(<i>x</i>)</code>.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, then the result is NaN.
             * <li> If the argument is positive or negative infinity, then the
             * result is positive infinity.
             * <li> If the argument is positive or negative zero, then the result is
             * {@code Double.MIN_VALUE}.
             * <li> If the argument is &plusmn;{@code Double.MAX_VALUE}, then
             * the result is equal to 2<sup>971</sup>.
             * </ul>
             */
            // @ts-ignore
            public static ulp(d: number): number;
            /**
             * Returns the size of an ulp of the argument.  An ulp, unit in
             * the last place, of a {@code float} value is the positive
             * distance between this floating-point value and the {@code
             * float} value next larger in magnitude.  Note that for non-NaN
             * <i>x</i>, <code>ulp(-<i>x</i>) == ulp(<i>x</i>)</code>.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, then the result is NaN.
             * <li> If the argument is positive or negative infinity, then the
             * result is positive infinity.
             * <li> If the argument is positive or negative zero, then the result is
             * {@code Float.MIN_VALUE}.
             * <li> If the argument is &plusmn;{@code Float.MAX_VALUE}, then
             * the result is equal to 2<sup>104</sup>.
             * </ul>
             */
            // @ts-ignore
            public static ulp(f: number): number;
            /**
             * Returns the signum function of the argument; zero if the argument
             * is zero, 1.0 if the argument is greater than zero, -1.0 if the
             * argument is less than zero.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, then the result is NaN.
             * <li> If the argument is positive zero or negative zero, then the
             * result is the same as the argument.
             * </ul>
             */
            // @ts-ignore
            public static signum(d: number): number;
            /**
             * Returns the signum function of the argument; zero if the argument
             * is zero, 1.0f if the argument is greater than zero, -1.0f if the
             * argument is less than zero.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, then the result is NaN.
             * <li> If the argument is positive zero or negative zero, then the
             * result is the same as the argument.
             * </ul>
             */
            // @ts-ignore
            public static signum(f: number): number;
            /**
             * Returns the hyperbolic sine of a {@code double} value.
             * The hyperbolic sine of <i>x</i> is defined to be
             * (<i>e<sup>x</sup>&nbsp;-&nbsp;e<sup>-x</sup></i>)/2
             * where <i>e</i> is {@linkplain Math#E Euler's number}.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is infinite, then the result is an infinity
             * with the same sign as the argument.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * </ul>
             */
            // @ts-ignore
            public static sinh(x: number): number;
            /**
             * Returns the hyperbolic cosine of a {@code double} value.
             * The hyperbolic cosine of <i>x</i> is defined to be
             * (<i>e<sup>x</sup>&nbsp;+&nbsp;e<sup>-x</sup></i>)/2
             * where <i>e</i> is {@linkplain Math#E Euler's number}.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is infinite, then the result is positive
             * infinity.
             * <li>If the argument is zero, then the result is {@code 1.0}.
             * </ul>
             */
            // @ts-ignore
            public static cosh(x: number): number;
            /**
             * Returns the hyperbolic tangent of a {@code double} value.
             * The hyperbolic tangent of <i>x</i> is defined to be
             * (<i>e<sup>x</sup>&nbsp;-&nbsp;e<sup>-x</sup></i>)/(<i>e<sup>x</sup>&nbsp;+&nbsp;e<sup>-x</sup></i>),
             * in other words, {@linkplain Math#sinh
             * sinh(<i>x</i>)}/{@linkplain Math#cosh cosh(<i>x</i>)}.  Note
             * that the absolute value of the exact tanh is always less than
             * 1.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN, then the result is NaN.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * <li>If the argument is positive infinity, then the result is
             * {@code +1.0}.
             * <li>If the argument is negative infinity, then the result is
             * {@code -1.0}.
             * </ul>
             */
            // @ts-ignore
            public static tanh(x: number): number;
            /**
             * Returns sqrt(<i>x</i><sup>2</sup>&nbsp;+<i>y</i><sup>2</sup>)
             * without intermediate overflow or underflow.
             * <p>Special cases:
             * <ul>
             * <li> If either argument is infinite, then the result
             * is positive infinity.
             * <li> If either argument is NaN and neither argument is infinite,
             * then the result is NaN.
             * </ul>
             */
            // @ts-ignore
            public static hypot(x: number, y: number): number;
            /**
             * Returns <i>e</i><sup>x</sup>&nbsp;-1.  Note that for values of
             * <i>x</i> near 0, the exact sum of
             * {@code expm1(x)}&nbsp;+&nbsp;1 is much closer to the true
             * result of <i>e</i><sup>x</sup> than {@code exp(x)}.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN, the result is NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is negative infinity, then the result is
             * -1.0.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * </ul>
             */
            // @ts-ignore
            public static expm1(x: number): number;
            /**
             * Returns the natural logarithm of the sum of the argument and 1.
             * Note that for small values {@code x}, the result of
             * {@code log1p(x)} is much closer to the true result of ln(1
             * + {@code x}) than the floating-point evaluation of
             * {@code log(1.0+x)}.
             * <p>Special cases:
             * <ul>
             * <li>If the argument is NaN or less than -1, then the result is
             * NaN.
             * <li>If the argument is positive infinity, then the result is
             * positive infinity.
             * <li>If the argument is negative one, then the result is
             * negative infinity.
             * <li>If the argument is zero, then the result is a zero with the
             * same sign as the argument.
             * </ul>
             */
            // @ts-ignore
            public static log1p(x: number): number;
            /**
             * Returns the first floating-point argument with the sign of the
             * second floating-point argument.  For this method, a NaN
             * {@code sign} argument is always treated as if it were
             * positive.
             */
            // @ts-ignore
            public static copySign(magnitude: number, sign: number): number;
            /**
             * Returns the first floating-point argument with the sign of the
             * second floating-point argument.  For this method, a NaN
             * {@code sign} argument is always treated as if it were
             * positive.
             */
            // @ts-ignore
            public static copySign(magnitude: number, sign: number): number;
            /**
             * Returns the unbiased exponent used in the representation of a
             * {@code float}.  Special cases:
             * <ul>
             * <li>If the argument is NaN or infinite, then the result is
             * {@link Float#MAX_EXPONENT} + 1.
             * <li>If the argument is zero or subnormal, then the result is
             * {@link Float#MIN_EXPONENT} -1.
             * </ul>
             */
            // @ts-ignore
            public static getExponent(f: number): number;
            /**
             * Returns the unbiased exponent used in the representation of a
             * {@code double}.  Special cases:
             * <ul>
             * <li>If the argument is NaN or infinite, then the result is
             * {@link Double#MAX_EXPONENT} + 1.
             * <li>If the argument is zero or subnormal, then the result is
             * {@link Double#MIN_EXPONENT} -1.
             * </ul>
             */
            // @ts-ignore
            public static getExponent(d: number): number;
            /**
             * Returns the floating-point number adjacent to the first
             * argument in the direction of the second argument.  If both
             * arguments compare as equal the second argument is returned.
             * <p>Special cases:
             * <ul>
             * <li> If either argument is a NaN, then NaN is returned.
             * <li> If both arguments are signed zeros, {@code direction}
             * is returned unchanged (as implied by the requirement of
             * returning the second argument if the arguments compare as
             * equal).
             * <li> If {@code start} is
             * &plusmn;{@link Double#MIN_VALUE} and {@code direction}
             * has a value such that the result should have a smaller
             * magnitude, then a zero with the same sign as {@code start}
             * is returned.
             * <li> If {@code start} is infinite and
             * {@code direction} has a value such that the result should
             * have a smaller magnitude, {@link Double#MAX_VALUE} with the
             * same sign as {@code start} is returned.
             * <li> If {@code start} is equal to &plusmn;
             * {@link Double#MAX_VALUE} and {@code direction} has a
             * value such that the result should have a larger magnitude, an
             * infinity with same sign as {@code start} is returned.
             * </ul>
             */
            // @ts-ignore
            public static nextAfter(start: number, direction: number): number;
            /**
             * Returns the floating-point number adjacent to the first
             * argument in the direction of the second argument.  If both
             * arguments compare as equal a value equivalent to the second argument
             * is returned.
             * <p>Special cases:
             * <ul>
             * <li> If either argument is a NaN, then NaN is returned.
             * <li> If both arguments are signed zeros, a value equivalent
             * to {@code direction} is returned.
             * <li> If {@code start} is
             * &plusmn;{@link Float#MIN_VALUE} and {@code direction}
             * has a value such that the result should have a smaller
             * magnitude, then a zero with the same sign as {@code start}
             * is returned.
             * <li> If {@code start} is infinite and
             * {@code direction} has a value such that the result should
             * have a smaller magnitude, {@link Float#MAX_VALUE} with the
             * same sign as {@code start} is returned.
             * <li> If {@code start} is equal to &plusmn;
             * {@link Float#MAX_VALUE} and {@code direction} has a
             * value such that the result should have a larger magnitude, an
             * infinity with same sign as {@code start} is returned.
             * </ul>
             */
            // @ts-ignore
            public static nextAfter(start: number, direction: number): number;
            /**
             * Returns the floating-point value adjacent to {@code d} in
             * the direction of positive infinity.  This method is
             * semantically equivalent to {@code nextAfter(d,
             * Double.POSITIVE_INFINITY)}; however, a {@code nextUp}
             * implementation may run faster than its equivalent
             * {@code nextAfter} call.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, the result is NaN.
             * <li> If the argument is positive infinity, the result is
             * positive infinity.
             * <li> If the argument is zero, the result is
             * {@link Double#MIN_VALUE}
             * </ul>
             */
            // @ts-ignore
            public static nextUp(d: number): number;
            /**
             * Returns the floating-point value adjacent to {@code f} in
             * the direction of positive infinity.  This method is
             * semantically equivalent to {@code nextAfter(f,
             * Float.POSITIVE_INFINITY)}; however, a {@code nextUp}
             * implementation may run faster than its equivalent
             * {@code nextAfter} call.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, the result is NaN.
             * <li> If the argument is positive infinity, the result is
             * positive infinity.
             * <li> If the argument is zero, the result is
             * {@link Float#MIN_VALUE}
             * </ul>
             */
            // @ts-ignore
            public static nextUp(f: number): number;
            /**
             * Returns the floating-point value adjacent to {@code d} in
             * the direction of negative infinity.  This method is
             * semantically equivalent to {@code nextAfter(d,
             * Double.NEGATIVE_INFINITY)}; however, a
             * {@code nextDown} implementation may run faster than its
             * equivalent {@code nextAfter} call.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, the result is NaN.
             * <li> If the argument is negative infinity, the result is
             * negative infinity.
             * <li> If the argument is zero, the result is
             * {@code -Double.MIN_VALUE}
             * </ul>
             */
            // @ts-ignore
            public static nextDown(d: number): number;
            /**
             * Returns the floating-point value adjacent to {@code f} in
             * the direction of negative infinity.  This method is
             * semantically equivalent to {@code nextAfter(f,
             * Float.NEGATIVE_INFINITY)}; however, a
             * {@code nextDown} implementation may run faster than its
             * equivalent {@code nextAfter} call.
             * <p>Special Cases:
             * <ul>
             * <li> If the argument is NaN, the result is NaN.
             * <li> If the argument is negative infinity, the result is
             * negative infinity.
             * <li> If the argument is zero, the result is
             * {@code -Float.MIN_VALUE}
             * </ul>
             */
            // @ts-ignore
            public static nextDown(f: number): number;
            /**
             * Returns {@code d} &times;
             * 2<sup>{@code scaleFactor}</sup> rounded as if performed
             * by a single correctly rounded floating-point multiply to a
             * member of the double value set.  See the Java
             * Language Specification for a discussion of floating-point
             * value sets.  If the exponent of the result is between {@link
             * Double#MIN_EXPONENT} and {@link Double#MAX_EXPONENT}, the
             * answer is calculated exactly.  If the exponent of the result
             * would be larger than {@code Double.MAX_EXPONENT}, an
             * infinity is returned.  Note that if the result is subnormal,
             * precision may be lost; that is, when {@code scalb(x, n)}
             * is subnormal, {@code scalb(scalb(x, n), -n)} may not equal
             * <i>x</i>.  When the result is non-NaN, the result has the same
             * sign as {@code d}.
             * <p>Special cases:
             * <ul>
             * <li> If the first argument is NaN, NaN is returned.
             * <li> If the first argument is infinite, then an infinity of the
             * same sign is returned.
             * <li> If the first argument is zero, then a zero of the same
             * sign is returned.
             * </ul>
             */
            // @ts-ignore
            public static scalb(d: number, scaleFactor: number): number;
            /**
             * Returns {@code f} &times;
             * 2<sup>{@code scaleFactor}</sup> rounded as if performed
             * by a single correctly rounded floating-point multiply to a
             * member of the float value set.  See the Java
             * Language Specification for a discussion of floating-point
             * value sets.  If the exponent of the result is between {@link
             * Float#MIN_EXPONENT} and {@link Float#MAX_EXPONENT}, the
             * answer is calculated exactly.  If the exponent of the result
             * would be larger than {@code Float.MAX_EXPONENT}, an
             * infinity is returned.  Note that if the result is subnormal,
             * precision may be lost; that is, when {@code scalb(x, n)}
             * is subnormal, {@code scalb(scalb(x, n), -n)} may not equal
             * <i>x</i>.  When the result is non-NaN, the result has the same
             * sign as {@code f}.
             * <p>Special cases:
             * <ul>
             * <li> If the first argument is NaN, NaN is returned.
             * <li> If the first argument is infinite, then an infinity of the
             * same sign is returned.
             * <li> If the first argument is zero, then a zero of the same
             * sign is returned.
             * </ul>
             */
            // @ts-ignore
            public static scalb(f: number, scaleFactor: number): number;
        }
    }
}
