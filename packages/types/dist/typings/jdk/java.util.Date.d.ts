// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Date extends java.lang.Object {
            /**
             * Allocates a <code>Date</code> object and initializes it so that
             * it represents the time at which it was allocated, measured to the
             * nearest millisecond.
             */
            // @ts-ignore
            constructor()
            /**
             * Allocates a <code>Date</code> object and initializes it to
             * represent the specified number of milliseconds since the
             * standard base time known as "the epoch", namely January 1,
             * 1970, 00:00:00 GMT.
             */
            // @ts-ignore
            constructor(date: number)
            /**
             * Allocates a <code>Date</code> object and initializes it so that
             * it represents midnight, local time, at the beginning of the day
             * specified by the <code>year</code>, <code>month</code>, and
             * <code>date</code> arguments.
             */
            // @ts-ignore
            constructor(year: number, month: number, date: number)
            /**
             * Allocates a <code>Date</code> object and initializes it so that
             * it represents the instant at the start of the minute specified by
             * the <code>year</code>, <code>month</code>, <code>date</code>,
             * <code>hrs</code>, and <code>min</code> arguments, in the local
             * time zone.
             */
            // @ts-ignore
            constructor(year: number, month: number, date: number, hrs: number, min: number)
            /**
             * Allocates a <code>Date</code> object and initializes it so that
             * it represents the instant at the start of the second specified
             * by the <code>year</code>, <code>month</code>, <code>date</code>,
             * <code>hrs</code>, <code>min</code>, and <code>sec</code> arguments,
             * in the local time zone.
             */
            // @ts-ignore
            constructor(year: number, month: number, date: number, hrs: number, min: number, sec: number)
            /**
             * Allocates a <code>Date</code> object and initializes it so that
             * it represents the date and time indicated by the string
             * <code>s</code>, which is interpreted as if by the
             * {@link Date#parse} method.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Return a copy of this object.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Determines the date and time based on the arguments. The
             * arguments are interpreted as a year, month, day of the month,
             * hour of the day, minute within the hour, and second within the
             * minute, exactly as for the <tt>Date</tt> constructor with six
             * arguments, except that the arguments are interpreted relative
             * to UTC rather than to the local time zone. The time indicated is
             * returned represented as the distance, measured in milliseconds,
             * of that time from the epoch (00:00:00 GMT on January 1, 1970).
             */
            // @ts-ignore
            public static UTC(year: number, month: number, date: number, hrs: number, min: number, sec: number): number;
            /**
             * Attempts to interpret the string <tt>s</tt> as a representation
             * of a date and time. If the attempt is successful, the time
             * indicated is returned represented as the distance, measured in
             * milliseconds, of that time from the epoch (00:00:00 GMT on
             * January 1, 1970). If the attempt fails, an
             * <tt>IllegalArgumentException</tt> is thrown.
             * <p>
             * It accepts many syntaxes; in particular, it recognizes the IETF
             * standard date syntax: "Sat, 12 Aug 1995 13:30:00 GMT". It also
             * understands the continental U.S. time-zone abbreviations, but for
             * general use, a time-zone offset should be used: "Sat, 12 Aug 1995
             * 13:30:00 GMT+0430" (4 hours, 30 minutes west of the Greenwich
             * meridian). If no time zone is specified, the local time zone is
             * assumed. GMT and UTC are considered equivalent.
             * <p>
             * The string <tt>s</tt> is processed from left to right, looking for
             * data of interest. Any material in <tt>s</tt> that is within the
             * ASCII parenthesis characters <tt>(</tt> and <tt>)</tt> is ignored.
             * Parentheses may be nested. Otherwise, the only characters permitted
             * within <tt>s</tt> are these ASCII characters:
             * <blockquote><pre>
             * abcdefghijklmnopqrstuvwxyz
             * ABCDEFGHIJKLMNOPQRSTUVWXYZ
             * 0123456789,+-:/</pre></blockquote>
             * and whitespace characters.<p>
             * A consecutive sequence of decimal digits is treated as a decimal
             * number:<ul>
             * <li>If a number is preceded by <tt>+</tt> or <tt>-</tt> and a year
             * has already been recognized, then the number is a time-zone
             * offset. If the number is less than 24, it is an offset measured
             * in hours. Otherwise, it is regarded as an offset in minutes,
             * expressed in 24-hour time format without punctuation. A
             * preceding <tt>-</tt> means a westward offset. Time zone offsets
             * are always relative to UTC (Greenwich). Thus, for example,
             * <tt>-5</tt> occurring in the string would mean "five hours west
             * of Greenwich" and <tt>+0430</tt> would mean "four hours and
             * thirty minutes east of Greenwich." It is permitted for the
             * string to specify <tt>GMT</tt>, <tt>UT</tt>, or <tt>UTC</tt>
             * redundantly-for example, <tt>GMT-5</tt> or <tt>utc+0430</tt>.
             * <li>The number is regarded as a year number if one of the
             * following conditions is true:
             * <ul>
             * <li>The number is equal to or greater than 70 and followed by a
             * space, comma, slash, or end of string
             * <li>The number is less than 70, and both a month and a day of
             * the month have already been recognized</li>
             * </ul>
             * If the recognized year number is less than 100, it is
             * interpreted as an abbreviated year relative to a century of
             * which dates are within 80 years before and 19 years after
             * the time when the Date class is initialized.
             * After adjusting the year number, 1900 is subtracted from
             * it. For example, if the current year is 1999 then years in
             * the range 19 to 99 are assumed to mean 1919 to 1999, while
             * years from 0 to 18 are assumed to mean 2000 to 2018.  Note
             * that this is slightly different from the interpretation of
             * years less than 100 that is used in {@link java.text.SimpleDateFormat}.
             * <li>If the number is followed by a colon, it is regarded as an hour,
             * unless an hour has already been recognized, in which case it is
             * regarded as a minute.
             * <li>If the number is followed by a slash, it is regarded as a month
             * (it is decreased by 1 to produce a number in the range <tt>0</tt>
             * to <tt>11</tt>), unless a month has already been recognized, in
             * which case it is regarded as a day of the month.
             * <li>If the number is followed by whitespace, a comma, a hyphen, or
             * end of string, then if an hour has been recognized but not a
             * minute, it is regarded as a minute; otherwise, if a minute has
             * been recognized but not a second, it is regarded as a second;
             * otherwise, it is regarded as a day of the month. </ul><p>
             * A consecutive sequence of letters is regarded as a word and treated
             * as follows:<ul>
             * <li>A word that matches <tt>AM</tt>, ignoring case, is ignored (but
             * the parse fails if an hour has not been recognized or is less
             * than <tt>1</tt> or greater than <tt>12</tt>).
             * <li>A word that matches <tt>PM</tt>, ignoring case, adds <tt>12</tt>
             * to the hour (but the parse fails if an hour has not been
             * recognized or is less than <tt>1</tt> or greater than <tt>12</tt>).
             * <li>Any word that matches any prefix of <tt>SUNDAY, MONDAY, TUESDAY,
             * WEDNESDAY, THURSDAY, FRIDAY</tt>, or <tt>SATURDAY</tt>, ignoring
             * case, is ignored. For example, <tt>sat, Friday, TUE</tt>, and
             * <tt>Thurs</tt> are ignored.
             * <li>Otherwise, any word that matches any prefix of <tt>JANUARY,
             * FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER,
             * OCTOBER, NOVEMBER</tt>, or <tt>DECEMBER</tt>, ignoring case, and
             * considering them in the order given here, is recognized as
             * specifying a month and is converted to a number (<tt>0</tt> to
             * <tt>11</tt>). For example, <tt>aug, Sept, april</tt>, and
             * <tt>NOV</tt> are recognized as months. So is <tt>Ma</tt>, which
             * is recognized as <tt>MARCH</tt>, not <tt>MAY</tt>.
             * <li>Any word that matches <tt>GMT, UT</tt>, or <tt>UTC</tt>, ignoring
             * case, is treated as referring to UTC.
             * <li>Any word that matches <tt>EST, CST, MST</tt>, or <tt>PST</tt>,
             * ignoring case, is recognized as referring to the time zone in
             * North America that is five, six, seven, or eight hours west of
             * Greenwich, respectively. Any word that matches <tt>EDT, CDT,
             * MDT</tt>, or <tt>PDT</tt>, ignoring case, is recognized as
             * referring to the same time zone, respectively, during daylight
             * saving time.</ul><p>
             * Once the entire string s has been scanned, it is converted to a time
             * result in one of two ways. If a time zone or time-zone offset has been
             * recognized, then the year, month, day of month, hour, minute, and
             * second are interpreted in UTC and then the time-zone offset is
             * applied. Otherwise, the year, month, day of month, hour, minute, and
             * second are interpreted in the local time zone.
             */
            // @ts-ignore
            public static parse(s: string): number;
            /**
             * Returns a value that is the result of subtracting 1900 from the
             * year that contains or begins with the instant in time represented
             * by this <code>Date</code> object, as interpreted in the local
             * time zone.
             */
            // @ts-ignore
            public getYear(): number;
            /**
             * Sets the year of this <tt>Date</tt> object to be the specified
             * value plus 1900. This <code>Date</code> object is modified so
             * that it represents a point in time within the specified year,
             * with the month, date, hour, minute, and second the same as
             * before, as interpreted in the local time zone. (Of course, if
             * the date was February 29, for example, and the year is set to a
             * non-leap year, then the new date will be treated as if it were
             * on March 1.)
             */
            // @ts-ignore
            public setYear(year: number): void;
            /**
             * Returns a number representing the month that contains or begins
             * with the instant in time represented by this <tt>Date</tt> object.
             * The value returned is between <code>0</code> and <code>11</code>,
             * with the value <code>0</code> representing January.
             */
            // @ts-ignore
            public getMonth(): number;
            /**
             * Sets the month of this date to the specified value. This
             * <tt>Date</tt> object is modified so that it represents a point
             * in time within the specified month, with the year, date, hour,
             * minute, and second the same as before, as interpreted in the
             * local time zone. If the date was October 31, for example, and
             * the month is set to June, then the new date will be treated as
             * if it were on July 1, because June has only 30 days.
             */
            // @ts-ignore
            public setMonth(month: number): void;
            /**
             * Returns the day of the month represented by this <tt>Date</tt> object.
             * The value returned is between <code>1</code> and <code>31</code>
             * representing the day of the month that contains or begins with the
             * instant in time represented by this <tt>Date</tt> object, as
             * interpreted in the local time zone.
             */
            // @ts-ignore
            public getDate(): number;
            /**
             * Sets the day of the month of this <tt>Date</tt> object to the
             * specified value. This <tt>Date</tt> object is modified so that
             * it represents a point in time within the specified day of the
             * month, with the year, month, hour, minute, and second the same
             * as before, as interpreted in the local time zone. If the date
             * was April 30, for example, and the date is set to 31, then it
             * will be treated as if it were on May 1, because April has only
             * 30 days.
             */
            // @ts-ignore
            public setDate(date: number): void;
            /**
             * Returns the day of the week represented by this date. The
             * returned value (<tt>0</tt> = Sunday, <tt>1</tt> = Monday,
             * <tt>2</tt> = Tuesday, <tt>3</tt> = Wednesday, <tt>4</tt> =
             * Thursday, <tt>5</tt> = Friday, <tt>6</tt> = Saturday)
             * represents the day of the week that contains or begins with
             * the instant in time represented by this <tt>Date</tt> object,
             * as interpreted in the local time zone.
             */
            // @ts-ignore
            public getDay(): number;
            /**
             * Returns the hour represented by this <tt>Date</tt> object. The
             * returned value is a number (<tt>0</tt> through <tt>23</tt>)
             * representing the hour within the day that contains or begins
             * with the instant in time represented by this <tt>Date</tt>
             * object, as interpreted in the local time zone.
             */
            // @ts-ignore
            public getHours(): number;
            /**
             * Sets the hour of this <tt>Date</tt> object to the specified value.
             * This <tt>Date</tt> object is modified so that it represents a point
             * in time within the specified hour of the day, with the year, month,
             * date, minute, and second the same as before, as interpreted in the
             * local time zone.
             */
            // @ts-ignore
            public setHours(hours: number): void;
            /**
             * Returns the number of minutes past the hour represented by this date,
             * as interpreted in the local time zone.
             * The value returned is between <code>0</code> and <code>59</code>.
             */
            // @ts-ignore
            public getMinutes(): number;
            /**
             * Sets the minutes of this <tt>Date</tt> object to the specified value.
             * This <tt>Date</tt> object is modified so that it represents a point
             * in time within the specified minute of the hour, with the year, month,
             * date, hour, and second the same as before, as interpreted in the
             * local time zone.
             */
            // @ts-ignore
            public setMinutes(minutes: number): void;
            /**
             * Returns the number of seconds past the minute represented by this date.
             * The value returned is between <code>0</code> and <code>61</code>. The
             * values <code>60</code> and <code>61</code> can only occur on those
             * Java Virtual Machines that take leap seconds into account.
             */
            // @ts-ignore
            public getSeconds(): number;
            /**
             * Sets the seconds of this <tt>Date</tt> to the specified value.
             * This <tt>Date</tt> object is modified so that it represents a
             * point in time within the specified second of the minute, with
             * the year, month, date, hour, and minute the same as before, as
             * interpreted in the local time zone.
             */
            // @ts-ignore
            public setSeconds(seconds: number): void;
            /**
             * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT
             * represented by this <tt>Date</tt> object.
             */
            // @ts-ignore
            public getTime(): number;
            /**
             * Sets this <code>Date</code> object to represent a point in time that is
             * <code>time</code> milliseconds after January 1, 1970 00:00:00 GMT.
             */
            // @ts-ignore
            public setTime(time: number): void;
            /**
             * Tests if this date is before the specified date.
             */
            // @ts-ignore
            public before(when: java.util.Date): boolean;
            /**
             * Tests if this date is after the specified date.
             */
            // @ts-ignore
            public after(when: java.util.Date): boolean;
            /**
             * Compares two dates for equality.
             * The result is <code>true</code> if and only if the argument is
             * not <code>null</code> and is a <code>Date</code> object that
             * represents the same point in time, to the millisecond, as this object.
             * <p>
             * Thus, two <code>Date</code> objects are equal if and only if the
             * <code>getTime</code> method returns the same <code>long</code>
             * value for both.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Compares two Dates for ordering.
             */
            // @ts-ignore
            public compareTo(anotherDate: java.util.Date): number;
            /**
             * Returns a hash code value for this object. The result is the
             * exclusive OR of the two halves of the primitive <tt>long</tt>
             * value returned by the {@link Date#getTime}
             * method. That is, the hash code is the value of the expression:
             * <blockquote><pre>{@code
             * (int)(this.getTime()^(this.getTime() >>> 32))
             * }</pre></blockquote>
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Converts this <code>Date</code> object to a <code>String</code>
             * of the form:
             * <blockquote><pre>
             * dow mon dd hh:mm:ss zzz yyyy</pre></blockquote>
             * where:<ul>
             * <li><tt>dow</tt> is the day of the week (<tt>Sun, Mon, Tue, Wed,
             * Thu, Fri, Sat</tt>).
             * <li><tt>mon</tt> is the month (<tt>Jan, Feb, Mar, Apr, May, Jun,
             * Jul, Aug, Sep, Oct, Nov, Dec</tt>).
             * <li><tt>dd</tt> is the day of the month (<tt>01</tt> through
             * <tt>31</tt>), as two decimal digits.
             * <li><tt>hh</tt> is the hour of the day (<tt>00</tt> through
             * <tt>23</tt>), as two decimal digits.
             * <li><tt>mm</tt> is the minute within the hour (<tt>00</tt> through
             * <tt>59</tt>), as two decimal digits.
             * <li><tt>ss</tt> is the second within the minute (<tt>00</tt> through
             * <tt>61</tt>, as two decimal digits.
             * <li><tt>zzz</tt> is the time zone (and may reflect daylight saving
             * time). Standard time zone abbreviations include those
             * recognized by the method <tt>parse</tt>. If time zone
             * information is not available, then <tt>zzz</tt> is empty -
             * that is, it consists of no characters at all.
             * <li><tt>yyyy</tt> is the year, as four decimal digits.
             * </ul>
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Creates a string representation of this <tt>Date</tt> object in an
             * implementation-dependent form. The intent is that the form should
             * be familiar to the user of the Java application, wherever it may
             * happen to be running. The intent is comparable to that of the
             * "<code>%c</code>" format supported by the <code>strftime()</code>
             * function of ISO&nbsp;C.
             */
            // @ts-ignore
            public toLocaleString(): string;
            /**
             * Creates a string representation of this <tt>Date</tt> object of
             * the form:
             * <blockquote><pre>
             * d mon yyyy hh:mm:ss GMT</pre></blockquote>
             * where:<ul>
             * <li><i>d</i> is the day of the month (<tt>1</tt> through <tt>31</tt>),
             * as one or two decimal digits.
             * <li><i>mon</i> is the month (<tt>Jan, Feb, Mar, Apr, May, Jun, Jul,
             * Aug, Sep, Oct, Nov, Dec</tt>).
             * <li><i>yyyy</i> is the year, as four decimal digits.
             * <li><i>hh</i> is the hour of the day (<tt>00</tt> through <tt>23</tt>),
             * as two decimal digits.
             * <li><i>mm</i> is the minute within the hour (<tt>00</tt> through
             * <tt>59</tt>), as two decimal digits.
             * <li><i>ss</i> is the second within the minute (<tt>00</tt> through
             * <tt>61</tt>), as two decimal digits.
             * <li><i>GMT</i> is exactly the ASCII letters "<tt>GMT</tt>" to indicate
             * Greenwich Mean Time.
             * </ul><p>
             * The result does not depend on the local time zone.
             */
            // @ts-ignore
            public toGMTString(): string;
            /**
             * Returns the offset, measured in minutes, for the local time zone
             * relative to UTC that is appropriate for the time represented by
             * this <code>Date</code> object.
             * <p>
             * For example, in Massachusetts, five time zones west of Greenwich:
             * <blockquote><pre>
             * new Date(96, 1, 14).getTimezoneOffset() returns 300</pre></blockquote>
             * because on February 14, 1996, standard time (Eastern Standard Time)
             * is in use, which is offset five hours from UTC; but:
             * <blockquote><pre>
             * new Date(96, 5, 1).getTimezoneOffset() returns 240</pre></blockquote>
             * because on June 1, 1996, daylight saving time (Eastern Daylight Time)
             * is in use, which is offset only four hours from UTC.<p>
             * This method produces the same result as if it computed:
             * <blockquote><pre>
             * (this.getTime() - UTC(this.getYear(),
             * this.getMonth(),
             * this.getDate(),
             * this.getHours(),
             * this.getMinutes(),
             * this.getSeconds())) / (60 * 1000)
             * </pre></blockquote>
             */
            // @ts-ignore
            public getTimezoneOffset(): number;
            /**
             * Obtains an instance of {@code Date} from an {@code Instant} object.
             * <p>
             * {@code Instant} uses a precision of nanoseconds, whereas {@code Date}
             * uses a precision of milliseconds.  The conversion will trancate any
             * excess precision information as though the amount in nanoseconds was
             * subject to integer division by one million.
             * <p>
             * {@code Instant} can store points on the time-line further in the future
             * and further in the past than {@code Date}. In this scenario, this method
             * will throw an exception.
             */
            // @ts-ignore
            public static from(instant: java.time.Instant): java.util.Date;
            /**
             * Converts this {@code Date} object to an {@code Instant}.
             * <p>
             * The conversion creates an {@code Instant} that represents the same
             * point on the time-line as this {@code Date}.
             */
            // @ts-ignore
            public toInstant(): java.time.Instant;
        }
    }
}
