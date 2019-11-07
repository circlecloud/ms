declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class TextMeasurer extends java.lang.Object {
                /**
                 * Constructs a <code>TextMeasurer</code> from the source text.
                 * The source text should be a single entire paragraph.
                 */
                // @ts-ignore
                constructor(text: java.text.AttributedCharacterIterator, frc: java.awt.font.FontRenderContext)
                // @ts-ignore
                protected clone(): java.lang.Object;
                /**
                 * Returns the index of the first character which will not fit on
                 * on a line beginning at <code>start</code> and possible
                 * measuring up to <code>maxAdvance</code> in graphical width.
                 */
                // @ts-ignore
                public getLineBreakIndex(start: number, maxAdvance: number): number;
                /**
                 * Returns the graphical width of a line beginning at <code>start</code>
                 * and including characters up to <code>limit</code>.
                 * <code>start</code> and <code>limit</code> are absolute indices,
                 * not relative to the start of the paragraph.
                 */
                // @ts-ignore
                public getAdvanceBetween(start: number, limit: number): number;
                /**
                 * Returns a <code>TextLayout</code> on the given character range.
                 */
                // @ts-ignore
                public getLayout(start: number, limit: number): java.awt.font.TextLayout;
                /**
                 * Updates the <code>TextMeasurer</code> after a single character has
                 * been inserted
                 * into the paragraph currently represented by this
                 * <code>TextMeasurer</code>.  After this call, this
                 * <code>TextMeasurer</code> is equivalent to a new
                 * <code>TextMeasurer</code> created from the text;  however, it will
                 * usually be more efficient to update an existing
                 * <code>TextMeasurer</code> than to create a new one from scratch.
                 */
                // @ts-ignore
                public insertChar(newParagraph: java.text.AttributedCharacterIterator, insertPos: number): void;
                /**
                 * Updates the <code>TextMeasurer</code> after a single character has
                 * been deleted
                 * from the paragraph currently represented by this
                 * <code>TextMeasurer</code>.  After this call, this
                 * <code>TextMeasurer</code> is equivalent to a new <code>TextMeasurer</code>
                 * created from the text;  however, it will usually be more efficient
                 * to update an existing <code>TextMeasurer</code> than to create a new one
                 * from scratch.
                 */
                // @ts-ignore
                public deleteChar(newParagraph: java.text.AttributedCharacterIterator, deletePos: number): void;
            }
        }
    }
}
