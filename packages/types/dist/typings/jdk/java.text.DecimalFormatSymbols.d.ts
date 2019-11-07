// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
         class DecimalFormatSymbols extends java.lang.Object {
            /**
             * Create a DecimalFormatSymbols object for the default
             * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
             * This constructor can only construct instances for the locales
             * supported by the Java runtime environment, not for those
             * supported by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider}
             * implementations. For full locale coverage, use the
             * {@link #getInstance(Locale) getInstance} method.
             * <p>This is equivalent to calling
             * {@link #DecimalFormatSymbols(Locale)
             * DecimalFormatSymbols(Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            constructor()
            /**
             * Create a DecimalFormatSymbols object for the given locale.
             * This constructor can only construct instances for the locales
             * supported by the Java runtime environment, not for those
             * supported by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider}
             * implementations. For full locale coverage, use the
             * {@link #getInstance(Locale) getInstance} method.
             * If the specified locale contains the {@link java.util.Locale#UNICODE_LOCALE_EXTENSION}
             * for the numbering system, the instance is initialized with the specified numbering
             * system if the JRE implementation supports it. For example,
             * <pre>
             * NumberFormat.getNumberInstance(Locale.forLanguageTag("th-TH-u-nu-thai"))
             * </pre>
             * This may return a {@code NumberFormat} instance with the Thai numbering system,
             * instead of the Latin numbering system.
             */
            // @ts-ignore
            constructor(locale: java.util.Locale)
            /**
             * Returns an array of all locales for which the
             * <code>getInstance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported by the Java
             * runtime and by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider}
             * implementations.  It must contain at least a <code>Locale</code>
             * instance equal to {@link java.util.Locale#US Locale.US}.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[];
            /**
             * Gets the <code>DecimalFormatSymbols</code> instance for the default
             * locale.  This method provides access to <code>DecimalFormatSymbols</code>
             * instances for locales supported by the Java runtime itself as well
             * as for those supported by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider
             * DecimalFormatSymbolsProvider} implementations.
             * <p>This is equivalent to calling
             * {@link #getInstance(Locale)
             * getInstance(Locale.getDefault(Locale.Category.FORMAT))}.
             */
            // @ts-ignore
            public static getInstance(): java.text.DecimalFormatSymbols;
            /**
             * Gets the <code>DecimalFormatSymbols</code> instance for the specified
             * locale.  This method provides access to <code>DecimalFormatSymbols</code>
             * instances for locales supported by the Java runtime itself as well
             * as for those supported by installed
             * {@link java.text.spi.DecimalFormatSymbolsProvider
             * DecimalFormatSymbolsProvider} implementations.
             * If the specified locale contains the {@link java.util.Locale#UNICODE_LOCALE_EXTENSION}
             * for the numbering system, the instance is initialized with the specified numbering
             * system if the JRE implementation supports it. For example,
             * <pre>
             * NumberFormat.getNumberInstance(Locale.forLanguageTag("th-TH-u-nu-thai"))
             * </pre>
             * This may return a {@code NumberFormat} instance with the Thai numbering system,
             * instead of the Latin numbering system.
             */
            // @ts-ignore
            public static getInstance(locale: java.util.Locale): java.text.DecimalFormatSymbols;
            /**
             * Gets the character used for zero. Different for Arabic, etc.
             */
            // @ts-ignore
            public getZeroDigit(): string;
            /**
             * Sets the character used for zero. Different for Arabic, etc.
             */
            // @ts-ignore
            public setZeroDigit(zeroDigit: string): void;
            /**
             * Gets the character used for thousands separator. Different for French, etc.
             */
            // @ts-ignore
            public getGroupingSeparator(): string;
            /**
             * Sets the character used for thousands separator. Different for French, etc.
             */
            // @ts-ignore
            public setGroupingSeparator(groupingSeparator: string): void;
            /**
             * Gets the character used for decimal sign. Different for French, etc.
             */
            // @ts-ignore
            public getDecimalSeparator(): string;
            /**
             * Sets the character used for decimal sign. Different for French, etc.
             */
            // @ts-ignore
            public setDecimalSeparator(decimalSeparator: string): void;
            /**
             * Gets the character used for per mille sign. Different for Arabic, etc.
             */
            // @ts-ignore
            public getPerMill(): string;
            /**
             * Sets the character used for per mille sign. Different for Arabic, etc.
             */
            // @ts-ignore
            public setPerMill(perMill: string): void;
            /**
             * Gets the character used for percent sign. Different for Arabic, etc.
             */
            // @ts-ignore
            public getPercent(): string;
            /**
             * Sets the character used for percent sign. Different for Arabic, etc.
             */
            // @ts-ignore
            public setPercent(percent: string): void;
            /**
             * Gets the character used for a digit in a pattern.
             */
            // @ts-ignore
            public getDigit(): string;
            /**
             * Sets the character used for a digit in a pattern.
             */
            // @ts-ignore
            public setDigit(digit: string): void;
            /**
             * Gets the character used to separate positive and negative subpatterns
             * in a pattern.
             */
            // @ts-ignore
            public getPatternSeparator(): string;
            /**
             * Sets the character used to separate positive and negative subpatterns
             * in a pattern.
             */
            // @ts-ignore
            public setPatternSeparator(patternSeparator: string): void;
            /**
             * Gets the string used to represent infinity. Almost always left
             * unchanged.
             */
            // @ts-ignore
            public getInfinity(): string;
            /**
             * Sets the string used to represent infinity. Almost always left
             * unchanged.
             */
            // @ts-ignore
            public setInfinity(infinity: string): void;
            /**
             * Gets the string used to represent "not a number". Almost always left
             * unchanged.
             */
            // @ts-ignore
            public getNaN(): string;
            /**
             * Sets the string used to represent "not a number". Almost always left
             * unchanged.
             */
            // @ts-ignore
            public setNaN(NaN: string): void;
            /**
             * Gets the character used to represent minus sign. If no explicit
             * negative format is specified, one is formed by prefixing
             * minusSign to the positive format.
             */
            // @ts-ignore
            public getMinusSign(): string;
            /**
             * Sets the character used to represent minus sign. If no explicit
             * negative format is specified, one is formed by prefixing
             * minusSign to the positive format.
             */
            // @ts-ignore
            public setMinusSign(minusSign: string): void;
            /**
             * Returns the currency symbol for the currency of these
             * DecimalFormatSymbols in their locale.
             */
            // @ts-ignore
            public getCurrencySymbol(): string;
            /**
             * Sets the currency symbol for the currency of these
             * DecimalFormatSymbols in their locale.
             */
            // @ts-ignore
            public setCurrencySymbol(currency: string): void;
            /**
             * Returns the ISO 4217 currency code of the currency of these
             * DecimalFormatSymbols.
             */
            // @ts-ignore
            public getInternationalCurrencySymbol(): string;
            /**
             * Sets the ISO 4217 currency code of the currency of these
             * DecimalFormatSymbols.
             * If the currency code is valid (as defined by
             * {@link java.util.Currency#getInstance(java.lang.String) Currency.getInstance}),
             * this also sets the currency attribute to the corresponding Currency
             * instance and the currency symbol attribute to the currency's symbol
             * in the DecimalFormatSymbols' locale. If the currency code is not valid,
             * then the currency attribute is set to null and the currency symbol
             * attribute is not modified.
             */
            // @ts-ignore
            public setInternationalCurrencySymbol(currencyCode: string): void;
            /**
             * Gets the currency of these DecimalFormatSymbols. May be null if the
             * currency symbol attribute was previously set to a value that's not
             * a valid ISO 4217 currency code.
             */
            // @ts-ignore
            public getCurrency(): java.util.Currency;
            /**
             * Sets the currency of these DecimalFormatSymbols.
             * This also sets the currency symbol attribute to the currency's symbol
             * in the DecimalFormatSymbols' locale, and the international currency
             * symbol attribute to the currency's ISO 4217 currency code.
             */
            // @ts-ignore
            public setCurrency(currency: java.util.Currency): void;
            /**
             * Returns the monetary decimal separator.
             */
            // @ts-ignore
            public getMonetaryDecimalSeparator(): string;
            /**
             * Sets the monetary decimal separator.
             */
            // @ts-ignore
            public setMonetaryDecimalSeparator(sep: string): void;
            /**
             * Returns the string used to separate the mantissa from the exponent.
             * Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.
             */
            // @ts-ignore
            public getExponentSeparator(): string;
            /**
             * Sets the string used to separate the mantissa from the exponent.
             * Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.
             */
            // @ts-ignore
            public setExponentSeparator(exp: string): void;
            /**
             * Standard override.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Override equals.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Override hashCode.
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
