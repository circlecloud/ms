// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
            abstract class LineMetrics extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Returns the number of characters (<code>char</code> values) in the text whose
                 * metrics are encapsulated by this <code>LineMetrics</code>
                 * object.
                 */
                // @ts-ignore
                public abstract getNumChars(): number;
                /**
                 * Returns the ascent of the text.  The ascent
                 * is the distance from the baseline
                 * to the ascender line.  The ascent usually represents the
                 * the height of the capital letters of the text.  Some characters
                 * can extend above the ascender line.
                 */
                // @ts-ignore
                public abstract getAscent(): number;
                /**
                 * Returns the descent of the text.  The descent
                 * is the distance from the baseline
                 * to the descender line.  The descent usually represents
                 * the distance to the bottom of lower case letters like
                 * 'p'.  Some characters can extend below the descender
                 * line.
                 */
                // @ts-ignore
                public abstract getDescent(): number;
                /**
                 * Returns the leading of the text. The
                 * leading is the recommended
                 * distance from the bottom of the descender line to the
                 * top of the next line.
                 */
                // @ts-ignore
                public abstract getLeading(): number;
                /**
                 * Returns the height of the text.  The
                 * height is equal to the sum of the ascent, the
                 * descent and the leading.
                 */
                // @ts-ignore
                public abstract getHeight(): number;
                /**
                 * Returns the baseline index of the text.
                 * The index is one of
                 * {@link java.awt.Font#ROMAN_BASELINE ROMAN_BASELINE},
                 * {@link java.awt.Font#CENTER_BASELINE CENTER_BASELINE},
                 * {@link java.awt.Font#HANGING_BASELINE HANGING_BASELINE}.
                 */
                // @ts-ignore
                public abstract getBaselineIndex(): number;
                /**
                 * Returns the baseline offsets of the text,
                 * relative to the baseline of the text.  The
                 * offsets are indexed by baseline index.  For
                 * example, if the baseline index is
                 * <code>CENTER_BASELINE</code> then
                 * <code>offsets[HANGING_BASELINE]</code> is usually
                 * negative, <code>offsets[CENTER_BASELINE]</code>
                 * is zero, and <code>offsets[ROMAN_BASELINE]</code>
                 * is usually positive.
                 */
                // @ts-ignore
                public abstract getBaselineOffsets(): number[];
                /**
                 * Returns the position of the strike-through line
                 * relative to the baseline.
                 */
                // @ts-ignore
                public abstract getStrikethroughOffset(): number;
                /**
                 * Returns the thickness of the strike-through line.
                 */
                // @ts-ignore
                public abstract getStrikethroughThickness(): number;
                /**
                 * Returns the position of the underline relative to
                 * the baseline.
                 */
                // @ts-ignore
                public abstract getUnderlineOffset(): number;
                /**
                 * Returns the thickness of the underline.
                 */
                // @ts-ignore
                public abstract getUnderlineThickness(): number;
            }
        }
    }
}
