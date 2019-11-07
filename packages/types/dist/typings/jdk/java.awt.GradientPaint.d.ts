declare namespace java {
    namespace awt {
        // @ts-ignore
         class GradientPaint extends java.lang.Object {
            /**
             * Constructs a simple acyclic <code>GradientPaint</code> object.
             */
            // @ts-ignore
            constructor(x1: number, y1: number, color1: java.awt.Color, x2: number, y2: number, color2: java.awt.Color)
            /**
             * Constructs a simple acyclic <code>GradientPaint</code> object.
             */
            // @ts-ignore
            constructor(pt1: java.awt.geom.Point2D, color1: java.awt.Color, pt2: java.awt.geom.Point2D, color2: java.awt.Color)
            /**
             * Constructs either a cyclic or acyclic <code>GradientPaint</code>
             * object depending on the <code>boolean</code> parameter.
             */
            // @ts-ignore
            constructor(x1: number, y1: number, color1: java.awt.Color, x2: number, y2: number, color2: java.awt.Color, cyclic: boolean)
            /**
             * Constructs either a cyclic or acyclic <code>GradientPaint</code>
             * object depending on the <code>boolean</code> parameter.
             */
            // @ts-ignore
            constructor(pt1: java.awt.geom.Point2D, color1: java.awt.Color, pt2: java.awt.geom.Point2D, color2: java.awt.Color, cyclic: boolean)
            /**
             * Returns a copy of the point P1 that anchors the first color.
             */
            // @ts-ignore
            public getPoint1(): java.awt.geom.Point2D;
            /**
             * Returns the color C1 anchored by the point P1.
             */
            // @ts-ignore
            public getColor1(): java.awt.Color;
            /**
             * Returns a copy of the point P2 which anchors the second color.
             */
            // @ts-ignore
            public getPoint2(): java.awt.geom.Point2D;
            /**
             * Returns the color C2 anchored by the point P2.
             */
            // @ts-ignore
            public getColor2(): java.awt.Color;
            /**
             * Returns <code>true</code> if the gradient cycles repeatedly
             * between the two colors C1 and C2.
             */
            // @ts-ignore
            public isCyclic(): boolean;
            /**
             * Creates and returns a {@link PaintContext} used to
             * generate a linear color gradient pattern.
             * See the {@link Paint#createContext specification} of the
             * method in the {@link Paint} interface for information
             * on null parameter handling.
             */
            // @ts-ignore
            public createContext(cm: java.awt.image.ColorModel, deviceBounds: java.awt.Rectangle, userBounds: java.awt.geom.Rectangle2D, xform: java.awt.geom.AffineTransform, hints: java.awt.RenderingHints): java.awt.PaintContext;
            /**
             * Returns the transparency mode for this <code>GradientPaint</code>.
             */
            // @ts-ignore
            public getTransparency(): number;
        }
    }
}
