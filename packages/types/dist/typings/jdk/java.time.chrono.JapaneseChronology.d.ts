// @ts-nocheck
declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class JapaneseChronology extends java.time.chrono.AbstractChronology {
                // @ts-ignore
                public static INSTANCE: java.time.chrono.JapaneseChronology;
                /**
                 * Gets the ID of the chronology - 'Japanese'.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 */
                // @ts-ignore
                public getId(): string;
                /**
                 * Gets the calendar type of the underlying calendar system - 'japanese'.
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
                 * Obtains a local date in Japanese calendar system from the
                 * era, year-of-era, month-of-year and day-of-month fields.
                 * <p>
                 * The Japanese month and day-of-month are the same as those in the
                 * ISO calendar system. They are not reset when the era changes.
                 * For example:
                 * <pre>
                 * 6th Jan Showa 64 = ISO 1989-01-06
                 * 7th Jan Showa 64 = ISO 1989-01-07
                 * 8th Jan Heisei 1 = ISO 1989-01-08
                 * 9th Jan Heisei 1 = ISO 1989-01-09
                 * </pre>
                 */
                // @ts-ignore
                public date(era: java.time.chrono.Era, yearOfEra: number, month: number, dayOfMonth: number): java.time.chrono.JapaneseDate;
                /**
                 * Obtains a local date in Japanese calendar system from the
                 * proleptic-year, month-of-year and day-of-month fields.
                 * <p>
                 * The Japanese proleptic year, month and day-of-month are the same as those
                 * in the ISO calendar system. They are not reset when the era changes.
                 */
                // @ts-ignore
                public date(prolepticYear: number, month: number, dayOfMonth: number): java.time.chrono.JapaneseDate;
                /**
                 * Obtains a local date in Japanese calendar system from the
                 * era, year-of-era and day-of-year fields.
                 * <p>
                 * The day-of-year in this factory is expressed relative to the start of the year-of-era.
                 * This definition changes the normal meaning of day-of-year only in those years
                 * where the year-of-era is reset to one due to a change in the era.
                 * For example:
                 * <pre>
                 * 6th Jan Showa 64 = day-of-year 6
                 * 7th Jan Showa 64 = day-of-year 7
                 * 8th Jan Heisei 1 = day-of-year 1
                 * 9th Jan Heisei 1 = day-of-year 2
                 * </pre>
                 */
                // @ts-ignore
                public dateYearDay(era: java.time.chrono.Era, yearOfEra: number, dayOfYear: number): java.time.chrono.JapaneseDate;
                /**
                 * Obtains a local date in Japanese calendar system from the
                 * proleptic-year and day-of-year fields.
                 * <p>
                 * The day-of-year in this factory is expressed relative to the start of the proleptic year.
                 * The Japanese proleptic year and day-of-year are the same as those in the ISO calendar system.
                 * They are not reset when the era changes.
                 */
                // @ts-ignore
                public dateYearDay(prolepticYear: number, dayOfYear: number): java.time.chrono.JapaneseDate;
                /**
                 * Obtains a local date in the Japanese calendar system from the epoch-day.
                 */
                // @ts-ignore
                public dateEpochDay(epochDay: number): java.time.chrono.JapaneseDate;
                // @ts-ignore
                public dateNow(): java.time.chrono.JapaneseDate;
                // @ts-ignore
                public dateNow(zone: java.time.ZoneId): java.time.chrono.JapaneseDate;
                // @ts-ignore
                public dateNow(clock: java.time.Clock): java.time.chrono.JapaneseDate;
                // @ts-ignore
                public date(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.JapaneseDate;
                // @ts-ignore
                public localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime;
                // @ts-ignore
                public zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime;
                // @ts-ignore
                public zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime;
                /**
                 * Checks if the specified year is a leap year.
                 * <p>
                 * Japanese calendar leap years occur exactly in line with ISO leap years.
                 * This method does not validate the year passed in, and only has a
                 * well-defined result for years in the supported range.
                 */
                // @ts-ignore
                public isLeapYear(prolepticYear: number): boolean;
                // @ts-ignore
                public prolepticYear(era: java.time.chrono.Era, yearOfEra: number): number;
                /**
                 * Returns the calendar system era object from the given numeric value.
                 * See the description of each Era for the numeric values of:
                 * {@link JapaneseEra#HEISEI}, {@link JapaneseEra#SHOWA},{@link JapaneseEra#TAISHO},
                 * {@link JapaneseEra#MEIJI}), only Meiji and later eras are supported.
                 */
                // @ts-ignore
                public eraOf(eraValue: number): java.time.chrono.JapaneseEra;
                // @ts-ignore
                public eras(): java.util.List;
                // @ts-ignore
                public range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange;
                // @ts-ignore
                public resolveDate(fieldValues: java.util.Map, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.JapaneseDate;
            }
        }
    }
}
