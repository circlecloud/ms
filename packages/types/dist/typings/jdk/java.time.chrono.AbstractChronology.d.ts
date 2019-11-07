declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
            abstract class AbstractChronology extends java.lang.Object {
                /**
                 * Creates an instance.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Resolves parsed {@code ChronoField} values into a date during parsing.
                 * <p>
                 * Most {@code TemporalField} implementations are resolved using the
                 * resolve method on the field. By contrast, the {@code ChronoField} class
                 * defines fields that only have meaning relative to the chronology.
                 * As such, {@code ChronoField} date fields are resolved here in the
                 * context of a specific chronology.
                 * <p>
                 * {@code ChronoField} instances are resolved by this method, which may
                 * be overridden in subclasses.
                 * <ul>
                 * <li>{@code EPOCH_DAY} - If present, this is converted to a date and
                 * all other date fields are then cross-checked against the date.
                 * <li>{@code PROLEPTIC_MONTH} - If present, then it is split into the
                 * {@code YEAR} and {@code MONTH_OF_YEAR}. If the mode is strict or smart
                 * then the field is validated.
                 * <li>{@code YEAR_OF_ERA} and {@code ERA} - If both are present, then they
                 * are combined to form a {@code YEAR}. In lenient mode, the {@code YEAR_OF_ERA}
                 * range is not validated, in smart and strict mode it is. The {@code ERA} is
                 * validated for range in all three modes. If only the {@code YEAR_OF_ERA} is
                 * present, and the mode is smart or lenient, then the last available era
                 * is assumed. In strict mode, no era is assumed and the {@code YEAR_OF_ERA} is
                 * left untouched. If only the {@code ERA} is present, then it is left untouched.
                 * <li>{@code YEAR}, {@code MONTH_OF_YEAR} and {@code DAY_OF_MONTH} -
                 * If all three are present, then they are combined to form a date.
                 * In all three modes, the {@code YEAR} is validated.
                 * If the mode is smart or strict, then the month and day are validated.
                 * If the mode is lenient, then the date is combined in a manner equivalent to
                 * creating a date on the first day of the first month in the requested year,
                 * then adding the difference in months, then the difference in days.
                 * If the mode is smart, and the day-of-month is greater than the maximum for
                 * the year-month, then the day-of-month is adjusted to the last day-of-month.
                 * If the mode is strict, then the three fields must form a valid date.
                 * <li>{@code YEAR} and {@code DAY_OF_YEAR} -
                 * If both are present, then they are combined to form a date.
                 * In all three modes, the {@code YEAR} is validated.
                 * If the mode is lenient, then the date is combined in a manner equivalent to
                 * creating a date on the first day of the requested year, then adding
                 * the difference in days.
                 * If the mode is smart or strict, then the two fields must form a valid date.
                 * <li>{@code YEAR}, {@code MONTH_OF_YEAR}, {@code ALIGNED_WEEK_OF_MONTH} and
                 * {@code ALIGNED_DAY_OF_WEEK_IN_MONTH} -
                 * If all four are present, then they are combined to form a date.
                 * In all three modes, the {@code YEAR} is validated.
                 * If the mode is lenient, then the date is combined in a manner equivalent to
                 * creating a date on the first day of the first month in the requested year, then adding
                 * the difference in months, then the difference in weeks, then in days.
                 * If the mode is smart or strict, then the all four fields are validated to
                 * their outer ranges. The date is then combined in a manner equivalent to
                 * creating a date on the first day of the requested year and month, then adding
                 * the amount in weeks and days to reach their values. If the mode is strict,
                 * the date is additionally validated to check that the day and week adjustment
                 * did not change the month.
                 * <li>{@code YEAR}, {@code MONTH_OF_YEAR}, {@code ALIGNED_WEEK_OF_MONTH} and
                 * {@code DAY_OF_WEEK} - If all four are present, then they are combined to
                 * form a date. The approach is the same as described above for
                 * years, months and weeks in {@code ALIGNED_DAY_OF_WEEK_IN_MONTH}.
                 * The day-of-week is adjusted as the next or same matching day-of-week once
                 * the years, months and weeks have been handled.
                 * <li>{@code YEAR}, {@code ALIGNED_WEEK_OF_YEAR} and {@code ALIGNED_DAY_OF_WEEK_IN_YEAR} -
                 * If all three are present, then they are combined to form a date.
                 * In all three modes, the {@code YEAR} is validated.
                 * If the mode is lenient, then the date is combined in a manner equivalent to
                 * creating a date on the first day of the requested year, then adding
                 * the difference in weeks, then in days.
                 * If the mode is smart or strict, then the all three fields are validated to
                 * their outer ranges. The date is then combined in a manner equivalent to
                 * creating a date on the first day of the requested year, then adding
                 * the amount in weeks and days to reach their values. If the mode is strict,
                 * the date is additionally validated to check that the day and week adjustment
                 * did not change the year.
                 * <li>{@code YEAR}, {@code ALIGNED_WEEK_OF_YEAR} and {@code DAY_OF_WEEK} -
                 * If all three are present, then they are combined to form a date.
                 * The approach is the same as described above for years and weeks in
                 * {@code ALIGNED_DAY_OF_WEEK_IN_YEAR}. The day-of-week is adjusted as the
                 * next or same matching day-of-week once the years and weeks have been handled.
                 * </ul>
                 * <p>
                 * The default implementation is suitable for most calendar systems.
                 * If {@link java.time.temporal.ChronoField#YEAR_OF_ERA} is found without an {@link java.time.temporal.ChronoField#ERA}
                 * then the last era in {@link #eras()} is used.
                 * The implementation assumes a 7 day week, that the first day-of-month
                 * has the value 1, that first day-of-year has the value 1, and that the
                 * first of the month and year always exists.
                 */
                // @ts-ignore
                public resolveDate(fieldValues: java.util.Map, resolverStyle: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate;
                /**
                 * Compares this chronology to another chronology.
                 * <p>
                 * The comparison order first by the chronology ID string, then by any
                 * additional information specific to the subclass.
                 * It is "consistent with equals", as defined by {@link Comparable}.
                 */
                // @ts-ignore
                public compareTo(other: java.time.chrono.Chronology): number;
                /**
                 * Checks if this chronology is equal to another chronology.
                 * <p>
                 * The comparison is based on the entire state of the object.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * A hash code for this chronology.
                 * <p>
                 * The hash code should be based on the entire state of the object.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Outputs this chronology as a {@code String}, using the chronology ID.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
