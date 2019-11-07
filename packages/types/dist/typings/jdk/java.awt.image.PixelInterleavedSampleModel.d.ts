declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class PixelInterleavedSampleModel extends java.awt.image.ComponentSampleModel {
                /**
                 * Constructs a PixelInterleavedSampleModel with the specified parameters.
                 * The number of bands will be given by the length of the bandOffsets
                 * array.
                 */
                // @ts-ignore
                constructor(dataType: number, w: number, h: number, pixelStride: number, scanlineStride: number, bandOffsets: number)
                /**
                 * Creates a new PixelInterleavedSampleModel with the specified
                 * width and height.  The new PixelInterleavedSampleModel will have the
                 * same number of bands, storage data type, and pixel stride
                 * as this PixelInterleavedSampleModel.  The band offsets may be
                 * compressed such that the minimum of all of the band offsets is zero.
                 */
                // @ts-ignore
                public createCompatibleSampleModel(w: number, h: number): java.awt.image.SampleModel;
                /**
                 * Creates a new PixelInterleavedSampleModel with a subset of the
                 * bands of this PixelInterleavedSampleModel.  The new
                 * PixelInterleavedSampleModel can be used with any DataBuffer that the
                 * existing PixelInterleavedSampleModel can be used with.  The new
                 * PixelInterleavedSampleModel/DataBuffer combination will represent
                 * an image with a subset of the bands of the original
                 * PixelInterleavedSampleModel/DataBuffer combination.
                 */
                // @ts-ignore
                public createSubsetSampleModel(bands: number): java.awt.image.SampleModel;
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
