// @ts-nocheck
declare namespace java {
    namespace util {
        namespace jar {
            // @ts-ignore
             class JarInputStream extends java.util.zip.ZipInputStream {
                /**
                 * Creates a new <code>JarInputStream</code> and reads the optional
                 * manifest. If a manifest is present, also attempts to verify
                 * the signatures if the JarInputStream is signed.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream)
                /**
                 * Creates a new <code>JarInputStream</code> and reads the optional
                 * manifest. If a manifest is present and verify is true, also attempts
                 * to verify the signatures if the JarInputStream is signed.
                 */
                // @ts-ignore
                constructor(input: java.io.InputStream, verify: boolean)
                /**
                 * Returns the <code>Manifest</code> for this JAR file, or
                 * <code>null</code> if none.
                 */
                // @ts-ignore
                public getManifest(): java.util.jar.Manifest;
                /**
                 * Reads the next ZIP file entry and positions the stream at the
                 * beginning of the entry data. If verification has been enabled,
                 * any invalid signature detected while positioning the stream for
                 * the next entry will result in an exception.
                 */
                // @ts-ignore
                public getNextEntry(): java.util.zip.ZipEntry;
                /**
                 * Reads the next JAR file entry and positions the stream at the
                 * beginning of the entry data. If verification has been enabled,
                 * any invalid signature detected while positioning the stream for
                 * the next entry will result in an exception.
                 */
                // @ts-ignore
                public getNextJarEntry(): java.util.jar.JarEntry;
                /**
                 * Reads from the current JAR file entry into an array of bytes.
                 * If <code>len</code> is not zero, the method
                 * blocks until some input is available; otherwise, no
                 * bytes are read and <code>0</code> is returned.
                 * If verification has been enabled, any invalid signature
                 * on the current entry will be reported at some point before the
                 * end of the entry is reached.
                 */
                // @ts-ignore
                public read(b: number, off: number, len: number): number;
                /**
                 * Creates a new <code>JarEntry</code> (<code>ZipEntry</code>) for the
                 * specified JAR file entry name. The manifest attributes of
                 * the specified JAR file entry name will be copied to the new
                 * <CODE>JarEntry</CODE>.
                 */
                // @ts-ignore
                protected createZipEntry(name: string): java.util.zip.ZipEntry;
            }
        }
    }
}
