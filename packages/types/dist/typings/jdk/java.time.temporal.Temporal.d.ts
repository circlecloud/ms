// @ts-nocheck
declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
            interface Temporal {
                /**
                 * Checks if the specified unit is supported.
                 * <p>
                 * This checks if the specified unit can be added to, or subtracted from, this date-time.
                 * If false, then calling the {@link #plus(long, TemporalUnit)} and
                 * {@link #minus(long, TemporalUnit) minus} methods will throw an exception.
                 */
                // @ts-ignore
                 isSupported(unit: java.time.temporal.TemporalUnit): boolean;
                /**
                 * Returns an adjusted object of the same type as this object with the adjustment made.
                 * <p>
                 * This adjusts this date-time according to the rules of the specified adjuster.
                 * A simple adjuster might simply set the one of the fields, such as the year field.
                 * A more complex adjuster might set the date to the last day of the month.
                 * A selection of common adjustments is provided in
                 * {@link java.time.temporal.TemporalAdjusters TemporalAdjusters}.
                 * These include finding the "last day of the month" and "next Wednesday".
                 * The adjuster is responsible for handling special cases, such as the varying
                 * lengths of month and leap years.
                 * <p>
                 * Some example code indicating how and why this method is used:
                 * <pre>
                 * date = date.with(Month.JULY);        // most key classes implement TemporalAdjuster
                 * date = date.with(lastDayOfMonth());  // static import from Adjusters
                 * date = date.with(next(WEDNESDAY));   // static import from Adjusters and DayOfWeek
                 * </pre>
                 */
                // @ts-ignore
                 with(adjuster: java.time.temporal.TemporalAdjuster): java.time.temporal.Temporal;
                /**
                 * Returns an object of the same type as this object with the specified field altered.
                 * <p>
                 * This returns a new object based on this one with the value for the specified field changed.
                 * For example, on a {@code LocalDate}, this could be used to set the year, month or day-of-month.
                 * The returned object will have the same observable type as this object.
                 * <p>
                 * In some cases, changing a field is not fully defined. For example, if the target object is
                 * a date representing the 31st January, then changing the month to February would be unclear.
                 * In cases like this, the field is responsible for resolving the result. Typically it will choose
                 * the previous valid date, which would be the last valid day of February in this example.
                 */
                // @ts-ignore
                 with(field: java.time.temporal.TemporalField, newValue: number): java.time.temporal.Temporal;
                /**
                 * Returns an object of the same type as this object with an amount added.
                 * <p>
                 * This adjusts this temporal, adding according to the rules of the specified amount.
                 * The amount is typically a {@link java.time.Period} but may be any other type implementing
                 * the {@link TemporalAmount} interface, such as {@link java.time.Duration}.
                 * <p>
                 * Some example code indicating how and why this method is used:
                 * <pre>
                 * date = date.plus(period);                // add a Period instance
                 * date = date.plus(duration);              // add a Duration instance
                 * date = date.plus(workingDays(6));        // example user-written workingDays method
                 * </pre>
                 * <p>
                 * Note that calling {@code plus} followed by {@code minus} is not guaranteed to
                 * return the same date-time.
                 */
                // @ts-ignore
                 plus(amount: java.time.temporal.TemporalAmount): java.time.temporal.Temporal;
                /**
                 * Returns an object of the same type as this object with the specified period added.
                 * <p>
                 * This method returns a new object based on this one with the specified period added.
                 * For example, on a {@code LocalDate}, this could be used to add a number of years, months or days.
                 * The returned object will have the same observable type as this object.
                 * <p>
                 * In some cases, changing a field is not fully defined. For example, if the target object is
                 * a date representing the 31st January, then adding one month would be unclear.
                 * In cases like this, the field is responsible for resolving the result. Typically it will choose
                 * the previous valid date, which would be the last valid day of February in this example.
                 */
                // @ts-ignore
                 plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.temporal.Temporal;
                /**
                 * Returns an object of the same type as this object with an amount subtracted.
                 * <p>
                 * This adjusts this temporal, subtracting according to the rules of the specified amount.
                 * The amount is typically a {@link java.time.Period} but may be any other type implementing
                 * the {@link TemporalAmount} interface, such as {@link java.time.Duration}.
                 * <p>
                 * Some example code indicating how and why this method is used:
                 * <pre>
                 * date = date.minus(period);               // subtract a Period instance
                 * date = date.minus(duration);             // subtract a Duration instance
                 * date = date.minus(workingDays(6));       // example user-written workingDays method
                 * </pre>
                 * <p>
                 * Note that calling {@code plus} followed by {@code minus} is not guaranteed to
                 * return the same date-time.
                 */
                // @ts-ignore
                 minus(amount: java.time.temporal.TemporalAmount): java.time.temporal.Temporal;
                /**
                 * Returns an object of the same type as this object with the specified period subtracted.
                 * <p>
                 * This method returns a new object based on this one with the specified period subtracted.
                 * For example, on a {@code LocalDate}, this could be used to subtract a number of years, months or days.
                 * The returned object will have the same observable type as this object.
                 * <p>
                 * In some cases, changing a field is not fully defined. For example, if the target object is
                 * a date representing the 31st March, then subtracting one month would be unclear.
                 * In cases like this, the field is responsible for resolving the result. Typically it will choose
                 * the previous valid date, which would be the last valid day of February in this example.
                 */
                // @ts-ignore
                 minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.temporal.Temporal;
                /**
                 * Calculates the amount of time until another temporal in terms of the specified unit.
                 * <p>
                 * This calculates the amount of time between two temporal objects
                 * in terms of a single {@code TemporalUnit}.
                 * The start and end points are {@code this} and the specified temporal.
                 * The end point is converted to be of the same type as the start point if different.
                 * The result will be negative if the end is before the start.
                 * For example, the amount in hours between two temporal objects can be
                 * calculated using {@code startTime.until(endTime, HOURS)}.
                 * <p>
                 * The calculation returns a whole number, representing the number of
                 * complete units between the two temporals.
                 * For example, the amount in hours between the times 11:30 and 13:29
                 * will only be one hour as it is one minute short of two hours.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link TemporalUnit#between(Temporal, Temporal)}:
                 * <pre>
                 * // these two lines are equivalent
                 * temporal = start.until(end, unit);
                 * temporal = unit.between(start, end);
                 * </pre>
                 * The choice should be made based on which makes the code more readable.
                 * <p>
                 * For example, this method allows the number of days between two dates to
                 * be calculated:
                 * <pre>
                 * long daysBetween = start.until(end, DAYS);
                 * // or alternatively
                 * long daysBetween = DAYS.between(start, end);
                 * </pre>
                 */
                // @ts-ignore
                 until(endExclusive: java.time.temporal.Temporal, unit: java.time.temporal.TemporalUnit): number;
            }
        }
    }
}
