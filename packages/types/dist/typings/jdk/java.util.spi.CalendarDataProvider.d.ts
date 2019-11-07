declare namespace java {
    namespace util {
        namespace spi {
            // @ts-ignore
            abstract class CalendarDataProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor. (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the first day of a week in the given {@code locale}. This
                 * information is required by {@link Calendar} to support operations on the
                 * week-related calendar fields.
                 */
                // @ts-ignore
                public abstract getFirstDayOfWeek(locale: java.util.Locale): number;
                /**
                 * Returns the minimal number of days required in the first week of a
                 * year. This information is required by {@link Calendar} to determine the
                 * first week of a year. Refer to the description of <a
                 * href="../Calendar.html#first_week"> how {@code Calendar} determines
                 * the first week</a>.
                 */
                // @ts-ignore
                public abstract getMinimalDaysInFirstWeek(locale: java.util.Locale): number;
            }
        }
    }
}
