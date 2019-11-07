declare namespace java {
    namespace text {
        namespace spi {
            // @ts-ignore
            abstract class DateFormatProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new <code>DateFormat</code> instance which formats time
                 * with the given formatting style for the specified locale.
                 */
                // @ts-ignore
                public abstract getTimeInstance(style: number, locale: java.util.Locale): java.text.DateFormat;
                /**
                 * Returns a new <code>DateFormat</code> instance which formats date
                 * with the given formatting style for the specified locale.
                 */
                // @ts-ignore
                public abstract getDateInstance(style: number, locale: java.util.Locale): java.text.DateFormat;
                /**
                 * Returns a new <code>DateFormat</code> instance which formats date and time
                 * with the given formatting style for the specified locale.
                 */
                // @ts-ignore
                public abstract getDateTimeInstance(dateStyle: number, timeStyle: number, locale: java.util.Locale): java.text.DateFormat;
            }
        }
    }
}
