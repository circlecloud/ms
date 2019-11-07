declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
            interface TemporalAccessor {
                /**
                 * Checks if the specified field is supported.
                 * <p>
                 * This checks if the date-time can be queried for the specified field.
                 * If false, then calling the {@link #range(TemporalField) range} and {@link #get(TemporalField) get}
                 * methods will throw an exception.
                 */
                // @ts-ignore
                 isSupported(field: java.time.temporal.TemporalField): boolean;
                /**
                 * Gets the range of valid values for the specified field.
                 * <p>
                 * All fields can be expressed as a {@code long} integer.
                 * This method returns an object that describes the valid range for that value.
                 * The value of this temporal object is used to enhance the accuracy of the returned range.
                 * If the date-time cannot return the range, because the field is unsupported or for
                 * some other reason, an exception will be thrown.
                 * <p>
                 * Note that the result only describes the minimum and maximum valid values
                 * and it is important not to read too much into them. For example, there
                 * could be values within the range that are invalid for the field.
                 */
                // @ts-ignore
                 range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
                /**
                 * Gets the value of the specified field as an {@code int}.
                 * <p>
                 * This queries the date-time for the value of the specified field.
                 * The returned value will always be within the valid range of values for the field.
                 * If the date-time cannot return the value, because the field is unsupported or for
                 * some other reason, an exception will be thrown.
                 */
                // @ts-ignore
                 get(field: java.time.temporal.TemporalField): number;
                /**
                 * Gets the value of the specified field as a {@code long}.
                 * <p>
                 * This queries the date-time for the value of the specified field.
                 * The returned value may be outside the valid range of values for the field.
                 * If the date-time cannot return the value, because the field is unsupported or for
                 * some other reason, an exception will be thrown.
                 */
                // @ts-ignore
                 getLong(field: java.time.temporal.TemporalField): number;
                /**
                 * Queries this date-time.
                 * <p>
                 * This queries this date-time using the specified query strategy object.
                 * <p>
                 * Queries are a key tool for extracting information from date-times.
                 * They exists to externalize the process of querying, permitting different
                 * approaches, as per the strategy design pattern.
                 * Examples might be a query that checks if the date is the day before February 29th
                 * in a leap year, or calculates the number of days to your next birthday.
                 * <p>
                 * The most common query implementations are method references, such as
                 * {@code LocalDate::from} and {@code ZoneId::from}.
                 * Additional implementations are provided as static methods on {@link TemporalQuery}.
                 */
                // @ts-ignore
                 query(query: java.time.temporal.TemporalQuery): java.lang.Object;
            }
        }
    }
}
