declare namespace java {
    namespace util {
        // @ts-ignore
         class GregorianCalendar extends java.util.Calendar {
            /**
             * Constructs a default <code>GregorianCalendar</code> using the current time
             * in the default time zone with the default
             * {@link Locale.Category#FORMAT FORMAT} locale.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>GregorianCalendar</code> based on the current time
             * in the given time zone with the default
             * {@link Locale.Category#FORMAT FORMAT} locale.
             */
            // @ts-ignore
            constructor(zone: java.util.TimeZone)
            /**
             * Constructs a <code>GregorianCalendar</code> based on the current time
             * in the default time zone with the given locale.
             */
            // @ts-ignore
            constructor(aLocale: java.util.Locale)
            /**
             * Constructs a <code>GregorianCalendar</code> based on the current time
             * in the given time zone with the given locale.
             */
            // @ts-ignore
            constructor(zone: java.util.TimeZone, aLocale: java.util.Locale)
            /**
             * Constructs a <code>GregorianCalendar</code> with the given date set
             * in the default time zone with the default locale.
             */
            // @ts-ignore
            constructor(year: number, month: number, dayOfMonth: number)
            /**
             * Constructs a <code>GregorianCalendar</code> with the given date
             * and time set for the default time zone with the default locale.
             */
            // @ts-ignore
            constructor(year: number, month: number, dayOfMonth: number, hourOfDay: number, minute: number)
            /**
             * Constructs a GregorianCalendar with the given date
             * and time set for the default time zone with the default locale.
             */
            // @ts-ignore
            constructor(year: number, month: number, dayOfMonth: number, hourOfDay: number, minute: number, second: number)
            // @ts-ignore
            public static BC: number;
            // @ts-ignore
            public static AD: number;
            /**
             * Sets the <code>GregorianCalendar</code> change date. This is the point when the switch
             * from Julian dates to Gregorian dates occurred. Default is October 15,
             * 1582 (Gregorian). Previous to this, dates will be in the Julian calendar.
             * <p>
             * To obtain a pure Julian calendar, set the change date to
             * <code>Date(Long.MAX_VALUE)</code>.  To obtain a pure Gregorian calendar,
             * set the change date to <code>Date(Long.MIN_VALUE)</code>.
             */
            // @ts-ignore
            public setGregorianChange(date: java.util.Date): void;
            /**
             * Gets the Gregorian Calendar change date.  This is the point when the
             * switch from Julian dates to Gregorian dates occurred. Default is
             * October 15, 1582 (Gregorian). Previous to this, dates will be in the Julian
             * calendar.
             */
            // @ts-ignore
            public getGregorianChange(): java.util.Date;
            /**
             * Determines if the given year is a leap year. Returns <code>true</code> if
             * the given year is a leap year. To specify BC year numbers,
             * <code>1 - year number</code> must be given. For example, year BC 4 is
             * specified as -3.
             */
            // @ts-ignore
            public isLeapYear(year: number): boolean;
            /**
             * Returns {@code "gregory"} as the calendar type.
             */
            // @ts-ignore
            public getCalendarType(): string;
            /**
             * Compares this <code>GregorianCalendar</code> to the specified
             * <code>Object</code>. The result is <code>true</code> if and
             * only if the argument is a <code>GregorianCalendar</code> object
             * that represents the same time value (millisecond offset from
             * the <a href="Calendar.html#Epoch">Epoch</a>) under the same
             * <code>Calendar</code> parameters and Gregorian change date as
             * this object.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Generates the hash code for this <code>GregorianCalendar</code> object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Adds the specified (signed) amount of time to the given calendar field,
             * based on the calendar's rules.
             * <p><em>Add rule 1</em>. The value of <code>field</code>
             * after the call minus the value of <code>field</code> before the
             * call is <code>amount</code>, modulo any overflow that has occurred in
             * <code>field</code>. Overflow occurs when a field value exceeds its
             * range and, as a result, the next larger field is incremented or
             * decremented and the field value is adjusted back into its range.</p>
             * <p><em>Add rule 2</em>. If a smaller field is expected to be
             * invariant, but it is impossible for it to be equal to its
             * prior value because of changes in its minimum or maximum after
             * <code>field</code> is changed, then its value is adjusted to be as close
             * as possible to its expected value. A smaller field represents a
             * smaller unit of time. <code>HOUR</code> is a smaller field than
             * <code>DAY_OF_MONTH</code>. No adjustment is made to smaller fields
             * that are not expected to be invariant. The calendar system
             * determines what fields are expected to be invariant.</p>
             */
            // @ts-ignore
            public add(field: number, amount: number): void;
            /**
             * Adds or subtracts (up/down) a single unit of time on the given time
             * field without changing larger fields.
             * <p>
             * <em>Example</em>: Consider a <code>GregorianCalendar</code>
             * originally set to December 31, 1999. Calling {@link #roll(int,boolean) roll(Calendar.MONTH, true)}
             * sets the calendar to January 31, 1999.  The <code>YEAR</code> field is unchanged
             * because it is a larger field than <code>MONTH</code>.</p>
             */
            // @ts-ignore
            public roll(field: number, up: boolean): void;
            /**
             * Adds a signed amount to the specified calendar field without changing larger fields.
             * A negative roll amount means to subtract from field without changing
             * larger fields. If the specified amount is 0, this method performs nothing.
             * <p>This method calls {@link #complete()} before adding the
             * amount so that all the calendar fields are normalized. If there
             * is any calendar field having an out-of-range value in non-lenient mode, then an
             * <code>IllegalArgumentException</code> is thrown.
             * <p>
             * <em>Example</em>: Consider a <code>GregorianCalendar</code>
             * originally set to August 31, 1999. Calling <code>roll(Calendar.MONTH,
             * 8)</code> sets the calendar to April 30, <strong>1999</strong>. Using a
             * <code>GregorianCalendar</code>, the <code>DAY_OF_MONTH</code> field cannot
             * be 31 in the month April. <code>DAY_OF_MONTH</code> is set to the closest possible
             * value, 30. The <code>YEAR</code> field maintains the value of 1999 because it
             * is a larger field than <code>MONTH</code>.
             * <p>
             * <em>Example</em>: Consider a <code>GregorianCalendar</code>
             * originally set to Sunday June 6, 1999. Calling
             * <code>roll(Calendar.WEEK_OF_MONTH, -1)</code> sets the calendar to
             * Tuesday June 1, 1999, whereas calling
             * <code>add(Calendar.WEEK_OF_MONTH, -1)</code> sets the calendar to
             * Sunday May 30, 1999. This is because the roll rule imposes an
             * additional constraint: The <code>MONTH</code> must not change when the
             * <code>WEEK_OF_MONTH</code> is rolled. Taken together with add rule 1,
             * the resultant date must be between Tuesday June 1 and Saturday June
             * 5. According to add rule 2, the <code>DAY_OF_WEEK</code>, an invariant
             * when changing the <code>WEEK_OF_MONTH</code>, is set to Tuesday, the
             * closest possible value to Sunday (where Sunday is the first day of the
             * week).</p>
             */
            // @ts-ignore
            public roll(field: number, amount: number): void;
            /**
             * Returns the minimum value for the given calendar field of this
             * <code>GregorianCalendar</code> instance. The minimum value is
             * defined as the smallest value returned by the {@link
             * Calendar#get(int) get} method for any possible time value,
             * taking into consideration the current values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             */
            // @ts-ignore
            public getMinimum(field: number): number;
            /**
             * Returns the maximum value for the given calendar field of this
             * <code>GregorianCalendar</code> instance. The maximum value is
             * defined as the largest value returned by the {@link
             * Calendar#get(int) get} method for any possible time value,
             * taking into consideration the current values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             */
            // @ts-ignore
            public getMaximum(field: number): number;
            /**
             * Returns the highest minimum value for the given calendar field
             * of this <code>GregorianCalendar</code> instance. The highest
             * minimum value is defined as the largest value returned by
             * {@link #getActualMinimum(int)} for any possible time value,
             * taking into consideration the current values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             */
            // @ts-ignore
            public getGreatestMinimum(field: number): number;
            /**
             * Returns the lowest maximum value for the given calendar field
             * of this <code>GregorianCalendar</code> instance. The lowest
             * maximum value is defined as the smallest value returned by
             * {@link #getActualMaximum(int)} for any possible time value,
             * taking into consideration the current values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             */
            // @ts-ignore
            public getLeastMaximum(field: number): number;
            /**
             * Returns the minimum value that this calendar field could have,
             * taking into consideration the given time value and the current
             * values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             * <p>For example, if the Gregorian change date is January 10,
             * 1970 and the date of this <code>GregorianCalendar</code> is
             * January 20, 1970, the actual minimum value of the
             * <code>DAY_OF_MONTH</code> field is 10 because the previous date
             * of January 10, 1970 is December 27, 1996 (in the Julian
             * calendar). Therefore, December 28, 1969 to January 9, 1970
             * don't exist.
             */
            // @ts-ignore
            public getActualMinimum(field: number): number;
            /**
             * Returns the maximum value that this calendar field could have,
             * taking into consideration the given time value and the current
             * values of the
             * {@link Calendar#getFirstDayOfWeek() getFirstDayOfWeek},
             * {@link Calendar#getMinimalDaysInFirstWeek() getMinimalDaysInFirstWeek},
             * {@link #getGregorianChange() getGregorianChange} and
             * {@link Calendar#getTimeZone() getTimeZone} methods.
             * For example, if the date of this instance is February 1, 2004,
             * the actual maximum value of the <code>DAY_OF_MONTH</code> field
             * is 29 because 2004 is a leap year, and if the date of this
             * instance is February 1, 2005, it's 28.
             * <p>This method calculates the maximum value of {@link
             * Calendar#WEEK_OF_YEAR WEEK_OF_YEAR} based on the {@link
             * Calendar#YEAR YEAR} (calendar year) value, not the <a
             * href="#week_year">week year</a>. Call {@link
             * #getWeeksInWeekYear()} to get the maximum value of {@code
             * WEEK_OF_YEAR} in the week year of this {@code GregorianCalendar}.
             */
            // @ts-ignore
            public getActualMaximum(field: number): number;
            // @ts-ignore
            public clone(): java.lang.Object;
            // @ts-ignore
            public getTimeZone(): java.util.TimeZone;
            // @ts-ignore
            public setTimeZone(zone: java.util.TimeZone): void;
            /**
             * Returns {@code true} indicating this {@code GregorianCalendar}
             * supports week dates.
             */
            // @ts-ignore
            public isWeekDateSupported(): boolean;
            /**
             * Returns the <a href="#week_year">week year</a> represented by this
             * {@code GregorianCalendar}. The dates in the weeks between 1 and the
             * maximum week number of the week year have the same week year value
             * that may be one year before or after the {@link Calendar#YEAR YEAR}
             * (calendar year) value.
             * <p>This method calls {@link Calendar#complete()} before
             * calculating the week year.
             */
            // @ts-ignore
            public getWeekYear(): number;
            /**
             * Sets this {@code GregorianCalendar} to the date given by the
             * date specifiers - <a href="#week_year">{@code weekYear}</a>,
             * {@code weekOfYear}, and {@code dayOfWeek}. {@code weekOfYear}
             * follows the <a href="#week_and_year">{@code WEEK_OF_YEAR}
             * numbering</a>.  The {@code dayOfWeek} value must be one of the
             * {@link Calendar#DAY_OF_WEEK DAY_OF_WEEK} values: {@link
             * Calendar#SUNDAY SUNDAY} to {@link Calendar#SATURDAY SATURDAY}.
             * <p>Note that the numeric day-of-week representation differs from
             * the ISO 8601 standard, and that the {@code weekOfYear}
             * numbering is compatible with the standard when {@code
             * getFirstDayOfWeek()} is {@code MONDAY} and {@code
             * getMinimalDaysInFirstWeek()} is 4.
             * <p>Unlike the {@code set} method, all of the calendar fields
             * and the instant of time value are calculated upon return.
             * <p>If {@code weekOfYear} is out of the valid week-of-year
             * range in {@code weekYear}, the {@code weekYear}
             * and {@code weekOfYear} values are adjusted in lenient
             * mode, or an {@code IllegalArgumentException} is thrown in
             * non-lenient mode.
             */
            // @ts-ignore
            public setWeekDate(weekYear: number, weekOfYear: number, dayOfWeek: number): void;
            /**
             * Returns the number of weeks in the <a href="#week_year">week year</a>
             * represented by this {@code GregorianCalendar}.
             * <p>For example, if this {@code GregorianCalendar}'s date is
             * December 31, 2008 with <a href="#iso8601_compatible_setting">the ISO
             * 8601 compatible setting</a>, this method will return 53 for the
             * period: December 29, 2008 to January 3, 2010 while {@link
             * #getActualMaximum(int) getActualMaximum(WEEK_OF_YEAR)} will return
             * 52 for the period: December 31, 2007 to December 28, 2008.
             */
            // @ts-ignore
            public getWeeksInWeekYear(): number;
            /**
             * Converts the time value (millisecond offset from the <a
             * href="Calendar.html#Epoch">Epoch</a>) to calendar field values.
             * The time is <em>not</em>
             * recomputed first; to recompute the time, then the fields, call the
             * <code>complete</code> method.
             */
            // @ts-ignore
            protected computeFields(): void;
            /**
             * Converts calendar field values to the time value (millisecond
             * offset from the <a href="Calendar.html#Epoch">Epoch</a>).
             */
            // @ts-ignore
            protected computeTime(): void;
            /**
             * Converts this object to a {@code ZonedDateTime} that represents
             * the same point on the time-line as this {@code GregorianCalendar}.
             * <p>
             * Since this object supports a Julian-Gregorian cutover date and
             * {@code ZonedDateTime} does not, it is possible that the resulting year,
             * month and day will have different values.  The result will represent the
             * correct date in the ISO calendar system, which will also be the same value
             * for Modified Julian Days.
             */
            // @ts-ignore
            public toZonedDateTime(): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code GregorianCalendar} with the default locale
             * from a {@code ZonedDateTime} object.
             * <p>
             * Since {@code ZonedDateTime} does not support a Julian-Gregorian cutover
             * date and uses ISO calendar system, the return GregorianCalendar is a pure
             * Gregorian calendar and uses ISO 8601 standard for week definitions,
             * which has {@code MONDAY} as the {@link Calendar#getFirstDayOfWeek()
             * FirstDayOfWeek} and {@code 4} as the value of the
             * {@link Calendar#getMinimalDaysInFirstWeek() MinimalDaysInFirstWeek}.
             * <p>
             * {@code ZoneDateTime} can store points on the time-line further in the
             * future and further in the past than {@code GregorianCalendar}. In this
             * scenario, this method will throw an {@code IllegalArgumentException}
             * exception.
             */
            // @ts-ignore
            public static from(zdt: java.time.ZonedDateTime): java.util.GregorianCalendar;
        }
    }
}
