// @ts-nocheck
declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
             class TemporalQueries extends java.lang.Object {
                /**
                 * A strict query for the {@code ZoneId}.
                 * <p>
                 * This queries a {@code TemporalAccessor} for the zone.
                 * The zone is only returned if the date-time conceptually contains a {@code ZoneId}.
                 * It will not be returned if the date-time only conceptually has an {@code ZoneOffset}.
                 * Thus a {@link java.time.ZonedDateTime} will return the result of {@code getZone()},
                 * but an {@link java.time.OffsetDateTime} will return null.
                 * <p>
                 * In most cases, applications should use {@link #zone()} as this query is too strict.
                 * <p>
                 * The result from JDK classes implementing {@code TemporalAccessor} is as follows:<br>
                 * {@code LocalDate} returns null<br>
                 * {@code LocalTime} returns null<br>
                 * {@code LocalDateTime} returns null<br>
                 * {@code ZonedDateTime} returns the associated zone<br>
                 * {@code OffsetTime} returns null<br>
                 * {@code OffsetDateTime} returns null<br>
                 * {@code ChronoLocalDate} returns null<br>
                 * {@code ChronoLocalDateTime} returns null<br>
                 * {@code ChronoZonedDateTime} returns the associated zone<br>
                 * {@code Era} returns null<br>
                 * {@code DayOfWeek} returns null<br>
                 * {@code Month} returns null<br>
                 * {@code Year} returns null<br>
                 * {@code YearMonth} returns null<br>
                 * {@code MonthDay} returns null<br>
                 * {@code ZoneOffset} returns null<br>
                 * {@code Instant} returns null<br>
                 */
                // @ts-ignore
                public static zoneId(): java.time.temporal.TemporalQuery;
                /**
                 * A query for the {@code Chronology}.
                 * <p>
                 * This queries a {@code TemporalAccessor} for the chronology.
                 * If the target {@code TemporalAccessor} represents a date, or part of a date,
                 * then it should return the chronology that the date is expressed in.
                 * As a result of this definition, objects only representing time, such as
                 * {@code LocalTime}, will return null.
                 * <p>
                 * The result from JDK classes implementing {@code TemporalAccessor} is as follows:<br>
                 * {@code LocalDate} returns {@code IsoChronology.INSTANCE}<br>
                 * {@code LocalTime} returns null (does not represent a date)<br>
                 * {@code LocalDateTime} returns {@code IsoChronology.INSTANCE}<br>
                 * {@code ZonedDateTime} returns {@code IsoChronology.INSTANCE}<br>
                 * {@code OffsetTime} returns null (does not represent a date)<br>
                 * {@code OffsetDateTime} returns {@code IsoChronology.INSTANCE}<br>
                 * {@code ChronoLocalDate} returns the associated chronology<br>
                 * {@code ChronoLocalDateTime} returns the associated chronology<br>
                 * {@code ChronoZonedDateTime} returns the associated chronology<br>
                 * {@code Era} returns the associated chronology<br>
                 * {@code DayOfWeek} returns null (shared across chronologies)<br>
                 * {@code Month} returns {@code IsoChronology.INSTANCE}<br>
                 * {@code Year} returns {@code IsoChronology.INSTANCE}<br>
                 * {@code YearMonth} returns {@code IsoChronology.INSTANCE}<br>
                 * {@code MonthDay} returns null {@code IsoChronology.INSTANCE}<br>
                 * {@code ZoneOffset} returns null (does not represent a date)<br>
                 * {@code Instant} returns null (does not represent a date)<br>
                 * <p>
                 * The method {@link java.time.chrono.Chronology#from(TemporalAccessor)} can be used as a
                 * {@code TemporalQuery} via a method reference, {@code Chronology::from}.
                 * That method is equivalent to this query, except that it throws an
                 * exception if a chronology cannot be obtained.
                 */
                // @ts-ignore
                public static chronology(): java.time.temporal.TemporalQuery;
                /**
                 * A query for the smallest supported unit.
                 * <p>
                 * This queries a {@code TemporalAccessor} for the time precision.
                 * If the target {@code TemporalAccessor} represents a consistent or complete date-time,
                 * date or time then this must return the smallest precision actually supported.
                 * Note that fields such as {@code NANO_OF_DAY} and {@code NANO_OF_SECOND}
                 * are defined to always return ignoring the precision, thus this is the only
                 * way to find the actual smallest supported unit.
                 * For example, were {@code GregorianCalendar} to implement {@code TemporalAccessor}
                 * it would return a precision of {@code MILLIS}.
                 * <p>
                 * The result from JDK classes implementing {@code TemporalAccessor} is as follows:<br>
                 * {@code LocalDate} returns {@code DAYS}<br>
                 * {@code LocalTime} returns {@code NANOS}<br>
                 * {@code LocalDateTime} returns {@code NANOS}<br>
                 * {@code ZonedDateTime} returns {@code NANOS}<br>
                 * {@code OffsetTime} returns {@code NANOS}<br>
                 * {@code OffsetDateTime} returns {@code NANOS}<br>
                 * {@code ChronoLocalDate} returns {@code DAYS}<br>
                 * {@code ChronoLocalDateTime} returns {@code NANOS}<br>
                 * {@code ChronoZonedDateTime} returns {@code NANOS}<br>
                 * {@code Era} returns {@code ERAS}<br>
                 * {@code DayOfWeek} returns {@code DAYS}<br>
                 * {@code Month} returns {@code MONTHS}<br>
                 * {@code Year} returns {@code YEARS}<br>
                 * {@code YearMonth} returns {@code MONTHS}<br>
                 * {@code MonthDay} returns null (does not represent a complete date or time)<br>
                 * {@code ZoneOffset} returns null (does not represent a date or time)<br>
                 * {@code Instant} returns {@code NANOS}<br>
                 */
                // @ts-ignore
                public static precision(): java.time.temporal.TemporalQuery;
                /**
                 * A lenient query for the {@code ZoneId}, falling back to the {@code ZoneOffset}.
                 * <p>
                 * This queries a {@code TemporalAccessor} for the zone.
                 * It first tries to obtain the zone, using {@link #zoneId()}.
                 * If that is not found it tries to obtain the {@link #offset()}.
                 * Thus a {@link java.time.ZonedDateTime} will return the result of {@code getZone()},
                 * while an {@link java.time.OffsetDateTime} will return the result of {@code getOffset()}.
                 * <p>
                 * In most cases, applications should use this query rather than {@code #zoneId()}.
                 * <p>
                 * The method {@link ZoneId#from(TemporalAccessor)} can be used as a
                 * {@code TemporalQuery} via a method reference, {@code ZoneId::from}.
                 * That method is equivalent to this query, except that it throws an
                 * exception if a zone cannot be obtained.
                 */
                // @ts-ignore
                public static zone(): java.time.temporal.TemporalQuery;
                /**
                 * A query for {@code ZoneOffset} returning null if not found.
                 * <p>
                 * This returns a {@code TemporalQuery} that can be used to query a temporal
                 * object for the offset. The query will return null if the temporal
                 * object cannot supply an offset.
                 * <p>
                 * The query implementation examines the {@link ChronoField#OFFSET_SECONDS OFFSET_SECONDS}
                 * field and uses it to create a {@code ZoneOffset}.
                 * <p>
                 * The method {@link java.time.ZoneOffset#from(TemporalAccessor)} can be used as a
                 * {@code TemporalQuery} via a method reference, {@code ZoneOffset::from}.
                 * This query and {@code ZoneOffset::from} will return the same result if the
                 * temporal object contains an offset. If the temporal object does not contain
                 * an offset, then the method reference will throw an exception, whereas this
                 * query will return null.
                 */
                // @ts-ignore
                public static offset(): java.time.temporal.TemporalQuery;
                /**
                 * A query for {@code LocalDate} returning null if not found.
                 * <p>
                 * This returns a {@code TemporalQuery} that can be used to query a temporal
                 * object for the local date. The query will return null if the temporal
                 * object cannot supply a local date.
                 * <p>
                 * The query implementation examines the {@link ChronoField#EPOCH_DAY EPOCH_DAY}
                 * field and uses it to create a {@code LocalDate}.
                 * <p>
                 * The method {@link ZoneOffset#from(TemporalAccessor)} can be used as a
                 * {@code TemporalQuery} via a method reference, {@code LocalDate::from}.
                 * This query and {@code LocalDate::from} will return the same result if the
                 * temporal object contains a date. If the temporal object does not contain
                 * a date, then the method reference will throw an exception, whereas this
                 * query will return null.
                 */
                // @ts-ignore
                public static localDate(): java.time.temporal.TemporalQuery;
                /**
                 * A query for {@code LocalTime} returning null if not found.
                 * <p>
                 * This returns a {@code TemporalQuery} that can be used to query a temporal
                 * object for the local time. The query will return null if the temporal
                 * object cannot supply a local time.
                 * <p>
                 * The query implementation examines the {@link ChronoField#NANO_OF_DAY NANO_OF_DAY}
                 * field and uses it to create a {@code LocalTime}.
                 * <p>
                 * The method {@link ZoneOffset#from(TemporalAccessor)} can be used as a
                 * {@code TemporalQuery} via a method reference, {@code LocalTime::from}.
                 * This query and {@code LocalTime::from} will return the same result if the
                 * temporal object contains a time. If the temporal object does not contain
                 * a time, then the method reference will throw an exception, whereas this
                 * query will return null.
                 */
                // @ts-ignore
                public static localTime(): java.time.temporal.TemporalQuery;
            }
        }
    }
}
