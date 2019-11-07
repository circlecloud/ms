// @ts-nocheck
declare namespace java {
    namespace util {
        namespace Calendar {
            // @ts-ignore
             class Builder extends java.lang.Object {
                /**
                 * Constructs a {@code Calendar.Builder}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Sets the instant parameter to the given {@code instant} value that is
                 * a millisecond offset from <a href="Calendar.html#Epoch">the
                 * Epoch</a>.
                 */
                // @ts-ignore
                public setInstant(instant: number): java.util.Calendar.Builder;
                /**
                 * Sets the instant parameter to the {@code instant} value given by a
                 * {@link Date}. This method is equivalent to a call to
                 * {@link #setInstant(long) setInstant(instant.getTime())}.
                 */
                // @ts-ignore
                public setInstant(instant: java.util.Date): java.util.Calendar.Builder;
                /**
                 * Sets the {@code field} parameter to the given {@code value}.
                 * {@code field} is an index to the {@link Calendar#fields}, such as
                 * {@link Calendar#DAY_OF_MONTH DAY_OF_MONTH}. Field value validation is
                 * not performed in this method. Any out of range values are either
                 * normalized in lenient mode or detected as an invalid value in
                 * non-lenient mode when building a {@code Calendar}.
                 */
                // @ts-ignore
                public set(field: number, value: number): java.util.Calendar.Builder;
                /**
                 * Sets field parameters to their values given by
                 * {@code fieldValuePairs} that are pairs of a field and its value.
                 * For example,
                 * <pre>
                 * setFeilds(Calendar.YEAR, 2013,
                 * Calendar.MONTH, Calendar.DECEMBER,
                 * Calendar.DAY_OF_MONTH, 23);</pre>
                 * is equivalent to the sequence of the following
                 * {@link #set(int, int) set} calls:
                 * <pre>
                 * set(Calendar.YEAR, 2013)
                 * .set(Calendar.MONTH, Calendar.DECEMBER)
                 * .set(Calendar.DAY_OF_MONTH, 23);</pre>
                 */
                // @ts-ignore
                public setFields(fieldValuePairs: number): java.util.Calendar.Builder;
                /**
                 * Sets the date field parameters to the values given by {@code year},
                 * {@code month}, and {@code dayOfMonth}. This method is equivalent to
                 * a call to:
                 * <pre>
                 * setFields(Calendar.YEAR, year,
                 * Calendar.MONTH, month,
                 * Calendar.DAY_OF_MONTH, dayOfMonth);</pre>
                 */
                // @ts-ignore
                public setDate(year: number, month: number, dayOfMonth: number): java.util.Calendar.Builder;
                /**
                 * Sets the time of day field parameters to the values given by
                 * {@code hourOfDay}, {@code minute}, and {@code second}. This method is
                 * equivalent to a call to:
                 * <pre>
                 * setTimeOfDay(hourOfDay, minute, second, 0);</pre>
                 */
                // @ts-ignore
                public setTimeOfDay(hourOfDay: number, minute: number, second: number): java.util.Calendar.Builder;
                /**
                 * Sets the time of day field parameters to the values given by
                 * {@code hourOfDay}, {@code minute}, {@code second}, and
                 * {@code millis}. This method is equivalent to a call to:
                 * <pre>
                 * setFields(Calendar.HOUR_OF_DAY, hourOfDay,
                 * Calendar.MINUTE, minute,
                 * Calendar.SECOND, second,
                 * Calendar.MILLISECOND, millis);</pre>
                 */
                // @ts-ignore
                public setTimeOfDay(hourOfDay: number, minute: number, second: number, millis: number): java.util.Calendar.Builder;
                /**
                 * Sets the week-based date parameters to the values with the given
                 * date specifiers - week year, week of year, and day of week.
                 * <p>If the specified calendar doesn't support week dates, the
                 * {@link #build() build} method will throw an {@link IllegalArgumentException}.
                 */
                // @ts-ignore
                public setWeekDate(weekYear: number, weekOfYear: number, dayOfWeek: number): java.util.Calendar.Builder;
                /**
                 * Sets the time zone parameter to the given {@code zone}. If no time
                 * zone parameter is given to this {@code Caledar.Builder}, the
                 * {@linkplain TimeZone#getDefault() default
                 * <code>TimeZone</code>} will be used in the {@link #build() build}
                 * method.
                 */
                // @ts-ignore
                public setTimeZone(zone: java.util.TimeZone): java.util.Calendar.Builder;
                /**
                 * Sets the lenient mode parameter to the value given by {@code lenient}.
                 * If no lenient parameter is given to this {@code Calendar.Builder},
                 * lenient mode will be used in the {@link #build() build} method.
                 */
                // @ts-ignore
                public setLenient(lenient: boolean): java.util.Calendar.Builder;
                /**
                 * Sets the calendar type parameter to the given {@code type}. The
                 * calendar type given by this method has precedence over any explicit
                 * or implicit calendar type given by the
                 * {@linkplain #setLocale(Locale) locale}.
                 * <p>In addition to the available calendar types returned by the
                 * {@link Calendar#getAvailableCalendarTypes() Calendar.getAvailableCalendarTypes}
                 * method, {@code "gregorian"} and {@code "iso8601"} as aliases of
                 * {@code "gregory"} can be used with this method.
                 */
                // @ts-ignore
                public setCalendarType(type: string): java.util.Calendar.Builder;
                /**
                 * Sets the locale parameter to the given {@code locale}. If no locale
                 * is given to this {@code Calendar.Builder}, the {@linkplain
                 * Locale#getDefault(Locale.Category) default <code>Locale</code>}
                 * for {@link Locale.Category#FORMAT} will be used.
                 * <p>If no calendar type is explicitly given by a call to the
                 * {@link #setCalendarType(String) setCalendarType} method,
                 * the {@code Locale} value is used to determine what type of
                 * {@code Calendar} to be built.
                 * <p>If no week definition parameters are explicitly given by a call to
                 * the {@link #setWeekDefinition(int,int) setWeekDefinition} method, the
                 * {@code Locale}'s default values are used.
                 */
                // @ts-ignore
                public setLocale(locale: java.util.Locale): java.util.Calendar.Builder;
                /**
                 * Sets the week definition parameters to the values given by
                 * {@code firstDayOfWeek} and {@code minimalDaysInFirstWeek} that are
                 * used to determine the <a href="Calendar.html#First_Week">first
                 * week</a> of a year. The parameters given by this method have
                 * precedence over the default values given by the
                 * {@linkplain #setLocale(Locale) locale}.
                 */
                // @ts-ignore
                public setWeekDefinition(firstDayOfWeek: number, minimalDaysInFirstWeek: number): java.util.Calendar.Builder;
                /**
                 * Returns a {@code Calendar} built from the parameters set by the
                 * setter methods. The calendar type given by the {@link #setCalendarType(String)
                 * setCalendarType} method or the {@linkplain #setLocale(Locale) locale} is
                 * used to determine what {@code Calendar} to be created. If no explicit
                 * calendar type is given, the locale's default calendar is created.
                 * <p>If the calendar type is {@code "iso8601"}, the
                 * {@linkplain GregorianCalendar#setGregorianChange(Date) Gregorian change date}
                 * of a {@link GregorianCalendar} is set to {@code Date(Long.MIN_VALUE)}
                 * to be the <em>proleptic</em> Gregorian calendar. Its week definition
                 * parameters are also set to be <a
                 * href="GregorianCalendar.html#iso8601_compatible_setting">compatible
                 * with the ISO 8601 standard</a>. Note that the
                 * {@link GregorianCalendar#getCalendarType() getCalendarType} method of
                 * a {@code GregorianCalendar} created with {@code "iso8601"} returns
                 * {@code "gregory"}.
                 * <p>The default values are used for locale and time zone if these
                 * parameters haven't been given explicitly.
                 * <p>Any out of range field values are either normalized in lenient
                 * mode or detected as an invalid value in non-lenient mode.
                 */
                // @ts-ignore
                public build(): java.util.Calendar;
            }
        }
    }
}
