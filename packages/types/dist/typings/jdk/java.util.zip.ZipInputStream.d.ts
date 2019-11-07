// @ts-nocheck
declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class ZipInputStream extends java.util.zip.InflaterInputStream {
                /**
                 * Creates a new ZIP input stream.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used to
                 * decode the entry names.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream)
                /**
                 * Creates a new ZIP input stream.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, charset: java.nio.charset.Charset)
                /**
                 * Reads the next ZIP file entry and positions the stream at the
                 * beginning of the entry data.
                 */
                // @ts-ignore
                public getNextEntry(): java.util.zip.ZipEntry;
                /**
                 * Closes the current ZIP entry and positions the stream for reading the
                 * next entry.
                 */
                // @ts-ignore
                public closeEntry(): void;
                /**
                 * Returns 0 after EOF has reached for the current entry data,
                 * otherwise always return 1.
                 * <p>
                 * Programs should not count on this method to return the actual number
                 * of bytes that could be read without blocking.
                 */
                // @ts-ignore
                public available(): number;
                /**
                 * Reads from the current ZIP entry into an array of bytes.
                 * If <code>len</code> is not zero, the method
                 * blocks until some input is available; otherwise, no
                 * bytes are read and <code>0</code> is returned.
                 */
                // @ts-ignore
                public read(b: number, off: number, len: number): number;
                /**
                 * Skips specified number of bytes in the current ZIP entry.
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
                 * Creates a new <code>ZipEntry</code> object for the specified
                 * entry name.
                 */
                // @ts-ignore
                protected createZipEntry(name: string): java.util.zip.ZipEntry;
            }
        }
    }
}
