declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class ShapeGraphicAttribute extends java.awt.font.GraphicAttribute {
                /**
                 * Constructs a <code>ShapeGraphicAttribute</code> for the specified
                 * {@link Shape}.
                 */
                // @ts-ignore
                constructor(shape: java.awt.Shape, alignment: number, stroke: boolean)
                // @ts-ignore
                public static STROKE: boolean;
                // @ts-ignore
                public static FILL: boolean;
                /**
                 * Returns the ascent of this <code>ShapeGraphicAttribute</code>.  The
                 * ascent of a <code>ShapeGraphicAttribute</code> is the positive
                 * distance from the origin of its <code>Shape</code> to the top of
                 * bounds of its <code>Shape</code>.
                 */
                // @ts-ignore
                public getAscent(): number;
                /**
                 * Returns the descent of this <code>ShapeGraphicAttribute</code>.
                 * The descent of a <code>ShapeGraphicAttribute</code> is the distance
                 * from the origin of its <code>Shape</code> to the bottom of the
                 * bounds of its <code>Shape</code>.
                 */
                // @ts-ignore
                public getDescent(): number;
                /**
                 * Returns the advance of this <code>ShapeGraphicAttribute</code>.
                 * The advance of a <code>ShapeGraphicAttribute</code> is the distance
                 * from the origin of its <code>Shape</code> to the right side of the
                 * bounds of its <code>Shape</code>.
                 */
                // @ts-ignore
                public getAdvance(): number;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public draw(graphics: java.awt.Graphics2D, x: number, y: number): void;
                /**
                 * Returns a {@link Rectangle2D} that encloses all of the
                 * bits drawn by this <code>ShapeGraphicAttribute</code> relative to
                 * the rendering position.  A graphic can be rendered beyond its
                 * origin, ascent, descent, or advance;  but if it does, this method's
                 * implementation should indicate where the graphic is rendered.
                 */
                // @ts-ignore
                public getBounds(): java.awt.geom.Rectangle2D;
                /**
                 * Return a {@link java.awt.Shape} that represents the region that
                 * this <code>ShapeGraphicAttribute</code> renders.  This is used when a
                 * {@link TextLayout} is requested to return the outline of the text.
                 * The (untransformed) shape must not extend outside the rectangular
                 * bounds returned by <code>getBounds</code>.
                 */
                // @ts-ignore
                public getOutline(tx: java.awt.geom.AffineTransform): java.awt.Shape;
                /**
                 * Returns a hashcode for this <code>ShapeGraphicAttribute</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Compares this <code>ShapeGraphicAttribute</code> to the specified
                 * <code>Object</code>.
                 */
                // @ts-ignore
                public equals(rhs: java.lang.Object): boolean;
                /**
                 * Compares this <code>ShapeGraphicAttribute</code> to the specified
                 * <code>ShapeGraphicAttribute</code>.
                 */
                // @ts-ignore
                public equals(rhs: java.awt.font.ShapeGraphicAttribute): boolean;
            }
        }
    }
}
