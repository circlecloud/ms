declare namespace java {
    namespace awt {
        // @ts-ignore
         class TexturePaint extends java.lang.Object {
            /**
             * Constructs a <code>TexturePaint</code> object.
             */
            // @ts-ignore
            constructor(txtr: java.awt.image.BufferedImage, anchor: java.awt.geom.Rectangle2D)
            /**
             * Returns the <code>BufferedImage</code> texture used to
             * fill the shapes.
             */
            // @ts-ignore
            public getImage(): java.awt.image.BufferedImage;
            /**
             * Returns a copy of the anchor rectangle which positions and
             * sizes the textured image.
             */
            // @ts-ignore
            public getAnchorRect(): java.awt.geom.Rectangle2D;
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate a tiled image pattern.
             * See the {@link Paint#createContext specification} of the
             * method in the {@link Paint} interface for information
             * on null parameter handling.
             */
            // @ts-ignore
            public createContext(cm: java.awt.image.ColorModel, deviceBounds: java.awt.Rectangle, userBounds: java.awt.geom.Rectangle2D, xform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext;
            /**
             * Returns the transparency mode for this <code>TexturePaint</code>.
             */
            // @ts-ignore
            public getTransparency(): number;
        }
    }
}
