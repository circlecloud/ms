declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class GZIPInputStream extends java.util.zip.InflaterInputStream {
                /**
                 * Creates a new input stream with the specified buffer size.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, size: number)
                /**
                 * Creates a new input stream with a default buffer size.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream)
                // @ts-ignore
                protected crc: java.util.zip.CRC32;
                // @ts-ignore
                protected eos: boolean;
                // @ts-ignore
                public static GZIP_MAGIC: number;
                /**
                 * Reads uncompressed data into an array of bytes. If <code>len</code> is not
                 * zero, the method will block until some input can be decompressed; otherwise,
                 * no bytes are read and <code>0</code> is returned.
                 */
                // @ts-ignore
                public read(buf: number, off: number, len: number): number;
                /**
                 * Closes this input stream and releases any system resources associated
                 * with the stream.
                 */
                // @ts-ignore
                public close(): void;
            }
        }
    }
}
