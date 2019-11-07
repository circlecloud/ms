// @ts-nocheck
declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
             class TemporalAdjusters extends java.lang.Object {
                /**
                 * Obtains a {@code TemporalAdjuster} that wraps a date adjuster.
                 * <p>
                 * The {@code TemporalAdjuster} is based on the low level {@code Temporal} interface.
                 * This method allows an adjustment from {@code LocalDate} to {@code LocalDate}
                 * to be wrapped to match the temporal-based interface.
                 * This is provided for convenience to make user-written adjusters simpler.
                 * <p>
                 * In general, user-written adjusters should be static constants:
                 * <pre>{@code
                 * static TemporalAdjuster TWO_DAYS_LATER =
                 * TemporalAdjusters.ofDateAdjuster(date -> date.plusDays(2));
                 * }</pre>
                 */
                // @ts-ignore
                public static ofDateAdjuster(dateBasedAdjuster: java.util.function$.UnaryOperator): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the "first day of month" adjuster, which returns a new date set to
                 * the first day of the current month.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 will return 2011-01-01.<br>
                 * The input 2011-02-15 will return 2011-02-01.
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It is equivalent to:
                 * <pre>
                 * temporal.with(DAY_OF_MONTH, 1);
                 * </pre>
                 */
                // @ts-ignore
                public static firstDayOfMonth(): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the "last day of month" adjuster, which returns a new date set to
                 * the last day of the current month.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 will return 2011-01-31.<br>
                 * The input 2011-02-15 will return 2011-02-28.<br>
                 * The input 2012-02-15 will return 2012-02-29 (leap year).<br>
                 * The input 2011-04-15 will return 2011-04-30.
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It is equivalent to:
                 * <pre>
                 * long lastDay = temporal.range(DAY_OF_MONTH).getMaximum();
                 * temporal.with(DAY_OF_MONTH, lastDay);
                 * </pre>
                 */
                // @ts-ignore
                public static lastDayOfMonth(): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the "first day of next month" adjuster, which returns a new date set to
                 * the first day of the next month.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 will return 2011-02-01.<br>
                 * The input 2011-02-15 will return 2011-03-01.
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It is equivalent to:
                 * <pre>
                 * temporal.with(DAY_OF_MONTH, 1).plus(1, MONTHS);
                 * </pre>
                 */
                // @ts-ignore
                public static firstDayOfNextMonth(): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the "first day of year" adjuster, which returns a new date set to
                 * the first day of the current year.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 will return 2011-01-01.<br>
                 * The input 2011-02-15 will return 2011-01-01.<br>
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It is equivalent to:
                 * <pre>
                 * temporal.with(DAY_OF_YEAR, 1);
                 * </pre>
                 */
                // @ts-ignore
                public static firstDayOfYear(): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the "last day of year" adjuster, which returns a new date set to
                 * the last day of the current year.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 will return 2011-12-31.<br>
                 * The input 2011-02-15 will return 2011-12-31.<br>
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It is equivalent to:
                 * <pre>
                 * long lastDay = temporal.range(DAY_OF_YEAR).getMaximum();
                 * temporal.with(DAY_OF_YEAR, lastDay);
                 * </pre>
                 */
                // @ts-ignore
                public static lastDayOfYear(): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the "first day of next year" adjuster, which returns a new date set to
                 * the first day of the next year.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 will return 2012-01-01.
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It is equivalent to:
                 * <pre>
                 * temporal.with(DAY_OF_YEAR, 1).plus(1, YEARS);
                 * </pre>
                 */
                // @ts-ignore
                public static firstDayOfNextYear(): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the first in month adjuster, which returns a new date
                 * in the same month with the first matching day-of-week.
                 * This is used for expressions like 'first Tuesday in March'.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-12-15 for (MONDAY) will return 2011-12-05.<br>
                 * The input 2011-12-15 for (FRIDAY) will return 2011-12-02.<br>
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It uses the {@code DAY_OF_WEEK} and {@code DAY_OF_MONTH} fields
                 * and the {@code DAYS} unit, and assumes a seven day week.
                 */
                // @ts-ignore
                public static firstInMonth(dayOfWeek: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the last in month adjuster, which returns a new date
                 * in the same month with the last matching day-of-week.
                 * This is used for expressions like 'last Tuesday in March'.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-12-15 for (MONDAY) will return 2011-12-26.<br>
                 * The input 2011-12-15 for (FRIDAY) will return 2011-12-30.<br>
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It uses the {@code DAY_OF_WEEK} and {@code DAY_OF_MONTH} fields
                 * and the {@code DAYS} unit, and assumes a seven day week.
                 */
                // @ts-ignore
                public static lastInMonth(dayOfWeek: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the day-of-week in month adjuster, which returns a new date
                 * in the same month with the ordinal day-of-week.
                 * This is used for expressions like the 'second Tuesday in March'.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-12-15 for (1,TUESDAY) will return 2011-12-06.<br>
                 * The input 2011-12-15 for (2,TUESDAY) will return 2011-12-13.<br>
                 * The input 2011-12-15 for (3,TUESDAY) will return 2011-12-20.<br>
                 * The input 2011-12-15 for (4,TUESDAY) will return 2011-12-27.<br>
                 * The input 2011-12-15 for (5,TUESDAY) will return 2012-01-03.<br>
                 * The input 2011-12-15 for (-1,TUESDAY) will return 2011-12-27 (last in month).<br>
                 * The input 2011-12-15 for (-4,TUESDAY) will return 2011-12-06 (3 weeks before last in month).<br>
                 * The input 2011-12-15 for (-5,TUESDAY) will return 2011-11-29 (4 weeks before last in month).<br>
                 * The input 2011-12-15 for (0,TUESDAY) will return 2011-11-29 (last in previous month).<br>
                 * <p>
                 * For a positive or zero ordinal, the algorithm is equivalent to finding the first
                 * day-of-week that matches within the month and then adding a number of weeks to it.
                 * For a negative ordinal, the algorithm is equivalent to finding the last
                 * day-of-week that matches within the month and then subtracting a number of weeks to it.
                 * The ordinal number of weeks is not validated and is interpreted leniently
                 * according to this algorithm. This definition means that an ordinal of zero finds
                 * the last matching day-of-week in the previous month.
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It uses the {@code DAY_OF_WEEK} and {@code DAY_OF_MONTH} fields
                 * and the {@code DAYS} unit, and assumes a seven day week.
                 */
                // @ts-ignore
                public static dayOfWeekInMonth(ordinal: number, dayOfWeek: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the next day-of-week adjuster, which adjusts the date to the
                 * first occurrence of the specified day-of-week after the date being adjusted.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-17 (two days later).<br>
                 * The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-19 (four days later).<br>
                 * The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-22 (seven days later).
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It uses the {@code DAY_OF_WEEK} field and the {@code DAYS} unit,
                 * and assumes a seven day week.
                 */
                // @ts-ignore
                public static next(dayOfWeek: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the next-or-same day-of-week adjuster, which adjusts the date to the
                 * first occurrence of the specified day-of-week after the date being adjusted
                 * unless it is already on that day in which case the same object is returned.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-17 (two days later).<br>
                 * The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-19 (four days later).<br>
                 * The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-15 (same as input).
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It uses the {@code DAY_OF_WEEK} field and the {@code DAYS} unit,
                 * and assumes a seven day week.
                 */
                // @ts-ignore
                public static nextOrSame(dayOfWeek: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the previous day-of-week adjuster, which adjusts the date to the
                 * first occurrence of the specified day-of-week before the date being adjusted.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-10 (five days earlier).<br>
                 * The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-12 (three days earlier).<br>
                 * The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-08 (seven days earlier).
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It uses the {@code DAY_OF_WEEK} field and the {@code DAYS} unit,
                 * and assumes a seven day week.
                 */
                // @ts-ignore
                public static previous(dayOfWeek: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster;
                /**
                 * Returns the previous-or-same day-of-week adjuster, which adjusts the date to the
                 * first occurrence of the specified day-of-week before the date being adjusted
                 * unless it is already on that day in which case the same object is returned.
                 * <p>
                 * The ISO calendar system behaves as follows:<br>
                 * The input 2011-01-15 (a Saturday) for parameter (MONDAY) will return 2011-01-10 (five days earlier).<br>
                 * The input 2011-01-15 (a Saturday) for parameter (WEDNESDAY) will return 2011-01-12 (three days earlier).<br>
                 * The input 2011-01-15 (a Saturday) for parameter (SATURDAY) will return 2011-01-15 (same as input).
                 * <p>
                 * The behavior is suitable for use with most calendar systems.
                 * It uses the {@code DAY_OF_WEEK} field and the {@code DAYS} unit,
                 * and assumes a seven day week.
                 */
                // @ts-ignore
                public static previousOrSame(dayOfWeek: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster;
            }
        }
    }
}
