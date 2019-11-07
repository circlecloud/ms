// @ts-nocheck
declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class HijrahEra extends java.lang.Enum {
                // @ts-ignore
                public static AH: java.time.chrono.HijrahEra;
                // @ts-ignore
                public static values(): java.time.chrono.HijrahEra[];
                // @ts-ignore
                public static valueOf(name: string): java.time.chrono.HijrahEra;
                /**
                 * Obtains an instance of {@code HijrahEra} from an {@code int} value.
                 * <p>
                 * The current era, which is the only accepted value, has the value 1
                 */
                // @ts-ignore
                public static of(hijrahEra: number): java.time.chrono.HijrahEra;
                /**
                 * Gets the numeric era {@code int} value.
                 * <p>
                 * The era AH has the value 1.
                 */
                // @ts-ignore
                public getValue(): number;
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
                 * The {@code ERA} field returns a range for the one valid Hijrah era.
                 */
                // @ts-ignore
                public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
            }
        }
    }
}
