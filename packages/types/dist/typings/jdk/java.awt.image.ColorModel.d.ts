declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            abstract class ColorModel extends java.lang.Object {
                /**
                 * Constructs a <code>ColorModel</code> that translates pixels of the
                 * specified number of bits to color/alpha components.  The color
                 * space is the default RGB <code>ColorSpace</code>, which is sRGB.
                 * Pixel values are assumed to include alpha information.  If color
                 * and alpha information are represented in the pixel value as
                 * separate spatial bands, the color bands are assumed not to be
                 * premultiplied with the alpha value. The transparency type is
                 * java.awt.Transparency.TRANSLUCENT.  The transfer type will be the
                 * smallest of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * or DataBuffer.TYPE_INT that can hold a single pixel
                 * (or DataBuffer.TYPE_UNDEFINED if bits is greater
                 * than 32).  Since this constructor has no information about the
                 * number of bits per color and alpha component, any subclass calling
                 * this constructor should override any method that requires this
                 * information.
                 */
                // @ts-ignore
                constructor(bits: number)
                /**
                 * Constructs a <code>ColorModel</code> that translates pixel values
                 * to color/alpha components.  Color components will be in the
                 * specified <code>ColorSpace</code>. <code>pixel_bits</code> is the
                 * number of bits in the pixel values.  The bits array
                 * specifies the number of significant bits per color and alpha component.
                 * Its length should be the number of components in the
                 * <code>ColorSpace</code> if there is no alpha information in the
                 * pixel values, or one more than this number if there is alpha
                 * information.  <code>hasAlpha</code> indicates whether or not alpha
                 * information is present.  The <code>boolean</code>
                 * <code>isAlphaPremultiplied</code> specifies how to interpret pixel
                 * values in which color and alpha information are represented as
                 * separate spatial bands.  If the <code>boolean</code>
                 * is <code>true</code>, color samples are assumed to have been
                 * multiplied by the alpha sample.  The <code>transparency</code>
                 * specifies what alpha values can be represented by this color model.
                 * The transfer type is the type of primitive array used to represent
                 * pixel values.  Note that the bits array contains the number of
                 * significant bits per color/alpha component after the translation
                 * from pixel values.  For example, for an
                 * <code>IndexColorModel</code> with <code>pixel_bits</code> equal to
                 * 16, the bits array might have four elements with each element set
                 * to 8.
                 */
                // @ts-ignore
                constructor(pixel_bits: number, bits: number, cspace: java.awt.color.ColorSpace, hasAlpha: boolean, isAlphaPremultiplied: boolean, transparency: number, transferType: number)
                // @ts-ignore
                protected pixel_bits: number;
                // @ts-ignore
                protected transferType: number;
                /**
                 * Returns a <code>DirectColorModel</code> that describes the default
                 * format for integer RGB values used in many of the methods in the
                 * AWT image interfaces for the convenience of the programmer.
                 * The color space is the default {@link ColorSpace}, sRGB.
                 * The format for the RGB values is an integer with 8 bits
                 * each of alpha, red, green, and blue color components ordered
                 * correspondingly from the most significant byte to the least
                 * significant byte, as in:  0xAARRGGBB.  Color components are
                 * not premultiplied by the alpha component.  This format does not
                 * necessarily represent the native or the most efficient
                 * <code>ColorModel</code> for a particular device or for all images.
                 * It is merely used as a common color model format.
                 */
                // @ts-ignore
                public static getRGBdefault(): java.awt.image.ColorModel;
                /**
                 * Returns whether or not alpha is supported in this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public hasAlpha(): boolean;
                /**
                 * Returns whether or not the alpha has been premultiplied in the
                 * pixel values to be translated by this <code>ColorModel</code>.
                 * If the boolean is <code>true</code>, this <code>ColorModel</code>
                 * is to be used to interpret pixel values in which color and alpha
                 * information are represented as separate spatial bands, and color
                 * samples are assumed to have been multiplied by the
                 * alpha sample.
                 */
                // @ts-ignore
                public isAlphaPremultiplied(): boolean;
                /**
                 * Returns the transfer type of this <code>ColorModel</code>.
                 * The transfer type is the type of primitive array used to represent
                 * pixel values as arrays.
                 */
                // @ts-ignore
                public getTransferType(): number;
                /**
                 * Returns the number of bits per pixel described by this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public getPixelSize(): number;
                /**
                 * Returns the number of bits for the specified color/alpha component.
                 * Color components are indexed in the order specified by the
                 * <code>ColorSpace</code>.  Typically, this order reflects the name
                 * of the color space type. For example, for TYPE_RGB, index 0
                 * corresponds to red, index 1 to green, and index 2
                 * to blue.  If this <code>ColorModel</code> supports alpha, the alpha
                 * component corresponds to the index following the last color
                 * component.
                 */
                // @ts-ignore
                public getComponentSize(componentIdx: number): number;
                /**
                 * Returns an array of the number of bits per color/alpha component.
                 * The array contains the color components in the order specified by the
                 * <code>ColorSpace</code>, followed by the alpha component, if
                 * present.
                 */
                // @ts-ignore
                public getComponentSize(): number[];
                /**
                 * Returns the transparency.  Returns either OPAQUE, BITMASK,
                 * or TRANSLUCENT.
                 */
                // @ts-ignore
                public getTransparency(): number;
                /**
                 * Returns the number of components, including alpha, in this
                 * <code>ColorModel</code>.  This is equal to the number of color
                 * components, optionally plus one, if there is an alpha component.
                 */
                // @ts-ignore
                public getNumComponents(): number;
                /**
                 * Returns the number of color components in this
                 * <code>ColorModel</code>.
                 * This is the number of components returned by
                 * {@link ColorSpace#getNumComponents}.
                 */
                // @ts-ignore
                public getNumColorComponents(): number;
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * An <code>IllegalArgumentException</code> is thrown if pixel
                 * values for this <code>ColorModel</code> are not conveniently
                 * representable as a single int.  The returned value is not a
                 * pre-multiplied value.  For example, if the
                 * alpha is premultiplied, this method divides it out before returning
                 * the value.  If the alpha value is 0, the red value is 0.
                 */
                // @ts-ignore
                public abstract getRed(pixel: number): number;
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * An <code>IllegalArgumentException</code> is thrown if pixel
                 * values for this <code>ColorModel</code> are not conveniently
                 * representable as a single int.  The returned value is a non
                 * pre-multiplied value.  For example, if the alpha is premultiplied,
                 * this method divides it out before returning
                 * the value.  If the alpha value is 0, the green value is 0.
                 */
                // @ts-ignore
                public abstract getGreen(pixel: number): number;
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  A color conversion
                 * is done if necessary.  The pixel value is specified as an int.
                 * An <code>IllegalArgumentException</code> is thrown if pixel values
                 * for this <code>ColorModel</code> are not conveniently representable
                 * as a single int.  The returned value is a non pre-multiplied
                 * value, for example, if the alpha is premultiplied, this method
                 * divides it out before returning the value.  If the alpha value is
                 * 0, the blue value is 0.
                 */
                // @ts-ignore
                public abstract getBlue(pixel: number): number;
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.  The pixel value is specified as an int.
                 * An <code>IllegalArgumentException</code> is thrown if pixel
                 * values for this <code>ColorModel</code> are not conveniently
                 * representable as a single int.
                 */
                // @ts-ignore
                public abstract getAlpha(pixel: number): number;
                /**
                 * Returns the color/alpha components of the pixel in the default
                 * RGB color model format.  A color conversion is done if necessary.
                 * The pixel value is specified as an int.
                 * An <code>IllegalArgumentException</code> thrown if pixel values
                 * for this <code>ColorModel</code> are not conveniently representable
                 * as a single int.  The returned value is in a non
                 * pre-multiplied format. For example, if the alpha is premultiplied,
                 * this method divides it out of the color components.  If the alpha
                 * value is 0, the color values are 0.
                 */
                // @ts-ignore
                public getRGB(pixel: number): number;
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is
                 * specified by an array of data elements of type transferType passed
                 * in as an object reference.  The returned value is a non
                 * pre-multiplied value.  For example, if alpha is premultiplied,
                 * this method divides it out before returning
                 * the value.  If the alpha value is 0, the red value is 0.
                 * If <code>inData</code> is not a primitive array of type
                 * transferType, a <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>inData</code> is not large enough to hold a pixel value for
                 * this <code>ColorModel</code>.
                 * If this <code>transferType</code> is not supported, a
                 * <code>UnsupportedOperationException</code> will be
                 * thrown.  Since
                 * <code>ColorModel</code> is an abstract class, any instance
                 * must be an instance of a subclass.  Subclasses inherit the
                 * implementation of this method and if they don't override it, this
                 * method throws an exception if the subclass uses a
                 * <code>transferType</code> other than
                 * <code>DataBuffer.TYPE_BYTE</code>,
                 * <code>DataBuffer.TYPE_USHORT</code>, or
                 * <code>DataBuffer.TYPE_INT</code>.
                 */
                // @ts-ignore
                public getRed(inData: java.lang.Object): number;
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is
                 * specified by an array of data elements of type transferType passed
                 * in as an object reference.  The returned value will be a non
                 * pre-multiplied value.  For example, if the alpha is premultiplied,
                 * this method divides it out before returning the value.  If the
                 * alpha value is 0, the green value is 0.  If <code>inData</code> is
                 * not a primitive array of type transferType, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>inData</code> is not large enough to hold a pixel value for
                 * this <code>ColorModel</code>.
                 * If this <code>transferType</code> is not supported, a
                 * <code>UnsupportedOperationException</code> will be
                 * thrown.  Since
                 * <code>ColorModel</code> is an abstract class, any instance
                 * must be an instance of a subclass.  Subclasses inherit the
                 * implementation of this method and if they don't override it, this
                 * method throws an exception if the subclass uses a
                 * <code>transferType</code> other than
                 * <code>DataBuffer.TYPE_BYTE</code>,
                 * <code>DataBuffer.TYPE_USHORT</code>, or
                 * <code>DataBuffer.TYPE_INT</code>.
                 */
                // @ts-ignore
                public getGreen(inData: java.lang.Object): number;
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB <code>ColorSpace</code>, sRGB.  A
                 * color conversion is done if necessary.  The pixel value is
                 * specified by an array of data elements of type transferType passed
                 * in as an object reference.  The returned value is a non
                 * pre-multiplied value.  For example, if the alpha is premultiplied,
                 * this method divides it out before returning the value.  If the
                 * alpha value is 0, the blue value will be 0.  If
                 * <code>inData</code> is not a primitive array of type transferType,
                 * a <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.
                 * If this <code>transferType</code> is not supported, a
                 * <code>UnsupportedOperationException</code> will be
                 * thrown.  Since
                 * <code>ColorModel</code> is an abstract class, any instance
                 * must be an instance of a subclass.  Subclasses inherit the
                 * implementation of this method and if they don't override it, this
                 * method throws an exception if the subclass uses a
                 * <code>transferType</code> other than
                 * <code>DataBuffer.TYPE_BYTE</code>,
                 * <code>DataBuffer.TYPE_USHORT</code>, or
                 * <code>DataBuffer.TYPE_INT</code>.
                 */
                // @ts-ignore
                public getBlue(inData: java.lang.Object): number;
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.  The pixel value is specified by an array of data
                 * elements of type transferType passed in as an object reference.
                 * If inData is not a primitive array of type transferType, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>inData</code> is not large enough to hold a pixel value for
                 * this <code>ColorModel</code>.
                 * If this <code>transferType</code> is not supported, a
                 * <code>UnsupportedOperationException</code> will be
                 * thrown.  Since
                 * <code>ColorModel</code> is an abstract class, any instance
                 * must be an instance of a subclass.  Subclasses inherit the
                 * implementation of this method and if they don't override it, this
                 * method throws an exception if the subclass uses a
                 * <code>transferType</code> other than
                 * <code>DataBuffer.TYPE_BYTE</code>,
                 * <code>DataBuffer.TYPE_USHORT</code>, or
                 * <code>DataBuffer.TYPE_INT</code>.
                 */
                // @ts-ignore
                public getAlpha(inData: java.lang.Object): number;
                /**
                 * Returns the color/alpha components for the specified pixel in the
                 * default RGB color model format.  A color conversion is done if
                 * necessary.  The pixel value is specified by an array of data
                 * elements of type transferType passed in as an object reference.
                 * If inData is not a primitive array of type transferType, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>inData</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.
                 * The returned value will be in a non pre-multiplied format, i.e. if
                 * the alpha is premultiplied, this method will divide it out of the
                 * color components (if the alpha value is 0, the color values will be 0).
                 */
                // @ts-ignore
                public getRGB(inData: java.lang.Object): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code>, given an integer pixel representation in
                 * the default RGB color model.
                 * This array can then be passed to the
                 * {@link WritableRaster#setDataElements} method of
                 * a {@link WritableRaster} object.  If the pixel variable is
                 * <code>null</code>, a new array will be allocated.  If
                 * <code>pixel</code> is not
                 * <code>null</code>, it must be a primitive array of type
                 * <code>transferType</code>; otherwise, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>pixel</code> is
                 * not large enough to hold a pixel value for this
                 * <code>ColorModel</code>. The pixel array is returned.
                 * If this <code>transferType</code> is not supported, a
                 * <code>UnsupportedOperationException</code> will be
                 * thrown.  Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
                 */
                // @ts-ignore
                public getDataElements(rgb: number, pixel: java.lang.Object): java.lang.Object;
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <code>ColorModel</code>.  The pixel value is specified as
                 * an <code>int</code>.  An <code>IllegalArgumentException</code>
                 * will be thrown if pixel values for this <code>ColorModel</code> are
                 * not conveniently representable as a single <code>int</code> or if
                 * color component values for this <code>ColorModel</code> are not
                 * conveniently representable in the unnormalized form.
                 * For example, this method can be used to retrieve the
                 * components for a specific pixel value in a
                 * <code>DirectColorModel</code>.  If the components array is
                 * <code>null</code>, a new array will be allocated.  The
                 * components array will be returned.  Color/alpha components are
                 * stored in the components array starting at <code>offset</code>
                 * (even if the array is allocated by this method).  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if  the
                 * components array is not <code>null</code> and is not large
                 * enough to hold all the color and alpha components (starting at offset).
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
                 */
                // @ts-ignore
                public getComponents(pixel: number, components: number, offset: number): number[];
                /**
                 * Returns an array of unnormalized color/alpha components given a pixel
                 * in this <code>ColorModel</code>.  The pixel value is specified by
                 * an array of data elements of type transferType passed in as an
                 * object reference.  If <code>pixel</code> is not a primitive array
                 * of type transferType, a <code>ClassCastException</code> is thrown.
                 * An <code>IllegalArgumentException</code> will be thrown if color
                 * component values for this <code>ColorModel</code> are not
                 * conveniently representable in the unnormalized form.
                 * An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>pixel</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.
                 * This method can be used to retrieve the components for a specific
                 * pixel value in any <code>ColorModel</code>.  If the components
                 * array is <code>null</code>, a new array will be allocated.  The
                 * components array will be returned.  Color/alpha components are
                 * stored in the <code>components</code> array starting at
                 * <code>offset</code> (even if the array is allocated by this
                 * method).  An <code>ArrayIndexOutOfBoundsException</code>
                 * is thrown if  the components array is not <code>null</code> and is
                 * not large enough to hold all the color and alpha components
                 * (starting at <code>offset</code>).
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
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
                 * <p>
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  The default implementation
                 * of this method in this abstract class assumes that component values
                 * for this class are conveniently representable in the unnormalized
                 * form.  Therefore, subclasses which may
                 * have instances which do not support the unnormalized form must
                 * override this method.
                 */
                // @ts-ignore
                public getNormalizedComponents(components: number, offset: number, normComponents: number, normOffset: number): number[];
                /**
                 * Returns a pixel value represented as an <code>int</code> in this
                 * <code>ColorModel</code>, given an array of unnormalized color/alpha
                 * components.  This method will throw an
                 * <code>IllegalArgumentException</code> if component values for this
                 * <code>ColorModel</code> are not conveniently representable as a
                 * single <code>int</code> or if color component values for this
                 * <code>ColorModel</code> are not conveniently representable in the
                 * unnormalized form.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if  the
                 * <code>components</code> array is not large enough to hold all the
                 * color and alpha components (starting at <code>offset</code>).
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
                 */
                // @ts-ignore
                public getDataElement(components: number, offset: number): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code>, given an array of unnormalized color/alpha
                 * components.  This array can then be passed to the
                 * <code>setDataElements</code> method of a <code>WritableRaster</code>
                 * object.  This method will throw an <code>IllegalArgumentException</code>
                 * if color component values for this <code>ColorModel</code> are not
                 * conveniently representable in the unnormalized form.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown
                 * if the <code>components</code> array is not large enough to hold
                 * all the color and alpha components (starting at
                 * <code>offset</code>).  If the <code>obj</code> variable is
                 * <code>null</code>, a new array will be allocated.  If
                 * <code>obj</code> is not <code>null</code>, it must be a primitive
                 * array of type transferType; otherwise, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * <code>obj</code> is not large enough to hold a pixel value for this
                 * <code>ColorModel</code>.
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
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
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  The default implementation
                 * of this method in this abstract class first converts from the
                 * normalized form to the unnormalized form and then calls
                 * <code>getDataElement(int[], int)</code>.  Subclasses which may
                 * have instances which do not support the unnormalized form must
                 * override this method.
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
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  The default implementation
                 * of this method in this abstract class first converts from the
                 * normalized form to the unnormalized form and then calls
                 * <code>getDataElement(int[], int, Object)</code>.  Subclasses which may
                 * have instances which do not support the unnormalized form must
                 * override this method.
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
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  The default implementation
                 * of this method in this abstract class first retrieves color and alpha
                 * components in the unnormalized form using
                 * <code>getComponents(Object, int[], int)</code> and then calls
                 * <code>getNormalizedComponents(int[], int, float[], int)</code>.
                 * Subclasses which may
                 * have instances which do not support the unnormalized form must
                 * override this method.
                 */
                // @ts-ignore
                public getNormalizedComponents(pixel: java.lang.Object, normComponents: number, normOffset: number): number[];
                /**
                 * Tests if the specified <code>Object</code> is an instance of
                 * <code>ColorModel</code> and if it equals this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns the hash code for this ColorModel.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns the <code>ColorSpace</code> associated with this
                 * <code>ColorModel</code>.
                 */
                // @ts-ignore
                public getColorSpace(): java.awt.color.ColorSpace;
                /**
                 * Forces the raster data to match the state specified in the
                 * <code>isAlphaPremultiplied</code> variable, assuming the data is
                 * currently correctly described by this <code>ColorModel</code>.  It
                 * may multiply or divide the color raster data by alpha, or do
                 * nothing if the data is in the correct state.  If the data needs to
                 * be coerced, this method will also return an instance of this
                 * <code>ColorModel</code> with the <code>isAlphaPremultiplied</code>
                 * flag set appropriately.  This method will throw a
                 * <code>UnsupportedOperationException</code> if it is not supported
                 * by this <code>ColorModel</code>.
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
                 */
                // @ts-ignore
                public coerceData(raster: java.awt.image.WritableRaster, isAlphaPremultiplied: boolean): java.awt.image.ColorModel;
                /**
                 * Returns <code>true</code> if <code>raster</code> is compatible
                 * with this <code>ColorModel</code> and <code>false</code> if it is
                 * not.
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
                 */
                // @ts-ignore
                public isCompatibleRaster(raster: java.awt.image.Raster): boolean;
                /**
                 * Creates a <code>WritableRaster</code> with the specified width and
                 * height that has a data layout (<code>SampleModel</code>) compatible
                 * with this <code>ColorModel</code>.
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
                 */
                // @ts-ignore
                public createCompatibleWritableRaster(w: number, h: number): java.awt.image.WritableRaster;
                /**
                 * Creates a <code>SampleModel</code> with the specified width and
                 * height that has a data layout compatible with this
                 * <code>ColorModel</code>.
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Checks if the <code>SampleModel</code> is compatible with this
                 * <code>ColorModel</code>.
                 * Since <code>ColorModel</code> is an abstract class,
                 * any instance is an instance of a subclass.  Subclasses must
                 * override this method since the implementation in this abstract
                 * class throws an <code>UnsupportedOperationException</code>.
                 */
                // @ts-ignore
                public isCompatibleSampleModel(sm: java.awt.image.SampleModel): boolean;
                /**
                 * Disposes of system resources associated with this
                 * <code>ColorModel</code> once this <code>ColorModel</code> is no
                 * longer referenced.
                 */
                // @ts-ignore
                public finalize(): void;
                /**
                 * Returns a <code>Raster</code> representing the alpha channel of an
                 * image, extracted from the input <code>Raster</code>, provided that
                 * pixel values of this <code>ColorModel</code> represent color and
                 * alpha information as separate spatial bands (e.g.
                 * {@link ComponentColorModel} and <code>DirectColorModel</code>).
                 * This method assumes that <code>Raster</code> objects associated
                 * with such a <code>ColorModel</code> store the alpha band, if
                 * present, as the last band of image data.  Returns <code>null</code>
                 * if there is no separate spatial alpha channel associated with this
                 * <code>ColorModel</code>.  If this is an
                 * <code>IndexColorModel</code> which has alpha in the lookup table,
                 * this method will return <code>null</code> since
                 * there is no spatially discrete alpha channel.
                 * This method will create a new <code>Raster</code> (but will share
                 * the data array).
                 * Since <code>ColorModel</code> is an abstract class, any instance
                 * is an instance of a subclass.  Subclasses must override this
                 * method to get any behavior other than returning <code>null</code>
                 * because the implementation in this abstract class returns
                 * <code>null</code>.
                 */
                // @ts-ignore
                public getAlphaRaster(raster: java.awt.image.WritableRaster): java.awt.image.WritableRaster;
                /**
                 * Returns the <code>String</code> representation of the contents of
                 * this <code>ColorModel</code>object.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
