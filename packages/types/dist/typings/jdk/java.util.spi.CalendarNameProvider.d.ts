declare namespace java {
    namespace util {
        namespace spi {
            // @ts-ignore
            abstract class CalendarNameProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor. (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the string representation (display name) of the calendar
                 * <code>field value</code> in the given <code>style</code> and
                 * <code>locale</code>.  If no string representation is
                 * applicable, <code>null</code> is returned.
                 * <p>{@code field} is a {@code Calendar} field index, such as {@link
                 * Calendar#MONTH}. The time zone fields, {@link Calendar#ZONE_OFFSET} and
                 * {@link Calendar#DST_OFFSET}, are <em>not</em> supported by this
                 * method. {@code null} must be returned if any time zone fields are
                 * specified.
                 * <p>{@code value} is the numeric representation of the {@code field} value.
                 * For example, if {@code field} is {@link Calendar#DAY_OF_WEEK}, the valid
                 * values are {@link Calendar#SUNDAY} to {@link Calendar#SATURDAY}
                 * (inclusive).
                 * <p>{@code style} gives the style of the string representation. It is one
                 * of {@link Calendar#SHORT_FORMAT} ({@link Calendar#SHORT SHORT}),
                 * {@link Calendar#SHORT_STANDALONE}, {@link Calendar#LONG_FORMAT}
                 * ({@link Calendar#LONG LONG}), {@link Calendar#LONG_STANDALONE},
                 * {@link Calendar#NARROW_FORMAT}, or {@link Calendar#NARROW_STANDALONE}.
                 * <p>For example, the following call will return {@code "Sunday"}.
                 * <pre>
                 * getDisplayName("gregory", Calendar.DAY_OF_WEEK, Calendar.SUNDAY,
                 * Calendar.LONG_STANDALONE, Locale.ENGLISH);
                 * </pre>
                 */
                // @ts-ignore
                public abstract getDisplayName(calendarType: string, field: number, value: number, style: number, locale: java.util.Locale): string;
                /**
                 * Returns a {@code Map} containing all string representations (display
                 * names) of the {@code Calendar} {@code field} in the given {@code style}
                 * and {@code locale} and their corresponding field values.
                 * <p>{@code field} is a {@code Calendar} field index, such as {@link
                 * Calendar#MONTH}. The time zone fields, {@link Calendar#ZONE_OFFSET} and
                 * {@link Calendar#DST_OFFSET}, are <em>not</em> supported by this
                 * method. {@code null} must be returned if any time zone fields are specified.
                 * <p>{@code style} gives the style of the string representation. It must be
                 * one of {@link Calendar#ALL_STYLES}, {@link Calendar#SHORT_FORMAT} ({@link
                 * Calendar#SHORT SHORT}), {@link Calendar#SHORT_STANDALONE}, {@link
                 * Calendar#LONG_FORMAT} ({@link Calendar#LONG LONG}), {@link
                 * Calendar#LONG_STANDALONE}, {@link Calendar#NARROW_FORMAT}, or
                 * {@link Calendar#NARROW_STANDALONE}. Note that narrow names may
                 * not be unique due to use of single characters, such as "S" for Sunday
                 * and Saturday, and that no narrow names are included in that case.
                 * <p>For example, the following call will return a {@code Map} containing
                 * {@code "January"} to {@link Calendar#JANUARY}, {@code "Jan"} to {@link
                 * Calendar#JANUARY}, {@code "February"} to {@link Calendar#FEBRUARY},
                 * {@code "Feb"} to {@link Calendar#FEBRUARY}, and so on.
                 * <pre>
                 * getDisplayNames("gregory", Calendar.MONTH, Calendar.ALL_STYLES, Locale.ENGLISH);
                 * </pre>
                 */
                // @ts-ignore
                public abstract getDisplayNames(calendarType: string, field: number, style: number, locale: java.util.Locale): java.util.Map;
            }
        }
    }
}
