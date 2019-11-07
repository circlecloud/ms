// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class LineBreakMeasurer extends java.lang.Object {
                /**
                 * Constructs a <code>LineBreakMeasurer</code> for the specified text.
                 */
                // @ts-ignore
                constructor(text: java.text.AttributedCharacterIterator, frc: java.awt.font.FontRenderContext)
                /**
                 * Constructs a <code>LineBreakMeasurer</code> for the specified text.
                 */
                // @ts-ignore
                constructor(text: java.text.AttributedCharacterIterator, breakIter: java.text.BreakIterator, frc: java.awt.font.FontRenderContext)
                /**
                 * Returns the position at the end of the next layout.  Does NOT
                 * update the current position of this <code>LineBreakMeasurer</code>.
                 */
                // @ts-ignore
                public nextOffset(wrappingWidth: number): number;
                /**
                 * Returns the position at the end of the next layout.  Does NOT
                 * update the current position of this <code>LineBreakMeasurer</code>.
                 */
                // @ts-ignore
                public nextOffset(wrappingWidth: number, offsetLimit: number, requireNextWord: boolean): number;
                /**
                 * Returns the next layout, and updates the current position.
                 */
                // @ts-ignore
                public nextLayout(wrappingWidth: number): java.awt.font.TextLayout;
                /**
                 * Returns the next layout, and updates the current position.
                 */
                // @ts-ignore
                public nextLayout(wrappingWidth: number, offsetLimit: number, requireNextWord: boolean): java.awt.font.TextLayout;
                /**
                 * Returns the current position of this <code>LineBreakMeasurer</code>.
                 */
                // @ts-ignore
                public getPosition(): number;
                /**
                 * Sets the current position of this <code>LineBreakMeasurer</code>.
                 */
                // @ts-ignore
                public setPosition(newPosition: number): void;
                /**
                 * Updates this <code>LineBreakMeasurer</code> after a single
                 * character is inserted into the text, and sets the current
                 * position to the beginning of the paragraph.
                 */
                // @ts-ignore
                public insertChar(newParagraph: java.text.AttributedCharacterIterator, insertPos: number): void;
                /**
                 * Updates this <code>LineBreakMeasurer</code> after a single
                 * character is deleted from the text, and sets the current
                 * position to the beginning of the paragraph.
                 */
                // @ts-ignore
                public deleteChar(newParagraph: java.text.AttributedCharacterIterator, deletePos: number): void;
            }
        }
    }
}
