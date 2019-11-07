// @ts-nocheck
declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class CheckedOutputStream extends java.io.FilterOutputStream {
                /**
                 * Creates an output stream with the specified Checksum.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, cksum: java.util.zip.Checksum)
                /**
                 * Writes a byte. Will block until the byte is actually written.
                 */
                // @ts-ignore
                public write(b: number): void;
                /**
                 * Writes an array of bytes. Will block until the bytes are
                 * actually written.
                 */
                // @ts-ignore
                public write(b: number, off: number, len: number): void;
                /**
                 * Returns the Checksum for this output stream.
                 */
                // @ts-ignore
                public getChecksum(): java.util.zip.Checksum;
            }
        }
    }
}
