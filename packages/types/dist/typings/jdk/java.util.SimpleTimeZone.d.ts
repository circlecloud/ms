// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class SimpleTimeZone extends java.util.TimeZone {
            /**
             * Constructs a SimpleTimeZone with the given base time zone offset from GMT
             * and time zone ID with no daylight saving time schedule.
             */
            // @ts-ignore
            constructor(rawOffset: number, ID: string)
            /**
             * Constructs a SimpleTimeZone with the given base time zone offset from
             * GMT, time zone ID, and rules for starting and ending the daylight
             * time.
             * Both <code>startTime</code> and <code>endTime</code> are specified to be
             * represented in the wall clock time. The amount of daylight saving is
             * assumed to be 3600000 milliseconds (i.e., one hour). This constructor is
             * equivalent to:
             * <pre><code>
             * SimpleTimeZone(rawOffset,
             * ID,
             * startMonth,
             * startDay,
             * startDayOfWeek,
             * startTime,
             * SimpleTimeZone.{@link #WALL_TIME},
             * endMonth,
             * endDay,
             * endDayOfWeek,
             * endTime,
             * SimpleTimeZone.{@link #WALL_TIME},
             * 3600000)
             * </code></pre>
             */
            // @ts-ignore
            constructor(rawOffset: number, ID: string, startMonth: number, startDay: number, startDayOfWeek: number, startTime: number, endMonth: number, endDay: number, endDayOfWeek: number, endTime: number)
            /**
             * Constructs a SimpleTimeZone with the given base time zone offset from
             * GMT, time zone ID, and rules for starting and ending the daylight
             * time.
             * Both <code>startTime</code> and <code>endTime</code> are assumed to be
             * represented in the wall clock time. This constructor is equivalent to:
             * <pre><code>
             * SimpleTimeZone(rawOffset,
             * ID,
             * startMonth,
             * startDay,
             * startDayOfWeek,
             * startTime,
             * SimpleTimeZone.{@link #WALL_TIME},
             * endMonth,
             * endDay,
             * endDayOfWeek,
             * endTime,
             * SimpleTimeZone.{@link #WALL_TIME},
             * dstSavings)
             * </code></pre>
             */
            // @ts-ignore
            constructor(rawOffset: number, ID: string, startMonth: number, startDay: number, startDayOfWeek: number, startTime: number, endMonth: number, endDay: number, endDayOfWeek: number, endTime: number, dstSavings: number)
            /**
             * Constructs a SimpleTimeZone with the given base time zone offset from
             * GMT, time zone ID, and rules for starting and ending the daylight
             * time.
             * This constructor takes the full set of the start and end rules
             * parameters, including modes of <code>startTime</code> and
             * <code>endTime</code>. The mode specifies either {@link #WALL_TIME wall
             * time} or {@link #STANDARD_TIME standard time} or {@link #UTC_TIME UTC
             * time}.
             */
            // @ts-ignore
            constructor(rawOffset: number, ID: string, startMonth: number, startDay: number, startDayOfWeek: number, startTime: number, startTimeMode: number, endMonth: number, endDay: number, endDayOfWeek: number, endTime: number, endTimeMode: number, dstSavings: number)
            // @ts-ignore
            public static WALL_TIME: number;
            // @ts-ignore
            public static STANDARD_TIME: number;
            // @ts-ignore
            public static UTC_TIME: number;
            /**
             * Sets the daylight saving time starting year.
             */
            // @ts-ignore
            public setStartYear(year: number): void;
            /**
             * Sets the daylight saving time start rule. For example, if daylight saving
             * time starts on the first Sunday in April at 2 am in local wall clock
             * time, you can set the start rule by calling:
             * <pre><code>setStartRule(Calendar.APRIL, 1, Calendar.SUNDAY, 2*60*60*1000);</code></pre>
             */
            // @ts-ignore
            public setStartRule(startMonth: number, startDay: number, startDayOfWeek: number, startTime: number): void;
            /**
             * Sets the daylight saving time start rule to a fixed date within a month.
             * This method is equivalent to:
             * <pre><code>setStartRule(startMonth, startDay, 0, startTime)</code></pre>
             */
            // @ts-ignore
            public setStartRule(startMonth: number, startDay: number, startTime: number): void;
            /**
             * Sets the daylight saving time start rule to a weekday before or after the given date within
             * a month, e.g., the first Monday on or after the 8th.
             */
            // @ts-ignore
            public setStartRule(startMonth: number, startDay: number, startDayOfWeek: number, startTime: number, after: boolean): void;
            /**
             * Sets the daylight saving time end rule. For example, if daylight saving time
             * ends on the last Sunday in October at 2 am in wall clock time,
             * you can set the end rule by calling:
             * <code>setEndRule(Calendar.OCTOBER, -1, Calendar.SUNDAY, 2*60*60*1000);</code>
             */
            // @ts-ignore
            public setEndRule(endMonth: number, endDay: number, endDayOfWeek: number, endTime: number): void;
            /**
             * Sets the daylight saving time end rule to a fixed date within a month.
             * This method is equivalent to:
             * <pre><code>setEndRule(endMonth, endDay, 0, endTime)</code></pre>
             */
            // @ts-ignore
            public setEndRule(endMonth: number, endDay: number, endTime: number): void;
            /**
             * Sets the daylight saving time end rule to a weekday before or after the given date within
             * a month, e.g., the first Monday on or after the 8th.
             */
            // @ts-ignore
            public setEndRule(endMonth: number, endDay: number, endDayOfWeek: number, endTime: number, after: boolean): void;
            /**
             * Returns the offset of this time zone from UTC at the given
             * time. If daylight saving time is in effect at the given time,
             * the offset value is adjusted with the amount of daylight
             * saving.
             */
            // @ts-ignore
            public getOffset(date: number): number;
            /**
             * Returns the difference in milliseconds between local time and
             * UTC, taking into account both the raw offset and the effect of
             * daylight saving, for the specified date and time.  This method
             * assumes that the start and end month are distinct.  It also
             * uses a default {@link GregorianCalendar} object as its
             * underlying calendar, such as for determining leap years.  Do
             * not use the result of this method with a calendar other than a
             * default <code>GregorianCalendar</code>.
             * <p><em>Note:  In general, clients should use
             * <code>Calendar.get(ZONE_OFFSET) + Calendar.get(DST_OFFSET)</code>
             * instead of calling this method.</em>
             */
            // @ts-ignore
            public getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, millis: number): number;
            /**
             * Gets the GMT offset for this time zone.
             */
            // @ts-ignore
            public getRawOffset(): number;
            /**
             * Sets the base time zone offset to GMT.
             * This is the offset to add to UTC to get local time.
             */
            // @ts-ignore
            public setRawOffset(offsetMillis: number): void;
            /**
             * Sets the amount of time in milliseconds that the clock is advanced
             * during daylight saving time.
             */
            // @ts-ignore
            public setDSTSavings(millisSavedDuringDST: number): void;
            /**
             * Returns the amount of time in milliseconds that the clock is
             * advanced during daylight saving time.
             */
            // @ts-ignore
            public getDSTSavings(): number;
            /**
             * Queries if this time zone uses daylight saving time.
             */
            // @ts-ignore
            public useDaylightTime(): boolean;
            /**
             * Returns {@code true} if this {@code SimpleTimeZone} observes
             * Daylight Saving Time. This method is equivalent to {@link
             * #useDaylightTime()}.
             */
            // @ts-ignore
            public observesDaylightTime(): boolean;
            /**
             * Queries if the given date is in daylight saving time.
             */
            // @ts-ignore
            public inDaylightTime(date: java.util.Date): boolean;
            /**
             * Returns a clone of this <code>SimpleTimeZone</code> instance.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Generates the hash code for the SimpleDateFormat object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares the equality of two <code>SimpleTimeZone</code> objects.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns <code>true</code> if this zone has the same rules and offset as another zone.
             */
            // @ts-ignore
            public hasSameRules(other: java.util.TimeZone): boolean;
            /**
             * Returns a string representation of this time zone.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
