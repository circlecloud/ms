// @ts-nocheck
declare namespace java {
    namespace util {
        namespace jar {
            // @ts-ignore
             class JarFile extends java.util.zip.ZipFile {
                /**
                 * Creates a new <code>JarFile</code> to read from the specified
                 * file <code>name</code>. The <code>JarFile</code> will be verified if
                 * it is signed.
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Creates a new <code>JarFile</code> to read from the specified
                 * file <code>name</code>.
                 */
                // @ts-ignore
                constructor(name: string, verify: boolean)
                /**
                 * Creates a new <code>JarFile</code> to read from the specified
                 * <code>File</code> object. The <code>JarFile</code> will be verified if
                 * it is signed.
                 */
                // @ts-ignore
                constructor(file: java.io.File)
                /**
                 * Creates a new <code>JarFile</code> to read from the specified
                 * <code>File</code> object.
                 */
                // @ts-ignore
                constructor(file: java.io.File, verify: boolean)
                /**
                 * Creates a new <code>JarFile</code> to read from the specified
                 * <code>File</code> object in the specified mode.  The mode argument
                 * must be either <tt>OPEN_READ</tt> or <tt>OPEN_READ | OPEN_DELETE</tt>.
                 */
                // @ts-ignore
                constructor(file: java.io.File, verify: boolean, mode: number)
                // @ts-ignore
                public static MANIFEST_NAME: string;
                /**
                 * Returns the jar file manifest, or <code>null</code> if none.
                 */
                // @ts-ignore
                public getManifest(): java.util.jar.Manifest;
                /**
                 * Returns the <code>JarEntry</code> for the given entry name or
                 * <code>null</code> if not found.
                 */
                // @ts-ignore
                public getJarEntry(name: string): java.util.jar.JarEntry;
                /**
                 * Returns the <code>ZipEntry</code> for the given entry name or
                 * <code>null</code> if not found.
                 */
                // @ts-ignore
                public getEntry(name: string): java.util.zip.ZipEntry;
                /**
                 * Returns an enumeration of the zip file entries.
                 */
                // @ts-ignore
                public entries(): java.util.Enumeration;
                // @ts-ignore
                public stream(): java.util.stream.Stream;
                /**
                 * Returns an input stream for reading the contents of the specified
                 * zip file entry.
                 */
                // @ts-ignore
                public getInputStream(ze: java.util.zip.ZipEntry): java.io.InputStream;
            }
        }
    }
}
