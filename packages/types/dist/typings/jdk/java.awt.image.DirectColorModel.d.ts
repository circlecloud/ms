declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class DirectColorModel extends java.awt.image.PackedColorModel {
                /**
                 * Constructs a <code>DirectColorModel</code> from the specified masks
                 * that indicate which bits in an <code>int</code> pixel representation
                 * contain the red, green and blue color samples.  As pixel values do not
                 * contain alpha information, all pixels are treated as opaque, which
                 * means that alpha&nbsp;=&nbsp;1.0.  All of the bits
                 * in each mask must be contiguous and fit in the specified number
                 * of least significant bits of an <code>int</code> pixel representation.
                 * The <code>ColorSpace</code> is the default sRGB space. The
                 * transparency value is Transparency.OPAQUE.  The transfer type
                 * is the smallest of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * or DataBuffer.TYPE_INT that can hold a single pixel.
                 */
                // @ts-ignore
                constructor(bits: number, rmask: number, gmask: number, bmask: number)
                /**
                 * Constructs a <code>DirectColorModel</code> from the specified masks
                 * that indicate which bits in an <code>int</code> pixel representation
                 * contain the red, green and blue color samples and the alpha sample,
                 * if present.  If <code>amask</code> is 0, pixel values do not contain
                 * alpha information and all pixels are treated as opaque, which means
                 * that alpha&nbsp;=&nbsp;1.0.  All of the bits in each mask must
                 * be contiguous and fit in the specified number of least significant bits
                 * of an <code>int</code> pixel representation.  Alpha, if present, is not
                 * premultiplied.  The <code>ColorSpace</code> is the default sRGB space.
                 * The transparency value is Transparency.OPAQUE if no alpha is
                 * present, or Transparency.TRANSLUCENT otherwise.  The transfer type
                 * is the smallest of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * or DataBuffer.TYPE_INT that can hold a single pixel.
                 */
                // @ts-ignore
                constructor(bits: number, rmask: number, gmask: number, bmask: number, amask: number)
                /**
                 * Constructs a <code>DirectColorModel</code> from the specified
                 * parameters.  Color components are in the specified
                 * <code>ColorSpace</code>, which must be of type ColorSpace.TYPE_RGB
                 * and have minimum normalized component values which are all 0.0
                 * and maximum values which are all 1.0.
                 * The masks specify which bits in an <code>int</code> pixel
                 * representation contain the red, green and blue color samples and
                 * the alpha sample, if present.  If <code>amask</code> is 0, pixel
                 * values do not contain alpha information and all pixels are treated
                 * as opaque, which means that alpha&nbsp;=&nbsp;1.0.  All of the
                 * bits in each mask must be contiguous and fit in the specified number
                 * of least significant bits of an <code>int</code> pixel
                 * representation.  If there is alpha, the <code>boolean</code>
                 * <code>isAlphaPremultiplied</code> specifies how to interpret
                 * color and alpha samples in pixel values.  If the <code>boolean</code>
                 * is <code>true</code>, color samples are assumed to have been
                 * multiplied by the alpha sample.  The transparency value is
                 * Transparency.OPAQUE, if no alpha is present, or
                 * Transparency.TRANSLUCENT otherwise.  The transfer type
                 * is the type of primitive array used to represent pixel values and
                 * must be one of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT, or
                 * DataBuffer.TYPE_INT.
                 */
                // @ts-ignore
                constructor(space: java.awt.color.ColorSpace, bits: number, rmask: number, gmask: number, bmask: number, amask: number, isAlphaPremultiplied: boolean, transferType: number)
                /**
                 * Returns the mask indicating which bits in an <code>int</code> pixel
                 * representation contain the red color component.
                 */
                // @ts-ignore
                public getRedMask(): number;
                /**
                 * Returns the mask indicating which bits in an <code>int</code> pixel
                 * representation contain the green color component.
                 */
                // @ts-ignore
                public getGreenMask(): number;
                /**
                 * Returns the mask indicating which bits in an <code>int</code> pixel
                 * representation contain the blue color component.
                 */
                // @ts-ignore
                public getBlueMask(): number;
                /**
                 * Returns the mask indicating which bits in an <code>int</code> pixel
                 * representation contain the alpha component.
                 */
                // @ts-ignore
                public getAlphaMask(): number;
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * as an <code>int</code>.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the red value
                 * is 0.
                 */
                // @ts-ignore
                public getRed(pixel: number): number;
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * as an <code>int</code>.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the green value
                 * is 0.
                 */
                // @ts-ignore
                public getGreen(pixel: number): number;
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * as an <code>int</code>.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the blue value
                 * is 0.
                 */
                // @ts-ignore
                public getBlue(pixel: number): number;
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.  The pixel value is specified as an <code>int</code>.
                 */
                // @ts-ignore
                public getAlpha(pixel: number): number;
                /**
                 * Returns the color/alpha components of the pixel in the default
                 * RGB color model format.  A color conversion is done if necessary.
                 * The pixel value is specified as an <code>int</code>.
                 * The returned value is in a non pre-multiplied format.  Thus, if
                 * the alpha is premultiplied, this method divides it out of the
                 * color components.  If the alpha value is 0, for example, the color
                 * values are each 0.
                 */
                // @ts-ignore
                public getRGB(pixel: number): number;
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * by an array of data elements of type <code>transferType</code> passed
                 * in as an object reference.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the red value
                 * is 0.
                 * If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is
                 * thrown.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a
                 * pixel value for this <code>ColorModel</code>.  Since
                 * <code>DirectColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * An <code>UnsupportedOperationException</code> is thrown if this
                 * <code>transferType</code> is not supported by this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public getRed(inData: java.lang.Object): number;
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * by an array of data elements of type <code>transferType</code> passed
                 * in as an object reference.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the green value
                 * is 0.  If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  Since
                 * <code>DirectColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * An <code>UnsupportedOperationException</code> is
                 * thrown if this <code>transferType</code> is not supported by this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public getGreen(inData: java.lang.Object): number;
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is specified
                 * by an array of data elements of type <code>transferType</code> passed
                 * in as an object reference.
                 * The returned value is a non pre-multiplied value.  Thus, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, for example, the blue value
                 * is 0.  If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  Since
                 * <code>DirectColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * An <code>UnsupportedOperationException</code> is
                 * thrown if this <code>transferType</code> is not supported by this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public getBlue(inData: java.lang.Object): number;
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.  The pixel value is specified by an array of data
                 * elements of type <code>transferType</code> passed in as an object
                 * reference.
                 * If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is
                 * thrown.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  Since
                 * <code>DirectColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 * If this <code>transferType</code> is not supported, an
                 * <code>UnsupportedOperationException</code> is thrown.
                 */
                // @ts-ignore
                public getAlpha(inData: java.lang.Object): number;
                /**
                 * Returns the color/alpha components for the specified pixel in the
                 * default RGB color model format.  A color conversion is done if
                 * necessary.  The pixel value is specified by an array of data
                 * elements of type <code>transferType</code> passed in as an object
                 * reference.  If <code>inData</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code> is
                 * thrown.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.
                 * The returned value is in a non pre-multiplied format.  Thus, if
                 * the alpha is premultiplied, this method divides it out of the
                 * color components.  If the alpha value is 0, for example, the color
                 * values is 0.  Since <code>DirectColorModel</code> can be
                 * subclassed, subclasses inherit the implementation of this method
                 * and if they don't override it then
                 * they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public getRGB(inData: java.lang.Object): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code>, given an integer pixel representation in the
                 * default RGB color model.
                 * This array can then be passed to the <code>setDataElements</code>
                 * method of a <code>WritableRaster</code> object.  If the pixel variable
                 * is <code>null</code>, a new array is allocated.  If <code>pixel</code>
                 * is not <code>null</code>, it must be a primitive array of type
                 * <code>transferType</code>; otherwise, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>pixel</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  The pixel array is returned.
                 * Since <code>DirectColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public getDataElements(rgb: number, pixel: java.lang.Object): java.lang.Object;
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <code>ColorModel</code>.  The pixel value is specified as an
                 * <code>int</code>.  If the <code>components</code> array is
                 * <code>null</code>, a new array is allocated.  The
                 * <code>components</code> array is returned.  Color/alpha components are
                 * stored in the <code>components</code> array starting at
                 * <code>offset</code>, even if the array is allocated by this method.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * <code>components</code> array is not <code>null</code> and is not large
                 * enough to hold all the color and alpha components, starting at
                 * <code>offset</code>.
                 */
                // @ts-ignore
                public getComponents(pixel: number, components: number, offset: number): number[];
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <code>ColorModel</code>.  The pixel value is specified by an
                 * array of data elements of type <code>transferType</code> passed in as
                 * an object reference.  If <code>pixel</code> is not a primitive array
                 * of type <code>transferType</code>, a <code>ClassCastException</code>
                 * is thrown.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>pixel</code> is not large enough to hold a
                 * pixel value for this <code>ColorModel</code>.  If the
                 * <code>components</code> array is <code>null</code>, a new
                 * array is allocated.  The <code>components</code> array is returned.
                 * Color/alpha components are stored in the <code>components</code> array
                 * starting at <code>offset</code>, even if the array is allocated by
                 * this method.  An <code>ArrayIndexOutOfBoundsException</code>
                 * is thrown if the <code>components</code> array is not
                 * <code>null</code> and is not large enough to hold all the color and
                 * alpha components, starting at <code>offset</code>.
                 * Since <code>DirectColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public getComponents(pixel: java.lang.Object, components: number, offset: number): number[];
                /**
                 * Creates a <code>WritableRaster</code> with the specified width and
                 * height that has a data layout (<code>SampleModel</code>) compatible
                 * with this <code>ColorModel</code>.
                 */
                // @ts-ignore
                public createCompatibleWritableRaster(w: number, h: number): java.awt.image.WritableRaster;
                /**
                 * Returns a pixel value represented as an <code>int</code> in this
                 * <code>ColorModel</code>, given an array of unnormalized color/alpha
                 * components.   An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if the <code>components</code> array is
                 * not large enough to hold all the color and alpha components, starting
                 * at <code>offset</code>.
                 */
                // @ts-ignore
                public getDataElement(components: number, offset: number): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code>, given an array of unnormalized color/alpha
                 * components.
                 * This array can then be passed to the <code>setDataElements</code>
                 * method of a <code>WritableRaster</code> object.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * <code>components</code> array
                 * is not large enough to hold all the color and alpha components,
                 * starting at offset.  If the <code>obj</code> variable is
                 * <code>null</code>, a new array is allocated.  If <code>obj</code> is
                 * not <code>null</code>, it must be a primitive array
                 * of type <code>transferType</code>; otherwise, a
                 * <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>obj</code> is not large enough to hold a pixel value for this
                 * <code>ColorModel</code>.
                 * Since <code>DirectColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public getDataElements(components: number, offset: number, obj: java.lang.Object): java.lang.Object;
                /**
                 * Forces the raster data to match the state specified in the
                 * <code>isAlphaPremultiplied</code> variable, assuming the data is
                 * currently correctly described by this <code>ColorModel</code>.  It
                 * may multiply or divide the color raster data by alpha, or do
                 * nothing if the data is in the correct state.  If the data needs to
                 * be coerced, this method will also return an instance of this
                 * <code>ColorModel</code> with the <code>isAlphaPremultiplied</code>
                 * flag set appropriately.  This method will throw a
                 * <code>UnsupportedOperationException</code> if this transferType is
                 * not supported by this <code>ColorModel</code>.  Since
                 * <code>ColorModel</code> can be subclassed, subclasses inherit the
                 * implementation of this method and if they don't override it then
                 * they throw an exception if they use an unsupported transferType.
                 */
                // @ts-ignore
                public coerceData(raster: java.awt.image.WritableRaster, isAlphaPremultiplied: boolean): java.awt.image.ColorModel;
                /**
                 * Returns <code>true</code> if <code>raster</code> is compatible
                 * with this <code>ColorModel</code> and <code>false</code> if it is
                 * not.
                 */
                // @ts-ignore
                public isCompatibleRaster(raster: java.awt.image.Raster): boolean;
                /**
                 * Returns a <code>String</code> that represents this
                 * <code>DirectColorModel</code>.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
