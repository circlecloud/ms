declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
            abstract class GraphicAttribute extends java.lang.Object {
                /**
                 * Constructs a <code>GraphicAttribute</code>.
                 * Subclasses use this to define the alignment of the graphic.
                 */
                // @ts-ignore
                constructor(alignment: number)
                // @ts-ignore
                public static TOP_ALIGNMENT: number;
                // @ts-ignore
                public static BOTTOM_ALIGNMENT: number;
                // @ts-ignore
                public static ROMAN_BASELINE: number;
                // @ts-ignore
                public static CENTER_BASELINE: number;
                // @ts-ignore
                public static HANGING_BASELINE: number;
                /**
                 * Returns the ascent of this <code>GraphicAttribute</code>.  A
                 * graphic can be rendered above its ascent.
                 */
                // @ts-ignore
                public abstract getAscent(): number;
                /**
                 * Returns the descent of this <code>GraphicAttribute</code>.  A
                 * graphic can be rendered below its descent.
                 */
                // @ts-ignore
                public abstract getDescent(): number;
                /**
                 * Returns the advance of this <code>GraphicAttribute</code>.  The
                 * <code>GraphicAttribute</code> object's advance is the distance
                 * from the point at which the graphic is rendered and the point where
                 * the next character or graphic is rendered.  A graphic can be
                 * rendered beyond its advance
                 */
                // @ts-ignore
                public abstract getAdvance(): number;
                /**
                 * Returns a {@link Rectangle2D} that encloses all of the
                 * bits drawn by this <code>GraphicAttribute</code> relative to the
                 * rendering position.
                 * A graphic may be rendered beyond its origin, ascent, descent,
                 * or advance;  but if it is, this method's implementation must
                 * indicate where the graphic is rendered.
                 * Default bounds is the rectangle (0, -ascent, advance, ascent+descent).
                 */
                // @ts-ignore
                public getBounds(): java.awt.geom.Rectangle2D;
                /**
                 * Return a {@link java.awt.Shape} that represents the region that
                 * this <code>GraphicAttribute</code> renders.  This is used when a
                 * {@link TextLayout} is requested to return the outline of the text.
                 * The (untransformed) shape must not extend outside the rectangular
                 * bounds returned by <code>getBounds</code>.
                 * The default implementation returns the rectangle returned by
                 * {@link #getBounds}, transformed by the provided {@link AffineTransform}
                 * if present.
                 */
                // @ts-ignore
                public getOutline(tx: java.awt.geom.AffineTransform): java.awt.Shape;
                /**
                 * Renders this <code>GraphicAttribute</code> at the specified
                 * location.
                 */
                // @ts-ignore
                public abstract draw(graphics: java.awt.Graphics2D, x: number, y: number): void;
                /**
                 * Returns the alignment of this <code>GraphicAttribute</code>.
                 * Alignment can be to a particular baseline, or to the absolute top
                 * or bottom of a line.
                 */
                // @ts-ignore
                public getAlignment(): number;
                /**
                 * Returns the justification information for this
                 * <code>GraphicAttribute</code>.  Subclasses
                 * can override this method to provide different justification
                 * information.
                 */
                // @ts-ignore
                public getJustificationInfo(): java.awt.font.GlyphJustificationInfo;
            }
        }
    }
}
