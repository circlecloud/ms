// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
         class DecimalFormat extends java.text.NumberFormat {
            /**
             * Creates a DecimalFormat using the default pattern and symbols
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * This is a convenient way to obtain a
             * DecimalFormat when internationalization is not the main concern.
             * <p>
             * To obtain standard formats for a given locale, use the factory methods
             * on NumberFormat such as getNumberInstance. These factories will
             * return the most appropriate sub-class of NumberFormat for a given
             * locale.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a DecimalFormat using the given pattern and the symbols
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * This is a convenient way to obtain a
             * DecimalFormat when internationalization is not the main concern.
             * <p>
             * To obtain standard formats for a given locale, use the factory methods
             * on NumberFormat such as getNumberInstance. These factories will
             * return the most appropriate sub-class of NumberFormat for a given
             * locale.
             */
            // @ts-ignore
            constructor(pattern: string)
            /**
             * Creates a DecimalFormat using the given pattern and symbols.
             * Use this constructor when you need to completely customize the
             * behavior of the format.
             * <p>
             * To obtain standard formats for a given
             * locale, use the factory methods on NumberFormat such as
             * getInstance or getCurrencyInstance. If you need only minor adjustments
             * to a standard format, you can modify the format returned by
             * a NumberFormat factory method.
             */
            // @ts-ignore
            constructor(pattern: string, symbols: java.text.DecimalFormatSymbols)
            /**
             * Formats a number and appends the resulting text to the given string
             * buffer.
             * The number can be of any subclass of {@link java.lang.Number}.
             * <p>
             * This implementation uses the maximum precision permitted.
             */
            // @ts-ignore
            public format(number: java.lang.Object, toAppendTo: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer;
            /**
             * Formats a double to produce a string.
             */
            // @ts-ignore
            public format(number: number, result: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
            /**
             * Format a long to produce a string.
             */
            // @ts-ignore
            public format(number: number, result: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
            /**
             * Formats an Object producing an <code>AttributedCharacterIterator</code>.
             * You can use the returned <code>AttributedCharacterIterator</code>
             * to build the resulting String, as well as to determine information
             * about the resulting String.
             * <p>
             * Each attribute key of the AttributedCharacterIterator will be of type
             * <code>NumberFormat.Field</code>, with the attribute value being the
             * same as the attribute key.
             */
            // @ts-ignore
            public formatToCharacterIterator(obj: java.lang.Object): java.text.AttributedCharacterIterator;
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
             * The subclass returned depends on the value of {@link #isParseBigDecimal}
             * as well as on the string being parsed.
             * <ul>
             * <li>If <code>isParseBigDecimal()</code> is false (the default),
             * most integer values are returned as <code>Long</code>
             * objects, no matter how they are written: <code>"17"</code> and
             * <code>"17.000"</code> both parse to <code>Long(17)</code>.
             * Values that cannot fit into a <code>Long</code> are returned as
             * <code>Double</code>s. This includes values with a fractional part,
             * infinite values, <code>NaN</code>, and the value -0.0.
             * <code>DecimalFormat</code> does <em>not</em> decide whether to
             * return a <code>Double</code> or a <code>Long</code> based on the
             * presence of a decimal separator in the source string. Doing so
             * would prevent integers that overflow the mantissa of a double,
             * such as <code>"-9,223,372,036,854,775,808.00"</code>, from being
             * parsed accurately.
             * <p>
             * Callers may use the <code>Number</code> methods
             * <code>doubleValue</code>, <code>longValue</code>, etc., to obtain
             * the type they want.
             * <li>If <code>isParseBigDecimal()</code> is true, values are returned
             * as <code>BigDecimal</code> objects. The values are the ones
             * constructed by {@link java.math.BigDecimal#BigDecimal(String)}
             * for corresponding strings in locale-independent format. The
             * special cases negative and positive infinity and NaN are returned
             * as <code>Double</code> instances holding the values of the
             * corresponding <code>Double</code> constants.
             * </ul>
             * <p>
             * <code>DecimalFormat</code> parses all Unicode characters that represent
             * decimal digits, as defined by <code>Character.digit()</code>. In
             * addition, <code>DecimalFormat</code> also recognizes as digits the ten
             * consecutive characters starting with the localized zero digit defined in
             * the <code>DecimalFormatSymbols</code> object.
             */
            // @ts-ignore
            public parse(text: string, pos: java.text.ParsePosition): java.lang.Number;
            /**
             * Returns a copy of the decimal format symbols, which is generally not
             * changed by the programmer or user.
             */
            // @ts-ignore
            public getDecimalFormatSymbols(): java.text.DecimalFormatSymbols;
            /**
             * Sets the decimal format symbols, which is generally not changed
             * by the programmer or user.
             */
            // @ts-ignore
            public setDecimalFormatSymbols(newSymbols: java.text.DecimalFormatSymbols): void;
            /**
             * Get the positive prefix.
             * <P>Examples: +123, $123, sFr123
             */
            // @ts-ignore
            public getPositivePrefix(): string;
            /**
             * Set the positive prefix.
             * <P>Examples: +123, $123, sFr123
             */
            // @ts-ignore
            public setPositivePrefix(newValue: string): void;
            /**
             * Get the negative prefix.
             * <P>Examples: -123, ($123) (with negative suffix), sFr-123
             */
            // @ts-ignore
            public getNegativePrefix(): string;
            /**
             * Set the negative prefix.
             * <P>Examples: -123, ($123) (with negative suffix), sFr-123
             */
            // @ts-ignore
            public setNegativePrefix(newValue: string): void;
            /**
             * Get the positive suffix.
             * <P>Example: 123%
             */
            // @ts-ignore
            public getPositiveSuffix(): string;
            /**
             * Set the positive suffix.
             * <P>Example: 123%
             */
            // @ts-ignore
            public setPositiveSuffix(newValue: string): void;
            /**
             * Get the negative suffix.
             * <P>Examples: -123%, ($123) (with positive suffixes)
             */
            // @ts-ignore
            public getNegativeSuffix(): string;
            /**
             * Set the negative suffix.
             * <P>Examples: 123%
             */
            // @ts-ignore
            public setNegativeSuffix(newValue: string): void;
            /**
             * Gets the multiplier for use in percent, per mille, and similar
             * formats.
             */
            // @ts-ignore
            public getMultiplier(): number;
            /**
             * Sets the multiplier for use in percent, per mille, and similar
             * formats.
             * For a percent format, set the multiplier to 100 and the suffixes to
             * have '%' (for Arabic, use the Arabic percent sign).
             * For a per mille format, set the multiplier to 1000 and the suffixes to
             * have '&#92;u2030'.
             * <P>Example: with multiplier 100, 1.23 is formatted as "123", and
             * "123" is parsed into 1.23.
             */
            // @ts-ignore
            public setMultiplier(newValue: number): void;
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            public setGroupingUsed(newValue: boolean): void;
            /**
             * Return the grouping size. Grouping size is the number of digits between
             * grouping separators in the integer portion of a number.  For example,
             * in the number "123,456.78", the grouping size is 3.
             */
            // @ts-ignore
            public getGroupingSize(): number;
            /**
             * Set the grouping size. Grouping size is the number of digits between
             * grouping separators in the integer portion of a number.  For example,
             * in the number "123,456.78", the grouping size is 3.
             * <br>
             * The value passed in is converted to a byte, which may lose information.
             */
            // @ts-ignore
            public setGroupingSize(newValue: number): void;
            /**
             * Allows you to get the behavior of the decimal separator with integers.
             * (The decimal separator will always appear with decimals.)
             * <P>Example: Decimal ON: 12345 &rarr; 12345.; OFF: 12345 &rarr; 12345
             */
            // @ts-ignore
            public isDecimalSeparatorAlwaysShown(): boolean;
            /**
             * Allows you to set the behavior of the decimal separator with integers.
             * (The decimal separator will always appear with decimals.)
             * <P>Example: Decimal ON: 12345 &rarr; 12345.; OFF: 12345 &rarr; 12345
             */
            // @ts-ignore
            public setDecimalSeparatorAlwaysShown(newValue: boolean): void;
            /**
             * Returns whether the {@link #parse(java.lang.String, java.text.ParsePosition)}
             * method returns <code>BigDecimal</code>. The default value is false.
             */
            // @ts-ignore
            public isParseBigDecimal(): boolean;
            /**
             * Sets whether the {@link #parse(java.lang.String, java.text.ParsePosition)}
             * method returns <code>BigDecimal</code>.
             */
            // @ts-ignore
            public setParseBigDecimal(newValue: boolean): void;
            /**
             * Standard override; no change in semantics.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Overrides equals
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Overrides hashCode
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Synthesizes a pattern string that represents the current state
             * of this Format object.
             */
            // @ts-ignore
            public toPattern(): string;
            /**
             * Synthesizes a localized pattern string that represents the current
             * state of this Format object.
             */
            // @ts-ignore
            public toLocalizedPattern(): string;
            /**
             * Apply the given pattern to this Format object.  A pattern is a
             * short-hand specification for the various formatting properties.
             * These properties can also be changed individually through the
             * various setter methods.
             * <p>
             * There is no limit to integer digits set
             * by this routine, since that is the typical end-user desire;
             * use setMaximumInteger if you want to set a real value.
             * For negative numbers, use a second pattern, separated by a semicolon
             * <P>Example <code>"#,#00.0#"</code> &rarr; 1,234.56
             * <P>This means a minimum of 2 integer digits, 1 fraction digit, and
             * a maximum of 2 fraction digits.
             * <p>Example: <code>"#,#00.0#;(#,#00.0#)"</code> for negatives in
             * parentheses.
             * <p>In negative patterns, the minimum and maximum counts are ignored;
             * these are presumed to be set in the positive pattern.
             */
            // @ts-ignore
            public applyPattern(pattern: string): void;
            /**
             * Apply the given pattern to this Format object.  The pattern
             * is assumed to be in a localized notation. A pattern is a
             * short-hand specification for the various formatting properties.
             * These properties can also be changed individually through the
             * various setter methods.
             * <p>
             * There is no limit to integer digits set
             * by this routine, since that is the typical end-user desire;
             * use setMaximumInteger if you want to set a real value.
             * For negative numbers, use a second pattern, separated by a semicolon
             * <P>Example <code>"#,#00.0#"</code> &rarr; 1,234.56
             * <P>This means a minimum of 2 integer digits, 1 fraction digit, and
             * a maximum of 2 fraction digits.
             * <p>Example: <code>"#,#00.0#;(#,#00.0#)"</code> for negatives in
             * parentheses.
             * <p>In negative patterns, the minimum and maximum counts are ignored;
             * these are presumed to be set in the positive pattern.
             */
            // @ts-ignore
            public applyLocalizedPattern(pattern: string): void;
            /**
             * Sets the maximum number of digits allowed in the integer portion of a
             * number.
             * For formatting numbers other than <code>BigInteger</code> and
             * <code>BigDecimal</code> objects, the lower of <code>newValue</code> and
             * 309 is used. Negative input values are replaced with 0.
             */
            // @ts-ignore
            public setMaximumIntegerDigits(newValue: number): void;
            /**
             * Sets the minimum number of digits allowed in the integer portion of a
             * number.
             * For formatting numbers other than <code>BigInteger</code> and
             * <code>BigDecimal</code> objects, the lower of <code>newValue</code> and
             * 309 is used. Negative input values are replaced with 0.
             */
            // @ts-ignore
            public setMinimumIntegerDigits(newValue: number): void;
            /**
             * Sets the maximum number of digits allowed in the fraction portion of a
             * number.
             * For formatting numbers other than <code>BigInteger</code> and
             * <code>BigDecimal</code> objects, the lower of <code>newValue</code> and
             * 340 is used. Negative input values are replaced with 0.
             */
            // @ts-ignore
            public setMaximumFractionDigits(newValue: number): void;
            /**
             * Sets the minimum number of digits allowed in the fraction portion of a
             * number.
             * For formatting numbers other than <code>BigInteger</code> and
             * <code>BigDecimal</code> objects, the lower of <code>newValue</code> and
             * 340 is used. Negative input values are replaced with 0.
             */
            // @ts-ignore
            public setMinimumFractionDigits(newValue: number): void;
            /**
             * Gets the maximum number of digits allowed in the integer portion of a
             * number.
             * For formatting numbers other than <code>BigInteger</code> and
             * <code>BigDecimal</code> objects, the lower of the return value and
             * 309 is used.
             */
            // @ts-ignore
            public getMaximumIntegerDigits(): number;
            /**
             * Gets the minimum number of digits allowed in the integer portion of a
             * number.
             * For formatting numbers other than <code>BigInteger</code> and
             * <code>BigDecimal</code> objects, the lower of the return value and
             * 309 is used.
             */
            // @ts-ignore
            public getMinimumIntegerDigits(): number;
            /**
             * Gets the maximum number of digits allowed in the fraction portion of a
             * number.
             * For formatting numbers other than <code>BigInteger</code> and
             * <code>BigDecimal</code> objects, the lower of the return value and
             * 340 is used.
             */
            // @ts-ignore
            public getMaximumFractionDigits(): number;
            /**
             * Gets the minimum number of digits allowed in the fraction portion of a
             * number.
             * For formatting numbers other than <code>BigInteger</code> and
             * <code>BigDecimal</code> objects, the lower of the return value and
             * 340 is used.
             */
            // @ts-ignore
            public getMinimumFractionDigits(): number;
            /**
             * Gets the currency used by this decimal format when formatting
             * currency values.
             * The currency is obtained by calling
             * {@link DecimalFormatSymbols#getCurrency DecimalFormatSymbols.getCurrency}
             * on this number format's symbols.
             */
            // @ts-ignore
            public getCurrency(): java.util.Currency;
            /**
             * Sets the currency used by this number format when formatting
             * currency values. This does not update the minimum or maximum
             * number of fraction digits used by the number format.
             * The currency is set by calling
             * {@link DecimalFormatSymbols#setCurrency DecimalFormatSymbols.setCurrency}
             * on this number format's symbols.
             */
            // @ts-ignore
            public setCurrency(currency: java.util.Currency): void;
            /**
             * Gets the {@link java.math.RoundingMode} used in this DecimalFormat.
             */
            // @ts-ignore
            public getRoundingMode(): java.math.RoundingMode;
            /**
             * Sets the {@link java.math.RoundingMode} used in this DecimalFormat.
             */
            // @ts-ignore
            public setRoundingMode(roundingMode: java.math.RoundingMode): void;
        }
    }
}
