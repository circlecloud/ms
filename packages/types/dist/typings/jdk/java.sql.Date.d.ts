declare namespace java {
    namespace sql {
        // @ts-ignore
         class Date extends java.util.Date {
            /**
             * Constructs a <code>Date</code> object initialized with the given
             * year, month, and day.
             * <P>
             * The result is undefined if a given argument is out of bounds.
             */
            // @ts-ignore
            constructor(year: number, month: number, day: number)
            /**
             * Constructs a <code>Date</code> object using the given milliseconds
             * time value.  If the given milliseconds value contains time
             * information, the driver will set the time components to the
             * time in the default time zone (the time zone of the Java virtual
             * machine running the application) that corresponds to zero GMT.
             */
            // @ts-ignore
            constructor(date: number)
            /**
             * Sets an existing <code>Date</code> object
             * using the given milliseconds time value.
             * If the given milliseconds value contains time information,
             * the driver will set the time components to the
             * time in the default time zone (the time zone of the Java virtual
             * machine running the application) that corresponds to zero GMT.
             */
            // @ts-ignore
            public setTime(date: number): void;
            /**
             * Converts a string in JDBC date escape format to
             * a <code>Date</code> value.
             */
            // @ts-ignore
            public static valueOf(s: string): java.sql.Date;
            /**
             * Formats a date in the date escape format yyyy-mm-dd.
             * <P>
             */
            // @ts-ignore
            public toString(): string;
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             */
            // @ts-ignore
            public getHours(): number;
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             */
            // @ts-ignore
            public getMinutes(): number;
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             */
            // @ts-ignore
            public getSeconds(): number;
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             */
            // @ts-ignore
            public setHours(i: number): void;
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             */
            // @ts-ignore
            public setMinutes(i: number): void;
            /**
             * This method is deprecated and should not be used because SQL Date
             * values do not have a time component.
             */
            // @ts-ignore
            public setSeconds(i: number): void;
            /**
             * Obtains an instance of {@code Date} from a {@link LocalDate} object
             * with the same year, month and day of month value as the given
             * {@code LocalDate}.
             * <p>
             * The provided {@code LocalDate} is interpreted as the local date
             * in the local time zone.
             */
            // @ts-ignore
            public static valueOf(date: java.time.LocalDate): java.sql.Date;
            /**
             * Converts this {@code Date} object to a {@code LocalDate}
             * <p>
             * The conversion creates a {@code LocalDate} that represents the same
             * date value as this {@code Date} in local time zone
             */
            // @ts-ignore
            public toLocalDate(): java.time.LocalDate;
            /**
             * This method always throws an UnsupportedOperationException and should
             * not be used because SQL {@code Date} values do not have a time
             * component.
             */
            // @ts-ignore
            public toInstant(): java.time.Instant;
        }
    }
}
