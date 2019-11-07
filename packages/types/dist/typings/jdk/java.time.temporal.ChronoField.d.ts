declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
             class ChronoField extends java.lang.Enum {
                // @ts-ignore
                public static NANO_OF_SECOND: java.time.temporal.ChronoField;
                // @ts-ignore
                public static NANO_OF_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static MICRO_OF_SECOND: java.time.temporal.ChronoField;
                // @ts-ignore
                public static MICRO_OF_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static MILLI_OF_SECOND: java.time.temporal.ChronoField;
                // @ts-ignore
                public static MILLI_OF_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static SECOND_OF_MINUTE: java.time.temporal.ChronoField;
                // @ts-ignore
                public static SECOND_OF_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static MINUTE_OF_HOUR: java.time.temporal.ChronoField;
                // @ts-ignore
                public static MINUTE_OF_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static HOUR_OF_AMPM: java.time.temporal.ChronoField;
                // @ts-ignore
                public static CLOCK_HOUR_OF_AMPM: java.time.temporal.ChronoField;
                // @ts-ignore
                public static HOUR_OF_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static CLOCK_HOUR_OF_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static AMPM_OF_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static DAY_OF_WEEK: java.time.temporal.ChronoField;
                // @ts-ignore
                public static ALIGNED_DAY_OF_WEEK_IN_MONTH: java.time.temporal.ChronoField;
                // @ts-ignore
                public static ALIGNED_DAY_OF_WEEK_IN_YEAR: java.time.temporal.ChronoField;
                // @ts-ignore
                public static DAY_OF_MONTH: java.time.temporal.ChronoField;
                // @ts-ignore
                public static DAY_OF_YEAR: java.time.temporal.ChronoField;
                // @ts-ignore
                public static EPOCH_DAY: java.time.temporal.ChronoField;
                // @ts-ignore
                public static ALIGNED_WEEK_OF_MONTH: java.time.temporal.ChronoField;
                // @ts-ignore
                public static ALIGNED_WEEK_OF_YEAR: java.time.temporal.ChronoField;
                // @ts-ignore
                public static MONTH_OF_YEAR: java.time.temporal.ChronoField;
                // @ts-ignore
                public static PROLEPTIC_MONTH: java.time.temporal.ChronoField;
                // @ts-ignore
                public static YEAR_OF_ERA: java.time.temporal.ChronoField;
                // @ts-ignore
                public static YEAR: java.time.temporal.ChronoField;
                // @ts-ignore
                public static ERA: java.time.temporal.ChronoField;
                // @ts-ignore
                public static INSTANT_SECONDS: java.time.temporal.ChronoField;
                // @ts-ignore
                public static OFFSET_SECONDS: java.time.temporal.ChronoField;
                // @ts-ignore
                public static values(): java.time.temporal.ChronoField[];
                // @ts-ignore
                public static valueOf(name: string): java.time.temporal.ChronoField;
                // @ts-ignore
                public getDisplayName(locale: java.util.Locale): string;
                // @ts-ignore
                public getBaseUnit(): java.time.temporal.TemporalUnit;
                // @ts-ignore
                public getRangeUnit(): java.time.temporal.TemporalUnit;
                /**
                 * Gets the range of valid values for the field.
                 * <p>
                 * All fields can be expressed as a {@code long} integer.
                 * This method returns an object that describes the valid range for that value.
                 * <p>
                 * This method returns the range of the field in the ISO-8601 calendar system.
                 * This range may be incorrect for other calendar systems.
                 * Use {@link Chronology#range(ChronoField)} to access the correct range
                 * for a different calendar system.
                 * <p>
                 * Note that the result only describes the minimum and maximum valid values
                 * and it is important not to read too much into them. For example, there
                 * could be values within the range that are invalid for the field.
                 */
                // @ts-ignore
                public range(): java.time.temporal.ValueRange;
                /**
                 * Checks if this field represents a component of a date.
                 * <p>
                 * Fields from day-of-week to era are date-based.
                 */
                // @ts-ignore
                public isDateBased(): boolean;
                /**
                 * Checks if this field represents a component of a time.
                 * <p>
                 * Fields from nano-of-second to am-pm-of-day are time-based.
                 */
                // @ts-ignore
                public isTimeBased(): boolean;
                /**
                 * Checks that the specified value is valid for this field.
                 * <p>
                 * This validates that the value is within the outer range of valid values
                 * returned by {@link #range()}.
                 * <p>
                 * This method checks against the range of the field in the ISO-8601 calendar system.
                 * This range may be incorrect for other calendar systems.
                 * Use {@link Chronology#range(ChronoField)} to access the correct range
                 * for a different calendar system.
                 */
                // @ts-ignore
                public checkValidValue(value: number): number;
                /**
                 * Checks that the specified value is valid and fits in an {@code int}.
                 * <p>
                 * This validates that the value is within the outer range of valid values
                 * returned by {@link #range()}.
                 * It also checks that all valid values are within the bounds of an {@code int}.
                 * <p>
                 * This method checks against the range of the field in the ISO-8601 calendar system.
                 * This range may be incorrect for other calendar systems.
                 * Use {@link Chronology#range(ChronoField)} to access the correct range
                 * for a different calendar system.
                 */
                // @ts-ignore
                public checkValidIntValue(value: number): number;
                // @ts-ignore
                public isSupportedBy(temporal: java.time.temporal.TemporalAccessor): boolean;
                // @ts-ignore
                public rangeRefinedBy(temporal: java.time.temporal.TemporalAccessor): java.time.temporal.ValueRange;
                // @ts-ignore
                public getFrom(temporal: java.time.temporal.TemporalAccessor): number;
                // @ts-ignore
                public adjustInto(temporal: java.time.temporal.Temporal, newValue: number): java.time.temporal.Temporal;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
