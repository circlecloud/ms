declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            abstract class SampleModel extends java.lang.Object {
                /**
                 * Constructs a SampleModel with the specified parameters.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, numBands: number)
                // @ts-ignore
                protected width: number;
                // @ts-ignore
                protected height: number;
                // @ts-ignore
                protected numBands: number;
                // @ts-ignore
                protected dataType: number;
                /**
                 * Returns the width in pixels.
                 */
                // @ts-ignore
                public getWidth(): number;
                /**
                 * Returns the height in pixels.
                 */
                // @ts-ignore
                public getHeight(): number;
                /**
                 * Returns the total number of bands of image data.
                 */
                // @ts-ignore
                public getNumBands(): number;
                /**
                 * Returns the number of data elements needed to transfer a pixel
                 * via the getDataElements and setDataElements methods.  When pixels
                 * are transferred via these methods, they may be transferred in a
                 * packed or unpacked format, depending on the implementation of the
                 * SampleModel.  Using these methods, pixels are transferred as an
                 * array of getNumDataElements() elements of a primitive type given
                 * by getTransferType().  The TransferType may or may not be the same
                 * as the storage DataType.
                 */
                // @ts-ignore
                public abstract getNumDataElements(): number;
                /**
                 * Returns the data type of the DataBuffer storing the pixel data.
                 */
                // @ts-ignore
                public getDataType(): number;
                /**
                 * Returns the TransferType used to transfer pixels via the
                 * getDataElements and setDataElements methods.  When pixels
                 * are transferred via these methods, they may be transferred in a
                 * packed or unpacked format, depending on the implementation of the
                 * SampleModel.  Using these methods, pixels are transferred as an
                 * array of getNumDataElements() elements of a primitive type given
                 * by getTransferType().  The TransferType may or may not be the same
                 * as the storage DataType.  The TransferType will be one of the types
                 * defined in DataBuffer.
                 */
                // @ts-ignore
                public getTransferType(): number;
                /**
                 * Returns the samples for a specified pixel in an int array,
                 * one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns data for a single pixel in a primitive array of type
                 * TransferType.  For image data supported by the Java 2D API, this
                 * will be one of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT, DataBuffer.TYPE_FLOAT,
                 * or DataBuffer.TYPE_DOUBLE.  Data may be returned in a packed format,
                 * thus increasing efficiency for data transfers. Generally, obj
                 * should be passed in as null, so that the Object will be created
                 * automatically and will be of the right primitive data type.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * SampleModel <code>sm1</code>, to DataBuffer <code>db2</code>, whose
                 * storage layout is described by SampleModel <code>sm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * SampleModel sm1, sm2;
                 * DataBuffer db1, db2;
                 * sm2.setDataElements(x, y, sm1.getDataElements(x, y, null, db1), db2);
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
                public abstract getDataElements(x: number, y: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): java.lang.Object;
                /**
                 * Returns the pixel data for the specified rectangle of pixels in a
                 * primitive array of type TransferType.
                 * For image data supported by the Java 2D API, this
                 * will be one of DataBuffer.TYPE_BYTE, DataBuffer.TYPE_USHORT,
                 * DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT, DataBuffer.TYPE_FLOAT,
                 * or DataBuffer.TYPE_DOUBLE.  Data may be returned in a packed format,
                 * thus increasing efficiency for data transfers. Generally, obj
                 * should be passed in as null, so that the Object will be created
                 * automatically and will be of the right primitive data type.
                 * <p>
                 * The following code illustrates transferring data for a rectangular
                 * region of pixels from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * SampleModel <code>sm1</code>, to DataBuffer <code>db2</code>, whose
                 * storage layout is described by SampleModel <code>sm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixels/setPixels.
                 * <pre>
                 * SampleModel sm1, sm2;
                 * DataBuffer db1, db2;
                 * sm2.setDataElements(x, y, w, h, sm1.getDataElements(x, y, w,
                 * h, null, db1), db2);
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
                public getDataElements(x: number, y: number, w: number, h: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): java.lang.Object;
                /**
                 * Sets the data for a single pixel in the specified DataBuffer from a
                 * primitive array of type TransferType.  For image data supported by
                 * the Java 2D API, this will be one of DataBuffer.TYPE_BYTE,
                 * DataBuffer.TYPE_USHORT, DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT,
                 * DataBuffer.TYPE_FLOAT, or DataBuffer.TYPE_DOUBLE.  Data in the array
                 * may be in a packed format, thus increasing efficiency for data
                 * transfers.
                 * <p>
                 * The following code illustrates transferring data for one pixel from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * SampleModel <code>sm1</code>, to DataBuffer <code>db2</code>, whose
                 * storage layout is described by SampleModel <code>sm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixel/setPixel.
                 * <pre>
                 * SampleModel sm1, sm2;
                 * DataBuffer db1, db2;
                 * sm2.setDataElements(x, y, sm1.getDataElements(x, y, null, db1),
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
                public abstract setDataElements(x: number, y: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets the data for a rectangle of pixels in the specified DataBuffer
                 * from a primitive array of type TransferType.  For image data supported
                 * by the Java 2D API, this will be one of DataBuffer.TYPE_BYTE,
                 * DataBuffer.TYPE_USHORT, DataBuffer.TYPE_INT, DataBuffer.TYPE_SHORT,
                 * DataBuffer.TYPE_FLOAT, or DataBuffer.TYPE_DOUBLE.  Data in the array
                 * may be in a packed format, thus increasing efficiency for data
                 * transfers.
                 * <p>
                 * The following code illustrates transferring data for a rectangular
                 * region of pixels from
                 * DataBuffer <code>db1</code>, whose storage layout is described by
                 * SampleModel <code>sm1</code>, to DataBuffer <code>db2</code>, whose
                 * storage layout is described by SampleModel <code>sm2</code>.
                 * The transfer will generally be more efficient than using
                 * getPixels/setPixels.
                 * <pre>
                 * SampleModel sm1, sm2;
                 * DataBuffer db1, db2;
                 * sm2.setDataElements(x, y, w, h, sm1.getDataElements(x, y, w, h,
                 * null, db1), db2);
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
                public setDataElements(x: number, y: number, w: number, h: number, obj: java.lang.Object, data: java.awt.image.DataBuffer): void;
                /**
                 * Returns the samples for the specified pixel in an array of float.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, fArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns the samples for the specified pixel in an array of double.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixel(x: number, y: number, dArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns all samples for a rectangle of pixels in an
                 * int array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixels(x: number, y: number, w: number, h: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns all samples for a rectangle of pixels in a float
                 * array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixels(x: number, y: number, w: number, h: number, fArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns all samples for a rectangle of pixels in a double
                 * array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getPixels(x: number, y: number, w: number, h: number, dArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns the sample in a specified band for the pixel located
                 * at (x,y) as an int.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public abstract getSample(x: number, y: number, b: number, data: java.awt.image.DataBuffer): number;
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
                 * Returns the samples for a specified band for the specified rectangle
                 * of pixels in an int array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, iArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns the samples for a specified band for the specified rectangle
                 * of pixels in a float array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, fArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Returns the samples for a specified band for a specified rectangle
                 * of pixels in a double array, one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public getSamples(x: number, y: number, w: number, h: number, b: number, dArray: number, data: java.awt.image.DataBuffer): number[];
                /**
                 * Sets a pixel in  the DataBuffer using an int array of samples for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, iArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a pixel in the DataBuffer using a float array of samples for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, fArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a pixel in the DataBuffer using a double array of samples
                 * for input.
                 */
                // @ts-ignore
                public setPixel(x: number, y: number, dArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets all samples for a rectangle of pixels from an int array containing
                 * one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, iArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets all samples for a rectangle of pixels from a float array containing
                 * one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, fArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets all samples for a rectangle of pixels from a double array
                 * containing one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setPixels(x: number, y: number, w: number, h: number, dArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using an int for input.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public abstract setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a float for input.
                 * The default implementation of this method casts the input
                 * float sample to an int and then calls the
                 * <code>setSample(int, int, int, DataBuffer)</code> method using
                 * that int value.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setSample(x: number, y: number, b: number, s: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets a sample in the specified band for the pixel located at (x,y)
                 * in the DataBuffer using a double for input.
                 * The default implementation of this method casts the input
                 * double sample to an int and then calls the
                 * <code>setSample(int, int, int, DataBuffer)</code> method using
                 * that int value.
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
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from a float array containing one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setSamples(x: number, y: number, w: number, h: number, b: number, fArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Sets the samples in the specified band for the specified rectangle
                 * of pixels from a double array containing one sample per array element.
                 * ArrayIndexOutOfBoundsException may be thrown if the coordinates are
                 * not in bounds.
                 */
                // @ts-ignore
                public setSamples(x: number, y: number, w: number, h: number, b: number, dArray: number, data: java.awt.image.DataBuffer): void;
                /**
                 * Creates a SampleModel which describes data in this SampleModel's
                 * format, but with a different width and height.
                 */
                // @ts-ignore
                public abstract createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Creates a new SampleModel
                 * with a subset of the bands of this
                 * SampleModel.
                 */
                // @ts-ignore
                public abstract createSubsetSampleModel(bands: number): java.awt.image.SampleModel;
                /**
                 * Creates a DataBuffer that corresponds to this SampleModel.
                 * The DataBuffer's width and height will match this SampleModel's.
                 */
                // @ts-ignore
                public abstract createDataBuffer(): java.awt.image.DataBuffer;
                /**
                 * Returns the size in bits of samples for all bands.
                 */
                // @ts-ignore
                public abstract getSampleSize(): number[];
            }
        }
    }
}
