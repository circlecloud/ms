declare namespace java {
    namespace time {
        // @ts-ignore
         class MonthDay extends java.lang.Object {
            /**
             * Obtains the current month-day from the system clock in the default time-zone.
             * <p>
             * This will query the {@link Clock#systemDefaultZone() system clock} in the default
             * time-zone to obtain the current month-day.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(): java.time.MonthDay;
            /**
             * Obtains the current month-day from the system clock in the specified time-zone.
             * <p>
             * This will query the {@link Clock#system(ZoneId) system clock} to obtain the current month-day.
             * Specifying the time-zone avoids dependence on the default time-zone.
             * <p>
             * Using this method will prevent the ability to use an alternate clock for testing
             * because the clock is hard-coded.
             */
            // @ts-ignore
            public static now(zone: java.time.ZoneId): java.time.MonthDay;
            /**
             * Obtains the current month-day from the specified clock.
             * <p>
             * This will query the specified clock to obtain the current month-day.
             * Using this method allows the use of an alternate clock for testing.
             * The alternate clock may be introduced using {@link Clock dependency injection}.
             */
            // @ts-ignore
            public static now(clock: java.time.Clock): java.time.MonthDay;
            /**
             * Obtains an instance of {@code MonthDay}.
             * <p>
             * The day-of-month must be valid for the month within a leap year.
             * Hence, for February, day 29 is valid.
             * <p>
             * For example, passing in April and day 31 will throw an exception, as
             * there can never be April 31st in any year. By contrast, passing in
             * February 29th is permitted, as that month-day can sometimes be valid.
             */
            // @ts-ignore
            public static of(month: java.time.Month, dayOfMonth: number): java.time.MonthDay;
            /**
             * Obtains an instance of {@code MonthDay}.
             * <p>
             * The day-of-month must be valid for the month within a leap year.
             * Hence, for month 2 (February), day 29 is valid.
             * <p>
             * For example, passing in month 4 (April) and day 31 will throw an exception, as
             * there can never be April 31st in any year. By contrast, passing in
             * February 29th is permitted, as that month-day can sometimes be valid.
             */
            // @ts-ignore
            public static of(month: number, dayOfMonth: number): java.time.MonthDay;
            /**
             * Obtains an instance of {@code MonthDay} from a temporal object.
             * <p>
             * This obtains a month-day based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code MonthDay}.
             * <p>
             * The conversion extracts the {@link ChronoField#MONTH_OF_YEAR MONTH_OF_YEAR} and
             * {@link ChronoField#DAY_OF_MONTH DAY_OF_MONTH} fields.
             * The extraction is only permitted if the temporal object has an ISO
             * chronology, or can be converted to a {@code LocalDate}.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code MonthDay::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.MonthDay;
            /**
             * Obtains an instance of {@code MonthDay} from a text string such as {@code --12-03}.
             * <p>
             * The string must represent a valid month-day.
             * The format is {@code --MM-dd}.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence): java.time.MonthDay;
            /**
             * Obtains an instance of {@code MonthDay} from a text string using a specific formatter.
             * <p>
             * The text is parsed using the formatter, returning a month-day.
             */
            // @ts-ignore
            public static parse(text: java.lang.CharSequence, formatter: java.time.format.DateTimeFormatter): java.time.MonthDay;
            /**
             * Checks if the specified field is supported.
             * <p>
             * This checks if this month-day can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range} and
             * {@link #get(TemporalField) get} methods will throw an exception.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The supported fields are:
             * <ul>
             * <li>{@code MONTH_OF_YEAR}
             * <li>{@code YEAR}
             * </ul>
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
             * This month-day is used to enhance the accuracy of the returned range.
             * If it is not possible to return the range, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return
             * appropriate range instances.
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
             * Gets the value of the specified field from this month-day as an {@code int}.
             * <p>
             * This queries this month-day for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this month-day.
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
             * Gets the value of the specified field from this month-day as a {@code long}.
             * <p>
             * This queries this month-day for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is a {@link ChronoField} then the query is implemented here.
             * The {@link #isSupported(TemporalField) supported fields} will return valid
             * values based on this month-day.
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
             * Gets the month-of-year field from 1 to 12.
             * <p>
             * This method returns the month as an {@code int} from 1 to 12.
             * Application code is frequently clearer if the enum {@link Month}
             * is used by calling {@link #getMonth()}.
             */
            // @ts-ignore
            public getMonthValue(): number;
            /**
             * Gets the month-of-year field using the {@code Month} enum.
             * <p>
             * This method returns the enum {@link Month} for the month.
             * This avoids confusion as to what {@code int} values mean.
             * If you need access to the primitive {@code int} value then the enum
             * provides the {@link Month#getValue() int value}.
             */
            // @ts-ignore
            public getMonth(): java.time.Month;
            /**
             * Gets the day-of-month field.
             * <p>
             * This method returns the primitive {@code int} value for the day-of-month.
             */
            // @ts-ignore
            public getDayOfMonth(): number;
            /**
             * Checks if the year is valid for this month-day.
             * <p>
             * This method checks whether this month and day and the input year form
             * a valid date. This can only return false for February 29th.
             */
            // @ts-ignore
            public isValidYear(year: number): boolean;
            /**
             * Returns a copy of this {@code MonthDay} with the month-of-year altered.
             * <p>
             * This returns a month-day with the specified month.
             * If the day-of-month is invalid for the specified month, the day will
             * be adjusted to the last valid day-of-month.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withMonth(month: number): java.time.MonthDay;
            /**
             * Returns a copy of this {@code MonthDay} with the month-of-year altered.
             * <p>
             * This returns a month-day with the specified month.
             * If the day-of-month is invalid for the specified month, the day will
             * be adjusted to the last valid day-of-month.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public with(month: java.time.Month): java.time.MonthDay;
            /**
             * Returns a copy of this {@code MonthDay} with the day-of-month altered.
             * <p>
             * This returns a month-day with the specified day-of-month.
             * If the day-of-month is invalid for the month, an exception is thrown.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public withDayOfMonth(dayOfMonth: number): java.time.MonthDay;
            /**
             * Queries this month-day using the specified query.
             * <p>
             * This queries this month-day using the specified query strategy object.
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
             * Adjusts the specified temporal object to have this month-day.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the month and day-of-month changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * twice, passing {@link ChronoField#MONTH_OF_YEAR} and
             * {@link ChronoField#DAY_OF_MONTH} as the fields.
             * If the specified temporal object does not use the ISO calendar system then
             * a {@code DateTimeException} is thrown.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisMonthDay.adjustInto(temporal);
             * temporal = temporal.with(thisMonthDay);
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
            /**
             * Formats this month-day using the specified formatter.
             * <p>
             * This month-day will be passed to the formatter to produce a string.
             */
            // @ts-ignore
            public format(formatter: java.time.format.DateTimeFormatter): string;
            /**
             * Combines this month-day with a year to create a {@code LocalDate}.
             * <p>
             * This returns a {@code LocalDate} formed from this month-day and the specified year.
             * <p>
             * A month-day of February 29th will be adjusted to February 28th in the resulting
             * date if the year is not a leap year.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public atYear(year: number): java.time.LocalDate;
            /**
             * Compares this month-day to another month-day.
             * <p>
             * The comparison is based first on value of the month, then on the value of the day.
             * It is "consistent with equals", as defined by {@link Comparable}.
             */
            // @ts-ignore
            public compareTo(other: java.time.MonthDay): number;
            /**
             * Checks if this month-day is after the specified month-day.
             */
            // @ts-ignore
            public isAfter(other: java.time.MonthDay): boolean;
            /**
             * Checks if this month-day is before the specified month-day.
             */
            // @ts-ignore
            public isBefore(other: java.time.MonthDay): boolean;
            /**
             * Checks if this month-day is equal to another month-day.
             * <p>
             * The comparison is based on the time-line position of the month-day within a year.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * A hash code for this month-day.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Outputs this month-day as a {@code String}, such as {@code --12-03}.
             * <p>
             * The output will be in the format {@code --MM-dd}:
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
