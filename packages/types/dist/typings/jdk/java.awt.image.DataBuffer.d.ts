declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            abstract class DataBuffer extends java.lang.Object {
                /**
                 * Constructs a DataBuffer containing one bank of the specified
                 * data type and size.
                 */
                // @ts-ignore
                constructor(dataType: number, size: number)
                /**
                 * Constructs a DataBuffer containing the specified number of
                 * banks.  Each bank has the specified size and an offset of 0.
                 */
                // @ts-ignore
                constructor(dataType: number, size: number, numBanks: number)
                /**
                 * Constructs a DataBuffer that contains the specified number
                 * of banks.  Each bank has the specified datatype, size and offset.
                 */
                // @ts-ignore
                constructor(dataType: number, size: number, numBanks: number, offset: number)
                /**
                 * Constructs a DataBuffer which contains the specified number
                 * of banks.  Each bank has the specified datatype and size.  The
                 * offset for each bank is specified by its respective entry in
                 * the offsets array.
                 */
                // @ts-ignore
                constructor(dataType: number, size: number, numBanks: number, offsets: number)
                // @ts-ignore
                public static TYPE_BYTE: number;
                // @ts-ignore
                public static TYPE_USHORT: number;
                // @ts-ignore
                public static TYPE_SHORT: number;
                // @ts-ignore
                public static TYPE_INT: number;
                // @ts-ignore
                public static TYPE_FLOAT: number;
                // @ts-ignore
                public static TYPE_DOUBLE: number;
                // @ts-ignore
                public static TYPE_UNDEFINED: number;
                // @ts-ignore
                protected dataType: number;
                // @ts-ignore
                protected banks: number;
                // @ts-ignore
                protected offset: number;
                // @ts-ignore
                protected size: number;
                // @ts-ignore
                protected offsets: number[];
                /**
                 * Returns the size (in bits) of the data type, given a datatype tag.
                 */
                // @ts-ignore
                public static getDataTypeSize(type: number): number;
                /**
                 * Returns the data type of this DataBuffer.
                 */
                // @ts-ignore
                public getDataType(): number;
                /**
                 * Returns the size (in array elements) of all banks.
                 */
                // @ts-ignore
                public getSize(): number;
                /**
                 * Returns the offset of the default bank in array elements.
                 */
                // @ts-ignore
                public getOffset(): number;
                /**
                 * Returns the offsets (in array elements) of all the banks.
                 */
                // @ts-ignore
                public getOffsets(): number[];
                /**
                 * Returns the number of banks in this DataBuffer.
                 */
                // @ts-ignore
                public getNumBanks(): number;
                /**
                 * Returns the requested data array element from the first (default) bank
                 * as an integer.
                 */
                // @ts-ignore
                public getElem(i: number): number;
                /**
                 * Sets the requested data array element in the first (default) bank
                 * from the given integer.
                 */
                // @ts-ignore
                public setElem(i: number, val: number): void;
                /**
                 * Returns the requested data array element from the first (default) bank
                 * as a float.  The implementation in this class is to cast getElem(i)
                 * to a float.  Subclasses may override this method if another
                 * implementation is needed.
                 */
                // @ts-ignore
                public getElemFloat(i: number): number;
                /**
                 * Returns the requested data array element from the specified bank
                 * as a float.  The implementation in this class is to cast
                 * {@link #getElem(int, int)}
                 * to a float.  Subclasses can override this method if another
                 * implementation is needed.
                 */
                // @ts-ignore
                public getElemFloat(bank: number, i: number): number;
                /**
                 * Sets the requested data array element in the first (default) bank
                 * from the given float.  The implementation in this class is to cast
                 * val to an int and call {@link #setElem(int, int)}.  Subclasses
                 * can override this method if another implementation is needed.
                 */
                // @ts-ignore
                public setElemFloat(i: number, val: number): void;
                /**
                 * Sets the requested data array element in the specified bank
                 * from the given float.  The implementation in this class is to cast
                 * val to an int and call {@link #setElem(int, int)}.  Subclasses can
                 * override this method if another implementation is needed.
                 */
                // @ts-ignore
                public setElemFloat(bank: number, i: number, val: number): void;
                /**
                 * Returns the requested data array element from the first (default) bank
                 * as a double.  The implementation in this class is to cast
                 * {@link #getElem(int)}
                 * to a double.  Subclasses can override this method if another
                 * implementation is needed.
                 */
                // @ts-ignore
                public getElemDouble(i: number): number;
                /**
                 * Returns the requested data array element from the specified bank as
                 * a double.  The implementation in this class is to cast getElem(bank, i)
                 * to a double.  Subclasses may override this method if another
                 * implementation is needed.
                 */
                // @ts-ignore
                public getElemDouble(bank: number, i: number): number;
                /**
                 * Sets the requested data array element in the first (default) bank
                 * from the given double.  The implementation in this class is to cast
                 * val to an int and call {@link #setElem(int, int)}.  Subclasses can
                 * override this method if another implementation is needed.
                 */
                // @ts-ignore
                public setElemDouble(i: number, val: number): void;
                /**
                 * Sets the requested data array element in the specified bank
                 * from the given double.  The implementation in this class is to cast
                 * val to an int and call {@link #setElem(int, int)}.  Subclasses can
                 * override this method if another implementation is needed.
                 */
                // @ts-ignore
                public setElemDouble(bank: number, i: number, val: number): void;
            }
        }
    }
}
