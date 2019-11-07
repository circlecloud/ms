declare namespace java {
    namespace time {
        // @ts-ignore
         class Instant extends java.lang.Object {
            // @ts-ignore
            public static EPOCH: java.time.Instant;
            // @ts-ignore
            public static MIN: java.time.Instant;
            // @ts-ignore
            public static MAX: java.time.Instant;
            /**
             * Obtains the current instant from the system clock.
             * <p>
             * This will query the {@link Clock#systemUTC() system UTC clock} to
             * obtain the current instant.
             * <p>
             * Using this method will prevent the ability to use an alternate time-source for
             * testing because the clock is effectively hard-coded.
             */
            // @ts-ignore
            public static now(): java.time.Instant;
            /**
             * Obtains the current instant from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current time.
             * <p>
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             */
            // @ts-ignore
            public static now(clock: java.time.Clock): java.time.Instant;
            /**
             * Obtains an instance of {@code Instant} using seconds from the
             * epoch of 1970-01-01T00:00:00Z.
             * <p>
             * The nanosecond field is set to zero.
             */
            // @ts-ignore
            public static ofEpochSecond(epochSecond: number): java.time.Instant;
            /**
             * Obtains an instance of {@code Instant} using seconds from the
             * epoch of 1970-01-01T00:00:00Z and nanosecond fraction of second.
             * <p>
             * This method allows an arbitrary number of nanoseconds to be passed in.
             * The factory will alter the values of the second and nanosecond in order
             * to ensure that the stored nanosecond is in the range 0 to 999,999,999.
             * For example, the following will result in the exactly the same instant:
             * <pre>
             * Instant.ofEpochSecond(3, 1);
             * Instant.ofEpochSecond(4, -999_999_999);
             * Instant.ofEpochSecond(2, 1000_000_001);
             * </pre>
             */
            // @ts-ignore
            public static ofEpochSecond(epochSecond: number, nanoAdjustment: number): java.time.Instant;
            /**
             * Obtains an instance of {@code Instant} using milliseconds from the
             * epoch of 1970-01-01T00:00:00Z.
             * <p>
             * The seconds and nanoseconds are extracted from the specified milliseconds.
             */
            // @ts-ignore
            public static ofEpochMilli(epochMilli: number): java.time.Instant;
            /**
             * Obtains an instance of {@code Instant} from a temporal object.
             * <p>
             * This obtains an instant based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code Instant}.
             * <p>
             * The conversion extracts the {@link ChronoField#INSTANT_SECONDS INSTANT_SECONDS}
             * and {@link ChronoField#NANO_OF_SECOND NANO_OF_SECOND} fields.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code Instant::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.Instant;
            /**
             * Obtains an instance of {@code Instant} from a text string such as
             * {@code 2007-12-03T10:15:30.00Z}.
             * <p>
             * The string must represent a valid instant in UTC and is parsed using
             * {@link DateTimeFormatter#ISO_INSTANT}.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.Instant;
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this instant can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range},
             * {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
             * methods will throw an exception.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The supported fields are:
             * <ul>
             * <li>{@code NANO_OF_SECOND}
             * <li>{@code MICRO_OF_SECOND}
             * <li>{@code MILLI_OF_SECOND}
             * <li>{@code INSTANT_SECONDS}
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
             * This instant is used to enhance the accuracy of the returned range.
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
             * Gets the value of the specified field from this instant as an {@code int}.
             * <p>
             * This queries this instant for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this date-time, except {@code INSTANT_SECONDS} which is too
             * large to fit in an {@code int} and throws a {@code DateTimeException}.
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
             * Gets the value of the specified field from this instant as a {@code long}.
             * <p>
             * This queries this instant for the value of the specified field.
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
             * Gets the number of seconds from the Java epoch of 1970-01-01T00:00:00Z.
             * <p>
             * The epoch second count is a simple incrementing count of seconds where
             * second 0 is 1970-01-01T00:00:00Z.
             * The nanosecond part of the day is returned by {@code getNanosOfSecond}.
             */
            // @ts-ignore
            public getEpochSecond(): number;
            /**
             * Gets the number of nanoseconds, later along the time-line, from the start
             * of the second.
             * <p>
             * The nanosecond-of-second value measures the total number of nanoseconds from
             * the second returned by {@code getEpochSecond}.
             */
            // @ts-ignore
            public getNano(): number;
            /**
             * Returns an adjusted copy of this instant.
             * <p>
             * This returns an {@code Instant}, based on this one, with the instant adjusted.
             * The adjustment takes place using the specified adjuster strategy object.
             * Read the documentation of the adjuster to understand what adjustment will be made.
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalAdjuster#adjustInto(Temporal)} method on the
             * specified adjuster passing {@code this} as the argument.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified field set to a new value.
             * <p>
             * This returns an {@code Instant}, based on this one, with the value
             * for the specified field changed.
             * If it is not possible to set the value, because the field is not supported or for
             * some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the adjustment is implemented here.
             * The supported fields behave as follows:
             * <ul>
             * <li>{@code NANO_OF_SECOND} -
             * Returns an {@code Instant} with the specified nano-of-second.
             * The epoch-second will be unchanged.
             * <li>{@code MICRO_OF_SECOND} -
             * Returns an {@code Instant} with the nano-of-second replaced by the specified
             * micro-of-second multiplied by 1,000. The epoch-second will be unchanged.
             * <li>{@code MILLI_OF_SECOND} -
             * Returns an {@code Instant} with the nano-of-second replaced by the specified
             * milli-of-second multiplied by 1,000,000. The epoch-second will be unchanged.
             * <li>{@code INSTANT_SECONDS} -
             * Returns an {@code Instant} with the specified epoch-second.
             * The nano-of-second will be unchanged.
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
            public with(field: java.time.temporal.TemporalField, newValue: number): java.time.Instant;
            /**
             * Returns a copy of this {@code Instant} truncated to the specified unit.
             * <p>
             * Truncating the instant returns a copy of the original with fields
             * smaller than the specified unit set to zero.
             * The fields are calculated on the basis of using a UTC offset as seen
             * in {@code toString}.
             * For example, truncating with the {@link ChronoUnit#MINUTES MINUTES} unit will
             * round down to the nearest minute, setting the seconds and nanoseconds to zero.
             * <p>
             * The unit must have a {@linkplain TemporalUnit#getDuration() duration}
             * that divides into the length of a standard day without remainder.
             * This includes all supplied time units on {@link ChronoUnit} and
             * {@link ChronoUnit#DAYS DAYS}. Other units throw an exception.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public truncatedTo(unit: java.time.temporal.TemporalUnit): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified amount added.
             * <p>
             * This returns an {@code Instant}, based on this one, with the specified amount added.
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
            public plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified amount added.
             * <p>
             * This returns an {@code Instant}, based on this one, with the amount
             * in terms of the unit added. If it is not possible to add the amount, because the
             * unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoUnit} then the addition is implemented here.
             * The supported fields behave as follows:
             * <ul>
             * <li>{@code NANOS} -
             * Returns a {@code Instant} with the specified number of nanoseconds added.
             * This is equivalent to {@link #plusNanos(long)}.
             * <li>{@code MICROS} -
             * Returns a {@code Instant} with the specified number of microseconds added.
             * This is equivalent to {@link #plusNanos(long)} with the amount
             * multiplied by 1,000.
             * <li>{@code MILLIS} -
             * Returns a {@code Instant} with the specified number of milliseconds added.
             * This is equivalent to {@link #plusNanos(long)} with the amount
             * multiplied by 1,000,000.
             * <li>{@code SECONDS} -
             * Returns a {@code Instant} with the specified number of seconds added.
             * This is equivalent to {@link #plusSeconds(long)}.
             * <li>{@code MINUTES} -
             * Returns a {@code Instant} with the specified number of minutes added.
             * This is equivalent to {@link #plusSeconds(long)} with the amount
             * multiplied by 60.
             * <li>{@code HOURS} -
             * Returns a {@code Instant} with the specified number of hours added.
             * This is equivalent to {@link #plusSeconds(long)} with the amount
             * multiplied by 3,600.
             * <li>{@code HALF_DAYS} -
             * Returns a {@code Instant} with the specified number of half-days added.
             * This is equivalent to {@link #plusSeconds(long)} with the amount
             * multiplied by 43,200 (12 hours).
             * <li>{@code DAYS} -
             * Returns a {@code Instant} with the specified number of days added.
             * This is equivalent to {@link #plusSeconds(long)} with the amount
             * multiplied by 86,400 (24 hours).
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
            public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified duration in seconds added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusSeconds(secondsToAdd: number): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified duration in milliseconds added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMillis(millisToAdd: number): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified duration in nanoseconds added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusNanos(nanosToAdd: number): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified amount subtracted.
             * <p>
             * This returns an {@code Instant}, based on this one, with the specified amount subtracted.
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
            public minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified amount subtracted.
             * <p>
             * This returns a {@code Instant}, based on this one, with the amount
             * in terms of the unit subtracted. If it is not possible to subtract the amount,
             * because the unit is not supported or for some other reason, an exception is thrown.
             * <p>
             * This method is equivalent to {@link #plus(long, TemporalUnit)} with the amount negated.
             * See that method for a full description of how addition, and thus subtraction, works.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified duration in seconds subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusSeconds(secondsToSubtract: number): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified duration in milliseconds subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMillis(millisToSubtract: number): java.time.Instant;
            /**
             * Returns a copy of this instant with the specified duration in nanoseconds subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusNanos(nanosToSubtract: number): java.time.Instant;
            /**
             * Queries this instant using the specified query.
             * <p>
             * This queries this instant using the specified query strategy object.
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
             * Adjusts the specified temporal object to have this instant.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the instant changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * twice, passing {@link ChronoField#INSTANT_SECONDS} and
             * {@link ChronoField#NANO_OF_SECOND} as the fields.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisInstant.adjustInto(temporal);
             * temporal = temporal.with(thisInstant);
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Calculates the amount of time until another instant in terms of the specified unit.
             * <p>
             * This calculates the amount of time between two {@code Instant}
             * objects in terms of a single {@code TemporalUnit}.
             * The start and end points are {@code this} and the specified instant.
             * The result will be negative if the end is before the start.
             * The calculation returns a whole number, representing the number of
             * complete units between the two instants.
             * The {@code Temporal} passed to this method is converted to a
             * {@code Instant} using {@link #from(TemporalAccessor)}.
             * For example, the amount in days between two dates can be calculated
             * using {@code startInstant.until(endInstant, SECONDS)}.
             * <p>
             * There are two equivalent ways of using this method.
             * The first is to invoke this method.
             * The second is to use {@link TemporalUnit#between(Temporal, Temporal)}:
             * <pre>
             * // these two lines are equivalent
             * amount = start.until(end, SECONDS);
             * amount = SECONDS.between(start, end);
             * </pre>
             * The choice should be made based on which makes the code more readable.
             * <p>
             * The calculation is implemented in this method for {@link ChronoUnit}.
             * The units {@code NANOS}, {@code MICROS}, {@code MILLIS}, {@code SECONDS},
             * {@code MINUTES}, {@code HOURS}, {@code HALF_DAYS} and {@code DAYS}
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
             * Combines this instant with an offset to create an {@code OffsetDateTime}.
             * <p>
             * This returns an {@code OffsetDateTime} formed from this instant at the
             * specified offset from UTC/Greenwich. An exception will be thrown if the
             * instant is too large to fit into an offset date-time.
             * <p>
             * This method is equivalent to
             * {@link OffsetDateTime#ofInstant(Instant, ZoneId) OffsetDateTime.ofInstant(this, offset)}.
             */
            // @ts-ignore
            public atOffset(offset: java.time.ZoneOffset): java.time.OffsetDateTime;
            /**
             * Combines this instant with a time-zone to create a {@code ZonedDateTime}.
             * <p>
             * This returns an {@code ZonedDateTime} formed from this instant at the
             * specified time-zone. An exception will be thrown if the instant is too
             * large to fit into a zoned date-time.
             * <p>
             * This method is equivalent to
             * {@link ZonedDateTime#ofInstant(Instant, ZoneId) ZonedDateTime.ofInstant(this, zone)}.
             */
            // @ts-ignore
            public atZone(zone: java.time.ZoneId): java.time.ZonedDateTime;
            /**
             * Converts this instant to the number of milliseconds from the epoch
             * of 1970-01-01T00:00:00Z.
             * <p>
             * If this instant represents a point on the time-line too far in the future
             * or past to fit in a {@code long} milliseconds, then an exception is thrown.
             * <p>
             * If this instant has greater than millisecond precision, then the conversion
             * will drop any excess precision information as though the amount in nanoseconds
             * was subject to integer division by one million.
             */
            // @ts-ignore
            public toEpochMilli(): number;
            /**
             * Compares this instant to the specified instant.
             * <p>
             * The comparison is based on the time-line position of the instants.
             * It is "consistent with equals", as defined by {@link Comparable}.
             */
            // @ts-ignore
            public compareTo(otherInstant: java.time.Instant): number;
            /**
             * Checks if this instant is after the specified instant.
             * <p>
             * The comparison is based on the time-line position of the instants.
             */
            // @ts-ignore
            public isAfter(otherInstant: java.time.Instant): boolean;
            /**
             * Checks if this instant is before the specified instant.
             * <p>
             * The comparison is based on the time-line position of the instants.
             */
            // @ts-ignore
            public isBefore(otherInstant: java.time.Instant): boolean;
            /**
             * Checks if this instant is equal to the specified instant.
             * <p>
             * The comparison is based on the time-line position of the instants.
             */
            // @ts-ignore
            public equals(otherInstant: java.lang.Object): boolean;
            /**
             * Returns a hash code for this instant.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * A string representation of this instant using ISO-8601 representation.
             * <p>
             * The format used is the same as {@link DateTimeFormatter#ISO_INSTANT}.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
