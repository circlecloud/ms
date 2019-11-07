// @ts-nocheck
declare namespace java {
    namespace math {
        // @ts-ignore
         class MathContext extends java.lang.Object {
            /**
             * Constructs a new {@code MathContext} with the specified
             * precision and the {@link RoundingMode#HALF_UP HALF_UP} rounding
             * mode.
             */
            // @ts-ignore
            constructor(setPrecision: number)
            /**
             * Constructs a new {@code MathContext} with a specified
             * precision and rounding mode.
             */
            // @ts-ignore
            constructor(setPrecision: number, setRoundingMode: java.math.RoundingMode)
            /**
             * Constructs a new {@code MathContext} from a string.
             * The string must be in the same format as that produced by the
             * {@link #toString} method.
             * <p>An {@code IllegalArgumentException} is thrown if the precision
             * section of the string is out of range ({@code < 0}) or the string is
             * not in the format created by the {@link #toString} method.
             */
            // @ts-ignore
            constructor(val: string)
            // @ts-ignore
            public static UNLIMITED: java.math.MathContext;
            // @ts-ignore
            public static DECIMAL32: java.math.MathContext;
            // @ts-ignore
            public static DECIMAL64: java.math.MathContext;
            // @ts-ignore
            public static DECIMAL128: java.math.MathContext;
            /**
             * Returns the {@code precision} setting.
             * This value is always non-negative.
             */
            // @ts-ignore
            public getPrecision(): number;
            /**
             * Returns the roundingMode setting.
             * This will be one of
             * {@link  RoundingMode#CEILING},
             * {@link  RoundingMode#DOWN},
             * {@link  RoundingMode#FLOOR},
             * {@link  RoundingMode#HALF_DOWN},
             * {@link  RoundingMode#HALF_EVEN},
             * {@link  RoundingMode#HALF_UP},
             * {@link  RoundingMode#UNNECESSARY}, or
             * {@link  RoundingMode#UP}.
             */
            // @ts-ignore
            public getRoundingMode(): java.math.RoundingMode;
            /**
             * Compares this {@code MathContext} with the specified
             * {@code Object} for equality.
             */
            // @ts-ignore
            public equals(x: java.lang.Object): boolean;
            /**
             * Returns the hash code for this {@code MathContext}.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the string representation of this {@code MathContext}.
             * The {@code String} returned represents the settings of the
             * {@code MathContext} object as two space-delimited words
             * (separated by a single space character, <tt>'&#92;u0020'</tt>,
             * and with no leading or trailing white space), as follows:
             * <ol>
             * <li>
             * The string {@code "precision="}, immediately followed
             * by the value of the precision setting as a numeric string as if
             * generated by the {@link Integer#toString(int) Integer.toString}
             * method.
             * <li>
             * The string {@code "roundingMode="}, immediately
             * followed by the value of the {@code roundingMode} setting as a
             * word.  This word will be the same as the name of the
             * corresponding public constant in the {@link RoundingMode}
             * enum.
             * </ol>
             * <p>
             * For example:
             * <pre>
             * precision=9 roundingMode=HALF_UP
             * </pre>
             * Additional words may be appended to the result of
             * {@code toString} in the future if more properties are added to
             * this class.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
