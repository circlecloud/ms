// @ts-nocheck
declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
            interface Chronology {
                /**
                 * Obtains an instance of {@code Chronology} from a temporal object.
                 * <p>
                 * This obtains a chronology based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code Chronology}.
                 * <p>
                 * The conversion will obtain the chronology using {@link TemporalQueries#chronology()}.
                 * If the specified temporal object does not have a chronology, {@link IsoChronology} is returned.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code Chronology::from}.
                 */
                // @ts-ignore
                 from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.Chronology;
                /**
                 * Obtains an instance of {@code Chronology} from a locale.
                 * <p>
                 * This returns a {@code Chronology} based on the specified locale,
                 * typically returning {@code IsoChronology}. Other calendar systems
                 * are only returned if they are explicitly selected within the locale.
                 * <p>
                 * The {@link Locale} class provide access to a range of information useful
                 * for localizing an application. This includes the language and region,
                 * such as "en-GB" for English as used in Great Britain.
                 * <p>
                 * The {@code Locale} class also supports an extension mechanism that
                 * can be used to identify a calendar system. The mechanism is a form
                 * of key-value pairs, where the calendar system has the key "ca".
                 * For example, the locale "en-JP-u-ca-japanese" represents the English
                 * language as used in Japan with the Japanese calendar system.
                 * <p>
                 * This method finds the desired calendar system by in a manner equivalent
                 * to passing "ca" to {@link Locale#getUnicodeLocaleType(String)}.
                 * If the "ca" key is not present, then {@code IsoChronology} is returned.
                 * <p>
                 * Note that the behavior of this method differs from the older
                 * {@link java.util.Calendar#getInstance(Locale)} method.
                 * If that method receives a locale of "th_TH" it will return {@code BuddhistCalendar}.
                 * By contrast, this method will return {@code IsoChronology}.
                 * Passing the locale "th-TH-u-ca-buddhist" into either method will
                 * result in the Thai Buddhist calendar system and is therefore the
                 * recommended approach going forward for Thai calendar system localization.
                 * <p>
                 * A similar, but simpler, situation occurs for the Japanese calendar system.
                 * The locale "jp_JP_JP" has previously been used to access the calendar.
                 * However, unlike the Thai locale, "ja_JP_JP" is automatically converted by
                 * {@code Locale} to the modern and recommended form of "ja-JP-u-ca-japanese".
                 * Thus, there is no difference in behavior between this method and
                 * {@code Calendar#getInstance(Locale)}.
                 */
                // @ts-ignore
                 ofLocale(locale: java.util.Locale): java.time.chrono.Chronology;
                /**
                 * Obtains an instance of {@code Chronology} from a chronology ID or
                 * calendar system type.
                 * <p>
                 * This returns a chronology based on either the ID or the type.
                 * The {@link #getId() chronology ID} uniquely identifies the chronology.
                 * The {@link #getCalendarType() calendar system type} is defined by the
                 * CLDR specification.
                 * <p>
                 * The chronology may be a system chronology or a chronology
                 * provided by the application via ServiceLoader configuration.
                 * <p>
                 * Since some calendars can be customized, the ID or type typically refers
                 * to the default customization. For example, the Gregorian calendar can have multiple
                 * cutover dates from the Julian, but the lookup only provides the default cutover date.
                 */
                // @ts-ignore
                 of(id: string): java.time.chrono.Chronology;
                /**
                 * Returns the available chronologies.
                 * <p>
                 * Each returned {@code Chronology} is available for use in the system.
                 * The set of chronologies includes the system chronologies and
                 * any chronologies provided by the application via ServiceLoader
                 * configuration.
                 */
                // @ts-ignore
                 getAvailableChronologies(): java.util.Set;
                /**
                 * Gets the ID of the chronology.
                 * <p>
                 * The ID uniquely identifies the {@code Chronology}.
                 * It can be used to lookup the {@code Chronology} using {@link #of(String)}.
                 */
                // @ts-ignore
                 getId(): string;
                /**
                 * Gets the calendar type of the calendar system.
                 * <p>
                 * The calendar type is an identifier defined by the CLDR and
                 * <em>Unicode Locale Data Markup Language (LDML)</em> specifications
                 * to uniquely identification a calendar.
                 * The {@code getCalendarType} is the concatenation of the CLDR calendar type
                 * and the variant, if applicable, is appended separated by "-".
                 * The calendar type is used to lookup the {@code Chronology} using {@link #of(String)}.
                 */
                // @ts-ignore
                 getCalendarType(): string;
                /**
                 * Obtains a local date in this chronology from the era, year-of-era,
                 * month-of-year and day-of-month fields.
                 */
                // @ts-ignore
                 date(era: java.time.chrono.Era, yearOfEra: number, month: number, dayOfMonth: number): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains a local date in this chronology from the proleptic-year,
                 * month-of-year and day-of-month fields.
                 */
                // @ts-ignore
                 date(prolepticYear: number, month: number, dayOfMonth: number): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains a local date in this chronology from the era, year-of-era and
                 * day-of-year fields.
                 */
                // @ts-ignore
                 dateYearDay(era: java.time.chrono.Era, yearOfEra: number, dayOfYear: number): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains a local date in this chronology from the proleptic-year and
                 * day-of-year fields.
                 */
                // @ts-ignore
                 dateYearDay(prolepticYear: number, dayOfYear: number): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains a local date in this chronology from the epoch-day.
                 * <p>
                 * The definition of {@link ChronoField#EPOCH_DAY EPOCH_DAY} is the same
                 * for all calendar systems, thus it can be used for conversion.
                 */
                // @ts-ignore
                 dateEpochDay(epochDay: number): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains the current local date in this chronology from the system clock in the default time-zone.
                 * <p>
                 * This will query the {@link Clock#systemDefaultZone() system clock} in the default
                 * time-zone to obtain the current date.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                 dateNow(): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains the current local date in this chronology from the system clock in the specified time-zone.
                 * <p>
                 * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current date.
                 * Specifying the time-zone avoids dependence on the default time-zone.
                 * <p>
                 * Using this method will prevent the ability to use an alternate clock for testing
                 * because the clock is hard-coded.
                 */
                // @ts-ignore
                 dateNow(zone: java.time.ZoneId): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains the current local date in this chronology from the specified clock.
                 * <p>
                 * This will query the specified clock to obtain the current date - today.
                 * Using this method allows the use of an alternate clock for testing.
                 * The alternate clock may be introduced using {@link Clock dependency injection}.
                 */
                // @ts-ignore
                 dateNow(clock: java.time.Clock): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains a local date in this chronology from another temporal object.
                 * <p>
                 * This obtains a date in this chronology based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code ChronoLocalDate}.
                 * <p>
                 * The conversion typically uses the {@link ChronoField#EPOCH_DAY EPOCH_DAY}
                 * field, which is standardized across calendar systems.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code aChronology::date}.
                 */
                // @ts-ignore
                 date(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains a local date-time in this chronology from another temporal object.
                 * <p>
                 * This obtains a date-time in this chronology based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code ChronoLocalDateTime}.
                 * <p>
                 * The conversion extracts and combines the {@code ChronoLocalDate} and the
                 * {@code LocalTime} from the temporal object.
                 * Implementations are permitted to perform optimizations such as accessing
                 * those fields that are equivalent to the relevant objects.
                 * The result uses this chronology.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code aChronology::localDateTime}.
                 */
                // @ts-ignore
                 localDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime;
                /**
                 * Obtains a {@code ChronoZonedDateTime} in this chronology from another temporal object.
                 * <p>
                 * This obtains a zoned date-time in this chronology based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code ChronoZonedDateTime}.
                 * <p>
                 * The conversion will first obtain a {@code ZoneId} from the temporal object,
                 * falling back to a {@code ZoneOffset} if necessary. It will then try to obtain
                 * an {@code Instant}, falling back to a {@code ChronoLocalDateTime} if necessary.
                 * The result will be either the combination of {@code ZoneId} or {@code ZoneOffset}
                 * with {@code Instant} or {@code ChronoLocalDateTime}.
                 * Implementations are permitted to perform optimizations such as accessing
                 * those fields that are equivalent to the relevant objects.
                 * The result uses this chronology.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code aChronology::zonedDateTime}.
                 */
                // @ts-ignore
                 zonedDateTime(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime;
                /**
                 * Obtains a {@code ChronoZonedDateTime} in this chronology from an {@code Instant}.
                 * <p>
                 * This obtains a zoned date-time with the same instant as that specified.
                 */
                // @ts-ignore
                 zonedDateTime(instant: java.time.Instant, zone: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime;
                /**
                 * Checks if the specified year is a leap year.
                 * <p>
                 * A leap-year is a year of a longer length than normal.
                 * The exact meaning is determined by the chronology according to the following constraints.
                 * <ul>
                 * <li>a leap-year must imply a year-length longer than a non leap-year.
                 * <li>a chronology that does not support the concept of a year must return false.
                 * </ul>
                 */
                // @ts-ignore
                 isLeapYear(prolepticYear: number): boolean;
                /**
                 * Calculates the proleptic-year given the era and year-of-era.
                 * <p>
                 * This combines the era and year-of-era into the single proleptic-year field.
                 * <p>
                 * If the chronology makes active use of eras, such as {@code JapaneseChronology}
                 * then the year-of-era will be validated against the era.
                 * For other chronologies, validation is optional.
                 */
                // @ts-ignore
                 prolepticYear(era: java.time.chrono.Era, yearOfEra: number): number;
                /**
                 * Creates the chronology era object from the numeric value.
                 * <p>
                 * The era is, conceptually, the largest division of the time-line.
                 * Most calendar systems have a single epoch dividing the time-line into two eras.
                 * However, some have multiple eras, such as one for the reign of each leader.
                 * The exact meaning is determined by the chronology according to the following constraints.
                 * <p>
                 * The era in use at 1970-01-01 must have the value 1.
                 * Later eras must have sequentially higher values.
                 * Earlier eras must have sequentially lower values.
                 * Each chronology must refer to an enum or similar singleton to provide the era values.
                 * <p>
                 * This method returns the singleton era of the correct type for the specified era value.
                 */
                // @ts-ignore
                 eraOf(eraValue: number): java.time.chrono.Era;
                /**
                 * Gets the list of eras for the chronology.
                 * <p>
                 * Most calendar systems have an era, within which the year has meaning.
                 * If the calendar system does not support the concept of eras, an empty
                 * list must be returned.
                 */
                // @ts-ignore
                 eras(): java.util.List;
                /**
                 * Gets the range of valid values for the specified field.
                 * <p>
                 * All fields can be expressed as a {@code long} integer.
                 * This method returns an object that describes the valid range for that value.
                 * <p>
                 * Note that the result only describes the minimum and maximum valid values
                 * and it is important not to read too much into them. For example, there
                 * could be values within the range that are invalid for the field.
                 * <p>
                 * This method will return a result whether or not the chronology supports the field.
                 */
                // @ts-ignore
                 range(field: java.time.temporal.ChronoField): java.time.temporal.ValueRange;
                /**
                 * Gets the textual representation of this chronology.
                 * <p>
                 * This returns the textual name used to identify the chronology,
                 * suitable for presentation to the user.
                 * The parameters control the style of the returned text and the locale.
                 */
                // @ts-ignore
                 getDisplayName(style: java.time.format.TextStyle, locale: java.util.Locale): string;
                /**
                 * Resolves parsed {@code ChronoField} values into a date during parsing.
                 * <p>
                 * Most {@code TemporalField} implementations are resolved using the
                 * resolve method on the field. By contrast, the {@code ChronoField} class
                 * defines fields that only have meaning relative to the chronology.
                 * As such, {@code ChronoField} date fields are resolved here in the
                 * context of a specific chronology.
                 * <p>
                 * The default implementation, which explains typical resolve behaviour,
                 * is provided in {@link AbstractChronology}.
                 */
                // @ts-ignore
                 resolveDate(fieldValues: java.util.Map, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate;
                /**
                 * Obtains a period for this chronology based on years, months and days.
                 * <p>
                 * This returns a period tied to this chronology using the specified
                 * years, months and days.  All supplied chronologies use periods
                 * based on years, months and days, however the {@code ChronoPeriod} API
                 * allows the period to be represented using other units.
                 */
                // @ts-ignore
                 period(years: number, months: number, days: number): java.time.chrono.ChronoPeriod;
                /**
                 * Compares this chronology to another chronology.
                 * <p>
                 * The comparison order first by the chronology ID string, then by any
                 * additional information specific to the subclass.
                 * It is "consistent with equals", as defined by {@link Comparable}.
                 */
                // @ts-ignore
                 compareTo(other: java.time.chrono.Chronology): number;
                /**
                 * Checks if this chronology is equal to another chronology.
                 * <p>
                 * The comparison is based on the entire state of the object.
                 */
                // @ts-ignore
                 equals(obj: java.lang.Object): boolean;
                /**
                 * A hash code for this chronology.
                 * <p>
                 * The hash code should be based on the entire state of the object.
                 */
                // @ts-ignore
                 hashCode(): number;
                /**
                 * Outputs this chronology as a {@code String}.
                 * <p>
                 * The format should include the entire state of the object.
                 */
                // @ts-ignore
                 toString(): string;
            }
        }
    }
}
