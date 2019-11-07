declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class Inflater extends java.lang.Object {
                /**
                 * Creates a new decompressor. If the parameter 'nowrap' is true then
                 * the ZLIB header and checksum fields will not be used. This provides
                 * compatibility with the compression format used by both GZIP and PKZIP.
                 * <p>
                 * Note: When using the 'nowrap' option it is also necessary to provide
                 * an extra "dummy" byte as input. This is required by the ZLIB native
                 * library in order to support certain optimizations.
                 */
                // @ts-ignore
                constructor(nowrap: boolean)
                /**
                 * Creates a new decompressor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Sets input data for decompression. Should be called whenever
                 * needsInput() returns true indicating that more input data is
                 * required.
                 */
                // @ts-ignore
                public setInput(b: number, off: number, len: number): void;
                /**
                 * Sets input data for decompression. Should be called whenever
                 * needsInput() returns true indicating that more input data is
                 * required.
                 */
                // @ts-ignore
                public setInput(b: number): void;
                /**
                 * Sets the preset dictionary to the given array of bytes. Should be
                 * called when inflate() returns 0 and needsDictionary() returns true
                 * indicating that a preset dictionary is required. The method getAdler()
                 * can be used to get the Adler-32 value of the dictionary needed.
                 */
                // @ts-ignore
                public setDictionary(b: number, off: number, len: number): void;
                /**
                 * Sets the preset dictionary to the given array of bytes. Should be
                 * called when inflate() returns 0 and needsDictionary() returns true
                 * indicating that a preset dictionary is required. The method getAdler()
                 * can be used to get the Adler-32 value of the dictionary needed.
                 */
                // @ts-ignore
                public setDictionary(b: number): void;
                /**
                 * Returns the total number of bytes remaining in the input buffer.
                 * This can be used to find out what bytes still remain in the input
                 * buffer after decompression has finished.
                 */
                // @ts-ignore
                public getRemaining(): number;
                /**
                 * Returns true if no data remains in the input buffer. This can
                 * be used to determine if #setInput should be called in order
                 * to provide more input.
                 */
                // @ts-ignore
                public needsInput(): boolean;
                /**
                 * Returns true if a preset dictionary is needed for decompression.
                 */
                // @ts-ignore
                public needsDictionary(): boolean;
                /**
                 * Returns true if the end of the compressed data stream has been
                 * reached.
                 */
                // @ts-ignore
                public finished(): boolean;
                /**
                 * Uncompresses bytes into specified buffer. Returns actual number
                 * of bytes uncompressed. A return value of 0 indicates that
                 * needsInput() or needsDictionary() should be called in order to
                 * determine if more input data or a preset dictionary is required.
                 * In the latter case, getAdler() can be used to get the Adler-32
                 * value of the dictionary required.
                 */
                // @ts-ignore
                public inflate(b: number, off: number, len: number): number;
                /**
                 * Uncompresses bytes into specified buffer. Returns actual number
                 * of bytes uncompressed. A return value of 0 indicates that
                 * needsInput() or needsDictionary() should be called in order to
                 * determine if more input data or a preset dictionary is required.
                 * In the latter case, getAdler() can be used to get the Adler-32
                 * value of the dictionary required.
                 */
                // @ts-ignore
                public inflate(b: number): number;
                /**
                 * Returns the ADLER-32 value of the uncompressed data.
                 */
                // @ts-ignore
                public getAdler(): number;
                /**
                 * Returns the total number of compressed bytes input so far.
                 * <p>Since the number of bytes may be greater than
                 * Integer.MAX_VALUE, the {@link #getBytesRead()} method is now
                 * the preferred means of obtaining this information.</p>
                 */
                // @ts-ignore
                public getTotalIn(): number;
                /**
                 * Returns the total number of compressed bytes input so far.
                 */
                // @ts-ignore
                public getBytesRead(): number;
                /**
                 * Returns the total number of uncompressed bytes output so far.
                 * <p>Since the number of bytes may be greater than
                 * Integer.MAX_VALUE, the {@link #getBytesWritten()} method is now
                 * the preferred means of obtaining this information.</p>
                 */
                // @ts-ignore
                public getTotalOut(): number;
                /**
                 * Returns the total number of uncompressed bytes output so far.
                 */
                // @ts-ignore
                public getBytesWritten(): number;
                /**
                 * Resets inflater so that a new set of input data can be processed.
                 */
                // @ts-ignore
                public reset(): void;
                /**
                 * Closes the decompressor and discards any unprocessed input.
                 * This method should be called when the decompressor is no longer
                 * being used, but will also be called automatically by the finalize()
                 * method. Once this method is called, the behavior of the Inflater
                 * object is undefined.
                 */
                // @ts-ignore
                public end(): void;
                /**
                 * Closes the decompressor when garbage is collected.
                 */
                // @ts-ignore
                protected finalize(): void;
            }
        }
    }
}
