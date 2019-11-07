declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class MinguoChronology extends java.time.chrono.AbstractChronology {
                // @ts-ignore
                public static INSTANCE: java.time.chrono.MinguoChronology;
                /**
                 * Gets the ID of the chronology - 'Minguo'.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 */
                // @ts-ignore
                public getId(): string;
                /**
                 * Gets the calendar type of the underlying calendar system - 'roc'.
                 * <p>
                 * The calendar type is an identifier defined by the
                 * <em>Unicode Locale Data Markup Language (LDML)</em> specification.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 * It can also be used as part of a locale, accessible via
                 * {@link Locale#getUnicodeLocaleType(String)} with the key 'ca'.
                 */
                // @ts-ignore
                public getCalendarType(): string;
                /**
                 * Obtains a local date in Minguo calendar system from the
                 * era, year-of-era, month-of-year and day-of-month fields.
                 */
                // @ts-ignore
                public date(era: java.time.chrono.Era, yearOfEra: number, month: number, dayOfMonth: number): java.time.chrono.MinguoDate;
                /**
                 * Obtains a local date in Minguo calendar system from the
                 * proleptic-year, month-of-year and day-of-month fields.
                 */
                // @ts-ignore
                public date(prolepticYear: number, month: number, dayOfMonth: number): java.time.chrono.MinguoDate;
                /**
                 * Obtains a local date in Minguo calendar system from the
                 * era, year-of-era and day-of-year fields.
                 */
                // @ts-ignore
                public dateYearDay(era: java.time.chrono.Era, yearOfEra: number, dayOfYear: number): java.time.chrono.MinguoDate;
                /**
                 * Obtains a local date in Minguo calendar system from the
                 * proleptic-year and day-of-year fields.
                 */
                // @ts-ignore
                public dateYearDay(prolepticYear: number, dayOfYear: number): java.time.chrono.MinguoDate;
                /**
                 * Obtains a local date in the Minguo calendar system from the epoch-day.
                 */
                // @ts-ignore
                public dateEpochDay(epochDay: number): java.time.chrono.MinguoDate;
                // @ts-ignore
                public dateNow(): java.time.chrono.MinguoDate;
                // @ts-ignore
                public dateNow(zone: java.time.ZoneId): java.time.chrono.MinguoDate;
                // @ts-ignore
                public dateNow(clock: java.time.Clock): java.time.chrono.MinguoDate;
                // @ts-ignore
                public date(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.MinguoDate;
                // @ts-ignore
                public localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime;
                // @ts-ignore
                public zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime;
                // @ts-ignore
                public zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime;
                /**
                 * Checks if the specified year is a leap year.
                 * <p>
                 * Minguo leap years occur exactly in line with ISO leap years.
                 * This method does not validate the year passed in, and only has a
                 * well-defined result for years in the supported range.
                 */
                // @ts-ignore
                public isLeapYear(prolepticYear: number): boolean;
                // @ts-ignore
                public prolepticYear(era: java.time.chrono.Era, yearOfEra: number): number;
                // @ts-ignore
                public eraOf(eraValue: number): java.time.chrono.MinguoEra;
                // @ts-ignore
                public eras(): java.util.List;
                // @ts-ignore
                public range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange;
                // @ts-ignore
                public resolveDate(fieldValues: java.util.Map, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.MinguoDate;
            }
        }
    }
}
