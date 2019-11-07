// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                 class FileTime extends java.lang.Object {
                    /**
                     * Returns a {@code FileTime} representing a value at the given unit of
                     * granularity.
                     */
                    // @ts-ignore
                    public static from(value: number, unit: java.util.concurrent.TimeUnit): java.nio.file.attribute.FileTime;
                    /**
                     * Returns a {@code FileTime} representing the given value in milliseconds.
                     */
                    // @ts-ignore
                    public static fromMillis(value: number): java.nio.file.attribute.FileTime;
                    /**
                     * Returns a {@code FileTime} representing the same point of time value
                     * on the time-line as the provided {@code Instant} object.
                     */
                    // @ts-ignore
                    public static from(instant: java.time.Instant): java.nio.file.attribute.FileTime;
                    /**
                     * Returns the value at the given unit of granularity.
                     * <p> Conversion from a coarser granularity that would numerically overflow
                     * saturate to {@code Long.MIN_VALUE} if negative or {@code Long.MAX_VALUE}
                     * if positive.
                     */
                    // @ts-ignore
                    public to(unit: java.util.concurrent.TimeUnit): number;
                    /**
                     * Returns the value in milliseconds.
                     * <p> Conversion from a coarser granularity that would numerically overflow
                     * saturate to {@code Long.MIN_VALUE} if negative or {@code Long.MAX_VALUE}
                     * if positive.
                     */
                    // @ts-ignore
                    public toMillis(): number;
                    /**
                     * Converts this {@code FileTime} object to an {@code Instant}.
                     * <p> The conversion creates an {@code Instant} that represents the
                     * same point on the time-line as this {@code FileTime}.
                     * <p> {@code FileTime} can store points on the time-line further in the
                     * future and further in the past than {@code Instant}. Conversion
                     * from such further time points saturates to {@link Instant#MIN} if
                     * earlier than {@code Instant.MIN} or {@link Instant#MAX} if later
                     * than {@code Instant.MAX}.
                     */
                    // @ts-ignore
                    public toInstant(): java.time.Instant;
                    /**
                     * Tests this {@code FileTime} for equality with the given object.
                     * <p> The result is {@code true} if and only if the argument is not {@code
                     * null} and is a {@code FileTime} that represents the same time. This
                     * method satisfies the general contract of the {@code Object.equals} method.
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    /**
                     * Computes a hash code for this file time.
                     * <p> The hash code is based upon the value represented, and satisfies the
                     * general contract of the {@link Object#hashCode} method.
                     */
                    // @ts-ignore
                    public hashCode(): number;
                    /**
                     * Compares the value of two {@code FileTime} objects for order.
                     */
                    // @ts-ignore
                    public compareTo(other: java.nio.file.attribute.FileTime): number;
                    /**
                     * Returns the string representation of this {@code FileTime}. The string
                     * is returned in the <a
                     * href="http://www.w3.org/TR/NOTE-datetime">ISO&nbsp;8601</a> format:
                     * <pre>
                     * YYYY-MM-DDThh:mm:ss[.s+]Z
                     * </pre>
                     * where "{@code [.s+]}" represents a dot followed by one of more digits
                     * for the decimal fraction of a second. It is only present when the decimal
                     * fraction of a second is not zero. For example, {@code
                     * FileTime.fromMillis(1234567890000L).toString()} yields {@code
                     * "2009-02-13T23:31:30Z"}, and {@code FileTime.fromMillis(1234567890123L).toString()}
                     * yields {@code "2009-02-13T23:31:30.123Z"}.
                     * <p> A {@code FileTime} is primarily intended to represent the value of a
                     * file's time stamp. Where used to represent <i>extreme values</i>, where
                     * the year is less than "{@code 0001}" or greater than "{@code 9999}" then
                     * this method deviates from ISO 8601 in the same manner as the
                     * <a href="http://www.w3.org/TR/xmlschema-2/#deviantformats">XML Schema
                     * language</a>. That is, the year may be expanded to more than four digits
                     * and may be negative-signed. If more than four digits then leading zeros
                     * are not present. The year before "{@code 0001}" is "{@code -0001}".
                     */
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
