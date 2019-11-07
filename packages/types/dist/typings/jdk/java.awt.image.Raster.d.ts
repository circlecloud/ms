// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class Raster extends java.lang.Object {
                /**
                 * Constructs a Raster with the given SampleModel.  The Raster's
                 * upper left corner is origin and it is the same size as the
                 * SampleModel.  A DataBuffer large enough to describe the
                 * Raster is automatically created.
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, origin: java.awt.Point)
                /**
                 * Constructs a Raster with the given SampleModel and DataBuffer.
                 * The Raster's upper left corner is origin and it is the same size
                 * as the SampleModel.  The DataBuffer is not initialized and must
                 * be compatible with SampleModel.
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, dataBuffer: java.awt.image.DataBuffer, origin: java.awt.Point)
                /**
                 * Constructs a Raster with the given SampleModel, DataBuffer, and
                 * parent.  aRegion specifies the bounding rectangle of the new
                 * Raster.  When translated into the base Raster's coordinate
                 * system, aRegion must be contained by the base Raster.
                 * (The base Raster is the Raster's ancestor which has no parent.)
                 * sampleModelTranslate specifies the sampleModelTranslateX and
                 * sampleModelTranslateY values of the new Raster.
                 * Note that this constructor should generally be called by other
                 * constructors or create methods, it should not be used directly.
                 */
                // @ts-ignore
                constructor(sampleModel: java.awt.image.SampleModel, dataBuffer: java.awt.image.DataBuffer, aRegion: java.awt.Rectangle, sampleModelTranslate: java.awt.Point, parent: java.awt.image.Raster)
                // @ts-ignore
                protected sampleModel: java.awt.image.SampleModel;
                // @ts-ignore
                protected dataBuffer: java.awt.image.DataBuffer;
                // @ts-ignore
                protected minX: number;
                // @ts-ignore
                protected minY: number;
                // @ts-ignore
                protected width: number;
                // @ts-ignore
                protected height: number;
                // @ts-ignore
                protected sampleModelTranslateX: number;
                // @ts-ignore
                protected sampleModelTranslateY: number;
                // @ts-ignore
                protected numBands: number;
                // @ts-ignore
                protected numDataElements: number;
                // @ts-ignore
                protected parent: java.awt.image.Raster;
                /**
                 * Creates a Raster based on a PixelInterleavedSampleModel with the
                 * specified data type, width, height, and number of bands.
                 * <p> The upper left corner of the Raster is given by the
                 * location argument.  If location is null, (0, 0) will be used.
                 * The dataType parameter should be one of the enumerated values
                 * defined in the DataBuffer class.
                 * <p> Note that interleaved <code>DataBuffer.TYPE_INT</code>
                 * Rasters are not supported.  To create a 1-band Raster of type
                 * <code>DataBuffer.TYPE_INT</code>, use
                 * Raster.createPackedRaster().
                 * <p> The only dataTypes supported currently are TYPE_BYTE
                 * and TYPE_USHORT.
                 */
                // @ts-ignore
                public static createInterleavedRaster(dataType: number, w: number, h: number, bands: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a PixelInterleavedSampleModel with the
                 * specified data type, width, height, scanline stride, pixel
                 * stride, and band offsets.  The number of bands is inferred from
                 * bandOffsets.length.
                 * <p> The upper left corner of the Raster is given by the
                 * location argument.  If location is null, (0, 0) will be used.
                 * The dataType parameter should be one of the enumerated values
                 * defined in the DataBuffer class.
                 * <p> Note that interleaved <code>DataBuffer.TYPE_INT</code>
                 * Rasters are not supported.  To create a 1-band Raster of type
                 * <code>DataBuffer.TYPE_INT</code>, use
                 * Raster.createPackedRaster().
                 * <p> The only dataTypes supported currently are TYPE_BYTE
                 * and TYPE_USHORT.
                 */
                // @ts-ignore
                public static createInterleavedRaster(dataType: number, w: number, h: number, scanlineStride: number, pixelStride: number, bandOffsets: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a BandedSampleModel with the
                 * specified data type, width, height, and number of bands.
                 * <p> The upper left corner of the Raster is given by the
                 * location argument.  If location is null, (0, 0) will be used.
                 * The dataType parameter should be one of the enumerated values
                 * defined in the DataBuffer class.
                 * <p> The only dataTypes supported currently are TYPE_BYTE, TYPE_USHORT,
                 * and TYPE_INT.
                 */
                // @ts-ignore
                public static createBandedRaster(dataType: number, w: number, h: number, bands: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a BandedSampleModel with the
                 * specified data type, width, height, scanline stride, bank
                 * indices and band offsets.  The number of bands is inferred from
                 * bankIndices.length and bandOffsets.length, which must be the
                 * same.
                 * <p> The upper left corner of the Raster is given by the
                 * location argument.  The dataType parameter should be one of the
                 * enumerated values defined in the DataBuffer class.
                 * <p> The only dataTypes supported currently are TYPE_BYTE, TYPE_USHORT,
                 * and TYPE_INT.
                 */
                // @ts-ignore
                public static createBandedRaster(dataType: number, w: number, h: number, scanlineStride: number, bankIndices: number, bandOffsets: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a SinglePixelPackedSampleModel with
                 * the specified data type, width, height, and band masks.
                 * The number of bands is inferred from bandMasks.length.
                 * <p> The upper left corner of the Raster is given by the
                 * location argument.  If location is null, (0, 0) will be used.
                 * The dataType parameter should be one of the enumerated values
                 * defined in the DataBuffer class.
                 * <p> The only dataTypes supported currently are TYPE_BYTE, TYPE_USHORT,
                 * and TYPE_INT.
                 */
                // @ts-ignore
                public static createPackedRaster(dataType: number, w: number, h: number, bandMasks: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a packed SampleModel with the
                 * specified data type, width, height, number of bands, and bits
                 * per band.  If the number of bands is one, the SampleModel will
                 * be a MultiPixelPackedSampleModel.
                 * <p> If the number of bands is more than one, the SampleModel
                 * will be a SinglePixelPackedSampleModel, with each band having
                 * bitsPerBand bits.  In either case, the requirements on dataType
                 * and bitsPerBand imposed by the corresponding SampleModel must
                 * be met.
                 * <p> The upper left corner of the Raster is given by the
                 * location argument.  If location is null, (0, 0) will be used.
                 * The dataType parameter should be one of the enumerated values
                 * defined in the DataBuffer class.
                 * <p> The only dataTypes supported currently are TYPE_BYTE, TYPE_USHORT,
                 * and TYPE_INT.
                 */
                // @ts-ignore
                public static createPackedRaster(dataType: number, w: number, h: number, bands: number, bitsPerBand: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a PixelInterleavedSampleModel with the
                 * specified DataBuffer, width, height, scanline stride, pixel
                 * stride, and band offsets.  The number of bands is inferred from
                 * bandOffsets.length.  The upper left corner of the Raster
                 * is given by the location argument.  If location is null, (0, 0)
                 * will be used.
                 * <p> Note that interleaved <code>DataBuffer.TYPE_INT</code>
                 * Rasters are not supported.  To create a 1-band Raster of type
                 * <code>DataBuffer.TYPE_INT</code>, use
                 * Raster.createPackedRaster().
                 */
                // @ts-ignore
                public static createInterleavedRaster(dataBuffer: java.awt.image.DataBuffer, w: number, h: number, scanlineStride: number, pixelStride: number, bandOffsets: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a BandedSampleModel with the
                 * specified DataBuffer, width, height, scanline stride, bank
                 * indices, and band offsets.  The number of bands is inferred
                 * from bankIndices.length and bandOffsets.length, which must be
                 * the same.  The upper left corner of the Raster is given by the
                 * location argument.  If location is null, (0, 0) will be used.
                 */
                // @ts-ignore
                public static createBandedRaster(dataBuffer: java.awt.image.DataBuffer, w: number, h: number, scanlineStride: number, bankIndices: number, bandOffsets: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a SinglePixelPackedSampleModel with
                 * the specified DataBuffer, width, height, scanline stride, and
                 * band masks.  The number of bands is inferred from bandMasks.length.
                 * The upper left corner of the Raster is given by
                 * the location argument.  If location is null, (0, 0) will be used.
                 */
                // @ts-ignore
                public static createPackedRaster(dataBuffer: java.awt.image.DataBuffer, w: number, h: number, scanlineStride: number, bandMasks: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster based on a MultiPixelPackedSampleModel with the
                 * specified DataBuffer, width, height, and bits per pixel.  The upper
                 * left corner of the Raster is given by the location argument.  If
                 * location is null, (0, 0) will be used.
                 */
                // @ts-ignore
                public static createPackedRaster(dataBuffer: java.awt.image.DataBuffer, w: number, h: number, bitsPerPixel: number, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a Raster with the specified SampleModel and DataBuffer.
                 * The upper left corner of the Raster is given by the location argument.
                 * If location is null, (0, 0) will be used.
                 */
                // @ts-ignore
                public static createRaster(sm: java.awt.image.SampleModel, db: java.awt.image.DataBuffer, location: java.awt.Point): java.awt.image.Raster;
                /**
                 * Creates a WritableRaster with the specified SampleModel.
                 * The upper left corner of the Raster is given by the location argument.
                 * If location is null, (0, 0) will be used.
                 */
                // @ts-ignore
                public static createWritableRaster(sm: java.awt.image.SampleModel, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Creates a WritableRaster with the specified SampleModel and DataBuffer.
                 * The upper left corner of the Raster is given by the location argument.
                 * If location is null, (0, 0) will be used.
                 */
                // @ts-ignore
                public static createWritableRaster(sm: java.awt.image.SampleModel, db: java.awt.image.DataBuffer, location: java.awt.Point): java.awt.image.WritableRaster;
                /**
                 * Returns the parent Raster (if any) of this Raster or null.
                 */
                // @ts-ignore
                public getParent(): java.awt.image.Raster;
                /**
                 * Returns the X translation from the coordinate system of the
                 * SampleModel to that of the Raster.  To convert a pixel's X
                 * coordinate from the Raster coordinate system to the SampleModel
                 * coordinate system, this value must be subtracted.
                 */
                // @ts-ignore
                public getSampleModelTranslateX(): number;
                /**
                 * Returns the Y translation from the coordinate system of the
                 * SampleModel to that of the Raster.  To convert a pixel's Y
                 * coordinate from the Raster coordinate system to the SampleModel
                 * coordinate system, this value must be subtracted.
                 */
                // @ts-ignore
                public getSampleModelTranslateY(): number;
                /**
                 * Create a compatible WritableRaster the same size as this Raster with
                 * the same SampleModel and a new initialized DataBuffer.
                 */
                // @ts-ignore
                public createCompatibleWritableRaster(): java.awt.image.WritableRaster;
                /**
                 * Create a compatible WritableRaster with the specified size, a new
                 * SampleModel, and a new initialized DataBuffer.
                 */
                // @ts-ignore
                public createCompatibleWritableRaster(w: number, h: number): java.awt.image.WritableRaster;
                /**
                 * Create a compatible WritableRaster with location (minX, minY)
                 * and size (width, height) specified by rect, a
                 * new SampleModel, and a new initialized DataBuffer.
                 */
                // @ts-ignore
                public createCompatibleWritableRaster(rect: java.awt.Rectangle): java.awt.image.WritableRaster;
                /**
                 * Create a compatible WritableRaster with the specified
                 * location (minX, minY) and size (width, height), a
                 * new SampleModel, and a new initialized DataBuffer.
                 */
                // @ts-ignore
                public createCompatibleWritableRaster(x: number, y: number, w: number, h: number): java.awt.image.WritableRaster;
                /**
                 * Create a Raster with the same size, SampleModel and DataBuffer
                 * as this one, but with a different location.  The new Raster
                 * will possess a reference to the current Raster, accessible
                 * through its getParent() method.
                 */
                // @ts-ignore
                public createTranslatedChild(childMinX: number, childMinY: number): java.awt.image.Raster;
                /**
                 * Returns a new Raster which shares all or part of this Raster's
                 * DataBuffer.  The new Raster will possess a reference to the
                 * current Raster, accessible through its getParent() method.
                 * <p> The parentX, parentY, width and height parameters
                 * form a Rectangle in this Raster's coordinate space,
                 * indicating the area of pixels to be shared.  An error will
                 * be thrown if this Rectangle is not contained with the bounds
                 * of the current Raster.
                 * <p> The new Raster may additionally be translated to a
                 * different coordinate system for the plane than that used by the current
                 * Raster.  The childMinX and childMinY parameters give the new
                 * (x, y) coordinate of the upper-left pixel of the returned
                 * Raster; the coordinate (childMinX, childMinY) in the new Raster
                 * will map to the same pixel as the coordinate (parentX, parentY)
                 * in the current Raster.
                 * <p> The new Raster may be defined to contain only a subset of
                 * the bands of the current Raster, possibly reordered, by means
                 * of the bandList parameter.  If bandList is null, it is taken to
                 * include all of the bands of the current Raster in their current
                 * order.
                 * <p> To create a new Raster that contains a subregion of the current
                 * Raster, but shares its coordinate system and bands,
                 * this method should be called with childMinX equal to parentX,
                 * childMinY equal to parentY, and bandList equal to null.
                 */
                // @ts-ignore
                public createChild(parentX: number, parentY: number, width: number, height: number, childMinX: number, childMinY: number, bandList: number): java.awt.image.Raster;
                /**
                 * Returns the bounding Rectangle of this Raster. This function returns
                 * the same information as getMinX/MinY/Width/Height.
                 */
                // @ts-ignore
                public getBounds(): java.awt.Rectangle;
                /**
                 * Returns the minimum valid X coordinate of the Raster.
                 */
                // @ts-ignore
                public getMinX(): number;
                /**
                 * Returns the minimum valid Y coordinate of the Raster.
                 */
                // @ts-ignore
                public getMinY(): number;
                /**
                 * Returns the width in pixels of the Raster.
                 */
                // @ts-ignore
                public getWidth(): number;
                /**
                 * Returns the height in pixels of the Raster.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Returns the number of bands (samples per pixel) in this Raster.
                 */
                // @ts-ignore
                public getNumBands(): number;
                /**
                 * Returns the number of data elements needed to transfer one pixel
                 * via the getDataElements and setDataElements methods.  When pixels
                 * are transferred via these methods, they may be transferred in a
                 * packed or unpacked format, depending on the implementation of the
                 * underlying SampleModel.  Using these methods, pixels are transferred
                 * as an array of getNumDataElements() elements of a primitive type given
                 * by getTransferType().  The TransferType may or may not be the same
                 * as the storage data type of the DataBuffer.
                 */
                // @ts-ignore
                public getNumDataElements(): number;
                /**
                 * Returns the TransferType used to transfer pixels via the
                 * getDataElements and setDataElements methods.  When pixels
                 * are transferred via these methods, they may be transferred in a
                 * packed or unpacked format, depending on the implementation of the
                 * underlying SampleModel.  Using these methods, pixels are transferred
                 * as an array of getNumDataElements() elements of a primitive type given
                 * by getTransferType().  The TransferType may or may not be the same
                 * as the storage data type of the DataBuffer.  The TransferType will
                 * be one of the types defined in DataBuffer.
                 */
                // @ts-ignore
                public getTransferType(): number;
                /**
                 * Returns the DataBuffer associated with this Raster.
                 */
                // @ts-ignore
                public getDataBuffer(): java.awt.image.DataBuffer;
                /**
                 * Returns the SampleModel that describes the layout of the image data.
                 */
                // @ts-ignore
                public getSampleModel(): java.awt.image.SampleModel;
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * TransferType.  For image data supported by the Java 2D(tm) API,
                 * this will be one of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT, DataBuffer.TYPE_FLOAT,
                 * or DataBuffer.TYPE_DOUBLE.  Data may be returned in a packed format,
                 * thus increasing efficiency for data transfers.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 * A ClassCastException will be thrown if the input object is non null
                 * and references anything other than an array of TransferType.
                 */
                // @ts-ignore
                public getDataElements(x: number, y: number, outData: java.lang.Object): java.lang.Object;
                /**
                 * Returns the pixel data for the specified rectangle of pixels in a
                 * primitive array of type TransferType.
                 * For image data supported by the Java 2D API, this
                 * will be one of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT, DataBuffer.TYPE_FLOAT,
                 * or DataBuffer.TYPE_DOUBLE.  Data may be returned in a packed format,
                 * thus increasing efficiency for data transfers.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 * A ClassCastException will be thrown if the input object is non null
                 * and references anything other than an array of TransferType.
                 */
                // @ts-ignore
                public getDataElements(x: number, y: number, w: number, h: number, outData: java.lang.Object): java.lang.Object;
                /**
                 * Returns the samples in an array of int for the specified pixel.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, iArray: number): number[];
                /**
                 * Returns the samples in an array of float for the
                 * specified pixel.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, fArray: number): number[];
                /**
                 * Returns the samples in an array of double for the specified pixel.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, dArray: number): number[];
                /**
                 * Returns an int array containing all samples for a rectangle of pixels,
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getPixels(x: number, y: number, w: number, h: number, iArray: number): number[];
                /**
                 * Returns a float array containing all samples for a rectangle of pixels,
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getPixels(x: number, y: number, w: number, h: number, fArray: number): number[];
                /**
                 * Returns a double array containing all samples for a rectangle of pixels,
                 * one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getPixels(x: number, y: number, w: number, h: number, dArray: number): number[];
                /**
                 * Returns the sample in a specified band for the pixel located
                 * at (x,y) as an int.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getSample(x: number, y: number, b: number): number;
                /**
                 * Returns the sample in a specified band
                 * for the pixel located at (x,y) as a float.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getSampleFloat(x: number, y: number, b: number): number;
                /**
                 * Returns the sample in a specified band
                 * for a pixel located at (x,y) as a double.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getSampleDouble(x: number, y: number, b: number): number;
                /**
                 * Returns the samples for a specified band for the specified rectangle
                 * of pixels in an int array, one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, iArray: number): number[];
                /**
                 * Returns the samples for a specified band for the specified rectangle
                 * of pixels in a float array, one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, fArray: number): number[];
                /**
                 * Returns the samples for a specified band for a specified rectangle
                 * of pixels in a double array, one sample per array element.
                 * An ArrayIndexOutOfBoundsException may be thrown
                 * if the coordinates are not in bounds.  However, explicit bounds
                 * checking is not guaranteed.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, dArray: number): number[];
            }
        }
    }
}
