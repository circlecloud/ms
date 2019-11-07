// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Short extends java.lang.Number {
            /**
             * Constructs a newly allocated {@code Short} object that
             * represents the specified {@code short} value.
             */
            // @ts-ignore
            constructor(value: number)
            /**
             * Constructs a newly allocated {@code Short} object that
             * represents the {@code short} value indicated by the
             * {@code String} parameter. The string is converted to a
             * {@code short} value in exactly the manner used by the
             * {@code parseShort} method for radix 10.
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
             * Returns a new {@code String} object representing the
             * specified {@code short}. The radix is assumed to be 10.
             */
            // @ts-ignore
            public static toString(s: number): string;
            /**
             * Parses the string argument as a signed {@code short} in the
             * radix specified by the second argument. The characters in the
             * string must all be digits, of the specified radix (as
             * determined by whether {@link java.lang.Character#digit(char,
             * int)} returns a nonnegative value) except that the first
             * character may be an ASCII minus sign {@code '-'}
             * ({@code '\u002D'}) to indicate a negative value or an
             * ASCII plus sign {@code '+'} ({@code '\u002B'}) to
             * indicate a positive value.  The resulting {@code short} value
             * is returned.
             * <p>An exception of type {@code NumberFormatException} is
             * thrown if any of the following situations occurs:
             * <ul>
             * <li> The first argument is {@code null} or is a string of
             * length zero.
             * <li> The radix is either smaller than {@link
             * java.lang.Character#MIN_RADIX} or larger than {@link
             * java.lang.Character#MAX_RADIX}.
             * <li> Any character of the string is not a digit of the
             * specified radix, except that the first character may be a minus
             * sign {@code '-'} ({@code '\u002D'}) or plus sign
             * {@code '+'} ({@code '\u002B'}) provided that the
             * string is longer than length 1.
             * <li> The value represented by the string is not a value of type
             * {@code short}.
             * </ul>
             */
            // @ts-ignore
            public static parseShort(s: string, radix: number): number;
            /**
             * Parses the string argument as a signed decimal {@code
             * short}. The characters in the string must all be decimal
             * digits, except that the first character may be an ASCII minus
             * sign {@code '-'} ({@code '\u002D'}) to indicate a
             * negative value or an ASCII plus sign {@code '+'}
             * ({@code '\u002B'}) to indicate a positive value.  The
             * resulting {@code short} value is returned, exactly as if the
             * argument and the radix 10 were given as arguments to the {@link
             * #parseShort(java.lang.String, int)} method.
             */
            // @ts-ignore
            public static parseShort(s: string): number;
            /**
             * Returns a {@code Short} object holding the value
             * extracted from the specified {@code String} when parsed
             * with the radix given by the second argument. The first argument
             * is interpreted as representing a signed {@code short} in
             * the radix specified by the second argument, exactly as if the
             * argument were given to the {@link #parseShort(java.lang.String,
             * int)} method. The result is a {@code Short} object that
             * represents the {@code short} value specified by the string.
             * <p>In other words, this method returns a {@code Short} object
             * equal to the value of:
             * <blockquote>
             * {@code new Short(Short.parseShort(s, radix))}
             * </blockquote>
             */
            // @ts-ignore
            public static valueOf(s: string, radix: number): java.lang.Short;
            /**
             * Returns a {@code Short} object holding the
             * value given by the specified {@code String}. The argument
             * is interpreted as representing a signed decimal
             * {@code short}, exactly as if the argument were given to
             * the {@link #parseShort(java.lang.String)} method. The result is
             * a {@code Short} object that represents the
             * {@code short} value specified by the string.
             * <p>In other words, this method returns a {@code Short} object
             * equal to the value of:
             * <blockquote>
             * {@code new Short(Short.parseShort(s))}
             * </blockquote>
             */
            // @ts-ignore
            public static valueOf(s: string): java.lang.Short;
            /**
             * Returns a {@code Short} instance representing the specified
             * {@code short} value.
             * If a new {@code Short} instance is not required, this method
             * should generally be used in preference to the constructor
             * {@link #Short(short)}, as this method is likely to yield
             * significantly better space and time performance by caching
             * frequently requested values.
             * This method will always cache values in the range -128 to 127,
             * inclusive, and may cache other values outside of this range.
             */
            // @ts-ignore
            public static valueOf(s: number): java.lang.Short;
            /**
             * Decodes a {@code String} into a {@code Short}.
             * Accepts decimal, hexadecimal, and octal numbers given by
             * the following grammar:
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
             * Short.parseShort} method with the indicated radix (10, 16, or
             * 8).  This sequence of characters must represent a positive
             * value or a {@link NumberFormatException} will be thrown.  The
             * result is negated if first character of the specified {@code
             * String} is the minus sign.  No whitespace characters are
             * permitted in the {@code String}.
             */
            // @ts-ignore
            public static decode(nm: string): java.lang.Short;
            /**
             * Returns the value of this {@code Short} as a {@code byte} after
             * a narrowing primitive conversion.
             */
            // @ts-ignore
            public byteValue(): number;
            /**
             * Returns the value of this {@code Short} as a
             * {@code short}.
             */
            // @ts-ignore
            public shortValue(): number;
            /**
             * Returns the value of this {@code Short} as an {@code int} after
             * a widening primitive conversion.
             */
            // @ts-ignore
            public intValue(): number;
            /**
             * Returns the value of this {@code Short} as a {@code long} after
             * a widening primitive conversion.
             */
            // @ts-ignore
            public longValue(): number;
            /**
             * Returns the value of this {@code Short} as a {@code float}
             * after a widening primitive conversion.
             */
            // @ts-ignore
            public floatValue(): number;
            /**
             * Returns the value of this {@code Short} as a {@code double}
             * after a widening primitive conversion.
             */
            // @ts-ignore
            public doubleValue(): number;
            /**
             * Returns a {@code String} object representing this
             * {@code Short}'s value.  The value is converted to signed
             * decimal representation and returned as a string, exactly as if
             * the {@code short} value were given as an argument to the
             * {@link java.lang.Short#toString(short)} method.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a hash code for this {@code Short}; equal to the result
             * of invoking {@code intValue()}.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a hash code for a {@code short} value; compatible with
             * {@code Short.hashCode()}.
             */
            // @ts-ignore
            public static hashCode(value: number): number;
            /**
             * Compares this object to the specified object.  The result is
             * {@code true} if and only if the argument is not
             * {@code null} and is a {@code Short} object that
             * contains the same {@code short} value as this object.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Compares two {@code Short} objects numerically.
             */
            // @ts-ignore
            public compareTo(anotherShort: java.lang.Short): number;
            /**
             * Compares two {@code short} values numerically.
             * The value returned is identical to what would be returned by:
             * <pre>
             * Short.valueOf(x).compareTo(Short.valueOf(y))
             * </pre>
             */
            // @ts-ignore
            public static compare(x: number, y: number): number;
            /**
             * Returns the value obtained by reversing the order of the bytes in the
             * two's complement representation of the specified {@code short} value.
             */
            // @ts-ignore
            public static reverseBytes(i: number): number;
            /**
             * Converts the argument to an {@code int} by an unsigned
             * conversion.  In an unsigned conversion to an {@code int}, the
             * high-order 16 bits of the {@code int} are zero and the
             * low-order 16 bits are equal to the bits of the {@code short} argument.
             * Consequently, zero and positive {@code short} values are mapped
             * to a numerically equal {@code int} value and negative {@code
             * short} values are mapped to an {@code int} value equal to the
             * input plus 2<sup>16</sup>.
             */
            // @ts-ignore
            public static toUnsignedInt(x: number): number;
            /**
             * Converts the argument to a {@code long} by an unsigned
             * conversion.  In an unsigned conversion to a {@code long}, the
             * high-order 48 bits of the {@code long} are zero and the
             * low-order 16 bits are equal to the bits of the {@code short} argument.
             * Consequently, zero and positive {@code short} values are mapped
             * to a numerically equal {@code long} value and negative {@code
             * short} values are mapped to a {@code long} value equal to the
             * input plus 2<sup>16</sup>.
             */
            // @ts-ignore
            public static toUnsignedLong(x: number): number;
        }
    }
}
