// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class MultiPixelPackedSampleModel extends java.awt.image.SampleModel {
                /**
                 * Constructs a <code>MultiPixelPackedSampleModel</code> with the
                 * specified data type, width, height and number of bits per pixel.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, numberOfBits: number)
                /**
                 * Constructs a <code>MultiPixelPackedSampleModel</code> with
                 * specified data type, width, height, number of bits per pixel,
                 * scanline stride and data bit offset.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, numberOfBits: number, scanlineStride: number, dataBitOffset: number)
                /**
                 * Creates a new <code>MultiPixelPackedSampleModel</code> with the
                 * specified width and height.  The new
                 * <code>MultiPixelPackedSampleModel</code> has the
                 * same storage data type and number of bits per pixel as this
                 * <code>MultiPixelPackedSampleModel</code>.
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Creates a <code>DataBuffer</code> that corresponds to this
                 * <code>MultiPixelPackedSampleModel</code>.  The
                 * <code>DataBuffer</code> object's data type and size
                 * is consistent with this <code>MultiPixelPackedSampleModel</code>.
                 * The <code>DataBuffer</code> has a single bank.
                 */
                // @ts-ignore
                public createDataBuffer(): java.awt.image.DataBuffer;
                /**
                 * Returns the number of data elements needed to transfer one pixel
                 * via the {@link #getDataElements} and {@link #setDataElements}
                 * methods.  For a <code>MultiPixelPackedSampleModel</code>, this is
                 * one.
                 */
                // @ts-ignore
                public getNumDataElements(): number;
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
                 * Returns the offset of pixel (x,&nbsp;y) in data array elements.
                 */
                // @ts-ignore
                public getOffset(x: number, y: number): number;
                /**
                 * Returns the offset, in bits, into the data element in which it is
                 * stored for the <code>x</code>th pixel of a scanline.
                 * This offset is the same for all scanlines.
                 */
                // @ts-ignore
                public getBitOffset(x: number): number;
                /**
                 * Returns the scanline stride.
                 */
                // @ts-ignore
                public getScanlineStride(): number;
                /**
                 * Returns the pixel bit stride in bits.  This value is the same as
                 * the number of bits per pixel.
                 */
                // @ts-ignore
                public getPixelBitStride(): number;
                /**
                 * Returns the data bit offset in bits.
                 */
                // @ts-ignore
                public getDataBitOffset(): number;
                /**
                 * Returns the TransferType used to transfer pixels by way of the
                 * <code>getDataElements</code> and <code>setDataElements</code>
                 * methods. The TransferType might or might not be the same as the
                 * storage DataType.  The TransferType is one of
                 * DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * or DataBuffer.TYPE_INT.
                 */
                // @ts-ignore
                public getTransferType(): number;
                /**
                 * Creates a new <code>MultiPixelPackedSampleModel</code> with a
                 * subset of the bands of this
                 * <code>MultiPixelPackedSampleModel</code>.  Since a
                 * <code>MultiPixelPackedSampleModel</code> only has one band, the
                 * bands argument must have a length of one and indicate the zeroth
                 * band.
                 */
                // @ts-ignore
                public createSubsetSampleModel(bands: number): java.awt.image.SampleModel;
                /**
                 * Returns as <code>int</code> the sample in a specified band for the
                 * pixel located at (x,&nbsp;y).  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * coordinates are not in bounds.
                 */
                // @ts-ignore
                public getSample(x: number, y: number, b: number, data: java.awt.image.DataBuffer): number;
                /**
                 * Sets a sample in the specified band for the pixel located at
                 * (x,&nbsp;y) in the <code>DataBuffer</code> using an
                 * <code>int</code> for input.
                 * An <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * coordinates are not in bounds.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * TransferType.  For a <code>MultiPixelPackedSampleModel</code>,
                 * the array has one element, and the type is the smallest of
                 * DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT, or DataBuffer.TYPE_INT
                 * that can hold a single pixel.  Generally, <code>obj</code>
                 * should be passed in as <code>null</code>, so that the
                 * <code>Object</code> is created automatically and is the
                 * correct primitive data type.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * <code>DataBuffer</code> <code>db1</code>, whose storage layout is
                 * described by <code>MultiPixelPackedSampleModel</code>
                 * <code>mppsm1</code>, to <code>DataBuffer</code> <code>db2</code>,
                 * whose storage layout is described by
                 * <code>MultiPixelPackedSampleModel</code> <code>mppsm2</code>.
                 * The transfer is generally more efficient than using
                 * <code>getPixel</code> or <code>setPixel</code>.
                 * <pre>
                 * MultiPixelPackedSampleModel mppsm1, mppsm2;
                 * DataBufferInt db1, db2;
                 * mppsm2.setDataElements(x, y, mppsm1.getDataElements(x, y, null,
                 * db1), db2);
                 * </pre>
                 * Using <code>getDataElements</code> or <code>setDataElements</code>
                 * to transfer between two <code>DataBuffer/SampleModel</code> pairs
                 * is legitimate if the <code>SampleModels</code> have the same number
                 * of bands, corresponding bands have the same number of
                 * bits per sample, and the TransferTypes are the same.
                 * <p>
                 * If <code>obj</code> is not <code>null</code>, it should be a
                 * primitive array of type TransferType.  Otherwise, a
                 * <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * coordinates are not in bounds, or if <code>obj</code> is not
                 * <code>null</code> and is not large enough to hold the pixel data.
                 */
                // @ts-ignore
                public getDataElements(x: number, y: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): java.lang.Object;
                /**
                 * Returns the specified single band pixel in the first element
                 * of an <code>int</code> array.
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * coordinates are not in bounds.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Sets the data for a single pixel in the specified
                 * <code>DataBuffer</code> from a primitive array of type
                 * TransferType.  For a <code>MultiPixelPackedSampleModel</code>,
                 * only the first element of the array holds valid data,
                 * and the type must be the smallest of
                 * DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT, or DataBuffer.TYPE_INT
                 * that can hold a single pixel.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * <code>DataBuffer</code> <code>db1</code>, whose storage layout is
                 * described by <code>MultiPixelPackedSampleModel</code>
                 * <code>mppsm1</code>, to <code>DataBuffer</code> <code>db2</code>,
                 * whose storage layout is described by
                 * <code>MultiPixelPackedSampleModel</code> <code>mppsm2</code>.
                 * The transfer is generally more efficient than using
                 * <code>getPixel</code> or <code>setPixel</code>.
                 * <pre>
                 * MultiPixelPackedSampleModel mppsm1, mppsm2;
                 * DataBufferInt db1, db2;
                 * mppsm2.setDataElements(x, y, mppsm1.getDataElements(x, y, null,
                 * db1), db2);
                 * </pre>
                 * Using <code>getDataElements</code> or <code>setDataElements</code> to
                 * transfer between two <code>DataBuffer/SampleModel</code> pairs is
                 * legitimate if the <code>SampleModel</code> objects have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the TransferTypes are the same.
                 * <p>
                 * <code>obj</code> must be a primitive array of type TransferType.
                 * Otherwise, a <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if the
                 * coordinates are not in bounds, or if <code>obj</code> is not large
                 * enough to hold the pixel data.
                 */
                // @ts-ignore
                public setDataElements(x: number, y: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a pixel in the <code>DataBuffer</code> using an
                 * <code>int</code> array for input.
                 * <code>ArrayIndexOutOfBoundsException</code> is thrown if
                 * the coordinates are not in bounds.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): void;
                // @ts-ignore
                public equals(o: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
