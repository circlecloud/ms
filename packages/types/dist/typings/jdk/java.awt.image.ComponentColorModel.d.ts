declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class ComponentColorModel extends java.awt.image.ColorModel {
                /**
                 * Constructs a <CODE>ComponentColorModel</CODE> from the specified
                 * parameters. Color components will be in the specified
                 * <CODE>ColorSpace</CODE>.  The supported transfer types are
                 * <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 * <CODE>DataBuffer.TYPE_INT</CODE>,
                 * <CODE>DataBuffer.TYPE_SHORT</CODE>, <CODE>DataBuffer.TYPE_FLOAT</CODE>,
                 * and <CODE>DataBuffer.TYPE_DOUBLE</CODE>.
                 * If not null, the <CODE>bits</CODE> array specifies the
                 * number of significant bits per color and alpha component and its
                 * length should be at least the number of components in the
                 * <CODE>ColorSpace</CODE> if there is no alpha
                 * information in the pixel values, or one more than this number if
                 * there is alpha information.  When the <CODE>transferType</CODE> is
                 * <CODE>DataBuffer.TYPE_SHORT</CODE>, <CODE>DataBuffer.TYPE_FLOAT</CODE>,
                 * or <CODE>DataBuffer.TYPE_DOUBLE</CODE> the <CODE>bits</CODE> array
                 * argument is ignored.  <CODE>hasAlpha</CODE> indicates whether alpha
                 * information is present.  If <CODE>hasAlpha</CODE> is true, then
                 * the boolean <CODE>isAlphaPremultiplied</CODE>
                 * specifies how to interpret color and alpha samples in pixel values.
                 * If the boolean is true, color samples are assumed to have been
                 * multiplied by the alpha sample. The <CODE>transparency</CODE>
                 * specifies what alpha values can be represented by this color model.
                 * The acceptable <code>transparency</code> values are
                 * <CODE>OPAQUE</CODE>, <CODE>BITMASK</CODE> or <CODE>TRANSLUCENT</CODE>.
                 * The <CODE>transferType</CODE> is the type of primitive array used
                 * to represent pixel values.
                 */
                // @ts-ignore
                constructor(colorSpace: java.awt.color.ColorSpace, bits: number, hasAlpha: boolean, isAlphaPremultiplied: boolean, transparency: number, transferType: number)
                /**
                 * Constructs a <CODE>ComponentColorModel</CODE> from the specified
                 * parameters. Color components will be in the specified
                 * <CODE>ColorSpace</CODE>.  The supported transfer types are
                 * <CODE>DataBuffer.TYPE_BYTE</CODE>, <CODE>DataBuffer.TYPE_USHORT</CODE>,
                 * <CODE>DataBuffer.TYPE_INT</CODE>,
                 * <CODE>DataBuffer.TYPE_SHORT</CODE>, <CODE>DataBuffer.TYPE_FLOAT</CODE>,
                 * and <CODE>DataBuffer.TYPE_DOUBLE</CODE>.  The number of significant
                 * bits per color and alpha component will be 8, 16, 32, 16, 32,  or 64,
                 * respectively.  The number of color components will be the
                 * number of components in the <CODE>ColorSpace</CODE>.  There will be
                 * an alpha component if <CODE>hasAlpha</CODE> is <CODE>true</CODE>.
                 * If <CODE>hasAlpha</CODE> is true, then
                 * the boolean <CODE>isAlphaPremultiplied</CODE>
                 * specifies how to interpret color and alpha samples in pixel values.
                 * If the boolean is true, color samples are assumed to have been
                 * multiplied by the alpha sample. The <CODE>transparency</CODE>
                 * specifies what alpha values can be represented by this color model.
                 * The acceptable <code>transparency</code> values are
                 * <CODE>OPAQUE</CODE>, <CODE>BITMASK</CODE> or <CODE>TRANSLUCENT</CODE>.
                 * The <CODE>transferType</CODE> is the type of primitive array used
                 * to represent pixel values.
                 */
                // @ts-ignore
                constructor(colorSpace: java.awt.color.ColorSpace, hasAlpha: boolean, isAlphaPremultiplied: boolean, transparency: number, transferType: number)
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * The returned value will be a non pre-multiplied value.
                 * If the alpha is premultiplied, this method divides
                 * it out before returning the value (if the alpha value is 0,
                 * the red value will be 0).
                 */
                // @ts-ignore
                public getRed(pixel: number): number;
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * The returned value will be a non
                 * pre-multiplied value. If the alpha is premultiplied, this method
                 * divides it out before returning the value (if the alpha value is 0,
                 * the green value will be 0).
                 */
                // @ts-ignore
                public getGreen(pixel: number): number;
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * The returned value will be a non
                 * pre-multiplied value. If the alpha is premultiplied, this method
                 * divides it out before returning the value (if the alpha value is 0,
                 * the blue value will be 0).
                 */
                // @ts-ignore
                public getBlue(pixel: number): number;
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.   The pixel value is specified as an int.
                 */
                // @ts-ignore
                public getAlpha(pixel: number): number;
                /**
                 * Returns the color/alpha components of the pixel in the default
                 * RGB color model format.  A color conversion is done if necessary.
                 * The returned value will be in a non pre-multiplied format. If
                 * the alpha is premultiplied, this method divides it out of the
                 * color components (if the alpha value is 0, the color values will be 0).
                 */
                // @ts-ignore
                public getRGB(pixel: number): number;
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The <CODE>pixel</CODE> value is specified by an array
                 * of data elements of type <CODE>transferType</CODE> passed in as an object
                 * reference. The returned value will be a non pre-multiplied value. If the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value (if the alpha value is 0, the red value will be 0). Since
                 * <code>ComponentColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't override
                 * it then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public getRed(inData: java.lang.Object): number;
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <CODE>ColorSpace</CODE>, sRGB.
                 * A color conversion is done if necessary.  The <CODE>pixel</CODE> value
                 * is specified by an array of data elements of type <CODE>transferType</CODE>
                 * passed in as an object reference. The returned value is a non pre-multiplied
                 * value. If the alpha is premultiplied, this method divides it out before
                 * returning the value (if the alpha value is 0, the green value will be 0).
                 * Since <code>ComponentColorModel</code> can be subclassed,
                 * subclasses inherit the implementation of this method and if they
                 * don't override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>.
                 */
                // @ts-ignore
                public getGreen(inData: java.lang.Object): number;
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <CODE>ColorSpace</CODE>, sRGB.
                 * A color conversion is done if necessary.  The <CODE>pixel</CODE> value is
                 * specified by an array of data elements of type <CODE>transferType</CODE>
                 * passed in as an object reference. The returned value is a non pre-multiplied
                 * value. If the alpha is premultiplied, this method divides it out before
                 * returning the value (if the alpha value is 0, the blue value will be 0).
                 * Since <code>ComponentColorModel</code> can be subclassed,
                 * subclasses inherit the implementation of this method and if they
                 * don't override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>.
                 */
                // @ts-ignore
                public getBlue(inData: java.lang.Object): number;
                /**
                 * Returns the alpha component for the specified pixel, scaled from
                 * 0 to 255.  The pixel value is specified by an array of data
                 * elements of type <CODE>transferType</CODE> passed in as an
                 * object reference.  Since <code>ComponentColorModel</code> can be
                 * subclassed, subclasses inherit the
                 * implementation of this method and if they don't override it then
                 * they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public getAlpha(inData: java.lang.Object): number;
                /**
                 * Returns the color/alpha components for the specified pixel in the
                 * default RGB color model format.  A color conversion is done if
                 * necessary.  The pixel value is specified by an
                 * array of data elements of type <CODE>transferType</CODE> passed
                 * in as an object reference.
                 * The returned value is in a non pre-multiplied format. If
                 * the alpha is premultiplied, this method divides it out of the
                 * color components (if the alpha value is 0, the color values will be 0).
                 * Since <code>ComponentColorModel</code> can be subclassed,
                 * subclasses inherit the implementation of this method and if they
                 * don't override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>.
                 */
                // @ts-ignore
                public getRGB(inData: java.lang.Object): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * <CODE>ColorModel</CODE>, given an integer pixel representation
                 * in the default RGB color model.
                 * This array can then be passed to the <CODE>setDataElements</CODE>
                 * method of a <CODE>WritableRaster</CODE> object.  If the
                 * <CODE>pixel</CODE>
                 * parameter is null, a new array is allocated.  Since
                 * <code>ComponentColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then
                 * they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public getDataElements(rgb: number, pixel: java.lang.Object): java.lang.Object;
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <CODE>ColorModel</CODE>.
                 * An IllegalArgumentException is thrown if the component value for this
                 * <CODE>ColorModel</CODE> is not conveniently representable in the
                 * unnormalized form.  Color/alpha components are stored
                 * in the <CODE>components</CODE> array starting at <CODE>offset</CODE>
                 * (even if the array is allocated by this method).
                 */
                // @ts-ignore
                public getComponents(pixel: number, components: number, offset: number): number[];
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <CODE>ColorModel</CODE>.  The pixel value is specified by an
                 * array of data elements of type <CODE>transferType</CODE> passed in as
                 * an object reference.
                 * An IllegalArgumentException is thrown if the component values for this
                 * <CODE>ColorModel</CODE> are not conveniently representable in the
                 * unnormalized form.
                 * Color/alpha components are stored in the <CODE>components</CODE> array
                 * starting at  <CODE>offset</CODE> (even if the array is allocated by
                 * this method).  Since <code>ComponentColorModel</code> can be
                 * subclassed, subclasses inherit the
                 * implementation of this method and if they don't override it then
                 * this method might throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public getComponents(pixel: java.lang.Object, components: number, offset: number): number[];
                /**
                 * Returns an array of all of the color/alpha components in unnormalized
                 * form, given a normalized component array.  Unnormalized components
                 * are unsigned integral values between 0 and 2<sup>n</sup> - 1, where
                 * n is the number of bits for a particular component.  Normalized
                 * components are float values between a per component minimum and
                 * maximum specified by the <code>ColorSpace</code> object for this
                 * <code>ColorModel</code>.  An <code>IllegalArgumentException</code>
                 * will be thrown if color component values for this
                 * <code>ColorModel</code> are not conveniently representable in the
                 * unnormalized form.  If the
                 * <code>components</code> array is <code>null</code>, a new array
                 * will be allocated.  The <code>components</code> array will
                 * be returned.  Color/alpha components are stored in the
                 * <code>components</code> array starting at <code>offset</code> (even
                 * if the array is allocated by this method). An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * <code>components</code> array is not <code>null</code> and is not
                 * large enough to hold all the color and alpha
                 * components (starting at <code>offset</code>).  An
                 * <code>IllegalArgumentException</code> is thrown if the
                 * <code>normComponents</code> array is not large enough to hold
                 * all the color and alpha components starting at
                 * <code>normOffset</code>.
                 */
                // @ts-ignore
                public getUnnormalizedComponents(normComponents: number, normOffset: number, components: number, offset: number): number[];
                /**
                 * Returns an array of all of the color/alpha components in normalized
                 * form, given an unnormalized component array.  Unnormalized components
                 * are unsigned integral values between 0 and 2<sup>n</sup> - 1, where
                 * n is the number of bits for a particular component.  Normalized
                 * components are float values between a per component minimum and
                 * maximum specified by the <code>ColorSpace</code> object for this
                 * <code>ColorModel</code>.  An <code>IllegalArgumentException</code>
                 * will be thrown if color component values for this
                 * <code>ColorModel</code> are not conveniently representable in the
                 * unnormalized form.  If the
                 * <code>normComponents</code> array is <code>null</code>, a new array
                 * will be allocated.  The <code>normComponents</code> array
                 * will be returned.  Color/alpha components are stored in the
                 * <code>normComponents</code> array starting at
                 * <code>normOffset</code> (even if the array is allocated by this
                 * method).  An <code>ArrayIndexOutOfBoundsException</code> is thrown
                 * if the <code>normComponents</code> array is not <code>null</code>
                 * and is not large enough to hold all the color and alpha components
                 * (starting at <code>normOffset</code>).  An
                 * <code>IllegalArgumentException</code> is thrown if the
                 * <code>components</code> array is not large enough to hold all the
                 * color and alpha components starting at <code>offset</code>.
                 */
                // @ts-ignore
                public getNormalizedComponents(components: number, offset: number, normComponents: number, normOffset: number): number[];
                /**
                 * Returns a pixel value represented as an int in this <CODE>ColorModel</CODE>,
                 * given an array of unnormalized color/alpha components.
                 */
                // @ts-ignore
                public getDataElement(components: number, offset: number): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * <CODE>ColorModel</CODE>, given an array of unnormalized color/alpha
                 * components. This array can then be passed to the <CODE>setDataElements</CODE>
                 * method of a <CODE>WritableRaster</CODE> object.
                 */
                // @ts-ignore
                public getDataElements(components: number, offset: number, obj: java.lang.Object): java.lang.Object;
                /**
                 * Returns a pixel value represented as an <code>int</code> in this
                 * <code>ColorModel</code>, given an array of normalized color/alpha
                 * components.  This method will throw an
                 * <code>IllegalArgumentException</code> if pixel values for this
                 * <code>ColorModel</code> are not conveniently representable as a
                 * single <code>int</code>.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if  the
                 * <code>normComponents</code> array is not large enough to hold all the
                 * color and alpha components (starting at <code>normOffset</code>).
                 */
                // @ts-ignore
                public getDataElement(normComponents: number, normOffset: number): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code>, given an array of normalized color/alpha
                 * components.  This array can then be passed to the
                 * <code>setDataElements</code> method of a <code>WritableRaster</code>
                 * object.  An <code>ArrayIndexOutOfBoundsException</code> is thrown
                 * if the <code>normComponents</code> array is not large enough to hold
                 * all the color and alpha components (starting at
                 * <code>normOffset</code>).  If the <code>obj</code> variable is
                 * <code>null</code>, a new array will be allocated.  If
                 * <code>obj</code> is not <code>null</code>, it must be a primitive
                 * array of type transferType; otherwise, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>obj</code> is not large enough to hold a pixel value for this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public getDataElements(normComponents: number, normOffset: number, obj: java.lang.Object): java.lang.Object;
                /**
                 * Returns an array of all of the color/alpha components in normalized
                 * form, given a pixel in this <code>ColorModel</code>.  The pixel
                 * value is specified by an array of data elements of type transferType
                 * passed in as an object reference.  If pixel is not a primitive array
                 * of type transferType, a <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>pixel</code> is not large enough to hold a pixel value for this
                 * <code>ColorModel</code>.
                 * Normalized components are float values between a per component minimum
                 * and maximum specified by the <code>ColorSpace</code> object for this
                 * <code>ColorModel</code>.  If the
                 * <code>normComponents</code> array is <code>null</code>, a new array
                 * will be allocated.  The <code>normComponents</code> array
                 * will be returned.  Color/alpha components are stored in the
                 * <code>normComponents</code> array starting at
                 * <code>normOffset</code> (even if the array is allocated by this
                 * method).  An <code>ArrayIndexOutOfBoundsException</code> is thrown
                 * if the <code>normComponents</code> array is not <code>null</code>
                 * and is not large enough to hold all the color and alpha components
                 * (starting at <code>normOffset</code>).
                 * <p>
                 * This method must be overridden by a subclass if that subclass
                 * is designed to translate pixel sample values to color component values
                 * in a non-default way.  The default translations implemented by this
                 * class is described in the class comments.  Any subclass implementing
                 * a non-default translation must follow the constraints on allowable
                 * translations defined there.
                 */
                // @ts-ignore
                public getNormalizedComponents(pixel: java.lang.Object, normComponents: number, normOffset: number): number[];
                /**
                 * Forces the raster data to match the state specified in the
                 * <CODE>isAlphaPremultiplied</CODE> variable, assuming the data
                 * is currently correctly described by this <CODE>ColorModel</CODE>.
                 * It may multiply or divide the color raster data by alpha, or
                 * do nothing if the data is in the correct state.  If the data needs
                 * to be coerced, this method also returns an instance of
                 * this <CODE>ColorModel</CODE> with
                 * the <CODE>isAlphaPremultiplied</CODE> flag set appropriately.
                 * Since <code>ColorModel</code> can be subclassed, subclasses inherit
                 * the implementation of this method and if they don't override it
                 * then they throw an exception if they use an unsupported
                 * <code>transferType</code>.
                 */
                // @ts-ignore
                public coerceData(raster: java.awt.image.WritableRaster, isAlphaPremultiplied: boolean): java.awt.image.ColorModel;
                /**
                 * Returns true if <CODE>raster</CODE> is compatible with this
                 * <CODE>ColorModel</CODE>; false if it is not.
                 */
                // @ts-ignore
                public isCompatibleRaster(raster: java.awt.image.Raster): boolean;
                /**
                 * Creates a <CODE>WritableRaster</CODE> with the specified width and height,
                 * that  has a data layout (<CODE>SampleModel</CODE>) compatible with
                 * this <CODE>ColorModel</CODE>.
                 */
                // @ts-ignore
                public createCompatibleWritableRaster(w: number, h: number): java.awt.image.WritableRaster;
                /**
                 * Creates a <CODE>SampleModel</CODE> with the specified width and height,
                 * that  has a data layout compatible with this <CODE>ColorModel</CODE>.
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Checks whether or not the specified <CODE>SampleModel</CODE>
                 * is compatible with this <CODE>ColorModel</CODE>.
                 */
                // @ts-ignore
                public isCompatibleSampleModel(sm: java.awt.image.SampleModel): boolean;
                /**
                 * Returns a <CODE>Raster</CODE> representing the alpha channel of an image,
                 * extracted from the input <CODE>Raster</CODE>.
                 * This method assumes that <CODE>Raster</CODE> objects associated with
                 * this <CODE>ColorModel</CODE> store the alpha band, if present, as
                 * the last band of image data. Returns null if there is no separate spatial
                 * alpha channel associated with this <CODE>ColorModel</CODE>.
                 * This method creates a new <CODE>Raster</CODE>, but will share the data
                 * array.
                 */
                // @ts-ignore
                public getAlphaRaster(raster: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Compares this color model with another for equality.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
            }
        }
    }
}
