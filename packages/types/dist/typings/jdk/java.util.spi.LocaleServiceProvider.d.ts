// @ts-nocheck
declare namespace java {
    namespace util {
        namespace spi {
            // @ts-ignore
            abstract class LocaleServiceProvider extends java.lang.Object {
                /**
                 * Sole constructor.  (For invocation by subclass constructors, typically
                 * implicit.)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns an array of all locales for which this locale service provider
                 * can provide localized objects or names. This information is used to
                 * compose {@code getAvailableLocales()} values of the locale-dependent
                 * services, such as {@code DateFormat.getAvailableLocales()}.
                 * <p>The array returned by this method should not include two or more
                 * {@code Locale} objects only differing in their extensions.
                 */
                // @ts-ignore
                public abstract getAvailableLocales(): java.util.Locale[];
                /**
                 * Returns {@code true} if the given {@code locale} is supported by
                 * this locale service provider. The given {@code locale} may contain
                 * <a href="../Locale.html#def_extensions">extensions</a> that should be
                 * taken into account for the support determination.
                 * <p>The default implementation returns {@code true} if the given {@code locale}
                 * is equal to any of the available {@code Locale}s returned by
                 * {@link #getAvailableLocales()} with ignoring any extensions in both the
                 * given {@code locale} and the available locales. Concrete locale service
                 * provider implementations should override this method if those
                 * implementations are {@code Locale} extensions-aware. For example,
                 * {@code DecimalFormatSymbolsProvider} implementations will need to check
                 * extensions in the given {@code locale} to see if any numbering system is
                 * specified and can be supported. However, {@code CollatorProvider}
                 * implementations may not be affected by any particular numbering systems,
                 * and in that case, extensions for numbering systems should be ignored.
                 */
                // @ts-ignore
                public isSupportedLocale(locale: java.util.Locale): boolean;
            }
        }
    }
}
