declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class ComponentSampleModel extends java.awt.image.SampleModel {
                /**
                 * Constructs a ComponentSampleModel with the specified parameters.
                 * The number of bands will be given by the length of the bandOffsets array.
                 * All bands will be stored in the first bank of the DataBuffer.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, pixelStride: number, scanlineStride: number, bandOffsets: number)
                /**
                 * Constructs a ComponentSampleModel with the specified parameters.
                 * The number of bands will be given by the length of the bandOffsets array.
                 * Different bands may be stored in different banks of the DataBuffer.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, pixelStride: number, scanlineStride: number, bankIndices: number, bandOffsets: number)
                // @ts-ignore
                protected bandOffsets: number[];
                // @ts-ignore
                protected bankIndices: number[];
                // @ts-ignore
                protected numBands: number;
                // @ts-ignore
                protected numBanks: number;
                // @ts-ignore
                protected scanlineStride: number;
                // @ts-ignore
                protected pixelStride: number;
                /**
                 * Creates a new <code>ComponentSampleModel</code> with the specified
                 * width and height.  The new <code>SampleModel</code> will have the same
                 * number of bands, storage data type, interleaving scheme, and
                 * pixel stride as this <code>SampleModel</code>.
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Creates a new ComponentSampleModel with a subset of the bands
                 * of this ComponentSampleModel.  The new ComponentSampleModel can be
                 * used with any DataBuffer that the existing ComponentSampleModel
                 * can be used with.  The new ComponentSampleModel/DataBuffer
                 * combination will represent an image with a subset of the bands
                 * of the original ComponentSampleModel/DataBuffer combination.
                 */
                // @ts-ignore
                public createSubsetSampleModel(bands: number): java.awt.image.SampleModel;
                /**
                 * Creates a <code>DataBuffer</code> that corresponds to this
                 * <code>ComponentSampleModel</code>.
                 * The <code>DataBuffer</code> object's data type, number of banks,
                 * and size are be consistent with this <code>ComponentSampleModel</code>.
                 */
                // @ts-ignore
                public createDataBuffer(): java.awt.image.DataBuffer;
                /**
                 * Gets the offset for the first band of pixel (x,y).
                 * A sample of the first band can be retrieved from a
                 * <code>DataBuffer</code>
                 * <code>data</code> with a <code>ComponentSampleModel</code>
                 * <code>csm</code> as
                 * <pre>
                 * data.getElem(csm.getOffset(x, y));
                 * </pre>
                 */
                // @ts-ignore
                public getOffset(x: number, y: number): number;
                /**
                 * Gets the offset for band b of pixel (x,y).
                 * A sample of band <code>b</code> can be retrieved from a
                 * <code>DataBuffer</code> <code>data</code>
                 * with a <code>ComponentSampleModel</code> <code>csm</code> as
                 * <pre>
                 * data.getElem(csm.getOffset(x, y, b));
                 * </pre>
                 */
                // @ts-ignore
                public getOffset(x: number, y: number, b: number): number;
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
                 * Returns the bank indices for all bands.
                 */
                // @ts-ignore
                public getBankIndices(): number[];
                /**
                 * Returns the band offset for all bands.
                 */
                // @ts-ignore
                public getBandOffsets(): number[];
                /**
                 * Returns the scanline stride of this ComponentSampleModel.
                 */
                // @ts-ignore
                public getScanlineStride(): number;
                /**
                 * Returns the pixel stride of this ComponentSampleModel.
                 */
                // @ts-ignore
                public getPixelStride(): number;
                /**
                 * Returns the number of data elements needed to transfer a pixel
                 * with the
                 * {@link #getDataElements(int, int, Object, DataBuffer) } and
                 * {@link #setDataElements(int, int, Object, DataBuffer) }
                 * methods.
                 * For a <code>ComponentSampleModel</code>, this is identical to the
                 * number of bands.
                 */
                // @ts-ignore
                public getNumDataElements(): number;
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * <code>TransferType</code>.  For a <code>ComponentSampleModel</code>,
                 * this is the same as the data type, and samples are returned
                 * one per array element.  Generally, <code>obj</code> should
                 * be passed in as <code>null</code>, so that the <code>Object</code>
                 * is created automatically and is the right primitive data type.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * <code>DataBuffer</code> <code>db1</code>, whose storage layout is
                 * described by <code>ComponentSampleModel</code> <code>csm1</code>,
                 * to <code>DataBuffer</code> <code>db2</code>, whose storage layout
                 * is described by <code>ComponentSampleModel</code> <code>csm2</code>.
                 * The transfer is usually more efficient than using
                 * <code>getPixel</code> and <code>setPixel</code>.
                 * <pre>
                 * ComponentSampleModel csm1, csm2;
                 * DataBufferInt db1, db2;
                 * csm2.setDataElements(x, y,
                 * csm1.getDataElements(x, y, null, db1), db2);
                 * </pre>
                 * Using <code>getDataElements</code> and <code>setDataElements</code>
                 * to transfer between two <code>DataBuffer/SampleModel</code>
                 * pairs is legitimate if the <code>SampleModel</code> objects have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the <code>TransferType</code>s are the same.
                 * <p>
                 * If <code>obj</code> is not <code>null</code>, it should be a
                 * primitive array of type <code>TransferType</code>.
                 * Otherwise, a <code>ClassCastException</code> is thrown.  An
                 * <code>ArrayIndexOutOfBoundsException</code> might be thrown if the
                 * coordinates are not in bounds, or if <code>obj</code> is not
                 * <code>null</code> and is not large enough to hold
                 * the pixel data.
                 */
                // @ts-ignore
                public getDataElements(x: number, y: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): java.lang.Object;
                /**
                 * Returns all samples for the specified pixel in an int array,
                 * one sample per array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns all samples for the specified rectangle of pixels in
                 * an int array, one sample per array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 */
                // @ts-ignore
                public getPixels(x: number, y: number, w: number, h: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns as int the sample in a specified band for the pixel
                 * located at (x,y).
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 */
                // @ts-ignore
                public getSample(x: number, y: number, b: number, data: java.awt.image.DataBuffer): number;
                /**
                 * Returns the sample in a specified band
                 * for the pixel located at (x,y) as a float.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be
                 * thrown if the coordinates are not in bounds.
                 */
                // @ts-ignore
                public getSampleFloat(x: number, y: number, b: number, data: java.awt.image.DataBuffer): number;
                /**
                 * Returns the sample in a specified band
                 * for a pixel located at (x,y) as a double.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be
                 * thrown if the coordinates are not in bounds.
                 */
                // @ts-ignore
                public getSampleDouble(x: number, y: number, b: number, data: java.awt.image.DataBuffer): number;
                /**
                 * Returns the samples in a specified band for the specified rectangle
                 * of pixels in an int array, one sample per data array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Sets the data for a single pixel in the specified
                 * <code>DataBuffer</code> from a primitive array of type
                 * <code>TransferType</code>.  For a <code>ComponentSampleModel</code>,
                 * this is the same as the data type, and samples are transferred
                 * one per array element.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * <code>DataBuffer</code> <code>db1</code>, whose storage layout is
                 * described by <code>ComponentSampleModel</code> <code>csm1</code>,
                 * to <code>DataBuffer</code> <code>db2</code>, whose storage layout
                 * is described by <code>ComponentSampleModel</code> <code>csm2</code>.
                 * The transfer is usually more efficient than using
                 * <code>getPixel</code> and <code>setPixel</code>.
                 * <pre>
                 * ComponentSampleModel csm1, csm2;
                 * DataBufferInt db1, db2;
                 * csm2.setDataElements(x, y, csm1.getDataElements(x, y, null, db1),
                 * db2);
                 * </pre>
                 * Using <code>getDataElements</code> and <code>setDataElements</code>
                 * to transfer between two <code>DataBuffer/SampleModel</code> pairs
                 * is legitimate if the <code>SampleModel</code> objects have
                 * the same number of bands, corresponding bands have the same number of
                 * bits per sample, and the <code>TransferType</code>s are the same.
                 * <p>
                 * A <code>ClassCastException</code> is thrown if <code>obj</code> is not
                 * a primitive array of type <code>TransferType</code>.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds, or if <code>obj</code> is not large
                 * enough to hold the pixel data.
                 */
                // @ts-ignore
                public setDataElements(x: number, y: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a pixel in the <code>DataBuffer</code> using an int array of
                 * samples for input.  An <code>ArrayIndexOutOfBoundsException</code>
                 * might be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets all samples for a rectangle of pixels from an int array containing
                 * one sample per array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if the
                 * coordinates are not in bounds.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, iArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the <code>DataBuffer</code> using an int for input.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if the
                 * coordinates are not in bounds.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the <code>DataBuffer</code> using a float for input.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the <code>DataBuffer</code> using a double for input.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if
                 * the coordinates are not in bounds.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from an int array containing one sample per data array element.
                 * An <code>ArrayIndexOutOfBoundsException</code> might be thrown if the
                 * coordinates are not in bounds.
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
