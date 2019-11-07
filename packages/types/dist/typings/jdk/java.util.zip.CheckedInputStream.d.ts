// @ts-nocheck
declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class CheckedInputStream extends java.io.FilterInputStream {
                /**
                 * Creates an input stream using the specified Checksum.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, cksum: java.util.zip.Checksum)
                /**
                 * Reads a byte. Will block if no input is available.
                 */
                // @ts-ignore
                public read(): number;
                /**
                 * Reads into an array of bytes. If <code>len</code> is not zero, the method
                 * blocks until some input is available; otherwise, no
                 * bytes are read and <code>0</code> is returned.
                 */
                // @ts-ignore
                public read(buf: number, off: number, len: number): number;
                /**
                 * Skips specified number of bytes of input.
                 */
                // @ts-ignore
                public skip(n: number): number;
                /**
                 * Returns the Checksum for this input stream.
                 */
                // @ts-ignore
                public getChecksum(): java.util.zip.Checksum;
            }
        }
    }
}
