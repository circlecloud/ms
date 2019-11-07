declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class TextLayout extends java.lang.Object {
                /**
                 * Constructs a <code>TextLayout</code> from a <code>String</code>
                 * and a {@link Font}.  All the text is styled using the specified
                 * <code>Font</code>.
                 * <p>
                 * The <code>String</code> must specify a single paragraph of text,
                 * because an entire paragraph is required for the bidirectional
                 * algorithm.
                 */
                // @ts-ignore
                constructor(string: string, font: java.awt.Font, frc: java.awt.font.FontRenderContext)
                /**
                 * Constructs a <code>TextLayout</code> from a <code>String</code>
                 * and an attribute set.
                 * <p>
                 * All the text is styled using the provided attributes.
                 * <p>
                 * <code>string</code> must specify a single paragraph of text because an
                 * entire paragraph is required for the bidirectional algorithm.
                 */
                // @ts-ignore
                constructor(string: string, attributes: java.util.Map, frc: java.awt.font.FontRenderContext)
                /**
                 * Constructs a <code>TextLayout</code> from an iterator over styled text.
                 * <p>
                 * The iterator must specify a single paragraph of text because an
                 * entire paragraph is required for the bidirectional
                 * algorithm.
                 */
                // @ts-ignore
                constructor(text: java.text.AttributedCharacterIterator, frc: java.awt.font.FontRenderContext)
                // @ts-ignore
                public static DEFAULT_CARET_POLICY: java.awt.font.TextLayout.CaretPolicy;
                /**
                 * Creates a copy of this <code>TextLayout</code>.
                 */
                // @ts-ignore
                protected clone(): java.lang.Object;
                /**
                 * Creates a copy of this <code>TextLayout</code> justified to the
                 * specified width.
                 * <p>
                 * If this <code>TextLayout</code> has already been justified, an
                 * exception is thrown.  If this <code>TextLayout</code> object's
                 * justification ratio is zero, a <code>TextLayout</code> identical
                 * to this <code>TextLayout</code> is returned.
                 */
                // @ts-ignore
                public getJustifiedLayout(justificationWidth: number): java.awt.font.TextLayout;
                /**
                 * Justify this layout.  Overridden by subclassers to control justification
                 * (if there were subclassers, that is...)
                 * The layout will only justify if the paragraph attributes (from the
                 * source text, possibly defaulted by the layout attributes) indicate a
                 * non-zero justification ratio.  The text will be justified to the
                 * indicated width.  The current implementation also adjusts hanging
                 * punctuation and trailing whitespace to overhang the justification width.
                 * Once justified, the layout may not be rejustified.
                 * <p>
                 * Some code may rely on immutablity of layouts.  Subclassers should not
                 * call this directly, but instead should call getJustifiedLayout, which
                 * will call this method on a clone of this layout, preserving
                 * the original.
                 */
                // @ts-ignore
                protected handleJustify(justificationWidth: number): void;
                /**
                 * Returns the baseline for this <code>TextLayout</code>.
                 * The baseline is one of the values defined in <code>Font</code>,
                 * which are roman, centered and hanging.  Ascent and descent are
                 * relative to this baseline.  The <code>baselineOffsets</code>
                 * are also relative to this baseline.
                 */
                // @ts-ignore
                public getBaseline(): number;
                /**
                 * Returns the offsets array for the baselines used for this
                 * <code>TextLayout</code>.
                 * <p>
                 * The array is indexed by one of the values defined in
                 * <code>Font</code>, which are roman, centered and hanging.  The
                 * values are relative to this <code>TextLayout</code> object's
                 * baseline, so that <code>getBaselineOffsets[getBaseline()] == 0</code>.
                 * Offsets are added to the position of the <code>TextLayout</code>
                 * object's baseline to get the position for the new baseline.
                 */
                // @ts-ignore
                public getBaselineOffsets(): number[];
                /**
                 * Returns the advance of this <code>TextLayout</code>.
                 * The advance is the distance from the origin to the advance of the
                 * rightmost (bottommost) character.  This is in baseline-relative
                 * coordinates.
                 */
                // @ts-ignore
                public getAdvance(): number;
                /**
                 * Returns the advance of this <code>TextLayout</code>, minus trailing
                 * whitespace.  This is in baseline-relative coordinates.
                 */
                // @ts-ignore
                public getVisibleAdvance(): number;
                /**
                 * Returns the ascent of this <code>TextLayout</code>.
                 * The ascent is the distance from the top (right) of the
                 * <code>TextLayout</code> to the baseline.  It is always either
                 * positive or zero.  The ascent is sufficient to
                 * accommodate superscripted text and is the maximum of the sum of the
                 * ascent, offset, and baseline of each glyph.  The ascent is
                 * the maximum ascent from the baseline of all the text in the
                 * TextLayout.  It is in baseline-relative coordinates.
                 */
                // @ts-ignore
                public getAscent(): number;
                /**
                 * Returns the descent of this <code>TextLayout</code>.
                 * The descent is the distance from the baseline to the bottom (left) of
                 * the <code>TextLayout</code>.  It is always either positive or zero.
                 * The descent is sufficient to accommodate subscripted text and is the
                 * maximum of the sum of the descent, offset, and baseline of each glyph.
                 * This is the maximum descent from the baseline of all the text in
                 * the TextLayout.  It is in baseline-relative coordinates.
                 */
                // @ts-ignore
                public getDescent(): number;
                /**
                 * Returns the leading of the <code>TextLayout</code>.
                 * The leading is the suggested interline spacing for this
                 * <code>TextLayout</code>.  This is in baseline-relative
                 * coordinates.
                 * <p>
                 * The leading is computed from the leading, descent, and baseline
                 * of all glyphvectors in the <code>TextLayout</code>.  The algorithm
                 * is roughly as follows:
                 * <blockquote><pre>
                 * maxD = 0;
                 * maxDL = 0;
                 * for (GlyphVector g in all glyphvectors) {
                 * maxD = max(maxD, g.getDescent() + offsets[g.getBaseline()]);
                 * maxDL = max(maxDL, g.getDescent() + g.getLeading() +
                 * offsets[g.getBaseline()]);
                 * }
                 * return maxDL - maxD;
                 * </pre></blockquote>
                 */
                // @ts-ignore
                public getLeading(): number;
                /**
                 * Returns the bounds of this <code>TextLayout</code>.
                 * The bounds are in standard coordinates.
                 * <p>Due to rasterization effects, this bounds might not enclose all of the
                 * pixels rendered by the TextLayout.</p>
                 * It might not coincide exactly with the ascent, descent,
                 * origin or advance of the <code>TextLayout</code>.
                 */
                // @ts-ignore
                public getBounds(): java.awt.geom.Rectangle2D;
                /**
                 * Returns the pixel bounds of this <code>TextLayout</code> when
                 * rendered in a graphics with the given
                 * <code>FontRenderContext</code> at the given location.  The
                 * graphics render context need not be the same as the
                 * <code>FontRenderContext</code> used to create this
                 * <code>TextLayout</code>, and can be null.  If it is null, the
                 * <code>FontRenderContext</code> of this <code>TextLayout</code>
                 * is used.
                 */
                // @ts-ignore
                public getPixelBounds(frc: java.awt.font.FontRenderContext, x: number, y: number): java.awt.Rectangle;
                /**
                 * Returns <code>true</code> if this <code>TextLayout</code> has
                 * a left-to-right base direction or <code>false</code> if it has
                 * a right-to-left base direction.  The <code>TextLayout</code>
                 * has a base direction of either left-to-right (LTR) or
                 * right-to-left (RTL).  The base direction is independent of the
                 * actual direction of text on the line, which may be either LTR,
                 * RTL, or mixed. Left-to-right layouts by default should position
                 * flush left.  If the layout is on a tabbed line, the
                 * tabs run left to right, so that logically successive layouts position
                 * left to right.  The opposite is true for RTL layouts. By default they
                 * should position flush left, and tabs run right-to-left.
                 */
                // @ts-ignore
                public isLeftToRight(): boolean;
                /**
                 * Returns <code>true</code> if this <code>TextLayout</code> is vertical.
                 */
                // @ts-ignore
                public isVertical(): boolean;
                /**
                 * Returns the number of characters represented by this
                 * <code>TextLayout</code>.
                 */
                // @ts-ignore
                public getCharacterCount(): number;
                /**
                 * Returns information about the caret corresponding to <code>hit</code>.
                 * The first element of the array is the intersection of the caret with
                 * the baseline, as a distance along the baseline. The second element
                 * of the array is the inverse slope (run/rise) of the caret, measured
                 * with respect to the baseline at that point.
                 * <p>
                 * This method is meant for informational use.  To display carets, it
                 * is better to use <code>getCaretShapes</code>.
                 */
                // @ts-ignore
                public getCaretInfo(hit: java.awt.font.TextHitInfo, bounds: java.awt.geom.Rectangle2D): number[];
                /**
                 * Returns information about the caret corresponding to <code>hit</code>.
                 * This method is a convenience overload of <code>getCaretInfo</code> and
                 * uses the natural bounds of this <code>TextLayout</code>.
                 */
                // @ts-ignore
                public getCaretInfo(hit: java.awt.font.TextHitInfo): number[];
                /**
                 * Returns the hit for the next caret to the right (bottom); if there
                 * is no such hit, returns <code>null</code>.
                 * If the hit character index is out of bounds, an
                 * {@link IllegalArgumentException} is thrown.
                 */
                // @ts-ignore
                public getNextRightHit(hit: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo;
                /**
                 * Returns the hit for the next caret to the right (bottom); if no
                 * such hit, returns <code>null</code>.  The hit is to the right of
                 * the strong caret at the specified offset, as determined by the
                 * specified policy.
                 * The returned hit is the stronger of the two possible
                 * hits, as determined by the specified policy.
                 */
                // @ts-ignore
                public getNextRightHit(offset: number, policy: java.awt.font.TextLayout.CaretPolicy): java.awt.font.TextHitInfo;
                /**
                 * Returns the hit for the next caret to the right (bottom); if no
                 * such hit, returns <code>null</code>.  The hit is to the right of
                 * the strong caret at the specified offset, as determined by the
                 * default policy.
                 * The returned hit is the stronger of the two possible
                 * hits, as determined by the default policy.
                 */
                // @ts-ignore
                public getNextRightHit(offset: number): java.awt.font.TextHitInfo;
                /**
                 * Returns the hit for the next caret to the left (top); if no such
                 * hit, returns <code>null</code>.
                 * If the hit character index is out of bounds, an
                 * <code>IllegalArgumentException</code> is thrown.
                 */
                // @ts-ignore
                public getNextLeftHit(hit: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo;
                /**
                 * Returns the hit for the next caret to the left (top); if no
                 * such hit, returns <code>null</code>.  The hit is to the left of
                 * the strong caret at the specified offset, as determined by the
                 * specified policy.
                 * The returned hit is the stronger of the two possible
                 * hits, as determined by the specified policy.
                 */
                // @ts-ignore
                public getNextLeftHit(offset: number, policy: java.awt.font.TextLayout.CaretPolicy): java.awt.font.TextHitInfo;
                /**
                 * Returns the hit for the next caret to the left (top); if no
                 * such hit, returns <code>null</code>.  The hit is to the left of
                 * the strong caret at the specified offset, as determined by the
                 * default policy.
                 * The returned hit is the stronger of the two possible
                 * hits, as determined by the default policy.
                 */
                // @ts-ignore
                public getNextLeftHit(offset: number): java.awt.font.TextHitInfo;
                /**
                 * Returns the hit on the opposite side of the specified hit's caret.
                 */
                // @ts-ignore
                public getVisualOtherHit(hit: java.awt.font.TextHitInfo): java.awt.font.TextHitInfo;
                /**
                 * Returns a {@link Shape} representing the caret at the specified
                 * hit inside the specified bounds.
                 */
                // @ts-ignore
                public getCaretShape(hit: java.awt.font.TextHitInfo, bounds: java.awt.geom.Rectangle2D): java.awt.Shape;
                /**
                 * Returns a <code>Shape</code> representing the caret at the specified
                 * hit inside the natural bounds of this <code>TextLayout</code>.
                 */
                // @ts-ignore
                public getCaretShape(hit: java.awt.font.TextHitInfo): java.awt.Shape;
                /**
                 * Returns the level of the character at <code>index</code>.
                 * Indices -1 and <code>characterCount</code> are assigned the base
                 * level of this <code>TextLayout</code>.
                 */
                // @ts-ignore
                public getCharacterLevel(index: number): number;
                /**
                 * Returns two paths corresponding to the strong and weak caret.
                 */
                // @ts-ignore
                public getCaretShapes(offset: number, bounds: java.awt.geom.Rectangle2D, policy: java.awt.font.TextLayout.CaretPolicy): java.awt.Shape[];
                /**
                 * Returns two paths corresponding to the strong and weak caret.
                 * This method is a convenience overload of <code>getCaretShapes</code>
                 * that uses the default caret policy.
                 */
                // @ts-ignore
                public getCaretShapes(offset: number, bounds: java.awt.geom.Rectangle2D): java.awt.Shape[];
                /**
                 * Returns two paths corresponding to the strong and weak caret.
                 * This method is a convenience overload of <code>getCaretShapes</code>
                 * that uses the default caret policy and this <code>TextLayout</code>
                 * object's natural bounds.
                 */
                // @ts-ignore
                public getCaretShapes(offset: number): java.awt.Shape[];
                /**
                 * Returns the logical ranges of text corresponding to a visual selection.
                 */
                // @ts-ignore
                public getLogicalRangesForVisualSelection(firstEndpoint: java.awt.font.TextHitInfo, secondEndpoint: java.awt.font.TextHitInfo): number[];
                /**
                 * Returns a path enclosing the visual selection in the specified range,
                 * extended to <code>bounds</code>.
                 * <p>
                 * If the selection includes the leftmost (topmost) position, the selection
                 * is extended to the left (top) of <code>bounds</code>.  If the
                 * selection includes the rightmost (bottommost) position, the selection
                 * is extended to the right (bottom) of the bounds.  The height
                 * (width on vertical lines) of the selection is always extended to
                 * <code>bounds</code>.
                 * <p>
                 * Although the selection is always contiguous, the logically selected
                 * text can be discontiguous on lines with mixed-direction text.  The
                 * logical ranges of text selected can be retrieved using
                 * <code>getLogicalRangesForVisualSelection</code>.  For example,
                 * consider the text 'ABCdef' where capital letters indicate
                 * right-to-left text, rendered on a right-to-left line, with a visual
                 * selection from 0L (the leading edge of 'A') to 3T (the trailing edge
                 * of 'd').  The text appears as follows, with bold underlined areas
                 * representing the selection:
                 * <br><pre>
                 * d<u><b>efCBA  </b></u>
                 * </pre>
                 * The logical selection ranges are 0-3, 4-6 (ABC, ef) because the
                 * visually contiguous text is logically discontiguous.  Also note that
                 * since the rightmost position on the layout (to the right of 'A') is
                 * selected, the selection is extended to the right of the bounds.
                 */
                // @ts-ignore
                public getVisualHighlightShape(firstEndpoint: java.awt.font.TextHitInfo, secondEndpoint: java.awt.font.TextHitInfo, bounds: java.awt.geom.Rectangle2D): java.awt.Shape;
                /**
                 * Returns a <code>Shape</code> enclosing the visual selection in the
                 * specified range, extended to the bounds.  This method is a
                 * convenience overload of <code>getVisualHighlightShape</code> that
                 * uses the natural bounds of this <code>TextLayout</code>.
                 */
                // @ts-ignore
                public getVisualHighlightShape(firstEndpoint: java.awt.font.TextHitInfo, secondEndpoint: java.awt.font.TextHitInfo): java.awt.Shape;
                /**
                 * Returns a <code>Shape</code> enclosing the logical selection in the
                 * specified range, extended to the specified <code>bounds</code>.
                 * <p>
                 * If the selection range includes the first logical character, the
                 * selection is extended to the portion of <code>bounds</code> before
                 * the start of this <code>TextLayout</code>.  If the range includes
                 * the last logical character, the selection is extended to the portion
                 * of <code>bounds</code> after the end of this <code>TextLayout</code>.
                 * The height (width on vertical lines) of the selection is always
                 * extended to <code>bounds</code>.
                 * <p>
                 * The selection can be discontiguous on lines with mixed-direction text.
                 * Only those characters in the logical range between start and limit
                 * appear selected.  For example, consider the text 'ABCdef' where capital
                 * letters indicate right-to-left text, rendered on a right-to-left line,
                 * with a logical selection from 0 to 4 ('ABCd').  The text appears as
                 * follows, with bold standing in for the selection, and underlining for
                 * the extension:
                 * <br><pre>
                 * <u><b>d</b></u>ef<u><b>CBA  </b></u>
                 * </pre>
                 * The selection is discontiguous because the selected characters are
                 * visually discontiguous. Also note that since the range includes the
                 * first logical character (A), the selection is extended to the portion
                 * of the <code>bounds</code> before the start of the layout, which in
                 * this case (a right-to-left line) is the right portion of the
                 * <code>bounds</code>.
                 */
                // @ts-ignore
                public getLogicalHighlightShape(firstEndpoint: number, secondEndpoint: number, bounds: java.awt.geom.Rectangle2D): java.awt.Shape;
                /**
                 * Returns a <code>Shape</code> enclosing the logical selection in the
                 * specified range, extended to the natural bounds of this
                 * <code>TextLayout</code>.  This method is a convenience overload of
                 * <code>getLogicalHighlightShape</code> that uses the natural bounds of
                 * this <code>TextLayout</code>.
                 */
                // @ts-ignore
                public getLogicalHighlightShape(firstEndpoint: number, secondEndpoint: number): java.awt.Shape;
                /**
                 * Returns the black box bounds of the characters in the specified range.
                 * The black box bounds is an area consisting of the union of the bounding
                 * boxes of all the glyphs corresponding to the characters between start
                 * and limit.  This area can be disjoint.
                 */
                // @ts-ignore
                public getBlackBoxBounds(firstEndpoint: number, secondEndpoint: number): java.awt.Shape;
                /**
                 * Returns a <code>TextHitInfo</code> corresponding to the
                 * specified point.
                 * Coordinates outside the bounds of the <code>TextLayout</code>
                 * map to hits on the leading edge of the first logical character,
                 * or the trailing edge of the last logical character, as appropriate,
                 * regardless of the position of that character in the line.  Only the
                 * direction along the baseline is used to make this evaluation.
                 */
                // @ts-ignore
                public hitTestChar(x: number, y: number, bounds: java.awt.geom.Rectangle2D): java.awt.font.TextHitInfo;
                /**
                 * Returns a <code>TextHitInfo</code> corresponding to the
                 * specified point.  This method is a convenience overload of
                 * <code>hitTestChar</code> that uses the natural bounds of this
                 * <code>TextLayout</code>.
                 */
                // @ts-ignore
                public hitTestChar(x: number, y: number): java.awt.font.TextHitInfo;
                /**
                 * Returns the hash code of this <code>TextLayout</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns <code>true</code> if the specified <code>Object</code> is a
                 * <code>TextLayout</code> object and if the specified <code>Object</code>
                 * equals this <code>TextLayout</code>.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns <code>true</code> if the two layouts are equal.
                 * Two layouts are equal if they contain equal glyphvectors in the same order.
                 */
                // @ts-ignore
                public equals(rhs: java.awt.font.TextLayout): boolean;
                /**
                 * Returns debugging information for this <code>TextLayout</code>.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Renders this <code>TextLayout</code> at the specified location in
                 * the specified {@link java.awt.Graphics2D Graphics2D} context.
                 * The origin of the layout is placed at x,&nbsp;y.  Rendering may touch
                 * any point within <code>getBounds()</code> of this position.  This
                 * leaves the <code>g2</code> unchanged.  Text is rendered along the
                 * baseline path.
                 */
                // @ts-ignore
                public draw(g2: java.awt.Graphics2D, x: number, y: number): void;
                /**
                 * Returns a <code>Shape</code> representing the outline of this
                 * <code>TextLayout</code>.
                 */
                // @ts-ignore
                public getOutline(tx: java.awt.geom.AffineTransform): java.awt.Shape;
                /**
                 * Return the LayoutPath, or null if the layout path is the
                 * default path (x maps to advance, y maps to offset).
                 */
                // @ts-ignore
                public getLayoutPath(): java.awt.font.LayoutPath;
                /**
                 * Convert a hit to a point in standard coordinates.  The point is
                 * on the baseline of the character at the leading or trailing
                 * edge of the character, as appropriate.  If the path is
                 * broken at the side of the character represented by the hit, the
                 * point will be adjacent to the character.
                 */
                // @ts-ignore
                public hitToPoint(hit: java.awt.font.TextHitInfo, point: java.awt.geom.Point2D): void;
            }
        }
    }
}
