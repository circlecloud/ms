declare namespace java {
    namespace time {
        // @ts-ignore
         class Month extends java.lang.Enum {
            // @ts-ignore
            public static JANUARY: java.time.Month;
            // @ts-ignore
            public static FEBRUARY: java.time.Month;
            // @ts-ignore
            public static MARCH: java.time.Month;
            // @ts-ignore
            public static APRIL: java.time.Month;
            // @ts-ignore
            public static MAY: java.time.Month;
            // @ts-ignore
            public static JUNE: java.time.Month;
            // @ts-ignore
            public static JULY: java.time.Month;
            // @ts-ignore
            public static AUGUST: java.time.Month;
            // @ts-ignore
            public static SEPTEMBER: java.time.Month;
            // @ts-ignore
            public static OCTOBER: java.time.Month;
            // @ts-ignore
            public static NOVEMBER: java.time.Month;
            // @ts-ignore
            public static DECEMBER: java.time.Month;
            // @ts-ignore
            public static values(): java.time.Month[];
            // @ts-ignore
            public static valueOf(name: string): java.time.Month;
            /**
             * Obtains an instance of {@code Month} from an {@code int} value.
             * <p>
             * {@code Month} is an enum representing the 12 months of the year.
             * This factory allows the enum to be obtained from the {@code int} value.
             * The {@code int} value follows the ISO-8601 standard, from 1 (January) to 12 (December).
             */
            // @ts-ignore
            public static of(month: number): java.time.Month;
            /**
             * Obtains an instance of {@code Month} from a temporal object.
             * <p>
             * This obtains a month based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code Month}.
             * <p>
             * The conversion extracts the {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} field.
             * The extraction is only permitted if the temporal object has an ISO
             * chronology, or can be converted to a {@code LocalDate}.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code Month::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.Month;
            /**
             * Gets the month-of-year {@code int} value.
             * <p>
             * The values are numbered following the ISO-8601 standard,
             * from 1 (January) to 12 (December).
             */
            // @ts-ignore
            public getValue(): number;
            /**
             * Gets the textual representation, such as 'Jan' or 'December'.
             * <p>
             * This returns the textual name used to identify the month-of-year,
             * suitable for presentation to the user.
             * The parameters control the style of the returned text and the locale.
             * <p>
             * If no textual mapping is found then the {@link #getValue() numeric value} is returned.
             */
            // @ts-ignore
            public getDisplayName(style: java.time.format.TextStyle, locale: java.util.Locale): string;
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this month-of-year can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range} and
             * {@link #get(TemporalField) get} methods will throw an exception.
             * <p>
             * If the field is {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} then
             * this method returns true.
             * All other {@code ChronoField} instances will return false.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the field is supported is determined by the field.
             */
            // @ts-ignore
            public isSupported(field: java.time.temporal.TemporalField): boolean;
            /**
             * Gets the range of valid values for the specified field.
             * <p>
             * The range object expresses the minimum and maximum valid values for a field.
             * This month is used to enhance the accuracy of the returned range.
             * If it is not possible to return the range, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} then the
             * range of the month-of-year, from 1 to 12, will be returned.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.rangeRefinedBy(TemporalAccessor)}
             * passing {@code this} as the argument.
             * Whether the range can be obtained is determined by the field.
             */
            // @ts-ignore
            public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
            /**
             * Gets the value of the specified field from this month-of-year as an {@code int}.
             * <p>
             * This queries this month for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} then the
             * value of the month-of-year, from 1 to 12, will be returned.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
             * passing {@code this} as the argument. Whether the value can be obtained,
             * and what the value represents, is determined by the field.
             */
            // @ts-ignore
            public get(field: java.time.temporal.TemporalField): number;
            /**
             * Gets the value of the specified field from this month-of-year as a {@code long}.
             * <p>
             * This queries this month for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} then the
             * value of the month-of-year, from 1 to 12, will be returned.
             * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
             * <p>
             * If the field is not a {@code ChronoField}, then the result of this method
             * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
             * passing {@code this} as the argument. Whether the value can be obtained,
             * and what the value represents, is determined by the field.
             */
            // @ts-ignore
            public getLong(field: java.time.temporal.TemporalField): number;
            /**
             * Returns the month-of-year that is the specified number of quarters after this one.
             * <p>
             * The calculation rolls around the end of the year from December to January.
             * The specified period may be negative.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(months: number): java.time.Month;
            /**
             * Returns the month-of-year that is the specified number of months before this one.
             * <p>
             * The calculation rolls around the start of the year from January to December.
             * The specified period may be negative.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(months: number): java.time.Month;
            /**
             * Gets the length of this month in days.
             * <p>
             * This takes a flag to determine whether to return the length for a leap year or not.
             * <p>
             * February has 28 days in a standard year and 29 days in a leap year.
             * April, June, September and November have 30 days.
             * All other months have 31 days.
             */
            // @ts-ignore
            public length(leapYear: boolean): number;
            /**
             * Gets the minimum length of this month in days.
             * <p>
             * February has a minimum length of 28 days.
             * April, June, September and November have 30 days.
             * All other months have 31 days.
             */
            // @ts-ignore
            public minLength(): number;
            /**
             * Gets the maximum length of this month in days.
             * <p>
             * February has a maximum length of 29 days.
             * April, June, September and November have 30 days.
             * All other months have 31 days.
             */
            // @ts-ignore
            public maxLength(): number;
            /**
             * Gets the day-of-year corresponding to the first day of this month.
             * <p>
             * This returns the day-of-year that this month begins on, using the leap
             * year flag to determine the length of February.
             */
            // @ts-ignore
            public firstDayOfYear(leapYear: boolean): number;
            /**
             * Gets the month corresponding to the first month of this quarter.
             * <p>
             * The year can be divided into four quarters.
             * This method returns the first month of the quarter for the base month.
             * January, February and March return January.
             * April, May and June return April.
             * July, August and September return July.
             * October, November and December return October.
             */
            // @ts-ignore
            public firstMonthOfQuarter(): java.time.Month;
            /**
             * Queries this month-of-year using the specified query.
             * <p>
             * This queries this month-of-year using the specified query strategy object.
             * The {@code TemporalQuery} object defines the logic to be used to
             * obtain the result. Read the documentation of the query to understand
             * what the result of this method will be.
             * <p>
             * The result of this method is obtained by invoking the
             * {@link TemporalQuery#queryFrom(TemporalAccessor)} method on the
             * specified query passing {@code this} as the argument.
             */
            // @ts-ignore
            public query(query: java.time.temporal.TemporalQuery): java.lang.Object;
            /**
             * Adjusts the specified temporal object to have this month-of-year.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the month-of-year changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * passing {@link ChronoField#MONTH_OF_YEAR} as the field.
             * If the specified temporal object does not use the ISO calendar system then
             * a {@code DateTimeException} is thrown.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisMonth.adjustInto(temporal);
             * temporal = temporal.with(thisMonth);
             * </pre>
             * <p>
             * For example, given a date in May, the following are output:
             * <pre>
             * dateInMay.with(JANUARY);    // four months earlier
             * dateInMay.with(APRIL);      // one months earlier
             * dateInMay.with(MAY);        // same date
             * dateInMay.with(JUNE);       // one month later
             * dateInMay.with(DECEMBER);   // seven months later
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
        }
    }
}
