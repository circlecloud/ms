declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
             class DataBufferShort extends java.awt.image.DataBuffer {
                /**
                 * Constructs a short-based <CODE>DataBuffer</CODE> with a single bank and the
                 * specified size.
                 */
                // @ts-ignore
                constructor(size: number)
                /**
                 * Constructs a short-based <CODE>DataBuffer</CODE> with the specified number of
                 * banks all of which are the specified size.
                 */
                // @ts-ignore
                constructor(size: number, numBanks: number)
                /**
                 * Constructs a short-based <CODE>DataBuffer</CODE> with a single bank using the
                 * specified array.
                 * Only the first <CODE>size</CODE> elements should be used by accessors of
                 * this <CODE>DataBuffer</CODE>.  <CODE>dataArray</CODE> must be large enough to
                 * hold <CODE>size</CODE> elements.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                constructor(dataArray: number, size: number)
                /**
                 * Constructs a short-based <CODE>DataBuffer</CODE> with a single bank using the
                 * specified array, size, and offset.  <CODE>dataArray</CODE> must have at least
                 * <CODE>offset</CODE> + <CODE>size</CODE> elements.  Only elements <CODE>offset</CODE>
                 * through <CODE>offset</CODE> + <CODE>size</CODE> - 1
                 * should be used by accessors of this <CODE>DataBuffer</CODE>.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                constructor(dataArray: number, size: number, offset: number)
                /**
                 * Constructs a short-based <CODE>DataBuffer</CODE> with the specified arrays.
                 * The number of banks will be equal to <CODE>dataArray.length</CODE>.
                 * Only the first <CODE>size</CODE> elements of each array should be used by
                 * accessors of this <CODE>DataBuffer</CODE>.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                constructor(dataArray: number, size: number)
                /**
                 * Constructs a short-based <CODE>DataBuffer</CODE> with the specified arrays, size,
                 * and offsets.
                 * The number of banks is equal to <CODE>dataArray.length</CODE>.  Each array must
                 * be at least as large as <CODE>size</CODE> + the corresponding offset.   There must
                 * be an entry in the offset array for each <CODE>dataArray</CODE> entry.  For each
                 * bank, only elements <CODE>offset</CODE> through
                 * <CODE>offset</CODE> + <CODE>size</CODE> - 1 should be
                 * used by accessors of this <CODE>DataBuffer</CODE>.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                constructor(dataArray: number, size: number, offsets: number)
                /**
                 * Returns the default (first) byte data array.
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
                 * Returns the data arrays for all banks.
                 * <p>
                 * Note that calling this method may cause this {@code DataBuffer}
                 * object to be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 */
                // @ts-ignore
                public getBankData(): short[][];
                /**
                 * Returns the requested data array element from the first (default) bank.
                 */
                // @ts-ignore
                public getElem(i: number): number;
                /**
                 * Returns the requested data array element from the specified bank.
                 */
                // @ts-ignore
                public getElem(bank: number, i: number): number;
                /**
                 * Sets the requested data array element in the first (default) bank
                 * to the specified value.
                 */
                // @ts-ignore
                public setElem(i: number, val: number): void;
                /**
                 * Sets the requested data array element in the specified bank
                 * from the given integer.
                 */
                // @ts-ignore
                public setElem(bank: number, i: number, val: number): void;
            }
        }
    }
}
