// @ts-nocheck
declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
             class ChronoUnit extends java.lang.Enum {
                // @ts-ignore
                public static NANOS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static MICROS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static MILLIS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static SECONDS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static MINUTES: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static HOURS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static HALF_DAYS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static DAYS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static WEEKS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static MONTHS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static YEARS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static DECADES: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static CENTURIES: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static MILLENNIA: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static ERAS: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static FOREVER: java.time.temporal.ChronoUnit;
                // @ts-ignore
                public static values(): java.time.temporal.ChronoUnit[];
                // @ts-ignore
                public static valueOf(name: string): java.time.temporal.ChronoUnit;
                /**
                 * Gets the estimated duration of this unit in the ISO calendar system.
                 * <p>
                 * All of the units in this class have an estimated duration.
                 * Days vary due to daylight saving time, while months have different lengths.
                 */
                // @ts-ignore
                public getDuration(): java.time.Duration;
                /**
                 * Checks if the duration of the unit is an estimate.
                 * <p>
                 * All time units in this class are considered to be accurate, while all date
                 * units in this class are considered to be estimated.
                 * <p>
                 * This definition ignores leap seconds, but considers that Days vary due to
                 * daylight saving time and months have different lengths.
                 */
                // @ts-ignore
                public isDurationEstimated(): boolean;
                /**
                 * Checks if this unit is a date unit.
                 * <p>
                 * All units from days to eras inclusive are date-based.
                 * Time-based units and {@code FOREVER} return false.
                 */
                // @ts-ignore
                public isDateBased(): boolean;
                /**
                 * Checks if this unit is a time unit.
                 * <p>
                 * All units from nanos to half-days inclusive are time-based.
                 * Date-based units and {@code FOREVER} return false.
                 */
                // @ts-ignore
                public isTimeBased(): boolean;
                // @ts-ignore
                public isSupportedBy(temporal: java.time.temporal.Temporal): boolean;
                // @ts-ignore
                public addTo(temporal: java.time.temporal.Temporal, amount: number): java.time.temporal.Temporal;
                // @ts-ignore
                public between(temporal1Inclusive: java.time.temporal.Temporal, temporal2Exclusive: java.time.temporal.Temporal): number;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
