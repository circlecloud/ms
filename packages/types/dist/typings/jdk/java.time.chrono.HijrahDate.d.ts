// @ts-nocheck
declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class HijrahDate extends java.time.chrono.ChronoLocalDateImpl {
                /**
                 * Obtains the current {@code HijrahDate} of the Islamic Umm Al-Qura calendar
                 * in the default time-zone.
                 * <p>
                 * This will query the {@link Clock#systemDefaultZone() system clock} in the default
                 * time-zone to obtain the current date.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                public static now(): java.time.chrono.HijrahDate;
                /**
                 * Obtains the current {@code HijrahDate} of the Islamic Umm Al-Qura calendar
                 * in the specified time-zone.
                 * <p>
                 * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date.
                 * Specifying the time-zone avoids dependence on the default time-zone.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                public static now(zone: java.time.ZoneId): java.time.chrono.HijrahDate;
                /**
                 * Obtains the current {@code HijrahDate} of the Islamic Umm Al-Qura calendar
                 * from the specified clock.
                 * <p>
                 * This will query the specified clock to obtain the current date - today.
                 * Using this method allows the use of an alternate clock for testing.
                 * The alternate clock may be introduced using {@linkplain Clock dependency injection}.
                 */
                // @ts-ignore
                public static now(clock: java.time.Clock): java.time.chrono.HijrahDate;
                /**
                 * Obtains a {@code HijrahDate} of the Islamic Umm Al-Qura calendar
                 * from the proleptic-year, month-of-year and day-of-month fields.
                 * <p>
                 * This returns a {@code HijrahDate} with the specified fields.
                 * The day must be valid for the year and month, otherwise an exception will be thrown.
                 */
                // @ts-ignore
                public static of(prolepticYear: number, month: number, dayOfMonth: number): java.time.chrono.HijrahDate;
                /**
                 * Obtains a {@code HijrahDate} of the Islamic Umm Al-Qura calendar from a temporal object.
                 * <p>
                 * This obtains a date in the Hijrah calendar system based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code HijrahDate}.
                 * <p>
                 * The conversion typically uses the {@link ChronoField#EPOCH_DAY EPOCH_DAY}
                 * field, which is standardized across calendar systems.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code HijrahDate::from}.
                 */
                // @ts-ignore
                public static from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.HijrahDate;
                /**
                 * Gets the chronology of this date, which is the Hijrah calendar system.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 */
                // @ts-ignore
                public getChronology(): java.time.chrono.HijrahChronology;
                /**
                 * Gets the era applicable at this date.
                 * <p>
                 * The Hijrah calendar system has one era, 'AH',
                 * defined by {@link HijrahEra}.
                 */
                // @ts-ignore
                public getEra(): java.time.chrono.HijrahEra;
                /**
                 * Returns the length of the month represented by this date.
                 * <p>
                 * This returns the length of the month in days.
                 * Month lengths in the Hijrah calendar system vary between 29 and 30 days.
                 */
                // @ts-ignore
                public lengthOfMonth(): number;
                /**
                 * Returns the length of the year represented by this date.
                 * <p>
                 * This returns the length of the year in days.
                 * A Hijrah calendar system year is typically shorter than
                 * that of the ISO calendar system.
                 */
                // @ts-ignore
                public lengthOfYear(): number;
                // @ts-ignore
                public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
                // @ts-ignore
                public getLong(field: java.time.temporal.TemporalField): number;
                // @ts-ignore
                public with(field: java.time.temporal.TemporalField, newValue: number): java.time.chrono.HijrahDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.HijrahDate;
                /**
                 * Returns a {@code HijrahDate} with the Chronology requested.
                 * <p>
                 * The year, month, and day are checked against the new requested
                 * HijrahChronology.  If the chronology has a shorter month length
                 * for the month, the day is reduced to be the last day of the month.
                 */
                // @ts-ignore
                public withVariant(chronology: java.time.chrono.HijrahChronology): java.time.chrono.HijrahDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.HijrahDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.HijrahDate;
                // @ts-ignore
                public toEpochDay(): number;
                /**
                 * Checks if the year is a leap year, according to the Hijrah calendar system rules.
                 */
                // @ts-ignore
                public isLeapYear(): boolean;
                // @ts-ignore
                public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.HijrahDate;
                // @ts-ignore
                public minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.HijrahDate;
                // @ts-ignore
                public atTime(localTime: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime;
                // @ts-ignore
                public until(endDate: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod;
                /**
                 * Compares this date to another date, including the chronology.
                 * <p>
                 * Compares this {@code HijrahDate} with another ensuring that the date is the same.
                 * <p>
                 * Only objects of type {@code HijrahDate} are compared, other types return false.
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
