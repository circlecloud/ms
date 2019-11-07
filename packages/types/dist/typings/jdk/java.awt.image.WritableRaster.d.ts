declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class WritableRaster extends java.awt.image.Raster {
                /**
                 * Constructs a WritableRaster with the given SampleModel.  The
                 * WritableRaster's upper left corner is origin and it is the
                 * same size as the  SampleModel.  A DataBuffer large enough to
                 * describe the WritableRaster is automatically created.
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, origin: java.awt.Point)
                /**
                 * Constructs a WritableRaster with the given SampleModel and DataBuffer.
                 * The WritableRaster's upper left corner is origin and it is the same
                 * size as the SampleModel.  The DataBuffer is not initialized and must
                 * be compatible with SampleModel.
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, dataBuffer: java.awt.image.DataBuffer, origin: java.awt.Point)
                /**
                 * Constructs a WritableRaster with the given SampleModel, DataBuffer,
                 * and parent.  aRegion specifies the bounding rectangle of the new
                 * Raster.  When translated into the base Raster's coordinate
                 * system, aRegion must be contained by the base Raster.
                 * (The base Raster is the Raster's ancestor which has no parent.)
                 * sampleModelTranslate specifies the sampleModelTranslateX and
                 * sampleModelTranslateY values of the new Raster.
                 * Note that this constructor should generally be called by other
                 * constructors or create methods, it should not be used directly.
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, dataBuffer: java.awt.image.DataBuffer, aRegion: java.awt.Rectangle, sampleModelTranslate: java.awt.Point, parent: java.awt.image.WritableRaster)
                /**
                 * Returns the parent WritableRaster (if any) of this WritableRaster,
                 * or else null.
                 */
                // @ts-ignore
                public getWritableParent(): java.awt.image.WritableRaster;
                /**
                 * Create a WritableRaster with the same size, SampleModel and DataBuffer
                 * as this one, but with a different location.  The new WritableRaster
                 * will possess a reference to the current WritableRaster, accessible
                 * through its getParent() and getWritableParent() methods.
                 */
                // @ts-ignore
                public createWritableTranslatedChild(childMinX: number, childMinY: number): java.awt.image.WritableRaster;
                /**
                 * Returns a new WritableRaster which shares all or part of this
                 * WritableRaster's DataBuffer.  The new WritableRaster will
                 * possess a reference to the current WritableRaster, accessible
                 * through its getParent() and getWritableParent() methods.
                 * <p> The parentX, parentY, width and height parameters form a
                 * Rectangle in this WritableRaster's coordinate space, indicating
                 * the area of pixels to be shared.  An error will be thrown if
                 * this Rectangle is not contained with the bounds of the current
                 * WritableRaster.
                 * <p> The new WritableRaster may additionally be translated to a
                 * different coordinate system for the plane than that used by the current
                 * WritableRaster.  The childMinX and childMinY parameters give
                 * the new (x, y) coordinate of the upper-left pixel of the
                 * returned WritableRaster; the coordinate (childMinX, childMinY)
                 * in the new WritableRaster will map to the same pixel as the
                 * coordinate (parentX, parentY) in the current WritableRaster.
                 * <p> The new WritableRaster may be defined to contain only a
                 * subset of the bands of the current WritableRaster, possibly
                 * reordered, by means of the bandList parameter.  If bandList is
                 * null, it is taken to include all of the bands of the current
                 * WritableRaster in their current order.
                 * <p> To create a new WritableRaster that contains a subregion of
                 * the current WritableRaster, but shares its coordinate system
                 * and bands, this method should be called with childMinX equal to
                 * parentX, childMinY equal to parentY, and bandList equal to
                 * null.
                 */
                // @ts-ignore
                public createWritableChild(parentX: number, parentY: number, w: number, h: number, childMinX: number, childMinY: number, bandList: number): java.awt.image.WritableRaster;
                /**
                 * Sets the data for a single pixel from a
                 * primitive array of type TransferType.  For image data supported by
                 * the Java 2D(tm) API, this will be one of DataBuffer.TYPE_BYTE,
                 * DataBuffer.TYPE_USHORT, DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT,
                 * DataBuffer.TYPE_FLOAT, or DataBuffer.TYPE_DOUBLE.  Data in the array
                 * may be in a packed format, thus increasing efficiency for data
                 * transfers.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds, or if inData is not large enough to hold the pixel data.
                 * However, explicit bounds checking is not guaranteed.
                 * A ClassCastException will be thrown if the input object is not null
                 * and references anything other than an array of TransferType.
                 */
                // @ts-ignore
                public setDataElements(x: number, y: number, inData: java.lang.Object): void;
                /**
                 * Sets the data for a rectangle of pixels from an input Raster.
                 * The input Raster must be compatible with this WritableRaster
                 * in that they must have the same number of bands, corresponding bands
                 * must have the same number of bits per sample, the TransferTypes
                 * and NumDataElements must be the same, and the packing used by
                 * the getDataElements/setDataElements must be identical.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setDataElements(x: number, y: number, inRaster: java.awt.image.Raster): void;
                /**
                 * Sets the data for a rectangle of pixels from a
                 * primitive array of type TransferType.  For image data supported by
                 * the Java 2D API, this will be one of DataBuffer.TYPE_BYTE,
                 * DataBuffer.TYPE_USHORT, DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT,
                 * DataBuffer.TYPE_FLOAT, or DataBuffer.TYPE_DOUBLE.  Data in the array
                 * may be in a packed format, thus increasing efficiency for data
                 * transfers.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds, or if inData is not large enough to hold the pixel data.
                 * However, explicit bounds checking is not guaranteed.
                 * A ClassCastException will be thrown if the input object is not null
                 * and references anything other than an array of TransferType.
                 */
                // @ts-ignore
                public setDataElements(x: number, y: number, w: number, h: number, inData: java.lang.Object): void;
                /**
                 * Copies pixels from Raster srcRaster to this WritableRaster.  Each pixel
                 * in srcRaster is copied to the same x,y address in this raster, unless
                 * the address falls outside the bounds of this raster.  srcRaster
                 * must have the same number of bands as this WritableRaster.  The
                 * copy is a simple copy of source samples to the corresponding destination
                 * samples.
                 * <p>
                 * If all samples of both source and destination Rasters are of
                 * integral type and less than or equal to 32 bits in size, then calling
                 * this method is equivalent to executing the following code for all
                 * <code>x,y</code> addresses valid in both Rasters.
                 * <pre>{@code
                 * Raster srcRaster;
                 * WritableRaster dstRaster;
                 * for (int b = 0; b < srcRaster.getNumBands(); b++) {
                 * dstRaster.setSample(x, y, b, srcRaster.getSample(x, y, b));
                 * }
                 * }</pre>
                 * Thus, when copying an integral type source to an integral type
                 * destination, if the source sample size is greater than the destination
                 * sample size for a particular band, the high order bits of the source
                 * sample are truncated.  If the source sample size is less than the
                 * destination size for a particular band, the high order bits of the
                 * destination are zero-extended or sign-extended depending on whether
                 * srcRaster's SampleModel treats the sample as a signed or unsigned
                 * quantity.
                 * <p>
                 * When copying a float or double source to an integral type destination,
                 * each source sample is cast to the destination type.  When copying an
                 * integral type source to a float or double destination, the source
                 * is first converted to a 32-bit int (if necessary), using the above
                 * rules for integral types, and then the int is cast to float or
                 * double.
                 * <p>
                 */
                // @ts-ignore
                public setRect(srcRaster: java.awt.image.Raster): void;
                /**
                 * Copies pixels from Raster srcRaster to this WritableRaster.
                 * For each (x, y) address in srcRaster, the corresponding pixel
                 * is copied to address (x+dx, y+dy) in this WritableRaster,
                 * unless (x+dx, y+dy) falls outside the bounds of this raster.
                 * srcRaster must have the same number of bands as this WritableRaster.
                 * The copy is a simple copy of source samples to the corresponding
                 * destination samples.  For details, see
                 * {@link WritableRaster#setRect(Raster)}.
                 */
                // @ts-ignore
                public setRect(dx: number, dy: number, srcRaster: java.awt.image.Raster): void;
                /**
                 * Sets a pixel in the DataBuffer using an int array of samples for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, iArray: number): void;
                /**
                 * Sets a pixel in the DataBuffer using a float array of samples for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, fArray: number): void;
                /**
                 * Sets a pixel in the DataBuffer using a double array of samples for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, dArray: number): void;
                /**
                 * Sets all samples for a rectangle of pixels from an int array containing
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, iArray: number): void;
                /**
                 * Sets all samples for a rectangle of pixels from a float array containing
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, fArray: number): void;
                /**
                 * Sets all samples for a rectangle of pixels from a double array containing
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, dArray: number): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using an int for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a float for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a double for input.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number): void;
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from an int array containing one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setSamples(x: number, y: number, w: number, h: number, b: number, iArray: number): void;
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from a float array containing one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setSamples(x: number, y: number, w: number, h: number, b: number, fArray: number): void;
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from a double array containing one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 * However, explicit bounds checking is not guaranteed.
                 */
                // @ts-ignore
                public setSamples(x: number, y: number, w: number, h: number, b: number, dArray: number): void;
            }
        }
    }
}
