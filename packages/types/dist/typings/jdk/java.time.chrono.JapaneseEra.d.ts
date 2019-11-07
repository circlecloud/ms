declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class JapaneseEra extends java.lang.Object {
                // @ts-ignore
                public static MEIJI: java.time.chrono.JapaneseEra;
                // @ts-ignore
                public static TAISHO: java.time.chrono.JapaneseEra;
                // @ts-ignore
                public static SHOWA: java.time.chrono.JapaneseEra;
                // @ts-ignore
                public static HEISEI: java.time.chrono.JapaneseEra;
                /**
                 * Obtains an instance of {@code JapaneseEra} from an {@code int} value.
                 * <p>
                 * The {@link #SHOWA} era that contains 1970-01-01 (ISO calendar system) has the value 1
                 * Later era is numbered 2 ({@link #HEISEI}). Earlier eras are numbered 0 ({@link #TAISHO}),
                 * -1 ({@link #MEIJI}), only Meiji and later eras are supported.
                 */
                // @ts-ignore
                public static of(japaneseEra: number): java.time.chrono.JapaneseEra;
                /**
                 * Returns the {@code JapaneseEra} with the name.
                 * <p>
                 * The string must match exactly the name of the era.
                 * (Extraneous whitespace characters are not permitted.)
                 */
                // @ts-ignore
                public static valueOf(japaneseEra: string): java.time.chrono.JapaneseEra;
                /**
                 * Returns an array of JapaneseEras.
                 * <p>
                 * This method may be used to iterate over the JapaneseEras as follows:
                 * <pre>
                 * for (JapaneseEra c : JapaneseEra.values())
                 * System.out.println(c);
                 * </pre>
                 */
                // @ts-ignore
                public static values(): java.time.chrono.JapaneseEra[];
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getDisplayName(style: java.time.format.TextStyle, locale: java.util.Locale): string;
                /**
                 * Gets the numeric era {@code int} value.
                 * <p>
                 * The {@link #SHOWA} era that contains 1970-01-01 (ISO calendar system) has the value 1.
                 * Later eras are numbered from 2 ({@link #HEISEI}).
                 * Earlier eras are numbered 0 ({@link #TAISHO}), -1 ({@link #MEIJI})).
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
                 * The range of valid Japanese eras can change over time due to the nature
                 * of the Japanese calendar system.
                 */
                // @ts-ignore
                public range(field: java.time.temporal.TemporalField): java.time.temporal.ValueRange;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
