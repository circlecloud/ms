declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class ThaiBuddhistDate extends java.time.chrono.ChronoLocalDateImpl {
                /**
                 * Obtains the current {@code ThaiBuddhistDate} from the system clock in the default time-zone.
                 * <p>
                 * This will query the {@link Clock#systemDefaultZone() system clock} in the default
                 * time-zone to obtain the current date.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                public static now(): java.time.chrono.ThaiBuddhistDate;
                /**
                 * Obtains the current {@code ThaiBuddhistDate} from the system clock in the specified time-zone.
                 * <p>
                 * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date.
                 * Specifying the time-zone avoids dependence on the default time-zone.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                public static now(zone: java.time.ZoneId): java.time.chrono.ThaiBuddhistDate;
                /**
                 * Obtains the current {@code ThaiBuddhistDate} from the specified clock.
                 * <p>
                 * This will query the specified clock to obtain the current date - today.
                 * Using this method allows the use of an alternate clock for testing.
                 * The alternate clock may be introduced using {@linkplain Clock dependency injection}.
                 */
                // @ts-ignore
                public static now(clock: java.time.Clock): java.time.chrono.ThaiBuddhistDate;
                /**
                 * Obtains a {@code ThaiBuddhistDate} representing a date in the Thai Buddhist calendar
                 * system from the proleptic-year, month-of-year and day-of-month fields.
                 * <p>
                 * This returns a {@code ThaiBuddhistDate} with the specified fields.
                 * The day must be valid for the year and month, otherwise an exception will be thrown.
                 */
                // @ts-ignore
                public static of(prolepticYear: number, month: number, dayOfMonth: number): java.time.chrono.ThaiBuddhistDate;
                /**
                 * Obtains a {@code ThaiBuddhistDate} from a temporal object.
                 * <p>
                 * This obtains a date in the Thai Buddhist calendar system based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code ThaiBuddhistDate}.
                 * <p>
                 * The conversion typically uses the {@link ChronoField#EPOCH_DAY EPOCH_DAY}
                 * field, which is standardized across calendar systems.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code ThaiBuddhistDate::from}.
                 */
                // @ts-ignore
                public static from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ThaiBuddhistDate;
                /**
                 * Gets the chronology of this date, which is the Thai Buddhist calendar system.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 */
                // @ts-ignore
                public getChronology(): java.time.chrono.ThaiBuddhistChronology;
                /**
                 * Gets the era applicable at this date.
                 * <p>
                 * The Thai Buddhist calendar system has two eras, 'BE' and 'BEFORE_BE',
                 * defined by {@link ThaiBuddhistEra}.
                 */
                // @ts-ignore
                public getEra(): java.time.chrono.ThaiBuddhistEra;
                /**
                 * Returns the length of the month represented by this date.
                 * <p>
                 * This returns the length of the month in days.
                 * Month lengths match those of the ISO calendar system.
                 */
                // @ts-ignore
                public lengthOfMonth(): number;
                // @ts-ignore
                public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
                // @ts-ignore
                public getLong(field: java.time.temporal.TemporalField): number;
                // @ts-ignore
                public with(field: java.time.temporal.TemporalField, newValue: number): java.time.chrono.ThaiBuddhistDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.ThaiBuddhistDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ThaiBuddhistDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ThaiBuddhistDate;
                // @ts-ignore
                public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.ThaiBuddhistDate;
                // @ts-ignore
                public minus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.ThaiBuddhistDate;
                // @ts-ignore
                public atTime(localTime: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime;
                // @ts-ignore
                public until(endDate: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod;
                // @ts-ignore
                public toEpochDay(): number;
                /**
                 * Compares this date to another date, including the chronology.
                 * <p>
                 * Compares this {@code ThaiBuddhistDate} with another ensuring that the date is the same.
                 * <p>
                 * Only objects of type {@code ThaiBuddhistDate} are compared, other types return false.
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
