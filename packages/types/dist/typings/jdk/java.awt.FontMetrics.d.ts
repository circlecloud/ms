declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class FontMetrics extends java.lang.Object {
            /**
             * Creates a new <code>FontMetrics</code> object for finding out
             * height and width information about the specified <code>Font</code>
             * and specific character glyphs in that <code>Font</code>.
             */
            // @ts-ignore
            constructor(font: java.awt.Font)
            // @ts-ignore
            protected font: java.awt.Font;
            /**
             * Gets the <code>Font</code> described by this
             * <code>FontMetrics</code> object.
             */
            // @ts-ignore
            public getFont(): java.awt.Font;
            /**
             * Gets the <code>FontRenderContext</code> used by this
             * <code>FontMetrics</code> object to measure text.
             * <p>
             * Note that methods in this class which take a <code>Graphics</code>
             * parameter measure text using the <code>FontRenderContext</code>
             * of that <code>Graphics</code> object, and not this
             * <code>FontRenderContext</code>
             */
            // @ts-ignore
            public getFontRenderContext(): java.awt.font.FontRenderContext;
            /**
             * Determines the <em>standard leading</em> of the
             * <code>Font</code> described by this <code>FontMetrics</code>
             * object.  The standard leading, or
             * interline spacing, is the logical amount of space to be reserved
             * between the descent of one line of text and the ascent of the next
             * line. The height metric is calculated to include this extra space.
             */
            // @ts-ignore
            public getLeading(): number;
            /**
             * Determines the <em>font ascent</em> of the <code>Font</code>
             * described by this <code>FontMetrics</code> object. The font ascent
             * is the distance from the font's baseline to the top of most
             * alphanumeric characters. Some characters in the <code>Font</code>
             * might extend above the font ascent line.
             */
            // @ts-ignore
            public getAscent(): number;
            /**
             * Determines the <em>font descent</em> of the <code>Font</code>
             * described by this
             * <code>FontMetrics</code> object. The font descent is the distance
             * from the font's baseline to the bottom of most alphanumeric
             * characters with descenders. Some characters in the
             * <code>Font</code> might extend
             * below the font descent line.
             */
            // @ts-ignore
            public getDescent(): number;
            /**
             * Gets the standard height of a line of text in this font.  This
             * is the distance between the baseline of adjacent lines of text.
             * It is the sum of the leading + ascent + descent. Due to rounding
             * this may not be the same as getAscent() + getDescent() + getLeading().
             * There is no guarantee that lines of text spaced at this distance are
             * disjoint; such lines may overlap if some characters overshoot
             * either the standard ascent or the standard descent metric.
             */
            // @ts-ignore
            public getHeight(): number;
            /**
             * Determines the maximum ascent of the <code>Font</code>
             * described by this <code>FontMetrics</code> object.  No character
             * extends further above the font's baseline than this height.
             */
            // @ts-ignore
            public getMaxAscent(): number;
            /**
             * Determines the maximum descent of the <code>Font</code>
             * described by this <code>FontMetrics</code> object.  No character
             * extends further below the font's baseline than this height.
             */
            // @ts-ignore
            public getMaxDescent(): number;
            /**
             * For backward compatibility only.
             */
            // @ts-ignore
            public getMaxDecent(): number;
            /**
             * Gets the maximum advance width of any character in this
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * string's baseline.  The advance of a <code>String</code> is
             * not necessarily the sum of the advances of its characters.
             */
            // @ts-ignore
            public getMaxAdvance(): number;
            /**
             * Returns the advance width of the specified character in this
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * character's baseline.  Note that the advance of a
             * <code>String</code> is not necessarily the sum of the advances
             * of its characters.
             * <p>This method doesn't validate the specified character to be a
             * valid Unicode code point. The caller must validate the
             * character value using {@link
             * java.lang.Character#isValidCodePoint(int)
             * Character.isValidCodePoint} if necessary.
             */
            // @ts-ignore
            public charWidth(codePoint: number): number;
            /**
             * Returns the advance width of the specified character in this
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * character's baseline.  Note that the advance of a
             * <code>String</code> is not necessarily the sum of the advances
             * of its characters.
             * <p><b>Note:</b> This method cannot handle <a
             * href="../lang/Character.html#supplementary"> supplementary
             * characters</a>. To support all Unicode characters, including
             * supplementary characters, use the {@link #charWidth(int)} method.
             */
            // @ts-ignore
            public charWidth(ch: string): number;
            /**
             * Returns the total advance width for showing the specified
             * <code>String</code> in this <code>Font</code>.  The advance
             * is the distance from the leftmost point to the rightmost point
             * on the string's baseline.
             * <p>
             * Note that the advance of a <code>String</code> is
             * not necessarily the sum of the advances of its characters.
             */
            // @ts-ignore
            public stringWidth(str: string): number;
            /**
             * Returns the total advance width for showing the specified array
             * of characters in this <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * string's baseline.  The advance of a <code>String</code>
             * is not necessarily the sum of the advances of its characters.
             * This is equivalent to measuring a <code>String</code> of the
             * characters in the specified range.
             */
            // @ts-ignore
            public charsWidth(data: string, off: number, len: number): number;
            /**
             * Returns the total advance width for showing the specified array
             * of bytes in this <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * string's baseline.  The advance of a <code>String</code>
             * is not necessarily the sum of the advances of its characters.
             * This is equivalent to measuring a <code>String</code> of the
             * characters in the specified range.
             */
            // @ts-ignore
            public bytesWidth(data: number, off: number, len: number): number;
            /**
             * Gets the advance widths of the first 256 characters in the
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * character's baseline.  Note that the advance of a
             * <code>String</code> is not necessarily the sum of the advances
             * of its characters.
             */
            // @ts-ignore
            public getWidths(): number[];
            /**
             * Checks to see if the <code>Font</code> has uniform line metrics.  A
             * composite font may consist of several different fonts to cover
             * various character sets.  In such cases, the
             * <code>FontLineMetrics</code> objects are not uniform.
             * Different fonts may have a different ascent, descent, metrics and
             * so on.  This information is sometimes necessary for line
             * measuring and line breaking.
             */
            // @ts-ignore
            public hasUniformLineMetrics(): boolean;
            /**
             * Returns the {@link LineMetrics} object for the specified
             * <code>String</code> in the specified {@link Graphics} context.
             */
            // @ts-ignore
            public getLineMetrics(str: string, context: java.awt.Graphics): java.awt.font.LineMetrics;
            /**
             * Returns the {@link LineMetrics} object for the specified
             * <code>String</code> in the specified {@link Graphics} context.
             */
            // @ts-ignore
            public getLineMetrics(str: string, beginIndex: number, limit: number, context: java.awt.Graphics): java.awt.font.LineMetrics;
            /**
             * Returns the {@link LineMetrics} object for the specified
             * character array in the specified {@link Graphics} context.
             */
            // @ts-ignore
            public getLineMetrics(chars: string, beginIndex: number, limit: number, context: java.awt.Graphics): java.awt.font.LineMetrics;
            /**
             * Returns the {@link LineMetrics} object for the specified
             * {@link CharacterIterator} in the specified {@link Graphics}
             * context.
             */
            // @ts-ignore
            public getLineMetrics(ci: java.text.CharacterIterator, beginIndex: number, limit: number, context: java.awt.Graphics): java.awt.font.LineMetrics;
            /**
             * Returns the bounds of the specified <code>String</code> in the
             * specified <code>Graphics</code> context.  The bounds is used
             * to layout the <code>String</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.FontMetrics class notes}).
             */
            // @ts-ignore
            public getStringBounds(str: string, context: java.awt.Graphics): java.awt.geom.Rectangle2D;
            /**
             * Returns the bounds of the specified <code>String</code> in the
             * specified <code>Graphics</code> context.  The bounds is used
             * to layout the <code>String</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.FontMetrics class notes}).
             */
            // @ts-ignore
            public getStringBounds(str: string, beginIndex: number, limit: number, context: java.awt.Graphics): java.awt.geom.Rectangle2D;
            /**
             * Returns the bounds of the specified array of characters
             * in the specified <code>Graphics</code> context.
             * The bounds is used to layout the <code>String</code>
             * created with the specified array of characters,
             * <code>beginIndex</code> and <code>limit</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.FontMetrics class notes}).
             */
            // @ts-ignore
            public getStringBounds(chars: string, beginIndex: number, limit: number, context: java.awt.Graphics): java.awt.geom.Rectangle2D;
            /**
             * Returns the bounds of the characters indexed in the specified
             * <code>CharacterIterator</code> in the
             * specified <code>Graphics</code> context.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.FontMetrics class notes}).
             */
            // @ts-ignore
            public getStringBounds(ci: java.text.CharacterIterator, beginIndex: number, limit: number, context: java.awt.Graphics): java.awt.geom.Rectangle2D;
            /**
             * Returns the bounds for the character with the maximum bounds
             * in the specified <code>Graphics</code> context.
             */
            // @ts-ignore
            public getMaxCharBounds(context: java.awt.Graphics): java.awt.geom.Rectangle2D;
            /**
             * Returns a representation of this <code>FontMetrics</code>
             * object's values as a <code>String</code>.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
