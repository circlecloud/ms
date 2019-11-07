declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
            interface ChronoPeriod {
                /**
                 * Obtains a {@code ChronoPeriod} consisting of amount of time between two dates.
                 * <p>
                 * The start date is included, but the end date is not.
                 * The period is calculated using {@link ChronoLocalDate#until(ChronoLocalDate)}.
                 * As such, the calculation is chronology specific.
                 * <p>
                 * The chronology of the first date is used.
                 * The chronology of the second date is ignored, with the date being converted
                 * to the target chronology system before the calculation starts.
                 * <p>
                 * The result of this method can be a negative period if the end is before the start.
                 * In most cases, the positive/negative sign will be the same in each of the supported fields.
                 */
                // @ts-ignore
                 between(startDateInclusive: java.time.chrono.ChronoLocalDate, endDateExclusive: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod;
                /**
                 * Gets the value of the requested unit.
                 * <p>
                 * The supported units are chronology specific.
                 * They will typically be {@link ChronoUnit#YEARS YEARS},
                 * {@link ChronoUnit#MONTHS MONTHS} and {@link ChronoUnit#DAYS DAYS}.
                 * Requesting an unsupported unit will throw an exception.
                 */
                // @ts-ignore
                 get(unit: java.time.temporal.TemporalUnit): number;
                /**
                 * Gets the set of units supported by this period.
                 * <p>
                 * The supported units are chronology specific.
                 * They will typically be {@link ChronoUnit#YEARS YEARS},
                 * {@link ChronoUnit#MONTHS MONTHS} and {@link ChronoUnit#DAYS DAYS}.
                 * They are returned in order from largest to smallest.
                 * <p>
                 * This set can be used in conjunction with {@link #get(TemporalUnit)}
                 * to access the entire state of the period.
                 */
                // @ts-ignore
                 getUnits(): java.util.List;
                /**
                 * Gets the chronology that defines the meaning of the supported units.
                 * <p>
                 * The period is defined by the chronology.
                 * It controls the supported units and restricts addition/subtraction
                 * to {@code ChronoLocalDate} instances of the same chronology.
                 */
                // @ts-ignore
                 getChronology(): java.time.chrono.Chronology;
                /**
                 * Checks if all the supported units of this period are zero.
                 */
                // @ts-ignore
                 isZero(): boolean;
                /**
                 * Checks if any of the supported units of this period are negative.
                 */
                // @ts-ignore
                 isNegative(): boolean;
                /**
                 * Returns a copy of this period with the specified period added.
                 * <p>
                 * If the specified amount is a {@code ChronoPeriod} then it must have
                 * the same chronology as this period. Implementations may choose to
                 * accept or reject other {@code TemporalAmount} implementations.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 plus(amountToAdd: java.time.temporal.TemporalAmount): java.time.chrono.ChronoPeriod;
                /**
                 * Returns a copy of this period with the specified period subtracted.
                 * <p>
                 * If the specified amount is a {@code ChronoPeriod} then it must have
                 * the same chronology as this period. Implementations may choose to
                 * accept or reject other {@code TemporalAmount} implementations.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 minus(amountToSubtract: java.time.temporal.TemporalAmount): java.time.chrono.ChronoPeriod;
                /**
                 * Returns a new instance with each amount in this period in this period
                 * multiplied by the specified scalar.
                 * <p>
                 * This returns a period with each supported unit individually multiplied.
                 * For example, a period of "2 years, -3 months and 4 days" multiplied by
                 * 3 will return "6 years, -9 months and 12 days".
                 * No normalization is performed.
                 */
                // @ts-ignore
                 multipliedBy(scalar: number): java.time.chrono.ChronoPeriod;
                /**
                 * Returns a new instance with each amount in this period negated.
                 * <p>
                 * This returns a period with each supported unit individually negated.
                 * For example, a period of "2 years, -3 months and 4 days" will be
                 * negated to "-2 years, 3 months and -4 days".
                 * No normalization is performed.
                 */
                // @ts-ignore
                 negated(): java.time.chrono.ChronoPeriod;
                /**
                 * Returns a copy of this period with the amounts of each unit normalized.
                 * <p>
                 * The process of normalization is specific to each calendar system.
                 * For example, in the ISO calendar system, the years and months are
                 * normalized but the days are not, such that "15 months" would be
                 * normalized to "1 year and 3 months".
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 normalized(): java.time.chrono.ChronoPeriod;
                /**
                 * Adds this period to the specified temporal object.
                 * <p>
                 * This returns a temporal object of the same observable type as the input
                 * with this period added.
                 * <p>
                 * In most cases, it is clearer to reverse the calling pattern by using
                 * {@link Temporal#plus(TemporalAmount)}.
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * dateTime = thisPeriod.addTo(dateTime);
                 * dateTime = dateTime.plus(thisPeriod);
                 * </pre>
                 * <p>
                 * The specified temporal must have the same chronology as this period.
                 * This returns a temporal with the non-zero supported units added.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 addTo(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
                /**
                 * Subtracts this period from the specified temporal object.
                 * <p>
                 * This returns a temporal object of the same observable type as the input
                 * with this period subtracted.
                 * <p>
                 * In most cases, it is clearer to reverse the calling pattern by using
                 * {@link Temporal#minus(TemporalAmount)}.
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * dateTime = thisPeriod.subtractFrom(dateTime);
                 * dateTime = dateTime.minus(thisPeriod);
                 * </pre>
                 * <p>
                 * The specified temporal must have the same chronology as this period.
                 * This returns a temporal with the non-zero supported units subtracted.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 subtractFrom(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
                /**
                 * Checks if this period is equal to another period, including the chronology.
                 * <p>
                 * Compares this period with another ensuring that the type, each amount and
                 * the chronology are the same.
                 * Note that this means that a period of "15 Months" is not equal to a period
                 * of "1 Year and 3 Months".
                 */
                // @ts-ignore
                 equals(obj: java.lang.Object): boolean;
                /**
                 * A hash code for this period.
                 */
                // @ts-ignore
                 hashCode(): number;
                /**
                 * Outputs this period as a {@code String}.
                 * <p>
                 * The output will include the period amounts and chronology.
                 */
                // @ts-ignore
                 toString(): string;
            }
        }
    }
}
