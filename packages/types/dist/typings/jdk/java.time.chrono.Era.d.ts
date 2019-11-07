// @ts-nocheck
declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
            interface Era {
                /**
                 * Gets the numeric value associated with the era as defined by the chronology.
                 * Each chronology defines the predefined Eras and methods to list the Eras
                 * of the chronology.
                 * <p>
                 * All fields, including eras, have an associated numeric value.
                 * The meaning of the numeric value for era is determined by the chronology
                 * according to these principles:
                 * <ul>
                 * <li>The era in use at the epoch 1970-01-01 (ISO) has the value 1.
                 * <li>Later eras have sequentially higher values.
                 * <li>Earlier eras have sequentially lower values, which may be negative.
                 * </ul>
                 */
                // @ts-ignore
                 getValue(): number;
                /**
                 * Checks if the specified field is supported.
                 * <p>
                 * This checks if this era can be queried for the specified field.
                 * If false, then calling the {@link #range(TemporalField) range} and
                 * {@link #get(TemporalField) get} methods will throw an exception.
                 * <p>
                 * If the field is a {@link ChronoField} then the query is implemented here.
                 * The {@code ERA} field returns true.
                 * All other {@code ChronoField} instances will return false.
                 * <p>
                 * If the field is not a {@code ChronoField}, then the result of this method
                 * is obtained by invoking {@code TemporalField.isSupportedBy(TemporalAccessor)}
                 * passing {@code this} as the argument.
                 * Whether the field is supported is determined by the field.
                 */
                // @ts-ignore
                 isSupported(field: java.time.temporal.TemporalField): boolean;
                /**
                 * Gets the range of valid values for the specified field.
                 * <p>
                 * The range object expresses the minimum and maximum valid values for a field.
                 * This era is used to enhance the accuracy of the returned range.
                 * If it is not possible to return the range, because the field is not supported
                 * or for some other reason, an exception is thrown.
                 * <p>
                 * If the field is a {@link ChronoField} then the query is implemented here.
                 * The {@code ERA} field returns the range.
                 * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
                 * <p>
                 * If the field is not a {@code ChronoField}, then the result of this method
                 * is obtained by invoking {@code TemporalField.rangeRefinedBy(TemporalAccessor)}
                 * passing {@code this} as the argument.
                 * Whether the range can be obtained is determined by the field.
                 * <p>
                 * The default implementation must return a range for {@code ERA} from
                 * zero to one, suitable for two era calendar systems such as ISO.
                 */
                // @ts-ignore
                 range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
                /**
                 * Gets the value of the specified field from this era as an {@code int}.
                 * <p>
                 * This queries this era for the value of the specified field.
                 * The returned value will always be within the valid range of values for the field.
                 * If it is not possible to return the value, because the field is not supported
                 * or for some other reason, an exception is thrown.
                 * <p>
                 * If the field is a {@link ChronoField} then the query is implemented here.
                 * The {@code ERA} field returns the value of the era.
                 * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
                 * <p>
                 * If the field is not a {@code ChronoField}, then the result of this method
                 * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
                 * passing {@code this} as the argument. Whether the value can be obtained,
                 * and what the value represents, is determined by the field.
                 */
                // @ts-ignore
                 get(field: java.time.temporal.TemporalField): number;
                /**
                 * Gets the value of the specified field from this era as a {@code long}.
                 * <p>
                 * This queries this era for the value of the specified field.
                 * If it is not possible to return the value, because the field is not supported
                 * or for some other reason, an exception is thrown.
                 * <p>
                 * If the field is a {@link ChronoField} then the query is implemented here.
                 * The {@code ERA} field returns the value of the era.
                 * All other {@code ChronoField} instances will throw an {@code UnsupportedTemporalTypeException}.
                 * <p>
                 * If the field is not a {@code ChronoField}, then the result of this method
                 * is obtained by invoking {@code TemporalField.getFrom(TemporalAccessor)}
                 * passing {@code this} as the argument. Whether the value can be obtained,
                 * and what the value represents, is determined by the field.
                 */
                // @ts-ignore
                 getLong(field: java.time.temporal.TemporalField): number;
                /**
                 * Queries this era using the specified query.
                 * <p>
                 * This queries this era using the specified query strategy object.
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
                 * Adjusts the specified temporal object to have the same era as this object.
                 * <p>
                 * This returns a temporal object of the same observable type as the input
                 * with the era changed to be the same as this.
                 * <p>
                 * The adjustment is equivalent to using {@link Temporal#with(TemporalField, long)}
                 * passing {@link ChronoField#ERA} as the field.
                 * <p>
                 * In most cases, it is clearer to reverse the calling pattern by using
                 * {@link Temporal#with(TemporalAdjuster)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisEra.adjustInto(temporal);
                 * temporal = temporal.with(thisEra);
                 * </pre>
                 * <p>
                 * This instance is immutable and unaffected by this method call.
                 */
                // @ts-ignore
                 adjustInto(temporal: java.time.temporal.Temporal): java.time.temporal.Temporal;
                /**
                 * Gets the textual representation of this era.
                 * <p>
                 * This returns the textual name used to identify the era,
                 * suitable for presentation to the user.
                 * The parameters control the style of the returned text and the locale.
                 * <p>
                 * If no textual mapping is found then the {@link #getValue() numeric value} is returned.
                 */
                // @ts-ignore
                 getDisplayName(style: java.time.format.TextStyle, locale: java.util.Locale): string;
            }
        }
    }
}
