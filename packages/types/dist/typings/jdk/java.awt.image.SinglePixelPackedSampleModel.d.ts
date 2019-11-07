declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class SinglePixelPackedSampleModel extends java.awt.image.SampleModel {
                /**
                 * Constructs a SinglePixelPackedSampleModel with bitMasks.length bands.
                 * Each sample is stored in a data array element in the position of
                 * its corresponding bit mask.  Each bit mask must be contiguous and
                 * masks must not overlap. Bit masks exceeding data type capacity are
                 * truncated.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, bitMasks: number)
                /**
                 * Constructs a SinglePixelPackedSampleModel with bitMasks.length bands
                 * and a scanline stride equal to scanlineStride data array elements.
                 * Each sample is stored in a data array element in the position of
                 * its corresponding bit mask.  Each bit mask must be contiguous and
                 * masks must not overlap. Bit masks exceeding data type capacity are
                 * truncated.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, scanlineStride: number, bitMasks: number)
                /**
                 * Returns the number of data elements needed to transfer one pixel
                 * via the getDataElements and setDataElements methods.
                 * For a SinglePixelPackedSampleModel, this is one.
                 */
                // @ts-ignore
                public getNumDataElements(): number;
                /**
                 * Creates a new SinglePixelPackedSampleModel with the specified
                 * width and height.  The new SinglePixelPackedSampleModel will have the
                 * same storage data type and bit masks as this
                 * SinglePixelPackedSampleModel.
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Creates a DataBuffer that corresponds to this
                 * SinglePixelPackedSampleModel.  The DataBuffer's data type and size
                 * will be consistent with this SinglePixelPackedSampleModel.  The
                 * DataBuffer will have a single bank.
                 */
                // @ts-ignore
                public createDataBuffer(): java.awt.image.DataBuffer;
                /**
                 * Returns the number of bits per sample for all bands.
                 */
                // @ts-ignore
                public getSampleSize(): number[];
                /**
                 * Returns the number of bits per sample for the specified band.
                 */
                // @ts-ignore
                public getSampleSize(band: number): number;
                /**
                 * Returns the offset (in data array elements) of pixel (x,y).
                 * The data element containing pixel <code>x,y</code>
                 * can be retrieved from a DataBuffer <code>data</code> with a
                 * SinglePixelPackedSampleModel <code>sppsm</code> as:
                 * <pre>
                 * data.getElem(sppsm.getOffset(x, y));
                 * </pre>
                 */
                // @ts-ignore
                public getOffset(x: number, y: number): number;
                /**
                 * Returns the bit offsets into the data array element representing
                 * a pixel for all bands.
                 */
                // @ts-ignore
                public getBitOffsets(): number[];
                /**
                 * Returns the bit masks for all bands.
                 */
                // @ts-ignore
                public getBitMasks(): number[];
                /**
                 * Returns the scanline stride of this SinglePixelPackedSampleModel.
                 */
                // @ts-ignore
                public getScanlineStride(): number;
                /**
                 * This creates a new SinglePixelPackedSampleModel with a subset of the
                 * bands of this SinglePixelPackedSampleModel.  The new
                 * SinglePixelPackedSampleModel can be used with any DataBuffer that the
                 * existing SinglePixelPackedSampleModel can be used with.  The new
                 * SinglePixelPackedSampleModel/DataBuffer combination will represent
                 * an image with a subset of the bands of the original
                 * SinglePixelPackedSampleModel/DataBuffer combination.
                 */
                // @ts-ignore
                public createSubsetSampleModel(bands: number): java.awt.image.SampleModel;
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * TransferType.  For a SinglePixelPackedSampleModel, the array will
                 * have one element, and the type will be the same as the storage
                 * data type.  Generally, obj
                 * should be passed in as null, so that the Object will be created
                 * automatically and will be of the right primitive data type.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * SinglePixelPackedSampleModel <code>sppsm1</code>, to
                 * DataBuffer <code>db2</code>, whose storage layout is described by
                 * SinglePixelPackedSampleModel <code>sppsm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * SinglePixelPackedSampleModel sppsm1, sppsm2;
                 * DataBufferInt db1, db2;
                 * sppsm2.setDataElements(x, y, sppsm1.getDataElements(x, y, null,
                 * db1), db2);
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
                 * Returns all samples in for the specified pixel in an int array.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns all samples for the specified rectangle of pixels in
                 * an int array, one sample per array element.
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
                 * Returns the samples for a specified band for the specified rectangle
                 * of pixels in an int array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Sets the data for a single pixel in the specified DataBuffer from a
                 * primitive array of type TransferType.  For a
                 * SinglePixelPackedSampleModel, only the first element of the array
                 * will hold valid data, and the type of the array must be the same as
                 * the storage data type of the SinglePixelPackedSampleModel.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * SinglePixelPackedSampleModel <code>sppsm1</code>,
                 * to DataBuffer <code>db2</code>, whose storage layout is described by
                 * SinglePixelPackedSampleModel <code>sppsm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * SinglePixelPackedSampleModel sppsm1, sppsm2;
                 * DataBufferInt db1, db2;
                 * sppsm2.setDataElements(x, y, sppsm1.getDataElements(x, y, null,
                 * db1), db2);
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
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from an int array containing one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setSamples(x: number, y: number, w: number, h: number, b: number, iArray: number, data: java.awt.image.DataBuffer): void;
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
