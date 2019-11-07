declare namespace java {
    namespace util {
        // @ts-ignore
        abstract class TimeZone extends java.lang.Object {
            /**
             * Sole constructor.  (For invocation by subclass constructors, typically
             * implicit.)
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static SHORT: number;
            // @ts-ignore
            public static LONG: number;
            /**
             * Gets the time zone offset, for current date, modified in case of
             * daylight savings. This is the offset to add to UTC to get local time.
             * <p>
             * This method returns a historically correct offset if an
             * underlying <code>TimeZone</code> implementation subclass
             * supports historical Daylight Saving Time schedule and GMT
             * offset changes.
             */
            // @ts-ignore
            public abstract getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, milliseconds: number): number;
            /**
             * Returns the offset of this time zone from UTC at the specified
             * date. If Daylight Saving Time is in effect at the specified
             * date, the offset value is adjusted with the amount of daylight
             * saving.
             * <p>
             * This method returns a historically correct offset value if an
             * underlying TimeZone implementation subclass supports historical
             * Daylight Saving Time schedule and GMT offset changes.
             */
            // @ts-ignore
            public getOffset(date: number): number;
            /**
             * Sets the base time zone offset to GMT.
             * This is the offset to add to UTC to get local time.
             * <p>
             * If an underlying <code>TimeZone</code> implementation subclass
             * supports historical GMT offset changes, the specified GMT
             * offset is set as the latest GMT offset and the difference from
             * the known latest GMT offset value is used to adjust all
             * historical GMT offset values.
             */
            // @ts-ignore
            public abstract setRawOffset(offsetMillis: number): void;
            /**
             * Returns the amount of time in milliseconds to add to UTC to get
             * standard time in this time zone. Because this value is not
             * affected by daylight saving time, it is called <I>raw
             * offset</I>.
             * <p>
             * If an underlying <code>TimeZone</code> implementation subclass
             * supports historical GMT offset changes, the method returns the
             * raw offset value of the current date. In Honolulu, for example,
             * its raw offset changed from GMT-10:30 to GMT-10:00 in 1947, and
             * this method always returns -36000000 milliseconds (i.e., -10
             * hours).
             */
            // @ts-ignore
            public abstract getRawOffset(): number;
            /**
             * Gets the ID of this time zone.
             */
            // @ts-ignore
            public getID(): string;
            /**
             * Sets the time zone ID. This does not change any other data in
             * the time zone object.
             */
            // @ts-ignore
            public setID(ID: string): void;
            /**
             * Returns a long standard time name of this {@code TimeZone} suitable for
             * presentation to the user in the default locale.
             * <p>This method is equivalent to:
             * <blockquote><pre>
             * getDisplayName(false, {@link #LONG},
             * Locale.getDefault({@link Locale.Category#DISPLAY}))
             * </pre></blockquote>
             */
            // @ts-ignore
            public getDisplayName(): string;
            /**
             * Returns a long standard time name of this {@code TimeZone} suitable for
             * presentation to the user in the specified {@code locale}.
             * <p>This method is equivalent to:
             * <blockquote><pre>
             * getDisplayName(false, {@link #LONG}, locale)
             * </pre></blockquote>
             */
            // @ts-ignore
            public getDisplayName(locale: java.util.Locale): string;
            /**
             * Returns a name in the specified {@code style} of this {@code TimeZone}
             * suitable for presentation to the user in the default locale. If the
             * specified {@code daylight} is {@code true}, a Daylight Saving Time name
             * is returned (even if this {@code TimeZone} doesn't observe Daylight Saving
             * Time). Otherwise, a Standard Time name is returned.
             * <p>This method is equivalent to:
             * <blockquote><pre>
             * getDisplayName(daylight, style,
             * Locale.getDefault({@link Locale.Category#DISPLAY}))
             * </pre></blockquote>
             */
            // @ts-ignore
            public getDisplayName(daylight: boolean, style: number): string;
            /**
             * Returns a name in the specified {@code style} of this {@code TimeZone}
             * suitable for presentation to the user in the specified {@code
             * locale}. If the specified {@code daylight} is {@code true}, a Daylight
             * Saving Time name is returned (even if this {@code TimeZone} doesn't
             * observe Daylight Saving Time). Otherwise, a Standard Time name is
             * returned.
             * <p>When looking up a time zone name, the {@linkplain
             * ResourceBundle.Control#getCandidateLocales(String,Locale) default
             * <code>Locale</code> search path of <code>ResourceBundle</code>} derived
             * from the specified {@code locale} is used. (No {@linkplain
             * ResourceBundle.Control#getFallbackLocale(String,Locale) fallback
             * <code>Locale</code>} search is performed.) If a time zone name in any
             * {@code Locale} of the search path, including {@link Locale#ROOT}, is
             * found, the name is returned. Otherwise, a string in the
             * <a href="#NormalizedCustomID">normalized custom ID format</a> is returned.
             */
            // @ts-ignore
            public getDisplayName(daylight: boolean, style: number, locale: java.util.Locale): string;
            /**
             * Returns the amount of time to be added to local standard time
             * to get local wall clock time.
             * <p>The default implementation returns 3600000 milliseconds
             * (i.e., one hour) if a call to {@link #useDaylightTime()}
             * returns {@code true}. Otherwise, 0 (zero) is returned.
             * <p>If an underlying {@code TimeZone} implementation subclass
             * supports historical and future Daylight Saving Time schedule
             * changes, this method returns the amount of saving time of the
             * last known Daylight Saving Time rule that can be a future
             * prediction.
             * <p>If the amount of saving time at any given time stamp is
             * required, construct a {@link Calendar} with this {@code
             * TimeZone} and the time stamp, and call {@link Calendar#get(int)
             * Calendar.get}{@code (}{@link Calendar#DST_OFFSET}{@code )}.
             */
            // @ts-ignore
            public getDSTSavings(): number;
            /**
             * Queries if this {@code TimeZone} uses Daylight Saving Time.
             * <p>If an underlying {@code TimeZone} implementation subclass
             * supports historical and future Daylight Saving Time schedule
             * changes, this method refers to the last known Daylight Saving Time
             * rule that can be a future prediction and may not be the same as
             * the current rule. Consider calling {@link #observesDaylightTime()}
             * if the current rule should also be taken into account.
             */
            // @ts-ignore
            public abstract useDaylightTime(): boolean;
            /**
             * Returns {@code true} if this {@code TimeZone} is currently in
             * Daylight Saving Time, or if a transition from Standard Time to
             * Daylight Saving Time occurs at any future time.
             * <p>The default implementation returns {@code true} if
             * {@code useDaylightTime()} or {@code inDaylightTime(new Date())}
             * returns {@code true}.
             */
            // @ts-ignore
            public observesDaylightTime(): boolean;
            /**
             * Queries if the given {@code date} is in Daylight Saving Time in
             * this time zone.
             */
            // @ts-ignore
            public abstract inDaylightTime(date: java.util.Date): boolean;
            /**
             * Gets the <code>TimeZone</code> for the given ID.
             */
            // @ts-ignore
            public static getTimeZone(ID: string): java.util.TimeZone;
            /**
             * Gets the {@code TimeZone} for the given {@code zoneId}.
             */
            // @ts-ignore
            public static getTimeZone(zoneId: java.time.ZoneId): java.util.TimeZone;
            /**
             * Converts this {@code TimeZone} object to a {@code ZoneId}.
             */
            // @ts-ignore
            public toZoneId(): java.time.ZoneId;
            /**
             * Gets the available IDs according to the given time zone offset in milliseconds.
             */
            // @ts-ignore
            public static getAvailableIDs(rawOffset: number): java.lang.String[];
            /**
             * Gets all the available IDs supported.
             */
            // @ts-ignore
            public static getAvailableIDs(): java.lang.String[];
            /**
             * Gets the default {@code TimeZone} of the Java virtual machine. If the
             * cached default {@code TimeZone} is available, its clone is returned.
             * Otherwise, the method takes the following steps to determine the default
             * time zone.
             * <ul>
             * <li>Use the {@code user.timezone} property value as the default
             * time zone ID if it's available.</li>
             * <li>Detect the platform time zone ID. The source of the
             * platform time zone and ID mapping may vary with implementation.</li>
             * <li>Use {@code GMT} as the last resort if the given or detected
             * time zone ID is unknown.</li>
             * </ul>
             * <p>The default {@code TimeZone} created from the ID is cached,
             * and its clone is returned. The {@code user.timezone} property
             * value is set to the ID upon return.
             */
            // @ts-ignore
            public static getDefault(): java.util.TimeZone;
            /**
             * Sets the {@code TimeZone} that is returned by the {@code getDefault}
             * method. {@code zone} is cached. If {@code zone} is null, the cached
             * default {@code TimeZone} is cleared. This method doesn't change the value
             * of the {@code user.timezone} property.
             */
            // @ts-ignore
            public static setDefault(zone: java.util.TimeZone): void;
            /**
             * Returns true if this zone has the same rule and offset as another zone.
             * That is, if this zone differs only in ID, if at all.  Returns false
             * if the other zone is null.
             */
            // @ts-ignore
            public hasSameRules(other: java.util.TimeZone): boolean;
            /**
             * Creates a copy of this <code>TimeZone</code>.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
