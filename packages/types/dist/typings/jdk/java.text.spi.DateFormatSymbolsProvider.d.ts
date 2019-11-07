// @ts-nocheck
declare namespace java {
    namespace text {
        namespace spi {
            // @ts-ignore
            abstract class DateFormatSymbolsProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a new <code>DateFormatSymbols</code> instance for the
                 * specified locale.
                 */
                // @ts-ignore
                public abstract getInstance(locale: java.util.Locale): java.text.DateFormatSymbols;
            }
        }
    }
}
