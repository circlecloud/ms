// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
            abstract class GlyphVector extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static FLAG_HAS_TRANSFORMS: number;
                // @ts-ignore
                public static FLAG_HAS_POSITION_ADJUSTMENTS: number;
                // @ts-ignore
                public static FLAG_RUN_RTL: number;
                // @ts-ignore
                public static FLAG_COMPLEX_GLYPHS: number;
                // @ts-ignore
                public static FLAG_MASK: number;
                /**
                 * Returns the <code>Font</code> associated with this
                 * <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getFont(): java.awt.Font;
                /**
                 * Returns the {@link FontRenderContext} associated with this
                 * <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getFontRenderContext(): java.awt.font.FontRenderContext;
                /**
                 * Assigns default positions to each glyph in this
                 * <code>GlyphVector</code>. This can destroy information
                 * generated during initial layout of this <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract performDefaultLayout(): void;
                /**
                 * Returns the number of glyphs in this <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getNumGlyphs(): number;
                /**
                 * Returns the glyphcode of the specified glyph.
                 * This return value is meaningless to anything other
                 * than the <code>Font</code> object that created this
                 * <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getGlyphCode(glyphIndex: number): number;
                /**
                 * Returns an array of glyphcodes for the specified glyphs.
                 * The contents of this return value are meaningless to anything other
                 * than the <code>Font</code> used to create this
                 * <code>GlyphVector</code>.  This method is used
                 * for convenience and performance when processing glyphcodes.
                 * If no array is passed in, a new array is created.
                 */
                // @ts-ignore
                public abstract getGlyphCodes(beginGlyphIndex: number, numEntries: number, codeReturn: number): number[];
                /**
                 * Returns the character index of the specified glyph.
                 * The character index is the index of the first logical
                 * character represented by the glyph.  The default
                 * implementation assumes a one-to-one, left-to-right mapping
                 * of glyphs to characters.
                 */
                // @ts-ignore
                public getGlyphCharIndex(glyphIndex: number): number;
                /**
                 * Returns the character indices of the specified glyphs.
                 * The character index is the index of the first logical
                 * character represented by the glyph.  Indices are returned
                 * in glyph order.  The default implementation invokes
                 * getGlyphCharIndex for each glyph, and subclassers will probably
                 * want to override this implementation for performance reasons.
                 * Use this method for convenience and performance
                 * in processing of glyphcodes. If no array is passed in,
                 * a new array is created.
                 */
                // @ts-ignore
                public getGlyphCharIndices(beginGlyphIndex: number, numEntries: number, codeReturn: number): number[];
                /**
                 * Returns the logical bounds of this <code>GlyphVector</code>.
                 * This method is used when positioning this <code>GlyphVector</code>
                 * in relation to visually adjacent <code>GlyphVector</code> objects.
                 */
                // @ts-ignore
                public abstract getLogicalBounds(): java.awt.geom.Rectangle2D;
                /**
                 * Returns the visual bounds of this <code>GlyphVector</code>
                 * The visual bounds is the bounding box of the outline of this
                 * <code>GlyphVector</code>.  Because of rasterization and
                 * alignment of pixels, it is possible that this box does not
                 * enclose all pixels affected by rendering this <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getVisualBounds(): java.awt.geom.Rectangle2D;
                /**
                 * Returns the pixel bounds of this <code>GlyphVector</code> when
                 * rendered in a graphics with the given
                 * <code>FontRenderContext</code> at the given location.  The
                 * renderFRC need not be the same as the
                 * <code>FontRenderContext</code> of this
                 * <code>GlyphVector</code>, and can be null.  If it is null, the
                 * <code>FontRenderContext</code> of this <code>GlyphVector</code>
                 * is used.  The default implementation returns the visual bounds,
                 * offset to x, y and rounded out to the next integer value (i.e. returns an
                 * integer rectangle which encloses the visual bounds) and
                 * ignores the FRC.  Subclassers should override this method.
                 */
                // @ts-ignore
                public getPixelBounds(renderFRC: java.awt.font.FontRenderContext, x: number, y: number): java.awt.Rectangle;
                /**
                 * Returns a <code>Shape</code> whose interior corresponds to the
                 * visual representation of this <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getOutline(): java.awt.Shape;
                /**
                 * Returns a <code>Shape</code> whose interior corresponds to the
                 * visual representation of the specified glyph
                 * within this <code>GlyphVector</code>.
                 * The outline returned by this method is positioned around the
                 * origin of each individual glyph.
                 */
                // @ts-ignore
                public abstract getGlyphOutline(glyphIndex: number): java.awt.Shape;
                /**
                 * Returns a <code>Shape</code> whose interior corresponds to the
                 * visual representation of the specified glyph
                 * within this <code>GlyphVector</code>, offset to x,&nbsp;y.
                 * The outline returned by this method is positioned around the
                 * origin of each individual glyph.
                 */
                // @ts-ignore
                public getGlyphOutline(glyphIndex: number, x: number, y: number): java.awt.Shape;
                /**
                 * Returns the position of the specified glyph relative to the
                 * origin of this <code>GlyphVector</code>.
                 * If <code>glyphIndex</code> equals the number of of glyphs in
                 * this <code>GlyphVector</code>, this method returns the position after
                 * the last glyph. This position is used to define the advance of
                 * the entire <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getGlyphPosition(glyphIndex: number): java.awt.geom.Point2D;
                /**
                 * Sets the position of the specified glyph within this
                 * <code>GlyphVector</code>.
                 * If <code>glyphIndex</code> equals the number of of glyphs in
                 * this <code>GlyphVector</code>, this method sets the position after
                 * the last glyph. This position is used to define the advance of
                 * the entire <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract setGlyphPosition(glyphIndex: number, newPos: java.awt.geom.Point2D): void;
                /**
                 * Returns the transform of the specified glyph within this
                 * <code>GlyphVector</code>.  The transform is relative to the
                 * glyph position.  If no special transform has been applied,
                 * <code>null</code> can be returned.  A null return indicates
                 * an identity transform.
                 */
                // @ts-ignore
                public abstract getGlyphTransform(glyphIndex: number): java.awt.geom.AffineTransform;
                /**
                 * Sets the transform of the specified glyph within this
                 * <code>GlyphVector</code>.  The transform is relative to the glyph
                 * position.  A <code>null</code> argument for <code>newTX</code>
                 * indicates that no special transform is applied for the specified
                 * glyph.
                 * This method can be used to rotate, mirror, translate and scale the
                 * glyph.  Adding a transform can result in significant performance changes.
                 */
                // @ts-ignore
                public abstract setGlyphTransform(glyphIndex: number, newTX: java.awt.geom.AffineTransform): void;
                /**
                 * Returns flags describing the global state of the GlyphVector.
                 * Flags not described below are reserved.  The default
                 * implementation returns 0 (meaning false) for the position adjustments,
                 * transforms, rtl, and complex flags.
                 * Subclassers should override this method, and make sure
                 * it correctly describes the GlyphVector and corresponds
                 * to the results of related calls.
                 */
                // @ts-ignore
                public getLayoutFlags(): number;
                /**
                 * Returns an array of glyph positions for the specified glyphs.
                 * This method is used for convenience and performance when
                 * processing glyph positions.
                 * If no array is passed in, a new array is created.
                 * Even numbered array entries beginning with position zero are the X
                 * coordinates of the glyph numbered <code>beginGlyphIndex + position/2</code>.
                 * Odd numbered array entries beginning with position one are the Y
                 * coordinates of the glyph numbered <code>beginGlyphIndex + (position-1)/2</code>.
                 * If <code>beginGlyphIndex</code> equals the number of of glyphs in
                 * this <code>GlyphVector</code>, this method gets the position after
                 * the last glyph and this position is used to define the advance of
                 * the entire <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getGlyphPositions(beginGlyphIndex: number, numEntries: number, positionReturn: number): number[];
                /**
                 * Returns the logical bounds of the specified glyph within this
                 * <code>GlyphVector</code>.
                 * These logical bounds have a total of four edges, with two edges
                 * parallel to the baseline under the glyph's transform and the other two
                 * edges are shared with adjacent glyphs if they are present.  This
                 * method is useful for hit-testing of the specified glyph,
                 * positioning of a caret at the leading or trailing edge of a glyph,
                 * and for drawing a highlight region around the specified glyph.
                 */
                // @ts-ignore
                public abstract getGlyphLogicalBounds(glyphIndex: number): java.awt.Shape;
                /**
                 * Returns the visual bounds of the specified glyph within the
                 * <code>GlyphVector</code>.
                 * The bounds returned by this method is positioned around the
                 * origin of each individual glyph.
                 */
                // @ts-ignore
                public abstract getGlyphVisualBounds(glyphIndex: number): java.awt.Shape;
                /**
                 * Returns the pixel bounds of the glyph at index when this
                 * <code>GlyphVector</code> is rendered in a <code>Graphics</code> with the
                 * given <code>FontRenderContext</code> at the given location. The
                 * renderFRC need not be the same as the
                 * <code>FontRenderContext</code> of this
                 * <code>GlyphVector</code>, and can be null.  If it is null, the
                 * <code>FontRenderContext</code> of this <code>GlyphVector</code>
                 * is used.  The default implementation returns the visual bounds of the glyph,
                 * offset to x, y and rounded out to the next integer value, and
                 * ignores the FRC.  Subclassers should override this method.
                 */
                // @ts-ignore
                public getGlyphPixelBounds(index: number, renderFRC: java.awt.font.FontRenderContext, x: number, y: number): java.awt.Rectangle;
                /**
                 * Returns the metrics of the glyph at the specified index into
                 * this <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getGlyphMetrics(glyphIndex: number): java.awt.font.GlyphMetrics;
                /**
                 * Returns the justification information for the glyph at
                 * the specified index into this <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract getGlyphJustificationInfo(glyphIndex: number): java.awt.font.GlyphJustificationInfo;
                /**
                 * Tests if the specified <code>GlyphVector</code> exactly
                 * equals this <code>GlyphVector</code>.
                 */
                // @ts-ignore
                public abstract equals(set: java.awt.font.GlyphVector): boolean;
            }
        }
    }
}
