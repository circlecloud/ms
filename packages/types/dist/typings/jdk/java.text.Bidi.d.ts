declare namespace java {
    namespace text {
        // @ts-ignore
         class Bidi extends java.lang.Object {
            /**
             * Create Bidi from the given paragraph of text and base direction.
             */
            // @ts-ignore
            constructor(paragraph: string, flags: number)
            /**
             * Create Bidi from the given paragraph of text.
             * <p>
             * The RUN_DIRECTION attribute in the text, if present, determines the base
             * direction (left-to-right or right-to-left).  If not present, the base
             * direction is computes using the Unicode Bidirectional Algorithm, defaulting to left-to-right
             * if there are no strong directional characters in the text.  This attribute, if
             * present, must be applied to all the text in the paragraph.
             * <p>
             * The BIDI_EMBEDDING attribute in the text, if present, represents embedding level
             * information.  Negative values from -1 to -62 indicate overrides at the absolute value
             * of the level.  Positive values from 1 to 62 indicate embeddings.  Where values are
             * zero or not defined, the base embedding level as determined by the base direction
             * is assumed.
             * <p>
             * The NUMERIC_SHAPING attribute in the text, if present, converts European digits to
             * other decimal digits before running the bidi algorithm.  This attribute, if present,
             * must be applied to all the text in the paragraph.
             */
            // @ts-ignore
            constructor(paragraph: java.text.AttributedCharacterIterator)
            /**
             * Create Bidi from the given text, embedding, and direction information.
             * The embeddings array may be null.  If present, the values represent embedding level
             * information.  Negative values from -1 to -61 indicate overrides at the absolute value
             * of the level.  Positive values from 1 to 61 indicate embeddings.  Where values are
             * zero, the base embedding level as determined by the base direction is assumed.
             */
            // @ts-ignore
            constructor(text: string, textStart: number, embeddings: number, embStart: number, paragraphLength: number, flags: number)
            // @ts-ignore
            public static DIRECTION_LEFT_TO_RIGHT: number;
            // @ts-ignore
            public static DIRECTION_RIGHT_TO_LEFT: number;
            // @ts-ignore
            public static DIRECTION_DEFAULT_LEFT_TO_RIGHT: number;
            // @ts-ignore
            public static DIRECTION_DEFAULT_RIGHT_TO_LEFT: number;
            /**
             * Create a Bidi object representing the bidi information on a line of text within
             * the paragraph represented by the current Bidi.  This call is not required if the
             * entire paragraph fits on one line.
             */
            // @ts-ignore
            public createLineBidi(lineStart: number, lineLimit: number): java.text.Bidi;
            /**
             * Return true if the line is not left-to-right or right-to-left.  This means it either has mixed runs of left-to-right
             * and right-to-left text, or the base direction differs from the direction of the only run of text.
             */
            // @ts-ignore
            public isMixed(): boolean;
            /**
             * Return true if the line is all left-to-right text and the base direction is left-to-right.
             */
            // @ts-ignore
            public isLeftToRight(): boolean;
            /**
             * Return true if the line is all right-to-left text, and the base direction is right-to-left.
             */
            // @ts-ignore
            public isRightToLeft(): boolean;
            /**
             * Return the length of text in the line.
             */
            // @ts-ignore
            public getLength(): number;
            /**
             * Return true if the base direction is left-to-right.
             */
            // @ts-ignore
            public baseIsLeftToRight(): boolean;
            /**
             * Return the base level (0 if left-to-right, 1 if right-to-left).
             */
            // @ts-ignore
            public getBaseLevel(): number;
            /**
             * Return the resolved level of the character at offset.  If offset is
             * {@literal <} 0 or &ge; the length of the line, return the base direction
             * level.
             */
            // @ts-ignore
            public getLevelAt(offset: number): number;
            /**
             * Return the number of level runs.
             */
            // @ts-ignore
            public getRunCount(): number;
            /**
             * Return the level of the nth logical run in this line.
             */
            // @ts-ignore
            public getRunLevel(run: number): number;
            /**
             * Return the index of the character at the start of the nth logical run in this line, as
             * an offset from the start of the line.
             */
            // @ts-ignore
            public getRunStart(run: number): number;
            /**
             * Return the index of the character past the end of the nth logical run in this line, as
             * an offset from the start of the line.  For example, this will return the length
             * of the line for the last run on the line.
             */
            // @ts-ignore
            public getRunLimit(run: number): number;
            /**
             * Return true if the specified text requires bidi analysis.  If this returns false,
             * the text will display left-to-right.  Clients can then avoid constructing a Bidi object.
             * Text in the Arabic Presentation Forms area of Unicode is presumed to already be shaped
             * and ordered for display, and so will not cause this function to return true.
             */
            // @ts-ignore
            public static requiresBidi(text: string, start: number, limit: number): boolean;
            /**
             * Reorder the objects in the array into visual order based on their levels.
             * This is a utility function to use when you have a collection of objects
             * representing runs of text in logical order, each run containing text
             * at a single level.  The elements at <code>index</code> from
             * <code>objectStart</code> up to <code>objectStart + count</code>
             * in the objects array will be reordered into visual order assuming
             * each run of text has the level indicated by the corresponding element
             * in the levels array (at <code>index - objectStart + levelStart</code>).
             */
            // @ts-ignore
            public static reorderVisually(levels: number, levelStart: number, objects: java.lang.Object, objectStart: number, count: number): void;
            /**
             * Display the bidi internal state, used in debugging.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
