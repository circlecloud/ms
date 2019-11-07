// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class ByteLookupTable extends java.awt.image.LookupTable {
                /**
                 * Constructs a ByteLookupTable object from an array of byte
                 * arrays representing a lookup table for each
                 * band.  The offset will be subtracted from input
                 * values before indexing into the arrays.  The number of
                 * bands is the length of the data argument.  The
                 * data array for each band is stored as a reference.
                 */
                // @ts-ignore
                constructor(offset: number, data: number)
                /**
                 * Constructs a ByteLookupTable object from an array
                 * of bytes representing a lookup table to be applied to all
                 * bands.  The offset will be subtracted from input
                 * values before indexing into the array.
                 * The data array is stored as a reference.
                 */
                // @ts-ignore
                constructor(offset: number, data: number)
                /**
                 * Returns the lookup table data by reference.  If this ByteLookupTable
                 * was constructed using a single byte array, the length of the returned
                 * array is one.
                 */
                // @ts-ignore
                public getTable(): byte[][];
                /**
                 * Returns an array of samples of a pixel, translated with the lookup
                 * table. The source and destination array can be the same array.
                 * Array <code>dst</code> is returned.
                 */
                // @ts-ignore
                public lookupPixel(src: number, dst: number): number[];
                /**
                 * Returns an array of samples of a pixel, translated with the lookup
                 * table. The source and destination array can be the same array.
                 * Array <code>dst</code> is returned.
                 */
                // @ts-ignore
                public lookupPixel(src: number, dst: number): number[];
            }
        }
    }
}
