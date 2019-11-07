declare namespace java {
    namespace time {
        namespace zone {
            // @ts-ignore
             class ZoneOffsetTransitionRule extends java.lang.Object {
                /**
                 * Obtains an instance defining the yearly rule to create transitions between two offsets.
                 * <p>
                 * Applications should normally obtain an instance from {@link ZoneRules}.
                 * This factory is only intended for use when creating {@link ZoneRules}.
                 */
                // @ts-ignore
                public static of(month: java.time.Month, dayOfMonthIndicator: number, dayOfWeek: java.time.DayOfWeek, time: java.time.LocalTime, timeEndOfDay: boolean, timeDefnition: java.time.zone.ZoneOffsetTransitionRule.TimeDefinition, standardOffset: java.time.ZoneOffset, offsetBefore: java.time.ZoneOffset, offsetAfter: java.time.ZoneOffset): java.time.zone.ZoneOffsetTransitionRule;
                /**
                 * Gets the month of the transition.
                 * <p>
                 * If the rule defines an exact date then the month is the month of that date.
                 * <p>
                 * If the rule defines a week where the transition might occur, then the month
                 * if the month of either the earliest or latest possible date of the cutover.
                 */
                // @ts-ignore
                public getMonth(): java.time.Month;
                /**
                 * Gets the indicator of the day-of-month of the transition.
                 * <p>
                 * If the rule defines an exact date then the day is the month of that date.
                 * <p>
                 * If the rule defines a week where the transition might occur, then the day
                 * defines either the start of the end of the transition week.
                 * <p>
                 * If the value is positive, then it represents a normal day-of-month, and is the
                 * earliest possible date that the transition can be.
                 * The date may refer to 29th February which should be treated as 1st March in non-leap years.
                 * <p>
                 * If the value is negative, then it represents the number of days back from the
                 * end of the month where {@code -1} is the last day of the month.
                 * In this case, the day identified is the latest possible date that the transition can be.
                 */
                // @ts-ignore
                public getDayOfMonthIndicator(): number;
                /**
                 * Gets the day-of-week of the transition.
                 * <p>
                 * If the rule defines an exact date then this returns null.
                 * <p>
                 * If the rule defines a week where the cutover might occur, then this method
                 * returns the day-of-week that the month-day will be adjusted to.
                 * If the day is positive then the adjustment is later.
                 * If the day is negative then the adjustment is earlier.
                 */
                // @ts-ignore
                public getDayOfWeek(): java.time.DayOfWeek;
                /**
                 * Gets the local time of day of the transition which must be checked with
                 * {@link #isMidnightEndOfDay()}.
                 * <p>
                 * The time is converted into an instant using the time definition.
                 */
                // @ts-ignore
                public getLocalTime(): java.time.LocalTime;
                /**
                 * Is the transition local time midnight at the end of day.
                 * <p>
                 * The transition may be represented as occurring at 24:00.
                 */
                // @ts-ignore
                public isMidnightEndOfDay(): boolean;
                /**
                 * Gets the time definition, specifying how to convert the time to an instant.
                 * <p>
                 * The local time can be converted to an instant using the standard offset,
                 * the wall offset or UTC.
                 */
                // @ts-ignore
                public getTimeDefinition(): java.time.zone.ZoneOffsetTransitionRule.TimeDefinition;
                /**
                 * Gets the standard offset in force at the transition.
                 */
                // @ts-ignore
                public getStandardOffset(): java.time.ZoneOffset;
                /**
                 * Gets the offset before the transition.
                 */
                // @ts-ignore
                public getOffsetBefore(): java.time.ZoneOffset;
                /**
                 * Gets the offset after the transition.
                 */
                // @ts-ignore
                public getOffsetAfter(): java.time.ZoneOffset;
                /**
                 * Creates a transition instance for the specified year.
                 * <p>
                 * Calculations are performed using the ISO-8601 chronology.
                 */
                // @ts-ignore
                public createTransition(year: number): java.time.zone.ZoneOffsetTransition;
                /**
                 * Checks if this object equals another.
                 * <p>
                 * The entire state of the object is compared.
                 */
                // @ts-ignore
                public equals(otherRule: java.lang.Object): boolean;
                /**
                 * Returns a suitable hash code.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string describing this object.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
