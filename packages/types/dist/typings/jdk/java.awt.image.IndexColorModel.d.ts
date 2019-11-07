declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class IndexColorModel extends java.awt.image.ColorModel {
                /**
                 * Constructs an <code>IndexColorModel</code> from the specified
                 * arrays of red, green, and blue components.  Pixels described
                 * by this color model all have alpha components of 255
                 * unnormalized (1.0&nbsp;normalized), which means they
                 * are fully opaque.  All of the arrays specifying the color
                 * components must have at least the specified number of entries.
                 * The <code>ColorSpace</code> is the default sRGB space.
                 * Since there is no alpha information in any of the arguments
                 * to this constructor, the transparency value is always
                 * <code>Transparency.OPAQUE</code>.
                 * The transfer type is the smallest of <code>DataBuffer.TYPE_BYTE</code>
                 * or <code>DataBuffer.TYPE_USHORT</code> that can hold a single pixel.
                 */
                // @ts-ignore
                constructor(bits: number, size: number, r: number, g: number, b: number)
                /**
                 * Constructs an <code>IndexColorModel</code> from the given arrays
                 * of red, green, and blue components.  Pixels described by this color
                 * model all have alpha components of 255 unnormalized
                 * (1.0&nbsp;normalized), which means they are fully opaque, except
                 * for the indicated pixel to be made transparent.  All of the arrays
                 * specifying the color components must have at least the specified
                 * number of entries.
                 * The <code>ColorSpace</code> is the default sRGB space.
                 * The transparency value may be <code>Transparency.OPAQUE</code> or
                 * <code>Transparency.BITMASK</code> depending on the arguments, as
                 * specified in the <a href="#transparency">class description</a> above.
                 * The transfer type is the smallest of <code>DataBuffer.TYPE_BYTE</code>
                 * or <code>DataBuffer.TYPE_USHORT</code> that can hold a
                 * single pixel.
                 */
                // @ts-ignore
                constructor(bits: number, size: number, r: number, g: number, b: number, trans: number)
                /**
                 * Constructs an <code>IndexColorModel</code> from the given
                 * arrays of red, green, blue and alpha components.  All of the
                 * arrays specifying the components must have at least the specified
                 * number of entries.
                 * The <code>ColorSpace</code> is the default sRGB space.
                 * The transparency value may be any of <code>Transparency.OPAQUE</code>,
                 * <code>Transparency.BITMASK</code>,
                 * or <code>Transparency.TRANSLUCENT</code>
                 * depending on the arguments, as specified
                 * in the <a href="#transparency">class description</a> above.
                 * The transfer type is the smallest of <code>DataBuffer.TYPE_BYTE</code>
                 * or <code>DataBuffer.TYPE_USHORT</code> that can hold a single pixel.
                 */
                // @ts-ignore
                constructor(bits: number, size: number, r: number, g: number, b: number, a: number)
                /**
                 * Constructs an <code>IndexColorModel</code> from a single
                 * array of interleaved red, green, blue and optional alpha
                 * components.  The array must have enough values in it to
                 * fill all of the needed component arrays of the specified
                 * size.  The <code>ColorSpace</code> is the default sRGB space.
                 * The transparency value may be any of <code>Transparency.OPAQUE</code>,
                 * <code>Transparency.BITMASK</code>,
                 * or <code>Transparency.TRANSLUCENT</code>
                 * depending on the arguments, as specified
                 * in the <a href="#transparency">class description</a> above.
                 * The transfer type is the smallest of
                 * <code>DataBuffer.TYPE_BYTE</code> or <code>DataBuffer.TYPE_USHORT</code>
                 * that can hold a single pixel.
                 */
                // @ts-ignore
                constructor(bits: number, size: number, cmap: number, start: number, hasalpha: boolean)
                /**
                 * Constructs an <code>IndexColorModel</code> from a single array of
                 * interleaved red, green, blue and optional alpha components.  The
                 * specified transparent index represents a pixel that is made
                 * entirely transparent regardless of any alpha value specified
                 * for it.  The array must have enough values in it to fill all
                 * of the needed component arrays of the specified size.
                 * The <code>ColorSpace</code> is the default sRGB space.
                 * The transparency value may be any of <code>Transparency.OPAQUE</code>,
                 * <code>Transparency.BITMASK</code>,
                 * or <code>Transparency.TRANSLUCENT</code>
                 * depending on the arguments, as specified
                 * in the <a href="#transparency">class description</a> above.
                 * The transfer type is the smallest of
                 * <code>DataBuffer.TYPE_BYTE</code> or <code>DataBuffer.TYPE_USHORT</code>
                 * that can hold a single pixel.
                 */
                // @ts-ignore
                constructor(bits: number, size: number, cmap: number, start: number, hasalpha: boolean, trans: number)
                /**
                 * Constructs an <code>IndexColorModel</code> from an array of
                 * ints where each int is comprised of red, green, blue, and
                 * optional alpha components in the default RGB color model format.
                 * The specified transparent index represents a pixel that is made
                 * entirely transparent regardless of any alpha value specified
                 * for it.  The array must have enough values in it to fill all
                 * of the needed component arrays of the specified size.
                 * The <code>ColorSpace</code> is the default sRGB space.
                 * The transparency value may be any of <code>Transparency.OPAQUE</code>,
                 * <code>Transparency.BITMASK</code>,
                 * or <code>Transparency.TRANSLUCENT</code>
                 * depending on the arguments, as specified
                 * in the <a href="#transparency">class description</a> above.
                 */
                // @ts-ignore
                constructor(bits: number, size: number, cmap: number, start: number, hasalpha: boolean, trans: number, transferType: number)
                /**
                 * Constructs an <code>IndexColorModel</code> from an
                 * <code>int</code> array where each <code>int</code> is
                 * comprised of red, green, blue, and alpha
                 * components in the default RGB color model format.
                 * The array must have enough values in it to fill all
                 * of the needed component arrays of the specified size.
                 * The <code>ColorSpace</code> is the default sRGB space.
                 * The transparency value may be any of <code>Transparency.OPAQUE</code>,
                 * <code>Transparency.BITMASK</code>,
                 * or <code>Transparency.TRANSLUCENT</code>
                 * depending on the arguments, as specified
                 * in the <a href="#transparency">class description</a> above.
                 * The transfer type must be one of <code>DataBuffer.TYPE_BYTE</code>
                 * <code>DataBuffer.TYPE_USHORT</code>.
                 * The <code>BigInteger</code> object specifies the valid/invalid pixels
                 * in the <code>cmap</code> array.  A pixel is valid if the
                 * <code>BigInteger</code> value at that index is set, and is invalid
                 * if the <code>BigInteger</code> bit  at that index is not set.
                 */
                // @ts-ignore
                constructor(bits: number, size: number, cmap: number, start: number, transferType: number, validBits: java.math.BigInteger)
                /**
                 * Returns the transparency.  Returns either OPAQUE, BITMASK,
                 * or TRANSLUCENT
                 */
                // @ts-ignore
                public getTransparency(): number;
                /**
                 * Returns an array of the number of bits for each color/alpha component.
                 * The array contains the color components in the order red, green,
                 * blue, followed by the alpha component, if present.
                 */
                // @ts-ignore
                public getComponentSize(): number[];
                /**
                 * Returns the size of the color/alpha component arrays in this
                 * <code>IndexColorModel</code>.
                 */
                // @ts-ignore
                public getMapSize(): number;
                /**
                 * Returns the index of a transparent pixel in this
                 * <code>IndexColorModel</code> or -1 if there is no pixel
                 * with an alpha value of 0.  If a transparent pixel was
                 * explicitly specified in one of the constructors by its
                 * index, then that index will be preferred, otherwise,
                 * the index of any pixel which happens to be fully transparent
                 * may be returned.
                 */
                // @ts-ignore
                public getTransparentPixel(): number;
                /**
                 * Copies the array of red color components into the specified array.
                 * Only the initial entries of the array as specified by
                 * {@link #getMapSize() getMapSize} are written.
                 */
                // @ts-ignore
                public getReds(r: number): void;
                /**
                 * Copies the array of green color components into the specified array.
                 * Only the initial entries of the array as specified by
                 * <code>getMapSize</code> are written.
                 */
                // @ts-ignore
                public getGreens(g: number): void;
                /**
                 * Copies the array of blue color components into the specified array.
                 * Only the initial entries of the array as specified by
                 * <code>getMapSize</code> are written.
                 */
                // @ts-ignore
                public getBlues(b: number): void;
                /**
                 * Copies the array of alpha transparency components into the
                 * specified array.  Only the initial entries of the array as specified
                 * by <code>getMapSize</code> are written.
                 */
                // @ts-ignore
                public getAlphas(a: number): void;
                /**
                 * Converts data for each index from the color and alpha component
                 * arrays to an int in the default RGB ColorModel format and copies
                 * the resulting 32-bit ARGB values into the specified array.  Only
                 * the initial entries of the array as specified by
                 * <code>getMapSize</code> are
                 * written.
                 */
                // @ts-ignore
                public getRGBs(rgb: number): void;
                /**
                 * Returns the red color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  The pixel value
                 * is specified as an int.
                 * Only the lower <em>n</em> bits of the pixel value, as specified in the
                 * <a href="#index_values">class description</a> above, are used to
                 * calculate the returned value.
                 * The returned value is a non pre-multiplied value.
                 */
                // @ts-ignore
                public getRed(pixel: number): number;
                /**
                 * Returns the green color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  The pixel value
                 * is specified as an int.
                 * Only the lower <em>n</em> bits of the pixel value, as specified in the
                 * <a href="#index_values">class description</a> above, are used to
                 * calculate the returned value.
                 * The returned value is a non pre-multiplied value.
                 */
                // @ts-ignore
                public getGreen(pixel: number): number;
                /**
                 * Returns the blue color component for the specified pixel, scaled
                 * from 0 to 255 in the default RGB ColorSpace, sRGB.  The pixel value
                 * is specified as an int.
                 * Only the lower <em>n</em> bits of the pixel value, as specified in the
                 * <a href="#index_values">class description</a> above, are used to
                 * calculate the returned value.
                 * The returned value is a non pre-multiplied value.
                 */
                // @ts-ignore
                public getBlue(pixel: number): number;
                /**
                 * Returns the alpha component for the specified pixel, scaled
                 * from 0 to 255.  The pixel value is specified as an int.
                 * Only the lower <em>n</em> bits of the pixel value, as specified in the
                 * <a href="#index_values">class description</a> above, are used to
                 * calculate the returned value.
                 */
                // @ts-ignore
                public getAlpha(pixel: number): number;
                /**
                 * Returns the color/alpha components of the pixel in the default
                 * RGB color model format.  The pixel value is specified as an int.
                 * Only the lower <em>n</em> bits of the pixel value, as specified in the
                 * <a href="#index_values">class description</a> above, are used to
                 * calculate the returned value.
                 * The returned value is in a non pre-multiplied format.
                 */
                // @ts-ignore
                public getRGB(pixel: number): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * ColorModel, given an integer pixel representation in the
                 * default RGB color model.  This array can then be passed to the
                 * {@link WritableRaster#setDataElements(int, int, java.lang.Object) setDataElements}
                 * method of a {@link WritableRaster} object.  If the pixel variable is
                 * <code>null</code>, a new array is allocated.  If <code>pixel</code>
                 * is not <code>null</code>, it must be
                 * a primitive array of type <code>transferType</code>; otherwise, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if <code>pixel</code> is not large enough to hold a pixel
                 * value for this <code>ColorModel</code>.  The pixel array is returned.
                 * <p>
                 * Since <code>IndexColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>.
                 */
                // @ts-ignore
                public getDataElements(rgb: number, pixel: java.lang.Object): java.lang.Object;
                /**
                 * Returns an array of unnormalized color/alpha components for a
                 * specified pixel in this <code>ColorModel</code>.  The pixel value
                 * is specified as an int.  If the <code>components</code> array is <code>null</code>,
                 * a new array is allocated that contains
                 * <code>offset + getNumComponents()</code> elements.
                 * The <code>components</code> array is returned,
                 * with the alpha component included
                 * only if <code>hasAlpha</code> returns true.
                 * Color/alpha components are stored in the <code>components</code> array starting
                 * at <code>offset</code> even if the array is allocated by this method.
                 * An <code>ArrayIndexOutOfBoundsException</code>
                 * is thrown if  the <code>components</code> array is not <code>null</code> and is
                 * not large enough to hold all the color and alpha components
                 * starting at <code>offset</code>.
                 */
                // @ts-ignore
                public getComponents(pixel: number, components: number, offset: number): number[];
                /**
                 * Returns an array of unnormalized color/alpha components for
                 * a specified pixel in this <code>ColorModel</code>.  The pixel
                 * value is specified by an array of data elements of type
                 * <code>transferType</code> passed in as an object reference.
                 * If <code>pixel</code> is not a primitive array of type
                 * <code>transferType</code>, a <code>ClassCastException</code>
                 * is thrown.  An <code>ArrayIndexOutOfBoundsException</code>
                 * is thrown if <code>pixel</code> is not large enough to hold
                 * a pixel value for this <code>ColorModel</code>.  If the
                 * <code>components</code> array is <code>null</code>, a new array
                 * is allocated that contains
                 * <code>offset + getNumComponents()</code> elements.
                 * The <code>components</code> array is returned,
                 * with the alpha component included
                 * only if <code>hasAlpha</code> returns true.
                 * Color/alpha components are stored in the <code>components</code>
                 * array starting at <code>offset</code> even if the array is
                 * allocated by this method.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is also
                 * thrown if  the <code>components</code> array is not
                 * <code>null</code> and is not large enough to hold all the color
                 * and alpha components starting at <code>offset</code>.
                 * <p>
                 * Since <code>IndexColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>.
                 */
                // @ts-ignore
                public getComponents(pixel: java.lang.Object, components: number, offset: number): number[];
                /**
                 * Returns a pixel value represented as an int in this
                 * <code>ColorModel</code> given an array of unnormalized
                 * color/alpha components.  An
                 * <code>ArrayIndexOutOfBoundsException</code>
                 * is thrown if the <code>components</code> array is not large
                 * enough to hold all of the color and alpha components starting
                 * at <code>offset</code>.  Since
                 * <code>ColorModel</code> can be subclassed, subclasses inherit the
                 * implementation of this method and if they don't override it then
                 * they throw an exception if they use an unsupported transferType.
                 */
                // @ts-ignore
                public getDataElement(components: number, offset: number): number;
                /**
                 * Returns a data element array representation of a pixel in this
                 * <code>ColorModel</code> given an array of unnormalized color/alpha
                 * components.  This array can then be passed to the
                 * <code>setDataElements</code> method of a <code>WritableRaster</code>
                 * object.  An <code>ArrayIndexOutOfBoundsException</code> is
                 * thrown if the
                 * <code>components</code> array is not large enough to hold all of the
                 * color and alpha components starting at <code>offset</code>.
                 * If the pixel variable is <code>null</code>, a new array
                 * is allocated.  If <code>pixel</code> is not <code>null</code>,
                 * it must be a primitive array of type <code>transferType</code>;
                 * otherwise, a <code>ClassCastException</code> is thrown.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if pixel
                 * is not large enough to hold a pixel value for this
                 * <code>ColorModel</code>.
                 * <p>
                 * Since <code>IndexColorModel</code> can be subclassed, subclasses
                 * inherit the implementation of this method and if they don't
                 * override it then they throw an exception if they use an
                 * unsupported <code>transferType</code>
                 */
                // @ts-ignore
                public getDataElements(components: number, offset: number, pixel: java.lang.Object): java.lang.Object;
                /**
                 * Creates a <code>WritableRaster</code> with the specified width
                 * and height that has a data layout (<code>SampleModel</code>)
                 * compatible with this <code>ColorModel</code>.  This method
                 * only works for color models with 16 or fewer bits per pixel.
                 * <p>
                 * Since <code>IndexColorModel</code> can be subclassed, any
                 * subclass that supports greater than 16 bits per pixel must
                 * override this method.
                 */
                // @ts-ignore
                public createCompatibleWritableRaster(w: number, h: number): java.awt.image.WritableRaster;
                /**
                 * Returns <code>true</code> if <code>raster</code> is compatible
                 * with this <code>ColorModel</code> or <code>false</code> if it
                 * is not compatible with this <code>ColorModel</code>.
                 */
                // @ts-ignore
                public isCompatibleRaster(raster: java.awt.image.Raster): boolean;
                /**
                 * Creates a <code>SampleModel</code> with the specified
                 * width and height that has a data layout compatible with
                 * this <code>ColorModel</code>.
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
                 * Returns a new <code>BufferedImage</code> of TYPE_INT_ARGB or
                 * TYPE_INT_RGB that has a <code>Raster</code> with pixel data
                 * computed by expanding the indices in the source <code>Raster</code>
                 * using the color/alpha component arrays of this <code>ColorModel</code>.
                 * Only the lower <em>n</em> bits of each index value in the source
                 * <code>Raster</code>, as specified in the
                 * <a href="#index_values">class description</a> above, are used to
                 * compute the color/alpha values in the returned image.
                 * If <code>forceARGB</code> is <code>true</code>, a TYPE_INT_ARGB image is
                 * returned regardless of whether or not this <code>ColorModel</code>
                 * has an alpha component array or a transparent pixel.
                 */
                // @ts-ignore
                public convertToIntDiscrete(raster: java.awt.image.Raster, forceARGB: boolean): java.awt.image.BufferedImage;
                /**
                 * Returns whether or not the pixel is valid.
                 */
                // @ts-ignore
                public isValid(pixel: number): boolean;
                /**
                 * Returns whether or not all of the pixels are valid.
                 */
                // @ts-ignore
                public isValid(): boolean;
                /**
                 * Returns a <code>BigInteger</code> that indicates the valid/invalid
                 * pixels in the colormap.  A bit is valid if the
                 * <code>BigInteger</code> value at that index is set, and is invalid
                 * if the <code>BigInteger</code> value at that index is not set.
                 * The only valid ranges to query in the <code>BigInteger</code> are
                 * between 0 and the map size.
                 */
                // @ts-ignore
                public getValidPixels(): java.math.BigInteger;
                /**
                 * Disposes of system resources associated with this
                 * <code>ColorModel</code> once this <code>ColorModel</code> is no
                 * longer referenced.
                 */
                // @ts-ignore
                public finalize(): void;
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
