declare namespace java {
    namespace text {
        // @ts-ignore
         class SimpleDateFormat extends java.text.DateFormat {
            /**
             * Constructs a <code>SimpleDateFormat</code> using the default pattern and
             * date format symbols for the default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <b>Note:</b> This constructor may not support all locales.
             * For full coverage, use the factory methods in the {@link DateFormat}
             * class.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>SimpleDateFormat</code> using the given pattern and
             * the default date format symbols for the default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <b>Note:</b> This constructor may not support all locales.
             * For full coverage, use the factory methods in the {@link DateFormat}
             * class.
             * <p>This is equivalent to calling
             * {@link #SimpleDateFormat(String, Locale)
             * SimpleDateFormat(pattern, Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            constructor(pattern: string)
            /**
             * Constructs a <code>SimpleDateFormat</code> using the given pattern and
             * the default date format symbols for the given locale.
             * <b>Note:</b> This constructor may not support all locales.
             * For full coverage, use the factory methods in the {@link DateFormat}
             * class.
             */
            // @ts-ignore
            constructor(pattern: string, locale: java.util.Locale)
            /**
             * Constructs a <code>SimpleDateFormat</code> using the given pattern and
             * date format symbols.
             */
            // @ts-ignore
            constructor(pattern: string, formatSymbols: java.text.DateFormatSymbols)
            /**
             * Sets the 100-year period 2-digit years will be interpreted as being in
             * to begin on the date the user specifies.
             */
            // @ts-ignore
            public set2DigitYearStart(startDate: java.util.Date): void;
            /**
             * Returns the beginning date of the 100-year period 2-digit years are interpreted
             * as being within.
             */
            // @ts-ignore
            public get2DigitYearStart(): java.util.Date;
            /**
             * Formats the given <code>Date</code> into a date/time string and appends
             * the result to the given <code>StringBuffer</code>.
             */
            // @ts-ignore
            public format(date: java.util.Date, toAppendTo: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer;
            /**
             * Formats an Object producing an <code>AttributedCharacterIterator</code>.
             * You can use the returned <code>AttributedCharacterIterator</code>
             * to build the resulting String, as well as to determine information
             * about the resulting String.
             * <p>
             * Each attribute key of the AttributedCharacterIterator will be of type
             * <code>DateFormat.Field</code>, with the corresponding attribute value
             * being the same as the attribute key.
             */
            // @ts-ignore
            public formatToCharacterIterator(obj: java.lang.Object): java.text.AttributedCharacterIterator;
            /**
             * Parses text from a string to produce a <code>Date</code>.
             * <p>
             * The method attempts to parse text starting at the index given by
             * <code>pos</code>.
             * If parsing succeeds, then the index of <code>pos</code> is updated
             * to the index after the last character used (parsing does not necessarily
             * use all characters up to the end of the string), and the parsed
             * date is returned. The updated <code>pos</code> can be used to
             * indicate the starting point for the next call to this method.
             * If an error occurs, then the index of <code>pos</code> is not
             * changed, the error index of <code>pos</code> is set to the index of
             * the character where the error occurred, and null is returned.
             * <p>This parsing operation uses the {@link DateFormat#calendar
             * calendar} to produce a {@code Date}. All of the {@code
             * calendar}'s date-time fields are {@linkplain Calendar#clear()
             * cleared} before parsing, and the {@code calendar}'s default
             * values of the date-time fields are used for any missing
             * date-time information. For example, the year value of the
             * parsed {@code Date} is 1970 with {@link GregorianCalendar} if
             * no year value is given from the parsing operation.  The {@code
             * TimeZone} value may be overwritten, depending on the given
             * pattern and the time zone value in {@code text}. Any {@code
             * TimeZone} value that has previously been set by a call to
             * {@link #setTimeZone(java.util.TimeZone) setTimeZone} may need
             * to be restored for further operations.
             */
            // @ts-ignore
            public parse(text: string, pos: java.text.ParsePosition): java.util.Date;
            /**
             * Returns a pattern string describing this date format.
             */
            // @ts-ignore
            public toPattern(): string;
            /**
             * Returns a localized pattern string describing this date format.
             */
            // @ts-ignore
            public toLocalizedPattern(): string;
            /**
             * Applies the given pattern string to this date format.
             */
            // @ts-ignore
            public applyPattern(pattern: string): void;
            /**
             * Applies the given localized pattern string to this date format.
             */
            // @ts-ignore
            public applyLocalizedPattern(pattern: string): void;
            /**
             * Gets a copy of the date and time format symbols of this date format.
             */
            // @ts-ignore
            public getDateFormatSymbols(): java.text.DateFormatSymbols;
            /**
             * Sets the date and time format symbols of this date format.
             */
            // @ts-ignore
            public setDateFormatSymbols(newFormatSymbols: java.text.DateFormatSymbols): void;
            /**
             * Creates a copy of this <code>SimpleDateFormat</code>. This also
             * clones the format's date format symbols.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Returns the hash code value for this <code>SimpleDateFormat</code> object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares the given object with this <code>SimpleDateFormat</code> for
             * equality.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
        }
    }
}
