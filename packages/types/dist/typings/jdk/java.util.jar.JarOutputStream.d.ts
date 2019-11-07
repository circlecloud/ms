// @ts-nocheck
declare namespace java {
    namespace util {
        namespace jar {
            // @ts-ignore
             class JarOutputStream extends java.util.zip.ZipOutputStream {
                /**
                 * Creates a new <code>JarOutputStream</code> with the specified
                 * <code>Manifest</code>. The manifest is written as the first
                 * entry to the output stream.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream, man: java.util.jar.Manifest)
                /**
                 * Creates a new <code>JarOutputStream</code> with no manifest.
                 */
                // @ts-ignore
                constructor(out: java.io.OutputStream)
                /**
                 * Begins writing a new JAR file entry and positions the stream
                 * to the start of the entry data. This method will also close
                 * any previous entry. The default compression method will be
                 * used if no compression method was specified for the entry.
                 * The current time will be used if the entry has no set modification
                 * time.
                 */
                // @ts-ignore
                public putNextEntry(ze: java.util.zip.ZipEntry): void;
            }
        }
    }
}
