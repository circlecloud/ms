declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class GZIPOutputStream extends java.util.zip.DeflaterOutputStream {
                /**
                 * Creates a new output stream with the specified buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 3-argument constructor GZIPOutputStream(out, size, false).
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, size: number)
                /**
                 * Creates a new output stream with the specified buffer size and
                 * flush mode.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, size: number, syncFlush: boolean)
                /**
                 * Creates a new output stream with a default buffer size.
                 * <p>The new output stream instance is created as if by invoking
                 * the 2-argument constructor GZIPOutputStream(out, false).
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Creates a new output stream with a default buffer size and
                 * the specified flush mode.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, syncFlush: boolean)
                // @ts-ignore
                protected crc: java.util.zip.CRC32;
                /**
                 * Writes array of bytes to the compressed output stream. This method
                 * will block until all the bytes are written.
                 */
                // @ts-ignore
                public write(buf: number, off: number, len: number): void;
                /**
                 * Finishes writing compressed data to the output stream without closing
                 * the underlying stream. Use this method when applying multiple filters
                 * in succession to the same output stream.
                 */
                // @ts-ignore
                public finish(): void;
            }
        }
    }
}
