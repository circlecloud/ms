// @ts-nocheck
declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class InflaterOutputStream extends java.io.FilterOutputStream {
                /**
                 * Creates a new output stream with a default decompressor and buffer
                 * size.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Creates a new output stream with the specified decompressor and a
                 * default buffer size.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, infl: java.util.zip.Inflater)
                /**
                 * Creates a new output stream with the specified decompressor and
                 * buffer size.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, infl: java.util.zip.Inflater, bufLen: number)
                // @ts-ignore
                protected inf: java.util.zip.Inflater;
                // @ts-ignore
                protected buf: number[];
                /**
                 * Writes any remaining uncompressed data to the output stream and closes
                 * the underlying output stream.
                 */
                // @ts-ignore
                public close(): void;
                /**
                 * Flushes this output stream, forcing any pending buffered output bytes to be
                 * written.
                 */
                // @ts-ignore
                public flush(): void;
                /**
                 * Finishes writing uncompressed data to the output stream without closing
                 * the underlying stream.  Use this method when applying multiple filters in
                 * succession to the same output stream.
                 */
                // @ts-ignore
                public finish(): void;
                /**
                 * Writes a byte to the uncompressed output stream.
                 */
                // @ts-ignore
                public write(b: number): void;
                /**
                 * Writes an array of bytes to the uncompressed output stream.
                 */
                // @ts-ignore
                public write(b: number, off: number, len: number): void;
            }
        }
    }
}
