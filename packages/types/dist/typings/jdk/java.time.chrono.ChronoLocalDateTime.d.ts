declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
            interface ChronoLocalDateTime {
                /**
                 * Gets a comparator that compares {@code ChronoLocalDateTime} in
                 * time-line order ignoring the chronology.
                 * <p>
                 * This comparator differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying date-time and not the chronology.
                 * This allows dates in different calendar systems to be compared based
                 * on the position of the date-time on the local time-line.
                 * The underlying comparison is equivalent to comparing the epoch-day and nano-of-day.
                 */
                // @ts-ignore
                 timeLineOrder(): java.util.Comparator;
                /**
                 * Obtains an instance of {@code ChronoLocalDateTime} from a temporal object.
                 * <p>
                 * This obtains a local date-time based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code ChronoLocalDateTime}.
                 * <p>
                 * The conversion extracts and combines the chronology and the date-time
                 * from the temporal object. The behavior is equivalent to using
                 * {@link Chronology#localDateTime(TemporalAccessor)} with the extracted chronology.
                 * Implementations are permitted to perform optimizations such as accessing
                 * those fields that are equivalent to the relevant objects.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code ChronoLocalDateTime::from}.
                 */
                // @ts-ignore
                 from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime;
                /**
                 * Gets the chronology of this date-time.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 */
                // @ts-ignore
                 getChronology(): java.time.chrono.Chronology;
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
                 * Checks if the specified field is supported.
                 * <p>
                 * This checks if the specified field can be queried on this date-time.
                 * If false, then calling the {@link #range(TemporalField) range},
                 * {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
                 * methods will throw an exception.
                 * <p>
                 * The set of supported fields is defined by the chronology and normally includes
                 * all {@code ChronoField} date and time fields.
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
                 with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.ChronoLocalDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 with(field: java.time.temporal.TemporalField, newValue: number): java.time.chrono.ChronoLocalDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime;
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
                 * Adjusts the specified temporal object to have the same date and time as this object.
                 * <p>
                 * This returns a temporal object of the same observable type as the input
                 * with the date and time changed to be the same as this.
                 * <p>
                 * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
                 * twice, passing {@link ChronoField#EPOCH_DAY} and
                 * {@link ChronoField#NANO_OF_DAY} as the fields.
                 * <p>
                 * In most cases, it is clearer to reverse the calling pattern by using
                 * {@link Temporal#with(TemporalAdjuster)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisLocalDateTime.adjustInto(temporal);
                 * temporal = temporal.with(thisLocalDateTime);
                 * </pre>
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
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
                 * Combines this time with a time-zone to create a {@code ChronoZonedDateTime}.
                 * <p>
                 * This returns a {@code ChronoZonedDateTime} formed from this date-time at the
                 * specified time-zone. The result will match this date-time as closely as possible.
                 * Time-zone rules, such as daylight savings, mean that not every local date-time
                 * is valid for the specified zone, thus the local date-time may be adjusted.
                 * <p>
                 * The local date-time is resolved to a single instant on the time-line.
                 * This is achieved by finding a valid offset from UTC/Greenwich for the local
                 * date-time as defined by the {@link ZoneRules rules} of the zone ID.
                 * <p>
                 * In most cases, there is only one valid offset for a local date-time.
                 * In the case of an overlap, where clocks are set back, there are two valid offsets.
                 * This method uses the earlier offset typically corresponding to "summer".
                 * <p>
                 * In the case of a gap, where clocks jump forward, there is no valid offset.
                 * Instead, the local date-time is adjusted to be later by the length of the gap.
                 * For a typical one hour daylight savings change, the local date-time will be
                 * moved one hour later into the offset typically corresponding to "summer".
                 * <p>
                 * To obtain the later offset during an overlap, call
                 * {@link ChronoZonedDateTime#withLaterOffsetAtOverlap()} on the result of this method.
                 */
                // @ts-ignore
                 atZone(zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime;
                /**
                 * Converts this date-time to an {@code Instant}.
                 * <p>
                 * This combines this local date-time and the specified offset to form
                 * an {@code Instant}.
                 * <p>
                 * This default implementation calculates from the epoch-day of the date and the
                 * second-of-day of the time.
                 */
                // @ts-ignore
                 toInstant(offset: java.time.ZoneOffset): java.time.Instant;
                /**
                 * Converts this date-time to the number of seconds from the epoch
                 * of 1970-01-01T00:00:00Z.
                 * <p>
                 * This combines this local date-time and the specified offset to calculate the
                 * epoch-second value, which is the number of elapsed seconds from 1970-01-01T00:00:00Z.
                 * Instants on the time-line after the epoch are positive, earlier are negative.
                 * <p>
                 * This default implementation calculates from the epoch-day of the date and the
                 * second-of-day of the time.
                 */
                // @ts-ignore
                 toEpochSecond(offset: java.time.ZoneOffset): number;
                /**
                 * Compares this date-time to another date-time, including the chronology.
                 * <p>
                 * The comparison is based first on the underlying time-line date-time, then
                 * on the chronology.
                 * It is "consistent with equals", as defined by {@link Comparable}.
                 * <p>
                 * For example, the following is the comparator order:
                 * <ol>
                 * <li>{@code 2012-12-03T12:00 (ISO)}</li>
                 * <li>{@code 2012-12-04T12:00 (ISO)}</li>
                 * <li>{@code 2555-12-04T12:00 (ThaiBuddhist)}</li>
                 * <li>{@code 2012-12-05T12:00 (ISO)}</li>
                 * </ol>
                 * Values #2 and #3 represent the same date-time on the time-line.
                 * When two values represent the same date-time, the chronology ID is compared to distinguish them.
                 * This step is needed to make the ordering "consistent with equals".
                 * <p>
                 * If all the date-time objects being compared are in the same chronology, then the
                 * additional chronology stage is not required and only the local date-time is used.
                 * <p>
                 * This default implementation performs the comparison defined above.
                 */
                // @ts-ignore
                 compareTo(other: java.time.chrono.ChronoLocalDateTime): number;
                /**
                 * Checks if this date-time is after the specified date-time ignoring the chronology.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying date-time and not the chronology.
                 * This allows dates in different calendar systems to be compared based
                 * on the time-line position.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-day
                 * and nano-of-day.
                 */
                // @ts-ignore
                 isAfter(other: java.time.chrono.ChronoLocalDateTime): boolean;
                /**
                 * Checks if this date-time is before the specified date-time ignoring the chronology.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying date-time and not the chronology.
                 * This allows dates in different calendar systems to be compared based
                 * on the time-line position.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-day
                 * and nano-of-day.
                 */
                // @ts-ignore
                 isBefore(other: java.time.chrono.ChronoLocalDateTime): boolean;
                /**
                 * Checks if this date-time is equal to the specified date-time ignoring the chronology.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying date and time and not the chronology.
                 * This allows date-times in different calendar systems to be compared based
                 * on the time-line position.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-day
                 * and nano-of-day.
                 */
                // @ts-ignore
                 isEqual(other: java.time.chrono.ChronoLocalDateTime): boolean;
                /**
                 * Checks if this date-time is equal to another date-time, including the chronology.
                 * <p>
                 * Compares this date-time with another ensuring that the date-time and chronology are the same.
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
                 * The output will include the full local date-time.
                 */
                // @ts-ignore
                 toString(): string;
            }
        }
    }
}
