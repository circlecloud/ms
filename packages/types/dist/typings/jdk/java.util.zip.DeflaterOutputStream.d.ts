// @ts-nocheck
declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class DeflaterOutputStream extends java.io.FilterOutputStream {
                /**
                 * Creates a new output stream with the specified compressor,
                 * buffer size and flush mode.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, def: java.util.zip.Deflater, size: number, syncFlush: boolean)
                /**
                 * Creates a new output stream with the specified compressor and
                 * buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 4-argument constructor DeflaterOutputStream(out, def, size, false).
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, def: java.util.zip.Deflater, size: number)
                /**
                 * Creates a new output stream with the specified compressor, flush
                 * mode and a default buffer size.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, def: java.util.zip.Deflater, syncFlush: boolean)
                /**
                 * Creates a new output stream with the specified compressor and
                 * a default buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 3-argument constructor DeflaterOutputStream(out, def, false).
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, def: java.util.zip.Deflater)
                /**
                 * Creates a new output stream with a default compressor, a default
                 * buffer size and the specified flush mode.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, syncFlush: boolean)
                /**
                 * Creates a new output stream with a default compressor and buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 2-argument constructor DeflaterOutputStream(out, false).
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                // @ts-ignore
                protected def: java.util.zip.Deflater;
                // @ts-ignore
                protected buf: number[];
                /**
                 * Writes a byte to the compressed output stream. This method will
                 * block until the byte can be written.
                 */
                // @ts-ignore
                public write(b: number): void;
                /**
                 * Writes an array of bytes to the compressed output stream. This
                 * method will block until all the bytes are written.
                 */
                // @ts-ignore
                public write(b: number, off: number, len: number): void;
                /**
                 * Finishes writing compressed data to the output stream without closing
                 * the underlying stream. Use this method when applying multiple filters
                 * in succession to the same output stream.
                 */
                // @ts-ignore
                public finish(): void;
                /**
                 * Writes remaining compressed data to the output stream and closes the
                 * underlying stream.
                 */
                // @ts-ignore
                public close(): void;
                /**
                 * Writes next block of compressed data to the output stream.
                 */
                // @ts-ignore
                protected deflate(): void;
                /**
                 * Flushes the compressed output stream.
                 * If {@link #DeflaterOutputStream(OutputStream, Deflater, int, boolean)
                 * syncFlush} is {@code true} when this compressed output stream is
                 * constructed, this method first flushes the underlying {@code compressor}
                 * with the flush mode {@link Deflater#SYNC_FLUSH} to force
                 * all pending data to be flushed out to the output stream and then
                 * flushes the output stream. Otherwise this method only flushes the
                 * output stream without flushing the {@code compressor}.
                 */
                // @ts-ignore
                public flush(): void;
            }
        }
    }
}
