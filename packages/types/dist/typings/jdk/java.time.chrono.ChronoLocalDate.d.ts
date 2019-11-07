declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
            interface ChronoLocalDate {
                /**
                 * Gets a comparator that compares {@code ChronoLocalDate} in
                 * time-line order ignoring the chronology.
                 * <p>
                 * This comparator differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying date and not the chronology.
                 * This allows dates in different calendar systems to be compared based
                 * on the position of the date on the local time-line.
                 * The underlying comparison is equivalent to comparing the epoch-day.
                 */
                // @ts-ignore
                 timeLineOrder(): java.util.Comparator;
                /**
                 * Obtains an instance of {@code ChronoLocalDate} from a temporal object.
                 * <p>
                 * This obtains a local date based on the specified temporal.
                 * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
                 * which this factory converts to an instance of {@code ChronoLocalDate}.
                 * <p>
                 * The conversion extracts and combines the chronology and the date
                 * from the temporal object. The behavior is equivalent to using
                 * {@link Chronology#date(TemporalAccessor)} with the extracted chronology.
                 * Implementations are permitted to perform optimizations such as accessing
                 * those fields that are equivalent to the relevant objects.
                 * <p>
                 * This method matches the signature of the functional interface {@link TemporalQuery}
                 * allowing it to be used as a query via method reference, {@code ChronoLocalDate::from}.
                 */
                // @ts-ignore
                 from(temporal: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate;
                /**
                 * Gets the chronology of this date.
                 * <p>
                 * The {@code Chronology} represents the calendar system in use.
                 * The era and other fields in {@link ChronoField} are defined by the chronology.
                 */
                // @ts-ignore
                 getChronology(): java.time.chrono.Chronology;
                /**
                 * Gets the era, as defined by the chronology.
                 * <p>
                 * The era is, conceptually, the largest division of the time-line.
                 * Most calendar systems have a single epoch dividing the time-line into two eras.
                 * However, some have multiple eras, such as one for the reign of each leader.
                 * The exact meaning is determined by the {@code Chronology}.
                 * <p>
                 * All correctly implemented {@code Era} classes are singletons, thus it
                 * is valid code to write {@code date.getEra() == SomeChrono.ERA_NAME)}.
                 * <p>
                 * This default implementation uses {@link Chronology#eraOf(int)}.
                 */
                // @ts-ignore
                 getEra(): java.time.chrono.Era;
                /**
                 * Checks if the year is a leap year, as defined by the calendar system.
                 * <p>
                 * A leap-year is a year of a longer length than normal.
                 * The exact meaning is determined by the chronology with the constraint that
                 * a leap-year must imply a year-length longer than a non leap-year.
                 * <p>
                 * This default implementation uses {@link Chronology#isLeapYear(long)}.
                 */
                // @ts-ignore
                 isLeapYear(): boolean;
                /**
                 * Returns the length of the month represented by this date, as defined by the calendar system.
                 * <p>
                 * This returns the length of the month in days.
                 */
                // @ts-ignore
                 lengthOfMonth(): number;
                /**
                 * Returns the length of the year represented by this date, as defined by the calendar system.
                 * <p>
                 * This returns the length of the year in days.
                 * <p>
                 * The default implementation uses {@link #isLeapYear()} and returns 365 or 366.
                 */
                // @ts-ignore
                 lengthOfYear(): number;
                /**
                 * Checks if the specified field is supported.
                 * <p>
                 * This checks if the specified field can be queried on this date.
                 * If false, then calling the {@link #range(TemporalField) range},
                 * {@link #get(TemporalField) get} and {@link #with(TemporalField, long)}
                 * methods will throw an exception.
                 * <p>
                 * The set of supported fields is defined by the chronology and normally includes
                 * all {@code ChronoField} date fields.
                 * <p>
                 * If the field is not a {@code ChronoField}, then the result of this method
                 * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
                 * passing {@code this} as the argument.
                 * Whether the field is supported is determined by the field.
                 */
                // @ts-ignore
                 isSupported(field: java.time.temporal.TemporalField): boolean;
                /**
                 * Checks if the specified unit is supported.
                 * <p>
                 * This checks if the specified unit can be added to or subtracted from this date.
                 * If false, then calling the {@link #plus(long, TemporalUnit)} and
                 * {@link #minus(long, TemporalUnit) minus} methods will throw an exception.
                 * <p>
                 * The set of supported units is defined by the chronology and normally includes
                 * all {@code ChronoUnit} date units except {@code FOREVER}.
                 * <p>
                 * If the unit is not a {@code ChronoUnit}, then the result of this method
                 * is obtained by invoking {@code TemporalUnit.isSupportedBy(Temporal)}
                 * passing {@code this} as the argument.
                 * Whether the unit is supported is determined by the unit.
                 */
                // @ts-ignore
                 isSupported(unit: java.time.temporal.TemporalUnit): boolean;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 with(adjuster: java.time.temporal.TemporalAdjuster): java.time.chrono.ChronoLocalDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 with(field: java.time.temporal.TemporalField, newValue: number): java.time.chrono.ChronoLocalDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 plus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 plus(amountToAdd: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 minus(amount: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                 minus(amountToSubtract: number, unit: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate;
                /**
                 * Queries this date using the specified query.
                 * <p>
                 * This queries this date using the specified query strategy object.
                 * The {@code TemporalQuery} object defines the logic to be used to
                 * obtain the result. Read the documentation of the query to understand
                 * what the result of this method will be.
                 * <p>
                 * The result of this method is obtained by invoking the
                 * {@link TemporalQuery#queryFrom(TemporalAccessor)} method on the
                 * specified query passing {@code this} as the argument.
                 */
                // @ts-ignore
                 query(query: java.time.temporal.TemporalQuery): java.lang.Object;
                /**
                 * Adjusts the specified temporal object to have the same date as this object.
                 * <p>
                 * This returns a temporal object of the same observable type as the input
                 * with the date changed to be the same as this.
                 * <p>
                 * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
                 * passing {@link ChronoField#EPOCH_DAY} as the field.
                 * <p>
                 * In most cases, it is clearer to reverse the calling pattern by using
                 * {@link Temporal#with(TemporalAdjuster)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisLocalDate.adjustInto(temporal);
                 * temporal = temporal.with(thisLocalDate);
                 * </pre>
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
                /**
                 * Calculates the amount of time until another date in terms of the specified unit.
                 * <p>
                 * This calculates the amount of time between two {@code ChronoLocalDate}
                 * objects in terms of a single {@code TemporalUnit}.
                 * The start and end points are {@code this} and the specified date.
                 * The result will be negative if the end is before the start.
                 * The {@code Temporal} passed to this method is converted to a
                 * {@code ChronoLocalDate} using {@link Chronology#date(TemporalAccessor)}.
                 * The calculation returns a whole number, representing the number of
                 * complete units between the two dates.
                 * For example, the amount in days between two dates can be calculated
                 * using {@code startDate.until(endDate, DAYS)}.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method.
                 * The second is to use {@link TemporalUnit#between(Temporal, Temporal)}:
                 * <pre>
                 * // these two lines are equivalent
                 * amount = start.until(end, MONTHS);
                 * amount = MONTHS.between(start, end);
                 * </pre>
                 * The choice should be made based on which makes the code more readable.
                 * <p>
                 * The calculation is implemented in this method for {@link ChronoUnit}.
                 * The units {@code DAYS}, {@code WEEKS}, {@code MONTHS}, {@code YEARS},
                 * {@code DECADES}, {@code CENTURIES}, {@code MILLENNIA} and {@code ERAS}
                 * should be supported by all implementations.
                 * Other {@code ChronoUnit} values will throw an exception.
                 * <p>
                 * If the unit is not a {@code ChronoUnit}, then the result of this method
                 * is obtained by invoking {@code TemporalUnit.between(Temporal, Temporal)}
                 * passing {@code this} as the first argument and the converted input temporal as
                 * the second argument.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 until(endExclusive: java.time.temporal.Temporal, unit: java.time.temporal.TemporalUnit): number;
                /**
                 * Calculates the period between this date and another date as a {@code ChronoPeriod}.
                 * <p>
                 * This calculates the period between two dates. All supplied chronologies
                 * calculate the period using years, months and days, however the
                 * {@code ChronoPeriod} API allows the period to be represented using other units.
                 * <p>
                 * The start and end points are {@code this} and the specified date.
                 * The result will be negative if the end is before the start.
                 * The negative sign will be the same in each of year, month and day.
                 * <p>
                 * The calculation is performed using the chronology of this date.
                 * If necessary, the input date will be converted to match.
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 until(endDateExclusive: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod;
                /**
                 * Formats this date using the specified formatter.
                 * <p>
                 * This date will be passed to the formatter to produce a string.
                 * <p>
                 * The default implementation must behave as follows:
                 * <pre>
                 * return formatter.format(this);
                 * </pre>
                 */
                // @ts-ignore
                 format(formatter: java.time.format.DateTimeFormatter): string;
                /**
                 * Combines this date with a time to create a {@code ChronoLocalDateTime}.
                 * <p>
                 * This returns a {@code ChronoLocalDateTime} formed from this date at the specified time.
                 * All possible combinations of date and time are valid.
                 */
                // @ts-ignore
                 atTime(localTime: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime;
                /**
                 * Converts this date to the Epoch Day.
                 * <p>
                 * The {@link ChronoField#EPOCH_DAY Epoch Day count} is a simple
                 * incrementing count of days where day 0 is 1970-01-01 (ISO).
                 * This definition is the same for all chronologies, enabling conversion.
                 * <p>
                 * This default implementation queries the {@code EPOCH_DAY} field.
                 */
                // @ts-ignore
                 toEpochDay(): number;
                /**
                 * Compares this date to another date, including the chronology.
                 * <p>
                 * The comparison is based first on the underlying time-line date, then
                 * on the chronology.
                 * It is "consistent with equals", as defined by {@link Comparable}.
                 * <p>
                 * For example, the following is the comparator order:
                 * <ol>
                 * <li>{@code 2012-12-03 (ISO)}</li>
                 * <li>{@code 2012-12-04 (ISO)}</li>
                 * <li>{@code 2555-12-04 (ThaiBuddhist)}</li>
                 * <li>{@code 2012-12-05 (ISO)}</li>
                 * </ol>
                 * Values #2 and #3 represent the same date on the time-line.
                 * When two values represent the same date, the chronology ID is compared to distinguish them.
                 * This step is needed to make the ordering "consistent with equals".
                 * <p>
                 * If all the date objects being compared are in the same chronology, then the
                 * additional chronology stage is not required and only the local date is used.
                 * To compare the dates of two {@code TemporalAccessor} instances, including dates
                 * in two different chronologies, use {@link ChronoField#EPOCH_DAY} as a comparator.
                 * <p>
                 * This default implementation performs the comparison defined above.
                 */
                // @ts-ignore
                 compareTo(other: java.time.chrono.ChronoLocalDate): number;
                /**
                 * Checks if this date is after the specified date ignoring the chronology.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying date and not the chronology.
                 * This allows dates in different calendar systems to be compared based
                 * on the time-line position.
                 * This is equivalent to using {@code date1.toEpochDay() > date2.toEpochDay()}.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-day.
                 */
                // @ts-ignore
                 isAfter(other: java.time.chrono.ChronoLocalDate): boolean;
                /**
                 * Checks if this date is before the specified date ignoring the chronology.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying date and not the chronology.
                 * This allows dates in different calendar systems to be compared based
                 * on the time-line position.
                 * This is equivalent to using {@code date1.toEpochDay() < date2.toEpochDay()}.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-day.
                 */
                // @ts-ignore
                 isBefore(other: java.time.chrono.ChronoLocalDate): boolean;
                /**
                 * Checks if this date is equal to the specified date ignoring the chronology.
                 * <p>
                 * This method differs from the comparison in {@link #compareTo} in that it
                 * only compares the underlying date and not the chronology.
                 * This allows dates in different calendar systems to be compared based
                 * on the time-line position.
                 * This is equivalent to using {@code date1.toEpochDay() == date2.toEpochDay()}.
                 * <p>
                 * This default implementation performs the comparison based on the epoch-day.
                 */
                // @ts-ignore
                 isEqual(other: java.time.chrono.ChronoLocalDate): boolean;
                /**
                 * Checks if this date is equal to another date, including the chronology.
                 * <p>
                 * Compares this date with another ensuring that the date and chronology are the same.
                 * <p>
                 * To compare the dates of two {@code TemporalAccessor} instances, including dates
                 * in two different chronologies, use {@link ChronoField#EPOCH_DAY} as a comparator.
                 */
                // @ts-ignore
                 equals(obj: java.lang.Object): boolean;
                /**
                 * A hash code for this date.
                 */
                // @ts-ignore
                 hashCode(): number;
                /**
                 * Outputs this date as a {@code String}.
                 * <p>
                 * The output will include the full local date.
                 */
                // @ts-ignore
                 toString(): string;
            }
        }
    }
}
