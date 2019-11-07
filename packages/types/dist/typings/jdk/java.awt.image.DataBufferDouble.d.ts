declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class DataBufferDouble extends java.awt.image.DataBuffer {
                /**
                 * Constructs a <code>double</code>-based <code>DataBuffer</code>
                 * with a specified size.
                 */
                // @ts-ignore
                constructor(size: number)
                /**
                 * Constructs a <code>double</code>-based <code>DataBuffer</code>
                 * with a specified number of banks, all of which are of a
                 * specified size.
                 */
                // @ts-ignore
                constructor(size: number, numBanks: number)
                /**
                 * Constructs a <code>double</code>-based <code>DataBuffer</code>
                 * with the specified data array.  Only the first
                 * <code>size</code> elements are available for use by this
                 * <code>DataBuffer</code>.  The array must be large enough to
                 * hold <code>size</code> elements.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                constructor(dataArray: number, size: number)
                /**
                 * Constructs a <code>double</code>-based <code>DataBuffer</code>
                 * with the specified data array.  Only the elements between
                 * <code>offset</code> and <code>offset + size - 1</code> are
                 * available for use by this <code>DataBuffer</code>.  The array
                 * must be large enough to hold <code>offset + size</code> elements.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                constructor(dataArray: number, size: number, offset: number)
                /**
                 * Constructs a <code>double</code>-based <code>DataBuffer</code>
                 * with the specified data arrays.  Only the first
                 * <code>size</code> elements of each array are available for use
                 * by this <code>DataBuffer</code>.  The number of banks will be
                 * equal <code>to dataArray.length</code>.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                constructor(dataArray: number, size: number)
                /**
                 * Constructs a <code>double</code>-based <code>DataBuffer</code>
                 * with the specified data arrays, size, and per-bank offsets.
                 * The number of banks is equal to dataArray.length.  Each array
                 * must be at least as large as <code>size</code> plus the
                 * corresponding offset.  There must be an entry in the
                 * <code>offsets</code> array for each data array.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                constructor(dataArray: number, size: number, offsets: number)
                /**
                 * Returns the default (first) <code>double</code> data array.
                 * <p>
                 * Note that calling this method may cause this {@code DataBuffer}
                 * object to be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                public getData(): number[];
                /**
                 * Returns the data array for the specified bank.
                 * <p>
                 * Note that calling this method may cause this {@code DataBuffer}
                 * object to be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                public getData(bank: number): number[];
                /**
                 * Returns the data array for all banks.
                 * <p>
                 * Note that calling this method may cause this {@code DataBuffer}
                 * object to be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                public getBankData(): double[][];
                /**
                 * Returns the requested data array element from the first
                 * (default) bank as an <code>int</code>.
                 */
                // @ts-ignore
                public getElem(i: number): number;
                /**
                 * Returns the requested data array element from the specified
                 * bank as an <code>int</code>.
                 */
                // @ts-ignore
                public getElem(bank: number, i: number): number;
                /**
                 * Sets the requested data array element in the first (default)
                 * bank to the given <code>int</code>.
                 */
                // @ts-ignore
                public setElem(i: number, val: number): void;
                /**
                 * Sets the requested data array element in the specified bank
                 * to the given <code>int</code>.
                 */
                // @ts-ignore
                public setElem(bank: number, i: number, val: number): void;
                /**
                 * Returns the requested data array element from the first
                 * (default) bank as a <code>float</code>.
                 */
                // @ts-ignore
                public getElemFloat(i: number): number;
                /**
                 * Returns the requested data array element from the specified
                 * bank as a <code>float</code>.
                 */
                // @ts-ignore
                public getElemFloat(bank: number, i: number): number;
                /**
                 * Sets the requested data array element in the first (default)
                 * bank to the given <code>float</code>.
                 */
                // @ts-ignore
                public setElemFloat(i: number, val: number): void;
                /**
                 * Sets the requested data array element in the specified bank to
                 * the given <code>float</code>.
                 */
                // @ts-ignore
                public setElemFloat(bank: number, i: number, val: number): void;
                /**
                 * Returns the requested data array element from the first
                 * (default) bank as a <code>double</code>.
                 */
                // @ts-ignore
                public getElemDouble(i: number): number;
                /**
                 * Returns the requested data array element from the specified
                 * bank as a <code>double</code>.
                 */
                // @ts-ignore
                public getElemDouble(bank: number, i: number): number;
                /**
                 * Sets the requested data array element in the first (default)
                 * bank to the given <code>double</code>.
                 */
                // @ts-ignore
                public setElemDouble(i: number, val: number): void;
                /**
                 * Sets the requested data array element in the specified bank to
                 * the given <code>double</code>.
                 */
                // @ts-ignore
                public setElemDouble(bank: number, i: number, val: number): void;
            }
        }
    }
}
