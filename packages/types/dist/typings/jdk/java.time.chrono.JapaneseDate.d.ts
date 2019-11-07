// @ts-nocheck
declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class JapaneseDate extends java.time.chrono.ChronoLocalDateImpl {
                /**
                 * Obtains the current {@code JapaneseDate} from the system clock in the default time-zone.
                 * <p>
                 * This will query the {@link Clock#systemDefaultZone() system clock} in the default
                 * time-zone to obtain the current date.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                public static now(): java.time.chrono.JapaneseDate;
                /**
                 * Obtains the current {@code JapaneseDate} from the system clock in the specified time-zone.
                 * <p>
                 * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date.
                 * Specifying the time-zone avoids dependence on the default time-zone.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                public static now(zone: java.time.ZoneId): java.time.chrono.JapaneseDate;
                /**
                 * Obtains the current {@code JapaneseDate} from the specified clock.
                 * <p>
                 * This will query the specified clock to obtain the current date - today.
                 * Using this method allows the use of an alternate clock for testing.
                 * The alternate clock may be introduced using {@linkplain Clock dependency injection}.
                 */
                // @ts-ignore
                public static now(clock: java.time.Clock): java.time.chrono.JapaneseDate;
                /**
                 * Obtains a {@code JapaneseDate} representing a date in the Japanese calendar
                 * system from the era, year-of-era, month-of-year and day-of-month fields.
                 * <p>
                 * This returns a {@code JapaneseDate} with the specified fields.
                 * The day must be valid for the year and month, otherwise an exception will be thrown.
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
                public static of(era: java.time.chrono.JapaneseEra, yearOfEra: number, month: number, dayOfMonth: number): java.time.chrono.JapaneseDate;
                /**
                 * Obtains a {@code JapaneseDate} representing a date in the Japanese calendar
                 * system from the proleptic-year, month-of-year and day-of-month fields.
                 * <p>
                 * This returns a {@code JapaneseDate} with the specified fields.
                 * The day must be valid for the year and month, otherwise an exception will be thrown.
                 * <p>
                 * The Japanese proleptic year, month and day-of-month are the same as those
                 * in the ISO calendar system. They are not reset when the era changes.
                 */
                // @ts-ignore
                public static of(prolepticYear: number, month: number, dayOfMonth: number): java.time.chrono.JapaneseDate;
                /**
                 * Obtains a {@code JapaneseDate} from a temporal object.
                 * <p>
                 * This obtains a date in the Japanese calendar system based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code JapaneseDate}.
                 * <p>
                 * The conversion typically uses the {@link ChronoField#EPOCH_DAY EPOCH_DAY}
                 * field, which is standardized across calendar systems.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code JapaneseDate::from}.
                 */
                // @ts-ignore
                public static from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.JapaneseDate;
                /**
                 * Gets the chronology of this date, which is the Japanese calendar system.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 */
                // @ts-ignore
                public getChronology(): java.time.chrono.JapaneseChronology;
                /**
                 * Gets the era applicable at this date.
                 * <p>
                 * The Japanese calendar system has multiple eras defined by {@link JapaneseEra}.
                 */
                // @ts-ignore
                public getEra(): java.time.chrono.JapaneseEra;
                /**
                 * Returns the length of the month represented by this date.
                 * <p>
                 * This returns the length of the month in days.
                 * Month lengths match those of the ISO calendar system.
                 */
                // @ts-ignore
                public lengthOfMonth(): number;
                // @ts-ignore
                public lengthOfYear(): number;
                /**
                 * Checks if the specified field is supported.
                 * <p>
                 * This checks if this date can be queried for the specified field.
                 * If false, then calling the {@link #range(TemporalField) range} and
                 * {@link #get(TemporalField) get} methods will throw an exception.
                 * <p>
                 * If the field is a {@link ChronoField} then the query is implemented here.
                 * The supported fields are:
                 * <ul>
                 * <li>{@code DAY_OF_WEEK}
                 * <li>{@code DAY_OF_MONTH}
                 * <li>{@code DAY_OF_YEAR}
                 * <li>{@code EPOCH_DAY}
                 * <li>{@code MONTH_OF_YEAR}
                 * <li>{@code PROLEPTIC_MONTH}
                 * <li>{@code YEAR_OF_ERA}
                 * <li>{@code YEAR}
                 * <li>{@code ERA}
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
                // @ts-ignore
                public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
                // @ts-ignore
                public getLong(field: java.time.temporal.TemporalField): number;
                // @ts-ignore
                public with(field: java.time.temporal.TemporalField, newValue: number): java.time.chrono.JapaneseDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.JapaneseDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate;
                // @ts-ignore
                public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate;
                // @ts-ignore
                public minus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate;
                // @ts-ignore
                public atTime(localTime: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime;
                // @ts-ignore
                public until(endDate: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod;
                // @ts-ignore
                public toEpochDay(): number;
                /**
                 * Compares this date to another date, including the chronology.
                 * <p>
                 * Compares this {@code JapaneseDate} with another ensuring that the date is the same.
                 * <p>
                 * Only objects of type {@code JapaneseDate} are compared, other types return false.
                 * To compare the dates of two {@code TemporalAccessor} instances, including dates
                 * in two different chronologies, use {@link ChronoField#EPOCH_DAY} as a comparator.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * A hash code for this date.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
