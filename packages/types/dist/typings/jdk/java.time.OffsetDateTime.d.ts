// @ts-nocheck
declare namespace java {
    namespace time {
        // @ts-ignore
         class OffsetDateTime extends java.lang.Object {
            // @ts-ignore
            public static MIN: java.time.OffsetDateTime;
            // @ts-ignore
            public static MAX: java.time.OffsetDateTime;
            /**
             * Gets a comparator that compares two {@code OffsetDateTime} instances
             * based solely on the instant.
             * <p>
             * This method differs from the comparison in {@link #compareTo} in that it
             * only compares the underlying instant.
             */
            // @ts-ignore
            public static timeLineOrder(): java.util.Comparator;
            /**
             * Obtains the current date-time from the system clock in the default time-zone.
             * <p>
             * This will query the {@link Clock#systemDefaultZone() system clock} in the default
             * time-zone to obtain the current date-time.
             * The offset will be calculated from the time-zone in the clock.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(): java.time.OffsetDateTime;
            /**
             * Obtains the current date-time from the system clock in the specified time-zone.
             * <p>
             * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date-time.
             * Specifying the time-zone avoids dependence on the default time-zone.
             * The offset will be calculated from the specified time-zone.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(zone: java.time.ZoneId): java.time.OffsetDateTime;
            /**
             * Obtains the current date-time from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current date-time.
             * The offset will be calculated from the time-zone in the clock.
             * <p>
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             */
            // @ts-ignore
            public static now(clock: java.time.Clock): java.time.OffsetDateTime;
            /**
             * Obtains an instance of {@code OffsetDateTime} from a date, time and offset.
             * <p>
             * This creates an offset date-time with the specified local date, time and offset.
             */
            // @ts-ignore
            public static of(date: java.time.LocalDate, time: java.time.LocalTime, offset: java.time.ZoneOffset): java.time.OffsetDateTime;
            /**
             * Obtains an instance of {@code OffsetDateTime} from a date-time and offset.
             * <p>
             * This creates an offset date-time with the specified local date-time and offset.
             */
            // @ts-ignore
            public static of(dateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset): java.time.OffsetDateTime;
            /**
             * Obtains an instance of {@code OffsetDateTime} from a year, month, day,
             * hour, minute, second, nanosecond and offset.
             * <p>
             * This creates an offset date-time with the seven specified fields.
             * <p>
             * This method exists primarily for writing test cases.
             * Non test-code will typically use other methods to create an offset time.
             * {@code LocalDateTime} has five additional convenience variants of the
             * equivalent factory method taking fewer arguments.
             * They are not provided here to reduce the footprint of the API.
             */
            // @ts-ignore
            public static of(year: number, month: number, dayOfMonth: number, hour: number, minute: number, second: number, nanoOfSecond: number, offset: java.time.ZoneOffset): java.time.OffsetDateTime;
            /**
             * Obtains an instance of {@code OffsetDateTime} from an {@code Instant} and zone ID.
             * <p>
             * This creates an offset date-time with the same instant as that specified.
             * Finding the offset from UTC/Greenwich is simple as there is only one valid
             * offset for each instant.
             */
            // @ts-ignore
            public static ofInstant(instant: java.time.Instant, zone: java.time.ZoneId): java.time.OffsetDateTime;
            /**
             * Obtains an instance of {@code OffsetDateTime} from a temporal object.
             * <p>
             * This obtains an offset date-time based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code OffsetDateTime}.
             * <p>
             * The conversion will first obtain a {@code ZoneOffset} from the temporal object.
             * It will then try to obtain a {@code LocalDateTime}, falling back to an {@code Instant} if necessary.
             * The result will be the combination of {@code ZoneOffset} with either
             * with {@code LocalDateTime} or {@code Instant}.
             * Implementations are permitted to perform optimizations such as accessing
             * those fields that are equivalent to the relevant objects.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code OffsetDateTime::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.OffsetDateTime;
            /**
             * Obtains an instance of {@code OffsetDateTime} from a text string
             * such as {@code 2007-12-03T10:15:30+01:00}.
             * <p>
             * The string must represent a valid date-time and is parsed using
             * {@link java.time.format.DateTimeFormatter#ISO_OFFSET_DATE_TIME}.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.OffsetDateTime;
            /**
             * Obtains an instance of {@code OffsetDateTime} from a text string using a specific formatter.
             * <p>
             * The text is parsed using the formatter, returning a date-time.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence, formatter: java.time.format.DateTimeFormatter): java.time.OffsetDateTime;
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this date-time can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range},
             * {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
             * methods will throw an exception.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The supported fields are:
             * <ul>
             * <li>{@code NANO_OF_SECOND}
             * <li>{@code NANO_OF_DAY}
             * <li>{@code MICRO_OF_SECOND}
             * <li>{@code MICRO_OF_DAY}
             * <li>{@code MILLI_OF_SECOND}
             * <li>{@code MILLI_OF_DAY}
             * <li>{@code SECOND_OF_MINUTE}
             * <li>{@code SECOND_OF_DAY}
             * <li>{@code MINUTE_OF_HOUR}
             * <li>{@code MINUTE_OF_DAY}
             * <li>{@code HOUR_OF_AMPM}
             * <li>{@code CLOCK_HOUR_OF_AMPM}
             * <li>{@code HOUR_OF_DAY}
             * <li>{@code CLOCK_HOUR_OF_DAY}
             * <li>{@code AMPM_OF_DAY}
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
             * <li>{@code INSTANT_SECONDS}
             * <li>{@code OFFSET_SECONDS}
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
             * This checks if the specified unit can be added to, or subtracted from, this date-time.
             * If false, then calling the {@link #plus(long, TemporalUnit)} and
             * {@link #minus(long, TemporalUnit) minus} methods will throw an exception.
             * <p>
             * If the unit is a {@link ChronoUnit} then the query is implemented here.
             * The supported units are:
             * <ul>
             * <li>{@code NANOS}
             * <li>{@code MICROS}
             * <li>{@code MILLIS}
             * <li>{@code SECONDS}
             * <li>{@code MINUTES}
             * <li>{@code HOURS}
             * <li>{@code HALF_DAYS}
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
             * This date-time is used to enhance the accuracy of the returned range.
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
             * Gets the value of the specified field from this date-time as an {@code int}.
             * <p>
             * This queries this date-time for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this date-time, except {@code NANO_OF_DAY}, {@code MICRO_OF_DAY},
             * {@code EPOCH_DAY}, {@code PROLEPTIC_MONTH} and {@code INSTANT_SECONDS} which are too
             * large to fit in an {@code int} and throw a {@code DateTimeException}.
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
             * Gets the value of the specified field from this date-time as a {@code long}.
             * <p>
             * This queries this date-time for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this date-time.
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
             * Gets the zone offset, such as '+01:00'.
             * <p>
             * This is the offset of the local date-time from UTC/Greenwich.
             */
            // @ts-ignore
            public getOffset(): java.time.ZoneOffset;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified offset ensuring
             * that the result has the same local date-time.
             * <p>
             * This method returns an object with the same {@code LocalDateTime} and the specified {@code ZoneOffset}.
             * No calculation is needed or performed.
             * For example, if this time represents {@code 2007-12-03T10:30+02:00} and the offset specified is
             * {@code +03:00}, then this method will return {@code 2007-12-03T10:30+03:00}.
             * <p>
             * To take into account the difference between the offsets, and adjust the time fields,
             * use {@link #withOffsetSameInstant}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withOffsetSameLocal(offset: java.time.ZoneOffset): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified offset ensuring
             * that the result is at the same instant.
             * <p>
             * This method returns an object with the specified {@code ZoneOffset} and a {@code LocalDateTime}
             * adjusted by the difference between the two offsets.
             * This will result in the old and new objects representing the same instant.
             * This is useful for finding the local time in a different offset.
             * For example, if this time represents {@code 2007-12-03T10:30+02:00} and the offset specified is
             * {@code +03:00}, then this method will return {@code 2007-12-03T11:30+03:00}.
             * <p>
             * To change the offset without adjusting the local time use {@link #withOffsetSameLocal}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withOffsetSameInstant(offset: java.time.ZoneOffset): java.time.OffsetDateTime;
            /**
             * Gets the {@code LocalDateTime} part of this date-time.
             * <p>
             * This returns a {@code LocalDateTime} with the same year, month, day and time
             * as this date-time.
             */
            // @ts-ignore
            public toLocalDateTime(): java.time.LocalDateTime;
            /**
             * Gets the {@code LocalDate} part of this date-time.
             * <p>
             * This returns a {@code LocalDate} with the same year, month and day
             * as this date-time.
             */
            // @ts-ignore
            public toLocalDate(): java.time.LocalDate;
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
             * Gets the {@code LocalTime} part of this date-time.
             * <p>
             * This returns a {@code LocalTime} with the same hour, minute, second and
             * nanosecond as this date-time.
             */
            // @ts-ignore
            public toLocalTime(): java.time.LocalTime;
            /**
             * Gets the hour-of-day field.
             */
            // @ts-ignore
            public getHour(): number;
            /**
             * Gets the minute-of-hour field.
             */
            // @ts-ignore
            public getMinute(): number;
            /**
             * Gets the second-of-minute field.
             */
            // @ts-ignore
            public getSecond(): number;
            /**
             * Gets the nano-of-second field.
             */
            // @ts-ignore
            public getNano(): number;
            /**
             * Returns an adjusted copy of this date-time.
             * <p>
             * This returns an {@code OffsetDateTime}, based on this one, with the date-time adjusted.
             * The adjustment takes place using the specified adjuster strategy object.
             * Read the documentation of the adjuster to understand what adjustment will be made.
             * <p>
             * A simple adjuster might simply set the one of the fields, such as the year field.
             * A more complex adjuster might set the date to the last day of the month.
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
             * result = offsetDateTime.with(JULY).with(lastDayOfMonth());
             * </pre>
             * <p>
             * The classes {@link LocalDate}, {@link LocalTime} and {@link ZoneOffset} implement
             * {@code TemporalAdjuster}, thus this method can be used to change the date, time or offset:
             * <pre>
             * result = offsetDateTime.with(date);
             * result = offsetDateTime.with(time);
             * result = offsetDateTime.with(offset);
             * </pre>
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalAdjuster#adjustInto(Temporal)} method on the
             * specified adjuster passing {@code this} as the argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.OffsetDateTime;
            /**
             * Returns a copy of this date-time with the specified field set to a new value.
             * <p>
             * This returns an {@code OffsetDateTime}, based on this one, with the value
             * for the specified field changed.
             * This can be used to change any supported field, such as the year, month or day-of-month.
             * If it is not possible to set the value, because the field is not supported or for
             * some other reason, an exception is thrown.
             * <p>
             * In some cases, changing the specified field can cause the resulting date-time to become invalid,
             * such as changing the month from 31st January to February would make the day-of-month invalid.
             * In cases like this, the field is responsible for resolving the date. Typically it will choose
             * the previous valid date, which would be the last valid day of February in this example.
             * <p>
             * If the field is a {@link ChronoField} then the adjustment is implemented here.
             * <p>
             * The {@code INSTANT_SECONDS} field will return a date-time with the specified instant.
             * The offset and nano-of-second are unchanged.
             * If the new instant value is outside the valid range then a {@code DateTimeException} will be thrown.
             * <p>
             * The {@code OFFSET_SECONDS} field will return a date-time with the specified offset.
             * The local date-time is unaltered. If the new offset value is outside the valid range
             * then a {@code DateTimeException} will be thrown.
             * <p>
             * The other {@link #isSupported(TemporalField) supported fields} will behave as per
             * the matching method on {@link LocalDateTime#with(TemporalField, long) LocalDateTime}.
             * In this case, the offset is not part of the calculation and will be unchanged.
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
            public with(field: java.time.temporal.TemporalField, newValue: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the year altered.
             * <p>
             * The time and offset do not affect the calculation and will be the same in the result.
             * If the day-of-month is invalid for the year, it will be changed to the last valid day of the month.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withYear(year: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the month-of-year altered.
             * <p>
             * The time and offset do not affect the calculation and will be the same in the result.
             * If the day-of-month is invalid for the year, it will be changed to the last valid day of the month.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMonth(month: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the day-of-month altered.
             * <p>
             * If the resulting {@code OffsetDateTime} is invalid, an exception is thrown.
             * The time and offset do not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withDayOfMonth(dayOfMonth: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the day-of-year altered.
             * <p>
             * The time and offset do not affect the calculation and will be the same in the result.
             * If the resulting {@code OffsetDateTime} is invalid, an exception is thrown.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withDayOfYear(dayOfYear: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the hour-of-day altered.
             * <p>
             * The date and offset do not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withHour(hour: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the minute-of-hour altered.
             * <p>
             * The date and offset do not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMinute(minute: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the second-of-minute altered.
             * <p>
             * The date and offset do not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withSecond(second: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the nano-of-second altered.
             * <p>
             * The date and offset do not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withNano(nanoOfSecond: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the time truncated.
             * <p>
             * Truncation returns a copy of the original date-time with fields
             * smaller than the specified unit set to zero.
             * For example, truncating with the {@link ChronoUnit#MINUTES minutes} unit
             * will set the second-of-minute and nano-of-second field to zero.
             * <p>
             * The unit must have a {@linkplain TemporalUnit#getDuration() duration}
             * that divides into the length of a standard day without remainder.
             * This includes all supplied time units on {@link ChronoUnit} and
             * {@link ChronoUnit#DAYS DAYS}. Other units throw an exception.
             * <p>
             * The offset does not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public truncatedTo(unit: java.time.temporal.TemporalUnit): java.time.OffsetDateTime;
            /**
             * Returns a copy of this date-time with the specified amount added.
             * <p>
             * This returns an {@code OffsetDateTime}, based on this one, with the specified amount added.
             * The amount is typically {@link Period} or {@link Duration} but may be
             * any other type implementing the {@link TemporalAmount} interface.
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
            public plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.OffsetDateTime;
            /**
             * Returns a copy of this date-time with the specified amount added.
             * <p>
             * This returns an {@code OffsetDateTime}, based on this one, with the amount
             * in terms of the unit added. If it is not possible to add the amount, because the
             * unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoUnit} then the addition is implemented by
             * {@link LocalDateTime#plus(long, TemporalUnit)}.
             * The offset is not part of the calculation and will be unchanged in the result.
             * <p>
             * If the field is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.addTo(Temporal, long)}
             * passing {@code this} as the argument. In this case, the unit determines
             * whether and how to perform the addition.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of years added.
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
            public plusYears(years: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of months added.
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
            public plusMonths(months: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this OffsetDateTime with the specified number of weeks added.
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
            public plusWeeks(weeks: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this OffsetDateTime with the specified number of days added.
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
            public plusDays(days: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of hours added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusHours(hours: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of minutes added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMinutes(minutes: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of seconds added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusSeconds(seconds: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of nanoseconds added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusNanos(nanos: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this date-time with the specified amount subtracted.
             * <p>
             * This returns an {@code OffsetDateTime}, based on this one, with the specified amount subtracted.
             * The amount is typically {@link Period} or {@link Duration} but may be
             * any other type implementing the {@link TemporalAmount} interface.
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
            public minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.OffsetDateTime;
            /**
             * Returns a copy of this date-time with the specified amount subtracted.
             * <p>
             * This returns an {@code OffsetDateTime}, based on this one, with the amount
             * in terms of the unit subtracted. If it is not possible to subtract the amount,
             * because the unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
             * See that method for a full description of how addition, and thus subtraction, works.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of years subtracted.
             * <p>
             * This method subtracts the specified amount from the years field in three steps:
             * <ol>
             * <li>Subtract the input years from the year field</li>
             * <li>Check if the resulting date would be invalid</li>
             * <li>Adjust the day-of-month to the last valid day if necessary</li>
             * </ol>
             * <p>
             * For example, 2008-02-29 (leap year) minus one year would result in the
             * invalid date 2009-02-29 (standard year). Instead of returning an invalid
             * result, the last valid day of the month, 2009-02-28, is selected instead.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusYears(years: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of months subtracted.
             * <p>
             * This method subtracts the specified amount from the months field in three steps:
             * <ol>
             * <li>Subtract the input months from the month-of-year field</li>
             * <li>Check if the resulting date would be invalid</li>
             * <li>Adjust the day-of-month to the last valid day if necessary</li>
             * </ol>
             * <p>
             * For example, 2007-03-31 minus one month would result in the invalid date
             * 2007-04-31. Instead of returning an invalid result, the last valid day
             * of the month, 2007-04-30, is selected instead.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMonths(months: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of weeks subtracted.
             * <p>
             * This method subtracts the specified amount in weeks from the days field decrementing
             * the month and year fields as necessary to ensure the result remains valid.
             * The result is only invalid if the maximum/minimum year is exceeded.
             * <p>
             * For example, 2008-12-31 minus one week would result in 2009-01-07.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusWeeks(weeks: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of days subtracted.
             * <p>
             * This method subtracts the specified amount from the days field decrementing the
             * month and year fields as necessary to ensure the result remains valid.
             * The result is only invalid if the maximum/minimum year is exceeded.
             * <p>
             * For example, 2008-12-31 minus one day would result in 2009-01-01.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusDays(days: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of hours subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusHours(hours: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of minutes subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMinutes(minutes: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of seconds subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusSeconds(seconds: number): java.time.OffsetDateTime;
            /**
             * Returns a copy of this {@code OffsetDateTime} with the specified number of nanoseconds subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusNanos(nanos: number): java.time.OffsetDateTime;
            /**
             * Queries this date-time using the specified query.
             * <p>
             * This queries this date-time using the specified query strategy object.
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
             * Adjusts the specified temporal object to have the same offset, date
             * and time as this object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the offset, date and time changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * three times, passing {@link ChronoField#EPOCH_DAY},
             * {@link ChronoField#NANO_OF_DAY} and {@link ChronoField#OFFSET_SECONDS} as the fields.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisOffsetDateTime.adjustInto(temporal);
             * temporal = temporal.with(thisOffsetDateTime);
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Calculates the amount of time until another date-time in terms of the specified unit.
             * <p>
             * This calculates the amount of time between two {@code OffsetDateTime}
             * objects in terms of a single {@code TemporalUnit}.
             * The start and end points are {@code this} and the specified date-time.
             * The result will be negative if the end is before the start.
             * For example, the amount in days between two date-times can be calculated
             * using {@code startDateTime.until(endDateTime, DAYS)}.
             * <p>
             * The {@code Temporal} passed to this method is converted to a
             * {@code OffsetDateTime} using {@link #from(TemporalAccessor)}.
             * If the offset differs between the two date-times, the specified
             * end date-time is normalized to have the same offset as this date-time.
             * <p>
             * The calculation returns a whole number, representing the number of
             * complete units between the two date-times.
             * For example, the amount in months between 2012-06-15T00:00Z and 2012-08-14T23:59Z
             * will only be one month as it is one minute short of two months.
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
             * The units {@code NANOS}, {@code MICROS}, {@code MILLIS}, {@code SECONDS},
             * {@code MINUTES}, {@code HOURS} and {@code HALF_DAYS}, {@code DAYS},
             * {@code WEEKS}, {@code MONTHS}, {@code YEARS}, {@code DECADES},
             * {@code CENTURIES}, {@code MILLENNIA} and {@code ERAS} are supported.
             * Other {@code ChronoUnit} values will throw an exception.
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
             * Formats this date-time using the specified formatter.
             * <p>
             * This date-time will be passed to the formatter to produce a string.
             */
            // @ts-ignore
            public format(formatter: java.time.format.DateTimeFormatter): string;
            /**
             * Combines this date-time with a time-zone to create a {@code ZonedDateTime}
             * ensuring that the result has the same instant.
             * <p>
             * This returns a {@code ZonedDateTime} formed from this date-time and the specified time-zone.
             * This conversion will ignore the visible local date-time and use the underlying instant instead.
             * This avoids any problems with local time-line gaps or overlaps.
             * The result might have different values for fields such as hour, minute an even day.
             * <p>
             * To attempt to retain the values of the fields, use {@link #atZoneSimilarLocal(ZoneId)}.
             * To use the offset as the zone ID, use {@link #toZonedDateTime()}.
             */
            // @ts-ignore
            public atZoneSameInstant(zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Combines this date-time with a time-zone to create a {@code ZonedDateTime}
             * trying to keep the same local date and time.
             * <p>
             * This returns a {@code ZonedDateTime} formed from this date-time and the specified time-zone.
             * Where possible, the result will have the same local date-time as this object.
             * <p>
             * Time-zone rules, such as daylight savings, mean that not every time on the
             * local time-line exists. If the local date-time is in a gap or overlap according to
             * the rules then a resolver is used to determine the resultant local time and offset.
             * This method uses {@link ZonedDateTime#ofLocal(LocalDateTime, ZoneId, ZoneOffset)}
             * to retain the offset from this instance if possible.
             * <p>
             * Finer control over gaps and overlaps is available in two ways.
             * If you simply want to use the later offset at overlaps then call
             * {@link ZonedDateTime#withLaterOffsetAtOverlap()} immediately after this method.
             * <p>
             * To create a zoned date-time at the same instant irrespective of the local time-line,
             * use {@link #atZoneSameInstant(ZoneId)}.
             * To use the offset as the zone ID, use {@link #toZonedDateTime()}.
             */
            // @ts-ignore
            public atZoneSimilarLocal(zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Converts this date-time to an {@code OffsetTime}.
             * <p>
             * This returns an offset time with the same local time and offset.
             */
            // @ts-ignore
            public toOffsetTime(): java.time.OffsetTime;
            /**
             * Converts this date-time to a {@code ZonedDateTime} using the offset as the zone ID.
             * <p>
             * This creates the simplest possible {@code ZonedDateTime} using the offset
             * as the zone ID.
             * <p>
             * To control the time-zone used, see {@link #atZoneSameInstant(ZoneId)} and
             * {@link #atZoneSimilarLocal(ZoneId)}.
             */
            // @ts-ignore
            public toZonedDateTime(): java.time.ZonedDateTime;
            /**
             * Converts this date-time to an {@code Instant}.
             * <p>
             * This returns an {@code Instant} representing the same point on the
             * time-line as this date-time.
             */
            // @ts-ignore
            public toInstant(): java.time.Instant;
            /**
             * Converts this date-time to the number of seconds from the epoch of 1970-01-01T00:00:00Z.
             * <p>
             * This allows this date-time to be converted to a value of the
             * {@link ChronoField#INSTANT_SECONDS epoch-seconds} field. This is primarily
             * intended for low-level conversions rather than general application usage.
             */
            // @ts-ignore
            public toEpochSecond(): number;
            /**
             * Compares this date-time to another date-time.
             * <p>
             * The comparison is based on the instant then on the local date-time.
             * It is "consistent with equals", as defined by {@link Comparable}.
             * <p>
             * For example, the following is the comparator order:
             * <ol>
             * <li>{@code 2008-12-03T10:30+01:00}</li>
             * <li>{@code 2008-12-03T11:00+01:00}</li>
             * <li>{@code 2008-12-03T12:00+02:00}</li>
             * <li>{@code 2008-12-03T11:30+01:00}</li>
             * <li>{@code 2008-12-03T12:00+01:00}</li>
             * <li>{@code 2008-12-03T12:30+01:00}</li>
             * </ol>
             * Values #2 and #3 represent the same instant on the time-line.
             * When two values represent the same instant, the local date-time is compared
             * to distinguish them. This step is needed to make the ordering
             * consistent with {@code equals()}.
             */
            // @ts-ignore
            public compareTo(other: java.time.OffsetDateTime): number;
            /**
             * Checks if the instant of this date-time is after that of the specified date-time.
             * <p>
             * This method differs from the comparison in {@link #compareTo} and {@link #equals} in that it
             * only compares the instant of the date-time. This is equivalent to using
             * {@code dateTime1.toInstant().isAfter(dateTime2.toInstant());}.
             */
            // @ts-ignore
            public isAfter(other: java.time.OffsetDateTime): boolean;
            /**
             * Checks if the instant of this date-time is before that of the specified date-time.
             * <p>
             * This method differs from the comparison in {@link #compareTo} in that it
             * only compares the instant of the date-time. This is equivalent to using
             * {@code dateTime1.toInstant().isBefore(dateTime2.toInstant());}.
             */
            // @ts-ignore
            public isBefore(other: java.time.OffsetDateTime): boolean;
            /**
             * Checks if the instant of this date-time is equal to that of the specified date-time.
             * <p>
             * This method differs from the comparison in {@link #compareTo} and {@link #equals}
             * in that it only compares the instant of the date-time. This is equivalent to using
             * {@code dateTime1.toInstant().equals(dateTime2.toInstant());}.
             */
            // @ts-ignore
            public isEqual(other: java.time.OffsetDateTime): boolean;
            /**
             * Checks if this date-time is equal to another date-time.
             * <p>
             * The comparison is based on the local date-time and the offset.
             * To compare for the same instant on the time-line, use {@link #isEqual}.
             * Only objects of type {@code OffsetDateTime} are compared, other types return false.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this date-time.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Outputs this date-time as a {@code String}, such as {@code 2007-12-03T10:15:30+01:00}.
             * <p>
             * The output will be one of the following ISO-8601 formats:
             * <ul>
             * <li>{@code uuuu-MM-dd'T'HH:mmXXXXX}</li>
             * <li>{@code uuuu-MM-dd'T'HH:mm:ssXXXXX}</li>
             * <li>{@code uuuu-MM-dd'T'HH:mm:ss.SSSXXXXX}</li>
             * <li>{@code uuuu-MM-dd'T'HH:mm:ss.SSSSSSXXXXX}</li>
             * <li>{@code uuuu-MM-dd'T'HH:mm:ss.SSSSSSSSSXXXXX}</li>
             * </ul>
             * The format used will be the shortest that outputs the full value of
             * the time where the omitted parts are implied to be zero.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
