// @ts-nocheck
declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class ZipOutputStream extends java.util.zip.DeflaterOutputStream {
                /**
                 * Creates a new ZIP output stream.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used
                 * to encode the entry names and comments.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Creates a new ZIP output stream.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, charset: java.nio.charset.Charset)
                // @ts-ignore
                public static STORED: number;
                // @ts-ignore
                public static DEFLATED: number;
                /**
                 * Sets the ZIP file comment.
                 */
                // @ts-ignore
                public setComment(comment: string): void;
                /**
                 * Sets the default compression method for subsequent entries. This
                 * default will be used whenever the compression method is not specified
                 * for an individual ZIP file entry, and is initially set to DEFLATED.
                 */
                // @ts-ignore
                public setMethod(method: number): void;
                /**
                 * Sets the compression level for subsequent entries which are DEFLATED.
                 * The default setting is DEFAULT_COMPRESSION.
                 */
                // @ts-ignore
                public setLevel(level: number): void;
                /**
                 * Begins writing a new ZIP file entry and positions the stream to the
                 * start of the entry data. Closes the current entry if still active.
                 * The default compression method will be used if no compression method
                 * was specified for the entry, and the current time will be used if
                 * the entry has no set modification time.
                 */
                // @ts-ignore
                public putNextEntry(e: java.util.zip.ZipEntry): void;
                /**
                 * Closes the current ZIP entry and positions the stream for writing
                 * the next entry.
                 */
                // @ts-ignore
                public closeEntry(): void;
                /**
                 * Writes an array of bytes to the current ZIP entry data. This method
                 * will block until all the bytes are written.
                 */
                // @ts-ignore
                public write(b: number, off: number, len: number): void;
                /**
                 * Finishes writing the contents of the ZIP output stream without closing
                 * the underlying stream. Use this method when applying multiple filters
                 * in succession to the same output stream.
                 */
                // @ts-ignore
                public finish(): void;
                /**
                 * Closes the ZIP output stream as well as the stream being filtered.
                 */
                // @ts-ignore
                public close(): void;
            }
        }
    }
}
