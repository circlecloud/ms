declare namespace java {
    namespace text {
        // @ts-ignore
         class DateFormatSymbols extends java.lang.Object {
            /**
             * Construct a DateFormatSymbols object by loading format data from
             * resources for the default {@link java.util.Locale.Category#FORMAT FORMAT}
             * locale. This constructor can only
             * construct instances for the locales supported by the Java
             * runtime environment, not for those supported by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations. For full locale coverage, use the
             * {@link #getInstance(Locale) getInstance} method.
             * <p>This is equivalent to calling
             * {@link #DateFormatSymbols(Locale)
             * DateFormatSymbols(Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            constructor()
            /**
             * Construct a DateFormatSymbols object by loading format data from
             * resources for the given locale. This constructor can only
             * construct instances for the locales supported by the Java
             * runtime environment, not for those supported by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations. For full locale coverage, use the
             * {@link #getInstance(Locale) getInstance} method.
             */
            // @ts-ignore
            constructor(locale: java.util.Locale)
            /**
             * Returns an array of all locales for which the
             * <code>getInstance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported by the
             * Java runtime and by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations.  It must contain at least a <code>Locale</code>
             * instance equal to {@link java.util.Locale#US Locale.US}.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[];
            /**
             * Gets the <code>DateFormatSymbols</code> instance for the default
             * locale.  This method provides access to <code>DateFormatSymbols</code>
             * instances for locales supported by the Java runtime itself as well
             * as for those supported by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations.
             * <p>This is equivalent to calling {@link #getInstance(Locale)
             * getInstance(Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getInstance(): java.text.DateFormatSymbols;
            /**
             * Gets the <code>DateFormatSymbols</code> instance for the specified
             * locale.  This method provides access to <code>DateFormatSymbols</code>
             * instances for locales supported by the Java runtime itself as well
             * as for those supported by installed
             * {@link java.text.spi.DateFormatSymbolsProvider DateFormatSymbolsProvider}
             * implementations.
             */
            // @ts-ignore
            public static getInstance(locale: java.util.Locale): java.text.DateFormatSymbols;
            /**
             * Gets era strings. For example: "AD" and "BC".
             */
            // @ts-ignore
            public getEras(): java.lang.String[];
            /**
             * Sets era strings. For example: "AD" and "BC".
             */
            // @ts-ignore
            public setEras(newEras: string): void;
            /**
             * Gets month strings. For example: "January", "February", etc.
             * <p>If the language requires different forms for formatting and
             * stand-alone usages, this method returns month names in the
             * formatting form. For example, the preferred month name for
             * January in the Czech language is <em>ledna</em> in the
             * formatting form, while it is <em>leden</em> in the stand-alone
             * form. This method returns {@code "ledna"} in this case. Refer
             * to the <a href="http://unicode.org/reports/tr35/#Calendar_Elements">
             * Calendar Elements in the Unicode Locale Data Markup Language
             * (LDML) specification</a> for more details.
             */
            // @ts-ignore
            public getMonths(): java.lang.String[];
            /**
             * Sets month strings. For example: "January", "February", etc.
             */
            // @ts-ignore
            public setMonths(newMonths: string): void;
            /**
             * Gets short month strings. For example: "Jan", "Feb", etc.
             * <p>If the language requires different forms for formatting and
             * stand-alone usages, This method returns short month names in
             * the formatting form. For example, the preferred abbreviation
             * for January in the Catalan language is <em>de gen.</em> in the
             * formatting form, while it is <em>gen.</em> in the stand-alone
             * form. This method returns {@code "de gen."} in this case. Refer
             * to the <a href="http://unicode.org/reports/tr35/#Calendar_Elements">
             * Calendar Elements in the Unicode Locale Data Markup Language
             * (LDML) specification</a> for more details.
             */
            // @ts-ignore
            public getShortMonths(): java.lang.String[];
            /**
             * Sets short month strings. For example: "Jan", "Feb", etc.
             */
            // @ts-ignore
            public setShortMonths(newShortMonths: string): void;
            /**
             * Gets weekday strings. For example: "Sunday", "Monday", etc.
             */
            // @ts-ignore
            public getWeekdays(): java.lang.String[];
            /**
             * Sets weekday strings. For example: "Sunday", "Monday", etc.
             */
            // @ts-ignore
            public setWeekdays(newWeekdays: string): void;
            /**
             * Gets short weekday strings. For example: "Sun", "Mon", etc.
             */
            // @ts-ignore
            public getShortWeekdays(): java.lang.String[];
            /**
             * Sets short weekday strings. For example: "Sun", "Mon", etc.
             */
            // @ts-ignore
            public setShortWeekdays(newShortWeekdays: string): void;
            /**
             * Gets ampm strings. For example: "AM" and "PM".
             */
            // @ts-ignore
            public getAmPmStrings(): java.lang.String[];
            /**
             * Sets ampm strings. For example: "AM" and "PM".
             */
            // @ts-ignore
            public setAmPmStrings(newAmpms: string): void;
            /**
             * Gets time zone strings.  Use of this method is discouraged; use
             * {@link java.util.TimeZone#getDisplayName() TimeZone.getDisplayName()}
             * instead.
             * <p>
             * The value returned is a
             * two-dimensional array of strings of size <em>n</em> by <em>m</em>,
             * where <em>m</em> is at least 5.  Each of the <em>n</em> rows is an
             * entry containing the localized names for a single <code>TimeZone</code>.
             * Each such row contains (with <code>i</code> ranging from
             * 0..<em>n</em>-1):
             * <ul>
             * <li><code>zoneStrings[i][0]</code> - time zone ID</li>
             * <li><code>zoneStrings[i][1]</code> - long name of zone in standard
             * time</li>
             * <li><code>zoneStrings[i][2]</code> - short name of zone in
             * standard time</li>
             * <li><code>zoneStrings[i][3]</code> - long name of zone in daylight
             * saving time</li>
             * <li><code>zoneStrings[i][4]</code> - short name of zone in daylight
             * saving time</li>
             * </ul>
             * The zone ID is <em>not</em> localized; it's one of the valid IDs of
             * the {@link java.util.TimeZone TimeZone} class that are not
             * <a href="../util/TimeZone.html#CustomID">custom IDs</a>.
             * All other entries are localized names.  If a zone does not implement
             * daylight saving time, the daylight saving time names should not be used.
             * <p>
             * If {@link #setZoneStrings(String[][]) setZoneStrings} has been called
             * on this <code>DateFormatSymbols</code> instance, then the strings
             * provided by that call are returned. Otherwise, the returned array
             * contains names provided by the Java runtime and by installed
             * {@link java.util.spi.TimeZoneNameProvider TimeZoneNameProvider}
             * implementations.
             */
            // @ts-ignore
            public getZoneStrings(): java.lang.String[][];
            /**
             * Sets time zone strings.  The argument must be a
             * two-dimensional array of strings of size <em>n</em> by <em>m</em>,
             * where <em>m</em> is at least 5.  Each of the <em>n</em> rows is an
             * entry containing the localized names for a single <code>TimeZone</code>.
             * Each such row contains (with <code>i</code> ranging from
             * 0..<em>n</em>-1):
             * <ul>
             * <li><code>zoneStrings[i][0]</code> - time zone ID</li>
             * <li><code>zoneStrings[i][1]</code> - long name of zone in standard
             * time</li>
             * <li><code>zoneStrings[i][2]</code> - short name of zone in
             * standard time</li>
             * <li><code>zoneStrings[i][3]</code> - long name of zone in daylight
             * saving time</li>
             * <li><code>zoneStrings[i][4]</code> - short name of zone in daylight
             * saving time</li>
             * </ul>
             * The zone ID is <em>not</em> localized; it's one of the valid IDs of
             * the {@link java.util.TimeZone TimeZone} class that are not
             * <a href="../util/TimeZone.html#CustomID">custom IDs</a>.
             * All other entries are localized names.
             */
            // @ts-ignore
            public setZoneStrings(newZoneStrings: string): void;
            /**
             * Gets localized date-time pattern characters. For example: 'u', 't', etc.
             */
            // @ts-ignore
            public getLocalPatternChars(): string;
            /**
             * Sets localized date-time pattern characters. For example: 'u', 't', etc.
             */
            // @ts-ignore
            public setLocalPatternChars(newLocalPatternChars: string): void;
            /**
             * Overrides Cloneable
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Override hashCode.
             * Generates a hash code for the DateFormatSymbols object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Override equals
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
        }
    }
}
