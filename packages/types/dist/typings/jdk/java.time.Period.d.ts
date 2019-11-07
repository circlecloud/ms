// @ts-nocheck
declare namespace java {
    namespace time {
        // @ts-ignore
         class Period extends java.lang.Object {
            // @ts-ignore
            public static ZERO: java.time.Period;
            /**
             * Obtains a {@code Period} representing a number of years.
             * <p>
             * The resulting period will have the specified years.
             * The months and days units will be zero.
             */
            // @ts-ignore
            public static ofYears(years: number): java.time.Period;
            /**
             * Obtains a {@code Period} representing a number of months.
             * <p>
             * The resulting period will have the specified months.
             * The years and days units will be zero.
             */
            // @ts-ignore
            public static ofMonths(months: number): java.time.Period;
            /**
             * Obtains a {@code Period} representing a number of weeks.
             * <p>
             * The resulting period will be day-based, with the amount of days
             * equal to the number of weeks multiplied by 7.
             * The years and months units will be zero.
             */
            // @ts-ignore
            public static ofWeeks(weeks: number): java.time.Period;
            /**
             * Obtains a {@code Period} representing a number of days.
             * <p>
             * The resulting period will have the specified days.
             * The years and months units will be zero.
             */
            // @ts-ignore
            public static ofDays(days: number): java.time.Period;
            /**
             * Obtains a {@code Period} representing a number of years, months and days.
             * <p>
             * This creates an instance based on years, months and days.
             */
            // @ts-ignore
            public static of(years: number, months: number, days: number): java.time.Period;
            /**
             * Obtains an instance of {@code Period} from a temporal amount.
             * <p>
             * This obtains a period based on the specified amount.
             * A {@code TemporalAmount} represents an  amount of time, which may be
             * date-based or time-based, which this factory extracts to a {@code Period}.
             * <p>
             * The conversion loops around the set of units from the amount and uses
             * the {@link ChronoUnit#YEARS YEARS}, {@link ChronoUnit#MONTHS MONTHS}
             * and {@link ChronoUnit#DAYS DAYS} units to create a period.
             * If any other units are found then an exception is thrown.
             * <p>
             * If the amount is a {@code ChronoPeriod} then it must use the ISO chronology.
             */
            // @ts-ignore
            public static from(amount: java.time.temporal.TemporalAmount): java.time.Period;
            /**
             * Obtains a {@code Period} from a text string such as {@code PnYnMnD}.
             * <p>
             * This will parse the string produced by {@code toString()} which is
             * based on the ISO-8601 period formats {@code PnYnMnD} and {@code PnW}.
             * <p>
             * The string starts with an optional sign, denoted by the ASCII negative
             * or positive symbol. If negative, the whole period is negated.
             * The ASCII letter "P" is next in upper or lower case.
             * There are then four sections, each consisting of a number and a suffix.
             * At least one of the four sections must be present.
             * The sections have suffixes in ASCII of "Y", "M", "W" and "D" for
             * years, months, weeks and days, accepted in upper or lower case.
             * The suffixes must occur in order.
             * The number part of each section must consist of ASCII digits.
             * The number may be prefixed by the ASCII negative or positive symbol.
             * The number must parse to an {@code int}.
             * <p>
             * The leading plus/minus sign, and negative values for other units are
             * not part of the ISO-8601 standard. In addition, ISO-8601 does not
             * permit mixing between the {@code PnYnMnD} and {@code PnW} formats.
             * Any week-based input is multiplied by 7 and treated as a number of days.
             * <p>
             * For example, the following are valid inputs:
             * <pre>
             * "P2Y"             -- Period.ofYears(2)
             * "P3M"             -- Period.ofMonths(3)
             * "P4W"             -- Period.ofWeeks(4)
             * "P5D"             -- Period.ofDays(5)
             * "P1Y2M3D"         -- Period.of(1, 2, 3)
             * "P1Y2M3W4D"       -- Period.of(1, 2, 25)
             * "P-1Y2M"          -- Period.of(-1, 2, 0)
             * "-P1Y2M"          -- Period.of(-1, -2, 0)
             * </pre>
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.Period;
            /**
             * Obtains a {@code Period} consisting of the number of years, months,
             * and days between two dates.
             * <p>
             * The start date is included, but the end date is not.
             * The period is calculated by removing complete months, then calculating
             * the remaining number of days, adjusting to ensure that both have the same sign.
             * The number of months is then split into years and months based on a 12 month year.
             * A month is considered if the end day-of-month is greater than or equal to the start day-of-month.
             * For example, from {@code 2010-01-15} to {@code 2011-03-18} is one year, two months and three days.
             * <p>
             * The result of this method can be a negative period if the end is before the start.
             * The negative sign will be the same in each of year, month and day.
             */
            // @ts-ignore
            public static between(startDateInclusive: java.time.LocalDate, endDateExclusive: java.time.LocalDate): java.time.Period;
            /**
             * Gets the value of the requested unit.
             * <p>
             * This returns a value for each of the three supported units,
             * {@link ChronoUnit#YEARS YEARS}, {@link ChronoUnit#MONTHS MONTHS} and
             * {@link ChronoUnit#DAYS DAYS}.
             * All other units throw an exception.
             */
            // @ts-ignore
            public get(unit: java.time.temporal.TemporalUnit): number;
            /**
             * Gets the set of units supported by this period.
             * <p>
             * The supported units are {@link ChronoUnit#YEARS YEARS},
             * {@link ChronoUnit#MONTHS MONTHS} and {@link ChronoUnit#DAYS DAYS}.
             * They are returned in the order years, months, days.
             * <p>
             * This set can be used in conjunction with {@link #get(TemporalUnit)}
             * to access the entire state of the period.
             */
            // @ts-ignore
            public getUnits(): java.util.List;
            /**
             * Gets the chronology of this period, which is the ISO calendar system.
             * <p>
             * The {@code Chronology} represents the calendar system in use.
             * The ISO-8601 calendar system is the modern civil calendar system used today
             * in most of the world. It is equivalent to the proleptic Gregorian calendar
             * system, in which today's rules for leap years are applied for all time.
             */
            // @ts-ignore
            public getChronology(): java.time.chrono.IsoChronology;
            /**
             * Checks if all three units of this period are zero.
             * <p>
             * A zero period has the value zero for the years, months and days units.
             */
            // @ts-ignore
            public isZero(): boolean;
            /**
             * Checks if any of the three units of this period are negative.
             * <p>
             * This checks whether the years, months or days units are less than zero.
             */
            // @ts-ignore
            public isNegative(): boolean;
            /**
             * Gets the amount of years of this period.
             * <p>
             * This returns the years unit.
             * <p>
             * The months unit is not automatically normalized with the years unit.
             * This means that a period of "15 months" is different to a period
             * of "1 year and 3 months".
             */
            // @ts-ignore
            public getYears(): number;
            /**
             * Gets the amount of months of this period.
             * <p>
             * This returns the months unit.
             * <p>
             * The months unit is not automatically normalized with the years unit.
             * This means that a period of "15 months" is different to a period
             * of "1 year and 3 months".
             */
            // @ts-ignore
            public getMonths(): number;
            /**
             * Gets the amount of days of this period.
             * <p>
             * This returns the days unit.
             */
            // @ts-ignore
            public getDays(): number;
            /**
             * Returns a copy of this period with the specified amount of years.
             * <p>
             * This sets the amount of the years unit in a copy of this period.
             * The months and days units are unaffected.
             * <p>
             * The months unit is not automatically normalized with the years unit.
             * This means that a period of "15 months" is different to a period
             * of "1 year and 3 months".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withYears(years: number): java.time.Period;
            /**
             * Returns a copy of this period with the specified amount of months.
             * <p>
             * This sets the amount of the months unit in a copy of this period.
             * The years and days units are unaffected.
             * <p>
             * The months unit is not automatically normalized with the years unit.
             * This means that a period of "15 months" is different to a period
             * of "1 year and 3 months".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMonths(months: number): java.time.Period;
            /**
             * Returns a copy of this period with the specified amount of days.
             * <p>
             * This sets the amount of the days unit in a copy of this period.
             * The years and months units are unaffected.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withDays(days: number): java.time.Period;
            /**
             * Returns a copy of this period with the specified period added.
             * <p>
             * This operates separately on the years, months and days.
             * No normalization is performed.
             * <p>
             * For example, "1 year, 6 months and 3 days" plus "2 years, 2 months and 2 days"
             * returns "3 years, 8 months and 5 days".
             * <p>
             * The specified amount is typically an instance of {@code Period}.
             * Other types are interpreted using {@link Period#from(TemporalAmount)}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.Period;
            /**
             * Returns a copy of this period with the specified years added.
             * <p>
             * This adds the amount to the years unit in a copy of this period.
             * The months and days units are unaffected.
             * For example, "1 year, 6 months and 3 days" plus 2 years returns "3 years, 6 months and 3 days".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusYears(yearsToAdd: number): java.time.Period;
            /**
             * Returns a copy of this period with the specified months added.
             * <p>
             * This adds the amount to the months unit in a copy of this period.
             * The years and days units are unaffected.
             * For example, "1 year, 6 months and 3 days" plus 2 months returns "1 year, 8 months and 3 days".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusMonths(monthsToAdd: number): java.time.Period;
            /**
             * Returns a copy of this period with the specified days added.
             * <p>
             * This adds the amount to the days unit in a copy of this period.
             * The years and months units are unaffected.
             * For example, "1 year, 6 months and 3 days" plus 2 days returns "1 year, 6 months and 5 days".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plusDays(daysToAdd: number): java.time.Period;
            /**
             * Returns a copy of this period with the specified period subtracted.
             * <p>
             * This operates separately on the years, months and days.
             * No normalization is performed.
             * <p>
             * For example, "1 year, 6 months and 3 days" minus "2 years, 2 months and 2 days"
             * returns "-1 years, 4 months and 1 day".
             * <p>
             * The specified amount is typically an instance of {@code Period}.
             * Other types are interpreted using {@link Period#from(TemporalAmount)}.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.Period;
            /**
             * Returns a copy of this period with the specified years subtracted.
             * <p>
             * This subtracts the amount from the years unit in a copy of this period.
             * The months and days units are unaffected.
             * For example, "1 year, 6 months and 3 days" minus 2 years returns "-1 years, 6 months and 3 days".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusYears(yearsToSubtract: number): java.time.Period;
            /**
             * Returns a copy of this period with the specified months subtracted.
             * <p>
             * This subtracts the amount from the months unit in a copy of this period.
             * The years and days units are unaffected.
             * For example, "1 year, 6 months and 3 days" minus 2 months returns "1 year, 4 months and 3 days".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusMonths(monthsToSubtract: number): java.time.Period;
            /**
             * Returns a copy of this period with the specified days subtracted.
             * <p>
             * This subtracts the amount from the days unit in a copy of this period.
             * The years and months units are unaffected.
             * For example, "1 year, 6 months and 3 days" minus 2 days returns "1 year, 6 months and 1 day".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minusDays(daysToSubtract: number): java.time.Period;
            /**
             * Returns a new instance with each element in this period multiplied
             * by the specified scalar.
             * <p>
             * This returns a period with each of the years, months and days units
             * individually multiplied.
             * For example, a period of "2 years, -3 months and 4 days" multiplied by
             * 3 will return "6 years, -9 months and 12 days".
             * No normalization is performed.
             */
            // @ts-ignore
            public multipliedBy(scalar: number): java.time.Period;
            /**
             * Returns a new instance with each amount in this period negated.
             * <p>
             * This returns a period with each of the years, months and days units
             * individually negated.
             * For example, a period of "2 years, -3 months and 4 days" will be
             * negated to "-2 years, 3 months and -4 days".
             * No normalization is performed.
             */
            // @ts-ignore
            public negated(): java.time.Period;
            /**
             * Returns a copy of this period with the years and months normalized.
             * <p>
             * This normalizes the years and months units, leaving the days unit unchanged.
             * The months unit is adjusted to have an absolute value less than 11,
             * with the years unit being adjusted to compensate. For example, a period of
             * "1 Year and 15 months" will be normalized to "2 years and 3 months".
             * <p>
             * The sign of the years and months units will be the same after normalization.
             * For example, a period of "1 year and -25 months" will be normalized to
             * "-1 year and -1 month".
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public normalized(): java.time.Period;
            /**
             * Gets the total number of months in this period.
             * <p>
             * This returns the total number of months in the period by multiplying the
             * number of years by 12 and adding the number of months.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public toTotalMonths(): number;
            /**
             * Adds this period to the specified temporal object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with this period added.
             * If the temporal has a chronology, it must be the ISO chronology.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#plus(TemporalAmount)}.
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * dateTime = thisPeriod.addTo(dateTime);
             * dateTime = dateTime.plus(thisPeriod);
             * </pre>
             * <p>
             * The calculation operates as follows.
             * First, the chronology of the temporal is checked to ensure it is ISO chronology or null.
             * Second, if the months are zero, the years are added if non-zero, otherwise
             * the combination of years and months is added if non-zero.
             * Finally, any days are added.
             * <p>
             * This approach ensures that a partial period can be added to a partial date.
             * For example, a period of years and/or months can be added to a {@code YearMonth},
             * but a period including days cannot.
             * The approach also adds years and months together when necessary, which ensures
             * correct behaviour at the end of the month.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public addTo(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Subtracts this period from the specified temporal object.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with this period subtracted.
             * If the temporal has a chronology, it must be the ISO chronology.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#minus(TemporalAmount)}.
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * dateTime = thisPeriod.subtractFrom(dateTime);
             * dateTime = dateTime.minus(thisPeriod);
             * </pre>
             * <p>
             * The calculation operates as follows.
             * First, the chronology of the temporal is checked to ensure it is ISO chronology or null.
             * Second, if the months are zero, the years are subtracted if non-zero, otherwise
             * the combination of years and months is subtracted if non-zero.
             * Finally, any days are subtracted.
             * <p>
             * This approach ensures that a partial period can be subtracted from a partial date.
             * For example, a period of years and/or months can be subtracted from a {@code YearMonth},
             * but a period including days cannot.
             * The approach also subtracts years and months together when necessary, which ensures
             * correct behaviour at the end of the month.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public subtractFrom(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Checks if this period is equal to another period.
             * <p>
             * The comparison is based on the type {@code Period} and each of the three amounts.
             * To be equal, the years, months and days units must be individually equal.
             * Note that this means that a period of "15 Months" is not equal to a period
             * of "1 Year and 3 Months".
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this period.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Outputs this period as a {@code String}, such as {@code P6Y3M1D}.
             * <p>
             * The output will be in the ISO-8601 period format.
             * A zero period will be represented as zero days, 'P0D'.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
