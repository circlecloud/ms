// @ts-nocheck
declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class Deflater extends java.lang.Object {
                /**
                 * Creates a new compressor using the specified compression level.
                 * If 'nowrap' is true then the ZLIB header and checksum fields will
                 * not be used in order to support the compression format used in
                 * both GZIP and PKZIP.
                 */
                // @ts-ignore
                constructor(level: number, nowrap: boolean)
                /**
                 * Creates a new compressor using the specified compression level.
                 * Compressed data will be generated in ZLIB format.
                 */
                // @ts-ignore
                constructor(level: number)
                /**
                 * Creates a new compressor with the default compression level.
                 * Compressed data will be generated in ZLIB format.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static DEFLATED: number;
                // @ts-ignore
                public static NO_COMPRESSION: number;
                // @ts-ignore
                public static BEST_SPEED: number;
                // @ts-ignore
                public static BEST_COMPRESSION: number;
                // @ts-ignore
                public static DEFAULT_COMPRESSION: number;
                // @ts-ignore
                public static FILTERED: number;
                // @ts-ignore
                public static HUFFMAN_ONLY: number;
                // @ts-ignore
                public static DEFAULT_STRATEGY: number;
                // @ts-ignore
                public static NO_FLUSH: number;
                // @ts-ignore
                public static SYNC_FLUSH: number;
                // @ts-ignore
                public static FULL_FLUSH: number;
                /**
                 * Sets input data for compression. This should be called whenever
                 * needsInput() returns true indicating that more input data is required.
                 */
                // @ts-ignore
                public setInput(b: number, off: number, len: number): void;
                /**
                 * Sets input data for compression. This should be called whenever
                 * needsInput() returns true indicating that more input data is required.
                 */
                // @ts-ignore
                public setInput(b: number): void;
                /**
                 * Sets preset dictionary for compression. A preset dictionary is used
                 * when the history buffer can be predetermined. When the data is later
                 * uncompressed with Inflater.inflate(), Inflater.getAdler() can be called
                 * in order to get the Adler-32 value of the dictionary required for
                 * decompression.
                 */
                // @ts-ignore
                public setDictionary(b: number, off: number, len: number): void;
                /**
                 * Sets preset dictionary for compression. A preset dictionary is used
                 * when the history buffer can be predetermined. When the data is later
                 * uncompressed with Inflater.inflate(), Inflater.getAdler() can be called
                 * in order to get the Adler-32 value of the dictionary required for
                 * decompression.
                 */
                // @ts-ignore
                public setDictionary(b: number): void;
                /**
                 * Sets the compression strategy to the specified value.
                 * <p> If the compression strategy is changed, the next invocation
                 * of {@code deflate} will compress the input available so far with
                 * the old strategy (and may be flushed); the new strategy will take
                 * effect only after that invocation.
                 */
                // @ts-ignore
                public setStrategy(strategy: number): void;
                /**
                 * Sets the compression level to the specified value.
                 * <p> If the compression level is changed, the next invocation
                 * of {@code deflate} will compress the input available so far
                 * with the old level (and may be flushed); the new level will
                 * take effect only after that invocation.
                 */
                // @ts-ignore
                public setLevel(level: number): void;
                /**
                 * Returns true if the input data buffer is empty and setInput()
                 * should be called in order to provide more input.
                 */
                // @ts-ignore
                public needsInput(): boolean;
                /**
                 * When called, indicates that compression should end with the current
                 * contents of the input buffer.
                 */
                // @ts-ignore
                public finish(): void;
                /**
                 * Returns true if the end of the compressed data output stream has
                 * been reached.
                 */
                // @ts-ignore
                public finished(): boolean;
                /**
                 * Compresses the input data and fills specified buffer with compressed
                 * data. Returns actual number of bytes of compressed data. A return value
                 * of 0 indicates that {@link #needsInput() needsInput} should be called
                 * in order to determine if more input data is required.
                 * <p>This method uses {@link #NO_FLUSH} as its compression flush mode.
                 * An invocation of this method of the form {@code deflater.deflate(b, off, len)}
                 * yields the same result as the invocation of
                 * {@code deflater.deflate(b, off, len, Deflater.NO_FLUSH)}.
                 */
                // @ts-ignore
                public deflate(b: number, off: number, len: number): number;
                /**
                 * Compresses the input data and fills specified buffer with compressed
                 * data. Returns actual number of bytes of compressed data. A return value
                 * of 0 indicates that {@link #needsInput() needsInput} should be called
                 * in order to determine if more input data is required.
                 * <p>This method uses {@link #NO_FLUSH} as its compression flush mode.
                 * An invocation of this method of the form {@code deflater.deflate(b)}
                 * yields the same result as the invocation of
                 * {@code deflater.deflate(b, 0, b.length, Deflater.NO_FLUSH)}.
                 */
                // @ts-ignore
                public deflate(b: number): number;
                /**
                 * Compresses the input data and fills the specified buffer with compressed
                 * data. Returns actual number of bytes of data compressed.
                 * <p>Compression flush mode is one of the following three modes:
                 * <ul>
                 * <li>{@link #NO_FLUSH}: allows the deflater to decide how much data
                 * to accumulate, before producing output, in order to achieve the best
                 * compression (should be used in normal use scenario). A return value
                 * of 0 in this flush mode indicates that {@link #needsInput()} should
                 * be called in order to determine if more input data is required.
                 * <li>{@link #SYNC_FLUSH}: all pending output in the deflater is flushed,
                 * to the specified output buffer, so that an inflater that works on
                 * compressed data can get all input data available so far (In particular
                 * the {@link #needsInput()} returns {@code true} after this invocation
                 * if enough output space is provided). Flushing with {@link #SYNC_FLUSH}
                 * may degrade compression for some compression algorithms and so it
                 * should be used only when necessary.
                 * <li>{@link #FULL_FLUSH}: all pending output is flushed out as with
                 * {@link #SYNC_FLUSH}. The compression state is reset so that the inflater
                 * that works on the compressed output data can restart from this point
                 * if previous compressed data has been damaged or if random access is
                 * desired. Using {@link #FULL_FLUSH} too often can seriously degrade
                 * compression.
                 * </ul>
                 * <p>In the case of {@link #FULL_FLUSH} or {@link #SYNC_FLUSH}, if
                 * the return value is {@code len}, the space available in output
                 * buffer {@code b}, this method should be invoked again with the same
                 * {@code flush} parameter and more output space.
                 */
                // @ts-ignore
                public deflate(b: number, off: number, len: number, flush: number): number;
                /**
                 * Returns the ADLER-32 value of the uncompressed data.
                 */
                // @ts-ignore
                public getAdler(): number;
                /**
                 * Returns the total number of uncompressed bytes input so far.
                 * <p>Since the number of bytes may be greater than
                 * Integer.MAX_VALUE, the {@link #getBytesRead()} method is now
                 * the preferred means of obtaining this information.</p>
                 */
                // @ts-ignore
                public getTotalIn(): number;
                /**
                 * Returns the total number of uncompressed bytes input so far.
                 */
                // @ts-ignore
                public getBytesRead(): number;
                /**
                 * Returns the total number of compressed bytes output so far.
                 * <p>Since the number of bytes may be greater than
                 * Integer.MAX_VALUE, the {@link #getBytesWritten()} method is now
                 * the preferred means of obtaining this information.</p>
                 */
                // @ts-ignore
                public getTotalOut(): number;
                /**
                 * Returns the total number of compressed bytes output so far.
                 */
                // @ts-ignore
                public getBytesWritten(): number;
                /**
                 * Resets deflater so that a new set of input data can be processed.
                 * Keeps current compression level and strategy settings.
                 */
                // @ts-ignore
                public reset(): void;
                /**
                 * Closes the compressor and discards any unprocessed input.
                 * This method should be called when the compressor is no longer
                 * being used, but will also be called automatically by the
                 * finalize() method. Once this method is called, the behavior
                 * of the Deflater object is undefined.
                 */
                // @ts-ignore
                public end(): void;
                /**
                 * Closes the compressor when garbage is collected.
                 */
                // @ts-ignore
                protected finalize(): void;
            }
        }
    }
}
