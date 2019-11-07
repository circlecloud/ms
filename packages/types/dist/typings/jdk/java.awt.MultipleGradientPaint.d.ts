// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class MultipleGradientPaint extends java.lang.Object {
            /**
             * Returns a copy of the array of floats used by this gradient
             * to calculate color distribution.
             * The returned array always has 0 as its first value and 1 as its
             * last value, with increasing values in between.
             */
            // @ts-ignore
            public getFractions(): number[];
            /**
             * Returns a copy of the array of colors used by this gradient.
             * The first color maps to the first value in the fractions array,
             * and the last color maps to the last value in the fractions array.
             */
            // @ts-ignore
            public getColors(): java.awt.Color[];
            /**
             * Returns the enumerated type which specifies cycling behavior.
             */
            // @ts-ignore
            public getCycleMethod(): java.awt.MultipleGradientPaint.CycleMethod;
            /**
             * Returns the enumerated type which specifies color space for
             * interpolation.
             */
            // @ts-ignore
            public getColorSpace(): java.awt.MultipleGradientPaint.ColorSpaceType;
            /**
             * Returns a copy of the transform applied to the gradient.
             * <p>
             * Note that if no transform is applied to the gradient
             * when it is created, the identity transform is used.
             */
            // @ts-ignore
            public getTransform(): java.awt.geom.AffineTransform;
            /**
             * Returns the transparency mode for this {@code Paint} object.
             */
            // @ts-ignore
            public getTransparency(): number;
        }
    }
}
