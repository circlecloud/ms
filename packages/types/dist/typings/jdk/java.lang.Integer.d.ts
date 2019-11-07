// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Integer extends java.lang.Number {
            /**
             * Constructs a newly allocated {@code Integer} object that
             * represents the specified {@code int} value.
             */
            // @ts-ignore
            constructor(value: number)
            /**
             * Constructs a newly allocated {@code Integer} object that
             * represents the {@code int} value indicated by the
             * {@code String} parameter. The string is converted to an
             * {@code int} value in exactly the manner used by the
             * {@code parseInt} method for radix 10.
             */
            // @ts-ignore
            constructor(s: string)
            // @ts-ignore
            public static MIN_VALUE: number;
            // @ts-ignore
            public static MAX_VALUE: number;
            // @ts-ignore
            public static TYPE: java.lang.Class;
            // @ts-ignore
            public static SIZE: number;
            // @ts-ignore
            public static BYTES: number;
            /**
             * Returns a string representation of the first argument in the
             * radix specified by the second argument.
             * <p>If the radix is smaller than {@code Character.MIN_RADIX}
             * or larger than {@code Character.MAX_RADIX}, then the radix
             * {@code 10} is used instead.
             * <p>If the first argument is negative, the first element of the
             * result is the ASCII minus character {@code '-'}
             * ({@code '\u002D'}). If the first argument is not
             * negative, no sign character appears in the result.
             * <p>The remaining characters of the result represent the magnitude
             * of the first argument. If the magnitude is zero, it is
             * represented by a single zero character {@code '0'}
             * ({@code '\u0030'}); otherwise, the first character of
             * the representation of the magnitude will not be the zero
             * character.  The following ASCII characters are used as digits:
             * <blockquote>
             * {@code 0123456789abcdefghijklmnopqrstuvwxyz}
             * </blockquote>
             * These are {@code '\u0030'} through
             * {@code '\u0039'} and {@code '\u0061'} through
             * {@code '\u007A'}. If {@code radix} is
             * <var>N</var>, then the first <var>N</var> of these characters
             * are used as radix-<var>N</var> digits in the order shown. Thus,
             * the digits for hexadecimal (radix 16) are
             * {@code 0123456789abcdef}. If uppercase letters are
             * desired, the {@link java.lang.String#toUpperCase()} method may
             * be called on the result:
             * <blockquote>
             * {@code Integer.toString(n, 16).toUpperCase()}
             * </blockquote>
             */
            // @ts-ignore
            public static toString(i: number, radix: number): string;
            /**
             * Returns a string representation of the first argument as an
             * unsigned integer value in the radix specified by the second
             * argument.
             * <p>If the radix is smaller than {@code Character.MIN_RADIX}
             * or larger than {@code Character.MAX_RADIX}, then the radix
             * {@code 10} is used instead.
             * <p>Note that since the first argument is treated as an unsigned
             * value, no leading sign character is printed.
             * <p>If the magnitude is zero, it is represented by a single zero
             * character {@code '0'} ({@code '\u0030'}); otherwise,
             * the first character of the representation of the magnitude will
             * not be the zero character.
             * <p>The behavior of radixes and the characters used as digits
             * are the same as {@link #toString(int, int) toString}.
             */
            // @ts-ignore
            public static toUnsignedString(i: number, radix: number): string;
            /**
             * Returns a string representation of the integer argument as an
             * unsigned integer in base&nbsp;16.
             * <p>The unsigned integer value is the argument plus 2<sup>32</sup>
             * if the argument is negative; otherwise, it is equal to the
             * argument.  This value is converted to a string of ASCII digits
             * in hexadecimal (base&nbsp;16) with no extra leading
             * {@code 0}s.
             * <p>The value of the argument can be recovered from the returned
             * string {@code s} by calling {@link
             * Integer#parseUnsignedInt(String, int)
             * Integer.parseUnsignedInt(s, 16)}.
             * <p>If the unsigned magnitude is zero, it is represented by a
             * single zero character {@code '0'} ({@code '\u0030'});
             * otherwise, the first character of the representation of the
             * unsigned magnitude will not be the zero character. The
             * following characters are used as hexadecimal digits:
             * <blockquote>
             * {@code 0123456789abcdef}
             * </blockquote>
             * These are the characters {@code '\u0030'} through
             * {@code '\u0039'} and {@code '\u0061'} through
             * {@code '\u0066'}. If uppercase letters are
             * desired, the {@link java.lang.String#toUpperCase()} method may
             * be called on the result:
             * <blockquote>
             * {@code Integer.toHexString(n).toUpperCase()}
             * </blockquote>
             */
            // @ts-ignore
            public static toHexString(i: number): string;
            /**
             * Returns a string representation of the integer argument as an
             * unsigned integer in base&nbsp;8.
             * <p>The unsigned integer value is the argument plus 2<sup>32</sup>
             * if the argument is negative; otherwise, it is equal to the
             * argument.  This value is converted to a string of ASCII digits
             * in octal (base&nbsp;8) with no extra leading {@code 0}s.
             * <p>The value of the argument can be recovered from the returned
             * string {@code s} by calling {@link
             * Integer#parseUnsignedInt(String, int)
             * Integer.parseUnsignedInt(s, 8)}.
             * <p>If the unsigned magnitude is zero, it is represented by a
             * single zero character {@code '0'} ({@code '\u0030'});
             * otherwise, the first character of the representation of the
             * unsigned magnitude will not be the zero character. The
             * following characters are used as octal digits:
             * <blockquote>
             * {@code 01234567}
             * </blockquote>
             * These are the characters {@code '\u0030'} through
             * {@code '\u0037'}.
             */
            // @ts-ignore
            public static toOctalString(i: number): string;
            /**
             * Returns a string representation of the integer argument as an
             * unsigned integer in base&nbsp;2.
             * <p>The unsigned integer value is the argument plus 2<sup>32</sup>
             * if the argument is negative; otherwise it is equal to the
             * argument.  This value is converted to a string of ASCII digits
             * in binary (base&nbsp;2) with no extra leading {@code 0}s.
             * <p>The value of the argument can be recovered from the returned
             * string {@code s} by calling {@link
             * Integer#parseUnsignedInt(String, int)
             * Integer.parseUnsignedInt(s, 2)}.
             * <p>If the unsigned magnitude is zero, it is represented by a
             * single zero character {@code '0'} ({@code '\u0030'});
             * otherwise, the first character of the representation of the
             * unsigned magnitude will not be the zero character. The
             * characters {@code '0'} ({@code '\u0030'}) and {@code
             * '1'} ({@code '\u0031'}) are used as binary digits.
             */
            // @ts-ignore
            public static toBinaryString(i: number): string;
            /**
             * Returns a {@code String} object representing the
             * specified integer. The argument is converted to signed decimal
             * representation and returned as a string, exactly as if the
             * argument and radix 10 were given as arguments to the {@link
             * #toString(int, int)} method.
             */
            // @ts-ignore
            public static toString(i: number): string;
            /**
             * Returns a string representation of the argument as an unsigned
             * decimal value.
             * The argument is converted to unsigned decimal representation
             * and returned as a string exactly as if the argument and radix
             * 10 were given as arguments to the {@link #toUnsignedString(int,
             * int)} method.
             */
            // @ts-ignore
            public static toUnsignedString(i: number): string;
            /**
             * Parses the string argument as a signed integer in the radix
             * specified by the second argument. The characters in the string
             * must all be digits of the specified radix (as determined by
             * whether {@link java.lang.Character#digit(char, int)} returns a
             * nonnegative value), except that the first character may be an
             * ASCII minus sign {@code '-'} ({@code '\u002D'}) to
             * indicate a negative value or an ASCII plus sign {@code '+'}
             * ({@code '\u002B'}) to indicate a positive value. The
             * resulting integer value is returned.
             * <p>An exception of type {@code NumberFormatException} is
             * thrown if any of the following situations occurs:
             * <ul>
             * <li>The first argument is {@code null} or is a string of
             * length zero.
             * <li>The radix is either smaller than
             * {@link java.lang.Character#MIN_RADIX} or
             * larger than {@link java.lang.Character#MAX_RADIX}.
             * <li>Any character of the string is not a digit of the specified
             * radix, except that the first character may be a minus sign
             * {@code '-'} ({@code '\u002D'}) or plus sign
             * {@code '+'} ({@code '\u002B'}) provided that the
             * string is longer than length 1.
             * <li>The value represented by the string is not a value of type
             * {@code int}.
             * </ul>
             * <p>Examples:
             * <blockquote><pre>
             * parseInt("0", 10) returns 0
             * parseInt("473", 10) returns 473
             * parseInt("+42", 10) returns 42
             * parseInt("-0", 10) returns 0
             * parseInt("-FF", 16) returns -255
             * parseInt("1100110", 2) returns 102
             * parseInt("2147483647", 10) returns 2147483647
             * parseInt("-2147483648", 10) returns -2147483648
             * parseInt("2147483648", 10) throws a NumberFormatException
             * parseInt("99", 8) throws a NumberFormatException
             * parseInt("Kona", 10) throws a NumberFormatException
             * parseInt("Kona", 27) returns 411787
             * </pre></blockquote>
             */
            // @ts-ignore
            public static parseInt(s: string, radix: number): number;
            /**
             * Parses the string argument as a signed decimal integer. The
             * characters in the string must all be decimal digits, except
             * that the first character may be an ASCII minus sign {@code '-'}
             * ({@code '\u002D'}) to indicate a negative value or an
             * ASCII plus sign {@code '+'} ({@code '\u002B'}) to
             * indicate a positive value. The resulting integer value is
             * returned, exactly as if the argument and the radix 10 were
             * given as arguments to the {@link #parseInt(java.lang.String,
             * int)} method.
             */
            // @ts-ignore
            public static parseInt(s: string): number;
            /**
             * Parses the string argument as an unsigned integer in the radix
             * specified by the second argument.  An unsigned integer maps the
             * values usually associated with negative numbers to positive
             * numbers larger than {@code MAX_VALUE}.
             * The characters in the string must all be digits of the
             * specified radix (as determined by whether {@link
             * java.lang.Character#digit(char, int)} returns a nonnegative
             * value), except that the first character may be an ASCII plus
             * sign {@code '+'} ({@code '\u002B'}). The resulting
             * integer value is returned.
             * <p>An exception of type {@code NumberFormatException} is
             * thrown if any of the following situations occurs:
             * <ul>
             * <li>The first argument is {@code null} or is a string of
             * length zero.
             * <li>The radix is either smaller than
             * {@link java.lang.Character#MIN_RADIX} or
             * larger than {@link java.lang.Character#MAX_RADIX}.
             * <li>Any character of the string is not a digit of the specified
             * radix, except that the first character may be a plus sign
             * {@code '+'} ({@code '\u002B'}) provided that the
             * string is longer than length 1.
             * <li>The value represented by the string is larger than the
             * largest unsigned {@code int}, 2<sup>32</sup>-1.
             * </ul>
             */
            // @ts-ignore
            public static parseUnsignedInt(s: string, radix: number): number;
            /**
             * Parses the string argument as an unsigned decimal integer. The
             * characters in the string must all be decimal digits, except
             * that the first character may be an an ASCII plus sign {@code
             * '+'} ({@code '\u002B'}). The resulting integer value
             * is returned, exactly as if the argument and the radix 10 were
             * given as arguments to the {@link
             * #parseUnsignedInt(java.lang.String, int)} method.
             */
            // @ts-ignore
            public static parseUnsignedInt(s: string): number;
            /**
             * Returns an {@code Integer} object holding the value
             * extracted from the specified {@code String} when parsed
             * with the radix given by the second argument. The first argument
             * is interpreted as representing a signed integer in the radix
             * specified by the second argument, exactly as if the arguments
             * were given to the {@link #parseInt(java.lang.String, int)}
             * method. The result is an {@code Integer} object that
             * represents the integer value specified by the string.
             * <p>In other words, this method returns an {@code Integer}
             * object equal to the value of:
             * <blockquote>
             * {@code new Integer(Integer.parseInt(s, radix))}
             * </blockquote>
             */
            // @ts-ignore
            public static valueOf(s: string, radix: number): java.lang.Integer;
            /**
             * Returns an {@code Integer} object holding the
             * value of the specified {@code String}. The argument is
             * interpreted as representing a signed decimal integer, exactly
             * as if the argument were given to the {@link
             * #parseInt(java.lang.String)} method. The result is an
             * {@code Integer} object that represents the integer value
             * specified by the string.
             * <p>In other words, this method returns an {@code Integer}
             * object equal to the value of:
             * <blockquote>
             * {@code new Integer(Integer.parseInt(s))}
             * </blockquote>
             */
            // @ts-ignore
            public static valueOf(s: string): java.lang.Integer;
            /**
             * Returns an {@code Integer} instance representing the specified
             * {@code int} value.  If a new {@code Integer} instance is not
             * required, this method should generally be used in preference to
             * the constructor {@link #Integer(int)}, as this method is likely
             * to yield significantly better space and time performance by
             * caching frequently requested values.
             * This method will always cache values in the range -128 to 127,
             * inclusive, and may cache other values outside of this range.
             */
            // @ts-ignore
            public static valueOf(i: number): java.lang.Integer;
            /**
             * Returns the value of this {@code Integer} as a {@code byte}
             * after a narrowing primitive conversion.
             */
            // @ts-ignore
            public byteValue(): number;
            /**
             * Returns the value of this {@code Integer} as a {@code short}
             * after a narrowing primitive conversion.
             */
            // @ts-ignore
            public shortValue(): number;
            /**
             * Returns the value of this {@code Integer} as an
             * {@code int}.
             */
            // @ts-ignore
            public intValue(): number;
            /**
             * Returns the value of this {@code Integer} as a {@code long}
             * after a widening primitive conversion.
             */
            // @ts-ignore
            public longValue(): number;
            /**
             * Returns the value of this {@code Integer} as a {@code float}
             * after a widening primitive conversion.
             */
            // @ts-ignore
            public floatValue(): number;
            /**
             * Returns the value of this {@code Integer} as a {@code double}
             * after a widening primitive conversion.
             */
            // @ts-ignore
            public doubleValue(): number;
            /**
             * Returns a {@code String} object representing this
             * {@code Integer}'s value. The value is converted to signed
             * decimal representation and returned as a string, exactly as if
             * the integer value were given as an argument to the {@link
             * java.lang.Integer#toString(int)} method.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a hash code for this {@code Integer}.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a hash code for a {@code int} value; compatible with
             * {@code Integer.hashCode()}.
             */
            // @ts-ignore
            public static hashCode(value: number): number;
            /**
             * Compares this object to the specified object.  The result is
             * {@code true} if and only if the argument is not
             * {@code null} and is an {@code Integer} object that
             * contains the same {@code int} value as this object.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Determines the integer value of the system property with the
             * specified name.
             * <p>The first argument is treated as the name of a system
             * property.  System properties are accessible through the {@link
             * java.lang.System#getProperty(java.lang.String)} method. The
             * string value of this property is then interpreted as an integer
             * value using the grammar supported by {@link Integer#decode decode} and
             * an {@code Integer} object representing this value is returned.
             * <p>If there is no property with the specified name, if the
             * specified name is empty or {@code null}, or if the property
             * does not have the correct numeric format, then {@code null} is
             * returned.
             * <p>In other words, this method returns an {@code Integer}
             * object equal to the value of:
             * <blockquote>
             * {@code getInteger(nm, null)}
             * </blockquote>
             */
            // @ts-ignore
            public static getInteger(nm: string): java.lang.Integer;
            /**
             * Determines the integer value of the system property with the
             * specified name.
             * <p>The first argument is treated as the name of a system
             * property.  System properties are accessible through the {@link
             * java.lang.System#getProperty(java.lang.String)} method. The
             * string value of this property is then interpreted as an integer
             * value using the grammar supported by {@link Integer#decode decode} and
             * an {@code Integer} object representing this value is returned.
             * <p>The second argument is the default value. An {@code Integer} object
             * that represents the value of the second argument is returned if there
             * is no property of the specified name, if the property does not have
             * the correct numeric format, or if the specified name is empty or
             * {@code null}.
             * <p>In other words, this method returns an {@code Integer} object
             * equal to the value of:
             * <blockquote>
             * {@code getInteger(nm, new Integer(val))}
             * </blockquote>
             * but in practice it may be implemented in a manner such as:
             * <blockquote><pre>
             * Integer result = getInteger(nm, null);
             * return (result == null) ? new Integer(val) : result;
             * </pre></blockquote>
             * to avoid the unnecessary allocation of an {@code Integer}
             * object when the default value is not needed.
             */
            // @ts-ignore
            public static getInteger(nm: string, val: number): java.lang.Integer;
            /**
             * Returns the integer value of the system property with the
             * specified name.  The first argument is treated as the name of a
             * system property.  System properties are accessible through the
             * {@link java.lang.System#getProperty(java.lang.String)} method.
             * The string value of this property is then interpreted as an
             * integer value, as per the {@link Integer#decode decode} method,
             * and an {@code Integer} object representing this value is
             * returned; in summary:
             * <ul><li>If the property value begins with the two ASCII characters
             * {@code 0x} or the ASCII character {@code #}, not
             * followed by a minus sign, then the rest of it is parsed as a
             * hexadecimal integer exactly as by the method
             * {@link #valueOf(java.lang.String, int)} with radix 16.
             * <li>If the property value begins with the ASCII character
             * {@code 0} followed by another character, it is parsed as an
             * octal integer exactly as by the method
             * {@link #valueOf(java.lang.String, int)} with radix 8.
             * <li>Otherwise, the property value is parsed as a decimal integer
             * exactly as by the method {@link #valueOf(java.lang.String, int)}
             * with radix 10.
             * </ul>
             * <p>The second argument is the default value. The default value is
             * returned if there is no property of the specified name, if the
             * property does not have the correct numeric format, or if the
             * specified name is empty or {@code null}.
             */
            // @ts-ignore
            public static getInteger(nm: string, val: java.lang.Integer): java.lang.Integer;
            /**
             * Decodes a {@code String} into an {@code Integer}.
             * Accepts decimal, hexadecimal, and octal numbers given
             * by the following grammar:
             * <blockquote>
             * <dl>
             * <dt><i>DecodableString:</i>
             * <dd><i>Sign<sub>opt</sub> DecimalNumeral</i>
             * <dd><i>Sign<sub>opt</sub></i> {@code 0x} <i>HexDigits</i>
             * <dd><i>Sign<sub>opt</sub></i> {@code 0X} <i>HexDigits</i>
             * <dd><i>Sign<sub>opt</sub></i> {@code #} <i>HexDigits</i>
             * <dd><i>Sign<sub>opt</sub></i> {@code 0} <i>OctalDigits</i>
             * <dt><i>Sign:</i>
             * <dd>{@code -}
             * <dd>{@code +}
             * </dl>
             * </blockquote>
             * <i>DecimalNumeral</i>, <i>HexDigits</i>, and <i>OctalDigits</i>
             * are as defined in section 3.10.1 of
             * <cite>The Java&trade; Language Specification</cite>,
             * except that underscores are not accepted between digits.
             * <p>The sequence of characters following an optional
             * sign and/or radix specifier ("{@code 0x}", "{@code 0X}",
             * "{@code #}", or leading zero) is parsed as by the {@code
             * Integer.parseInt} method with the indicated radix (10, 16, or
             * 8).  This sequence of characters must represent a positive
             * value or a {@link NumberFormatException} will be thrown.  The
             * result is negated if first character of the specified {@code
             * String} is the minus sign.  No whitespace characters are
             * permitted in the {@code String}.
             */
            // @ts-ignore
            public static decode(nm: string): java.lang.Integer;
            /**
             * Compares two {@code Integer} objects numerically.
             */
            // @ts-ignore
            public compareTo(anotherInteger: java.lang.Integer): number;
            /**
             * Compares two {@code int} values numerically.
             * The value returned is identical to what would be returned by:
             * <pre>
             * Integer.valueOf(x).compareTo(Integer.valueOf(y))
             * </pre>
             */
            // @ts-ignore
            public static compare(x: number, y: number): number;
            /**
             * Compares two {@code int} values numerically treating the values
             * as unsigned.
             */
            // @ts-ignore
            public static compareUnsigned(x: number, y: number): number;
            /**
             * Converts the argument to a {@code long} by an unsigned
             * conversion.  In an unsigned conversion to a {@code long}, the
             * high-order 32 bits of the {@code long} are zero and the
             * low-order 32 bits are equal to the bits of the integer
             * argument.
             * Consequently, zero and positive {@code int} values are mapped
             * to a numerically equal {@code long} value and negative {@code
             * int} values are mapped to a {@code long} value equal to the
             * input plus 2<sup>32</sup>.
             */
            // @ts-ignore
            public static toUnsignedLong(x: number): number;
            /**
             * Returns the unsigned quotient of dividing the first argument by
             * the second where each argument and the result is interpreted as
             * an unsigned value.
             * <p>Note that in two's complement arithmetic, the three other
             * basic arithmetic operations of add, subtract, and multiply are
             * bit-wise identical if the two operands are regarded as both
             * being signed or both being unsigned.  Therefore separate {@code
             * addUnsigned}, etc. methods are not provided.
             */
            // @ts-ignore
            public static divideUnsigned(dividend: number, divisor: number): number;
            /**
             * Returns the unsigned remainder from dividing the first argument
             * by the second where each argument and the result is interpreted
             * as an unsigned value.
             */
            // @ts-ignore
            public static remainderUnsigned(dividend: number, divisor: number): number;
            /**
             * Returns an {@code int} value with at most a single one-bit, in the
             * position of the highest-order ("leftmost") one-bit in the specified
             * {@code int} value.  Returns zero if the specified value has no
             * one-bits in its two's complement binary representation, that is, if it
             * is equal to zero.
             */
            // @ts-ignore
            public static highestOneBit(i: number): number;
            /**
             * Returns an {@code int} value with at most a single one-bit, in the
             * position of the lowest-order ("rightmost") one-bit in the specified
             * {@code int} value.  Returns zero if the specified value has no
             * one-bits in its two's complement binary representation, that is, if it
             * is equal to zero.
             */
            // @ts-ignore
            public static lowestOneBit(i: number): number;
            /**
             * Returns the number of zero bits preceding the highest-order
             * ("leftmost") one-bit in the two's complement binary representation
             * of the specified {@code int} value.  Returns 32 if the
             * specified value has no one-bits in its two's complement representation,
             * in other words if it is equal to zero.
             * <p>Note that this method is closely related to the logarithm base 2.
             * For all positive {@code int} values x:
             * <ul>
             * <li>floor(log<sub>2</sub>(x)) = {@code 31 - numberOfLeadingZeros(x)}
             * <li>ceil(log<sub>2</sub>(x)) = {@code 32 - numberOfLeadingZeros(x - 1)}
             * </ul>
             */
            // @ts-ignore
            public static numberOfLeadingZeros(i: number): number;
            /**
             * Returns the number of zero bits following the lowest-order ("rightmost")
             * one-bit in the two's complement binary representation of the specified
             * {@code int} value.  Returns 32 if the specified value has no
             * one-bits in its two's complement representation, in other words if it is
             * equal to zero.
             */
            // @ts-ignore
            public static numberOfTrailingZeros(i: number): number;
            /**
             * Returns the number of one-bits in the two's complement binary
             * representation of the specified {@code int} value.  This function is
             * sometimes referred to as the <i>population count</i>.
             */
            // @ts-ignore
            public static bitCount(i: number): number;
            /**
             * Returns the value obtained by rotating the two's complement binary
             * representation of the specified {@code int} value left by the
             * specified number of bits.  (Bits shifted out of the left hand, or
             * high-order, side reenter on the right, or low-order.)
             * <p>Note that left rotation with a negative distance is equivalent to
             * right rotation: {@code rotateLeft(val, -distance) == rotateRight(val,
             * distance)}.  Note also that rotation by any multiple of 32 is a
             * no-op, so all but the last five bits of the rotation distance can be
             * ignored, even if the distance is negative: {@code rotateLeft(val,
             * distance) == rotateLeft(val, distance & 0x1F)}.
             */
            // @ts-ignore
            public static rotateLeft(i: number, distance: number): number;
            /**
             * Returns the value obtained by rotating the two's complement binary
             * representation of the specified {@code int} value right by the
             * specified number of bits.  (Bits shifted out of the right hand, or
             * low-order, side reenter on the left, or high-order.)
             * <p>Note that right rotation with a negative distance is equivalent to
             * left rotation: {@code rotateRight(val, -distance) == rotateLeft(val,
             * distance)}.  Note also that rotation by any multiple of 32 is a
             * no-op, so all but the last five bits of the rotation distance can be
             * ignored, even if the distance is negative: {@code rotateRight(val,
             * distance) == rotateRight(val, distance & 0x1F)}.
             */
            // @ts-ignore
            public static rotateRight(i: number, distance: number): number;
            /**
             * Returns the value obtained by reversing the order of the bits in the
             * two's complement binary representation of the specified {@code int}
             * value.
             */
            // @ts-ignore
            public static reverse(i: number): number;
            /**
             * Returns the signum function of the specified {@code int} value.  (The
             * return value is -1 if the specified value is negative; 0 if the
             * specified value is zero; and 1 if the specified value is positive.)
             */
            // @ts-ignore
            public static signum(i: number): number;
            /**
             * Returns the value obtained by reversing the order of the bytes in the
             * two's complement representation of the specified {@code int} value.
             */
            // @ts-ignore
            public static reverseBytes(i: number): number;
            /**
             * Adds two integers together as per the + operator.
             */
            // @ts-ignore
            public static sum(a: number, b: number): number;
            /**
             * Returns the greater of two {@code int} values
             * as if by calling {@link Math#max(int, int) Math.max}.
             */
            // @ts-ignore
            public static max(a: number, b: number): number;
            /**
             * Returns the smaller of two {@code int} values
             * as if by calling {@link Math#min(int, int) Math.min}.
             */
            // @ts-ignore
            public static min(a: number, b: number): number;
        }
    }
}
