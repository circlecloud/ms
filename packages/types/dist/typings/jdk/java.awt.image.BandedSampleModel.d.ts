declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class BandedSampleModel extends java.awt.image.ComponentSampleModel {
                /**
                 * Constructs a BandedSampleModel with the specified parameters.
                 * The pixel stride will be one data element.  The scanline stride
                 * will be the same as the width.  Each band will be stored in
                 * a separate bank and all band offsets will be zero.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, numBands: number)
                /**
                 * Constructs a BandedSampleModel with the specified parameters.
                 * The number of bands will be inferred from the lengths of the
                 * bandOffsets bankIndices arrays, which must be equal.  The pixel
                 * stride will be one data element.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, scanlineStride: number, bankIndices: number, bandOffsets: number)
                /**
                 * Creates a new BandedSampleModel with the specified
                 * width and height.  The new BandedSampleModel will have the same
                 * number of bands, storage data type, and bank indices
                 * as this BandedSampleModel.  The band offsets will be compressed
                 * such that the offset between bands will be w*pixelStride and
                 * the minimum of all of the band offsets is zero.
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Creates a new BandedSampleModel with a subset of the bands of this
                 * BandedSampleModel.  The new BandedSampleModel can be
                 * used with any DataBuffer that the existing BandedSampleModel
                 * can be used with.  The new BandedSampleModel/DataBuffer
                 * combination will represent an image with a subset of the bands
                 * of the original BandedSampleModel/DataBuffer combination.
                 */
                // @ts-ignore
                public createSubsetSampleModel(bands: number): java.awt.image.SampleModel;
                /**
                 * Creates a DataBuffer that corresponds to this BandedSampleModel,
                 * The DataBuffer's data type, number of banks, and size
                 * will be consistent with this BandedSampleModel.
                 */
                // @ts-ignore
                public createDataBuffer(): java.awt.image.DataBuffer;
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * TransferType.  For a BandedSampleModel, this will be the same
                 * as the data type, and samples will be returned one per array
                 * element.  Generally, obj
                 * should be passed in as null, so that the Object will be created
                 * automatically and will be of the right primitive data type.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * BandedSampleModel <code>bsm1</code>, to DataBuffer <code>db2</code>,
                 * whose storage layout is described by
                 * BandedSampleModel <code>bsm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * BandedSampleModel bsm1, bsm2;
                 * DataBufferInt db1, db2;
                 * bsm2.setDataElements(x, y, bsm1.getDataElements(x, y, null, db1),
                 * db2);
                 * </pre>
                 * Using getDataElements/setDataElements to transfer between two
                 * DataBuffer/SampleModel pairs is legitimate if the SampleModels have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the TransferTypes are the same.
                 * <p>
                 * If obj is non-null, it should be a primitive array of type TransferType.
                 * Otherwise, a ClassCastException is thrown.  An
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds, or if obj is non-null and is not large enough to hold
                 * the pixel data.
                 */
                // @ts-ignore
                public getDataElements(x: number, y: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): java.lang.Object;
                /**
                 * Returns all samples for the specified pixel in an int array.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns all samples for the specified rectangle of pixels in
                 * an int array, one sample per data array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixels(x: number, y: number, w: number, h: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns as int the sample in a specified band for the pixel
                 * located at (x,y).
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getSample(x: number, y: number, b: number, data: java.awt.image.DataBuffer): number;
                /**
                 * Returns the sample in a specified band
                 * for the pixel located at (x,y) as a float.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getSampleFloat(x: number, y: number, b: number, data: java.awt.image.DataBuffer): number;
                /**
                 * Returns the sample in a specified band
                 * for a pixel located at (x,y) as a double.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getSampleDouble(x: number, y: number, b: number, data: java.awt.image.DataBuffer): number;
                /**
                 * Returns the samples in a specified band for the specified rectangle
                 * of pixels in an int array, one sample per data array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Sets the data for a single pixel in the specified DataBuffer from a
                 * primitive array of type TransferType.  For a BandedSampleModel,
                 * this will be the same as the data type, and samples are transferred
                 * one per array element.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * BandedSampleModel <code>bsm1</code>, to DataBuffer <code>db2</code>,
                 * whose storage layout is described by
                 * BandedSampleModel <code>bsm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * BandedSampleModel bsm1, bsm2;
                 * DataBufferInt db1, db2;
                 * bsm2.setDataElements(x, y, bsm1.getDataElements(x, y, null, db1),
                 * db2);
                 * </pre>
                 * Using getDataElements/setDataElements to transfer between two
                 * DataBuffer/SampleModel pairs is legitimate if the SampleModels have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the TransferTypes are the same.
                 * <p>
                 * obj must be a primitive array of type TransferType.  Otherwise,
                 * a ClassCastException is thrown.  An
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds, or if obj is not large enough to hold the pixel data.
                 */
                // @ts-ignore
                public setDataElements(x: number, y: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a pixel in the DataBuffer using an int array of samples for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets all samples for a rectangle of pixels from an int array containing
                 * one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, iArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using an int for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a float for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a double for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from an int array containing one sample per data array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setSamples(x: number, y: number, w: number, h: number, b: number, iArray: number, data: java.awt.image.DataBuffer): void;
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
