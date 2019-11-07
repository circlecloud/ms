// @ts-nocheck
declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
             class WeekFields extends java.lang.Object {
                // @ts-ignore
                public static ISO: java.time.temporal.WeekFields;
                // @ts-ignore
                public static SUNDAY_START: java.time.temporal.WeekFields;
                // @ts-ignore
                public static WEEK_BASED_YEARS: java.time.temporal.TemporalUnit;
                /**
                 * Obtains an instance of {@code WeekFields} appropriate for a locale.
                 * <p>
                 * This will look up appropriate values from the provider of localization data.
                 */
                // @ts-ignore
                public static of(locale: java.util.Locale): java.time.temporal.WeekFields;
                /**
                 * Obtains an instance of {@code WeekFields} from the first day-of-week and minimal days.
                 * <p>
                 * The first day-of-week defines the ISO {@code DayOfWeek} that is day 1 of the week.
                 * The minimal number of days in the first week defines how many days must be present
                 * in a month or year, starting from the first day-of-week, before the week is counted
                 * as the first week. A value of 1 will count the first day of the month or year as part
                 * of the first week, whereas a value of 7 will require the whole seven days to be in
                 * the new month or year.
                 * <p>
                 * WeekFields instances are singletons; for each unique combination
                 * of {@code firstDayOfWeek} and {@code minimalDaysInFirstWeek} the
                 * the same instance will be returned.
                 */
                // @ts-ignore
                public static of(firstDayOfWeek: java.time.DayOfWeek, minimalDaysInFirstWeek: number): java.time.temporal.WeekFields;
                /**
                 * Gets the first day-of-week.
                 * <p>
                 * The first day-of-week varies by culture.
                 * For example, the US uses Sunday, while France and the ISO-8601 standard use Monday.
                 * This method returns the first day using the standard {@code DayOfWeek} enum.
                 */
                // @ts-ignore
                public getFirstDayOfWeek(): java.time.DayOfWeek;
                /**
                 * Gets the minimal number of days in the first week.
                 * <p>
                 * The number of days considered to define the first week of a month or year
                 * varies by culture.
                 * For example, the ISO-8601 requires 4 days (more than half a week) to
                 * be present before counting the first week.
                 */
                // @ts-ignore
                public getMinimalDaysInFirstWeek(): number;
                /**
                 * Returns a field to access the day of week based on this {@code WeekFields}.
                 * <p>
                 * This is similar to {@link ChronoField#DAY_OF_WEEK} but uses values for
                 * the day-of-week based on this {@code WeekFields}.
                 * The days are numbered from 1 to 7 where the
                 * {@link #getFirstDayOfWeek() first day-of-week} is assigned the value 1.
                 * <p>
                 * For example, if the first day-of-week is Sunday, then that will have the
                 * value 1, with other days ranging from Monday as 2 to Saturday as 7.
                 * <p>
                 * In the resolving phase of parsing, a localized day-of-week will be converted
                 * to a standardized {@code ChronoField} day-of-week.
                 * The day-of-week must be in the valid range 1 to 7.
                 * Other fields in this class build dates using the standardized day-of-week.
                 */
                // @ts-ignore
                public dayOfWeek(): java.time.temporal.TemporalField;
                /**
                 * Returns a field to access the week of month based on this {@code WeekFields}.
                 * <p>
                 * This represents the concept of the count of weeks within the month where weeks
                 * start on a fixed day-of-week, such as Monday.
                 * This field is typically used with {@link WeekFields#dayOfWeek()}.
                 * <p>
                 * Week one (1) is the week starting on the {@link WeekFields#getFirstDayOfWeek}
                 * where there are at least {@link WeekFields#getMinimalDaysInFirstWeek()} days in the month.
                 * Thus, week one may start up to {@code minDays} days before the start of the month.
                 * If the first week starts after the start of the month then the period before is week zero (0).
                 * <p>
                 * For example:<br>
                 * - if the 1st day of the month is a Monday, week one starts on the 1st and there is no week zero<br>
                 * - if the 2nd day of the month is a Monday, week one starts on the 2nd and the 1st is in week zero<br>
                 * - if the 4th day of the month is a Monday, week one starts on the 4th and the 1st to 3rd is in week zero<br>
                 * - if the 5th day of the month is a Monday, week two starts on the 5th and the 1st to 4th is in week one<br>
                 * <p>
                 * This field can be used with any calendar system.
                 * <p>
                 * In the resolving phase of parsing, a date can be created from a year,
                 * week-of-month, month-of-year and day-of-week.
                 * <p>
                 * In {@linkplain ResolverStyle#STRICT strict mode}, all four fields are
                 * validated against their range of valid values. The week-of-month field
                 * is validated to ensure that the resulting month is the month requested.
                 * <p>
                 * In {@linkplain ResolverStyle#SMART smart mode}, all four fields are
                 * validated against their range of valid values. The week-of-month field
                 * is validated from 0 to 6, meaning that the resulting date can be in a
                 * different month to that specified.
                 * <p>
                 * In {@linkplain ResolverStyle#LENIENT lenient mode}, the year and day-of-week
                 * are validated against the range of valid values. The resulting date is calculated
                 * equivalent to the following four stage approach.
                 * First, create a date on the first day of the first week of January in the requested year.
                 * Then take the month-of-year, subtract one, and add the amount in months to the date.
                 * Then take the week-of-month, subtract one, and add the amount in weeks to the date.
                 * Finally, adjust to the correct day-of-week within the localized week.
                 */
                // @ts-ignore
                public weekOfMonth(): java.time.temporal.TemporalField;
                /**
                 * Returns a field to access the week of year based on this {@code WeekFields}.
                 * <p>
                 * This represents the concept of the count of weeks within the year where weeks
                 * start on a fixed day-of-week, such as Monday.
                 * This field is typically used with {@link WeekFields#dayOfWeek()}.
                 * <p>
                 * Week one(1) is the week starting on the {@link WeekFields#getFirstDayOfWeek}
                 * where there are at least {@link WeekFields#getMinimalDaysInFirstWeek()} days in the year.
                 * Thus, week one may start up to {@code minDays} days before the start of the year.
                 * If the first week starts after the start of the year then the period before is week zero (0).
                 * <p>
                 * For example:<br>
                 * - if the 1st day of the year is a Monday, week one starts on the 1st and there is no week zero<br>
                 * - if the 2nd day of the year is a Monday, week one starts on the 2nd and the 1st is in week zero<br>
                 * - if the 4th day of the year is a Monday, week one starts on the 4th and the 1st to 3rd is in week zero<br>
                 * - if the 5th day of the year is a Monday, week two starts on the 5th and the 1st to 4th is in week one<br>
                 * <p>
                 * This field can be used with any calendar system.
                 * <p>
                 * In the resolving phase of parsing, a date can be created from a year,
                 * week-of-year and day-of-week.
                 * <p>
                 * In {@linkplain ResolverStyle#STRICT strict mode}, all three fields are
                 * validated against their range of valid values. The week-of-year field
                 * is validated to ensure that the resulting year is the year requested.
                 * <p>
                 * In {@linkplain ResolverStyle#SMART smart mode}, all three fields are
                 * validated against their range of valid values. The week-of-year field
                 * is validated from 0 to 54, meaning that the resulting date can be in a
                 * different year to that specified.
                 * <p>
                 * In {@linkplain ResolverStyle#LENIENT lenient mode}, the year and day-of-week
                 * are validated against the range of valid values. The resulting date is calculated
                 * equivalent to the following three stage approach.
                 * First, create a date on the first day of the first week in the requested year.
                 * Then take the week-of-year, subtract one, and add the amount in weeks to the date.
                 * Finally, adjust to the correct day-of-week within the localized week.
                 */
                // @ts-ignore
                public weekOfYear(): java.time.temporal.TemporalField;
                /**
                 * Returns a field to access the week of a week-based-year based on this {@code WeekFields}.
                 * <p>
                 * This represents the concept of the count of weeks within the year where weeks
                 * start on a fixed day-of-week, such as Monday and each week belongs to exactly one year.
                 * This field is typically used with {@link WeekFields#dayOfWeek()} and
                 * {@link WeekFields#weekBasedYear()}.
                 * <p>
                 * Week one(1) is the week starting on the {@link WeekFields#getFirstDayOfWeek}
                 * where there are at least {@link WeekFields#getMinimalDaysInFirstWeek()} days in the year.
                 * If the first week starts after the start of the year then the period before
                 * is in the last week of the previous year.
                 * <p>
                 * For example:<br>
                 * - if the 1st day of the year is a Monday, week one starts on the 1st<br>
                 * - if the 2nd day of the year is a Monday, week one starts on the 2nd and
                 * the 1st is in the last week of the previous year<br>
                 * - if the 4th day of the year is a Monday, week one starts on the 4th and
                 * the 1st to 3rd is in the last week of the previous year<br>
                 * - if the 5th day of the year is a Monday, week two starts on the 5th and
                 * the 1st to 4th is in week one<br>
                 * <p>
                 * This field can be used with any calendar system.
                 * <p>
                 * In the resolving phase of parsing, a date can be created from a week-based-year,
                 * week-of-year and day-of-week.
                 * <p>
                 * In {@linkplain ResolverStyle#STRICT strict mode}, all three fields are
                 * validated against their range of valid values. The week-of-year field
                 * is validated to ensure that the resulting week-based-year is the
                 * week-based-year requested.
                 * <p>
                 * In {@linkplain ResolverStyle#SMART smart mode}, all three fields are
                 * validated against their range of valid values. The week-of-week-based-year field
                 * is validated from 1 to 53, meaning that the resulting date can be in the
                 * following week-based-year to that specified.
                 * <p>
                 * In {@linkplain ResolverStyle#LENIENT lenient mode}, the year and day-of-week
                 * are validated against the range of valid values. The resulting date is calculated
                 * equivalent to the following three stage approach.
                 * First, create a date on the first day of the first week in the requested week-based-year.
                 * Then take the week-of-week-based-year, subtract one, and add the amount in weeks to the date.
                 * Finally, adjust to the correct day-of-week within the localized week.
                 */
                // @ts-ignore
                public weekOfWeekBasedYear(): java.time.temporal.TemporalField;
                /**
                 * Returns a field to access the year of a week-based-year based on this {@code WeekFields}.
                 * <p>
                 * This represents the concept of the year where weeks start on a fixed day-of-week,
                 * such as Monday and each week belongs to exactly one year.
                 * This field is typically used with {@link WeekFields#dayOfWeek()} and
                 * {@link WeekFields#weekOfWeekBasedYear()}.
                 * <p>
                 * Week one(1) is the week starting on the {@link WeekFields#getFirstDayOfWeek}
                 * where there are at least {@link WeekFields#getMinimalDaysInFirstWeek()} days in the year.
                 * Thus, week one may start before the start of the year.
                 * If the first week starts after the start of the year then the period before
                 * is in the last week of the previous year.
                 * <p>
                 * This field can be used with any calendar system.
                 * <p>
                 * In the resolving phase of parsing, a date can be created from a week-based-year,
                 * week-of-year and day-of-week.
                 * <p>
                 * In {@linkplain ResolverStyle#STRICT strict mode}, all three fields are
                 * validated against their range of valid values. The week-of-year field
                 * is validated to ensure that the resulting week-based-year is the
                 * week-based-year requested.
                 * <p>
                 * In {@linkplain ResolverStyle#SMART smart mode}, all three fields are
                 * validated against their range of valid values. The week-of-week-based-year field
                 * is validated from 1 to 53, meaning that the resulting date can be in the
                 * following week-based-year to that specified.
                 * <p>
                 * In {@linkplain ResolverStyle#LENIENT lenient mode}, the year and day-of-week
                 * are validated against the range of valid values. The resulting date is calculated
                 * equivalent to the following three stage approach.
                 * First, create a date on the first day of the first week in the requested week-based-year.
                 * Then take the week-of-week-based-year, subtract one, and add the amount in weeks to the date.
                 * Finally, adjust to the correct day-of-week within the localized week.
                 */
                // @ts-ignore
                public weekBasedYear(): java.time.temporal.TemporalField;
                /**
                 * Checks if this {@code WeekFields} is equal to the specified object.
                 * <p>
                 * The comparison is based on the entire state of the rules, which is
                 * the first day-of-week and minimal days.
                 */
                // @ts-ignore
                public equals(object: java.lang.Object): boolean;
                /**
                 * A hash code for this {@code WeekFields}.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * A string representation of this {@code WeekFields} instance.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
