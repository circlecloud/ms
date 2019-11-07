// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Currency extends java.lang.Object {
            /**
             * Returns the <code>Currency</code> instance for the given currency code.
             */
            // @ts-ignore
            public static getInstance(currencyCode: string): java.util.Currency;
            /**
             * Returns the <code>Currency</code> instance for the country of the
             * given locale. The language and variant components of the locale
             * are ignored. The result may vary over time, as countries change their
             * currencies. For example, for the original member countries of the
             * European Monetary Union, the method returns the old national currencies
             * until December 31, 2001, and the Euro from January 1, 2002, local time
             * of the respective countries.
             * <p>
             * The method returns <code>null</code> for territories that don't
             * have a currency, such as Antarctica.
             */
            // @ts-ignore
            public static getInstance(locale: java.util.Locale): java.util.Currency;
            /**
             * Gets the set of available currencies.  The returned set of currencies
             * contains all of the available currencies, which may include currencies
             * that represent obsolete ISO 4217 codes.  The set can be modified
             * without affecting the available currencies in the runtime.
             */
            // @ts-ignore
            public static getAvailableCurrencies(): java.util.Set;
            /**
             * Gets the ISO 4217 currency code of this currency.
             */
            // @ts-ignore
            public getCurrencyCode(): string;
            /**
             * Gets the symbol of this currency for the default
             * {@link Locale.Category#DISPLAY DISPLAY} locale.
             * For example, for the US Dollar, the symbol is "$" if the default
             * locale is the US, while for other locales it may be "US$". If no
             * symbol can be determined, the ISO 4217 currency code is returned.
             * <p>
             * This is equivalent to calling
             * {@link #getSymbol(Locale)
             * getSymbol(Locale.getDefault(Locale.Category.DISPLAY))}.
             */
            // @ts-ignore
            public getSymbol(): string;
            /**
             * Gets the symbol of this currency for the specified locale.
             * For example, for the US Dollar, the symbol is "$" if the specified
             * locale is the US, while for other locales it may be "US$". If no
             * symbol can be determined, the ISO 4217 currency code is returned.
             */
            // @ts-ignore
            public getSymbol(locale: java.util.Locale): string;
            /**
             * Gets the default number of fraction digits used with this currency.
             * For example, the default number of fraction digits for the Euro is 2,
             * while for the Japanese Yen it's 0.
             * In the case of pseudo-currencies, such as IMF Special Drawing Rights,
             * -1 is returned.
             */
            // @ts-ignore
            public getDefaultFractionDigits(): number;
            /**
             * Returns the ISO 4217 numeric code of this currency.
             */
            // @ts-ignore
            public getNumericCode(): number;
            /**
             * Gets the name that is suitable for displaying this currency for
             * the default {@link Locale.Category#DISPLAY DISPLAY} locale.
             * If there is no suitable display name found
             * for the default locale, the ISO 4217 currency code is returned.
             * <p>
             * This is equivalent to calling
             * {@link #getDisplayName(Locale)
             * getDisplayName(Locale.getDefault(Locale.Category.DISPLAY))}.
             */
            // @ts-ignore
            public getDisplayName(): string;
            /**
             * Gets the name that is suitable for displaying this currency for
             * the specified locale.  If there is no suitable display name found
             * for the specified locale, the ISO 4217 currency code is returned.
             */
            // @ts-ignore
            public getDisplayName(locale: java.util.Locale): string;
            /**
             * Returns the ISO 4217 currency code of this currency.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
