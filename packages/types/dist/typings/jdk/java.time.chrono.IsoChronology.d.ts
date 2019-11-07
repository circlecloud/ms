declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class IsoChronology extends java.time.chrono.AbstractChronology {
                // @ts-ignore
                public static INSTANCE: java.time.chrono.IsoChronology;
                /**
                 * Gets the ID of the chronology - 'ISO'.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}.
                 * It can be used to lookup the {@code Chronology} using {@link Chronology#of(String)}.
                 */
                // @ts-ignore
                public getId(): string;
                /**
                 * Gets the calendar type of the underlying calendar system - 'iso8601'.
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
                 * Obtains an ISO local date from the era, year-of-era, month-of-year
                 * and day-of-month fields.
                 */
                // @ts-ignore
                public date(era: java.time.chrono.Era, yearOfEra: number, month: number, dayOfMonth: number): java.time.LocalDate;
                /**
                 * Obtains an ISO local date from the proleptic-year, month-of-year
                 * and day-of-month fields.
                 * <p>
                 * This is equivalent to {@link LocalDate#of(int, int, int)}.
                 */
                // @ts-ignore
                public date(prolepticYear: number, month: number, dayOfMonth: number): java.time.LocalDate;
                /**
                 * Obtains an ISO local date from the era, year-of-era and day-of-year fields.
                 */
                // @ts-ignore
                public dateYearDay(era: java.time.chrono.Era, yearOfEra: number, dayOfYear: number): java.time.LocalDate;
                /**
                 * Obtains an ISO local date from the proleptic-year and day-of-year fields.
                 * <p>
                 * This is equivalent to {@link LocalDate#ofYearDay(int, int)}.
                 */
                // @ts-ignore
                public dateYearDay(prolepticYear: number, dayOfYear: number): java.time.LocalDate;
                /**
                 * Obtains an ISO local date from the epoch-day.
                 * <p>
                 * This is equivalent to {@link LocalDate#ofEpochDay(long)}.
                 */
                // @ts-ignore
                public dateEpochDay(epochDay: number): java.time.LocalDate;
                /**
                 * Obtains an ISO local date from another date-time object.
                 * <p>
                 * This is equivalent to {@link LocalDate#from(TemporalAccessor)}.
                 */
                // @ts-ignore
                public date(temporal: java.time.temporal.TemporalAccessor): java.time.LocalDate;
                /**
                 * Obtains an ISO local date-time from another date-time object.
                 * <p>
                 * This is equivalent to {@link LocalDateTime#from(TemporalAccessor)}.
                 */
                // @ts-ignore
                public localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.LocalDateTime;
                /**
                 * Obtains an ISO zoned date-time from another date-time object.
                 * <p>
                 * This is equivalent to {@link ZonedDateTime#from(TemporalAccessor)}.
                 */
                // @ts-ignore
                public zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.ZonedDateTime;
                /**
                 * Obtains an ISO zoned date-time in this chronology from an {@code Instant}.
                 * <p>
                 * This is equivalent to {@link ZonedDateTime#ofInstant(Instant, ZoneId)}.
                 */
                // @ts-ignore
                public zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.ZonedDateTime;
                /**
                 * Obtains the current ISO local date from the system clock in the default time-zone.
                 * <p>
                 * This will query the {@link Clock#systemDefaultZone() system clock} in the default
                 * time-zone to obtain the current date.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                public dateNow(): java.time.LocalDate;
                /**
                 * Obtains the current ISO local date from the system clock in the specified time-zone.
                 * <p>
                 * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date.
                 * Specifying the time-zone avoids dependence on the default time-zone.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                public dateNow(zone: java.time.ZoneId): java.time.LocalDate;
                /**
                 * Obtains the current ISO local date from the specified clock.
                 * <p>
                 * This will query the specified clock to obtain the current date - today.
                 * Using this method allows the use of an alternate clock for testing.
                 * The alternate clock may be introduced using {@link Clock dependency injection}.
                 */
                // @ts-ignore
                public dateNow(clock: java.time.Clock): java.time.LocalDate;
                /**
                 * Checks if the year is a leap year, according to the ISO proleptic
                 * calendar system rules.
                 * <p>
                 * This method applies the current rules for leap years across the whole time-line.
                 * In general, a year is a leap year if it is divisible by four without
                 * remainder. However, years divisible by 100, are not leap years, with
                 * the exception of years divisible by 400 which are.
                 * <p>
                 * For example, 1904 is a leap year it is divisible by 4.
                 * 1900 was not a leap year as it is divisible by 100, however 2000 was a
                 * leap year as it is divisible by 400.
                 * <p>
                 * The calculation is proleptic - applying the same rules into the far future and far past.
                 * This is historically inaccurate, but is correct for the ISO-8601 standard.
                 */
                // @ts-ignore
                public isLeapYear(prolepticYear: number): boolean;
                // @ts-ignore
                public prolepticYear(era: java.time.chrono.Era, yearOfEra: number): number;
                // @ts-ignore
                public eraOf(eraValue: number): java.time.chrono.IsoEra;
                // @ts-ignore
                public eras(): java.util.List;
                /**
                 * Resolves parsed {@code ChronoField} values into a date during parsing.
                 * <p>
                 * Most {@code TemporalField} implementations are resolved using the
                 * resolve method on the field. By contrast, the {@code ChronoField} class
                 * defines fields that only have meaning relative to the chronology.
                 * As such, {@code ChronoField} date fields are resolved here in the
                 * context of a specific chronology.
                 * <p>
                 * {@code ChronoField} instances on the ISO calendar system are resolved
                 * as follows.
                 * <ul>
                 * <li>{@code EPOCH_DAY} - If present, this is converted to a {@code LocalDate}
                 * and all other date fields are then cross-checked against the date.
                 * <li>{@code PROLEPTIC_MONTH} - If present, then it is split into the
                 * {@code YEAR} and {@code MONTH_OF_YEAR}. If the mode is strict or smart
                 * then the field is validated.
                 * <li>{@code YEAR_OF_ERA} and {@code ERA} - If both are present, then they
                 * are combined to form a {@code YEAR}. In lenient mode, the {@code YEAR_OF_ERA}
                 * range is not validated, in smart and strict mode it is. The {@code ERA} is
                 * validated for range in all three modes. If only the {@code YEAR_OF_ERA} is
                 * present, and the mode is smart or lenient, then the current era (CE/AD)
                 * is assumed. In strict mode, no era is assumed and the {@code YEAR_OF_ERA} is
                 * left untouched. If only the {@code ERA} is present, then it is left untouched.
                 * <li>{@code YEAR}, {@code MONTH_OF_YEAR} and {@code DAY_OF_MONTH} -
                 * If all three are present, then they are combined to form a {@code LocalDate}.
                 * In all three modes, the {@code YEAR} is validated. If the mode is smart or strict,
                 * then the month and day are validated, with the day validated from 1 to 31.
                 * If the mode is lenient, then the date is combined in a manner equivalent to
                 * creating a date on the first of January in the requested year, then adding
                 * the difference in months, then the difference in days.
                 * If the mode is smart, and the day-of-month is greater than the maximum for
                 * the year-month, then the day-of-month is adjusted to the last day-of-month.
                 * If the mode is strict, then the three fields must form a valid date.
                 * <li>{@code YEAR} and {@code DAY_OF_YEAR} -
                 * If both are present, then they are combined to form a {@code LocalDate}.
                 * In all three modes, the {@code YEAR} is validated.
                 * If the mode is lenient, then the date is combined in a manner equivalent to
                 * creating a date on the first of January in the requested year, then adding
                 * the difference in days.
                 * If the mode is smart or strict, then the two fields must form a valid date.
                 * <li>{@code YEAR}, {@code MONTH_OF_YEAR}, {@code ALIGNED_WEEK_OF_MONTH} and
                 * {@code ALIGNED_DAY_OF_WEEK_IN_MONTH} -
                 * If all four are present, then they are combined to form a {@code LocalDate}.
                 * In all three modes, the {@code YEAR} is validated.
                 * If the mode is lenient, then the date is combined in a manner equivalent to
                 * creating a date on the first of January in the requested year, then adding
                 * the difference in months, then the difference in weeks, then in days.
                 * If the mode is smart or strict, then the all four fields are validated to
                 * their outer ranges. The date is then combined in a manner equivalent to
                 * creating a date on the first day of the requested year and month, then adding
                 * the amount in weeks and days to reach their values. If the mode is strict,
                 * the date is additionally validated to check that the day and week adjustment
                 * did not change the month.
                 * <li>{@code YEAR}, {@code MONTH_OF_YEAR}, {@code ALIGNED_WEEK_OF_MONTH} and
                 * {@code DAY_OF_WEEK} - If all four are present, then they are combined to
                 * form a {@code LocalDate}. The approach is the same as described above for
                 * years, months and weeks in {@code ALIGNED_DAY_OF_WEEK_IN_MONTH}.
                 * The day-of-week is adjusted as the next or same matching day-of-week once
                 * the years, months and weeks have been handled.
                 * <li>{@code YEAR}, {@code ALIGNED_WEEK_OF_YEAR} and {@code ALIGNED_DAY_OF_WEEK_IN_YEAR} -
                 * If all three are present, then they are combined to form a {@code LocalDate}.
                 * In all three modes, the {@code YEAR} is validated.
                 * If the mode is lenient, then the date is combined in a manner equivalent to
                 * creating a date on the first of January in the requested year, then adding
                 * the difference in weeks, then in days.
                 * If the mode is smart or strict, then the all three fields are validated to
                 * their outer ranges. The date is then combined in a manner equivalent to
                 * creating a date on the first day of the requested year, then adding
                 * the amount in weeks and days to reach their values. If the mode is strict,
                 * the date is additionally validated to check that the day and week adjustment
                 * did not change the year.
                 * <li>{@code YEAR}, {@code ALIGNED_WEEK_OF_YEAR} and {@code DAY_OF_WEEK} -
                 * If all three are present, then they are combined to form a {@code LocalDate}.
                 * The approach is the same as described above for years and weeks in
                 * {@code ALIGNED_DAY_OF_WEEK_IN_YEAR}. The day-of-week is adjusted as the
                 * next or same matching day-of-week once the years and weeks have been handled.
                 * </ul>
                 */
                // @ts-ignore
                public resolveDate(fieldValues: java.util.Map, resolverStyle: java.time.format.ResolverStyle): java.time.LocalDate;
                // @ts-ignore
                public range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange;
                /**
                 * Obtains a period for this chronology based on years, months and days.
                 * <p>
                 * This returns a period tied to the ISO chronology using the specified
                 * years, months and days. See {@link Period} for further details.
                 */
                // @ts-ignore
                public period(years: number, months: number, days: number): java.time.Period;
            }
        }
    }
}
