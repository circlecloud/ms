// @ts-nocheck
declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class DeflaterInputStream extends java.io.FilterInputStream {
                /**
                 * Creates a new input stream with a default compressor and buffer
                 * size.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream)
                /**
                 * Creates a new input stream with the specified compressor and a
                 * default buffer size.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, defl: java.util.zip.Deflater)
                /**
                 * Creates a new input stream with the specified compressor and buffer
                 * size.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, defl: java.util.zip.Deflater, bufLen: number)
                // @ts-ignore
                protected def: java.util.zip.Deflater;
                // @ts-ignore
                protected buf: number[];
                /**
                 * Closes this input stream and its underlying input stream, discarding
                 * any pending uncompressed data.
                 */
                // @ts-ignore
                public close(): void;
                /**
                 * Reads a single byte of compressed data from the input stream.
                 * This method will block until some input can be read and compressed.
                 */
                // @ts-ignore
                public read(): number;
                /**
                 * Reads compressed data into a byte array.
                 * This method will block until some input can be read and compressed.
                 */
                // @ts-ignore
                public read(b: number, off: number, len: number): number;
                /**
                 * Skips over and discards data from the input stream.
                 * This method may block until the specified number of bytes are read and
                 * skipped. <em>Note:</em> While {@code n} is given as a {@code long},
                 * the maximum number of bytes which can be skipped is
                 * {@code Integer.MAX_VALUE}.
                 */
                // @ts-ignore
                public skip(n: number): number;
                /**
                 * Returns 0 after EOF has been reached, otherwise always return 1.
                 * <p>
                 * Programs should not count on this method to return the actual number
                 * of bytes that could be read without blocking
                 */
                // @ts-ignore
                public available(): number;
                /**
                 * Always returns {@code false} because this input stream does not support
                 * the {@link #mark mark()} and {@link #reset reset()} methods.
                 */
                // @ts-ignore
                public markSupported(): boolean;
                /**
                 * <i>This operation is not supported</i>.
                 */
                // @ts-ignore
                public mark(limit: number): void;
                /**
                 * <i>This operation is not supported</i>.
                 */
                // @ts-ignore
                public reset(): void;
            }
        }
    }
}
