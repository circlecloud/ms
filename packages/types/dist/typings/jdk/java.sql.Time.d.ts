declare namespace java {
    namespace sql {
        // @ts-ignore
         class Time extends java.util.Date {
            /**
             * Constructs a <code>Time</code> object initialized with the
             * given values for the hour, minute, and second.
             * The driver sets the date components to January 1, 1970.
             * Any method that attempts to access the date components of a
             * <code>Time</code> object will throw a
             * <code>java.lang.IllegalArgumentException</code>.
             * <P>
             * The result is undefined if a given argument is out of bounds.
             */
            // @ts-ignore
            constructor(hour: number, minute: number, second: number)
            /**
             * Constructs a <code>Time</code> object using a milliseconds time value.
             */
            // @ts-ignore
            constructor(time: number)
            /**
             * Sets a <code>Time</code> object using a milliseconds time value.
             */
            // @ts-ignore
            public setTime(time: number): void;
            /**
             * Converts a string in JDBC time escape format to a <code>Time</code> value.
             */
            // @ts-ignore
            public static valueOf(s: string): java.sql.Time;
            /**
             * Formats a time in JDBC time escape format.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a year component.
             */
            // @ts-ignore
            public getYear(): number;
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a month component.
             */
            // @ts-ignore
            public getMonth(): number;
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a day component.
             */
            // @ts-ignore
            public getDay(): number;
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a date component.
             */
            // @ts-ignore
            public getDate(): number;
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a year component.
             */
            // @ts-ignore
            public setYear(i: number): void;
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a month component.
             */
            // @ts-ignore
            public setMonth(i: number): void;
            /**
             * This method is deprecated and should not be used because SQL <code>TIME</code>
             * values do not have a date component.
             */
            // @ts-ignore
            public setDate(i: number): void;
            /**
             * Obtains an instance of {@code Time} from a {@link LocalTime} object
             * with the same hour, minute and second time value as the given
             * {@code LocalTime}.
             */
            // @ts-ignore
            public static valueOf(time: java.time.LocalTime): java.sql.Time;
            /**
             * Converts this {@code Time} object to a {@code LocalTime}.
             * <p>
             * The conversion creates a {@code LocalTime} that represents the same
             * hour, minute, and second time value as this {@code Time}.
             */
            // @ts-ignore
            public toLocalTime(): java.time.LocalTime;
            /**
             * This method always throws an UnsupportedOperationException and should
             * not be used because SQL {@code Time} values do not have a date
             * component.
             */
            // @ts-ignore
            public toInstant(): java.time.Instant;
        }
    }
}
