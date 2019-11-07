// @ts-nocheck
declare namespace java {
    namespace time {
        // @ts-ignore
         class Duration extends java.lang.Object {
            // @ts-ignore
            public static ZERO: java.time.Duration;
            /**
             * Obtains a {@code Duration} representing a number of standard 24 hour days.
             * <p>
             * The seconds are calculated based on the standard definition of a day,
             * where each day is 86400 seconds which implies a 24 hour day.
             * The nanosecond in second field is set to zero.
             */
            // @ts-ignore
            public static ofDays(days: number): java.time.Duration;
            /**
             * Obtains a {@code Duration} representing a number of standard hours.
             * <p>
             * The seconds are calculated based on the standard definition of an hour,
             * where each hour is 3600 seconds.
             * The nanosecond in second field is set to zero.
             */
            // @ts-ignore
            public static ofHours(hours: number): java.time.Duration;
            /**
             * Obtains a {@code Duration} representing a number of standard minutes.
             * <p>
             * The seconds are calculated based on the standard definition of a minute,
             * where each minute is 60 seconds.
             * The nanosecond in second field is set to zero.
             */
            // @ts-ignore
            public static ofMinutes(minutes: number): java.time.Duration;
            /**
             * Obtains a {@code Duration} representing a number of seconds.
             * <p>
             * The nanosecond in second field is set to zero.
             */
            // @ts-ignore
            public static ofSeconds(seconds: number): java.time.Duration;
            /**
             * Obtains a {@code Duration} representing a number of seconds and an
             * adjustment in nanoseconds.
             * <p>
             * This method allows an arbitrary number of nanoseconds to be passed in.
             * The factory will alter the values of the second and nanosecond in order
             * to ensure that the stored nanosecond is in the range 0 to 999,999,999.
             * For example, the following will result in the exactly the same duration:
             * <pre>
             * Duration.ofSeconds(3, 1);
             * Duration.ofSeconds(4, -999_999_999);
             * Duration.ofSeconds(2, 1000_000_001);
             * </pre>
             */
            // @ts-ignore
            public static ofSeconds(seconds: number, nanoAdjustment: number): java.time.Duration;
            /**
             * Obtains a {@code Duration} representing a number of milliseconds.
             * <p>
             * The seconds and nanoseconds are extracted from the specified milliseconds.
             */
            // @ts-ignore
            public static ofMillis(millis: number): java.time.Duration;
            /**
             * Obtains a {@code Duration} representing a number of nanoseconds.
             * <p>
             * The seconds and nanoseconds are extracted from the specified nanoseconds.
             */
            // @ts-ignore
            public static ofNanos(nanos: number): java.time.Duration;
            /**
             * Obtains a {@code Duration} representing an amount in the specified unit.
             * <p>
             * The parameters represent the two parts of a phrase like '6 Hours'. For example:
             * <pre>
             * Duration.of(3, SECONDS);
             * Duration.of(465, HOURS);
             * </pre>
             * Only a subset of units are accepted by this method.
             * The unit must either have an {@linkplain TemporalUnit#isDurationEstimated() exact duration} or
             * be {@link ChronoUnit#DAYS} which is treated as 24 hours. Other units throw an exception.
             */
            // @ts-ignore
            public static of(amount: number, unit: java.time.temporal.TemporalUnit): java.time.Duration;
            /**
             * Obtains an instance of {@code Duration} from a temporal amount.
             * <p>
             * This obtains a duration based on the specified amount.
             * A {@code TemporalAmount} represents an  amount of time, which may be
             * date-based or time-based, which this factory extracts to a duration.
             * <p>
             * The conversion loops around the set of units from the amount and uses
             * the {@linkplain TemporalUnit#getDuration() duration} of the unit to
             * calculate the total {@code Duration}.
             * Only a subset of units are accepted by this method. The unit must either
             * have an {@linkplain TemporalUnit#isDurationEstimated() exact duration}
             * or be {@link ChronoUnit#DAYS} which is treated as 24 hours.
             * If any other units are found then an exception is thrown.
             */
            // @ts-ignore
            public static from(amount: java.time.temporal.TemporalAmount): java.time.Duration;
            /**
             * Obtains a {@code Duration} from a text string such as {@code PnDTnHnMn.nS}.
             * <p>
             * This will parse a textual representation of a duration, including the
             * string produced by {@code toString()}. The formats accepted are based
             * on the ISO-8601 duration format {@code PnDTnHnMn.nS} with days
             * considered to be exactly 24 hours.
             * <p>
             * The string starts with an optional sign, denoted by the ASCII negative
             * or positive symbol. If negative, the whole period is negated.
             * The ASCII letter "P" is next in upper or lower case.
             * There are then four sections, each consisting of a number and a suffix.
             * The sections have suffixes in ASCII of "D", "H", "M" and "S" for
             * days, hours, minutes and seconds, accepted in upper or lower case.
             * The suffixes must occur in order. The ASCII letter "T" must occur before
             * the first occurrence, if any, of an hour, minute or second section.
             * At least one of the four sections must be present, and if "T" is present
             * there must be at least one section after the "T".
             * The number part of each section must consist of one or more ASCII digits.
             * The number may be prefixed by the ASCII negative or positive symbol.
             * The number of days, hours and minutes must parse to an {@code long}.
             * The number of seconds must parse to an {@code long} with optional fraction.
             * The decimal point may be either a dot or a comma.
             * The fractional part may have from zero to 9 digits.
             * <p>
             * The leading plus/minus sign, and negative values for other units are
             * not part of the ISO-8601 standard.
             * <p>
             * Examples:
             * <pre>
             * "PT20.345S" -- parses as "20.345 seconds"
             * "PT15M"     -- parses as "15 minutes" (where a minute is 60 seconds)
             * "PT10H"     -- parses as "10 hours" (where an hour is 3600 seconds)
             * "P2D"       -- parses as "2 days" (where a day is 24 hours or 86400 seconds)
             * "P2DT3H4M"  -- parses as "2 days, 3 hours and 4 minutes"
             * "P-6H3M"    -- parses as "-6 hours and +3 minutes"
             * "-P6H3M"    -- parses as "-6 hours and -3 minutes"
             * "-P-6H+3M"  -- parses as "+6 hours and -3 minutes"
             * </pre>
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.Duration;
            /**
             * Obtains a {@code Duration} representing the duration between two temporal objects.
             * <p>
             * This calculates the duration between two temporal objects. If the objects
             * are of different types, then the duration is calculated based on the type
             * of the first object. For example, if the first argument is a {@code LocalTime}
             * then the second argument is converted to a {@code LocalTime}.
             * <p>
             * The specified temporal objects must support the {@link ChronoUnit#SECONDS SECONDS} unit.
             * For full accuracy, either the {@link ChronoUnit#NANOS NANOS} unit or the
             * {@link ChronoField#NANO_OF_SECOND NANO_OF_SECOND} field should be supported.
             * <p>
             * The result of this method can be a negative period if the end is before the start.
             * To guarantee to obtain a positive duration call {@link #abs()} on the result.
             */
            // @ts-ignore
            public static between(startInclusive: java.time.temporal.Temporal, endExclusive: java.time.temporal.Temporal): java.time.Duration;
            /**
             * Gets the value of the requested unit.
             * <p>
             * This returns a value for each of the two supported units,
             * {@link ChronoUnit#SECONDS SECONDS} and {@link ChronoUnit#NANOS NANOS}.
             * All other units throw an exception.
             */
            // @ts-ignore
            public get(unit: java.time.temporal.TemporalUnit): number;
            /**
             * Gets the set of units supported by this duration.
             * <p>
             * The supported units are {@link ChronoUnit#SECONDS SECONDS},
             * and {@link ChronoUnit#NANOS NANOS}.
             * They are returned in the order seconds, nanos.
             * <p>
             * This set can be used in conjunction with {@link #get(TemporalUnit)}
             * to access the entire state of the duration.
             */
            // @ts-ignore
            public getUnits(): java.util.List;
            /**
             * Checks if this duration is zero length.
             * <p>
             * A {@code Duration} represents a directed distance between two points on
             * the time-line and can therefore be positive, zero or negative.
             * This method checks whether the length is zero.
             */
            // @ts-ignore
            public isZero(): boolean;
            /**
             * Checks if this duration is negative, excluding zero.
             * <p>
             * A {@code Duration} represents a directed distance between two points on
             * the time-line and can therefore be positive, zero or negative.
             * This method checks whether the length is less than zero.
             */
            // @ts-ignore
            public isNegative(): boolean;
            /**
             * Gets the number of seconds in this duration.
             * <p>
             * The length of the duration is stored using two fields - seconds and nanoseconds.
             * The nanoseconds part is a value from 0 to 999,999,999 that is an adjustment to
             * the length in seconds.
             * The total duration is defined by calling this method and {@link #getNano()}.
             * <p>
             * A {@code Duration} represents a directed distance between two points on the time-line.
             * A negative duration is expressed by the negative sign of the seconds part.
             * A duration of -1 nanosecond is stored as -1 seconds plus 999,999,999 nanoseconds.
             */
            // @ts-ignore
            public getSeconds(): number;
            /**
             * Gets the number of nanoseconds within the second in this duration.
             * <p>
             * The length of the duration is stored using two fields - seconds and nanoseconds.
             * The nanoseconds part is a value from 0 to 999,999,999 that is an adjustment to
             * the length in seconds.
             * The total duration is defined by calling this method and {@link #getSeconds()}.
             * <p>
             * A {@code Duration} represents a directed distance between two points on the time-line.
             * A negative duration is expressed by the negative sign of the seconds part.
             * A duration of -1 nanosecond is stored as -1 seconds plus 999,999,999 nanoseconds.
             */
            // @ts-ignore
            public getNano(): number;
            /**
             * Returns a copy of this duration with the specified amount of seconds.
             * <p>
             * This returns a duration with the specified seconds, retaining the
             * nano-of-second part of this duration.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withSeconds(seconds: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified nano-of-second.
             * <p>
             * This returns a duration with the specified nano-of-second, retaining the
             * seconds part of this duration.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withNanos(nanoOfSecond: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(duration: java.time.Duration): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration added.
             * <p>
             * The duration amount is measured in terms of the specified unit.
             * Only a subset of units are accepted by this method.
             * The unit must either have an {@linkplain TemporalUnit#isDurationEstimated() exact duration} or
             * be {@link ChronoUnit#DAYS} which is treated as 24 hours. Other units throw an exception.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in standard 24 hour days added.
             * <p>
             * The number of days is multiplied by 86400 to obtain the number of seconds to add.
             * This is based on the standard definition of a day as 24 hours.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusDays(daysToAdd: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in hours added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusHours(hoursToAdd: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in minutes added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMinutes(minutesToAdd: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in seconds added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusSeconds(secondsToAdd: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in milliseconds added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMillis(millisToAdd: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in nanoseconds added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusNanos(nanosToAdd: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(duration: java.time.Duration): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration subtracted.
             * <p>
             * The duration amount is measured in terms of the specified unit.
             * Only a subset of units are accepted by this method.
             * The unit must either have an {@linkplain TemporalUnit#isDurationEstimated() exact duration} or
             * be {@link ChronoUnit#DAYS} which is treated as 24 hours. Other units throw an exception.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in standard 24 hour days subtracted.
             * <p>
             * The number of days is multiplied by 86400 to obtain the number of seconds to subtract.
             * This is based on the standard definition of a day as 24 hours.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusDays(daysToSubtract: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in hours subtracted.
             * <p>
             * The number of hours is multiplied by 3600 to obtain the number of seconds to subtract.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusHours(hoursToSubtract: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in minutes subtracted.
             * <p>
             * The number of hours is multiplied by 60 to obtain the number of seconds to subtract.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMinutes(minutesToSubtract: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in seconds subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusSeconds(secondsToSubtract: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in milliseconds subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMillis(millisToSubtract: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the specified duration in nanoseconds subtracted.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusNanos(nanosToSubtract: number): java.time.Duration;
            /**
             * Returns a copy of this duration multiplied by the scalar.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public multipliedBy(multiplicand: number): java.time.Duration;
            /**
             * Returns a copy of this duration divided by the specified value.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public dividedBy(divisor: number): java.time.Duration;
            /**
             * Returns a copy of this duration with the length negated.
             * <p>
             * This method swaps the sign of the total length of this duration.
             * For example, {@code PT1.3S} will be returned as {@code PT-1.3S}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public negated(): java.time.Duration;
            /**
             * Returns a copy of this duration with a positive length.
             * <p>
             * This method returns a positive duration by effectively removing the sign from any negative total length.
             * For example, {@code PT-1.3S} will be returned as {@code PT1.3S}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public abs(): java.time.Duration;
            /**
             * Adds this duration to the specified temporal object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with this duration added.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#plus(TemporalAmount)}.
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * dateTime = thisDuration.addTo(dateTime);
             * dateTime = dateTime.plus(thisDuration);
             * </pre>
             * <p>
             * The calculation will add the seconds, then nanos.
             * Only non-zero amounts will be added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public addTo(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Subtracts this duration from the specified temporal object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with this duration subtracted.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#minus(TemporalAmount)}.
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * dateTime = thisDuration.subtractFrom(dateTime);
             * dateTime = dateTime.minus(thisDuration);
             * </pre>
             * <p>
             * The calculation will subtract the seconds, then nanos.
             * Only non-zero amounts will be added.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public subtractFrom(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Gets the number of days in this duration.
             * <p>
             * This returns the total number of days in the duration by dividing the
             * number of seconds by 86400.
             * This is based on the standard definition of a day as 24 hours.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public toDays(): number;
            /**
             * Gets the number of hours in this duration.
             * <p>
             * This returns the total number of hours in the duration by dividing the
             * number of seconds by 3600.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public toHours(): number;
            /**
             * Gets the number of minutes in this duration.
             * <p>
             * This returns the total number of minutes in the duration by dividing the
             * number of seconds by 60.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public toMinutes(): number;
            /**
             * Converts this duration to the total length in milliseconds.
             * <p>
             * If this duration is too large to fit in a {@code long} milliseconds, then an
             * exception is thrown.
             * <p>
             * If this duration has greater than millisecond precision, then the conversion
             * will drop any excess precision information as though the amount in nanoseconds
             * was subject to integer division by one million.
             */
            // @ts-ignore
            public toMillis(): number;
            /**
             * Converts this duration to the total length in nanoseconds expressed as a {@code long}.
             * <p>
             * If this duration is too large to fit in a {@code long} nanoseconds, then an
             * exception is thrown.
             */
            // @ts-ignore
            public toNanos(): number;
            /**
             * Compares this duration to the specified {@code Duration}.
             * <p>
             * The comparison is based on the total length of the durations.
             * It is "consistent with equals", as defined by {@link Comparable}.
             */
            // @ts-ignore
            public compareTo(otherDuration: java.time.Duration): number;
            /**
             * Checks if this duration is equal to the specified {@code Duration}.
             * <p>
             * The comparison is based on the total length of the durations.
             */
            // @ts-ignore
            public equals(otherDuration: java.lang.Object): boolean;
            /**
             * A hash code for this duration.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * A string representation of this duration using ISO-8601 seconds
             * based representation, such as {@code PT8H6M12.345S}.
             * <p>
             * The format of the returned string will be {@code PTnHnMnS}, where n is
             * the relevant hours, minutes or seconds part of the duration.
             * Any fractional seconds are placed after a decimal point i the seconds section.
             * If a section has a zero value, it is omitted.
             * The hours, minutes and seconds will all have the same sign.
             * <p>
             * Examples:
             * <pre>
             * "20.345 seconds"                 -- "PT20.345S
             * "15 minutes" (15 * 60 seconds)   -- "PT15M"
             * "10 hours" (10 * 3600 seconds)   -- "PT10H"
             * "2 days" (2 * 86400 seconds)     -- "PT48H"
             * </pre>
             * Note that multiples of 24 hours are not output as days to avoid confusion
             * with {@code Period}.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
