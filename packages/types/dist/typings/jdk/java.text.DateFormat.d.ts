declare namespace java {
    namespace text {
        // @ts-ignore
        abstract class DateFormat extends java.text.Format {
            /**
             * Create a new date format.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected calendar: java.util.Calendar;
            // @ts-ignore
            protected numberFormat: java.text.NumberFormat;
            // @ts-ignore
            public static ERA_FIELD: number;
            // @ts-ignore
            public static YEAR_FIELD: number;
            // @ts-ignore
            public static MONTH_FIELD: number;
            // @ts-ignore
            public static DATE_FIELD: number;
            // @ts-ignore
            public static HOUR_OF_DAY1_FIELD: number;
            // @ts-ignore
            public static HOUR_OF_DAY0_FIELD: number;
            // @ts-ignore
            public static MINUTE_FIELD: number;
            // @ts-ignore
            public static SECOND_FIELD: number;
            // @ts-ignore
            public static MILLISECOND_FIELD: number;
            // @ts-ignore
            public static DAY_OF_WEEK_FIELD: number;
            // @ts-ignore
            public static DAY_OF_YEAR_FIELD: number;
            // @ts-ignore
            public static DAY_OF_WEEK_IN_MONTH_FIELD: number;
            // @ts-ignore
            public static WEEK_OF_YEAR_FIELD: number;
            // @ts-ignore
            public static WEEK_OF_MONTH_FIELD: number;
            // @ts-ignore
            public static AM_PM_FIELD: number;
            // @ts-ignore
            public static HOUR1_FIELD: number;
            // @ts-ignore
            public static HOUR0_FIELD: number;
            // @ts-ignore
            public static TIMEZONE_FIELD: number;
            // @ts-ignore
            public static FULL: number;
            // @ts-ignore
            public static LONG: number;
            // @ts-ignore
            public static MEDIUM: number;
            // @ts-ignore
            public static SHORT: number;
            // @ts-ignore
            public static DEFAULT: number;
            /**
             * Overrides Format.
             * Formats a time object into a time string. Examples of time objects
             * are a time value expressed in milliseconds and a Date object.
             */
            // @ts-ignore
            public format(obj: java.lang.Object, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
            /**
             * Formats a Date into a date/time string.
             */
            // @ts-ignore
            public format(date: java.util.Date): string;
            /**
             * Parses text from the beginning of the given string to produce a date.
             * The method may not use the entire text of the given string.
             * <p>
             * See the {@link #parse(String, ParsePosition)} method for more information
             * on date parsing.
             */
            // @ts-ignore
            public parse(source: string): java.util.Date;
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
             * <p>
             * See the {@link #parse(String, ParsePosition)} method for more information
             * on date parsing.
             */
            // @ts-ignore
            public parseObject(source: string, pos: java.text.ParsePosition): java.lang.Object;
            /**
             * Gets the time formatter with the default formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getTimeInstance(int, Locale) getTimeInstance(DEFAULT,
             * Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getTimeInstance(): java.text.DateFormat;
            /**
             * Gets the time formatter with the given formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getTimeInstance(int, Locale) getTimeInstance(style,
             * Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getTimeInstance(style: number): java.text.DateFormat;
            /**
             * Gets the time formatter with the given formatting style
             * for the given locale.
             */
            // @ts-ignore
            public static getTimeInstance(style: number, aLocale: java.util.Locale): java.text.DateFormat;
            /**
             * Gets the date formatter with the default formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getDateInstance(int, Locale) getDateInstance(DEFAULT,
             * Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getDateInstance(): java.text.DateFormat;
            /**
             * Gets the date formatter with the given formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getDateInstance(int, Locale) getDateInstance(style,
             * Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getDateInstance(style: number): java.text.DateFormat;
            /**
             * Gets the date formatter with the given formatting style
             * for the given locale.
             */
            // @ts-ignore
            public static getDateInstance(style: number, aLocale: java.util.Locale): java.text.DateFormat;
            /**
             * Gets the date/time formatter with the default formatting style
             * for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getDateTimeInstance(int, int, Locale) getDateTimeInstance(DEFAULT,
             * DEFAULT, Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getDateTimeInstance(): java.text.DateFormat;
            /**
             * Gets the date/time formatter with the given date and time
             * formatting styles for the default {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * <p>This is equivalent to calling
             * {@link #getDateTimeInstance(int, int, Locale) getDateTimeInstance(dateStyle,
             * timeStyle, Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getDateTimeInstance(dateStyle: number, timeStyle: number): java.text.DateFormat;
            /**
             * Gets the date/time formatter with the given formatting styles
             * for the given locale.
             */
            // @ts-ignore
            public static getDateTimeInstance(dateStyle: number, timeStyle: number, aLocale: java.util.Locale): java.text.DateFormat;
            /**
             * Get a default date/time formatter that uses the SHORT style for both the
             * date and the time.
             */
            // @ts-ignore
            public static getInstance(): java.text.DateFormat;
            /**
             * Returns an array of all locales for which the
             * <code>get*Instance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported by the Java
             * runtime and by installed
             * {@link java.text.spi.DateFormatProvider DateFormatProvider} implementations.
             * It must contain at least a <code>Locale</code> instance equal to
             * {@link java.util.Locale#US Locale.US}.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[];
            /**
             * Set the calendar to be used by this date format.  Initially, the default
             * calendar for the specified or default locale is used.
             * <p>Any {@link java.util.TimeZone TimeZone} and {@linkplain
             * #isLenient() leniency} values that have previously been set are
             * overwritten by {@code newCalendar}'s values.
             */
            // @ts-ignore
            public setCalendar(newCalendar: java.util.Calendar): void;
            /**
             * Gets the calendar associated with this date/time formatter.
             */
            // @ts-ignore
            public getCalendar(): java.util.Calendar;
            /**
             * Allows you to set the number formatter.
             */
            // @ts-ignore
            public setNumberFormat(newNumberFormat: java.text.NumberFormat): void;
            /**
             * Gets the number formatter which this date/time formatter uses to
             * format and parse a time.
             */
            // @ts-ignore
            public getNumberFormat(): java.text.NumberFormat;
            /**
             * Sets the time zone for the calendar of this {@code DateFormat} object.
             * This method is equivalent to the following call.
             * <blockquote><pre>{@code
             * getCalendar().setTimeZone(zone)
             * }</pre></blockquote>
             * <p>The {@code TimeZone} set by this method is overwritten by a
             * {@link #setCalendar(java.util.Calendar) setCalendar} call.
             * <p>The {@code TimeZone} set by this method may be overwritten as
             * a result of a call to the parse method.
             */
            // @ts-ignore
            public setTimeZone(zone: java.util.TimeZone): void;
            /**
             * Gets the time zone.
             * This method is equivalent to the following call.
             * <blockquote><pre>{@code
             * getCalendar().getTimeZone()
             * }</pre></blockquote>
             */
            // @ts-ignore
            public getTimeZone(): java.util.TimeZone;
            /**
             * Specify whether or not date/time parsing is to be lenient.  With
             * lenient parsing, the parser may use heuristics to interpret inputs that
             * do not precisely match this object's format.  With strict parsing,
             * inputs must match this object's format.
             * <p>This method is equivalent to the following call.
             * <blockquote><pre>{@code
             * getCalendar().setLenient(lenient)
             * }</pre></blockquote>
             * <p>This leniency value is overwritten by a call to {@link
             * #setCalendar(java.util.Calendar) setCalendar()}.
             */
            // @ts-ignore
            public setLenient(lenient: boolean): void;
            /**
             * Tell whether date/time parsing is to be lenient.
             * This method is equivalent to the following call.
             * <blockquote><pre>{@code
             * getCalendar().isLenient()
             * }</pre></blockquote>
             */
            // @ts-ignore
            public isLenient(): boolean;
            /**
             * Overrides hashCode
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Overrides equals
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Overrides Cloneable
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
