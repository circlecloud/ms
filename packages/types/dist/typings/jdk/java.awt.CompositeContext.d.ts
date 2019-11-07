declare namespace java {
    namespace awt {
        // @ts-ignore
        interface CompositeContext {
            /**
             * Releases resources allocated for a context.
             */
            // @ts-ignore
             dispose(): void;
            /**
             * Composes the two source {@link Raster} objects and
             * places the result in the destination
             * {@link WritableRaster}.  Note that the destination
             * can be the same object as either the first or second
             * source. Note that <code>dstIn</code> and
             * <code>dstOut</code> must be compatible with the
             * <code>dstColorModel</code> passed to the
             * {@link Composite#createContext(java.awt.image.ColorModel, java.awt.image.ColorModel, java.awt.RenderingHints) createContext}
             * method of the <code>Composite</code> interface.
             */
            // @ts-ignore
             compose(src: java.awt.image.Raster, dstIn: java.awt.image.Raster, dstOut: java.awt.image.WritableRaster): void;
        }
    }
}
