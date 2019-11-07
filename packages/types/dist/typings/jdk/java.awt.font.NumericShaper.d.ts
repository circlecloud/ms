// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class NumericShaper extends java.lang.Object {
                // @ts-ignore
                public static EUROPEAN: number;
                // @ts-ignore
                public static ARABIC: number;
                // @ts-ignore
                public static EASTERN_ARABIC: number;
                // @ts-ignore
                public static DEVANAGARI: number;
                // @ts-ignore
                public static BENGALI: number;
                // @ts-ignore
                public static GURMUKHI: number;
                // @ts-ignore
                public static GUJARATI: number;
                // @ts-ignore
                public static ORIYA: number;
                // @ts-ignore
                public static TAMIL: number;
                // @ts-ignore
                public static TELUGU: number;
                // @ts-ignore
                public static KANNADA: number;
                // @ts-ignore
                public static MALAYALAM: number;
                // @ts-ignore
                public static THAI: number;
                // @ts-ignore
                public static LAO: number;
                // @ts-ignore
                public static TIBETAN: number;
                // @ts-ignore
                public static MYANMAR: number;
                // @ts-ignore
                public static ETHIOPIC: number;
                // @ts-ignore
                public static KHMER: number;
                // @ts-ignore
                public static MONGOLIAN: number;
                // @ts-ignore
                public static ALL_RANGES: number;
                /**
                 * Returns a shaper for the provided unicode range.  All
                 * Latin-1 (EUROPEAN) digits are converted
                 * to the corresponding decimal unicode digits.
                 */
                // @ts-ignore
                public static getShaper(singleRange: number): java.awt.font.NumericShaper;
                /**
                 * Returns a shaper for the provided Unicode
                 * range. All Latin-1 (EUROPEAN) digits are converted to the
                 * corresponding decimal digits of the specified Unicode range.
                 */
                // @ts-ignore
                public static getShaper(singleRange: java.awt.font.NumericShaper.Range): java.awt.font.NumericShaper;
                /**
                 * Returns a contextual shaper for the provided unicode range(s).
                 * Latin-1 (EUROPEAN) digits are converted to the decimal digits
                 * corresponding to the range of the preceding text, if the
                 * range is one of the provided ranges.  Multiple ranges are
                 * represented by or-ing the values together, such as,
                 * <code>NumericShaper.ARABIC | NumericShaper.THAI</code>.  The
                 * shaper assumes EUROPEAN as the starting context, that is, if
                 * EUROPEAN digits are encountered before any strong directional
                 * text in the string, the context is presumed to be EUROPEAN, and
                 * so the digits will not shape.
                 */
                // @ts-ignore
                public static getContextualShaper(ranges: number): java.awt.font.NumericShaper;
                /**
                 * Returns a contextual shaper for the provided Unicode
                 * range(s). The Latin-1 (EUROPEAN) digits are converted to the
                 * decimal digits corresponding to the range of the preceding
                 * text, if the range is one of the provided ranges.
                 * <p>The shaper assumes EUROPEAN as the starting context, that
                 * is, if EUROPEAN digits are encountered before any strong
                 * directional text in the string, the context is presumed to be
                 * EUROPEAN, and so the digits will not shape.
                 */
                // @ts-ignore
                public static getContextualShaper(ranges: java.util.Set): java.awt.font.NumericShaper;
                /**
                 * Returns a contextual shaper for the provided unicode range(s).
                 * Latin-1 (EUROPEAN) digits will be converted to the decimal digits
                 * corresponding to the range of the preceding text, if the
                 * range is one of the provided ranges.  Multiple ranges are
                 * represented by or-ing the values together, for example,
                 * <code>NumericShaper.ARABIC | NumericShaper.THAI</code>.  The
                 * shaper uses defaultContext as the starting context.
                 */
                // @ts-ignore
                public static getContextualShaper(ranges: number, defaultContext: number): java.awt.font.NumericShaper;
                /**
                 * Returns a contextual shaper for the provided Unicode range(s).
                 * The Latin-1 (EUROPEAN) digits will be converted to the decimal
                 * digits corresponding to the range of the preceding text, if the
                 * range is one of the provided ranges. The shaper uses {@code
                 * defaultContext} as the starting context.
                 */
                // @ts-ignore
                public static getContextualShaper(ranges: java.util.Set, defaultContext: java.awt.font.NumericShaper.Range): java.awt.font.NumericShaper;
                /**
                 * Converts the digits in the text that occur between start and
                 * start + count.
                 */
                // @ts-ignore
                public shape(text: string, start: number, count: number): void;
                /**
                 * Converts the digits in the text that occur between start and
                 * start + count, using the provided context.
                 * Context is ignored if the shaper is not a contextual shaper.
                 */
                // @ts-ignore
                public shape(text: string, start: number, count: number, context: number): void;
                /**
                 * Converts the digits in the text that occur between {@code
                 * start} and {@code start + count}, using the provided {@code
                 * context}. {@code Context} is ignored if the shaper is not a
                 * contextual shaper.
                 */
                // @ts-ignore
                public shape(text: string, start: number, count: number, context: java.awt.font.NumericShaper.Range): void;
                /**
                 * Returns a <code>boolean</code> indicating whether or not
                 * this shaper shapes contextually.
                 */
                // @ts-ignore
                public isContextual(): boolean;
                /**
                 * Returns an <code>int</code> that ORs together the values for
                 * all the ranges that will be shaped.
                 * <p>
                 * For example, to check if a shaper shapes to Arabic, you would use the
                 * following:
                 * <blockquote>
                 * {@code if ((shaper.getRanges() & shaper.ARABIC) != 0) &#123; ... }
                 * </blockquote>
                 * <p>Note that this method supports only the bit mask-based
                 * ranges. Call {@link #getRangeSet()} for the enum-based ranges.
                 */
                // @ts-ignore
                public getRanges(): number;
                /**
                 * Returns a {@code Set} representing all the Unicode ranges in
                 * this {@code NumericShaper} that will be shaped.
                 */
                // @ts-ignore
                public getRangeSet(): java.util.Set;
                /**
                 * Returns a hash code for this shaper.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns {@code true} if the specified object is an instance of
                 * <code>NumericShaper</code> and shapes identically to this one,
                 * regardless of the range representations, the bit mask or the
                 * enum. For example, the following code produces {@code "true"}.
                 * <blockquote><pre>
                 * NumericShaper ns1 = NumericShaper.getShaper(NumericShaper.ARABIC);
                 * NumericShaper ns2 = NumericShaper.getShaper(NumericShaper.Range.ARABIC);
                 * System.out.println(ns1.equals(ns2));
                 * </pre></blockquote>
                 */
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                /**
                 * Returns a <code>String</code> that describes this shaper. This method
                 * is used for debugging purposes only.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
