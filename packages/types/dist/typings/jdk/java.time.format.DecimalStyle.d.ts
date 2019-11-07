declare namespace java {
    namespace time {
        namespace format {
            // @ts-ignore
             class DecimalStyle extends java.lang.Object {
                // @ts-ignore
                public static STANDARD: java.time.format.DecimalStyle;
                /**
                 * Lists all the locales that are supported.
                 * <p>
                 * The locale 'en_US' will always be present.
                 */
                // @ts-ignore
                public static getAvailableLocales(): java.util.Set;
                /**
                 * Obtains the DecimalStyle for the default
                 * {@link java.util.Locale.Category#FORMAT FORMAT} locale.
                 * <p>
                 * This method provides access to locale sensitive decimal style symbols.
                 * <p>
                 * This is equivalent to calling
                 * {@link #of(Locale)
                 * of(Locale.getDefault(Locale.Category.FORMAT))}.
                 */
                // @ts-ignore
                public static ofDefaultLocale(): java.time.format.DecimalStyle;
                /**
                 * Obtains the DecimalStyle for the specified locale.
                 * <p>
                 * This method provides access to locale sensitive decimal style symbols.
                 */
                // @ts-ignore
                public static of(locale: java.util.Locale): java.time.format.DecimalStyle;
                /**
                 * Gets the character that represents zero.
                 * <p>
                 * The character used to represent digits may vary by culture.
                 * This method specifies the zero character to use, which implies the characters for one to nine.
                 */
                // @ts-ignore
                public getZeroDigit(): string;
                /**
                 * Returns a copy of the info with a new character that represents zero.
                 * <p>
                 * The character used to represent digits may vary by culture.
                 * This method specifies the zero character to use, which implies the characters for one to nine.
                 */
                // @ts-ignore
                public withZeroDigit(zeroDigit: string): java.time.format.DecimalStyle;
                /**
                 * Gets the character that represents the positive sign.
                 * <p>
                 * The character used to represent a positive number may vary by culture.
                 * This method specifies the character to use.
                 */
                // @ts-ignore
                public getPositiveSign(): string;
                /**
                 * Returns a copy of the info with a new character that represents the positive sign.
                 * <p>
                 * The character used to represent a positive number may vary by culture.
                 * This method specifies the character to use.
                 */
                // @ts-ignore
                public withPositiveSign(positiveSign: string): java.time.format.DecimalStyle;
                /**
                 * Gets the character that represents the negative sign.
                 * <p>
                 * The character used to represent a negative number may vary by culture.
                 * This method specifies the character to use.
                 */
                // @ts-ignore
                public getNegativeSign(): string;
                /**
                 * Returns a copy of the info with a new character that represents the negative sign.
                 * <p>
                 * The character used to represent a negative number may vary by culture.
                 * This method specifies the character to use.
                 */
                // @ts-ignore
                public withNegativeSign(negativeSign: string): java.time.format.DecimalStyle;
                /**
                 * Gets the character that represents the decimal point.
                 * <p>
                 * The character used to represent a decimal point may vary by culture.
                 * This method specifies the character to use.
                 */
                // @ts-ignore
                public getDecimalSeparator(): string;
                /**
                 * Returns a copy of the info with a new character that represents the decimal point.
                 * <p>
                 * The character used to represent a decimal point may vary by culture.
                 * This method specifies the character to use.
                 */
                // @ts-ignore
                public withDecimalSeparator(decimalSeparator: string): java.time.format.DecimalStyle;
                /**
                 * Checks if this DecimalStyle is equal to another DecimalStyle.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * A hash code for this DecimalStyle.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string describing this DecimalStyle.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
