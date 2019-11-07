declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            abstract class PackedColorModel extends java.awt.image.ColorModel {
                /**
                 * Constructs a <code>PackedColorModel</code> from a color mask array,
                 * which specifies which bits in an <code>int</code> pixel representation
                 * contain each of the color samples, and an alpha mask.  Color
                 * components are in the specified <code>ColorSpace</code>.  The length of
                 * <code>colorMaskArray</code> should be the number of components in
                 * the <code>ColorSpace</code>.  All of the bits in each mask
                 * must be contiguous and fit in the specified number of least significant
                 * bits of an <code>int</code> pixel representation.  If the
                 * <code>alphaMask</code> is 0, there is no alpha.  If there is alpha,
                 * the <code>boolean</code> <code>isAlphaPremultiplied</code> specifies
                 * how to interpret color and alpha samples in pixel values.  If the
                 * <code>boolean</code> is <code>true</code>, color samples are assumed
                 * to have been multiplied by the alpha sample.  The transparency,
                 * <code>trans</code>, specifies what alpha values can be represented
                 * by this color model.  The transfer type is the type of primitive
                 * array used to represent pixel values.
                 */
                // @ts-ignore
                constructor(space: java.awt.color.ColorSpace, bits: number, colorMaskArray: number, alphaMask: number, isAlphaPremultiplied: boolean, trans: number, transferType: number)
                /**
                 * Constructs a <code>PackedColorModel</code> from the specified
                 * masks which indicate which bits in an <code>int</code> pixel
                 * representation contain the alpha, red, green and blue color samples.
                 * Color components are in the specified <code>ColorSpace</code>, which
                 * must be of type ColorSpace.TYPE_RGB.  All of the bits in each
                 * mask must be contiguous and fit in the specified number of
                 * least significant bits of an <code>int</code> pixel representation.  If
                 * <code>amask</code> is 0, there is no alpha.  If there is alpha,
                 * the <code>boolean</code> <code>isAlphaPremultiplied</code>
                 * specifies how to interpret color and alpha samples
                 * in pixel values.  If the <code>boolean</code> is <code>true</code>,
                 * color samples are assumed to have been multiplied by the alpha sample.
                 * The transparency, <code>trans</code>, specifies what alpha values
                 * can be represented by this color model.
                 * The transfer type is the type of primitive array used to represent
                 * pixel values.
                 */
                // @ts-ignore
                constructor(space: java.awt.color.ColorSpace, bits: number, rmask: number, gmask: number, bmask: number, amask: number, isAlphaPremultiplied: boolean, trans: number, transferType: number)
                /**
                 * Returns the mask indicating which bits in a pixel
                 * contain the specified color/alpha sample.  For color
                 * samples, <code>index</code> corresponds to the placement of color
                 * sample names in the color space.  Thus, an <code>index</code>
                 * equal to 0 for a CMYK ColorSpace would correspond to
                 * Cyan and an <code>index</code> equal to 1 would correspond to
                 * Magenta.  If there is alpha, the alpha <code>index</code> would be:
                 * <pre>
                 * alphaIndex = numComponents() - 1;
                 * </pre>
                 */
                // @ts-ignore
                public getMask(index: number): number;
                /**
                 * Returns a mask array indicating which bits in a pixel
                 * contain the color and alpha samples.
                 */
                // @ts-ignore
                public getMasks(): number[];
                /**
                 * Creates a <code>SampleModel</code> with the specified width and
                 * height that has a data layout compatible with this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Checks if the specified <code>SampleModel</code> is compatible
                 * with this <code>ColorModel</code>.  If <code>sm</code> is
                 * <code>null</code>, this method returns <code>false</code>.
                 */
                // @ts-ignore
                public isCompatibleSampleModel(sm: java.awt.image.SampleModel): boolean;
                /**
                 * Returns a {@link WritableRaster} representing the alpha channel of
                 * an image, extracted from the input <code>WritableRaster</code>.
                 * This method assumes that <code>WritableRaster</code> objects
                 * associated with this <code>ColorModel</code> store the alpha band,
                 * if present, as the last band of image data.  Returns <code>null</code>
                 * if there is no separate spatial alpha channel associated with this
                 * <code>ColorModel</code>.  This method creates a new
                 * <code>WritableRaster</code>, but shares the data array.
                 */
                // @ts-ignore
                public getAlphaRaster(raster: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Tests if the specified <code>Object</code> is an instance
                 * of <code>PackedColorModel</code> and equals this
                 * <code>PackedColorModel</code>.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
