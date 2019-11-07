declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class InflaterInputStream extends java.io.FilterInputStream {
                /**
                 * Creates a new input stream with the specified decompressor and
                 * buffer size.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, inf: java.util.zip.Inflater, size: number)
                /**
                 * Creates a new input stream with the specified decompressor and a
                 * default buffer size.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, inf: java.util.zip.Inflater)
                /**
                 * Creates a new input stream with a default decompressor and buffer size.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream)
                // @ts-ignore
                protected inf: java.util.zip.Inflater;
                // @ts-ignore
                protected buf: number[];
                // @ts-ignore
                protected len: number;
                /**
                 * Reads a byte of uncompressed data. This method will block until
                 * enough input is available for decompression.
                 */
                // @ts-ignore
                public read(): number;
                /**
                 * Reads uncompressed data into an array of bytes. If <code>len</code> is not
                 * zero, the method will block until some input can be decompressed; otherwise,
                 * no bytes are read and <code>0</code> is returned.
                 */
                // @ts-ignore
                public read(b: number, off: number, len: number): number;
                /**
                 * Returns 0 after EOF has been reached, otherwise always return 1.
                 * <p>
                 * Programs should not count on this method to return the actual number
                 * of bytes that could be read without blocking.
                 */
                // @ts-ignore
                public available(): number;
                /**
                 * Skips specified number of bytes of uncompressed data.
                 */
                // @ts-ignore
                public skip(n: number): number;
                /**
                 * Closes this input stream and releases any system resources associated
                 * with the stream.
                 */
                // @ts-ignore
                public close(): void;
                /**
                 * Fills input buffer with more data to decompress.
                 */
                // @ts-ignore
                protected fill(): void;
                /**
                 * Tests if this input stream supports the <code>mark</code> and
                 * <code>reset</code> methods. The <code>markSupported</code>
                 * method of <code>InflaterInputStream</code> returns
                 * <code>false</code>.
                 */
                // @ts-ignore
                public markSupported(): boolean;
                /**
                 * Marks the current position in this input stream.
                 * <p> The <code>mark</code> method of <code>InflaterInputStream</code>
                 * does nothing.
                 */
                // @ts-ignore
                public mark(readlimit: number): void;
                /**
                 * Repositions this stream to the position at the time the
                 * <code>mark</code> method was last called on this input stream.
                 * <p> The method <code>reset</code> for class
                 * <code>InflaterInputStream</code> does nothing except throw an
                 * <code>IOException</code>.
                 */
                // @ts-ignore
                public reset(): void;
            }
        }
    }
}
