declare namespace java {
    namespace time {
        namespace temporal {
            // @ts-ignore
             class ValueRange extends java.lang.Object {
                /**
                 * Obtains a fixed value range.
                 * <p>
                 * This factory obtains a range where the minimum and maximum values are fixed.
                 * For example, the ISO month-of-year always runs from 1 to 12.
                 */
                // @ts-ignore
                public static of(min: number, max: number): java.time.temporal.ValueRange;
                /**
                 * Obtains a variable value range.
                 * <p>
                 * This factory obtains a range where the minimum value is fixed and the maximum value may vary.
                 * For example, the ISO day-of-month always starts at 1, but ends between 28 and 31.
                 */
                // @ts-ignore
                public static of(min: number, maxSmallest: number, maxLargest: number): java.time.temporal.ValueRange;
                /**
                 * Obtains a fully variable value range.
                 * <p>
                 * This factory obtains a range where both the minimum and maximum value may vary.
                 */
                // @ts-ignore
                public static of(minSmallest: number, minLargest: number, maxSmallest: number, maxLargest: number): java.time.temporal.ValueRange;
                /**
                 * Is the value range fixed and fully known.
                 * <p>
                 * For example, the ISO day-of-month runs from 1 to between 28 and 31.
                 * Since there is uncertainty about the maximum value, the range is not fixed.
                 * However, for the month of January, the range is always 1 to 31, thus it is fixed.
                 */
                // @ts-ignore
                public isFixed(): boolean;
                /**
                 * Gets the minimum value that the field can take.
                 * <p>
                 * For example, the ISO day-of-month always starts at 1.
                 * The minimum is therefore 1.
                 */
                // @ts-ignore
                public getMinimum(): number;
                /**
                 * Gets the largest possible minimum value that the field can take.
                 * <p>
                 * For example, the ISO day-of-month always starts at 1.
                 * The largest minimum is therefore 1.
                 */
                // @ts-ignore
                public getLargestMinimum(): number;
                /**
                 * Gets the smallest possible maximum value that the field can take.
                 * <p>
                 * For example, the ISO day-of-month runs to between 28 and 31 days.
                 * The smallest maximum is therefore 28.
                 */
                // @ts-ignore
                public getSmallestMaximum(): number;
                /**
                 * Gets the maximum value that the field can take.
                 * <p>
                 * For example, the ISO day-of-month runs to between 28 and 31 days.
                 * The maximum is therefore 31.
                 */
                // @ts-ignore
                public getMaximum(): number;
                /**
                 * Checks if all values in the range fit in an {@code int}.
                 * <p>
                 * This checks that all valid values are within the bounds of an {@code int}.
                 * <p>
                 * For example, the ISO month-of-year has values from 1 to 12, which fits in an {@code int}.
                 * By comparison, ISO nano-of-day runs from 1 to 86,400,000,000,000 which does not fit in an {@code int}.
                 * <p>
                 * This implementation uses {@link #getMinimum()} and {@link #getMaximum()}.
                 */
                // @ts-ignore
                public isIntValue(): boolean;
                /**
                 * Checks if the value is within the valid range.
                 * <p>
                 * This checks that the value is within the stored range of values.
                 */
                // @ts-ignore
                public isValidValue(value: number): boolean;
                /**
                 * Checks if the value is within the valid range and that all values
                 * in the range fit in an {@code int}.
                 * <p>
                 * This method combines {@link #isIntValue()} and {@link #isValidValue(long)}.
                 */
                // @ts-ignore
                public isValidIntValue(value: number): boolean;
                /**
                 * Checks that the specified value is valid.
                 * <p>
                 * This validates that the value is within the valid range of values.
                 * The field is only used to improve the error message.
                 */
                // @ts-ignore
                public checkValidValue(value: number, field: java.time.temporal.TemporalField): number;
                /**
                 * Checks that the specified value is valid and fits in an {@code int}.
                 * <p>
                 * This validates that the value is within the valid range of values and that
                 * all valid values are within the bounds of an {@code int}.
                 * The field is only used to improve the error message.
                 */
                // @ts-ignore
                public checkValidIntValue(value: number, field: java.time.temporal.TemporalField): number;
                /**
                 * Checks if this range is equal to another range.
                 * <p>
                 * The comparison is based on the four values, minimum, largest minimum,
                 * smallest maximum and maximum.
                 * Only objects of type {@code ValueRange} are compared, other types return false.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * A hash code for this range.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Outputs this range as a {@code String}.
                 * <p>
                 * The format will be '{min}/{largestMin} - {smallestMax}/{max}',
                 * where the largestMin or smallestMax sections may be omitted, together
                 * with associated slash, if they are the same as the min or max.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
