declare namespace java {
    namespace time {
        // @ts-ignore
         class DayOfWeek extends java.lang.Enum {
            // @ts-ignore
            public static MONDAY: java.time.DayOfWeek;
            // @ts-ignore
            public static TUESDAY: java.time.DayOfWeek;
            // @ts-ignore
            public static WEDNESDAY: java.time.DayOfWeek;
            // @ts-ignore
            public static THURSDAY: java.time.DayOfWeek;
            // @ts-ignore
            public static FRIDAY: java.time.DayOfWeek;
            // @ts-ignore
            public static SATURDAY: java.time.DayOfWeek;
            // @ts-ignore
            public static SUNDAY: java.time.DayOfWeek;
            // @ts-ignore
            public static values(): java.time.DayOfWeek[];
            // @ts-ignore
            public static valueOf(name: string): java.time.DayOfWeek;
            /**
             * Obtains an instance of {@code DayOfWeek} from an {@code int} value.
             * <p>
             * {@code DayOfWeek} is an enum representing the 7 days of the week.
             * This factory allows the enum to be obtained from the {@code int} value.
             * The {@code int} value follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).
             */
            // @ts-ignore
            public static of(dayOfWeek: number): java.time.DayOfWeek;
            /**
             * Obtains an instance of {@code DayOfWeek} from a temporal object.
             * <p>
             * This obtains a day-of-week based on the specified temporal.
             * A {@code TemporalAccessor} represents an arbitrary set of date and time information,
             * which this factory converts to an instance of {@code DayOfWeek}.
             * <p>
             * The conversion extracts the {@link ChronoField#DAY_OF_WEEK DAY_OF_WEEK} field.
             * <p>
             * This method matches the signature of the functional interface {@link TemporalQuery}
             * allowing it to be used as a query via method reference, {@code DayOfWeek::from}.
             */
            // @ts-ignore
            public static from(temporal: java.time.temporal.TemporalAccessor): java.time.DayOfWeek;
            /**
             * Gets the day-of-week {@code int} value.
             * <p>
             * The values are numbered following the ISO-8601 standard, from 1 (Monday) to 7 (Sunday).
             * See {@link java.time.temporal.WeekFields#dayOfWeek()} for localized week-numbering.
             */
            // @ts-ignore
            public getValue(): number;
            /**
             * Gets the textual representation, such as 'Mon' or 'Friday'.
             * <p>
             * This returns the textual name used to identify the day-of-week,
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
             * This checks if this day-of-week can be queried for the specified field.
             * If false, then calling the {@link #range(TemporalField) range} and
             * {@link #get(TemporalField) get} methods will throw an exception.
             * <p>
             * If the field is {@link ChronoField#DAY_OF_WEEK DAY_OF_WEEK} then
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
             * This day-of-week is used to enhance the accuracy of the returned range.
             * If it is not possible to return the range, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#DAY_OF_WEEK DAY_OF_WEEK} then the
             * range of the day-of-week, from 1 to 7, will be returned.
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
             * Gets the value of the specified field from this day-of-week as an {@code int}.
             * <p>
             * This queries this day-of-week for the value of the specified field.
             * The returned value will always be within the valid range of values for the field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#DAY_OF_WEEK DAY_OF_WEEK} then the
             * value of the day-of-week, from 1 to 7, will be returned.
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
             * Gets the value of the specified field from this day-of-week as a {@code long}.
             * <p>
             * This queries this day-of-week for the value of the specified field.
             * If it is not possible to return the value, because the field is not supported
             * or for some other reason, an exception is thrown.
             * <p>
             * If the field is {@link ChronoField#DAY_OF_WEEK DAY_OF_WEEK} then the
             * value of the day-of-week, from 1 to 7, will be returned.
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
             * Returns the day-of-week that is the specified number of days after this one.
             * <p>
             * The calculation rolls around the end of the week from Sunday to Monday.
             * The specified period may be negative.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public plus(days: number): java.time.DayOfWeek;
            /**
             * Returns the day-of-week that is the specified number of days before this one.
             * <p>
             * The calculation rolls around the start of the year from Monday to Sunday.
             * The specified period may be negative.
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public minus(days: number): java.time.DayOfWeek;
            /**
             * Queries this day-of-week using the specified query.
             * <p>
             * This queries this day-of-week using the specified query strategy object.
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
             * Adjusts the specified temporal object to have this day-of-week.
             * <p>
             * This returns a temporal object of the same observable type as the input
             * with the day-of-week changed to be the same as this.
             * <p>
             * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
             * passing {@link ChronoField#DAY_OF_WEEK} as the field.
             * Note that this adjusts forwards or backwards within a Monday to Sunday week.
             * See {@link java.time.temporal.WeekFields#dayOfWeek()} for localized week start days.
             * See {@code TemporalAdjuster} for other adjusters with more control,
             * such as {@code next(MONDAY)}.
             * <p>
             * In most cases, it is clearer to reverse the calling pattern by using
             * {@link Temporal#with(TemporalAdjuster)}:
             * <pre>
             * // these two lines are equivalent, but the second approach is recommended
             * temporal = thisDayOfWeek.adjustInto(temporal);
             * temporal = temporal.with(thisDayOfWeek);
             * </pre>
             * <p>
             * For example, given a date that is a Wednesday, the following are output:
             * <pre>
             * dateOnWed.with(MONDAY);     // two days earlier
             * dateOnWed.with(TUESDAY);    // one day earlier
             * dateOnWed.with(WEDNESDAY);  // same date
             * dateOnWed.with(THURSDAY);   // one day later
             * dateOnWed.with(FRIDAY);     // two days later
             * dateOnWed.with(SATURDAY);   // three days later
             * dateOnWed.with(SUNDAY);     // four days later
             * </pre>
             * <p>
             * This instance is immutable and unaffected by this method call.
             */
            // @ts-ignore
            public adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
        }
    }
}
