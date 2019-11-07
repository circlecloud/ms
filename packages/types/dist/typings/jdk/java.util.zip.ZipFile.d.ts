declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class ZipFile extends java.lang.Object {
                /**
                 * Opens a zip file for reading.
                 * <p>First, if there is a security manager, its <code>checkRead</code>
                 * method is called with the <code>name</code> argument as its argument
                 * to ensure the read is allowed.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used to
                 * decode the entry names and comments.
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Opens a new <code>ZipFile</code> to read from the specified
                 * <code>File</code> object in the specified mode.  The mode argument
                 * must be either <tt>OPEN_READ</tt> or <tt>OPEN_READ | OPEN_DELETE</tt>.
                 * <p>First, if there is a security manager, its <code>checkRead</code>
                 * method is called with the <code>name</code> argument as its argument to
                 * ensure the read is allowed.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used to
                 * decode the entry names and comments
                 */
                // @ts-ignore
                constructor(file: java.io.File, mode: number)
                /**
                 * Opens a ZIP file for reading given the specified File object.
                 * <p>The UTF-8 {@link java.nio.charset.Charset charset} is used to
                 * decode the entry names and comments.
                 */
                // @ts-ignore
                constructor(file: java.io.File)
                /**
                 * Opens a new <code>ZipFile</code> to read from the specified
                 * <code>File</code> object in the specified mode.  The mode argument
                 * must be either <tt>OPEN_READ</tt> or <tt>OPEN_READ | OPEN_DELETE</tt>.
                 * <p>First, if there is a security manager, its <code>checkRead</code>
                 * method is called with the <code>name</code> argument as its argument to
                 * ensure the read is allowed.
                 */
                // @ts-ignore
                constructor(file: java.io.File, mode: number, charset: java.nio.charset.Charset)
                /**
                 * Opens a zip file for reading.
                 * <p>First, if there is a security manager, its <code>checkRead</code>
                 * method is called with the <code>name</code> argument as its argument
                 * to ensure the read is allowed.
                 */
                // @ts-ignore
                constructor(name: string, charset: java.nio.charset.Charset)
                /**
                 * Opens a ZIP file for reading given the specified File object.
                 */
                // @ts-ignore
                constructor(file: java.io.File, charset: java.nio.charset.Charset)
                // @ts-ignore
                public static OPEN_READ: number;
                // @ts-ignore
                public static OPEN_DELETE: number;
                /**
                 * Returns the zip file comment, or null if none.
                 */
                // @ts-ignore
                public getComment(): string;
                /**
                 * Returns the zip file entry for the specified name, or null
                 * if not found.
                 */
                // @ts-ignore
                public getEntry(name: string): java.util.zip.ZipEntry;
                /**
                 * Returns an input stream for reading the contents of the specified
                 * zip file entry.
                 * <p> Closing this ZIP file will, in turn, close all input
                 * streams that have been returned by invocations of this method.
                 */
                // @ts-ignore
                public getInputStream(entry: java.util.zip.ZipEntry): java.io.InputStream;
                /**
                 * Returns the path name of the ZIP file.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Returns an enumeration of the ZIP file entries.
                 */
                // @ts-ignore
                public entries(): java.util.Enumeration;
                /**
                 * Return an ordered {@code Stream} over the ZIP file entries.
                 * Entries appear in the {@code Stream} in the order they appear in
                 * the central directory of the ZIP file.
                 */
                // @ts-ignore
                public stream(): java.util.stream.Stream;
                /**
                 * Returns the number of entries in the ZIP file.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Closes the ZIP file.
                 * <p> Closing this ZIP file will close all of the input streams
                 * previously returned by invocations of the {@link #getInputStream
                 * getInputStream} method.
                 */
                // @ts-ignore
                public close(): void;
                /**
                 * Ensures that the system resources held by this ZipFile object are
                 * released when there are no more references to it.
                 * <p>
                 * Since the time when GC would invoke this method is undetermined,
                 * it is strongly recommended that applications invoke the <code>close</code>
                 * method as soon they have finished accessing this <code>ZipFile</code>.
                 * This will prevent holding up system resources for an undetermined
                 * length of time.
                 */
                // @ts-ignore
                protected finalize(): void;
            }
        }
    }
}
