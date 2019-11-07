declare namespace java {
    namespace sql {
        // @ts-ignore
         class Timestamp extends java.util.Date {
            /**
             * Constructs a <code>Timestamp</code> object initialized
             * with the given values.
             */
            // @ts-ignore
            constructor(year: number, month: number, date: number, hour: number, minute: number, second: number, nano: number)
            /**
             * Constructs a <code>Timestamp</code> object
             * using a milliseconds time value. The
             * integral seconds are stored in the underlying date value; the
             * fractional seconds are stored in the <code>nanos</code> field of
             * the <code>Timestamp</code> object.
             */
            // @ts-ignore
            constructor(time: number)
            /**
             * Sets this <code>Timestamp</code> object to represent a point in time that is
             * <tt>time</tt> milliseconds after January 1, 1970 00:00:00 GMT.
             */
            // @ts-ignore
            public setTime(time: number): void;
            /**
             * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT
             * represented by this <code>Timestamp</code> object.
             */
            // @ts-ignore
            public getTime(): number;
            /**
             * Converts a <code>String</code> object in JDBC timestamp escape format to a
             * <code>Timestamp</code> value.
             */
            // @ts-ignore
            public static valueOf(s: string): java.sql.Timestamp;
            /**
             * Formats a timestamp in JDBC timestamp escape format.
             * <code>yyyy-mm-dd hh:mm:ss.fffffffff</code>,
             * where <code>ffffffffff</code> indicates nanoseconds.
             * <P>
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Gets this <code>Timestamp</code> object's <code>nanos</code> value.
             */
            // @ts-ignore
            public getNanos(): number;
            /**
             * Sets this <code>Timestamp</code> object's <code>nanos</code> field
             * to the given value.
             */
            // @ts-ignore
            public setNanos(n: number): void;
            /**
             * Tests to see if this <code>Timestamp</code> object is
             * equal to the given <code>Timestamp</code> object.
             */
            // @ts-ignore
            public equals(ts: java.sql.Timestamp): boolean;
            /**
             * Tests to see if this <code>Timestamp</code> object is
             * equal to the given object.
             * This version of the method <code>equals</code> has been added
             * to fix the incorrect
             * signature of <code>Timestamp.equals(Timestamp)</code> and to preserve backward
             * compatibility with existing class files.
             * Note: This method is not symmetric with respect to the
             * <code>equals(Object)</code> method in the base class.
             */
            // @ts-ignore
            public equals(ts: java.lang.Object): boolean;
            /**
             * Indicates whether this <code>Timestamp</code> object is
             * earlier than the given <code>Timestamp</code> object.
             */
            // @ts-ignore
            public before(ts: java.sql.Timestamp): boolean;
            /**
             * Indicates whether this <code>Timestamp</code> object is
             * later than the given <code>Timestamp</code> object.
             */
            // @ts-ignore
            public after(ts: java.sql.Timestamp): boolean;
            /**
             * Compares this <code>Timestamp</code> object to the given
             * <code>Timestamp</code> object.
             */
            // @ts-ignore
            public compareTo(ts: java.sql.Timestamp): number;
            /**
             * Compares this <code>Timestamp</code> object to the given
             * <code>Date</code> object.
             */
            // @ts-ignore
            public compareTo(o: java.util.Date): number;
            /**
             * {@inheritDoc}
             * The {@code hashCode} method uses the underlying {@code java.util.Date}
             * implementation and therefore does not include nanos in its computation.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Obtains an instance of {@code Timestamp} from a {@code LocalDateTime}
             * object, with the same year, month, day of month, hours, minutes,
             * seconds and nanos date-time value as the provided {@code LocalDateTime}.
             * <p>
             * The provided {@code LocalDateTime} is interpreted as the local
             * date-time in the local time zone.
             */
            // @ts-ignore
            public static valueOf(dateTime: java.time.LocalDateTime): java.sql.Timestamp;
            /**
             * Converts this {@code Timestamp} object to a {@code LocalDateTime}.
             * <p>
             * The conversion creates a {@code LocalDateTime} that represents the
             * same year, month, day of month, hours, minutes, seconds and nanos
             * date-time value as this {@code Timestamp} in the local time zone.
             */
            // @ts-ignore
            public toLocalDateTime(): java.time.LocalDateTime;
            /**
             * Obtains an instance of {@code Timestamp} from an {@link Instant} object.
             * <p>
             * {@code Instant} can store points on the time-line further in the future
             * and further in the past than {@code Date}. In this scenario, this method
             * will throw an exception.
             */
            // @ts-ignore
            public static from(instant: java.time.Instant): java.sql.Timestamp;
            /**
             * Converts this {@code Timestamp} object to an {@code Instant}.
             * <p>
             * The conversion creates an {@code Instant} that represents the same
             * point on the time-line as this {@code Timestamp}.
             */
            // @ts-ignore
            public toInstant(): java.time.Instant;
        }
    }
}
