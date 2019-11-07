// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace font {
            // @ts-ignore
             class ImageGraphicAttribute extends java.awt.font.GraphicAttribute {
                /**
                 * Constucts an <code>ImageGraphicAttribute</code> from the specified
                 * {@link Image}.  The origin is at (0,&nbsp;0).
                 */
                // @ts-ignore
                constructor(image: java.awt.Image, alignment: number)
                /**
                 * Constructs an <code>ImageGraphicAttribute</code> from the specified
                 * <code>Image</code>. The point
                 * (<code>originX</code>,&nbsp;<code>originY</code>) in the
                 * <code>Image</code> appears at the origin of the
                 * <code>ImageGraphicAttribute</code> within the text.
                 */
                // @ts-ignore
                constructor(image: java.awt.Image, alignment: number, originX: number, originY: number)
                /**
                 * Returns the ascent of this <code>ImageGraphicAttribute</code>.  The
                 * ascent of an <code>ImageGraphicAttribute</code> is the distance
                 * from the top of the image to the origin.
                 */
                // @ts-ignore
                public getAscent(): number;
                /**
                 * Returns the descent of this <code>ImageGraphicAttribute</code>.
                 * The descent of an <code>ImageGraphicAttribute</code> is the
                 * distance from the origin to the bottom of the image.
                 */
                // @ts-ignore
                public getDescent(): number;
                /**
                 * Returns the advance of this <code>ImageGraphicAttribute</code>.
                 * The advance of an <code>ImageGraphicAttribute</code> is the
                 * distance from the origin to the right edge of the image.
                 */
                // @ts-ignore
                public getAdvance(): number;
                /**
                 * Returns a {@link Rectangle2D} that encloses all of the
                 * bits rendered by this <code>ImageGraphicAttribute</code>, relative
                 * to the rendering position.  A graphic can be rendered beyond its
                 * origin, ascent, descent, or advance;  but if it is, this
                 * method's implementation must indicate where the graphic is rendered.
                 */
                // @ts-ignore
                public getBounds(): java.awt.geom.Rectangle2D;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public draw(graphics: java.awt.Graphics2D, x: number, y: number): void;
                /**
                 * Returns a hashcode for this <code>ImageGraphicAttribute</code>.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Compares this <code>ImageGraphicAttribute</code> to the specified
                 * {@link Object}.
                 */
                // @ts-ignore
                public equals(rhs: java.lang.Object): boolean;
                /**
                 * Compares this <code>ImageGraphicAttribute</code> to the specified
                 * <code>ImageGraphicAttribute</code>.
                 */
                // @ts-ignore
                public equals(rhs: java.awt.font.ImageGraphicAttribute): boolean;
            }
        }
    }
}
