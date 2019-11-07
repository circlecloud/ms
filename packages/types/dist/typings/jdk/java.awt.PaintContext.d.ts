declare namespace java {
    namespace awt {
        // @ts-ignore
        interface PaintContext {
            /**
             * Releases the resources allocated for the operation.
             */
            // @ts-ignore
             dispose(): void;
            /**
             * Returns the <code>ColorModel</code> of the output.  Note that
             * this <code>ColorModel</code> might be different from the hint
             * specified in the
             * {@link Paint#createContext(ColorModel, Rectangle, Rectangle2D,
             * AffineTransform, RenderingHints) createContext} method of
             * <code>Paint</code>.  Not all <code>PaintContext</code> objects are
             * capable of generating color patterns in an arbitrary
             * <code>ColorModel</code>.
             */
            // @ts-ignore
             getColorModel(): java.awt.image.ColorModel;
            /**
             * Returns a <code>Raster</code> containing the colors generated for
             * the graphics operation.
             */
            // @ts-ignore
             getRaster(x: number, y: number, w: number, h: number): java.awt.image.Raster;
        }
    }
}
