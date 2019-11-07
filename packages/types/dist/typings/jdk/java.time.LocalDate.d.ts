// @ts-nocheck
declare namespace java {
    namespace time {
        // @ts-ignore
         class LocalDate extends java.lang.Object {
            // @ts-ignore
            public static MIN: java.time.LocalDate;
            // @ts-ignore
            public static MAX: java.time.LocalDate;
            /**
             * Obtains the current date from the system clock in the default time-zone.
             * <p>
             * This will query the {@link Clock#systemDefaultZone() system clock} in the default
             * time-zone to obtain the current date.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(): java.time.LocalDate;
            /**
             * Obtains the current date from the system clock in the specified time-zone.
             * <p>
             * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date.
             * Specifying the time-zone avoids dependence on the default time-zone.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(zone: java.time.ZoneId): java.time.LocalDate;
            /**
             * Obtains the current date from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current date - today.
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             */
            // @ts-ignore
            public static now(clock: java.time.Clock): java.time.LocalDate;
            /**
             * Obtains an instance of {@code LocalDate} from a year, month and day.
             * <p>
             * This returns a {@code LocalDate} with the specified year, month and day-of-month.
             * The day must be valid for the year and month, otherwise an exception will be thrown.
             */
            // @ts-ignore
            public static of(year: number, month: java.time.Month, dayOfMonth: number): java.time.LocalDate;
            /**
             * Obtains an instance of {@code LocalDate} from a year, month and day.
             * <p>
             * This returns a {@code LocalDate} with the specified year, month and day-of-month.
             * The day must be valid for the year and month, otherwise an exception will be thrown.
             */
            // @ts-ignore
            public static of(year: number, month: number, dayOfMonth: number): java.time.LocalDate;
            /**
             * Obtains an instance of {@code LocalDate} from a year and day-of-year.
             * <p>
             * This returns a {@code LocalDate} with the specified year and day-of-year.
             * The day-of-year must be valid for the year, otherwise an exception will be thrown.
             */
            // @ts-ignore
            public static ofYearDay(year: number, dayOfYear: number): java.time.LocalDate;
            /**
             * Obtains an instance of {@code LocalDate} from the epoch day count.
             * <p>
             * This returns a {@code LocalDate} with the specified epoch-day.
             * The {@link ChronoField#EPOCH_DAY EPOCH_DAY} is a simple incrementing count
             * of days where day 0 is 1970-01-01. Negative numbers represent earlier days.
             */
            // @ts-ignore
            public static ofEpochDay(epochDay: number): java.time.LocalDate;
            /**
             * Obtains an instance of {@code LocalDate} from a temporal object.
             * <p>
             * This obtains a local date based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code LocalDate}.
             * <p>
             * The conversion uses the {@link TemporalQueries#localDate()} query, which relies
             * on extracting the {@link ChronoField#EPOCH_DAY EPOCH_DAY} field.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code LocalDate::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.LocalDate;
            /**
             * Obtains an instance of {@code LocalDate} from a text string such as {@code 2007-12-03}.
             * <p>
             * The string must represent a valid date and is parsed using
             * {@link java.time.format.DateTimeFormatter#ISO_LOCAL_DATE}.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.LocalDate;
            /**
             * Obtains an instance of {@code LocalDate} from a text string using a specific formatter.
             * <p>
             * The text is parsed using the formatter, returning a date.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence, formatter: java.time.format.DateTimeFormatter): java.time.LocalDate;
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this date can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range},
             * {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
             * methods will throw an exception.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The supported fields are:
             * <ul>
             * <li>{@code DAY_OF_WEEK}
             * <li>{@code ALIGNED_DAY_OF_WEEK_IN_MONTH}
             * <li>{@code ALIGNED_DAY_OF_WEEK_IN_YEAR}
             * <li>{@code DAY_OF_MONTH}
             * <li>{@code DAY_OF_YEAR}
             * <li>{@code EPOCH_DAY}
             * <li>{@code ALIGNED_WEEK_OF_MONTH}
             * <li>{@code ALIGNED_WEEK_OF_YEAR}
             * <li>{@code MONTH_OF_YEAR}
             * <li>{@code PROLEPTIC_MONTH}
             * <li>{@code YEAR_OF_ERA}
             * <li>{@code YEAR}
             * <li>{@code ERA}
             * </ul>
             * All other {@code ChronoField} instances will return false.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the field is supported is determined by the field.
             */
            // @ts-ignore
            public isSupported(field: java.time.temporal.TemporalField): boolean;
            /**
             * Checks if the specified unit is supported.
             * <p>
             * This checks if the specified unit can be added to, or subtracted from, this date.
             * If false, then calling the {@link #plus(long, TemporalUnit)} and
             * {@link #minus(long, TemporalUnit) minus} methods will throw an exception.
             * <p>
             * If the unit is a {@link ChronoUnit} then the query is implemented here.
             * The supported units are:
             * <ul>
             * <li>{@code DAYS}
             * <li>{@code WEEKS}
             * <li>{@code MONTHS}
             * <li>{@code YEARS}
             * <li>{@code DECADES}
             * <li>{@code CENTURIES}
             * <li>{@code MILLENNIA}
             * <li>{@code ERAS}
             * </ul>
             * All other {@code ChronoUnit} instances will return false.
             * <p>
             * If the unit is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.isSupportedBy(Temporal)}
             * passing {@code this} as the argument.
             * Whether the unit is supported is determined by the unit.
             */
            // @ts-ignore
            public isSupported(unit: java.time.temporal.TemporalUnit): boolean;
            /**
             * Gets the range of valid values for the specified field.
             * <p>
             * The range object expresses the minimum and maximum valid values for a field.
             * This date is used to enhance the accuracy of the returned range.
             * If it is not possible to return the range, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return
             * appropriate range instances.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.rangeRefinedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the range can be obtained is determined by the field.
             */
            // @ts-ignore
            public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
            /**
             * Gets the value of the specified field from this date as an {@code int}.
             * <p>
             * This queries this date for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this date, except {@code EPOCH_DAY} and {@code PROLEPTIC_MONTH}
             * which are too large to fit in an {@code int} and throw a {@code DateTimeException}.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
             * passing {@code this} as the argument. Whether the value can be obtained,
             * and what the value represents, is determined by the field.
             */
            // @ts-ignore
            public get(field: java.time.temporal.TemporalField): number;
            /**
             * Gets the value of the specified field from this date as a {@code long}.
             * <p>
             * This queries this date for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this date.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
             * passing {@code this} as the argument. Whether the value can be obtained,
             * and what the value represents, is determined by the field.
             */
            // @ts-ignore
            public getLong(field: java.time.temporal.TemporalField): number;
            /**
             * Gets the chronology of this date, which is the ISO calendar system.
             * <p>
             * The {@code Chronology} represents the calendar system in use.
             * The ISO-8601 calendar system is the modern civil calendar system used today
             * in most of the world. It is equivalent to the proleptic Gregorian calendar
             * system, in which today's rules for leap years are applied for all time.
             */
            // @ts-ignore
            public getChronology(): java.time.chrono.IsoChronology;
            /**
             * Gets the era applicable at this date.
             * <p>
             * The official ISO-8601 standard does not define eras, however {@code IsoChronology} does.
             * It defines two eras, 'CE' from year one onwards and 'BCE' from year zero backwards.
             * Since dates before the Julian-Gregorian cutover are not in line with history,
             * the cutover between 'BCE' and 'CE' is also not aligned with the commonly used
             * eras, often referred to using 'BC' and 'AD'.
             * <p>
             * Users of this class should typically ignore this method as it exists primarily
             * to fulfill the {@link ChronoLocalDate} contract where it is necessary to support
             * the Japanese calendar system.
             * <p>
             * The returned era will be a singleton capable of being compared with the constants
             * in {@link IsoChronology} using the {@code ==} operator.
             */
            // @ts-ignore
            public getEra(): java.time.chrono.Era;
            /**
             * Gets the year field.
             * <p>
             * This method returns the primitive {@code int} value for the year.
             * <p>
             * The year returned by this method is proleptic as per {@code get(YEAR)}.
             * To obtain the year-of-era, use {@code get(YEAR_OF_ERA)}.
             */
            // @ts-ignore
            public getYear(): number;
            /**
             * Gets the month-of-year field from 1 to 12.
             * <p>
             * This method returns the month as an {@code int} from 1 to 12.
             * Application code is frequently clearer if the enum {@link Month}
             * is used by calling {@link #getMonth()}.
             */
            // @ts-ignore
            public getMonthValue(): number;
            /**
             * Gets the month-of-year field using the {@code Month} enum.
             * <p>
             * This method returns the enum {@link Month} for the month.
             * This avoids confusion as to what {@code int} values mean.
             * If you need access to the primitive {@code int} value then the enum
             * provides the {@link Month#getValue() int value}.
             */
            // @ts-ignore
            public getMonth(): java.time.Month;
            /**
             * Gets the day-of-month field.
             * <p>
             * This method returns the primitive {@code int} value for the day-of-month.
             */
            // @ts-ignore
            public getDayOfMonth(): number;
            /**
             * Gets the day-of-year field.
             * <p>
             * This method returns the primitive {@code int} value for the day-of-year.
             */
            // @ts-ignore
            public getDayOfYear(): number;
            /**
             * Gets the day-of-week field, which is an enum {@code DayOfWeek}.
             * <p>
             * This method returns the enum {@link DayOfWeek} for the day-of-week.
             * This avoids confusion as to what {@code int} values mean.
             * If you need access to the primitive {@code int} value then the enum
             * provides the {@link DayOfWeek#getValue() int value}.
             * <p>
             * Additional information can be obtained from the {@code DayOfWeek}.
             * This includes textual names of the values.
             */
            // @ts-ignore
            public getDayOfWeek(): java.time.DayOfWeek;
            /**
             * Checks if the year is a leap year, according to the ISO proleptic
             * calendar system rules.
             * <p>
             * This method applies the current rules for leap years across the whole time-line.
             * In general, a year is a leap year if it is divisible by four without
             * remainder. However, years divisible by 100, are not leap years, with
             * the exception of years divisible by 400 which are.
             * <p>
             * For example, 1904 is a leap year it is divisible by 4.
             * 1900 was not a leap year as it is divisible by 100, however 2000 was a
             * leap year as it is divisible by 400.
             * <p>
             * The calculation is proleptic - applying the same rules into the far future and far past.
             * This is historically inaccurate, but is correct for the ISO-8601 standard.
             */
            // @ts-ignore
            public isLeapYear(): boolean;
            /**
             * Returns the length of the month represented by this date.
             * <p>
             * This returns the length of the month in days.
             * For example, a date in January would return 31.
             */
            // @ts-ignore
            public lengthOfMonth(): number;
            /**
             * Returns the length of the year represented by this date.
             * <p>
             * This returns the length of the year in days, either 365 or 366.
             */
            // @ts-ignore
            public lengthOfYear(): number;
            /**
             * Returns an adjusted copy of this date.
             * <p>
             * This returns a {@code LocalDate}, based on this one, with the date adjusted.
             * The adjustment takes place using the specified adjuster strategy object.
             * Read the documentation of the adjuster to understand what adjustment will be made.
             * <p>
             * A simple adjuster might simply set the one of the fields, such as the year field.
             * A more complex adjuster might set the date to the last day of the month.
             * <p>
             * A selection of common adjustments is provided in
             * {@link java.time.temporal.TemporalAdjusters TemporalAdjusters}.
             * These include finding the "last day of the month" and "next Wednesday".
             * Key date-time classes also implement the {@code TemporalAdjuster} interface,
             * such as {@link Month} and {@link java.time.MonthDay MonthDay}.
             * The adjuster is responsible for handling special cases, such as the varying
             * lengths of month and leap years.
             * <p>
             * For example this code returns a date on the last day of July:
             * <pre>
             * import static java.time.Month.*;
             * import static java.time.temporal.TemporalAdjusters.*;
             * result = localDate.with(JULY).with(lastDayOfMonth());
             * </pre>
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalAdjuster#adjustInto(Temporal)} method on the
             * specified adjuster passing {@code this} as the argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.LocalDate;
            /**
             * Returns a copy of this date with the specified field set to a new value.
             * <p>
             * This returns a {@code LocalDate}, based on this one, with the value
             * for the specified field changed.
             * This can be used to change any supported field, such as the year, month or day-of-month.
             * If it is not possible to set the value, because the field is not supported or for
             * some other reason, an exception is thrown.
             * <p>
             * In some cases, changing the specified field can cause the resulting date to become invalid,
             * such as changing the month from 31st January to February would make the day-of-month invalid.
             * In cases like this, the field is responsible for resolving the date. Typically it will choose
             * the previous valid date, which would be the last valid day of February in this example.
             * <p>
             * If the field is a {@link ChronoField} then the adjustment is implemented here.
             * The supported fields behave as follows:
             * <ul>
             * <li>{@code DAY_OF_WEEK} -
             * Returns a {@code LocalDate} with the specified day-of-week.
             * The date is adjusted up to 6 days forward or backward within the boundary
             * of a Monday to Sunday week.
             * <li>{@code ALIGNED_DAY_OF_WEEK_IN_MONTH} -
             * Returns a {@code LocalDate} with the specified aligned-day-of-week.
             * The date is adjusted to the specified month-based aligned-day-of-week.
             * Aligned weeks are counted such that the first week of a given month starts
             * on the first day of that month.
             * This may cause the date to be moved up to 6 days into the following month.
             * <li>{@code ALIGNED_DAY_OF_WEEK_IN_YEAR} -
             * Returns a {@code LocalDate} with the specified aligned-day-of-week.
             * The date is adjusted to the specified year-based aligned-day-of-week.
             * Aligned weeks are counted such that the first week of a given year starts
             * on the first day of that year.
             * This may cause the date to be moved up to 6 days into the following year.
             * <li>{@code DAY_OF_MONTH} -
             * Returns a {@code LocalDate} with the specified day-of-month.
             * The month and year will be unchanged. If the day-of-month is invalid for the
             * year and month, then a {@code DateTimeException} is thrown.
             * <li>{@code DAY_OF_YEAR} -
             * Returns a {@code LocalDate} with the specified day-of-year.
             * The year will be unchanged. If the day-of-year is invalid for the
             * year, then a {@code DateTimeException} is thrown.
             * <li>{@code EPOCH_DAY} -
             * Returns a {@code LocalDate} with the specified epoch-day.
             * This completely replaces the date and is equivalent to {@link #ofEpochDay(long)}.
             * <li>{@code ALIGNED_WEEK_OF_MONTH} -
             * Returns a {@code LocalDate} with the specified aligned-week-of-month.
             * Aligned weeks are counted such that the first week of a given month starts
             * on the first day of that month.
             * This adjustment moves the date in whole week chunks to match the specified week.
             * The result will have the same day-of-week as this date.
             * This may cause the date to be moved into the following month.
             * <li>{@code ALIGNED_WEEK_OF_YEAR} -
             * Returns a {@code LocalDate} with the specified aligned-week-of-year.
             * Aligned weeks are counted such that the first week of a given year starts
             * on the first day of that year.
             * This adjustment moves the date in whole week chunks to match the specified week.
             * The result will have the same day-of-week as this date.
             * This may cause the date to be moved into the following year.
             * <li>{@code MONTH_OF_YEAR} -
             * Returns a {@code LocalDate} with the specified month-of-year.
             * The year will be unchanged. The day-of-month will also be unchanged,
             * unless it would be invalid for the new month and year. In that case, the
             * day-of-month is adjusted to the maximum valid value for the new month and year.
             * <li>{@code PROLEPTIC_MONTH} -
             * Returns a {@code LocalDate} with the specified proleptic-month.
             * The day-of-month will be unchanged, unless it would be invalid for the new month
             * and year. In that case, the day-of-month is adjusted to the maximum valid value
             * for the new month and year.
             * <li>{@code YEAR_OF_ERA} -
             * Returns a {@code LocalDate} with the specified year-of-era.
             * The era and month will be unchanged. The day-of-month will also be unchanged,
             * unless it would be invalid for the new month and year. In that case, the
             * day-of-month is adjusted to the maximum valid value for the new month and year.
             * <li>{@code YEAR} -
             * Returns a {@code LocalDate} with the specified year.
             * The month will be unchanged. The day-of-month will also be unchanged,
             * unless it would be invalid for the new month and year. In that case, the
             * day-of-month is adjusted to the maximum valid value for the new month and year.
             * <li>{@code ERA} -
             * Returns a {@code LocalDate} with the specified era.
             * The year-of-era and month will be unchanged. The day-of-month will also be unchanged,
             * unless it would be invalid for the new month and year. In that case, the
             * day-of-month is adjusted to the maximum valid value for the new month and year.
             * </ul>
             * <p>
             * In all cases, if the new value is outside the valid range of values for the field
             * then a {@code DateTimeException} will be thrown.
             * <p>
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.adjustInto(Temporal, long)}
             * passing {@code this} as the argument. In this case, the field determines
             * whether and how to adjust the instant.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public with(field: java.time.temporal.TemporalField, newValue: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the year altered.
             * <p>
             * If the day-of-month is invalid for the year, it will be changed to the last valid day of the month.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withYear(year: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the month-of-year altered.
             * <p>
             * If the day-of-month is invalid for the year, it will be changed to the last valid day of the month.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMonth(month: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the day-of-month altered.
             * <p>
             * If the resulting date is invalid, an exception is thrown.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withDayOfMonth(dayOfMonth: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the day-of-year altered.
             * <p>
             * If the resulting date is invalid, an exception is thrown.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withDayOfYear(dayOfYear: number): java.time.LocalDate;
            /**
             * Returns a copy of this date with the specified amount added.
             * <p>
             * This returns a {@code LocalDate}, based on this one, with the specified amount added.
             * The amount is typically {@link Period} but may be any other type implementing
             * the {@link TemporalAmount} interface.
             * <p>
             * The calculation is delegated to the amount object by calling
             * {@link TemporalAmount#addTo(Temporal)}. The amount implementation is free
             * to implement the addition in any way it wishes, however it typically
             * calls back to {@link #plus(long, TemporalUnit)}. Consult the documentation
             * of the amount implementation to determine if it can be successfully added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.LocalDate;
            /**
             * Returns a copy of this date with the specified amount added.
             * <p>
             * This returns a {@code LocalDate}, based on this one, with the amount
             * in terms of the unit added. If it is not possible to add the amount, because the
             * unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * In some cases, adding the amount can cause the resulting date to become invalid.
             * For example, adding one month to 31st January would result in 31st February.
             * In cases like this, the unit is responsible for resolving the date.
             * Typically it will choose the previous valid date, which would be the last valid
             * day of February in this example.
             * <p>
             * If the field is a {@link ChronoUnit} then the addition is implemented here.
             * The supported fields behave as follows:
             * <ul>
             * <li>{@code DAYS} -
             * Returns a {@code LocalDate} with the specified number of days added.
             * This is equivalent to {@link #plusDays(long)}.
             * <li>{@code WEEKS} -
             * Returns a {@code LocalDate} with the specified number of weeks added.
             * This is equivalent to {@link #plusWeeks(long)} and uses a 7 day week.
             * <li>{@code MONTHS} -
             * Returns a {@code LocalDate} with the specified number of months added.
             * This is equivalent to {@link #plusMonths(long)}.
             * The day-of-month will be unchanged unless it would be invalid for the new
             * month and year. In that case, the day-of-month is adjusted to the maximum
             * valid value for the new month and year.
             * <li>{@code YEARS} -
             * Returns a {@code LocalDate} with the specified number of years added.
             * This is equivalent to {@link #plusYears(long)}.
             * The day-of-month will be unchanged unless it would be invalid for the new
             * month and year. In that case, the day-of-month is adjusted to the maximum
             * valid value for the new month and year.
             * <li>{@code DECADES} -
             * Returns a {@code LocalDate} with the specified number of decades added.
             * This is equivalent to calling {@link #plusYears(long)} with the amount
             * multiplied by 10.
             * The day-of-month will be unchanged unless it would be invalid for the new
             * month and year. In that case, the day-of-month is adjusted to the maximum
             * valid value for the new month and year.
             * <li>{@code CENTURIES} -
             * Returns a {@code LocalDate} with the specified number of centuries added.
             * This is equivalent to calling {@link #plusYears(long)} with the amount
             * multiplied by 100.
             * The day-of-month will be unchanged unless it would be invalid for the new
             * month and year. In that case, the day-of-month is adjusted to the maximum
             * valid value for the new month and year.
             * <li>{@code MILLENNIA} -
             * Returns a {@code LocalDate} with the specified number of millennia added.
             * This is equivalent to calling {@link #plusYears(long)} with the amount
             * multiplied by 1,000.
             * The day-of-month will be unchanged unless it would be invalid for the new
             * month and year. In that case, the day-of-month is adjusted to the maximum
             * valid value for the new month and year.
             * <li>{@code ERAS} -
             * Returns a {@code LocalDate} with the specified number of eras added.
             * Only two eras are supported so the amount must be one, zero or minus one.
             * If the amount is non-zero then the year is changed such that the year-of-era
             * is unchanged.
             * The day-of-month will be unchanged unless it would be invalid for the new
             * month and year. In that case, the day-of-month is adjusted to the maximum
             * valid value for the new month and year.
             * </ul>
             * <p>
             * All other {@code ChronoUnit} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.addTo(Temporal, long)}
             * passing {@code this} as the argument. In this case, the unit determines
             * whether and how to perform the addition.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the specified number of years added.
             * <p>
             * This method adds the specified amount to the years field in three steps:
             * <ol>
             * <li>Add the input years to the year field</li>
             * <li>Check if the resulting date would be invalid</li>
             * <li>Adjust the day-of-month to the last valid day if necessary</li>
             * </ol>
             * <p>
             * For example, 2008-02-29 (leap year) plus one year would result in the
             * invalid date 2009-02-29 (standard year). Instead of returning an invalid
             * result, the last valid day of the month, 2009-02-28, is selected instead.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusYears(yearsToAdd: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the specified number of months added.
             * <p>
             * This method adds the specified amount to the months field in three steps:
             * <ol>
             * <li>Add the input months to the month-of-year field</li>
             * <li>Check if the resulting date would be invalid</li>
             * <li>Adjust the day-of-month to the last valid day if necessary</li>
             * </ol>
             * <p>
             * For example, 2007-03-31 plus one month would result in the invalid date
             * 2007-04-31. Instead of returning an invalid result, the last valid day
             * of the month, 2007-04-30, is selected instead.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMonths(monthsToAdd: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the specified number of weeks added.
             * <p>
             * This method adds the specified amount in weeks to the days field incrementing
             * the month and year fields as necessary to ensure the result remains valid.
             * The result is only invalid if the maximum/minimum year is exceeded.
             * <p>
             * For example, 2008-12-31 plus one week would result in 2009-01-07.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusWeeks(weeksToAdd: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the specified number of days added.
             * <p>
             * This method adds the specified amount to the days field incrementing the
             * month and year fields as necessary to ensure the result remains valid.
             * The result is only invalid if the maximum/minimum year is exceeded.
             * <p>
             * For example, 2008-12-31 plus one day would result in 2009-01-01.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusDays(daysToAdd: number): java.time.LocalDate;
            /**
             * Returns a copy of this date with the specified amount subtracted.
             * <p>
             * This returns a {@code LocalDate}, based on this one, with the specified amount subtracted.
             * The amount is typically {@link Period} but may be any other type implementing
             * the {@link TemporalAmount} interface.
             * <p>
             * The calculation is delegated to the amount object by calling
             * {@link TemporalAmount#subtractFrom(Temporal)}. The amount implementation is free
             * to implement the subtraction in any way it wishes, however it typically
             * calls back to {@link #minus(long, TemporalUnit)}. Consult the documentation
             * of the amount implementation to determine if it can be successfully subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.LocalDate;
            /**
             * Returns a copy of this date with the specified amount subtracted.
             * <p>
             * This returns a {@code LocalDate}, based on this one, with the amount
             * in terms of the unit subtracted. If it is not possible to subtract the amount,
             * because the unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
             * See that method for a full description of how addition, and thus subtraction, works.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the specified number of years subtracted.
             * <p>
             * This method subtracts the specified amount from the years field in three steps:
             * <ol>
             * <li>Subtract the input years from the year field</li>
             * <li>Check if the resulting date would be invalid</li>
             * <li>Adjust the day-of-month to the last valid day if necessary</li>
             * </ol>
             * <p>
             * For example, 2008-02-29 (leap year) minus one year would result in the
             * invalid date 2007-02-29 (standard year). Instead of returning an invalid
             * result, the last valid day of the month, 2007-02-28, is selected instead.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusYears(yearsToSubtract: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the specified number of months subtracted.
             * <p>
             * This method subtracts the specified amount from the months field in three steps:
             * <ol>
             * <li>Subtract the input months from the month-of-year field</li>
             * <li>Check if the resulting date would be invalid</li>
             * <li>Adjust the day-of-month to the last valid day if necessary</li>
             * </ol>
             * <p>
             * For example, 2007-03-31 minus one month would result in the invalid date
             * 2007-02-31. Instead of returning an invalid result, the last valid day
             * of the month, 2007-02-28, is selected instead.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMonths(monthsToSubtract: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the specified number of weeks subtracted.
             * <p>
             * This method subtracts the specified amount in weeks from the days field decrementing
             * the month and year fields as necessary to ensure the result remains valid.
             * The result is only invalid if the maximum/minimum year is exceeded.
             * <p>
             * For example, 2009-01-07 minus one week would result in 2008-12-31.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusWeeks(weeksToSubtract: number): java.time.LocalDate;
            /**
             * Returns a copy of this {@code LocalDate} with the specified number of days subtracted.
             * <p>
             * This method subtracts the specified amount from the days field decrementing the
             * month and year fields as necessary to ensure the result remains valid.
             * The result is only invalid if the maximum/minimum year is exceeded.
             * <p>
             * For example, 2009-01-01 minus one day would result in 2008-12-31.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusDays(daysToSubtract: number): java.time.LocalDate;
            /**
             * Queries this date using the specified query.
             * <p>
             * This queries this date using the specified query strategy object.
             * The {@code TemporalQuery} object defines the logic to be used to
             * obtain the result. Read the documentation of the query to understand
             * what the result of this method will be.
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalQuery#queryFrom(TemporalAccessor)} method on the
             * specified query passing {@code this} as the argument.
             */
            // @ts-ignore
            public query(query: java.time.temporal.TemporalQuery): java.lang.Object;
            /**
             * Adjusts the specified temporal object to have the same date as this object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the date changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * passing {@link ChronoField#EPOCH_DAY} as the field.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisLocalDate.adjustInto(temporal);
             * temporal = temporal.with(thisLocalDate);
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Calculates the amount of time until another date in terms of the specified unit.
             * <p>
             * This calculates the amount of time between two {@code LocalDate}
             * objects in terms of a single {@code TemporalUnit}.
             * The start and end points are {@code this} and the specified date.
             * The result will be negative if the end is before the start.
             * The {@code Temporal} passed to this method is converted to a
             * {@code LocalDate} using {@link #from(TemporalAccessor)}.
             * For example, the amount in days between two dates can be calculated
             * using {@code startDate.until(endDate, DAYS)}.
             * <p>
             * The calculation returns a whole number, representing the number of
             * complete units between the two dates.
             * For example, the amount in months between 2012-06-15 and 2012-08-14
             * will only be one month as it is one day short of two months.
             * <p>
             * There are two equivalent ways of using this method.
             * The first is to invoke this method.
             * The second is to use {@link TemporalUnit#between(Temporal, Temporal)}:
             * <pre>
             * // these two lines are equivalent
             * amount = start.until(end, MONTHS);
             * amount = MONTHS.between(start, end);
             * </pre>
             * The choice should be made based on which makes the code more readable.
             * <p>
             * The calculation is implemented in this method for {@link ChronoUnit}.
             * The units {@code DAYS}, {@code WEEKS}, {@code MONTHS}, {@code YEARS},
             * {@code DECADES}, {@code CENTURIES}, {@code MILLENNIA} and {@code ERAS}
             * are supported. Other {@code ChronoUnit} values will throw an exception.
             * <p>
             * If the unit is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.between(Temporal, Temporal)}
             * passing {@code this} as the first argument and the converted input temporal
             * as the second argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public until(endExclusive: java.time.temporal.Temporal, unit: java.time.temporal.TemporalUnit): number;
            /**
             * Calculates the period between this date and another date as a {@code Period}.
             * <p>
             * This calculates the period between two dates in terms of years, months and days.
             * The start and end points are {@code this} and the specified date.
             * The result will be negative if the end is before the start.
             * The negative sign will be the same in each of year, month and day.
             * <p>
             * The calculation is performed using the ISO calendar system.
             * If necessary, the input date will be converted to ISO.
             * <p>
             * The start date is included, but the end date is not.
             * The period is calculated by removing complete months, then calculating
             * the remaining number of days, adjusting to ensure that both have the same sign.
             * The number of months is then normalized into years and months based on a 12 month year.
             * A month is considered to be complete if the end day-of-month is greater
             * than or equal to the start day-of-month.
             * For example, from {@code 2010-01-15} to {@code 2011-03-18} is "1 year, 2 months and 3 days".
             * <p>
             * There are two equivalent ways of using this method.
             * The first is to invoke this method.
             * The second is to use {@link Period#between(LocalDate, LocalDate)}:
             * <pre>
             * // these two lines are equivalent
             * period = start.until(end);
             * period = Period.between(start, end);
             * </pre>
             * The choice should be made based on which makes the code more readable.
             */
            // @ts-ignore
            public until(endDateExclusive: java.time.chrono.ChronoLocalDate): java.time.Period;
            /**
             * Formats this date using the specified formatter.
             * <p>
             * This date will be passed to the formatter to produce a string.
             */
            // @ts-ignore
            public format(formatter: java.time.format.DateTimeFormatter): string;
            /**
             * Combines this date with a time to create a {@code LocalDateTime}.
             * <p>
             * This returns a {@code LocalDateTime} formed from this date at the specified time.
             * All possible combinations of date and time are valid.
             */
            // @ts-ignore
            public atTime(time: java.time.LocalTime): java.time.LocalDateTime;
            /**
             * Combines this date with a time to create a {@code LocalDateTime}.
             * <p>
             * This returns a {@code LocalDateTime} formed from this date at the
             * specified hour and minute.
             * The seconds and nanosecond fields will be set to zero.
             * The individual time fields must be within their valid range.
             * All possible combinations of date and time are valid.
             */
            // @ts-ignore
            public atTime(hour: number, minute: number): java.time.LocalDateTime;
            /**
             * Combines this date with a time to create a {@code LocalDateTime}.
             * <p>
             * This returns a {@code LocalDateTime} formed from this date at the
             * specified hour, minute and second.
             * The nanosecond field will be set to zero.
             * The individual time fields must be within their valid range.
             * All possible combinations of date and time are valid.
             */
            // @ts-ignore
            public atTime(hour: number, minute: number, second: number): java.time.LocalDateTime;
            /**
             * Combines this date with a time to create a {@code LocalDateTime}.
             * <p>
             * This returns a {@code LocalDateTime} formed from this date at the
             * specified hour, minute, second and nanosecond.
             * The individual time fields must be within their valid range.
             * All possible combinations of date and time are valid.
             */
            // @ts-ignore
            public atTime(hour: number, minute: number, second: number, nanoOfSecond: number): java.time.LocalDateTime;
            /**
             * Combines this date with an offset time to create an {@code OffsetDateTime}.
             * <p>
             * This returns an {@code OffsetDateTime} formed from this date at the specified time.
             * All possible combinations of date and time are valid.
             */
            // @ts-ignore
            public atTime(time: java.time.OffsetTime): java.time.OffsetDateTime;
            /**
             * Combines this date with the time of midnight to create a {@code LocalDateTime}
             * at the start of this date.
             * <p>
             * This returns a {@code LocalDateTime} formed from this date at the time of
             * midnight, 00:00, at the start of this date.
             */
            // @ts-ignore
            public atStartOfDay(): java.time.LocalDateTime;
            /**
             * Returns a zoned date-time from this date at the earliest valid time according
             * to the rules in the time-zone.
             * <p>
             * Time-zone rules, such as daylight savings, mean that not every local date-time
             * is valid for the specified zone, thus the local date-time may not be midnight.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, there are two valid offsets, and the earlier one is used,
             * corresponding to the first occurrence of midnight on the date.
             * In the case of a gap, the zoned date-time will represent the instant just after the gap.
             * <p>
             * If the zone ID is a {@link ZoneOffset}, then the result always has a time of midnight.
             * <p>
             * To convert to a specific time in a given time-zone call {@link #atTime(LocalTime)}
             * followed by {@link LocalDateTime#atZone(ZoneId)}.
             */
            // @ts-ignore
            public atStartOfDay(zone: java.time.ZoneId): java.time.ZonedDateTime;
            // @ts-ignore
            public toEpochDay(): number;
            /**
             * Compares this date to another date.
             * <p>
             * The comparison is primarily based on the date, from earliest to latest.
             * It is "consistent with equals", as defined by {@link Comparable}.
             * <p>
             * If all the dates being compared are instances of {@code LocalDate},
             * then the comparison will be entirely based on the date.
             * If some dates being compared are in different chronologies, then the
             * chronology is also considered, see {@link java.time.chrono.ChronoLocalDate#compareTo}.
             */
            // @ts-ignore
            public compareTo(other: java.time.chrono.ChronoLocalDate): number;
            /**
             * Checks if this date is after the specified date.
             * <p>
             * This checks to see if this date represents a point on the
             * local time-line after the other date.
             * <pre>
             * LocalDate a = LocalDate.of(2012, 6, 30);
             * LocalDate b = LocalDate.of(2012, 7, 1);
             * a.isAfter(b) == false
             * a.isAfter(a) == false
             * b.isAfter(a) == true
             * </pre>
             * <p>
             * This method only considers the position of the two dates on the local time-line.
             * It does not take into account the chronology, or calendar system.
             * This is different from the comparison in {@link #compareTo(ChronoLocalDate)},
             * but is the same approach as {@link ChronoLocalDate#timeLineOrder()}.
             */
            // @ts-ignore
            public isAfter(other: java.time.chrono.ChronoLocalDate): boolean;
            /**
             * Checks if this date is before the specified date.
             * <p>
             * This checks to see if this date represents a point on the
             * local time-line before the other date.
             * <pre>
             * LocalDate a = LocalDate.of(2012, 6, 30);
             * LocalDate b = LocalDate.of(2012, 7, 1);
             * a.isBefore(b) == true
             * a.isBefore(a) == false
             * b.isBefore(a) == false
             * </pre>
             * <p>
             * This method only considers the position of the two dates on the local time-line.
             * It does not take into account the chronology, or calendar system.
             * This is different from the comparison in {@link #compareTo(ChronoLocalDate)},
             * but is the same approach as {@link ChronoLocalDate#timeLineOrder()}.
             */
            // @ts-ignore
            public isBefore(other: java.time.chrono.ChronoLocalDate): boolean;
            /**
             * Checks if this date is equal to the specified date.
             * <p>
             * This checks to see if this date represents the same point on the
             * local time-line as the other date.
             * <pre>
             * LocalDate a = LocalDate.of(2012, 6, 30);
             * LocalDate b = LocalDate.of(2012, 7, 1);
             * a.isEqual(b) == false
             * a.isEqual(a) == true
             * b.isEqual(a) == false
             * </pre>
             * <p>
             * This method only considers the position of the two dates on the local time-line.
             * It does not take into account the chronology, or calendar system.
             * This is different from the comparison in {@link #compareTo(ChronoLocalDate)}
             * but is the same approach as {@link ChronoLocalDate#timeLineOrder()}.
             */
            // @ts-ignore
            public isEqual(other: java.time.chrono.ChronoLocalDate): boolean;
            /**
             * Checks if this date is equal to another date.
             * <p>
             * Compares this {@code LocalDate} with another ensuring that the date is the same.
             * <p>
             * Only objects of type {@code LocalDate} are compared, other types return false.
             * To compare the dates of two {@code TemporalAccessor} instances, including dates
             * in two different chronologies, use {@link ChronoField#EPOCH_DAY} as a comparator.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this date.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Outputs this date as a {@code String}, such as {@code 2007-12-03}.
             * <p>
             * The output will be in the ISO-8601 format {@code uuuu-MM-dd}.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
