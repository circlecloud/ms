// @ts-nocheck
declare namespace java {
    namespace util {
        namespace spi {
            // @ts-ignore
            abstract class CurrencyNameProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Gets the symbol of the given currency code for the specified locale.
                 * For example, for "USD" (US Dollar), the symbol is "$" if the specified
                 * locale is the US, while for other locales it may be "US$". If no
                 * symbol can be determined, null should be returned.
                 */
                // @ts-ignore
                public abstract getSymbol(currencyCode: string, locale: java.util.Locale): string;
                /**
                 * Returns a name for the currency that is appropriate for display to the
                 * user.  The default implementation returns null.
                 */
                // @ts-ignore
                public getDisplayName(currencyCode: string, locale: java.util.Locale): string;
            }
        }
    }
}
