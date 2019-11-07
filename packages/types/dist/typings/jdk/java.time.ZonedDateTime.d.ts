declare namespace java {
    namespace time {
        // @ts-ignore
         class ZonedDateTime extends java.lang.Object {
            /**
             * Obtains the current date-time from the system clock in the default time-zone.
             * <p>
             * This will query the {@link Clock#systemDefaultZone() system clock} in the default
             * time-zone to obtain the current date-time.
             * The zone and offset will be set based on the time-zone in the clock.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(): java.time.ZonedDateTime;
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
            public static now(zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Obtains the current date-time from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current date-time.
             * The zone and offset will be set based on the time-zone in the clock.
             * <p>
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             */
            // @ts-ignore
            public static now(clock: java.time.Clock): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from a local date and time.
             * <p>
             * This creates a zoned date-time matching the input local date and time as closely as possible.
             * Time-zone rules, such as daylight savings, mean that not every local date-time
             * is valid for the specified zone, thus the local date-time may be adjusted.
             * <p>
             * The local date time and first combined to form a local date-time.
             * The local date-time is then resolved to a single instant on the time-line.
             * This is achieved by finding a valid offset from UTC/Greenwich for the local
             * date-time as defined by the {@link ZoneRules rules} of the zone ID.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, when clocks are set back, there are two valid offsets.
             * This method uses the earlier offset typically corresponding to "summer".
             * <p>
             * In the case of a gap, when clocks jump forward, there is no valid offset.
             * Instead, the local date-time is adjusted to be later by the length of the gap.
             * For a typical one hour daylight savings change, the local date-time will be
             * moved one hour later into the offset typically corresponding to "summer".
             */
            // @ts-ignore
            public static of(date: java.time.LocalDate, time: java.time.LocalTime, zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from a local date-time.
             * <p>
             * This creates a zoned date-time matching the input local date-time as closely as possible.
             * Time-zone rules, such as daylight savings, mean that not every local date-time
             * is valid for the specified zone, thus the local date-time may be adjusted.
             * <p>
             * The local date-time is resolved to a single instant on the time-line.
             * This is achieved by finding a valid offset from UTC/Greenwich for the local
             * date-time as defined by the {@link ZoneRules rules} of the zone ID.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, when clocks are set back, there are two valid offsets.
             * This method uses the earlier offset typically corresponding to "summer".
             * <p>
             * In the case of a gap, when clocks jump forward, there is no valid offset.
             * Instead, the local date-time is adjusted to be later by the length of the gap.
             * For a typical one hour daylight savings change, the local date-time will be
             * moved one hour later into the offset typically corresponding to "summer".
             */
            // @ts-ignore
            public static of(localDateTime: java.time.LocalDateTime, zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from a year, month, day,
             * hour, minute, second, nanosecond and time-zone.
             * <p>
             * This creates a zoned date-time matching the local date-time of the seven
             * specified fields as closely as possible.
             * Time-zone rules, such as daylight savings, mean that not every local date-time
             * is valid for the specified zone, thus the local date-time may be adjusted.
             * <p>
             * The local date-time is resolved to a single instant on the time-line.
             * This is achieved by finding a valid offset from UTC/Greenwich for the local
             * date-time as defined by the {@link ZoneRules rules} of the zone ID.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, when clocks are set back, there are two valid offsets.
             * This method uses the earlier offset typically corresponding to "summer".
             * <p>
             * In the case of a gap, when clocks jump forward, there is no valid offset.
             * Instead, the local date-time is adjusted to be later by the length of the gap.
             * For a typical one hour daylight savings change, the local date-time will be
             * moved one hour later into the offset typically corresponding to "summer".
             * <p>
             * This method exists primarily for writing test cases.
             * Non test-code will typically use other methods to create an offset time.
             * {@code LocalDateTime} has five additional convenience variants of the
             * equivalent factory method taking fewer arguments.
             * They are not provided here to reduce the footprint of the API.
             */
            // @ts-ignore
            public static of(year: number, month: number, dayOfMonth: number, hour: number, minute: number, second: number, nanoOfSecond: number, zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from a local date-time
             * using the preferred offset if possible.
             * <p>
             * The local date-time is resolved to a single instant on the time-line.
             * This is achieved by finding a valid offset from UTC/Greenwich for the local
             * date-time as defined by the {@link ZoneRules rules} of the zone ID.
             * <p>
             * In most cases, there is only one valid offset for a local date-time.
             * In the case of an overlap, where clocks are set back, there are two valid offsets.
             * If the preferred offset is one of the valid offsets then it is used.
             * Otherwise the earlier valid offset is used, typically corresponding to "summer".
             * <p>
             * In the case of a gap, where clocks jump forward, there is no valid offset.
             * Instead, the local date-time is adjusted to be later by the length of the gap.
             * For a typical one hour daylight savings change, the local date-time will be
             * moved one hour later into the offset typically corresponding to "summer".
             */
            // @ts-ignore
            public static ofLocal(localDateTime: java.time.LocalDateTime, zone: java.time.ZoneId, preferredOffset: java.time.ZoneOffset): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from an {@code Instant}.
             * <p>
             * This creates a zoned date-time with the same instant as that specified.
             * Calling {@link #toInstant()} will return an instant equal to the one used here.
             * <p>
             * Converting an instant to a zoned date-time is simple as there is only one valid
             * offset for each instant.
             */
            // @ts-ignore
            public static ofInstant(instant: java.time.Instant, zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from the instant formed by combining
             * the local date-time and offset.
             * <p>
             * This creates a zoned date-time by {@link LocalDateTime#toInstant(ZoneOffset) combining}
             * the {@code LocalDateTime} and {@code ZoneOffset}.
             * This combination uniquely specifies an instant without ambiguity.
             * <p>
             * Converting an instant to a zoned date-time is simple as there is only one valid
             * offset for each instant. If the valid offset is different to the offset specified,
             * then the date-time and offset of the zoned date-time will differ from those specified.
             * <p>
             * If the {@code ZoneId} to be used is a {@code ZoneOffset}, this method is equivalent
             * to {@link #of(LocalDateTime, ZoneId)}.
             */
            // @ts-ignore
            public static ofInstant(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset, zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} strictly validating the
             * combination of local date-time, offset and zone ID.
             * <p>
             * This creates a zoned date-time ensuring that the offset is valid for the
             * local date-time according to the rules of the specified zone.
             * If the offset is invalid, an exception is thrown.
             */
            // @ts-ignore
            public static ofStrict(localDateTime: java.time.LocalDateTime, offset: java.time.ZoneOffset, zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from a temporal object.
             * <p>
             * This obtains a zoned date-time based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code ZonedDateTime}.
             * <p>
             * The conversion will first obtain a {@code ZoneId} from the temporal object,
             * falling back to a {@code ZoneOffset} if necessary. It will then try to obtain
             * an {@code Instant}, falling back to a {@code LocalDateTime} if necessary.
             * The result will be either the combination of {@code ZoneId} or {@code ZoneOffset}
             * with {@code Instant} or {@code LocalDateTime}.
             * Implementations are permitted to perform optimizations such as accessing
             * those fields that are equivalent to the relevant objects.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code ZonedDateTime::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from a text string such as
             * {@code 2007-12-03T10:15:30+01:00[Europe/Paris]}.
             * <p>
             * The string must represent a valid date-time and is parsed using
             * {@link java.time.format.DateTimeFormatter#ISO_ZONED_DATE_TIME}.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.ZonedDateTime;
            /**
             * Obtains an instance of {@code ZonedDateTime} from a text string using a specific formatter.
             * <p>
             * The text is parsed using the formatter, returning a date-time.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence, formatter: java.time.format.DateTimeFormatter): java.time.ZonedDateTime;
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
             * Returns a copy of this date-time changing the zone offset to the
             * earlier of the two valid offsets at a local time-line overlap.
             * <p>
             * This method only has any effect when the local time-line overlaps, such as
             * at an autumn daylight savings cutover. In this scenario, there are two
             * valid offsets for the local date-time. Calling this method will return
             * a zoned date-time with the earlier of the two selected.
             * <p>
             * If this method is called when it is not an overlap, {@code this}
             * is returned.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withEarlierOffsetAtOverlap(): java.time.ZonedDateTime;
            /**
             * Returns a copy of this date-time changing the zone offset to the
             * later of the two valid offsets at a local time-line overlap.
             * <p>
             * This method only has any effect when the local time-line overlaps, such as
             * at an autumn daylight savings cutover. In this scenario, there are two
             * valid offsets for the local date-time. Calling this method will return
             * a zoned date-time with the later of the two selected.
             * <p>
             * If this method is called when it is not an overlap, {@code this}
             * is returned.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withLaterOffsetAtOverlap(): java.time.ZonedDateTime;
            /**
             * Gets the time-zone, such as 'Europe/Paris'.
             * <p>
             * This returns the zone ID. This identifies the time-zone {@link ZoneRules rules}
             * that determine when and how the offset from UTC/Greenwich changes.
             * <p>
             * The zone ID may be same as the {@linkplain #getOffset() offset}.
             * If this is true, then any future calculations, such as addition or subtraction,
             * have no complex edge cases due to time-zone rules.
             * See also {@link #withFixedOffsetZone()}.
             */
            // @ts-ignore
            public getZone(): java.time.ZoneId;
            /**
             * Returns a copy of this date-time with a different time-zone,
             * retaining the local date-time if possible.
             * <p>
             * This method changes the time-zone and retains the local date-time.
             * The local date-time is only changed if it is invalid for the new zone,
             * determined using the same approach as
             * {@link #ofLocal(LocalDateTime, ZoneId, ZoneOffset)}.
             * <p>
             * To change the zone and adjust the local date-time,
             * use {@link #withZoneSameInstant(ZoneId)}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withZoneSameLocal(zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Returns a copy of this date-time with a different time-zone,
             * retaining the instant.
             * <p>
             * This method changes the time-zone and retains the instant.
             * This normally results in a change to the local date-time.
             * <p>
             * This method is based on retaining the same instant, thus gaps and overlaps
             * in the local time-line have no effect on the result.
             * <p>
             * To change the offset while keeping the local time,
             * use {@link #withZoneSameLocal(ZoneId)}.
             */
            // @ts-ignore
            public withZoneSameInstant(zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Returns a copy of this date-time with the zone ID set to the offset.
             * <p>
             * This returns a zoned date-time where the zone ID is the same as {@link #getOffset()}.
             * The local date-time, offset and instant of the result will be the same as in this date-time.
             * <p>
             * Setting the date-time to a fixed single offset means that any future
             * calculations, such as addition or subtraction, have no complex edge cases
             * due to time-zone rules.
             * This might also be useful when sending a zoned date-time across a network,
             * as most protocols, such as ISO-8601, only handle offsets,
             * and not region-based zone IDs.
             * <p>
             * This is equivalent to {@code ZonedDateTime.of(zdt.toLocalDateTime(), zdt.getOffset())}.
             */
            // @ts-ignore
            public withFixedOffsetZone(): java.time.ZonedDateTime;
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
             * This returns a {@code ZonedDateTime}, based on this one, with the date-time adjusted.
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
             * result = zonedDateTime.with(JULY).with(lastDayOfMonth());
             * </pre>
             * <p>
             * The classes {@link LocalDate} and {@link LocalTime} implement {@code TemporalAdjuster},
             * thus this method can be used to change the date, time or offset:
             * <pre>
             * result = zonedDateTime.with(date);
             * result = zonedDateTime.with(time);
             * </pre>
             * <p>
             * {@link ZoneOffset} also implements {@code TemporalAdjuster} however using it
             * as an argument typically has no effect. The offset of a {@code ZonedDateTime} is
             * controlled primarily by the time-zone. As such, changing the offset does not generally
             * make sense, because there is only one valid offset for the local date-time and zone.
             * If the zoned date-time is in a daylight savings overlap, then the offset is used
             * to switch between the two valid offsets. In all other cases, the offset is ignored.
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalAdjuster#adjustInto(Temporal)} method on the
             * specified adjuster passing {@code this} as the argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.ZonedDateTime;
            /**
             * Returns a copy of this date-time with the specified field set to a new value.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the value
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
             * The zone and nano-of-second are unchanged.
             * The result will have an offset derived from the new instant and original zone.
             * If the new instant value is outside the valid range then a {@code DateTimeException} will be thrown.
             * <p>
             * The {@code OFFSET_SECONDS} field will typically be ignored.
             * The offset of a {@code ZonedDateTime} is controlled primarily by the time-zone.
             * As such, changing the offset does not generally make sense, because there is only
             * one valid offset for the local date-time and zone.
             * If the zoned date-time is in a daylight savings overlap, then the offset is used
             * to switch between the two valid offsets. In all other cases, the offset is ignored.
             * If the new offset value is outside the valid range then a {@code DateTimeException} will be thrown.
             * <p>
             * The other {@link #isSupported(TemporalField) supported fields} will behave as per
             * the matching method on {@link LocalDateTime#with(TemporalField, long) LocalDateTime}.
             * The zone is not part of the calculation and will be unchanged.
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
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
            public with(field: java.time.temporal.TemporalField, newValue: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the year altered.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#withYear(int) changing the year} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withYear(year: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the month-of-year altered.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#withMonth(int) changing the month} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMonth(month: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the day-of-month altered.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#withDayOfMonth(int) changing the day-of-month} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withDayOfMonth(dayOfMonth: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the day-of-year altered.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#withDayOfYear(int) changing the day-of-year} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withDayOfYear(dayOfYear: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the hour-of-day altered.
             * <p>
             * This operates on the local time-line,
             * {@linkplain LocalDateTime#withHour(int) changing the time} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withHour(hour: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the minute-of-hour altered.
             * <p>
             * This operates on the local time-line,
             * {@linkplain LocalDateTime#withMinute(int) changing the time} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMinute(minute: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the second-of-minute altered.
             * <p>
             * This operates on the local time-line,
             * {@linkplain LocalDateTime#withSecond(int) changing the time} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withSecond(second: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the nano-of-second altered.
             * <p>
             * This operates on the local time-line,
             * {@linkplain LocalDateTime#withNano(int) changing the time} of the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withNano(nanoOfSecond: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the time truncated.
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
             * This operates on the local time-line,
             * {@link LocalDateTime#truncatedTo(TemporalUnit) truncating}
             * the underlying local date-time. This is then converted back to a
             * {@code ZonedDateTime}, using the zone ID to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public truncatedTo(unit: java.time.temporal.TemporalUnit): java.time.ZonedDateTime;
            /**
             * Returns a copy of this date-time with the specified amount added.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the specified amount added.
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
            public plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.ZonedDateTime;
            /**
             * Returns a copy of this date-time with the specified amount added.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the amount
             * in terms of the unit added. If it is not possible to add the amount, because the
             * unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoUnit} then the addition is implemented here.
             * The zone is not part of the calculation and will be unchanged in the result.
             * The calculation for date and time units differ.
             * <p>
             * Date units operate on the local time-line.
             * The period is first added to the local date-time, then converted back
             * to a zoned date-time using the zone ID.
             * The conversion uses {@link #ofLocal(LocalDateTime, ZoneId, ZoneOffset)}
             * with the offset before the addition.
             * <p>
             * Time units operate on the instant time-line.
             * The period is first added to the local date-time, then converted back to
             * a zoned date-time using the zone ID.
             * The conversion uses {@link #ofInstant(LocalDateTime, ZoneOffset, ZoneId)}
             * with the offset before the addition.
             * <p>
             * If the field is not a {@code ChronoUnit}, then the result of this method
             * is obtained by invoking {@code TemporalUnit.addTo(Temporal, long)}
             * passing {@code this} as the argument. In this case, the unit determines
             * whether and how to perform the addition.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of years added.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#plusYears(long) adding years} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusYears(years: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of months added.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#plusMonths(long) adding months} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMonths(months: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of weeks added.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#plusWeeks(long) adding weeks} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusWeeks(weeks: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of days added.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#plusDays(long) adding days} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusDays(days: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of hours added.
             * <p>
             * This operates on the instant time-line, such that adding one hour will
             * always be a duration of one hour later.
             * This may cause the local date-time to change by an amount other than one hour.
             * Note that this is a different approach to that used by days, months and years,
             * thus adding one day is not the same as adding 24 hours.
             * <p>
             * For example, consider a time-zone where the spring DST cutover means that the
             * local times 01:00 to 01:59 occur twice changing from offset +02:00 to +01:00.
             * <ul>
             * <li>Adding one hour to 00:30+02:00 will result in 01:30+02:00
             * <li>Adding one hour to 01:30+02:00 will result in 01:30+01:00
             * <li>Adding one hour to 01:30+01:00 will result in 02:30+01:00
             * <li>Adding three hours to 00:30+02:00 will result in 02:30+01:00
             * </ul>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusHours(hours: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of minutes added.
             * <p>
             * This operates on the instant time-line, such that adding one minute will
             * always be a duration of one minute later.
             * This may cause the local date-time to change by an amount other than one minute.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMinutes(minutes: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of seconds added.
             * <p>
             * This operates on the instant time-line, such that adding one second will
             * always be a duration of one second later.
             * This may cause the local date-time to change by an amount other than one second.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusSeconds(seconds: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of nanoseconds added.
             * <p>
             * This operates on the instant time-line, such that adding one nano will
             * always be a duration of one nano later.
             * This may cause the local date-time to change by an amount other than one nano.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusNanos(nanos: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this date-time with the specified amount subtracted.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the specified amount subtracted.
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
            public minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.ZonedDateTime;
            /**
             * Returns a copy of this date-time with the specified amount subtracted.
             * <p>
             * This returns a {@code ZonedDateTime}, based on this one, with the amount
             * in terms of the unit subtracted. If it is not possible to subtract the amount,
             * because the unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * The calculation for date and time units differ.
             * <p>
             * Date units operate on the local time-line.
             * The period is first subtracted from the local date-time, then converted back
             * to a zoned date-time using the zone ID.
             * The conversion uses {@link #ofLocal(LocalDateTime, ZoneId, ZoneOffset)}
             * with the offset before the subtraction.
             * <p>
             * Time units operate on the instant time-line.
             * The period is first subtracted from the local date-time, then converted back to
             * a zoned date-time using the zone ID.
             * The conversion uses {@link #ofInstant(LocalDateTime, ZoneOffset, ZoneId)}
             * with the offset before the subtraction.
             * <p>
             * This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
             * See that method for a full description of how addition, and thus subtraction, works.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of years subtracted.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#minusYears(long) subtracting years} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusYears(years: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of months subtracted.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#minusMonths(long) subtracting months} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMonths(months: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of weeks subtracted.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#minusWeeks(long) subtracting weeks} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusWeeks(weeks: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of days subtracted.
             * <p>
             * This operates on the local time-line,
             * {@link LocalDateTime#minusDays(long) subtracting days} to the local date-time.
             * This is then converted back to a {@code ZonedDateTime}, using the zone ID
             * to obtain the offset.
             * <p>
             * When converting back to {@code ZonedDateTime}, if the local date-time is in an overlap,
             * then the offset will be retained if possible, otherwise the earlier offset will be used.
             * If in a gap, the local date-time will be adjusted forward by the length of the gap.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusDays(days: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of hours subtracted.
             * <p>
             * This operates on the instant time-line, such that subtracting one hour will
             * always be a duration of one hour earlier.
             * This may cause the local date-time to change by an amount other than one hour.
             * Note that this is a different approach to that used by days, months and years,
             * thus subtracting one day is not the same as adding 24 hours.
             * <p>
             * For example, consider a time-zone where the spring DST cutover means that the
             * local times 01:00 to 01:59 occur twice changing from offset +02:00 to +01:00.
             * <ul>
             * <li>Subtracting one hour from 02:30+01:00 will result in 01:30+02:00
             * <li>Subtracting one hour from 01:30+01:00 will result in 01:30+02:00
             * <li>Subtracting one hour from 01:30+02:00 will result in 00:30+01:00
             * <li>Subtracting three hours from 02:30+01:00 will result in 00:30+02:00
             * </ul>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusHours(hours: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of minutes subtracted.
             * <p>
             * This operates on the instant time-line, such that subtracting one minute will
             * always be a duration of one minute earlier.
             * This may cause the local date-time to change by an amount other than one minute.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMinutes(minutes: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of seconds subtracted.
             * <p>
             * This operates on the instant time-line, such that subtracting one second will
             * always be a duration of one second earlier.
             * This may cause the local date-time to change by an amount other than one second.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusSeconds(seconds: number): java.time.ZonedDateTime;
            /**
             * Returns a copy of this {@code ZonedDateTime} with the specified number of nanoseconds subtracted.
             * <p>
             * This operates on the instant time-line, such that subtracting one nano will
             * always be a duration of one nano earlier.
             * This may cause the local date-time to change by an amount other than one nano.
             * Note that this is a different approach to that used by days, months and years.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusNanos(nanos: number): java.time.ZonedDateTime;
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
             * Calculates the amount of time until another date-time in terms of the specified unit.
             * <p>
             * This calculates the amount of time between two {@code ZonedDateTime}
             * objects in terms of a single {@code TemporalUnit}.
             * The start and end points are {@code this} and the specified date-time.
             * The result will be negative if the end is before the start.
             * For example, the amount in days between two date-times can be calculated
             * using {@code startDateTime.until(endDateTime, DAYS)}.
             * <p>
             * The {@code Temporal} passed to this method is converted to a
             * {@code ZonedDateTime} using {@link #from(TemporalAccessor)}.
             * If the time-zone differs between the two zoned date-times, the specified
             * end date-time is normalized to have the same zone as this date-time.
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
             * The calculation for date and time units differ.
             * <p>
             * Date units operate on the local time-line, using the local date-time.
             * For example, the period from noon on day 1 to noon the following day
             * in days will always be counted as exactly one day, irrespective of whether
             * there was a daylight savings change or not.
             * <p>
             * Time units operate on the instant time-line.
             * The calculation effectively converts both zoned date-times to instants
             * and then calculates the period between the instants.
             * For example, the period from noon on day 1 to noon the following day
             * in hours may be 23, 24 or 25 hours (or some other amount) depending on
             * whether there was a daylight savings change or not.
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
             * Converts this date-time to an {@code OffsetDateTime}.
             * <p>
             * This creates an offset date-time using the local date-time and offset.
             * The zone ID is ignored.
             */
            // @ts-ignore
            public toOffsetDateTime(): java.time.OffsetDateTime;
            /**
             * Checks if this date-time is equal to another date-time.
             * <p>
             * The comparison is based on the offset date-time and the zone.
             * Only objects of type {@code ZonedDateTime} are compared, other types return false.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this date-time.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Outputs this date-time as a {@code String}, such as
             * {@code 2007-12-03T10:15:30+01:00[Europe/Paris]}.
             * <p>
             * The format consists of the {@code LocalDateTime} followed by the {@code ZoneOffset}.
             * If the {@code ZoneId} is not the same as the offset, then the ID is output.
             * The output is compatible with ISO-8601 if the offset and ID are the same.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
