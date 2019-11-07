// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class RadialGradientPaint extends java.awt.MultipleGradientPaint {
            /**
             * Constructs a {@code RadialGradientPaint} with a default
             * {@code NO_CYCLE} repeating method and {@code SRGB} color space,
             * using the center as the focus point.
             */
            // @ts-ignore
            constructor(cx: number, cy: number, radius: number, fractions: number, colors: java.awt.Color)
            /**
             * Constructs a {@code RadialGradientPaint} with a default
             * {@code NO_CYCLE} repeating method and {@code SRGB} color space,
             * using the center as the focus point.
             */
            // @ts-ignore
            constructor(center: java.awt.geom.Point2D, radius: number, fractions: number, colors: java.awt.Color)
            /**
             * Constructs a {@code RadialGradientPaint} with a default
             * {@code SRGB} color space, using the center as the focus point.
             */
            // @ts-ignore
            constructor(cx: number, cy: number, radius: number, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod)
            /**
             * Constructs a {@code RadialGradientPaint} with a default
             * {@code SRGB} color space, using the center as the focus point.
             */
            // @ts-ignore
            constructor(center: java.awt.geom.Point2D, radius: number, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod)
            /**
             * Constructs a {@code RadialGradientPaint} with a default
             * {@code SRGB} color space.
             */
            // @ts-ignore
            constructor(cx: number, cy: number, radius: number, fx: number, fy: number, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod)
            /**
             * Constructs a {@code RadialGradientPaint} with a default
             * {@code SRGB} color space.
             */
            // @ts-ignore
            constructor(center: java.awt.geom.Point2D, radius: number, focus: java.awt.geom.Point2D, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod)
            /**
             * Constructs a {@code RadialGradientPaint}.
             */
            // @ts-ignore
            constructor(center: java.awt.geom.Point2D, radius: number, focus: java.awt.geom.Point2D, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod, colorSpace: java.awt.MultipleGradientPaint.ColorSpaceType, gradientTransform: java.awt.geom.AffineTransform)
            /**
             * Constructs a {@code RadialGradientPaint} with a default
             * {@code SRGB} color space.
             * The gradient circle of the {@code RadialGradientPaint} is defined
             * by the given bounding box.
             * <p>
             * This constructor is a more convenient way to express the
             * following (equivalent) code:<br>
             * <pre>
             * double gw = gradientBounds.getWidth();
             * double gh = gradientBounds.getHeight();
             * double cx = gradientBounds.getCenterX();
             * double cy = gradientBounds.getCenterY();
             * Point2D center = new Point2D.Double(cx, cy);
             * AffineTransform gradientTransform = new AffineTransform();
             * gradientTransform.translate(cx, cy);
             * gradientTransform.scale(gw / 2, gh / 2);
             * gradientTransform.translate(-cx, -cy);
             * RadialGradientPaint gp =
             * new RadialGradientPaint(center, 1.0f, center,
             * fractions, colors,
             * cycleMethod,
             * ColorSpaceType.SRGB,
             * gradientTransform);
             * </pre>
             */
            // @ts-ignore
            constructor(gradientBounds: java.awt.geom.Rectangle2D, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod)
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate a circular radial color gradient pattern.
             * See the description of the {@link Paint#createContext createContext} method
             * for information on null parameter handling.
             */
            // @ts-ignore
            public createContext(cm: java.awt.image.ColorModel, deviceBounds: java.awt.Rectangle, userBounds: java.awt.geom.Rectangle2D, transform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext;
            /**
             * Returns a copy of the center point of the radial gradient.
             */
            // @ts-ignore
            public getCenterPoint(): java.awt.geom.Point2D;
            /**
             * Returns a copy of the focus point of the radial gradient.
             * Note that if the focus point specified when the radial gradient
             * was constructed lies outside of the radius of the circle, this
             * method will still return the original focus point even though
             * the rendering may center the rings of color on a different
             * point that lies inside the radius.
             */
            // @ts-ignore
            public getFocusPoint(): java.awt.geom.Point2D;
            /**
             * Returns the radius of the circle defining the radial gradient.
             */
            // @ts-ignore
            public getRadius(): number;
        }
    }
}
