// @ts-nocheck
declare namespace java {
    namespace util {
        namespace spi {
            // @ts-ignore
            abstract class TimeZoneNameProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a name for the given time zone ID that's suitable for
                 * presentation to the user in the specified locale. The given time
                 * zone ID is "GMT" or one of the names defined using "Zone" entries
                 * in the "tz database", a public domain time zone database at
                 * <a href="ftp://elsie.nci.nih.gov/pub/">ftp://elsie.nci.nih.gov/pub/</a>.
                 * The data of this database is contained in a file whose name starts with
                 * "tzdata", and the specification of the data format is part of the zic.8
                 * man page, which is contained in a file whose name starts with "tzcode".
                 * <p>
                 * If <code>daylight</code> is true, the method should return a name
                 * appropriate for daylight saving time even if the specified time zone
                 * has not observed daylight saving time in the past.
                 */
                // @ts-ignore
                public abstract getDisplayName(ID: string, daylight: boolean, style: number, locale: java.util.Locale): string;
                /**
                 * Returns a generic name for the given time zone {@code ID} that's suitable
                 * for presentation to the user in the specified {@code locale}. Generic
                 * time zone names are neutral from standard time and daylight saving
                 * time. For example, "PT" is the short generic name of time zone ID {@code
                 * America/Los_Angeles}, while its short standard time and daylight saving
                 * time names are "PST" and "PDT", respectively. Refer to
                 * {@link #getDisplayName(String, boolean, int, Locale) getDisplayName}
                 * for valid time zone IDs.
                 * <p>The default implementation of this method returns {@code null}.
                 */
                // @ts-ignore
                public getGenericDisplayName(ID: string, style: number, locale: java.util.Locale): string;
            }
        }
    }
}
