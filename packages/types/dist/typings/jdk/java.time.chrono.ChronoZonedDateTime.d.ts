// @ts-nocheck
declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
            interface ChronoZonedDateTime {
                /**
                 * Gets a comparator that compares {@code ChronoZonedDateTime} in
                 * time-line order ignoring the chronology.
                 * <p>
                 * This comparator differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying instant and not the chronology.
                 * This allows dates in different calendar systems to be compared based
                 * on the position of the date-time on the instant time-line.
                 * The underlying comparison is equivalent to comparing the epoch-second and nano-of-second.
                 */
                // @ts-ignore
                 timeLineOrder(): java.util.Comparator;
                /**
                 * Obtains an instance of {@code ChronoZonedDateTime} from a temporal object.
                 * <p>
                 * This creates a zoned date-time based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code ChronoZonedDateTime}.
                 * <p>
                 * The conversion extracts and combines the chronology, date, time and zone
                 * from the temporal object. The behavior is equivalent to using
                 * {@link Chronology#zonedDateTime(TemporalAccessor)} with the extracted chronology.
                 * Implementations are permitted to perform optimizations such as accessing
                 * those fields that are equivalent to the relevant objects.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code ChronoZonedDateTime::from}.
                 */
                // @ts-ignore
                 from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime;
                // @ts-ignore
                 range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
                // @ts-ignore
                 get(field: java.time.temporal.TemporalField): number;
                // @ts-ignore
                 getLong(field: java.time.temporal.TemporalField): number;
                /**
                 * Gets the local date part of this date-time.
                 * <p>
                 * This returns a local date with the same year, month and day
                 * as this date-time.
                 */
                // @ts-ignore
                 toLocalDate(): java.time.chrono.ChronoLocalDate;
                /**
                 * Gets the local time part of this date-time.
                 * <p>
                 * This returns a local time with the same hour, minute, second and
                 * nanosecond as this date-time.
                 */
                // @ts-ignore
                 toLocalTime(): java.time.LocalTime;
                /**
                 * Gets the local date-time part of this date-time.
                 * <p>
                 * This returns a local date with the same year, month and day
                 * as this date-time.
                 */
                // @ts-ignore
                 toLocalDateTime(): java.time.chrono.ChronoLocalDateTime;
                /**
                 * Gets the chronology of this date-time.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 */
                // @ts-ignore
                 getChronology(): java.time.chrono.Chronology;
                /**
                 * Gets the zone offset, such as '+01:00'.
                 * <p>
                 * This is the offset of the local date-time from UTC/Greenwich.
                 */
                // @ts-ignore
                 getOffset(): java.time.ZoneOffset;
                /**
                 * Gets the zone ID, such as 'Europe/Paris'.
                 * <p>
                 * This returns the stored time-zone id used to determine the time-zone rules.
                 */
                // @ts-ignore
                 getZone(): java.time.ZoneId;
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
                 withEarlierOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime;
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
                 withLaterOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime;
                /**
                 * Returns a copy of this date-time with a different time-zone,
                 * retaining the local date-time if possible.
                 * <p>
                 * This method changes the time-zone and retains the local date-time.
                 * The local date-time is only changed if it is invalid for the new zone.
                 * <p>
                 * To change the zone and adjust the local date-time,
                 * use {@link #withZoneSameInstant(ZoneId)}.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 withZoneSameLocal(zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime;
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
                 withZoneSameInstant(zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime;
                /**
                 * Checks if the specified field is supported.
                 * <p>
                 * This checks if the specified field can be queried on this date-time.
                 * If false, then calling the {@link #range(TemporalField) range},
                 * {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
                 * methods will throw an exception.
                 * <p>
                 * The set of supported fields is defined by the chronology and normally includes
                 * all {@code ChronoField} fields.
                 * <p>
                 * If the field is not a {@code ChronoField}, then the result of this method
                 * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
                 * passing {@code this} as the argument.
                 * Whether the field is supported is determined by the field.
                 */
                // @ts-ignore
                 isSupported(field: java.time.temporal.TemporalField): boolean;
                /**
                 * Checks if the specified unit is supported.
                 * <p>
                 * This checks if the specified unit can be added to or subtracted from this date-time.
                 * If false, then calling the {@link #plus(long, TemporalUnit)} and
                 * {@link #minus(long, TemporalUnit) minus} methods will throw an exception.
                 * <p>
                 * The set of supported units is defined by the chronology and normally includes
                 * all {@code ChronoUnit} units except {@code FOREVER}.
                 * <p>
                 * If the unit is not a {@code ChronoUnit}, then the result of this method
                 * is obtained by invoking {@code TemporalUnit.isSupportedBy(Temporal)}
                 * passing {@code this} as the argument.
                 * Whether the unit is supported is determined by the unit.
                 */
                // @ts-ignore
                 isSupported(unit: java.time.temporal.TemporalUnit): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.ChronoZonedDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 with(field: java.time.temporal.TemporalField, newValue: number): java.time.chrono.ChronoZonedDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime;
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
                 query(query: java.time.temporal.TemporalQuery): java.lang.Object;
                /**
                 * Formats this date-time using the specified formatter.
                 * <p>
                 * This date-time will be passed to the formatter to produce a string.
                 * <p>
                 * The default implementation must behave as follows:
                 * <pre>
                 * return formatter.format(this);
                 * </pre>
                 */
                // @ts-ignore
                 format(formatter: java.time.format.DateTimeFormatter): string;
                /**
                 * Converts this date-time to an {@code Instant}.
                 * <p>
                 * This returns an {@code Instant} representing the same point on the
                 * time-line as this date-time. The calculation combines the
                 * {@linkplain #toLocalDateTime() local date-time} and
                 * {@linkplain #getOffset() offset}.
                 */
                // @ts-ignore
                 toInstant(): java.time.Instant;
                /**
                 * Converts this date-time to the number of seconds from the epoch
                 * of 1970-01-01T00:00:00Z.
                 * <p>
                 * This uses the {@linkplain #toLocalDateTime() local date-time} and
                 * {@linkplain #getOffset() offset} to calculate the epoch-second value,
                 * which is the number of elapsed seconds from 1970-01-01T00:00:00Z.
                 * Instants on the time-line after the epoch are positive, earlier are negative.
                 */
                // @ts-ignore
                 toEpochSecond(): number;
                /**
                 * Compares this date-time to another date-time, including the chronology.
                 * <p>
                 * The comparison is based first on the instant, then on the local date-time,
                 * then on the zone ID, then on the chronology.
                 * It is "consistent with equals", as defined by {@link Comparable}.
                 * <p>
                 * If all the date-time objects being compared are in the same chronology, then the
                 * additional chronology stage is not required.
                 * <p>
                 * This default implementation performs the comparison defined above.
                 */
                // @ts-ignore
                 compareTo(other: java.time.chrono.ChronoZonedDateTime): number;
                /**
                 * Checks if the instant of this date-time is before that of the specified date-time.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} in that it
                 * only compares the instant of the date-time. This is equivalent to using
                 * {@code dateTime1.toInstant().isBefore(dateTime2.toInstant());}.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-second
                 * and nano-of-second.
                 */
                // @ts-ignore
                 isBefore(other: java.time.chrono.ChronoZonedDateTime): boolean;
                /**
                 * Checks if the instant of this date-time is after that of the specified date-time.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} in that it
                 * only compares the instant of the date-time. This is equivalent to using
                 * {@code dateTime1.toInstant().isAfter(dateTime2.toInstant());}.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-second
                 * and nano-of-second.
                 */
                // @ts-ignore
                 isAfter(other: java.time.chrono.ChronoZonedDateTime): boolean;
                /**
                 * Checks if the instant of this date-time is equal to that of the specified date-time.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} and {@link #equals}
                 * in that it only compares the instant of the date-time. This is equivalent to using
                 * {@code dateTime1.toInstant().equals(dateTime2.toInstant());}.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-second
                 * and nano-of-second.
                 */
                // @ts-ignore
                 isEqual(other: java.time.chrono.ChronoZonedDateTime): boolean;
                /**
                 * Checks if this date-time is equal to another date-time.
                 * <p>
                 * The comparison is based on the offset date-time and the zone.
                 * To compare for the same instant on the time-line, use {@link #compareTo}.
                 * Only objects of type {@code ChronoZonedDateTime} are compared, other types return false.
                 */
                // @ts-ignore
                 equals(obj: java.lang.Object): boolean;
                /**
                 * A hash code for this date-time.
                 */
                // @ts-ignore
                 hashCode(): number;
                /**
                 * Outputs this date-time as a {@code String}.
                 * <p>
                 * The output will include the full zoned date-time.
                 */
                // @ts-ignore
                 toString(): string;
            }
        }
    }
}
