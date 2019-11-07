// @ts-nocheck
declare namespace java {
    namespace time {
        // @ts-ignore
         class OffsetTime extends java.lang.Object {
            // @ts-ignore
            public static MIN: java.time.OffsetTime;
            // @ts-ignore
            public static MAX: java.time.OffsetTime;
            /**
             * Obtains the current time from the system clock in the default time-zone.
             * <p>
             * This will query the {@link Clock#systemDefaultZone() system clock} in the default
             * time-zone to obtain the current time.
             * The offset will be calculated from the time-zone in the clock.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(): java.time.OffsetTime;
            /**
             * Obtains the current time from the system clock in the specified time-zone.
             * <p>
             * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current time.
             * Specifying the time-zone avoids dependence on the default time-zone.
             * The offset will be calculated from the specified time-zone.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(zone: java.time.ZoneId): java.time.OffsetTime;
            /**
             * Obtains the current time from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current time.
             * The offset will be calculated from the time-zone in the clock.
             * <p>
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             */
            // @ts-ignore
            public static now(clock: java.time.Clock): java.time.OffsetTime;
            /**
             * Obtains an instance of {@code OffsetTime} from a local time and an offset.
             */
            // @ts-ignore
            public static of(time: java.time.LocalTime, offset: java.time.ZoneOffset): java.time.OffsetTime;
            /**
             * Obtains an instance of {@code OffsetTime} from an hour, minute, second and nanosecond.
             * <p>
             * This creates an offset time with the four specified fields.
             * <p>
             * This method exists primarily for writing test cases.
             * Non test-code will typically use other methods to create an offset time.
             * {@code LocalTime} has two additional convenience variants of the
             * equivalent factory method taking fewer arguments.
             * They are not provided here to reduce the footprint of the API.
             */
            // @ts-ignore
            public static of(hour: number, minute: number, second: number, nanoOfSecond: number, offset: java.time.ZoneOffset): java.time.OffsetTime;
            /**
             * Obtains an instance of {@code OffsetTime} from an {@code Instant} and zone ID.
             * <p>
             * This creates an offset time with the same instant as that specified.
             * Finding the offset from UTC/Greenwich is simple as there is only one valid
             * offset for each instant.
             * <p>
             * The date component of the instant is dropped during the conversion.
             * This means that the conversion can never fail due to the instant being
             * out of the valid range of dates.
             */
            // @ts-ignore
            public static ofInstant(instant: java.time.Instant, zone: java.time.ZoneId): java.time.OffsetTime;
            /**
             * Obtains an instance of {@code OffsetTime} from a temporal object.
             * <p>
             * This obtains an offset time based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code OffsetTime}.
             * <p>
             * The conversion extracts and combines the {@code ZoneOffset} and the
             * {@code LocalTime} from the temporal object.
             * Implementations are permitted to perform optimizations such as accessing
             * those fields that are equivalent to the relevant objects.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code OffsetTime::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.OffsetTime;
            /**
             * Obtains an instance of {@code OffsetTime} from a text string such as {@code 10:15:30+01:00}.
             * <p>
             * The string must represent a valid time and is parsed using
             * {@link java.time.format.DateTimeFormatter#ISO_OFFSET_TIME}.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.OffsetTime;
            /**
             * Obtains an instance of {@code OffsetTime} from a text string using a specific formatter.
             * <p>
             * The text is parsed using the formatter, returning a time.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence, formatter: java.time.format.DateTimeFormatter): java.time.OffsetTime;
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this time can be queried for the specified field.
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
             * This checks if the specified unit can be added to, or subtracted from, this offset-time.
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
             * This time is used to enhance the accuracy of the returned range.
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
             * Gets the value of the specified field from this time as an {@code int}.
             * <p>
             * This queries this time for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this time, except {@code NANO_OF_DAY} and {@code MICRO_OF_DAY}
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
             * Gets the value of the specified field from this time as a {@code long}.
             * <p>
             * This queries this time for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this time.
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
             * This is the offset of the local time from UTC/Greenwich.
             */
            // @ts-ignore
            public getOffset(): java.time.ZoneOffset;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified offset ensuring
             * that the result has the same local time.
             * <p>
             * This method returns an object with the same {@code LocalTime} and the specified {@code ZoneOffset}.
             * No calculation is needed or performed.
             * For example, if this time represents {@code 10:30+02:00} and the offset specified is
             * {@code +03:00}, then this method will return {@code 10:30+03:00}.
             * <p>
             * To take into account the difference between the offsets, and adjust the time fields,
             * use {@link #withOffsetSameInstant}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withOffsetSameLocal(offset: java.time.ZoneOffset): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified offset ensuring
             * that the result is at the same instant on an implied day.
             * <p>
             * This method returns an object with the specified {@code ZoneOffset} and a {@code LocalTime}
             * adjusted by the difference between the two offsets.
             * This will result in the old and new objects representing the same instant on an implied day.
             * This is useful for finding the local time in a different offset.
             * For example, if this time represents {@code 10:30+02:00} and the offset specified is
             * {@code +03:00}, then this method will return {@code 11:30+03:00}.
             * <p>
             * To change the offset without adjusting the local time use {@link #withOffsetSameLocal}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withOffsetSameInstant(offset: java.time.ZoneOffset): java.time.OffsetTime;
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
             * Returns an adjusted copy of this time.
             * <p>
             * This returns an {@code OffsetTime}, based on this one, with the time adjusted.
             * The adjustment takes place using the specified adjuster strategy object.
             * Read the documentation of the adjuster to understand what adjustment will be made.
             * <p>
             * A simple adjuster might simply set the one of the fields, such as the hour field.
             * A more complex adjuster might set the time to the last hour of the day.
             * <p>
             * The classes {@link LocalTime} and {@link ZoneOffset} implement {@code TemporalAdjuster},
             * thus this method can be used to change the time or offset:
             * <pre>
             * result = offsetTime.with(time);
             * result = offsetTime.with(offset);
             * </pre>
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalAdjuster#adjustInto(Temporal)} method on the
             * specified adjuster passing {@code this} as the argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.OffsetTime;
            /**
             * Returns a copy of this time with the specified field set to a new value.
             * <p>
             * This returns an {@code OffsetTime}, based on this one, with the value
             * for the specified field changed.
             * This can be used to change any supported field, such as the hour, minute or second.
             * If it is not possible to set the value, because the field is not supported or for
             * some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the adjustment is implemented here.
             * <p>
             * The {@code OFFSET_SECONDS} field will return a time with the specified offset.
             * The local time is unaltered. If the new offset value is outside the valid range
             * then a {@code DateTimeException} will be thrown.
             * <p>
             * The other {@link #isSupported(TemporalField) supported fields} will behave as per
             * the matching method on {@link LocalTime#with(TemporalField, long)} LocalTime}.
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
            public with(field: java.time.temporal.TemporalField, newValue: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the hour-of-day altered.
             * <p>
             * The offset does not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withHour(hour: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the minute-of-hour altered.
             * <p>
             * The offset does not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMinute(minute: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the second-of-minute altered.
             * <p>
             * The offset does not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withSecond(second: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the nano-of-second altered.
             * <p>
             * The offset does not affect the calculation and will be the same in the result.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withNano(nanoOfSecond: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the time truncated.
             * <p>
             * Truncation returns a copy of the original time with fields
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
            public truncatedTo(unit: java.time.temporal.TemporalUnit): java.time.OffsetTime;
            /**
             * Returns a copy of this time with the specified amount added.
             * <p>
             * This returns an {@code OffsetTime}, based on this one, with the specified amount added.
             * The amount is typically {@link Duration} but may be any other type implementing
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
            public plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.OffsetTime;
            /**
             * Returns a copy of this time with the specified amount added.
             * <p>
             * This returns an {@code OffsetTime}, based on this one, with the amount
             * in terms of the unit added. If it is not possible to add the amount, because the
             * unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoUnit} then the addition is implemented by
             * {@link LocalTime#plus(long, TemporalUnit)}.
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
            public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified number of hours added.
             * <p>
             * This adds the specified number of hours to this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusHours(hours: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified number of minutes added.
             * <p>
             * This adds the specified number of minutes to this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMinutes(minutes: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified number of seconds added.
             * <p>
             * This adds the specified number of seconds to this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusSeconds(seconds: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified number of nanoseconds added.
             * <p>
             * This adds the specified number of nanoseconds to this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusNanos(nanos: number): java.time.OffsetTime;
            /**
             * Returns a copy of this time with the specified amount subtracted.
             * <p>
             * This returns an {@code OffsetTime}, based on this one, with the specified amount subtracted.
             * The amount is typically {@link Duration} but may be any other type implementing
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
            public minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.OffsetTime;
            /**
             * Returns a copy of this time with the specified amount subtracted.
             * <p>
             * This returns an {@code OffsetTime}, based on this one, with the amount
             * in terms of the unit subtracted. If it is not possible to subtract the amount,
             * because the unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
             * See that method for a full description of how addition, and thus subtraction, works.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified number of hours subtracted.
             * <p>
             * This subtracts the specified number of hours from this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusHours(hours: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified number of minutes subtracted.
             * <p>
             * This subtracts the specified number of minutes from this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMinutes(minutes: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified number of seconds subtracted.
             * <p>
             * This subtracts the specified number of seconds from this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusSeconds(seconds: number): java.time.OffsetTime;
            /**
             * Returns a copy of this {@code OffsetTime} with the specified number of nanoseconds subtracted.
             * <p>
             * This subtracts the specified number of nanoseconds from this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusNanos(nanos: number): java.time.OffsetTime;
            /**
             * Queries this time using the specified query.
             * <p>
             * This queries this time using the specified query strategy object.
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
             * Adjusts the specified temporal object to have the same offset and time
             * as this object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the offset and time changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * twice, passing {@link ChronoField#NANO_OF_DAY} and
             * {@link ChronoField#OFFSET_SECONDS} as the fields.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisOffsetTime.adjustInto(temporal);
             * temporal = temporal.with(thisOffsetTime);
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Calculates the amount of time until another time in terms of the specified unit.
             * <p>
             * This calculates the amount of time between two {@code OffsetTime}
             * objects in terms of a single {@code TemporalUnit}.
             * The start and end points are {@code this} and the specified time.
             * The result will be negative if the end is before the start.
             * For example, the amount in hours between two times can be calculated
             * using {@code startTime.until(endTime, HOURS)}.
             * <p>
             * The {@code Temporal} passed to this method is converted to a
             * {@code OffsetTime} using {@link #from(TemporalAccessor)}.
             * If the offset differs between the two times, then the specified
             * end time is normalized to have the same offset as this time.
             * <p>
             * The calculation returns a whole number, representing the number of
             * complete units between the two times.
             * For example, the amount in hours between 11:30Z and 13:29Z will only
             * be one hour as it is one minute short of two hours.
             * <p>
             * There are two equivalent ways of using this method.
             * The first is to invoke this method.
             * The second is to use {@link TemporalUnit#between(Temporal, Temporal)}:
             * <pre>
             * // these two lines are equivalent
             * amount = start.until(end, MINUTES);
             * amount = MINUTES.between(start, end);
             * </pre>
             * The choice should be made based on which makes the code more readable.
             * <p>
             * The calculation is implemented in this method for {@link ChronoUnit}.
             * The units {@code NANOS}, {@code MICROS}, {@code MILLIS}, {@code SECONDS},
             * {@code MINUTES}, {@code HOURS} and {@code HALF_DAYS} are supported.
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
             * Formats this time using the specified formatter.
             * <p>
             * This time will be passed to the formatter to produce a string.
             */
            // @ts-ignore
            public format(formatter: java.time.format.DateTimeFormatter): string;
            /**
             * Combines this time with a date to create an {@code OffsetDateTime}.
             * <p>
             * This returns an {@code OffsetDateTime} formed from this time and the specified date.
             * All possible combinations of date and time are valid.
             */
            // @ts-ignore
            public atDate(date: java.time.LocalDate): java.time.OffsetDateTime;
            /**
             * Compares this {@code OffsetTime} to another time.
             * <p>
             * The comparison is based first on the UTC equivalent instant, then on the local time.
             * It is "consistent with equals", as defined by {@link Comparable}.
             * <p>
             * For example, the following is the comparator order:
             * <ol>
             * <li>{@code 10:30+01:00}</li>
             * <li>{@code 11:00+01:00}</li>
             * <li>{@code 12:00+02:00}</li>
             * <li>{@code 11:30+01:00}</li>
             * <li>{@code 12:00+01:00}</li>
             * <li>{@code 12:30+01:00}</li>
             * </ol>
             * Values #2 and #3 represent the same instant on the time-line.
             * When two values represent the same instant, the local time is compared
             * to distinguish them. This step is needed to make the ordering
             * consistent with {@code equals()}.
             * <p>
             * To compare the underlying local time of two {@code TemporalAccessor} instances,
             * use {@link ChronoField#NANO_OF_DAY} as a comparator.
             */
            // @ts-ignore
            public compareTo(other: java.time.OffsetTime): number;
            /**
             * Checks if the instant of this {@code OffsetTime} is after that of the
             * specified time applying both times to a common date.
             * <p>
             * This method differs from the comparison in {@link #compareTo} in that it
             * only compares the instant of the time. This is equivalent to converting both
             * times to an instant using the same date and comparing the instants.
             */
            // @ts-ignore
            public isAfter(other: java.time.OffsetTime): boolean;
            /**
             * Checks if the instant of this {@code OffsetTime} is before that of the
             * specified time applying both times to a common date.
             * <p>
             * This method differs from the comparison in {@link #compareTo} in that it
             * only compares the instant of the time. This is equivalent to converting both
             * times to an instant using the same date and comparing the instants.
             */
            // @ts-ignore
            public isBefore(other: java.time.OffsetTime): boolean;
            /**
             * Checks if the instant of this {@code OffsetTime} is equal to that of the
             * specified time applying both times to a common date.
             * <p>
             * This method differs from the comparison in {@link #compareTo} and {@link #equals}
             * in that it only compares the instant of the time. This is equivalent to converting both
             * times to an instant using the same date and comparing the instants.
             */
            // @ts-ignore
            public isEqual(other: java.time.OffsetTime): boolean;
            /**
             * Checks if this time is equal to another time.
             * <p>
             * The comparison is based on the local-time and the offset.
             * To compare for the same instant on the time-line, use {@link #isEqual(OffsetTime)}.
             * <p>
             * Only objects of type {@code OffsetTime} are compared, other types return false.
             * To compare the underlying local time of two {@code TemporalAccessor} instances,
             * use {@link ChronoField#NANO_OF_DAY} as a comparator.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this time.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Outputs this time as a {@code String}, such as {@code 10:15:30+01:00}.
             * <p>
             * The output will be one of the following ISO-8601 formats:
             * <ul>
             * <li>{@code HH:mmXXXXX}</li>
             * <li>{@code HH:mm:ssXXXXX}</li>
             * <li>{@code HH:mm:ss.SSSXXXXX}</li>
             * <li>{@code HH:mm:ss.SSSSSSXXXXX}</li>
             * <li>{@code HH:mm:ss.SSSSSSSSSXXXXX}</li>
             * </ul>
             * The format used will be the shortest that outputs the full value of
             * the time where the omitted parts are implied to be zero.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
