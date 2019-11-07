// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
        abstract class NumberFormat extends java.text.Format {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static INTEGER_FIELD: number;
            // @ts-ignore
            public static FRACTION_FIELD: number;
            /**
             * Formats a number and appends the resulting text to the given string
             * buffer.
             * The number can be of any subclass of {@link java.lang.Number}.
             * <p>
             * This implementation extracts the number's value using
             * {@link java.lang.Number#longValue()} for all integral type values that
             * can be converted to <code>long</code> without loss of information,
             * including <code>BigInteger</code> values with a
             * {@link java.math.BigInteger#bitLength() bit length} of less than 64,
             * and {@link java.lang.Number#doubleValue()} for all other types. It
             * then calls
             * {@link #format(long,java.lang.StringBuffer,java.text.FieldPosition)}
             * or {@link #format(double,java.lang.StringBuffer,java.text.FieldPosition)}.
             * This may result in loss of magnitude information and precision for
             * <code>BigInteger</code> and <code>BigDecimal</code> values.
             */
            // @ts-ignore
            public format(number: java.lang.Object, toAppendTo: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer;
            /**
             * Parses text from a string to produce a <code>Number</code>.
             * <p>
             * The method attempts to parse text starting at the index given by
             * <code>pos</code>.
             * If parsing succeeds, then the index of <code>pos</code> is updated
             * to the index after the last character used (parsing does not necessarily
             * use all characters up to the end of the string), and the parsed
             * number is returned. The updated <code>pos</code> can be used to
             * indicate the starting point for the next call to this method.
             * If an error occurs, then the index of <code>pos</code> is not
             * changed, the error index of <code>pos</code> is set to the index of
             * the character where the error occurred, and null is returned.
             * <p>
             * See the {@link #parse(String, ParsePosition)} method for more information
             * on number parsing.
             */
            // @ts-ignore
            public parseObject(source: string, pos: java.text.ParsePosition): java.lang.Object;
            /**
             * Specialization of format.
             */
            // @ts-ignore
            public format(number: number): string;
            /**
             * Specialization of format.
             */
            // @ts-ignore
            public format(number: number): string;
            /**
             * Returns a Long if possible (e.g., within the range [Long.MIN_VALUE,
             * Long.MAX_VALUE] and with no decimals), otherwise a Double.
             * If IntegerOnly is set, will stop at a decimal
             * point (or equivalent; e.g., for rational numbers "1 2/3", will stop
             * after the 1).
             * Does not throw an exception; if no object can be parsed, index is
             * unchanged!
             */
            // @ts-ignore
            public abstract parse(source: string, parsePosition: java.text.ParsePosition): java.lang.Number;
            /**
             * Parses text from the beginning of the given string to produce a number.
             * The method may not use the entire text of the given string.
             * <p>
             * See the {@link #parse(String, ParsePosition)} method for more information
             * on number parsing.
             */
            // @ts-ignore
            public parse(source: string): java.lang.Number;
            /**
             * Returns true if this format will parse numbers as integers only.
             * For example in the English locale, with ParseIntegerOnly true, the
             * string "1234." would be parsed as the integer value 1234 and parsing
             * would stop at the "." character.  Of course, the exact format accepted
             * by the parse operation is locale dependant and determined by sub-classes
             * of NumberFormat.
             */
            // @ts-ignore
            public isParseIntegerOnly(): boolean;
            /**
             * Sets whether or not numbers should be parsed as integers only.
             */
            // @ts-ignore
            public setParseIntegerOnly(value: boolean): void;
            /**
             * Returns a general-purpose number format for the current default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * This is the same as calling
             * {@link #getNumberInstance() getNumberInstance()}.
             */
            // @ts-ignore
            public static getInstance(): java.text.NumberFormat;
            /**
             * Returns a general-purpose number format for the specified locale.
             * This is the same as calling
             * {@link #getNumberInstance(java.util.Locale) getNumberInstance(inLocale)}.
             */
            // @ts-ignore
            public static getInstance(inLocale: java.util.Locale): java.text.NumberFormat;
            /**
             * Returns a general-purpose number format for the current default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getNumberInstance(Locale)
             * getNumberInstance(Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getNumberInstance(): java.text.NumberFormat;
            /**
             * Returns a general-purpose number format for the specified locale.
             */
            // @ts-ignore
            public static getNumberInstance(inLocale: java.util.Locale): java.text.NumberFormat;
            /**
             * Returns an integer number format for the current default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale. The
             * returned number format is configured to round floating point numbers
             * to the nearest integer using half-even rounding (see {@link
             * java.math.RoundingMode#HALF_EVEN RoundingMode.HALF_EVEN}) for formatting,
             * and to parse only the integer part of an input string (see {@link
             * #isParseIntegerOnly isParseIntegerOnly}).
             * <p>This is equivalent to calling
             * {@link #getIntegerInstance(Locale)
             * getIntegerInstance(Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getIntegerInstance(): java.text.NumberFormat;
            /**
             * Returns an integer number format for the specified locale. The
             * returned number format is configured to round floating point numbers
             * to the nearest integer using half-even rounding (see {@link
             * java.math.RoundingMode#HALF_EVEN RoundingMode.HALF_EVEN}) for formatting,
             * and to parse only the integer part of an input string (see {@link
             * #isParseIntegerOnly isParseIntegerOnly}).
             */
            // @ts-ignore
            public static getIntegerInstance(inLocale: java.util.Locale): java.text.NumberFormat;
            /**
             * Returns a currency format for the current default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getCurrencyInstance(Locale)
             * getCurrencyInstance(Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getCurrencyInstance(): java.text.NumberFormat;
            /**
             * Returns a currency format for the specified locale.
             */
            // @ts-ignore
            public static getCurrencyInstance(inLocale: java.util.Locale): java.text.NumberFormat;
            /**
             * Returns a percentage format for the current default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getPercentInstance(Locale)
             * getPercentInstance(Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getPercentInstance(): java.text.NumberFormat;
            /**
             * Returns a percentage format for the specified locale.
             */
            // @ts-ignore
            public static getPercentInstance(inLocale: java.util.Locale): java.text.NumberFormat;
            /**
             * Returns an array of all locales for which the
             * <code>get*Instance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported by the Java
             * runtime and by installed
             * {@link java.text.spi.NumberFormatProvider NumberFormatProvider} implementations.
             * It must contain at least a <code>Locale</code> instance equal to
             * {@link java.util.Locale#US Locale.US}.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[];
            /**
             * Overrides hashCode.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Overrides equals.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Overrides Cloneable.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Returns true if grouping is used in this format. For example, in the
             * English locale, with grouping on, the number 1234567 might be formatted
             * as "1,234,567". The grouping separator as well as the size of each group
             * is locale dependant and is determined by sub-classes of NumberFormat.
             */
            // @ts-ignore
            public isGroupingUsed(): boolean;
            /**
             * Set whether or not grouping will be used in this format.
             */
            // @ts-ignore
            public setGroupingUsed(newValue: boolean): void;
            /**
             * Returns the maximum number of digits allowed in the integer portion of a
             * number.
             */
            // @ts-ignore
            public getMaximumIntegerDigits(): number;
            /**
             * Sets the maximum number of digits allowed in the integer portion of a
             * number. maximumIntegerDigits must be &ge; minimumIntegerDigits.  If the
             * new value for maximumIntegerDigits is less than the current value
             * of minimumIntegerDigits, then minimumIntegerDigits will also be set to
             * the new value.
             */
            // @ts-ignore
            public setMaximumIntegerDigits(newValue: number): void;
            /**
             * Returns the minimum number of digits allowed in the integer portion of a
             * number.
             */
            // @ts-ignore
            public getMinimumIntegerDigits(): number;
            /**
             * Sets the minimum number of digits allowed in the integer portion of a
             * number. minimumIntegerDigits must be &le; maximumIntegerDigits.  If the
             * new value for minimumIntegerDigits exceeds the current value
             * of maximumIntegerDigits, then maximumIntegerDigits will also be set to
             * the new value
             */
            // @ts-ignore
            public setMinimumIntegerDigits(newValue: number): void;
            /**
             * Returns the maximum number of digits allowed in the fraction portion of a
             * number.
             */
            // @ts-ignore
            public getMaximumFractionDigits(): number;
            /**
             * Sets the maximum number of digits allowed in the fraction portion of a
             * number. maximumFractionDigits must be &ge; minimumFractionDigits.  If the
             * new value for maximumFractionDigits is less than the current value
             * of minimumFractionDigits, then minimumFractionDigits will also be set to
             * the new value.
             */
            // @ts-ignore
            public setMaximumFractionDigits(newValue: number): void;
            /**
             * Returns the minimum number of digits allowed in the fraction portion of a
             * number.
             */
            // @ts-ignore
            public getMinimumFractionDigits(): number;
            /**
             * Sets the minimum number of digits allowed in the fraction portion of a
             * number. minimumFractionDigits must be &le; maximumFractionDigits.  If the
             * new value for minimumFractionDigits exceeds the current value
             * of maximumFractionDigits, then maximumIntegerDigits will also be set to
             * the new value
             */
            // @ts-ignore
            public setMinimumFractionDigits(newValue: number): void;
            /**
             * Gets the currency used by this number format when formatting
             * currency values. The initial value is derived in a locale dependent
             * way. The returned value may be null if no valid
             * currency could be determined and no currency has been set using
             * {@link #setCurrency(java.util.Currency) setCurrency}.
             * <p>
             * The default implementation throws
             * <code>UnsupportedOperationException</code>.
             */
            // @ts-ignore
            public getCurrency(): java.util.Currency;
            /**
             * Sets the currency used by this number format when formatting
             * currency values. This does not update the minimum or maximum
             * number of fraction digits used by the number format.
             * <p>
             * The default implementation throws
             * <code>UnsupportedOperationException</code>.
             */
            // @ts-ignore
            public setCurrency(currency: java.util.Currency): void;
            /**
             * Gets the {@link java.math.RoundingMode} used in this NumberFormat.
             * The default implementation of this method in NumberFormat
             * always throws {@link java.lang.UnsupportedOperationException}.
             * Subclasses which handle different rounding modes should override
             * this method.
             */
            // @ts-ignore
            public getRoundingMode(): java.math.RoundingMode;
            /**
             * Sets the {@link java.math.RoundingMode} used in this NumberFormat.
             * The default implementation of this method in NumberFormat always
             * throws {@link java.lang.UnsupportedOperationException}.
             * Subclasses which handle different rounding modes should override
             * this method.
             */
            // @ts-ignore
            public setRoundingMode(roundingMode: java.math.RoundingMode): void;
        }
    }
}
