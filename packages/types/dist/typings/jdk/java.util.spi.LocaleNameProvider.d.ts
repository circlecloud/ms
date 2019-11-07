declare namespace java {
    namespace util {
        namespace spi {
            // @ts-ignore
            abstract class LocaleNameProvider extends java.util.spi.LocaleServiceProvider {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns a localized name for the given <a href="http://www.rfc-editor.org/rfc/bcp/bcp47.txt">
                 * IETF BCP47</a> language code and the given locale that is appropriate for
                 * display to the user.
                 * For example, if <code>languageCode</code> is "fr" and <code>locale</code>
                 * is en_US, getDisplayLanguage() will return "French"; if <code>languageCode</code>
                 * is "en" and <code>locale</code> is fr_FR, getDisplayLanguage() will return "anglais".
                 * If the name returned cannot be localized according to <code>locale</code>,
                 * (say, the provider does not have a Japanese name for Croatian),
                 * this method returns null.
                 */
                // @ts-ignore
                public abstract getDisplayLanguage(languageCode: string, locale: java.util.Locale): string;
                /**
                 * Returns a localized name for the given <a href="http://www.rfc-editor.org/rfc/bcp/bcp47.txt">
                 * IETF BCP47</a> script code and the given locale that is appropriate for
                 * display to the user.
                 * For example, if <code>scriptCode</code> is "Latn" and <code>locale</code>
                 * is en_US, getDisplayScript() will return "Latin"; if <code>scriptCode</code>
                 * is "Cyrl" and <code>locale</code> is fr_FR, getDisplayScript() will return "cyrillique".
                 * If the name returned cannot be localized according to <code>locale</code>,
                 * (say, the provider does not have a Japanese name for Cyrillic),
                 * this method returns null. The default implementation returns null.
                 */
                // @ts-ignore
                public getDisplayScript(scriptCode: string, locale: java.util.Locale): string;
                /**
                 * Returns a localized name for the given <a href="http://www.rfc-editor.org/rfc/bcp/bcp47.txt">
                 * IETF BCP47</a> region code (either ISO 3166 country code or UN M.49 area
                 * codes) and the given locale that is appropriate for display to the user.
                 * For example, if <code>countryCode</code> is "FR" and <code>locale</code>
                 * is en_US, getDisplayCountry() will return "France"; if <code>countryCode</code>
                 * is "US" and <code>locale</code> is fr_FR, getDisplayCountry() will return "Etats-Unis".
                 * If the name returned cannot be localized according to <code>locale</code>,
                 * (say, the provider does not have a Japanese name for Croatia),
                 * this method returns null.
                 */
                // @ts-ignore
                public abstract getDisplayCountry(countryCode: string, locale: java.util.Locale): string;
                /**
                 * Returns a localized name for the given variant code and the given locale that
                 * is appropriate for display to the user.
                 * If the name returned cannot be localized according to <code>locale</code>,
                 * this method returns null.
                 */
                // @ts-ignore
                public abstract getDisplayVariant(variant: string, locale: java.util.Locale): string;
            }
        }
    }
}
