// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class Calendar extends java.lang.Object {
            /**
             * Constructs a Calendar with the default time zone
             * and the default {@link java.util.Locale.Category#FORMAT FORMAT}
             * locale.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a calendar with the specified time zone and locale.
             */
            // @ts-ignore
            constructor(zone: java.util.TimeZone, aLocale: java.util.Locale)
            // @ts-ignore
            public static ERA: number;
            // @ts-ignore
            public static YEAR: number;
            // @ts-ignore
            public static MONTH: number;
            // @ts-ignore
            public static WEEK_OF_YEAR: number;
            // @ts-ignore
            public static WEEK_OF_MONTH: number;
            // @ts-ignore
            public static DATE: number;
            // @ts-ignore
            public static DAY_OF_MONTH: number;
            // @ts-ignore
            public static DAY_OF_YEAR: number;
            // @ts-ignore
            public static DAY_OF_WEEK: number;
            // @ts-ignore
            public static DAY_OF_WEEK_IN_MONTH: number;
            // @ts-ignore
            public static AM_PM: number;
            // @ts-ignore
            public static HOUR: number;
            // @ts-ignore
            public static HOUR_OF_DAY: number;
            // @ts-ignore
            public static MINUTE: number;
            // @ts-ignore
            public static SECOND: number;
            // @ts-ignore
            public static MILLISECOND: number;
            // @ts-ignore
            public static ZONE_OFFSET: number;
            // @ts-ignore
            public static DST_OFFSET: number;
            // @ts-ignore
            public static FIELD_COUNT: number;
            // @ts-ignore
            public static SUNDAY: number;
            // @ts-ignore
            public static MONDAY: number;
            // @ts-ignore
            public static TUESDAY: number;
            // @ts-ignore
            public static WEDNESDAY: number;
            // @ts-ignore
            public static THURSDAY: number;
            // @ts-ignore
            public static FRIDAY: number;
            // @ts-ignore
            public static SATURDAY: number;
            // @ts-ignore
            public static JANUARY: number;
            // @ts-ignore
            public static FEBRUARY: number;
            // @ts-ignore
            public static MARCH: number;
            // @ts-ignore
            public static APRIL: number;
            // @ts-ignore
            public static MAY: number;
            // @ts-ignore
            public static JUNE: number;
            // @ts-ignore
            public static JULY: number;
            // @ts-ignore
            public static AUGUST: number;
            // @ts-ignore
            public static SEPTEMBER: number;
            // @ts-ignore
            public static OCTOBER: number;
            // @ts-ignore
            public static NOVEMBER: number;
            // @ts-ignore
            public static DECEMBER: number;
            // @ts-ignore
            public static UNDECIMBER: number;
            // @ts-ignore
            public static AM: number;
            // @ts-ignore
            public static PM: number;
            // @ts-ignore
            public static ALL_STYLES: number;
            // @ts-ignore
            public static SHORT: number;
            // @ts-ignore
            public static LONG: number;
            // @ts-ignore
            public static NARROW_FORMAT: number;
            // @ts-ignore
            public static NARROW_STANDALONE: number;
            // @ts-ignore
            public static SHORT_FORMAT: number;
            // @ts-ignore
            public static LONG_FORMAT: number;
            // @ts-ignore
            public static SHORT_STANDALONE: number;
            // @ts-ignore
            public static LONG_STANDALONE: number;
            // @ts-ignore
            protected fields: number[];
            // @ts-ignore
            protected time: number;
            // @ts-ignore
            protected isTimeSet: boolean;
            // @ts-ignore
            protected areFieldsSet: boolean;
            /**
             * Gets a calendar using the default time zone and locale. The
             * <code>Calendar</code> returned is based on the current time
             * in the default time zone with the default
             * {@link Locale.Category#FORMAT FORMAT} locale.
             */
            // @ts-ignore
            public static getInstance(): java.util.Calendar;
            /**
             * Gets a calendar using the specified time zone and default locale.
             * The <code>Calendar</code> returned is based on the current time
             * in the given time zone with the default
             * {@link Locale.Category#FORMAT FORMAT} locale.
             */
            // @ts-ignore
            public static getInstance(zone: java.util.TimeZone): java.util.Calendar;
            /**
             * Gets a calendar using the default time zone and specified locale.
             * The <code>Calendar</code> returned is based on the current time
             * in the default time zone with the given locale.
             */
            // @ts-ignore
            public static getInstance(aLocale: java.util.Locale): java.util.Calendar;
            /**
             * Gets a calendar with the specified time zone and locale.
             * The <code>Calendar</code> returned is based on the current time
             * in the given time zone with the given locale.
             */
            // @ts-ignore
            public static getInstance(zone: java.util.TimeZone, aLocale: java.util.Locale): java.util.Calendar;
            /**
             * Returns an array of all locales for which the <code>getInstance</code>
             * methods of this class can return localized instances.
             * The array returned must contain at least a <code>Locale</code>
             * instance equal to {@link java.util.Locale#US Locale.US}.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[];
            /**
             * Converts the current calendar field values in {@link #fields fields[]}
             * to the millisecond time value
             * {@link #time}.
             */
            // @ts-ignore
            protected abstract computeTime(): void;
            /**
             * Converts the current millisecond time value {@link #time}
             * to calendar field values in {@link #fields fields[]}.
             * This allows you to sync up the calendar field values with
             * a new time that is set for the calendar.  The time is <em>not</em>
             * recomputed first; to recompute the time, then the fields, call the
             * {@link #complete()} method.
             */
            // @ts-ignore
            protected abstract computeFields(): void;
            /**
             * Returns a <code>Date</code> object representing this
             * <code>Calendar</code>'s time value (millisecond offset from the <a
             * href="#Epoch">Epoch</a>").
             */
            // @ts-ignore
            public getTime(): java.util.Date;
            /**
             * Sets this Calendar's time with the given <code>Date</code>.
             * <p>
             * Note: Calling <code>setTime()</code> with
             * <code>Date(Long.MAX_VALUE)</code> or <code>Date(Long.MIN_VALUE)</code>
             * may yield incorrect field values from <code>get()</code>.
             */
            // @ts-ignore
            public setTime(date: java.util.Date): void;
            /**
             * Returns this Calendar's time value in milliseconds.
             */
            // @ts-ignore
            public getTimeInMillis(): number;
            /**
             * Sets this Calendar's current time from the given long value.
             */
            // @ts-ignore
            public setTimeInMillis(millis: number): void;
            /**
             * Returns the value of the given calendar field. In lenient mode,
             * all calendar fields are normalized. In non-lenient mode, all
             * calendar fields are validated and this method throws an
             * exception if any calendar fields have out-of-range values. The
             * normalization and validation are handled by the
             * {@link #complete()} method, which process is calendar
             * system dependent.
             */
            // @ts-ignore
            public get(field: number): number;
            /**
             * Returns the value of the given calendar field. This method does
             * not involve normalization or validation of the field value.
             */
            // @ts-ignore
            protected internalGet(field: number): number;
            /**
             * Sets the given calendar field to the given value. The value is not
             * interpreted by this method regardless of the leniency mode.
             */
            // @ts-ignore
            public set(field: number, value: number): void;
            /**
             * Sets the values for the calendar fields <code>YEAR</code>,
             * <code>MONTH</code>, and <code>DAY_OF_MONTH</code>.
             * Previous values of other calendar fields are retained.  If this is not desired,
             * call {@link #clear()} first.
             */
            // @ts-ignore
            public set(year: number, month: number, date: number): void;
            /**
             * Sets the values for the calendar fields <code>YEAR</code>,
             * <code>MONTH</code>, <code>DAY_OF_MONTH</code>,
             * <code>HOUR_OF_DAY</code>, and <code>MINUTE</code>.
             * Previous values of other fields are retained.  If this is not desired,
             * call {@link #clear()} first.
             */
            // @ts-ignore
            public set(year: number, month: number, date: number, hourOfDay: number, minute: number): void;
            /**
             * Sets the values for the fields <code>YEAR</code>, <code>MONTH</code>,
             * <code>DAY_OF_MONTH</code>, <code>HOUR_OF_DAY</code>, <code>MINUTE</code>, and
             * <code>SECOND</code>.
             * Previous values of other fields are retained.  If this is not desired,
             * call {@link #clear()} first.
             */
            // @ts-ignore
            public set(year: number, month: number, date: number, hourOfDay: number, minute: number, second: number): void;
            /**
             * Sets all the calendar field values and the time value
             * (millisecond offset from the <a href="#Epoch">Epoch</a>) of
             * this <code>Calendar</code> undefined. This means that {@link
             * #isSet(int) isSet()} will return <code>false</code> for all the
             * calendar fields, and the date and time calculations will treat
             * the fields as if they had never been set. A
             * <code>Calendar</code> implementation class may use its specific
             * default field values for date/time calculations. For example,
             * <code>GregorianCalendar</code> uses 1970 if the
             * <code>YEAR</code> field value is undefined.
             */
            // @ts-ignore
            public clear(): void;
            /**
             * Sets the given calendar field value and the time value
             * (millisecond offset from the <a href="#Epoch">Epoch</a>) of
             * this <code>Calendar</code> undefined. This means that {@link
             * #isSet(int) isSet(field)} will return <code>false</code>, and
             * the date and time calculations will treat the field as if it
             * had never been set. A <code>Calendar</code> implementation
             * class may use the field's specific default value for date and
             * time calculations.
             * <p>The {@link #HOUR_OF_DAY}, {@link #HOUR} and {@link #AM_PM}
             * fields are handled independently and the <a
             * href="#time_resolution">the resolution rule for the time of
             * day</a> is applied. Clearing one of the fields doesn't reset
             * the hour of day value of this <code>Calendar</code>. Use {@link
             * #set(int,int) set(Calendar.HOUR_OF_DAY, 0)} to reset the hour
             * value.
             */
            // @ts-ignore
            public clear(field: number): void;
            /**
             * Determines if the given calendar field has a value set,
             * including cases that the value has been set by internal fields
             * calculations triggered by a <code>get</code> method call.
             */
            // @ts-ignore
            public isSet(field: number): boolean;
            /**
             * Returns the string representation of the calendar
             * <code>field</code> value in the given <code>style</code> and
             * <code>locale</code>.  If no string representation is
             * applicable, <code>null</code> is returned. This method calls
             * {@link Calendar#get(int) get(field)} to get the calendar
             * <code>field</code> value if the string representation is
             * applicable to the given calendar <code>field</code>.
             * <p>For example, if this <code>Calendar</code> is a
             * <code>GregorianCalendar</code> and its date is 2005-01-01, then
             * the string representation of the {@link #MONTH} field would be
             * "January" in the long style in an English locale or "Jan" in
             * the short style. However, no string representation would be
             * available for the {@link #DAY_OF_MONTH} field, and this method
             * would return <code>null</code>.
             * <p>The default implementation supports the calendar fields for
             * which a {@link DateFormatSymbols} has names in the given
             * <code>locale</code>.
             */
            // @ts-ignore
            public getDisplayName(field: number, style: number, locale: java.util.Locale): string;
            /**
             * Returns a {@code Map} containing all names of the calendar
             * {@code field} in the given {@code style} and
             * {@code locale} and their corresponding field values. For
             * example, if this {@code Calendar} is a {@link
             * GregorianCalendar}, the returned map would contain "Jan" to
             * {@link #JANUARY}, "Feb" to {@link #FEBRUARY}, and so on, in the
             * {@linkplain #SHORT short} style in an English locale.
             * <p>Narrow names may not be unique due to use of single characters,
             * such as "S" for Sunday and Saturday. In that case narrow names are not
             * included in the returned {@code Map}.
             * <p>The values of other calendar fields may be taken into
             * account to determine a set of display names. For example, if
             * this {@code Calendar} is a lunisolar calendar system and
             * the year value given by the {@link #YEAR} field has a leap
             * month, this method would return month names containing the leap
             * month name, and month names are mapped to their values specific
             * for the year.
             * <p>The default implementation supports display names contained in
             * a {@link DateFormatSymbols}. For example, if {@code field}
             * is {@link #MONTH} and {@code style} is {@link
             * #ALL_STYLES}, this method returns a {@code Map} containing
             * all strings returned by {@link DateFormatSymbols#getShortMonths()}
             * and {@link DateFormatSymbols#getMonths()}.
             */
            // @ts-ignore
            public getDisplayNames(field: number, style: number, locale: java.util.Locale): java.util.Map;
            /**
             * Fills in any unset fields in the calendar fields. First, the {@link
             * #computeTime()} method is called if the time value (millisecond offset
             * from the <a href="#Epoch">Epoch</a>) has not been calculated from
             * calendar field values. Then, the {@link #computeFields()} method is
             * called to calculate all calendar field values.
             */
            // @ts-ignore
            protected complete(): void;
            /**
             * Returns an unmodifiable {@code Set} containing all calendar types
             * supported by {@code Calendar} in the runtime environment. The available
             * calendar types can be used for the <a
             * href="Locale.html#def_locale_extension">Unicode locale extensions</a>.
             * The {@code Set} returned contains at least {@code "gregory"}. The
             * calendar types don't include aliases, such as {@code "gregorian"} for
             * {@code "gregory"}.
             */
            // @ts-ignore
            public static getAvailableCalendarTypes(): java.util.Set;
            /**
             * Returns the calendar type of this {@code Calendar}. Calendar types are
             * defined by the <em>Unicode Locale Data Markup Language (LDML)</em>
             * specification.
             * <p>The default implementation of this method returns the class name of
             * this {@code Calendar} instance. Any subclasses that implement
             * LDML-defined calendar systems should override this method to return
             * appropriate calendar types.
             */
            // @ts-ignore
            public getCalendarType(): string;
            /**
             * Compares this <code>Calendar</code> to the specified
             * <code>Object</code>.  The result is <code>true</code> if and only if
             * the argument is a <code>Calendar</code> object of the same calendar
             * system that represents the same time value (millisecond offset from the
             * <a href="#Epoch">Epoch</a>) under the same
             * <code>Calendar</code> parameters as this object.
             * <p>The <code>Calendar</code> parameters are the values represented
             * by the <code>isLenient</code>, <code>getFirstDayOfWeek</code>,
             * <code>getMinimalDaysInFirstWeek</code> and <code>getTimeZone</code>
             * methods. If there is any difference in those parameters
             * between the two <code>Calendar</code>s, this method returns
             * <code>false</code>.
             * <p>Use the {@link #compareTo(Calendar) compareTo} method to
             * compare only the time values.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hash code for this calendar.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns whether this <code>Calendar</code> represents a time
             * before the time represented by the specified
             * <code>Object</code>. This method is equivalent to:
             * <pre>{@code
             * compareTo(when) < 0
             * }</pre>
             * if and only if <code>when</code> is a <code>Calendar</code>
             * instance. Otherwise, the method returns <code>false</code>.
             */
            // @ts-ignore
            public before(when: java.lang.Object): boolean;
            /**
             * Returns whether this <code>Calendar</code> represents a time
             * after the time represented by the specified
             * <code>Object</code>. This method is equivalent to:
             * <pre>{@code
             * compareTo(when) > 0
             * }</pre>
             * if and only if <code>when</code> is a <code>Calendar</code>
             * instance. Otherwise, the method returns <code>false</code>.
             */
            // @ts-ignore
            public after(when: java.lang.Object): boolean;
            /**
             * Compares the time values (millisecond offsets from the <a
             * href="#Epoch">Epoch</a>) represented by two
             * <code>Calendar</code> objects.
             */
            // @ts-ignore
            public compareTo(anotherCalendar: java.util.Calendar): number;
            /**
             * Adds or subtracts the specified amount of time to the given calendar field,
             * based on the calendar's rules. For example, to subtract 5 days from
             * the current time of the calendar, you can achieve it by calling:
             * <p><code>add(Calendar.DAY_OF_MONTH, -5)</code>.
             */
            // @ts-ignore
            public abstract add(field: number, amount: number): void;
            /**
             * Adds or subtracts (up/down) a single unit of time on the given time
             * field without changing larger fields. For example, to roll the current
             * date up by one day, you can achieve it by calling:
             * <p>roll(Calendar.DATE, true).
             * When rolling on the year or Calendar.YEAR field, it will roll the year
             * value in the range between 1 and the value returned by calling
             * <code>getMaximum(Calendar.YEAR)</code>.
             * When rolling on the month or Calendar.MONTH field, other fields like
             * date might conflict and, need to be changed. For instance,
             * rolling the month on the date 01/31/96 will result in 02/29/96.
             * When rolling on the hour-in-day or Calendar.HOUR_OF_DAY field, it will
             * roll the hour value in the range between 0 and 23, which is zero-based.
             */
            // @ts-ignore
            public abstract roll(field: number, up: boolean): void;
            /**
             * Adds the specified (signed) amount to the specified calendar field
             * without changing larger fields.  A negative amount means to roll
             * down.
             * <p>NOTE:  This default implementation on <code>Calendar</code> just repeatedly calls the
             * version of {@link #roll(int,boolean) roll()} that rolls by one unit.  This may not
             * always do the right thing.  For example, if the <code>DAY_OF_MONTH</code> field is 31,
             * rolling through February will leave it set to 28.  The <code>GregorianCalendar</code>
             * version of this function takes care of this problem.  Other subclasses
             * should also provide overrides of this function that do the right thing.
             */
            // @ts-ignore
            public roll(field: number, amount: number): void;
            /**
             * Sets the time zone with the given time zone value.
             */
            // @ts-ignore
            public setTimeZone(value: java.util.TimeZone): void;
            /**
             * Gets the time zone.
             */
            // @ts-ignore
            public getTimeZone(): java.util.TimeZone;
            /**
             * Specifies whether or not date/time interpretation is to be lenient.  With
             * lenient interpretation, a date such as "February 942, 1996" will be
             * treated as being equivalent to the 941st day after February 1, 1996.
             * With strict (non-lenient) interpretation, such dates will cause an exception to be
             * thrown. The default is lenient.
             */
            // @ts-ignore
            public setLenient(lenient: boolean): void;
            /**
             * Tells whether date/time interpretation is to be lenient.
             */
            // @ts-ignore
            public isLenient(): boolean;
            /**
             * Sets what the first day of the week is; e.g., <code>SUNDAY</code> in the U.S.,
             * <code>MONDAY</code> in France.
             */
            // @ts-ignore
            public setFirstDayOfWeek(value: number): void;
            /**
             * Gets what the first day of the week is; e.g., <code>SUNDAY</code> in the U.S.,
             * <code>MONDAY</code> in France.
             */
            // @ts-ignore
            public getFirstDayOfWeek(): number;
            /**
             * Sets what the minimal days required in the first week of the year are;
             * For example, if the first week is defined as one that contains the first
             * day of the first month of a year, call this method with value 1. If it
             * must be a full week, use value 7.
             */
            // @ts-ignore
            public setMinimalDaysInFirstWeek(value: number): void;
            /**
             * Gets what the minimal days required in the first week of the year are;
             * e.g., if the first week is defined as one that contains the first day
             * of the first month of a year, this method returns 1. If
             * the minimal days required must be a full week, this method
             * returns 7.
             */
            // @ts-ignore
            public getMinimalDaysInFirstWeek(): number;
            /**
             * Returns whether this {@code Calendar} supports week dates.
             * <p>The default implementation of this method returns {@code false}.
             */
            // @ts-ignore
            public isWeekDateSupported(): boolean;
            /**
             * Returns the week year represented by this {@code Calendar}. The
             * week year is in sync with the week cycle. The {@linkplain
             * #getFirstDayOfWeek() first day of the first week} is the first
             * day of the week year.
             * <p>The default implementation of this method throws an
             * {@link UnsupportedOperationException}.
             */
            // @ts-ignore
            public getWeekYear(): number;
            /**
             * Sets the date of this {@code Calendar} with the the given date
             * specifiers - week year, week of year, and day of week.
             * <p>Unlike the {@code set} method, all of the calendar fields
             * and {@code time} values are calculated upon return.
             * <p>If {@code weekOfYear} is out of the valid week-of-year range
             * in {@code weekYear}, the {@code weekYear} and {@code
             * weekOfYear} values are adjusted in lenient mode, or an {@code
             * IllegalArgumentException} is thrown in non-lenient mode.
             * <p>The default implementation of this method throws an
             * {@code UnsupportedOperationException}.
             */
            // @ts-ignore
            public setWeekDate(weekYear: number, weekOfYear: number, dayOfWeek: number): void;
            /**
             * Returns the number of weeks in the week year represented by this
             * {@code Calendar}.
             * <p>The default implementation of this method throws an
             * {@code UnsupportedOperationException}.
             */
            // @ts-ignore
            public getWeeksInWeekYear(): number;
            /**
             * Returns the minimum value for the given calendar field of this
             * <code>Calendar</code> instance. The minimum value is defined as
             * the smallest value returned by the {@link #get(int) get} method
             * for any possible time value.  The minimum value depends on
             * calendar system specific parameters of the instance.
             */
            // @ts-ignore
            public abstract getMinimum(field: number): number;
            /**
             * Returns the maximum value for the given calendar field of this
             * <code>Calendar</code> instance. The maximum value is defined as
             * the largest value returned by the {@link #get(int) get} method
             * for any possible time value. The maximum value depends on
             * calendar system specific parameters of the instance.
             */
            // @ts-ignore
            public abstract getMaximum(field: number): number;
            /**
             * Returns the highest minimum value for the given calendar field
             * of this <code>Calendar</code> instance. The highest minimum
             * value is defined as the largest value returned by {@link
             * #getActualMinimum(int)} for any possible time value. The
             * greatest minimum value depends on calendar system specific
             * parameters of the instance.
             */
            // @ts-ignore
            public abstract getGreatestMinimum(field: number): number;
            /**
             * Returns the lowest maximum value for the given calendar field
             * of this <code>Calendar</code> instance. The lowest maximum
             * value is defined as the smallest value returned by {@link
             * #getActualMaximum(int)} for any possible time value. The least
             * maximum value depends on calendar system specific parameters of
             * the instance. For example, a <code>Calendar</code> for the
             * Gregorian calendar system returns 28 for the
             * <code>DAY_OF_MONTH</code> field, because the 28th is the last
             * day of the shortest month of this calendar, February in a
             * common year.
             */
            // @ts-ignore
            public abstract getLeastMaximum(field: number): number;
            /**
             * Returns the minimum value that the specified calendar field
             * could have, given the time value of this <code>Calendar</code>.
             * <p>The default implementation of this method uses an iterative
             * algorithm to determine the actual minimum value for the
             * calendar field. Subclasses should, if possible, override this
             * with a more efficient implementation - in many cases, they can
             * simply return <code>getMinimum()</code>.
             */
            // @ts-ignore
            public getActualMinimum(field: number): number;
            /**
             * Returns the maximum value that the specified calendar field
             * could have, given the time value of this
             * <code>Calendar</code>. For example, the actual maximum value of
             * the <code>MONTH</code> field is 12 in some years, and 13 in
             * other years in the Hebrew calendar system.
             * <p>The default implementation of this method uses an iterative
             * algorithm to determine the actual maximum value for the
             * calendar field. Subclasses should, if possible, override this
             * with a more efficient implementation.
             */
            // @ts-ignore
            public getActualMaximum(field: number): number;
            /**
             * Creates and returns a copy of this object.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Return a string representation of this calendar. This method
             * is intended to be used only for debugging purposes, and the
             * format of the returned string may vary between implementations.
             * The returned string may be empty but may not be <code>null</code>.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Converts this object to an {@link Instant}.
             * <p>
             * The conversion creates an {@code Instant} that represents the
             * same point on the time-line as this {@code Calendar}.
             */
            // @ts-ignore
            public toInstant(): java.time.Instant;
        }
    }
}
