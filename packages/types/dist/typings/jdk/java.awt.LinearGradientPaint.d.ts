// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class LinearGradientPaint extends java.awt.MultipleGradientPaint {
            /**
             * Constructs a {@code LinearGradientPaint} with a default
             * {@code NO_CYCLE} repeating method and {@code SRGB} color space.
             */
            // @ts-ignore
            constructor(startX: number, startY: number, endX: number, endY: number, fractions: number, colors: java.awt.Color)
            /**
             * Constructs a {@code LinearGradientPaint} with a default {@code SRGB}
             * color space.
             */
            // @ts-ignore
            constructor(startX: number, startY: number, endX: number, endY: number, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod)
            /**
             * Constructs a {@code LinearGradientPaint} with a default
             * {@code NO_CYCLE} repeating method and {@code SRGB} color space.
             */
            // @ts-ignore
            constructor(start: java.awt.geom.Point2D, end: java.awt.geom.Point2D, fractions: number, colors: java.awt.Color)
            /**
             * Constructs a {@code LinearGradientPaint} with a default {@code SRGB}
             * color space.
             */
            // @ts-ignore
            constructor(start: java.awt.geom.Point2D, end: java.awt.geom.Point2D, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod)
            /**
             * Constructs a {@code LinearGradientPaint}.
             */
            // @ts-ignore
            constructor(start: java.awt.geom.Point2D, end: java.awt.geom.Point2D, fractions: number, colors: java.awt.Color, cycleMethod: java.awt.MultipleGradientPaint.CycleMethod, colorSpace: java.awt.MultipleGradientPaint.ColorSpaceType, gradientTransform: java.awt.geom.AffineTransform)
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate a linear color gradient pattern.
             * See the {@link Paint#createContext specification} of the
             * method in the {@link Paint} interface for information
             * on null parameter handling.
             */
            // @ts-ignore
            public createContext(cm: java.awt.image.ColorModel, deviceBounds: java.awt.Rectangle, userBounds: java.awt.geom.Rectangle2D, transform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext;
            /**
             * Returns a copy of the start point of the gradient axis.
             */
            // @ts-ignore
            public getStartPoint(): java.awt.geom.Point2D;
            /**
             * Returns a copy of the end point of the gradient axis.
             */
            // @ts-ignore
            public getEndPoint(): java.awt.geom.Point2D;
        }
    }
}
