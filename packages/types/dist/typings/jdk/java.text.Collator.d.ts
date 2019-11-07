// @ts-nocheck
declare namespace java {
    namespace text {
        // @ts-ignore
        abstract class Collator extends java.lang.Object {
            /**
             * Default constructor.  This constructor is
             * protected so subclasses can get access to it. Users typically create
             * a Collator sub-class by calling the factory method getInstance.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static PRIMARY: number;
            // @ts-ignore
            public static SECONDARY: number;
            // @ts-ignore
            public static TERTIARY: number;
            // @ts-ignore
            public static IDENTICAL: number;
            // @ts-ignore
            public static NO_DECOMPOSITION: number;
            // @ts-ignore
            public static CANONICAL_DECOMPOSITION: number;
            // @ts-ignore
            public static FULL_DECOMPOSITION: number;
            /**
             * Gets the Collator for the current default locale.
             * The default locale is determined by java.util.Locale.getDefault.
             */
            // @ts-ignore
            public static getInstance(): java.text.Collator;
            /**
             * Gets the Collator for the desired locale.
             */
            // @ts-ignore
            public static getInstance(desiredLocale: java.util.Locale): java.text.Collator;
            /**
             * Compares the source string to the target string according to the
             * collation rules for this Collator.  Returns an integer less than,
             * equal to or greater than zero depending on whether the source String is
             * less than, equal to or greater than the target string.  See the Collator
             * class description for an example of use.
             * <p>
             * For a one time comparison, this method has the best performance. If a
             * given String will be involved in multiple comparisons, CollationKey.compareTo
             * has the best performance. See the Collator class description for an example
             * using CollationKeys.
             */
            // @ts-ignore
            public abstract compare(source: string, target: string): number;
            /**
             * Compares its two arguments for order.  Returns a negative integer,
             * zero, or a positive integer as the first argument is less than, equal
             * to, or greater than the second.
             * <p>
             * This implementation merely returns
             * <code> compare((String)o1, (String)o2) </code>.
             */
            // @ts-ignore
            public compare(o1: java.lang.Object, o2: java.lang.Object): number;
            /**
             * Transforms the String into a series of bits that can be compared bitwise
             * to other CollationKeys. CollationKeys provide better performance than
             * Collator.compare when Strings are involved in multiple comparisons.
             * See the Collator class description for an example using CollationKeys.
             */
            // @ts-ignore
            public abstract getCollationKey(source: string): java.text.CollationKey;
            /**
             * Convenience method for comparing the equality of two strings based on
             * this Collator's collation rules.
             */
            // @ts-ignore
            public equals(source: string, target: string): boolean;
            /**
             * Returns this Collator's strength property.  The strength property determines
             * the minimum level of difference considered significant during comparison.
             * See the Collator class description for an example of use.
             */
            // @ts-ignore
            public getStrength(): number;
            /**
             * Sets this Collator's strength property.  The strength property determines
             * the minimum level of difference considered significant during comparison.
             * See the Collator class description for an example of use.
             */
            // @ts-ignore
            public setStrength(newStrength: number): void;
            /**
             * Get the decomposition mode of this Collator. Decomposition mode
             * determines how Unicode composed characters are handled. Adjusting
             * decomposition mode allows the user to select between faster and more
             * complete collation behavior.
             * <p>The three values for decomposition mode are:
             * <UL>
             * <LI>NO_DECOMPOSITION,
             * <LI>CANONICAL_DECOMPOSITION
             * <LI>FULL_DECOMPOSITION.
             * </UL>
             * See the documentation for these three constants for a description
             * of their meaning.
             */
            // @ts-ignore
            public getDecomposition(): number;
            /**
             * Set the decomposition mode of this Collator. See getDecomposition
             * for a description of decomposition mode.
             */
            // @ts-ignore
            public setDecomposition(decompositionMode: number): void;
            /**
             * Returns an array of all locales for which the
             * <code>getInstance</code> methods of this class can return
             * localized instances.
             * The returned array represents the union of locales supported
             * by the Java runtime and by installed
             * {@link java.text.spi.CollatorProvider CollatorProvider} implementations.
             * It must contain at least a Locale instance equal to
             * {@link java.util.Locale#US Locale.US}.
             */
            // @ts-ignore
            public static getAvailableLocales(): java.util.Locale[];
            /**
             * Overrides Cloneable
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Compares the equality of two Collators.
             */
            // @ts-ignore
            public equals(that: java.lang.Object): boolean;
            /**
             * Generates the hash code for this Collator.
             */
            // @ts-ignore
            public abstract hashCode(): number;
        }
    }
}
