// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace color {
            // @ts-ignore
            abstract class ColorSpace extends java.lang.Object {
                /**
                 * Constructs a ColorSpace object given a color space type
                 * and the number of components.
                 */
                // @ts-ignore
                constructor(type: number, numcomponents: number)
                // @ts-ignore
                public static TYPE_XYZ: number;
                // @ts-ignore
                public static TYPE_Lab: number;
                // @ts-ignore
                public static TYPE_Luv: number;
                // @ts-ignore
                public static TYPE_YCbCr: number;
                // @ts-ignore
                public static TYPE_Yxy: number;
                // @ts-ignore
                public static TYPE_RGB: number;
                // @ts-ignore
                public static TYPE_GRAY: number;
                // @ts-ignore
                public static TYPE_HSV: number;
                // @ts-ignore
                public static TYPE_HLS: number;
                // @ts-ignore
                public static TYPE_CMYK: number;
                // @ts-ignore
                public static TYPE_CMY: number;
                // @ts-ignore
                public static TYPE_2CLR: number;
                // @ts-ignore
                public static TYPE_3CLR: number;
                // @ts-ignore
                public static TYPE_4CLR: number;
                // @ts-ignore
                public static TYPE_5CLR: number;
                // @ts-ignore
                public static TYPE_6CLR: number;
                // @ts-ignore
                public static TYPE_7CLR: number;
                // @ts-ignore
                public static TYPE_8CLR: number;
                // @ts-ignore
                public static TYPE_9CLR: number;
                // @ts-ignore
                public static TYPE_ACLR: number;
                // @ts-ignore
                public static TYPE_BCLR: number;
                // @ts-ignore
                public static TYPE_CCLR: number;
                // @ts-ignore
                public static TYPE_DCLR: number;
                // @ts-ignore
                public static TYPE_ECLR: number;
                // @ts-ignore
                public static TYPE_FCLR: number;
                // @ts-ignore
                public static CS_sRGB: number;
                // @ts-ignore
                public static CS_LINEAR_RGB: number;
                // @ts-ignore
                public static CS_CIEXYZ: number;
                // @ts-ignore
                public static CS_PYCC: number;
                // @ts-ignore
                public static CS_GRAY: number;
                /**
                 * Returns a ColorSpace representing one of the specific
                 * predefined color spaces.
                 */
                // @ts-ignore
                public static getInstance(colorspace: number): java.awt.color.ColorSpace;
                /**
                 * Returns true if the ColorSpace is CS_sRGB.
                 */
                // @ts-ignore
                public isCS_sRGB(): boolean;
                /**
                 * Transforms a color value assumed to be in this ColorSpace
                 * into a value in the default CS_sRGB color space.
                 * <p>
                 * This method transforms color values using algorithms designed
                 * to produce the best perceptual match between input and output
                 * colors.  In order to do colorimetric conversion of color values,
                 * you should use the <code>toCIEXYZ</code>
                 * method of this color space to first convert from the input
                 * color space to the CS_CIEXYZ color space, and then use the
                 * <code>fromCIEXYZ</code> method of the CS_sRGB color space to
                 * convert from CS_CIEXYZ to the output color space.
                 * See {@link #toCIEXYZ(float[]) toCIEXYZ} and
                 * {@link #fromCIEXYZ(float[]) fromCIEXYZ} for further information.
                 * <p>
                 */
                // @ts-ignore
                public abstract toRGB(colorvalue: number): number[];
                /**
                 * Transforms a color value assumed to be in the default CS_sRGB
                 * color space into this ColorSpace.
                 * <p>
                 * This method transforms color values using algorithms designed
                 * to produce the best perceptual match between input and output
                 * colors.  In order to do colorimetric conversion of color values,
                 * you should use the <code>toCIEXYZ</code>
                 * method of the CS_sRGB color space to first convert from the input
                 * color space to the CS_CIEXYZ color space, and then use the
                 * <code>fromCIEXYZ</code> method of this color space to
                 * convert from CS_CIEXYZ to the output color space.
                 * See {@link #toCIEXYZ(float[]) toCIEXYZ} and
                 * {@link #fromCIEXYZ(float[]) fromCIEXYZ} for further information.
                 * <p>
                 */
                // @ts-ignore
                public abstract fromRGB(rgbvalue: number): number[];
                /**
                 * Transforms a color value assumed to be in this ColorSpace
                 * into the CS_CIEXYZ conversion color space.
                 * <p>
                 * This method transforms color values using relative colorimetry,
                 * as defined by the International Color Consortium standard.  This
                 * means that the XYZ values returned by this method are represented
                 * relative to the D50 white point of the CS_CIEXYZ color space.
                 * This representation is useful in a two-step color conversion
                 * process in which colors are transformed from an input color
                 * space to CS_CIEXYZ and then to an output color space.  This
                 * representation is not the same as the XYZ values that would
                 * be measured from the given color value by a colorimeter.
                 * A further transformation is necessary to compute the XYZ values
                 * that would be measured using current CIE recommended practices.
                 * See the {@link ICC_ColorSpace#toCIEXYZ(float[]) toCIEXYZ} method of
                 * <code>ICC_ColorSpace</code> for further information.
                 * <p>
                 */
                // @ts-ignore
                public abstract toCIEXYZ(colorvalue: number): number[];
                /**
                 * Transforms a color value assumed to be in the CS_CIEXYZ conversion
                 * color space into this ColorSpace.
                 * <p>
                 * This method transforms color values using relative colorimetry,
                 * as defined by the International Color Consortium standard.  This
                 * means that the XYZ argument values taken by this method are represented
                 * relative to the D50 white point of the CS_CIEXYZ color space.
                 * This representation is useful in a two-step color conversion
                 * process in which colors are transformed from an input color
                 * space to CS_CIEXYZ and then to an output color space.  The color
                 * values returned by this method are not those that would produce
                 * the XYZ value passed to the method when measured by a colorimeter.
                 * If you have XYZ values corresponding to measurements made using
                 * current CIE recommended practices, they must be converted to D50
                 * relative values before being passed to this method.
                 * See the {@link ICC_ColorSpace#fromCIEXYZ(float[]) fromCIEXYZ} method of
                 * <code>ICC_ColorSpace</code> for further information.
                 * <p>
                 */
                // @ts-ignore
                public abstract fromCIEXYZ(colorvalue: number): number[];
                /**
                 * Returns the color space type of this ColorSpace (for example
                 * TYPE_RGB, TYPE_XYZ, ...).  The type defines the
                 * number of components of the color space and the interpretation,
                 * e.g. TYPE_RGB identifies a color space with three components - red,
                 * green, and blue.  It does not define the particular color
                 * characteristics of the space, e.g. the chromaticities of the
                 * primaries.
                 */
                // @ts-ignore
                public getType(): number;
                /**
                 * Returns the number of components of this ColorSpace.
                 */
                // @ts-ignore
                public getNumComponents(): number;
                /**
                 * Returns the name of the component given the component index.
                 */
                // @ts-ignore
                public getName(idx: number): string;
                /**
                 * Returns the minimum normalized color component value for the
                 * specified component.  The default implementation in this abstract
                 * class returns 0.0 for all components.  Subclasses should override
                 * this method if necessary.
                 */
                // @ts-ignore
                public getMinValue(component: number): number;
                /**
                 * Returns the maximum normalized color component value for the
                 * specified component.  The default implementation in this abstract
                 * class returns 1.0 for all components.  Subclasses should override
                 * this method if necessary.
                 */
                // @ts-ignore
                public getMaxValue(component: number): number;
            }
        }
    }
}
