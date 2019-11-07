declare namespace java {
    namespace time {
        // @ts-ignore
         class LocalTime extends java.lang.Object {
            // @ts-ignore
            public static MIN: java.time.LocalTime;
            // @ts-ignore
            public static MAX: java.time.LocalTime;
            // @ts-ignore
            public static MIDNIGHT: java.time.LocalTime;
            // @ts-ignore
            public static NOON: java.time.LocalTime;
            /**
             * Obtains the current time from the system clock in the default time-zone.
             * <p>
             * This will query the {@link Clock#systemDefaultZone() system clock} in the default
             * time-zone to obtain the current time.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(): java.time.LocalTime;
            /**
             * Obtains the current time from the system clock in the specified time-zone.
             * <p>
             * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current time.
             * Specifying the time-zone avoids dependence on the default time-zone.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(zone: java.time.ZoneId): java.time.LocalTime;
            /**
             * Obtains the current time from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current time.
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             */
            // @ts-ignore
            public static now(clock: java.time.Clock): java.time.LocalTime;
            /**
             * Obtains an instance of {@code LocalTime} from an hour and minute.
             * <p>
             * This returns a {@code LocalTime} with the specified hour and minute.
             * The second and nanosecond fields will be set to zero.
             */
            // @ts-ignore
            public static of(hour: number, minute: number): java.time.LocalTime;
            /**
             * Obtains an instance of {@code LocalTime} from an hour, minute and second.
             * <p>
             * This returns a {@code LocalTime} with the specified hour, minute and second.
             * The nanosecond field will be set to zero.
             */
            // @ts-ignore
            public static of(hour: number, minute: number, second: number): java.time.LocalTime;
            /**
             * Obtains an instance of {@code LocalTime} from an hour, minute, second and nanosecond.
             * <p>
             * This returns a {@code LocalTime} with the specified hour, minute, second and nanosecond.
             */
            // @ts-ignore
            public static of(hour: number, minute: number, second: number, nanoOfSecond: number): java.time.LocalTime;
            /**
             * Obtains an instance of {@code LocalTime} from a second-of-day value.
             * <p>
             * This returns a {@code LocalTime} with the specified second-of-day.
             * The nanosecond field will be set to zero.
             */
            // @ts-ignore
            public static ofSecondOfDay(secondOfDay: number): java.time.LocalTime;
            /**
             * Obtains an instance of {@code LocalTime} from a nanos-of-day value.
             * <p>
             * This returns a {@code LocalTime} with the specified nanosecond-of-day.
             */
            // @ts-ignore
            public static ofNanoOfDay(nanoOfDay: number): java.time.LocalTime;
            /**
             * Obtains an instance of {@code LocalTime} from a temporal object.
             * <p>
             * This obtains a local time based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code LocalTime}.
             * <p>
             * The conversion uses the {@link TemporalQueries#localTime()} query, which relies
             * on extracting the {@link ChronoField#NANO_OF_DAY NANO_OF_DAY} field.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code LocalTime::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.LocalTime;
            /**
             * Obtains an instance of {@code LocalTime} from a text string such as {@code 10:15}.
             * <p>
             * The string must represent a valid time and is parsed using
             * {@link java.time.format.DateTimeFormatter#ISO_LOCAL_TIME}.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.LocalTime;
            /**
             * Obtains an instance of {@code LocalTime} from a text string using a specific formatter.
             * <p>
             * The text is parsed using the formatter, returning a time.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence, formatter: java.time.format.DateTimeFormatter): java.time.LocalTime;
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
             * This checks if the specified unit can be added to, or subtracted from, this time.
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
             * This returns a {@code LocalTime}, based on this one, with the time adjusted.
             * The adjustment takes place using the specified adjuster strategy object.
             * Read the documentation of the adjuster to understand what adjustment will be made.
             * <p>
             * A simple adjuster might simply set the one of the fields, such as the hour field.
             * A more complex adjuster might set the time to the last hour of the day.
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalAdjuster#adjustInto(Temporal)} method on the
             * specified adjuster passing {@code this} as the argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.LocalTime;
            /**
             * Returns a copy of this time with the specified field set to a new value.
             * <p>
             * This returns a {@code LocalTime}, based on this one, with the value
             * for the specified field changed.
             * This can be used to change any supported field, such as the hour, minute or second.
             * If it is not possible to set the value, because the field is not supported or for
             * some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the adjustment is implemented here.
             * The supported fields behave as follows:
             * <ul>
             * <li>{@code NANO_OF_SECOND} -
             * Returns a {@code LocalTime} with the specified nano-of-second.
             * The hour, minute and second will be unchanged.
             * <li>{@code NANO_OF_DAY} -
             * Returns a {@code LocalTime} with the specified nano-of-day.
             * This completely replaces the time and is equivalent to {@link #ofNanoOfDay(long)}.
             * <li>{@code MICRO_OF_SECOND} -
             * Returns a {@code LocalTime} with the nano-of-second replaced by the specified
             * micro-of-second multiplied by 1,000.
             * The hour, minute and second will be unchanged.
             * <li>{@code MICRO_OF_DAY} -
             * Returns a {@code LocalTime} with the specified micro-of-day.
             * This completely replaces the time and is equivalent to using {@link #ofNanoOfDay(long)}
             * with the micro-of-day multiplied by 1,000.
             * <li>{@code MILLI_OF_SECOND} -
             * Returns a {@code LocalTime} with the nano-of-second replaced by the specified
             * milli-of-second multiplied by 1,000,000.
             * The hour, minute and second will be unchanged.
             * <li>{@code MILLI_OF_DAY} -
             * Returns a {@code LocalTime} with the specified milli-of-day.
             * This completely replaces the time and is equivalent to using {@link #ofNanoOfDay(long)}
             * with the milli-of-day multiplied by 1,000,000.
             * <li>{@code SECOND_OF_MINUTE} -
             * Returns a {@code LocalTime} with the specified second-of-minute.
             * The hour, minute and nano-of-second will be unchanged.
             * <li>{@code SECOND_OF_DAY} -
             * Returns a {@code LocalTime} with the specified second-of-day.
             * The nano-of-second will be unchanged.
             * <li>{@code MINUTE_OF_HOUR} -
             * Returns a {@code LocalTime} with the specified minute-of-hour.
             * The hour, second-of-minute and nano-of-second will be unchanged.
             * <li>{@code MINUTE_OF_DAY} -
             * Returns a {@code LocalTime} with the specified minute-of-day.
             * The second-of-minute and nano-of-second will be unchanged.
             * <li>{@code HOUR_OF_AMPM} -
             * Returns a {@code LocalTime} with the specified hour-of-am-pm.
             * The AM/PM, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
             * <li>{@code CLOCK_HOUR_OF_AMPM} -
             * Returns a {@code LocalTime} with the specified clock-hour-of-am-pm.
             * The AM/PM, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
             * <li>{@code HOUR_OF_DAY} -
             * Returns a {@code LocalTime} with the specified hour-of-day.
             * The minute-of-hour, second-of-minute and nano-of-second will be unchanged.
             * <li>{@code CLOCK_HOUR_OF_DAY} -
             * Returns a {@code LocalTime} with the specified clock-hour-of-day.
             * The minute-of-hour, second-of-minute and nano-of-second will be unchanged.
             * <li>{@code AMPM_OF_DAY} -
             * Returns a {@code LocalTime} with the specified AM/PM.
             * The hour-of-am-pm, minute-of-hour, second-of-minute and nano-of-second will be unchanged.
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
            public with(field: java.time.temporal.TemporalField, newValue: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the hour-of-day altered.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withHour(hour: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the minute-of-hour altered.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMinute(minute: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the second-of-minute altered.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withSecond(second: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the nano-of-second altered.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withNano(nanoOfSecond: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the time truncated.
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
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public truncatedTo(unit: java.time.temporal.TemporalUnit): java.time.LocalTime;
            /**
             * Returns a copy of this time with the specified amount added.
             * <p>
             * This returns a {@code LocalTime}, based on this one, with the specified amount added.
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
            public plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.LocalTime;
            /**
             * Returns a copy of this time with the specified amount added.
             * <p>
             * This returns a {@code LocalTime}, based on this one, with the amount
             * in terms of the unit added. If it is not possible to add the amount, because the
             * unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoUnit} then the addition is implemented here.
             * The supported fields behave as follows:
             * <ul>
             * <li>{@code NANOS} -
             * Returns a {@code LocalTime} with the specified number of nanoseconds added.
             * This is equivalent to {@link #plusNanos(long)}.
             * <li>{@code MICROS} -
             * Returns a {@code LocalTime} with the specified number of microseconds added.
             * This is equivalent to {@link #plusNanos(long)} with the amount
             * multiplied by 1,000.
             * <li>{@code MILLIS} -
             * Returns a {@code LocalTime} with the specified number of milliseconds added.
             * This is equivalent to {@link #plusNanos(long)} with the amount
             * multiplied by 1,000,000.
             * <li>{@code SECONDS} -
             * Returns a {@code LocalTime} with the specified number of seconds added.
             * This is equivalent to {@link #plusSeconds(long)}.
             * <li>{@code MINUTES} -
             * Returns a {@code LocalTime} with the specified number of minutes added.
             * This is equivalent to {@link #plusMinutes(long)}.
             * <li>{@code HOURS} -
             * Returns a {@code LocalTime} with the specified number of hours added.
             * This is equivalent to {@link #plusHours(long)}.
             * <li>{@code HALF_DAYS} -
             * Returns a {@code LocalTime} with the specified number of half-days added.
             * This is equivalent to {@link #plusHours(long)} with the amount
             * multiplied by 12.
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
            public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the specified number of hours added.
             * <p>
             * This adds the specified number of hours to this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusHours(hoursToAdd: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the specified number of minutes added.
             * <p>
             * This adds the specified number of minutes to this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMinutes(minutesToAdd: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the specified number of seconds added.
             * <p>
             * This adds the specified number of seconds to this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusSeconds(secondstoAdd: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the specified number of nanoseconds added.
             * <p>
             * This adds the specified number of nanoseconds to this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusNanos(nanosToAdd: number): java.time.LocalTime;
            /**
             * Returns a copy of this time with the specified amount subtracted.
             * <p>
             * This returns a {@code LocalTime}, based on this one, with the specified amount subtracted.
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
            public minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.LocalTime;
            /**
             * Returns a copy of this time with the specified amount subtracted.
             * <p>
             * This returns a {@code LocalTime}, based on this one, with the amount
             * in terms of the unit subtracted. If it is not possible to subtract the amount,
             * because the unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
             * See that method for a full description of how addition, and thus subtraction, works.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the specified number of hours subtracted.
             * <p>
             * This subtracts the specified number of hours from this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusHours(hoursToSubtract: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the specified number of minutes subtracted.
             * <p>
             * This subtracts the specified number of minutes from this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMinutes(minutesToSubtract: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the specified number of seconds subtracted.
             * <p>
             * This subtracts the specified number of seconds from this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusSeconds(secondsToSubtract: number): java.time.LocalTime;
            /**
             * Returns a copy of this {@code LocalTime} with the specified number of nanoseconds subtracted.
             * <p>
             * This subtracts the specified number of nanoseconds from this time, returning a new time.
             * The calculation wraps around midnight.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusNanos(nanosToSubtract: number): java.time.LocalTime;
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
             * Adjusts the specified temporal object to have the same time as this object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the time changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * passing {@link ChronoField#NANO_OF_DAY} as the field.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisLocalTime.adjustInto(temporal);
             * temporal = temporal.with(thisLocalTime);
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Calculates the amount of time until another time in terms of the specified unit.
             * <p>
             * This calculates the amount of time between two {@code LocalTime}
             * objects in terms of a single {@code TemporalUnit}.
             * The start and end points are {@code this} and the specified time.
             * The result will be negative if the end is before the start.
             * The {@code Temporal} passed to this method is converted to a
             * {@code LocalTime} using {@link #from(TemporalAccessor)}.
             * For example, the amount in hours between two times can be calculated
             * using {@code startTime.until(endTime, HOURS)}.
             * <p>
             * The calculation returns a whole number, representing the number of
             * complete units between the two times.
             * For example, the amount in hours between 11:30 and 13:29 will only
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
             * Combines this time with a date to create a {@code LocalDateTime}.
             * <p>
             * This returns a {@code LocalDateTime} formed from this time at the specified date.
             * All possible combinations of date and time are valid.
             */
            // @ts-ignore
            public atDate(date: java.time.LocalDate): java.time.LocalDateTime;
            /**
             * Combines this time with an offset to create an {@code OffsetTime}.
             * <p>
             * This returns an {@code OffsetTime} formed from this time at the specified offset.
             * All possible combinations of time and offset are valid.
             */
            // @ts-ignore
            public atOffset(offset: java.time.ZoneOffset): java.time.OffsetTime;
            /**
             * Extracts the time as seconds of day,
             * from {@code 0} to {@code 24 * 60 * 60 - 1}.
             */
            // @ts-ignore
            public toSecondOfDay(): number;
            /**
             * Extracts the time as nanos of day,
             * from {@code 0} to {@code 24 * 60 * 60 * 1,000,000,000 - 1}.
             */
            // @ts-ignore
            public toNanoOfDay(): number;
            /**
             * Compares this time to another time.
             * <p>
             * The comparison is based on the time-line position of the local times within a day.
             * It is "consistent with equals", as defined by {@link Comparable}.
             */
            // @ts-ignore
            public compareTo(other: java.time.LocalTime): number;
            /**
             * Checks if this time is after the specified time.
             * <p>
             * The comparison is based on the time-line position of the time within a day.
             */
            // @ts-ignore
            public isAfter(other: java.time.LocalTime): boolean;
            /**
             * Checks if this time is before the specified time.
             * <p>
             * The comparison is based on the time-line position of the time within a day.
             */
            // @ts-ignore
            public isBefore(other: java.time.LocalTime): boolean;
            /**
             * Checks if this time is equal to another time.
             * <p>
             * The comparison is based on the time-line position of the time within a day.
             * <p>
             * Only objects of type {@code LocalTime} are compared, other types return false.
             * To compare the date of two {@code TemporalAccessor} instances, use
             * {@link ChronoField#NANO_OF_DAY} as a comparator.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this time.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Outputs this time as a {@code String}, such as {@code 10:15}.
             * <p>
             * The output will be one of the following ISO-8601 formats:
             * <ul>
             * <li>{@code HH:mm}</li>
             * <li>{@code HH:mm:ss}</li>
             * <li>{@code HH:mm:ss.SSS}</li>
             * <li>{@code HH:mm:ss.SSSSSS}</li>
             * <li>{@code HH:mm:ss.SSSSSSSSS}</li>
             * </ul>
             * The format used will be the shortest that outputs the full value of
             * the time where the omitted parts are implied to be zero.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
