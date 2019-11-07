declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
            interface TemporalField {
                /**
                 * Gets the display name for the field in the requested locale.
                 * <p>
                 * If there is no display name for the locale then a suitable default must be returned.
                 * <p>
                 * The default implementation must check the locale is not null
                 * and return {@code toString()}.
                 */
                // @ts-ignore
                 getDisplayName(locale: java.util.Locale): string;
                /**
                 * Gets the unit that the field is measured in.
                 * <p>
                 * The unit of the field is the period that varies within the range.
                 * For example, in the field 'MonthOfYear', the unit is 'Months'.
                 * See also {@link #getRangeUnit()}.
                 */
                // @ts-ignore
                 getBaseUnit(): java.time.temporal.TemporalUnit;
                /**
                 * Gets the range that the field is bound by.
                 * <p>
                 * The range of the field is the period that the field varies within.
                 * For example, in the field 'MonthOfYear', the range is 'Years'.
                 * See also {@link #getBaseUnit()}.
                 * <p>
                 * The range is never null. For example, the 'Year' field is shorthand for
                 * 'YearOfForever'. It therefore has a unit of 'Years' and a range of 'Forever'.
                 */
                // @ts-ignore
                 getRangeUnit(): java.time.temporal.TemporalUnit;
                /**
                 * Gets the range of valid values for the field.
                 * <p>
                 * All fields can be expressed as a {@code long} integer.
                 * This method returns an object that describes the valid range for that value.
                 * This method is generally only applicable to the ISO-8601 calendar system.
                 * <p>
                 * Note that the result only describes the minimum and maximum valid values
                 * and it is important not to read too much into them. For example, there
                 * could be values within the range that are invalid for the field.
                 */
                // @ts-ignore
                 range(): java.time.temporal.ValueRange;
                /**
                 * Checks if this field represents a component of a date.
                 * <p>
                 * A field is date-based if it can be derived from
                 * {@link ChronoField#EPOCH_DAY EPOCH_DAY}.
                 * Note that it is valid for both {@code isDateBased()} and {@code isTimeBased()}
                 * to return false, such as when representing a field like minute-of-week.
                 */
                // @ts-ignore
                 isDateBased(): boolean;
                /**
                 * Checks if this field represents a component of a time.
                 * <p>
                 * A field is time-based if it can be derived from
                 * {@link ChronoField#NANO_OF_DAY NANO_OF_DAY}.
                 * Note that it is valid for both {@code isDateBased()} and {@code isTimeBased()}
                 * to return false, such as when representing a field like minute-of-week.
                 */
                // @ts-ignore
                 isTimeBased(): boolean;
                /**
                 * Checks if this field is supported by the temporal object.
                 * <p>
                 * This determines whether the temporal accessor supports this field.
                 * If this returns false, then the temporal cannot be queried for this field.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link TemporalAccessor#isSupported(TemporalField)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisField.isSupportedBy(temporal);
                 * temporal = temporal.isSupported(thisField);
                 * </pre>
                 * It is recommended to use the second approach, {@code isSupported(TemporalField)},
                 * as it is a lot clearer to read in code.
                 * <p>
                 * Implementations should determine whether they are supported using the fields
                 * available in {@link ChronoField}.
                 */
                // @ts-ignore
                 isSupportedBy(temporal: java.time.temporal.TemporalAccessor): boolean;
                /**
                 * Get the range of valid values for this field using the temporal object to
                 * refine the result.
                 * <p>
                 * This uses the temporal object to find the range of valid values for the field.
                 * This is similar to {@link #range()}, however this method refines the result
                 * using the temporal. For example, if the field is {@code DAY_OF_MONTH} the
                 * {@code range} method is not accurate as there are four possible month lengths,
                 * 28, 29, 30 and 31 days. Using this method with a date allows the range to be
                 * accurate, returning just one of those four options.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link TemporalAccessor#range(TemporalField)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisField.rangeRefinedBy(temporal);
                 * temporal = temporal.range(thisField);
                 * </pre>
                 * It is recommended to use the second approach, {@code range(TemporalField)},
                 * as it is a lot clearer to read in code.
                 * <p>
                 * Implementations should perform any queries or calculations using the fields
                 * available in {@link ChronoField}.
                 * If the field is not supported an {@code UnsupportedTemporalTypeException} must be thrown.
                 */
                // @ts-ignore
                 rangeRefinedBy(temporal: java.time.temporal.TemporalAccessor): java.time.temporal.ValueRange;
                /**
                 * Gets the value of this field from the specified temporal object.
                 * <p>
                 * This queries the temporal object for the value of this field.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link TemporalAccessor#getLong(TemporalField)}
                 * (or {@link TemporalAccessor#get(TemporalField)}):
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisField.getFrom(temporal);
                 * temporal = temporal.getLong(thisField);
                 * </pre>
                 * It is recommended to use the second approach, {@code getLong(TemporalField)},
                 * as it is a lot clearer to read in code.
                 * <p>
                 * Implementations should perform any queries or calculations using the fields
                 * available in {@link ChronoField}.
                 * If the field is not supported an {@code UnsupportedTemporalTypeException} must be thrown.
                 */
                // @ts-ignore
                 getFrom(temporal: java.time.temporal.TemporalAccessor): number;
                /**
                 * Returns a copy of the specified temporal object with the value of this field set.
                 * <p>
                 * This returns a new temporal object based on the specified one with the value for
                 * this field changed. For example, on a {@code LocalDate}, this could be used to
                 * set the year, month or day-of-month.
                 * The returned object has the same observable type as the specified object.
                 * <p>
                 * In some cases, changing a field is not fully defined. For example, if the target object is
                 * a date representing the 31st January, then changing the month to February would be unclear.
                 * In cases like this, the implementation is responsible for resolving the result.
                 * Typically it will choose the previous valid date, which would be the last valid
                 * day of February in this example.
                 * <p>
                 * There are two equivalent ways of using this method.
                 * The first is to invoke this method directly.
                 * The second is to use {@link Temporal#with(TemporalField, long)}:
                 * <pre>
                 * // these two lines are equivalent, but the second approach is recommended
                 * temporal = thisField.adjustInto(temporal);
                 * temporal = temporal.with(thisField);
                 * </pre>
                 * It is recommended to use the second approach, {@code with(TemporalField)},
                 * as it is a lot clearer to read in code.
                 * <p>
                 * Implementations should perform any queries or calculations using the fields
                 * available in {@link ChronoField}.
                 * If the field is not supported an {@code UnsupportedTemporalTypeException} must be thrown.
                 * <p>
                 * Implementations must not alter the specified temporal object.
                 * Instead, an adjusted copy of the original must be returned.
                 * This provides equivalent, safe behavior for immutable and mutable implementations.
                 */
                // @ts-ignore
                 adjustInto(temporal: java.time.temporal.Temporal, newValue: number): java.time.temporal.Temporal;
                /**
                 * Resolves this field to provide a simpler alternative or a date.
                 * <p>
                 * This method is invoked during the resolve phase of parsing.
                 * It is designed to allow application defined fields to be simplified into
                 * more standard fields, such as those on {@code ChronoField}, or into a date.
                 * <p>
                 * Applications should not normally invoke this method directly.
                 */
                // @ts-ignore
                 resolve(fieldValues: java.util.Map, partialTemporal: java.time.temporal.TemporalAccessor, resolverStyle: java.time.format.ResolverStyle): java.time.temporal.TemporalAccessor;
                /**
                 * Gets a descriptive name for the field.
                 * <p>
                 * The should be of the format 'BaseOfRange', such as 'MonthOfYear',
                 * unless the field has a range of {@code FOREVER}, when only
                 * the base unit is mentioned, such as 'Year' or 'Era'.
                 */
                // @ts-ignore
                 toString(): string;
            }
        }
    }
}
