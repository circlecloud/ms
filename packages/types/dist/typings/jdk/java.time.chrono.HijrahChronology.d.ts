// @ts-nocheck
declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class HijrahChronology extends java.time.chrono.AbstractChronology {
                // @ts-ignore
                public static INSTANCE: java.time.chrono.HijrahChronology;
                /**
                 * Gets the ID of the chronology.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}. It can be used to
                 * lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 */
                // @ts-ignore
                public getId(): string;
                /**
                 * Gets the calendar type of the Islamic calendar.
                 * <p>
                 * The calendar type is an identifier defined by the
                 * <em>Unicode Locale Data Markup Language (LDML)</em> specification.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 */
                // @ts-ignore
                public getCalendarType(): string;
                /**
                 * Obtains a local date in Hijrah calendar system from the
                 * era, year-of-era, month-of-year and day-of-month fields.
                 */
                // @ts-ignore
                public date(era: java.time.chrono.Era, yearOfEra: number, month: number, dayOfMonth: number): java.time.chrono.HijrahDate;
                /**
                 * Obtains a local date in Hijrah calendar system from the
                 * proleptic-year, month-of-year and day-of-month fields.
                 */
                // @ts-ignore
                public date(prolepticYear: number, month: number, dayOfMonth: number): java.time.chrono.HijrahDate;
                /**
                 * Obtains a local date in Hijrah calendar system from the
                 * era, year-of-era and day-of-year fields.
                 */
                // @ts-ignore
                public dateYearDay(era: java.time.chrono.Era, yearOfEra: number, dayOfYear: number): java.time.chrono.HijrahDate;
                /**
                 * Obtains a local date in Hijrah calendar system from the
                 * proleptic-year and day-of-year fields.
                 */
                // @ts-ignore
                public dateYearDay(prolepticYear: number, dayOfYear: number): java.time.chrono.HijrahDate;
                /**
                 * Obtains a local date in the Hijrah calendar system from the epoch-day.
                 */
                // @ts-ignore
                public dateEpochDay(epochDay: number): java.time.chrono.HijrahDate;
                // @ts-ignore
                public dateNow(): java.time.chrono.HijrahDate;
                // @ts-ignore
                public dateNow(zone: java.time.ZoneId): java.time.chrono.HijrahDate;
                // @ts-ignore
                public dateNow(clock: java.time.Clock): java.time.chrono.HijrahDate;
                // @ts-ignore
                public date(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.HijrahDate;
                // @ts-ignore
                public localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime;
                // @ts-ignore
                public zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime;
                // @ts-ignore
                public zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime;
                // @ts-ignore
                public isLeapYear(prolepticYear: number): boolean;
                // @ts-ignore
                public prolepticYear(era: java.time.chrono.Era, yearOfEra: number): number;
                // @ts-ignore
                public eraOf(eraValue: number): java.time.chrono.HijrahEra;
                // @ts-ignore
                public eras(): java.util.List;
                // @ts-ignore
                public range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange;
                // @ts-ignore
                public resolveDate(fieldValues: java.util.Map, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.HijrahDate;
            }
        }
    }
}
