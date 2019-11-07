declare namespace java {
    namespace awt {
        // @ts-ignore
        interface Paint {
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate the color pattern.
             * The arguments to this method convey additional information
             * about the rendering operation that may be
             * used or ignored on various implementations of the {@code Paint} interface.
             * A caller must pass non-{@code null} values for all of the arguments
             * except for the {@code ColorModel} argument which may be {@code null} to
             * indicate that no specific {@code ColorModel} type is preferred.
             * Implementations of the {@code Paint} interface are allowed to use or ignore
             * any of the arguments as makes sense for their function, and are
             * not constrained to use the specified {@code ColorModel} for the returned
             * {@code PaintContext}, even if it is not {@code null}.
             * Implementations are allowed to throw {@code NullPointerException} for
             * any {@code null} argument other than the {@code ColorModel} argument,
             * but are not required to do so.
             */
            // @ts-ignore
             createContext(cm: java.awt.image.ColorModel, deviceBounds: java.awt.Rectangle, userBounds: java.awt.geom.Rectangle2D, xform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext;
        }
    }
}
